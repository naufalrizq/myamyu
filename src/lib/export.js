/**
 * Export utilities untuk hasil stock opname
 * - Excel: pakai ExcelJS (generate di browser via ArrayBuffer)
 * - PDF: pakai jsPDF + jsPDF-AutoTable
 */

import ExcelJS from "exceljs";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { fmtDate, fmtIDR } from "./inventory";

// ── Helpers ───────────────────────────────────────────────────────────────────

function diffLabel(diff) {
  if (diff === null || diff === undefined) return "Belum dihitung";
  if (diff === 0) return "Sesuai";
  return diff > 0 ? `+${diff} (surplus)` : `${diff} (kurang)`;
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// ── Excel Export ──────────────────────────────────────────────────────────────

export async function exportOpnameToExcel(session) {
  const wb = new ExcelJS.Workbook();
  wb.creator = "MyaMyu Pet Store";
  wb.created = new Date();

  // ── Sheet 1: Ringkasan ──────────────────────────────────────────────────────
  const summary = wb.addWorksheet("Ringkasan");

  // Header branding
  summary.mergeCells("A1:F1");
  const brandCell = summary.getCell("A1");
  brandCell.value = "MyaMyu Pet Store — Laporan Stock Opname";
  brandCell.font = { bold: true, size: 14, color: { argb: "FF2EC4B6" } };
  brandCell.alignment = { horizontal: "center" };

  summary.addRow([]);

  // Info sesi
  const infoRows = [
    ["Kode Sesi", session.code],
    ["Judul", session.title || "-"],
    ["Status", session.status === "completed" ? "Selesai" : "Berjalan"],
    ["Dibuat oleh", session.creator?.name || "-"],
    ["Tanggal mulai", session.startedAt ? fmtDate(session.startedAt) : "-"],
    ["Tanggal selesai", session.completedAt ? fmtDate(session.completedAt) : "-"],
    ["Disetujui oleh", session.approver?.name || "-"],
    ["Catatan", session.notes || "-"],
  ];

  infoRows.forEach(([label, value]) => {
    const row = summary.addRow([label, value]);
    row.getCell(1).font = { bold: true };
    row.getCell(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFCBF3F0" } };
  });

  summary.addRow([]);

  // Statistik
  const items = session.items || [];
  const counted = items.filter((i) => i.physicalStock !== null);
  const diffs = counted.filter((i) => i.physicalStock !== i.systemStock);
  const surplus = diffs.filter((i) => i.physicalStock > i.systemStock);
  const deficit = diffs.filter((i) => i.physicalStock < i.systemStock);

  const statsRows = [
    ["Total Produk", items.length],
    ["Sudah Dihitung", counted.length],
    ["Belum Dihitung", items.length - counted.length],
    ["Sesuai", counted.length - diffs.length],
    ["Ada Selisih", diffs.length],
    ["Surplus (+)", surplus.length],
    ["Kurang (−)", deficit.length],
  ];

  const statsHeader = summary.addRow(["Statistik", "Jumlah"]);
  statsHeader.eachCell((cell) => {
    cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
    cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF2EC4B6" } };
  });

  statsRows.forEach(([label, value]) => {
    const row = summary.addRow([label, value]);
    row.getCell(1).font = { bold: true };
  });

  summary.getColumn("A").width = 25;
  summary.getColumn("B").width = 30;

  // ── Sheet 2: Detail Items ───────────────────────────────────────────────────
  const detail = wb.addWorksheet("Detail Opname");

  const headerRow = detail.addRow([
    "No", "SKU", "Nama Produk", "Kategori", "Satuan",
    "Stok Sistem", "Stok Fisik", "Selisih", "Status", "Catatan",
  ]);

  headerRow.eachCell((cell) => {
    cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
    cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF2EC4B6" } };
    cell.alignment = { horizontal: "center" };
    cell.border = {
      bottom: { style: "thin", color: { argb: "FF2EC4B6" } },
    };
  });

  items.forEach((item, idx) => {
    const p = item.product || {};
    const diff = item.physicalStock !== null && item.physicalStock !== undefined
      ? item.physicalStock - item.systemStock
      : null;

    const row = detail.addRow([
      idx + 1,
      p.sku || "-",
      p.name || "-",
      p.category?.name || "-",
      p.unit || "pcs",
      item.systemStock,
      item.physicalStock !== null && item.physicalStock !== undefined ? item.physicalStock : "—",
      diff !== null ? diff : "—",
      diff === null ? "Belum dihitung" : diff === 0 ? "Sesuai" : diff > 0 ? "Surplus" : "Kurang",
      item.note || "",
    ]);

    // Warna baris berdasarkan status
    if (diff !== null && diff !== 0) {
      const color = diff > 0 ? "FFD1FAE5" : "FFFEE2E2";
      row.eachCell((cell) => {
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: color } };
      });
    }

    row.getCell(6).alignment = { horizontal: "center" }; // stok sistem
    row.getCell(7).alignment = { horizontal: "center" }; // stok fisik
    row.getCell(8).alignment = { horizontal: "center" }; // selisih
    row.getCell(9).alignment = { horizontal: "center" }; // status
  });

  // Column widths
  [6, 8, 10, 15, 8, 12, 10, 10, 14, 25].forEach((w, i) => {
    detail.getColumn(i + 1).width = w;
  });

  // Freeze header
  detail.views = [{ state: "frozen", xSplit: 0, ySplit: 1 }];

  // Auto filter
  detail.autoFilter = { from: "A1", to: "J1" };

  // ── Sheet 3: Hanya Selisih ──────────────────────────────────────────────────
  const diffSheet = wb.addWorksheet("Selisih Saja");

  const diffHeader = diffSheet.addRow([
    "No", "SKU", "Nama Produk", "Stok Sistem", "Stok Fisik", "Selisih", "Nilai Selisih (Rp)", "Catatan",
  ]);
  diffHeader.eachCell((cell) => {
    cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
    cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFF9F1C" } };
    cell.alignment = { horizontal: "center" };
  });

  const diffItems = items.filter(
    (i) => i.physicalStock !== null && i.physicalStock !== undefined && i.physicalStock !== i.systemStock
  );

  diffItems.forEach((item, idx) => {
    const p = item.product || {};
    const diff = item.physicalStock - item.systemStock;
    const nilaiSelisih = diff * Number(p.purchasePrice || 0);

    const row = diffSheet.addRow([
      idx + 1,
      p.sku || "-",
      p.name || "-",
      item.systemStock,
      item.physicalStock,
      diff,
      nilaiSelisih,
      item.note || "",
    ]);

    const color = diff > 0 ? "FFD1FAE5" : "FFFEE2E2";
    row.eachCell((cell) => {
      cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: color } };
    });

    row.getCell(7).numFmt = '#,##0';
  });

  // Total nilai selisih
  diffSheet.addRow([]);
  const totalNilai = diffItems.reduce((s, i) => s + (i.physicalStock - i.systemStock) * Number(i.product?.purchasePrice || 0), 0);
  const totalRow = diffSheet.addRow(["", "", "TOTAL NILAI SELISIH", "", "", "", totalNilai, ""]);
  totalRow.getCell(3).font = { bold: true };
  totalRow.getCell(7).font = { bold: true };
  totalRow.getCell(7).numFmt = '#,##0';

  [6, 8, 25, 12, 12, 10, 18, 25].forEach((w, i) => {
    diffSheet.getColumn(i + 1).width = w;
  });

  // Generate file
  const buffer = await wb.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  triggerDownload(blob, `Opname_${session.code}_${new Date().toISOString().slice(0, 10)}.xlsx`);
}

// ── PDF Export ────────────────────────────────────────────────────────────────

export function exportOpnameToPdf(session) {
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });

  const items = session.items || [];
  const counted = items.filter((i) => i.physicalStock !== null);
  const diffs = counted.filter((i) => i.physicalStock !== i.systemStock);

  const PRIMARY = [46, 196, 182];   // #2EC4B6 tosca
  const ACCENT = [255, 159, 28];    // #FF9F1C orange

  // ── Header ──────────────────────────────────────────────────────────────────
  doc.setFillColor(...PRIMARY);
  doc.rect(0, 0, 297, 22, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("MyaMyu Pet Store", 14, 10);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("Laporan Stock Opname", 14, 16);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(9);
  doc.text(`Dicetak: ${fmtDate(new Date().toISOString())}`, 200, 10);

  // ── Info Sesi ────────────────────────────────────────────────────────────────
  doc.setTextColor(30, 30, 30);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text(`${session.code} — ${session.title || ""}`, 14, 32);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  const infoLeft = [
    `Status: ${session.status === "completed" ? "Selesai" : "Berjalan"}`,
    `Dibuat oleh: ${session.creator?.name || "-"}`,
    `Mulai: ${session.startedAt ? fmtDate(session.startedAt) : "-"}`,
  ];
  const infoRight = [
    `Disetujui: ${session.approver?.name || "-"}`,
    `Selesai: ${session.completedAt ? fmtDate(session.completedAt) : "-"}`,
  ];

  infoLeft.forEach((t, i) => doc.text(t, 14, 38 + i * 5));
  infoRight.forEach((t, i) => doc.text(t, 120, 38 + i * 5));

  // ── Statistik ────────────────────────────────────────────────────────────────
  const statsY = 57;
  const statBoxes = [
    { label: "Total Produk", value: items.length, color: PRIMARY },
    { label: "Sudah Dihitung", value: counted.length, color: PRIMARY },
    { label: "Ada Selisih", value: diffs.length, color: ACCENT },
    { label: "Belum Dihitung", value: items.length - counted.length, color: [200, 100, 100] },
  ];

  statBoxes.forEach(({ label, value, color }, i) => {
    const x = 14 + i * 42;
    doc.setFillColor(...color);
    doc.roundedRect(x, statsY, 38, 16, 2, 2, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(String(value), x + 19, statsY + 8, { align: "center" });
    doc.setFontSize(7);
    doc.setFont("helvetica", "normal");
    doc.text(label, x + 19, statsY + 13, { align: "center" });
  });

  // ── Tabel Detail ──────────────────────────────────────────────────────────────
  doc.setTextColor(30, 30, 30);

  const tableBody = items.map((item, idx) => {
    const p = item.product || {};
    const diff = item.physicalStock !== null && item.physicalStock !== undefined
      ? item.physicalStock - item.systemStock
      : null;
    return [
      idx + 1,
      p.sku || "-",
      p.name || "-",
      p.unit || "pcs",
      item.systemStock,
      item.physicalStock !== null && item.physicalStock !== undefined ? item.physicalStock : "—",
      diff !== null ? (diff >= 0 ? `+${diff}` : String(diff)) : "—",
      diff === null ? "Belum" : diff === 0 ? "Sesuai" : diff > 0 ? "+ Surplus" : "- Kurang",
    ];
  });

  autoTable(doc, {
    startY: 80,
    head: [["No", "SKU", "Nama Produk", "Satuan", "Stok Sistem", "Stok Fisik", "Selisih", "Status"]],
    body: tableBody,
    theme: "grid",
    headStyles: {
      fillColor: PRIMARY,
      textColor: [255, 255, 255],
      fontStyle: "bold",
      fontSize: 8,
      halign: "center",
    },
    bodyStyles: { fontSize: 7.5 },
    columnStyles: {
      0: { halign: "center", cellWidth: 8 },
      1: { halign: "center", cellWidth: 22 },
      2: { cellWidth: 70 },
      3: { halign: "center", cellWidth: 15 },
      4: { halign: "center", cellWidth: 22 },
      5: { halign: "center", cellWidth: 22 },
      6: { halign: "center", cellWidth: 18 },
      7: { halign: "center", cellWidth: 28 },
    },
    didParseCell(data) {
      if (data.section === "body" && data.column.index === 7) {
        const val = String(data.cell.raw);
        if (val.includes("Surplus")) {
          data.cell.styles.textColor = [5, 150, 105];
          data.cell.styles.fontStyle = "bold";
        } else if (val.includes("Kurang")) {
          data.cell.styles.textColor = [220, 38, 38];
          data.cell.styles.fontStyle = "bold";
        }
      }
      if (data.section === "body" && data.column.index === 6) {
        const raw = data.cell.raw;
        if (String(raw).startsWith("+") && raw !== "+0") {
          data.cell.styles.textColor = [5, 150, 105];
        } else if (String(raw).startsWith("-")) {
          data.cell.styles.textColor = [220, 38, 38];
        }
      }
    },
    alternateRowStyles: { fillColor: [248, 250, 252] },
    margin: { left: 14, right: 14 },
  });

  // ── Footer ───────────────────────────────────────────────────────────────────
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(7);
    doc.setTextColor(150, 150, 150);
    doc.text(
      `Halaman ${i} dari ${pageCount} — MyaMyu Pet Store`,
      148, 205, { align: "center" }
    );
  }

  doc.save(`Opname_${session.code}_${new Date().toISOString().slice(0, 10)}.pdf`);
}
