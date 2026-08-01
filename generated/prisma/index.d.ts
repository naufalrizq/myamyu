
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductBatch
 * 
 */
export type ProductBatch = $Result.DefaultSelection<Prisma.$ProductBatchPayload>
/**
 * Model StockMovement
 * 
 */
export type StockMovement = $Result.DefaultSelection<Prisma.$StockMovementPayload>
/**
 * Model OpnameSession
 * 
 */
export type OpnameSession = $Result.DefaultSelection<Prisma.$OpnameSessionPayload>
/**
 * Model OpnameItem
 * 
 */
export type OpnameItem = $Result.DefaultSelection<Prisma.$OpnameItemPayload>
/**
 * Model MarketplaceAccount
 * 
 */
export type MarketplaceAccount = $Result.DefaultSelection<Prisma.$MarketplaceAccountPayload>
/**
 * Model ProductChannelMapping
 * 
 */
export type ProductChannelMapping = $Result.DefaultSelection<Prisma.$ProductChannelMappingPayload>
/**
 * Model StockSyncJob
 * 
 */
export type StockSyncJob = $Result.DefaultSelection<Prisma.$StockSyncJobPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productBatch`: Exposes CRUD operations for the **ProductBatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductBatches
    * const productBatches = await prisma.productBatch.findMany()
    * ```
    */
  get productBatch(): Prisma.ProductBatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stockMovement`: Exposes CRUD operations for the **StockMovement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockMovements
    * const stockMovements = await prisma.stockMovement.findMany()
    * ```
    */
  get stockMovement(): Prisma.StockMovementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.opnameSession`: Exposes CRUD operations for the **OpnameSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OpnameSessions
    * const opnameSessions = await prisma.opnameSession.findMany()
    * ```
    */
  get opnameSession(): Prisma.OpnameSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.opnameItem`: Exposes CRUD operations for the **OpnameItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OpnameItems
    * const opnameItems = await prisma.opnameItem.findMany()
    * ```
    */
  get opnameItem(): Prisma.OpnameItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marketplaceAccount`: Exposes CRUD operations for the **MarketplaceAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarketplaceAccounts
    * const marketplaceAccounts = await prisma.marketplaceAccount.findMany()
    * ```
    */
  get marketplaceAccount(): Prisma.MarketplaceAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productChannelMapping`: Exposes CRUD operations for the **ProductChannelMapping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductChannelMappings
    * const productChannelMappings = await prisma.productChannelMapping.findMany()
    * ```
    */
  get productChannelMapping(): Prisma.ProductChannelMappingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stockSyncJob`: Exposes CRUD operations for the **StockSyncJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockSyncJobs
    * const stockSyncJobs = await prisma.stockSyncJob.findMany()
    * ```
    */
  get stockSyncJob(): Prisma.StockSyncJobDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Supplier: 'Supplier',
    Category: 'Category',
    Product: 'Product',
    ProductBatch: 'ProductBatch',
    StockMovement: 'StockMovement',
    OpnameSession: 'OpnameSession',
    OpnameItem: 'OpnameItem',
    MarketplaceAccount: 'MarketplaceAccount',
    ProductChannelMapping: 'ProductChannelMapping',
    StockSyncJob: 'StockSyncJob'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "supplier" | "category" | "product" | "productBatch" | "stockMovement" | "opnameSession" | "opnameItem" | "marketplaceAccount" | "productChannelMapping" | "stockSyncJob"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductBatch: {
        payload: Prisma.$ProductBatchPayload<ExtArgs>
        fields: Prisma.ProductBatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductBatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductBatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBatchPayload>
          }
          findFirst: {
            args: Prisma.ProductBatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductBatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBatchPayload>
          }
          findMany: {
            args: Prisma.ProductBatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBatchPayload>[]
          }
          create: {
            args: Prisma.ProductBatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBatchPayload>
          }
          createMany: {
            args: Prisma.ProductBatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductBatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBatchPayload>[]
          }
          delete: {
            args: Prisma.ProductBatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBatchPayload>
          }
          update: {
            args: Prisma.ProductBatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBatchPayload>
          }
          deleteMany: {
            args: Prisma.ProductBatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductBatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductBatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBatchPayload>[]
          }
          upsert: {
            args: Prisma.ProductBatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBatchPayload>
          }
          aggregate: {
            args: Prisma.ProductBatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductBatch>
          }
          groupBy: {
            args: Prisma.ProductBatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductBatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductBatchCountArgs<ExtArgs>
            result: $Utils.Optional<ProductBatchCountAggregateOutputType> | number
          }
        }
      }
      StockMovement: {
        payload: Prisma.$StockMovementPayload<ExtArgs>
        fields: Prisma.StockMovementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockMovementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockMovementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          findFirst: {
            args: Prisma.StockMovementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockMovementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          findMany: {
            args: Prisma.StockMovementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>[]
          }
          create: {
            args: Prisma.StockMovementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          createMany: {
            args: Prisma.StockMovementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockMovementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>[]
          }
          delete: {
            args: Prisma.StockMovementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          update: {
            args: Prisma.StockMovementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          deleteMany: {
            args: Prisma.StockMovementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockMovementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StockMovementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>[]
          }
          upsert: {
            args: Prisma.StockMovementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          aggregate: {
            args: Prisma.StockMovementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockMovement>
          }
          groupBy: {
            args: Prisma.StockMovementGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockMovementGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockMovementCountArgs<ExtArgs>
            result: $Utils.Optional<StockMovementCountAggregateOutputType> | number
          }
        }
      }
      OpnameSession: {
        payload: Prisma.$OpnameSessionPayload<ExtArgs>
        fields: Prisma.OpnameSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OpnameSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpnameSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OpnameSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpnameSessionPayload>
          }
          findFirst: {
            args: Prisma.OpnameSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpnameSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OpnameSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpnameSessionPayload>
          }
          findMany: {
            args: Prisma.OpnameSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpnameSessionPayload>[]
          }
          create: {
            args: Prisma.OpnameSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpnameSessionPayload>
          }
          createMany: {
            args: Prisma.OpnameSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OpnameSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpnameSessionPayload>[]
          }
          delete: {
            args: Prisma.OpnameSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpnameSessionPayload>
          }
          update: {
            args: Prisma.OpnameSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpnameSessionPayload>
          }
          deleteMany: {
            args: Prisma.OpnameSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OpnameSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OpnameSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpnameSessionPayload>[]
          }
          upsert: {
            args: Prisma.OpnameSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpnameSessionPayload>
          }
          aggregate: {
            args: Prisma.OpnameSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpnameSession>
          }
          groupBy: {
            args: Prisma.OpnameSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OpnameSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OpnameSessionCountArgs<ExtArgs>
            result: $Utils.Optional<OpnameSessionCountAggregateOutputType> | number
          }
        }
      }
      OpnameItem: {
        payload: Prisma.$OpnameItemPayload<ExtArgs>
        fields: Prisma.OpnameItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OpnameItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpnameItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OpnameItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpnameItemPayload>
          }
          findFirst: {
            args: Prisma.OpnameItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpnameItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OpnameItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpnameItemPayload>
          }
          findMany: {
            args: Prisma.OpnameItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpnameItemPayload>[]
          }
          create: {
            args: Prisma.OpnameItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpnameItemPayload>
          }
          createMany: {
            args: Prisma.OpnameItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OpnameItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpnameItemPayload>[]
          }
          delete: {
            args: Prisma.OpnameItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpnameItemPayload>
          }
          update: {
            args: Prisma.OpnameItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpnameItemPayload>
          }
          deleteMany: {
            args: Prisma.OpnameItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OpnameItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OpnameItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpnameItemPayload>[]
          }
          upsert: {
            args: Prisma.OpnameItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpnameItemPayload>
          }
          aggregate: {
            args: Prisma.OpnameItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpnameItem>
          }
          groupBy: {
            args: Prisma.OpnameItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OpnameItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OpnameItemCountArgs<ExtArgs>
            result: $Utils.Optional<OpnameItemCountAggregateOutputType> | number
          }
        }
      }
      MarketplaceAccount: {
        payload: Prisma.$MarketplaceAccountPayload<ExtArgs>
        fields: Prisma.MarketplaceAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketplaceAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketplaceAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketplaceAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketplaceAccountPayload>
          }
          findFirst: {
            args: Prisma.MarketplaceAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketplaceAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketplaceAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketplaceAccountPayload>
          }
          findMany: {
            args: Prisma.MarketplaceAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketplaceAccountPayload>[]
          }
          create: {
            args: Prisma.MarketplaceAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketplaceAccountPayload>
          }
          createMany: {
            args: Prisma.MarketplaceAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketplaceAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketplaceAccountPayload>[]
          }
          delete: {
            args: Prisma.MarketplaceAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketplaceAccountPayload>
          }
          update: {
            args: Prisma.MarketplaceAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketplaceAccountPayload>
          }
          deleteMany: {
            args: Prisma.MarketplaceAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketplaceAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarketplaceAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketplaceAccountPayload>[]
          }
          upsert: {
            args: Prisma.MarketplaceAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketplaceAccountPayload>
          }
          aggregate: {
            args: Prisma.MarketplaceAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarketplaceAccount>
          }
          groupBy: {
            args: Prisma.MarketplaceAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketplaceAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketplaceAccountCountArgs<ExtArgs>
            result: $Utils.Optional<MarketplaceAccountCountAggregateOutputType> | number
          }
        }
      }
      ProductChannelMapping: {
        payload: Prisma.$ProductChannelMappingPayload<ExtArgs>
        fields: Prisma.ProductChannelMappingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductChannelMappingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductChannelMappingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductChannelMappingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductChannelMappingPayload>
          }
          findFirst: {
            args: Prisma.ProductChannelMappingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductChannelMappingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductChannelMappingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductChannelMappingPayload>
          }
          findMany: {
            args: Prisma.ProductChannelMappingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductChannelMappingPayload>[]
          }
          create: {
            args: Prisma.ProductChannelMappingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductChannelMappingPayload>
          }
          createMany: {
            args: Prisma.ProductChannelMappingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductChannelMappingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductChannelMappingPayload>[]
          }
          delete: {
            args: Prisma.ProductChannelMappingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductChannelMappingPayload>
          }
          update: {
            args: Prisma.ProductChannelMappingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductChannelMappingPayload>
          }
          deleteMany: {
            args: Prisma.ProductChannelMappingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductChannelMappingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductChannelMappingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductChannelMappingPayload>[]
          }
          upsert: {
            args: Prisma.ProductChannelMappingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductChannelMappingPayload>
          }
          aggregate: {
            args: Prisma.ProductChannelMappingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductChannelMapping>
          }
          groupBy: {
            args: Prisma.ProductChannelMappingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductChannelMappingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductChannelMappingCountArgs<ExtArgs>
            result: $Utils.Optional<ProductChannelMappingCountAggregateOutputType> | number
          }
        }
      }
      StockSyncJob: {
        payload: Prisma.$StockSyncJobPayload<ExtArgs>
        fields: Prisma.StockSyncJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockSyncJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockSyncJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockSyncJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockSyncJobPayload>
          }
          findFirst: {
            args: Prisma.StockSyncJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockSyncJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockSyncJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockSyncJobPayload>
          }
          findMany: {
            args: Prisma.StockSyncJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockSyncJobPayload>[]
          }
          create: {
            args: Prisma.StockSyncJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockSyncJobPayload>
          }
          createMany: {
            args: Prisma.StockSyncJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockSyncJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockSyncJobPayload>[]
          }
          delete: {
            args: Prisma.StockSyncJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockSyncJobPayload>
          }
          update: {
            args: Prisma.StockSyncJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockSyncJobPayload>
          }
          deleteMany: {
            args: Prisma.StockSyncJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockSyncJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StockSyncJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockSyncJobPayload>[]
          }
          upsert: {
            args: Prisma.StockSyncJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockSyncJobPayload>
          }
          aggregate: {
            args: Prisma.StockSyncJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockSyncJob>
          }
          groupBy: {
            args: Prisma.StockSyncJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockSyncJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockSyncJobCountArgs<ExtArgs>
            result: $Utils.Optional<StockSyncJobCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    supplier?: SupplierOmit
    category?: CategoryOmit
    product?: ProductOmit
    productBatch?: ProductBatchOmit
    stockMovement?: StockMovementOmit
    opnameSession?: OpnameSessionOmit
    opnameItem?: OpnameItemOmit
    marketplaceAccount?: MarketplaceAccountOmit
    productChannelMapping?: ProductChannelMappingOmit
    stockSyncJob?: StockSyncJobOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    stockMovements: number
    opnameSessions: number
    approvedOpname: number
    countedItems: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockMovements?: boolean | UserCountOutputTypeCountStockMovementsArgs
    opnameSessions?: boolean | UserCountOutputTypeCountOpnameSessionsArgs
    approvedOpname?: boolean | UserCountOutputTypeCountApprovedOpnameArgs
    countedItems?: boolean | UserCountOutputTypeCountCountedItemsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStockMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMovementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOpnameSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpnameSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApprovedOpnameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpnameSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCountedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpnameItemWhereInput
  }


  /**
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    stockMovements: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockMovements?: boolean | SupplierCountOutputTypeCountStockMovementsArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountStockMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMovementWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    batches: number
    stockMovements: number
    opnameItems: number
    channelMappings: number
    syncJobs: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batches?: boolean | ProductCountOutputTypeCountBatchesArgs
    stockMovements?: boolean | ProductCountOutputTypeCountStockMovementsArgs
    opnameItems?: boolean | ProductCountOutputTypeCountOpnameItemsArgs
    channelMappings?: boolean | ProductCountOutputTypeCountChannelMappingsArgs
    syncJobs?: boolean | ProductCountOutputTypeCountSyncJobsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountBatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductBatchWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountStockMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMovementWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOpnameItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpnameItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountChannelMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductChannelMappingWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSyncJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockSyncJobWhereInput
  }


  /**
   * Count Type OpnameSessionCountOutputType
   */

  export type OpnameSessionCountOutputType = {
    items: number
  }

  export type OpnameSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OpnameSessionCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * OpnameSessionCountOutputType without action
   */
  export type OpnameSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameSessionCountOutputType
     */
    select?: OpnameSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OpnameSessionCountOutputType without action
   */
  export type OpnameSessionCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpnameItemWhereInput
  }


  /**
   * Count Type MarketplaceAccountCountOutputType
   */

  export type MarketplaceAccountCountOutputType = {
    productMappings: number
    syncJobs: number
  }

  export type MarketplaceAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productMappings?: boolean | MarketplaceAccountCountOutputTypeCountProductMappingsArgs
    syncJobs?: boolean | MarketplaceAccountCountOutputTypeCountSyncJobsArgs
  }

  // Custom InputTypes
  /**
   * MarketplaceAccountCountOutputType without action
   */
  export type MarketplaceAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceAccountCountOutputType
     */
    select?: MarketplaceAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MarketplaceAccountCountOutputType without action
   */
  export type MarketplaceAccountCountOutputTypeCountProductMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductChannelMappingWhereInput
  }

  /**
   * MarketplaceAccountCountOutputType without action
   */
  export type MarketplaceAccountCountOutputTypeCountSyncJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockSyncJobWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    passwordHash: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    stockMovements?: boolean | User$stockMovementsArgs<ExtArgs>
    opnameSessions?: boolean | User$opnameSessionsArgs<ExtArgs>
    approvedOpname?: boolean | User$approvedOpnameArgs<ExtArgs>
    countedItems?: boolean | User$countedItemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockMovements?: boolean | User$stockMovementsArgs<ExtArgs>
    opnameSessions?: boolean | User$opnameSessionsArgs<ExtArgs>
    approvedOpname?: boolean | User$approvedOpnameArgs<ExtArgs>
    countedItems?: boolean | User$countedItemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      stockMovements: Prisma.$StockMovementPayload<ExtArgs>[]
      opnameSessions: Prisma.$OpnameSessionPayload<ExtArgs>[]
      approvedOpname: Prisma.$OpnameSessionPayload<ExtArgs>[]
      countedItems: Prisma.$OpnameItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      passwordHash: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stockMovements<T extends User$stockMovementsArgs<ExtArgs> = {}>(args?: Subset<T, User$stockMovementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    opnameSessions<T extends User$opnameSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$opnameSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpnameSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approvedOpname<T extends User$approvedOpnameArgs<ExtArgs> = {}>(args?: Subset<T, User$approvedOpnameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpnameSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    countedItems<T extends User$countedItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$countedItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpnameItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.stockMovements
   */
  export type User$stockMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    where?: StockMovementWhereInput
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    cursor?: StockMovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * User.opnameSessions
   */
  export type User$opnameSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameSession
     */
    select?: OpnameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameSession
     */
    omit?: OpnameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameSessionInclude<ExtArgs> | null
    where?: OpnameSessionWhereInput
    orderBy?: OpnameSessionOrderByWithRelationInput | OpnameSessionOrderByWithRelationInput[]
    cursor?: OpnameSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpnameSessionScalarFieldEnum | OpnameSessionScalarFieldEnum[]
  }

  /**
   * User.approvedOpname
   */
  export type User$approvedOpnameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameSession
     */
    select?: OpnameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameSession
     */
    omit?: OpnameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameSessionInclude<ExtArgs> | null
    where?: OpnameSessionWhereInput
    orderBy?: OpnameSessionOrderByWithRelationInput | OpnameSessionOrderByWithRelationInput[]
    cursor?: OpnameSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpnameSessionScalarFieldEnum | OpnameSessionScalarFieldEnum[]
  }

  /**
   * User.countedItems
   */
  export type User$countedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameItem
     */
    select?: OpnameItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameItem
     */
    omit?: OpnameItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameItemInclude<ExtArgs> | null
    where?: OpnameItemWhereInput
    orderBy?: OpnameItemOrderByWithRelationInput | OpnameItemOrderByWithRelationInput[]
    cursor?: OpnameItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpnameItemScalarFieldEnum | OpnameItemScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierAvgAggregateOutputType = {
    id: number | null
  }

  export type SupplierSumAggregateOutputType = {
    id: number | null
  }

  export type SupplierMinAggregateOutputType = {
    id: number | null
    name: string | null
    contactName: string | null
    phone: string | null
    email: string | null
    address: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: number | null
    name: string | null
    contactName: string | null
    phone: string | null
    email: string | null
    address: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    name: number
    contactName: number
    phone: number
    email: number
    address: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type SupplierAvgAggregateInputType = {
    id?: true
  }

  export type SupplierSumAggregateInputType = {
    id?: true
  }

  export type SupplierMinAggregateInputType = {
    id?: true
    name?: true
    contactName?: true
    phone?: true
    email?: true
    address?: true
    isActive?: true
    createdAt?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    name?: true
    contactName?: true
    phone?: true
    email?: true
    address?: true
    isActive?: true
    createdAt?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    name?: true
    contactName?: true
    phone?: true
    email?: true
    address?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _avg?: SupplierAvgAggregateInputType
    _sum?: SupplierSumAggregateInputType
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: number
    name: string
    contactName: string | null
    phone: string | null
    email: string | null
    address: string | null
    isActive: boolean
    createdAt: Date
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contactName?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    isActive?: boolean
    createdAt?: boolean
    stockMovements?: boolean | Supplier$stockMovementsArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contactName?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contactName?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectScalar = {
    id?: boolean
    name?: boolean
    contactName?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type SupplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "contactName" | "phone" | "email" | "address" | "isActive" | "createdAt", ExtArgs["result"]["supplier"]>
  export type SupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockMovements?: boolean | Supplier$stockMovementsArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SupplierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {
      stockMovements: Prisma.$StockMovementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      contactName: string | null
      phone: string | null
      email: string | null
      address: string | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SupplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {SupplierUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SupplierUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stockMovements<T extends Supplier$stockMovementsArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$stockMovementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Supplier model
   */
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'Int'>
    readonly name: FieldRef<"Supplier", 'String'>
    readonly contactName: FieldRef<"Supplier", 'String'>
    readonly phone: FieldRef<"Supplier", 'String'>
    readonly email: FieldRef<"Supplier", 'String'>
    readonly address: FieldRef<"Supplier", 'String'>
    readonly isActive: FieldRef<"Supplier", 'Boolean'>
    readonly createdAt: FieldRef<"Supplier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier createManyAndReturn
   */
  export type SupplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier updateManyAndReturn
   */
  export type SupplierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to delete.
     */
    limit?: number
  }

  /**
   * Supplier.stockMovements
   */
  export type Supplier$stockMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    where?: StockMovementWhereInput
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    cursor?: StockMovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    purchasePrice: Decimal | null
    sellingPrice: Decimal | null
    minStock: number | null
    currentStock: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    purchasePrice: Decimal | null
    sellingPrice: Decimal | null
    minStock: number | null
    currentStock: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    sku: string | null
    name: string | null
    categoryId: number | null
    unit: string | null
    purchasePrice: Decimal | null
    sellingPrice: Decimal | null
    minStock: number | null
    currentStock: number | null
    imageUrl: string | null
    isPerishable: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    sku: string | null
    name: string | null
    categoryId: number | null
    unit: string | null
    purchasePrice: Decimal | null
    sellingPrice: Decimal | null
    minStock: number | null
    currentStock: number | null
    imageUrl: string | null
    isPerishable: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    sku: number
    name: number
    categoryId: number
    unit: number
    purchasePrice: number
    sellingPrice: number
    minStock: number
    currentStock: number
    imageUrl: number
    isPerishable: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    categoryId?: true
    purchasePrice?: true
    sellingPrice?: true
    minStock?: true
    currentStock?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    categoryId?: true
    purchasePrice?: true
    sellingPrice?: true
    minStock?: true
    currentStock?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    sku?: true
    name?: true
    categoryId?: true
    unit?: true
    purchasePrice?: true
    sellingPrice?: true
    minStock?: true
    currentStock?: true
    imageUrl?: true
    isPerishable?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    sku?: true
    name?: true
    categoryId?: true
    unit?: true
    purchasePrice?: true
    sellingPrice?: true
    minStock?: true
    currentStock?: true
    imageUrl?: true
    isPerishable?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    sku?: true
    name?: true
    categoryId?: true
    unit?: true
    purchasePrice?: true
    sellingPrice?: true
    minStock?: true
    currentStock?: true
    imageUrl?: true
    isPerishable?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    sku: string
    name: string
    categoryId: number | null
    unit: string
    purchasePrice: Decimal
    sellingPrice: Decimal
    minStock: number
    currentStock: number
    imageUrl: string | null
    isPerishable: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    name?: boolean
    categoryId?: boolean
    unit?: boolean
    purchasePrice?: boolean
    sellingPrice?: boolean
    minStock?: boolean
    currentStock?: boolean
    imageUrl?: boolean
    isPerishable?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Product$categoryArgs<ExtArgs>
    batches?: boolean | Product$batchesArgs<ExtArgs>
    stockMovements?: boolean | Product$stockMovementsArgs<ExtArgs>
    opnameItems?: boolean | Product$opnameItemsArgs<ExtArgs>
    channelMappings?: boolean | Product$channelMappingsArgs<ExtArgs>
    syncJobs?: boolean | Product$syncJobsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    name?: boolean
    categoryId?: boolean
    unit?: boolean
    purchasePrice?: boolean
    sellingPrice?: boolean
    minStock?: boolean
    currentStock?: boolean
    imageUrl?: boolean
    isPerishable?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Product$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    name?: boolean
    categoryId?: boolean
    unit?: boolean
    purchasePrice?: boolean
    sellingPrice?: boolean
    minStock?: boolean
    currentStock?: boolean
    imageUrl?: boolean
    isPerishable?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Product$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    sku?: boolean
    name?: boolean
    categoryId?: boolean
    unit?: boolean
    purchasePrice?: boolean
    sellingPrice?: boolean
    minStock?: boolean
    currentStock?: boolean
    imageUrl?: boolean
    isPerishable?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sku" | "name" | "categoryId" | "unit" | "purchasePrice" | "sellingPrice" | "minStock" | "currentStock" | "imageUrl" | "isPerishable" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs>
    batches?: boolean | Product$batchesArgs<ExtArgs>
    stockMovements?: boolean | Product$stockMovementsArgs<ExtArgs>
    opnameItems?: boolean | Product$opnameItemsArgs<ExtArgs>
    channelMappings?: boolean | Product$channelMappingsArgs<ExtArgs>
    syncJobs?: boolean | Product$syncJobsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs> | null
      batches: Prisma.$ProductBatchPayload<ExtArgs>[]
      stockMovements: Prisma.$StockMovementPayload<ExtArgs>[]
      opnameItems: Prisma.$OpnameItemPayload<ExtArgs>[]
      channelMappings: Prisma.$ProductChannelMappingPayload<ExtArgs>[]
      syncJobs: Prisma.$StockSyncJobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sku: string
      name: string
      categoryId: number | null
      unit: string
      purchasePrice: Prisma.Decimal
      sellingPrice: Prisma.Decimal
      minStock: number
      currentStock: number
      imageUrl: string | null
      isPerishable: boolean
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends Product$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    batches<T extends Product$batchesArgs<ExtArgs> = {}>(args?: Subset<T, Product$batchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductBatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stockMovements<T extends Product$stockMovementsArgs<ExtArgs> = {}>(args?: Subset<T, Product$stockMovementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    opnameItems<T extends Product$opnameItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$opnameItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpnameItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    channelMappings<T extends Product$channelMappingsArgs<ExtArgs> = {}>(args?: Subset<T, Product$channelMappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductChannelMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    syncJobs<T extends Product$syncJobsArgs<ExtArgs> = {}>(args?: Subset<T, Product$syncJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockSyncJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly sku: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly categoryId: FieldRef<"Product", 'Int'>
    readonly unit: FieldRef<"Product", 'String'>
    readonly purchasePrice: FieldRef<"Product", 'Decimal'>
    readonly sellingPrice: FieldRef<"Product", 'Decimal'>
    readonly minStock: FieldRef<"Product", 'Int'>
    readonly currentStock: FieldRef<"Product", 'Int'>
    readonly imageUrl: FieldRef<"Product", 'String'>
    readonly isPerishable: FieldRef<"Product", 'Boolean'>
    readonly isActive: FieldRef<"Product", 'Boolean'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.category
   */
  export type Product$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Product.batches
   */
  export type Product$batchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBatch
     */
    select?: ProductBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBatch
     */
    omit?: ProductBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBatchInclude<ExtArgs> | null
    where?: ProductBatchWhereInput
    orderBy?: ProductBatchOrderByWithRelationInput | ProductBatchOrderByWithRelationInput[]
    cursor?: ProductBatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductBatchScalarFieldEnum | ProductBatchScalarFieldEnum[]
  }

  /**
   * Product.stockMovements
   */
  export type Product$stockMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    where?: StockMovementWhereInput
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    cursor?: StockMovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * Product.opnameItems
   */
  export type Product$opnameItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameItem
     */
    select?: OpnameItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameItem
     */
    omit?: OpnameItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameItemInclude<ExtArgs> | null
    where?: OpnameItemWhereInput
    orderBy?: OpnameItemOrderByWithRelationInput | OpnameItemOrderByWithRelationInput[]
    cursor?: OpnameItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpnameItemScalarFieldEnum | OpnameItemScalarFieldEnum[]
  }

  /**
   * Product.channelMappings
   */
  export type Product$channelMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductChannelMapping
     */
    select?: ProductChannelMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductChannelMapping
     */
    omit?: ProductChannelMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductChannelMappingInclude<ExtArgs> | null
    where?: ProductChannelMappingWhereInput
    orderBy?: ProductChannelMappingOrderByWithRelationInput | ProductChannelMappingOrderByWithRelationInput[]
    cursor?: ProductChannelMappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductChannelMappingScalarFieldEnum | ProductChannelMappingScalarFieldEnum[]
  }

  /**
   * Product.syncJobs
   */
  export type Product$syncJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockSyncJob
     */
    select?: StockSyncJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockSyncJob
     */
    omit?: StockSyncJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockSyncJobInclude<ExtArgs> | null
    where?: StockSyncJobWhereInput
    orderBy?: StockSyncJobOrderByWithRelationInput | StockSyncJobOrderByWithRelationInput[]
    cursor?: StockSyncJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockSyncJobScalarFieldEnum | StockSyncJobScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductBatch
   */

  export type AggregateProductBatch = {
    _count: ProductBatchCountAggregateOutputType | null
    _avg: ProductBatchAvgAggregateOutputType | null
    _sum: ProductBatchSumAggregateOutputType | null
    _min: ProductBatchMinAggregateOutputType | null
    _max: ProductBatchMaxAggregateOutputType | null
  }

  export type ProductBatchAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    quantity: number | null
  }

  export type ProductBatchSumAggregateOutputType = {
    id: number | null
    productId: number | null
    quantity: number | null
  }

  export type ProductBatchMinAggregateOutputType = {
    id: number | null
    productId: number | null
    batchCode: string | null
    quantity: number | null
    expiredDate: Date | null
    receivedDate: Date | null
    createdAt: Date | null
  }

  export type ProductBatchMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    batchCode: string | null
    quantity: number | null
    expiredDate: Date | null
    receivedDate: Date | null
    createdAt: Date | null
  }

  export type ProductBatchCountAggregateOutputType = {
    id: number
    productId: number
    batchCode: number
    quantity: number
    expiredDate: number
    receivedDate: number
    createdAt: number
    _all: number
  }


  export type ProductBatchAvgAggregateInputType = {
    id?: true
    productId?: true
    quantity?: true
  }

  export type ProductBatchSumAggregateInputType = {
    id?: true
    productId?: true
    quantity?: true
  }

  export type ProductBatchMinAggregateInputType = {
    id?: true
    productId?: true
    batchCode?: true
    quantity?: true
    expiredDate?: true
    receivedDate?: true
    createdAt?: true
  }

  export type ProductBatchMaxAggregateInputType = {
    id?: true
    productId?: true
    batchCode?: true
    quantity?: true
    expiredDate?: true
    receivedDate?: true
    createdAt?: true
  }

  export type ProductBatchCountAggregateInputType = {
    id?: true
    productId?: true
    batchCode?: true
    quantity?: true
    expiredDate?: true
    receivedDate?: true
    createdAt?: true
    _all?: true
  }

  export type ProductBatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductBatch to aggregate.
     */
    where?: ProductBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductBatches to fetch.
     */
    orderBy?: ProductBatchOrderByWithRelationInput | ProductBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductBatches
    **/
    _count?: true | ProductBatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductBatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductBatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductBatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductBatchMaxAggregateInputType
  }

  export type GetProductBatchAggregateType<T extends ProductBatchAggregateArgs> = {
        [P in keyof T & keyof AggregateProductBatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductBatch[P]>
      : GetScalarType<T[P], AggregateProductBatch[P]>
  }




  export type ProductBatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductBatchWhereInput
    orderBy?: ProductBatchOrderByWithAggregationInput | ProductBatchOrderByWithAggregationInput[]
    by: ProductBatchScalarFieldEnum[] | ProductBatchScalarFieldEnum
    having?: ProductBatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductBatchCountAggregateInputType | true
    _avg?: ProductBatchAvgAggregateInputType
    _sum?: ProductBatchSumAggregateInputType
    _min?: ProductBatchMinAggregateInputType
    _max?: ProductBatchMaxAggregateInputType
  }

  export type ProductBatchGroupByOutputType = {
    id: number
    productId: number
    batchCode: string | null
    quantity: number
    expiredDate: Date | null
    receivedDate: Date
    createdAt: Date
    _count: ProductBatchCountAggregateOutputType | null
    _avg: ProductBatchAvgAggregateOutputType | null
    _sum: ProductBatchSumAggregateOutputType | null
    _min: ProductBatchMinAggregateOutputType | null
    _max: ProductBatchMaxAggregateOutputType | null
  }

  type GetProductBatchGroupByPayload<T extends ProductBatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductBatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductBatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductBatchGroupByOutputType[P]>
            : GetScalarType<T[P], ProductBatchGroupByOutputType[P]>
        }
      >
    >


  export type ProductBatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    batchCode?: boolean
    quantity?: boolean
    expiredDate?: boolean
    receivedDate?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productBatch"]>

  export type ProductBatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    batchCode?: boolean
    quantity?: boolean
    expiredDate?: boolean
    receivedDate?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productBatch"]>

  export type ProductBatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    batchCode?: boolean
    quantity?: boolean
    expiredDate?: boolean
    receivedDate?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productBatch"]>

  export type ProductBatchSelectScalar = {
    id?: boolean
    productId?: boolean
    batchCode?: boolean
    quantity?: boolean
    expiredDate?: boolean
    receivedDate?: boolean
    createdAt?: boolean
  }

  export type ProductBatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "batchCode" | "quantity" | "expiredDate" | "receivedDate" | "createdAt", ExtArgs["result"]["productBatch"]>
  export type ProductBatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductBatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductBatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductBatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductBatch"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      batchCode: string | null
      quantity: number
      expiredDate: Date | null
      receivedDate: Date
      createdAt: Date
    }, ExtArgs["result"]["productBatch"]>
    composites: {}
  }

  type ProductBatchGetPayload<S extends boolean | null | undefined | ProductBatchDefaultArgs> = $Result.GetResult<Prisma.$ProductBatchPayload, S>

  type ProductBatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductBatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductBatchCountAggregateInputType | true
    }

  export interface ProductBatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductBatch'], meta: { name: 'ProductBatch' } }
    /**
     * Find zero or one ProductBatch that matches the filter.
     * @param {ProductBatchFindUniqueArgs} args - Arguments to find a ProductBatch
     * @example
     * // Get one ProductBatch
     * const productBatch = await prisma.productBatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductBatchFindUniqueArgs>(args: SelectSubset<T, ProductBatchFindUniqueArgs<ExtArgs>>): Prisma__ProductBatchClient<$Result.GetResult<Prisma.$ProductBatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductBatch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductBatchFindUniqueOrThrowArgs} args - Arguments to find a ProductBatch
     * @example
     * // Get one ProductBatch
     * const productBatch = await prisma.productBatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductBatchFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductBatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductBatchClient<$Result.GetResult<Prisma.$ProductBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductBatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBatchFindFirstArgs} args - Arguments to find a ProductBatch
     * @example
     * // Get one ProductBatch
     * const productBatch = await prisma.productBatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductBatchFindFirstArgs>(args?: SelectSubset<T, ProductBatchFindFirstArgs<ExtArgs>>): Prisma__ProductBatchClient<$Result.GetResult<Prisma.$ProductBatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductBatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBatchFindFirstOrThrowArgs} args - Arguments to find a ProductBatch
     * @example
     * // Get one ProductBatch
     * const productBatch = await prisma.productBatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductBatchFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductBatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductBatchClient<$Result.GetResult<Prisma.$ProductBatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductBatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductBatches
     * const productBatches = await prisma.productBatch.findMany()
     * 
     * // Get first 10 ProductBatches
     * const productBatches = await prisma.productBatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productBatchWithIdOnly = await prisma.productBatch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductBatchFindManyArgs>(args?: SelectSubset<T, ProductBatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductBatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductBatch.
     * @param {ProductBatchCreateArgs} args - Arguments to create a ProductBatch.
     * @example
     * // Create one ProductBatch
     * const ProductBatch = await prisma.productBatch.create({
     *   data: {
     *     // ... data to create a ProductBatch
     *   }
     * })
     * 
     */
    create<T extends ProductBatchCreateArgs>(args: SelectSubset<T, ProductBatchCreateArgs<ExtArgs>>): Prisma__ProductBatchClient<$Result.GetResult<Prisma.$ProductBatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductBatches.
     * @param {ProductBatchCreateManyArgs} args - Arguments to create many ProductBatches.
     * @example
     * // Create many ProductBatches
     * const productBatch = await prisma.productBatch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductBatchCreateManyArgs>(args?: SelectSubset<T, ProductBatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductBatches and returns the data saved in the database.
     * @param {ProductBatchCreateManyAndReturnArgs} args - Arguments to create many ProductBatches.
     * @example
     * // Create many ProductBatches
     * const productBatch = await prisma.productBatch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductBatches and only return the `id`
     * const productBatchWithIdOnly = await prisma.productBatch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductBatchCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductBatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductBatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductBatch.
     * @param {ProductBatchDeleteArgs} args - Arguments to delete one ProductBatch.
     * @example
     * // Delete one ProductBatch
     * const ProductBatch = await prisma.productBatch.delete({
     *   where: {
     *     // ... filter to delete one ProductBatch
     *   }
     * })
     * 
     */
    delete<T extends ProductBatchDeleteArgs>(args: SelectSubset<T, ProductBatchDeleteArgs<ExtArgs>>): Prisma__ProductBatchClient<$Result.GetResult<Prisma.$ProductBatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductBatch.
     * @param {ProductBatchUpdateArgs} args - Arguments to update one ProductBatch.
     * @example
     * // Update one ProductBatch
     * const productBatch = await prisma.productBatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductBatchUpdateArgs>(args: SelectSubset<T, ProductBatchUpdateArgs<ExtArgs>>): Prisma__ProductBatchClient<$Result.GetResult<Prisma.$ProductBatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductBatches.
     * @param {ProductBatchDeleteManyArgs} args - Arguments to filter ProductBatches to delete.
     * @example
     * // Delete a few ProductBatches
     * const { count } = await prisma.productBatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductBatchDeleteManyArgs>(args?: SelectSubset<T, ProductBatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductBatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductBatches
     * const productBatch = await prisma.productBatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductBatchUpdateManyArgs>(args: SelectSubset<T, ProductBatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductBatches and returns the data updated in the database.
     * @param {ProductBatchUpdateManyAndReturnArgs} args - Arguments to update many ProductBatches.
     * @example
     * // Update many ProductBatches
     * const productBatch = await prisma.productBatch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductBatches and only return the `id`
     * const productBatchWithIdOnly = await prisma.productBatch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductBatchUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductBatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductBatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductBatch.
     * @param {ProductBatchUpsertArgs} args - Arguments to update or create a ProductBatch.
     * @example
     * // Update or create a ProductBatch
     * const productBatch = await prisma.productBatch.upsert({
     *   create: {
     *     // ... data to create a ProductBatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductBatch we want to update
     *   }
     * })
     */
    upsert<T extends ProductBatchUpsertArgs>(args: SelectSubset<T, ProductBatchUpsertArgs<ExtArgs>>): Prisma__ProductBatchClient<$Result.GetResult<Prisma.$ProductBatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductBatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBatchCountArgs} args - Arguments to filter ProductBatches to count.
     * @example
     * // Count the number of ProductBatches
     * const count = await prisma.productBatch.count({
     *   where: {
     *     // ... the filter for the ProductBatches we want to count
     *   }
     * })
    **/
    count<T extends ProductBatchCountArgs>(
      args?: Subset<T, ProductBatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductBatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductBatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductBatchAggregateArgs>(args: Subset<T, ProductBatchAggregateArgs>): Prisma.PrismaPromise<GetProductBatchAggregateType<T>>

    /**
     * Group by ProductBatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductBatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductBatchGroupByArgs['orderBy'] }
        : { orderBy?: ProductBatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductBatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductBatch model
   */
  readonly fields: ProductBatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductBatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductBatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductBatch model
   */
  interface ProductBatchFieldRefs {
    readonly id: FieldRef<"ProductBatch", 'Int'>
    readonly productId: FieldRef<"ProductBatch", 'Int'>
    readonly batchCode: FieldRef<"ProductBatch", 'String'>
    readonly quantity: FieldRef<"ProductBatch", 'Int'>
    readonly expiredDate: FieldRef<"ProductBatch", 'DateTime'>
    readonly receivedDate: FieldRef<"ProductBatch", 'DateTime'>
    readonly createdAt: FieldRef<"ProductBatch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductBatch findUnique
   */
  export type ProductBatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBatch
     */
    select?: ProductBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBatch
     */
    omit?: ProductBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBatchInclude<ExtArgs> | null
    /**
     * Filter, which ProductBatch to fetch.
     */
    where: ProductBatchWhereUniqueInput
  }

  /**
   * ProductBatch findUniqueOrThrow
   */
  export type ProductBatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBatch
     */
    select?: ProductBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBatch
     */
    omit?: ProductBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBatchInclude<ExtArgs> | null
    /**
     * Filter, which ProductBatch to fetch.
     */
    where: ProductBatchWhereUniqueInput
  }

  /**
   * ProductBatch findFirst
   */
  export type ProductBatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBatch
     */
    select?: ProductBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBatch
     */
    omit?: ProductBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBatchInclude<ExtArgs> | null
    /**
     * Filter, which ProductBatch to fetch.
     */
    where?: ProductBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductBatches to fetch.
     */
    orderBy?: ProductBatchOrderByWithRelationInput | ProductBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductBatches.
     */
    cursor?: ProductBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductBatches.
     */
    distinct?: ProductBatchScalarFieldEnum | ProductBatchScalarFieldEnum[]
  }

  /**
   * ProductBatch findFirstOrThrow
   */
  export type ProductBatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBatch
     */
    select?: ProductBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBatch
     */
    omit?: ProductBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBatchInclude<ExtArgs> | null
    /**
     * Filter, which ProductBatch to fetch.
     */
    where?: ProductBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductBatches to fetch.
     */
    orderBy?: ProductBatchOrderByWithRelationInput | ProductBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductBatches.
     */
    cursor?: ProductBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductBatches.
     */
    distinct?: ProductBatchScalarFieldEnum | ProductBatchScalarFieldEnum[]
  }

  /**
   * ProductBatch findMany
   */
  export type ProductBatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBatch
     */
    select?: ProductBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBatch
     */
    omit?: ProductBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBatchInclude<ExtArgs> | null
    /**
     * Filter, which ProductBatches to fetch.
     */
    where?: ProductBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductBatches to fetch.
     */
    orderBy?: ProductBatchOrderByWithRelationInput | ProductBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductBatches.
     */
    cursor?: ProductBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductBatches.
     */
    distinct?: ProductBatchScalarFieldEnum | ProductBatchScalarFieldEnum[]
  }

  /**
   * ProductBatch create
   */
  export type ProductBatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBatch
     */
    select?: ProductBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBatch
     */
    omit?: ProductBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBatchInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductBatch.
     */
    data: XOR<ProductBatchCreateInput, ProductBatchUncheckedCreateInput>
  }

  /**
   * ProductBatch createMany
   */
  export type ProductBatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductBatches.
     */
    data: ProductBatchCreateManyInput | ProductBatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductBatch createManyAndReturn
   */
  export type ProductBatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBatch
     */
    select?: ProductBatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBatch
     */
    omit?: ProductBatchOmit<ExtArgs> | null
    /**
     * The data used to create many ProductBatches.
     */
    data: ProductBatchCreateManyInput | ProductBatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductBatch update
   */
  export type ProductBatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBatch
     */
    select?: ProductBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBatch
     */
    omit?: ProductBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBatchInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductBatch.
     */
    data: XOR<ProductBatchUpdateInput, ProductBatchUncheckedUpdateInput>
    /**
     * Choose, which ProductBatch to update.
     */
    where: ProductBatchWhereUniqueInput
  }

  /**
   * ProductBatch updateMany
   */
  export type ProductBatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductBatches.
     */
    data: XOR<ProductBatchUpdateManyMutationInput, ProductBatchUncheckedUpdateManyInput>
    /**
     * Filter which ProductBatches to update
     */
    where?: ProductBatchWhereInput
    /**
     * Limit how many ProductBatches to update.
     */
    limit?: number
  }

  /**
   * ProductBatch updateManyAndReturn
   */
  export type ProductBatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBatch
     */
    select?: ProductBatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBatch
     */
    omit?: ProductBatchOmit<ExtArgs> | null
    /**
     * The data used to update ProductBatches.
     */
    data: XOR<ProductBatchUpdateManyMutationInput, ProductBatchUncheckedUpdateManyInput>
    /**
     * Filter which ProductBatches to update
     */
    where?: ProductBatchWhereInput
    /**
     * Limit how many ProductBatches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductBatch upsert
   */
  export type ProductBatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBatch
     */
    select?: ProductBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBatch
     */
    omit?: ProductBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBatchInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductBatch to update in case it exists.
     */
    where: ProductBatchWhereUniqueInput
    /**
     * In case the ProductBatch found by the `where` argument doesn't exist, create a new ProductBatch with this data.
     */
    create: XOR<ProductBatchCreateInput, ProductBatchUncheckedCreateInput>
    /**
     * In case the ProductBatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductBatchUpdateInput, ProductBatchUncheckedUpdateInput>
  }

  /**
   * ProductBatch delete
   */
  export type ProductBatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBatch
     */
    select?: ProductBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBatch
     */
    omit?: ProductBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBatchInclude<ExtArgs> | null
    /**
     * Filter which ProductBatch to delete.
     */
    where: ProductBatchWhereUniqueInput
  }

  /**
   * ProductBatch deleteMany
   */
  export type ProductBatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductBatches to delete
     */
    where?: ProductBatchWhereInput
    /**
     * Limit how many ProductBatches to delete.
     */
    limit?: number
  }

  /**
   * ProductBatch without action
   */
  export type ProductBatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBatch
     */
    select?: ProductBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBatch
     */
    omit?: ProductBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBatchInclude<ExtArgs> | null
  }


  /**
   * Model StockMovement
   */

  export type AggregateStockMovement = {
    _count: StockMovementCountAggregateOutputType | null
    _avg: StockMovementAvgAggregateOutputType | null
    _sum: StockMovementSumAggregateOutputType | null
    _min: StockMovementMinAggregateOutputType | null
    _max: StockMovementMaxAggregateOutputType | null
  }

  export type StockMovementAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    quantity: number | null
    referenceId: number | null
    supplierId: number | null
    createdBy: number | null
  }

  export type StockMovementSumAggregateOutputType = {
    id: number | null
    productId: number | null
    quantity: number | null
    referenceId: number | null
    supplierId: number | null
    createdBy: number | null
  }

  export type StockMovementMinAggregateOutputType = {
    id: number | null
    productId: number | null
    type: string | null
    quantity: number | null
    referenceType: string | null
    referenceId: number | null
    supplierId: number | null
    note: string | null
    createdBy: number | null
    createdAt: Date | null
  }

  export type StockMovementMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    type: string | null
    quantity: number | null
    referenceType: string | null
    referenceId: number | null
    supplierId: number | null
    note: string | null
    createdBy: number | null
    createdAt: Date | null
  }

  export type StockMovementCountAggregateOutputType = {
    id: number
    productId: number
    type: number
    quantity: number
    referenceType: number
    referenceId: number
    supplierId: number
    note: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type StockMovementAvgAggregateInputType = {
    id?: true
    productId?: true
    quantity?: true
    referenceId?: true
    supplierId?: true
    createdBy?: true
  }

  export type StockMovementSumAggregateInputType = {
    id?: true
    productId?: true
    quantity?: true
    referenceId?: true
    supplierId?: true
    createdBy?: true
  }

  export type StockMovementMinAggregateInputType = {
    id?: true
    productId?: true
    type?: true
    quantity?: true
    referenceType?: true
    referenceId?: true
    supplierId?: true
    note?: true
    createdBy?: true
    createdAt?: true
  }

  export type StockMovementMaxAggregateInputType = {
    id?: true
    productId?: true
    type?: true
    quantity?: true
    referenceType?: true
    referenceId?: true
    supplierId?: true
    note?: true
    createdBy?: true
    createdAt?: true
  }

  export type StockMovementCountAggregateInputType = {
    id?: true
    productId?: true
    type?: true
    quantity?: true
    referenceType?: true
    referenceId?: true
    supplierId?: true
    note?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type StockMovementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockMovement to aggregate.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockMovements
    **/
    _count?: true | StockMovementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockMovementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockMovementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockMovementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockMovementMaxAggregateInputType
  }

  export type GetStockMovementAggregateType<T extends StockMovementAggregateArgs> = {
        [P in keyof T & keyof AggregateStockMovement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockMovement[P]>
      : GetScalarType<T[P], AggregateStockMovement[P]>
  }




  export type StockMovementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMovementWhereInput
    orderBy?: StockMovementOrderByWithAggregationInput | StockMovementOrderByWithAggregationInput[]
    by: StockMovementScalarFieldEnum[] | StockMovementScalarFieldEnum
    having?: StockMovementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockMovementCountAggregateInputType | true
    _avg?: StockMovementAvgAggregateInputType
    _sum?: StockMovementSumAggregateInputType
    _min?: StockMovementMinAggregateInputType
    _max?: StockMovementMaxAggregateInputType
  }

  export type StockMovementGroupByOutputType = {
    id: number
    productId: number
    type: string
    quantity: number
    referenceType: string | null
    referenceId: number | null
    supplierId: number | null
    note: string | null
    createdBy: number
    createdAt: Date
    _count: StockMovementCountAggregateOutputType | null
    _avg: StockMovementAvgAggregateOutputType | null
    _sum: StockMovementSumAggregateOutputType | null
    _min: StockMovementMinAggregateOutputType | null
    _max: StockMovementMaxAggregateOutputType | null
  }

  type GetStockMovementGroupByPayload<T extends StockMovementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockMovementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockMovementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockMovementGroupByOutputType[P]>
            : GetScalarType<T[P], StockMovementGroupByOutputType[P]>
        }
      >
    >


  export type StockMovementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    type?: boolean
    quantity?: boolean
    referenceType?: boolean
    referenceId?: boolean
    supplierId?: boolean
    note?: boolean
    createdBy?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    supplier?: boolean | StockMovement$supplierArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockMovement"]>

  export type StockMovementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    type?: boolean
    quantity?: boolean
    referenceType?: boolean
    referenceId?: boolean
    supplierId?: boolean
    note?: boolean
    createdBy?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    supplier?: boolean | StockMovement$supplierArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockMovement"]>

  export type StockMovementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    type?: boolean
    quantity?: boolean
    referenceType?: boolean
    referenceId?: boolean
    supplierId?: boolean
    note?: boolean
    createdBy?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    supplier?: boolean | StockMovement$supplierArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockMovement"]>

  export type StockMovementSelectScalar = {
    id?: boolean
    productId?: boolean
    type?: boolean
    quantity?: boolean
    referenceType?: boolean
    referenceId?: boolean
    supplierId?: boolean
    note?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type StockMovementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "type" | "quantity" | "referenceType" | "referenceId" | "supplierId" | "note" | "createdBy" | "createdAt", ExtArgs["result"]["stockMovement"]>
  export type StockMovementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    supplier?: boolean | StockMovement$supplierArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StockMovementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    supplier?: boolean | StockMovement$supplierArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StockMovementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    supplier?: boolean | StockMovement$supplierArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StockMovementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockMovement"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      supplier: Prisma.$SupplierPayload<ExtArgs> | null
      creator: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      type: string
      quantity: number
      referenceType: string | null
      referenceId: number | null
      supplierId: number | null
      note: string | null
      createdBy: number
      createdAt: Date
    }, ExtArgs["result"]["stockMovement"]>
    composites: {}
  }

  type StockMovementGetPayload<S extends boolean | null | undefined | StockMovementDefaultArgs> = $Result.GetResult<Prisma.$StockMovementPayload, S>

  type StockMovementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockMovementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockMovementCountAggregateInputType | true
    }

  export interface StockMovementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockMovement'], meta: { name: 'StockMovement' } }
    /**
     * Find zero or one StockMovement that matches the filter.
     * @param {StockMovementFindUniqueArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockMovementFindUniqueArgs>(args: SelectSubset<T, StockMovementFindUniqueArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StockMovement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockMovementFindUniqueOrThrowArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockMovementFindUniqueOrThrowArgs>(args: SelectSubset<T, StockMovementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockMovement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementFindFirstArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockMovementFindFirstArgs>(args?: SelectSubset<T, StockMovementFindFirstArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockMovement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementFindFirstOrThrowArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockMovementFindFirstOrThrowArgs>(args?: SelectSubset<T, StockMovementFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StockMovements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockMovements
     * const stockMovements = await prisma.stockMovement.findMany()
     * 
     * // Get first 10 StockMovements
     * const stockMovements = await prisma.stockMovement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockMovementWithIdOnly = await prisma.stockMovement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockMovementFindManyArgs>(args?: SelectSubset<T, StockMovementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StockMovement.
     * @param {StockMovementCreateArgs} args - Arguments to create a StockMovement.
     * @example
     * // Create one StockMovement
     * const StockMovement = await prisma.stockMovement.create({
     *   data: {
     *     // ... data to create a StockMovement
     *   }
     * })
     * 
     */
    create<T extends StockMovementCreateArgs>(args: SelectSubset<T, StockMovementCreateArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StockMovements.
     * @param {StockMovementCreateManyArgs} args - Arguments to create many StockMovements.
     * @example
     * // Create many StockMovements
     * const stockMovement = await prisma.stockMovement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockMovementCreateManyArgs>(args?: SelectSubset<T, StockMovementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockMovements and returns the data saved in the database.
     * @param {StockMovementCreateManyAndReturnArgs} args - Arguments to create many StockMovements.
     * @example
     * // Create many StockMovements
     * const stockMovement = await prisma.stockMovement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockMovements and only return the `id`
     * const stockMovementWithIdOnly = await prisma.stockMovement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockMovementCreateManyAndReturnArgs>(args?: SelectSubset<T, StockMovementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StockMovement.
     * @param {StockMovementDeleteArgs} args - Arguments to delete one StockMovement.
     * @example
     * // Delete one StockMovement
     * const StockMovement = await prisma.stockMovement.delete({
     *   where: {
     *     // ... filter to delete one StockMovement
     *   }
     * })
     * 
     */
    delete<T extends StockMovementDeleteArgs>(args: SelectSubset<T, StockMovementDeleteArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StockMovement.
     * @param {StockMovementUpdateArgs} args - Arguments to update one StockMovement.
     * @example
     * // Update one StockMovement
     * const stockMovement = await prisma.stockMovement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockMovementUpdateArgs>(args: SelectSubset<T, StockMovementUpdateArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StockMovements.
     * @param {StockMovementDeleteManyArgs} args - Arguments to filter StockMovements to delete.
     * @example
     * // Delete a few StockMovements
     * const { count } = await prisma.stockMovement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockMovementDeleteManyArgs>(args?: SelectSubset<T, StockMovementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockMovements
     * const stockMovement = await prisma.stockMovement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockMovementUpdateManyArgs>(args: SelectSubset<T, StockMovementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockMovements and returns the data updated in the database.
     * @param {StockMovementUpdateManyAndReturnArgs} args - Arguments to update many StockMovements.
     * @example
     * // Update many StockMovements
     * const stockMovement = await prisma.stockMovement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StockMovements and only return the `id`
     * const stockMovementWithIdOnly = await prisma.stockMovement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StockMovementUpdateManyAndReturnArgs>(args: SelectSubset<T, StockMovementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StockMovement.
     * @param {StockMovementUpsertArgs} args - Arguments to update or create a StockMovement.
     * @example
     * // Update or create a StockMovement
     * const stockMovement = await prisma.stockMovement.upsert({
     *   create: {
     *     // ... data to create a StockMovement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockMovement we want to update
     *   }
     * })
     */
    upsert<T extends StockMovementUpsertArgs>(args: SelectSubset<T, StockMovementUpsertArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StockMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementCountArgs} args - Arguments to filter StockMovements to count.
     * @example
     * // Count the number of StockMovements
     * const count = await prisma.stockMovement.count({
     *   where: {
     *     // ... the filter for the StockMovements we want to count
     *   }
     * })
    **/
    count<T extends StockMovementCountArgs>(
      args?: Subset<T, StockMovementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockMovementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockMovementAggregateArgs>(args: Subset<T, StockMovementAggregateArgs>): Prisma.PrismaPromise<GetStockMovementAggregateType<T>>

    /**
     * Group by StockMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockMovementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockMovementGroupByArgs['orderBy'] }
        : { orderBy?: StockMovementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockMovementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockMovementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockMovement model
   */
  readonly fields: StockMovementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockMovement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockMovementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supplier<T extends StockMovement$supplierArgs<ExtArgs> = {}>(args?: Subset<T, StockMovement$supplierArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StockMovement model
   */
  interface StockMovementFieldRefs {
    readonly id: FieldRef<"StockMovement", 'Int'>
    readonly productId: FieldRef<"StockMovement", 'Int'>
    readonly type: FieldRef<"StockMovement", 'String'>
    readonly quantity: FieldRef<"StockMovement", 'Int'>
    readonly referenceType: FieldRef<"StockMovement", 'String'>
    readonly referenceId: FieldRef<"StockMovement", 'Int'>
    readonly supplierId: FieldRef<"StockMovement", 'Int'>
    readonly note: FieldRef<"StockMovement", 'String'>
    readonly createdBy: FieldRef<"StockMovement", 'Int'>
    readonly createdAt: FieldRef<"StockMovement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StockMovement findUnique
   */
  export type StockMovementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement findUniqueOrThrow
   */
  export type StockMovementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement findFirst
   */
  export type StockMovementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockMovements.
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockMovements.
     */
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockMovement findFirstOrThrow
   */
  export type StockMovementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockMovements.
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockMovements.
     */
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockMovement findMany
   */
  export type StockMovementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovements to fetch.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockMovements.
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockMovements.
     */
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockMovement create
   */
  export type StockMovementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * The data needed to create a StockMovement.
     */
    data: XOR<StockMovementCreateInput, StockMovementUncheckedCreateInput>
  }

  /**
   * StockMovement createMany
   */
  export type StockMovementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockMovements.
     */
    data: StockMovementCreateManyInput | StockMovementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockMovement createManyAndReturn
   */
  export type StockMovementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * The data used to create many StockMovements.
     */
    data: StockMovementCreateManyInput | StockMovementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockMovement update
   */
  export type StockMovementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * The data needed to update a StockMovement.
     */
    data: XOR<StockMovementUpdateInput, StockMovementUncheckedUpdateInput>
    /**
     * Choose, which StockMovement to update.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement updateMany
   */
  export type StockMovementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockMovements.
     */
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyInput>
    /**
     * Filter which StockMovements to update
     */
    where?: StockMovementWhereInput
    /**
     * Limit how many StockMovements to update.
     */
    limit?: number
  }

  /**
   * StockMovement updateManyAndReturn
   */
  export type StockMovementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * The data used to update StockMovements.
     */
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyInput>
    /**
     * Filter which StockMovements to update
     */
    where?: StockMovementWhereInput
    /**
     * Limit how many StockMovements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockMovement upsert
   */
  export type StockMovementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * The filter to search for the StockMovement to update in case it exists.
     */
    where: StockMovementWhereUniqueInput
    /**
     * In case the StockMovement found by the `where` argument doesn't exist, create a new StockMovement with this data.
     */
    create: XOR<StockMovementCreateInput, StockMovementUncheckedCreateInput>
    /**
     * In case the StockMovement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockMovementUpdateInput, StockMovementUncheckedUpdateInput>
  }

  /**
   * StockMovement delete
   */
  export type StockMovementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter which StockMovement to delete.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement deleteMany
   */
  export type StockMovementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockMovements to delete
     */
    where?: StockMovementWhereInput
    /**
     * Limit how many StockMovements to delete.
     */
    limit?: number
  }

  /**
   * StockMovement.supplier
   */
  export type StockMovement$supplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    where?: SupplierWhereInput
  }

  /**
   * StockMovement without action
   */
  export type StockMovementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
  }


  /**
   * Model OpnameSession
   */

  export type AggregateOpnameSession = {
    _count: OpnameSessionCountAggregateOutputType | null
    _avg: OpnameSessionAvgAggregateOutputType | null
    _sum: OpnameSessionSumAggregateOutputType | null
    _min: OpnameSessionMinAggregateOutputType | null
    _max: OpnameSessionMaxAggregateOutputType | null
  }

  export type OpnameSessionAvgAggregateOutputType = {
    id: number | null
    createdBy: number | null
    approvedBy: number | null
  }

  export type OpnameSessionSumAggregateOutputType = {
    id: number | null
    createdBy: number | null
    approvedBy: number | null
  }

  export type OpnameSessionMinAggregateOutputType = {
    id: number | null
    code: string | null
    title: string | null
    status: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdBy: number | null
    approvedBy: number | null
    approvedAt: Date | null
    notes: string | null
    createdAt: Date | null
  }

  export type OpnameSessionMaxAggregateOutputType = {
    id: number | null
    code: string | null
    title: string | null
    status: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdBy: number | null
    approvedBy: number | null
    approvedAt: Date | null
    notes: string | null
    createdAt: Date | null
  }

  export type OpnameSessionCountAggregateOutputType = {
    id: number
    code: number
    title: number
    status: number
    startedAt: number
    completedAt: number
    createdBy: number
    approvedBy: number
    approvedAt: number
    notes: number
    createdAt: number
    _all: number
  }


  export type OpnameSessionAvgAggregateInputType = {
    id?: true
    createdBy?: true
    approvedBy?: true
  }

  export type OpnameSessionSumAggregateInputType = {
    id?: true
    createdBy?: true
    approvedBy?: true
  }

  export type OpnameSessionMinAggregateInputType = {
    id?: true
    code?: true
    title?: true
    status?: true
    startedAt?: true
    completedAt?: true
    createdBy?: true
    approvedBy?: true
    approvedAt?: true
    notes?: true
    createdAt?: true
  }

  export type OpnameSessionMaxAggregateInputType = {
    id?: true
    code?: true
    title?: true
    status?: true
    startedAt?: true
    completedAt?: true
    createdBy?: true
    approvedBy?: true
    approvedAt?: true
    notes?: true
    createdAt?: true
  }

  export type OpnameSessionCountAggregateInputType = {
    id?: true
    code?: true
    title?: true
    status?: true
    startedAt?: true
    completedAt?: true
    createdBy?: true
    approvedBy?: true
    approvedAt?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type OpnameSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpnameSession to aggregate.
     */
    where?: OpnameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpnameSessions to fetch.
     */
    orderBy?: OpnameSessionOrderByWithRelationInput | OpnameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpnameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpnameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpnameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OpnameSessions
    **/
    _count?: true | OpnameSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OpnameSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OpnameSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpnameSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpnameSessionMaxAggregateInputType
  }

  export type GetOpnameSessionAggregateType<T extends OpnameSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateOpnameSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpnameSession[P]>
      : GetScalarType<T[P], AggregateOpnameSession[P]>
  }




  export type OpnameSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpnameSessionWhereInput
    orderBy?: OpnameSessionOrderByWithAggregationInput | OpnameSessionOrderByWithAggregationInput[]
    by: OpnameSessionScalarFieldEnum[] | OpnameSessionScalarFieldEnum
    having?: OpnameSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpnameSessionCountAggregateInputType | true
    _avg?: OpnameSessionAvgAggregateInputType
    _sum?: OpnameSessionSumAggregateInputType
    _min?: OpnameSessionMinAggregateInputType
    _max?: OpnameSessionMaxAggregateInputType
  }

  export type OpnameSessionGroupByOutputType = {
    id: number
    code: string
    title: string | null
    status: string
    startedAt: Date | null
    completedAt: Date | null
    createdBy: number
    approvedBy: number | null
    approvedAt: Date | null
    notes: string | null
    createdAt: Date
    _count: OpnameSessionCountAggregateOutputType | null
    _avg: OpnameSessionAvgAggregateOutputType | null
    _sum: OpnameSessionSumAggregateOutputType | null
    _min: OpnameSessionMinAggregateOutputType | null
    _max: OpnameSessionMaxAggregateOutputType | null
  }

  type GetOpnameSessionGroupByPayload<T extends OpnameSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpnameSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpnameSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpnameSessionGroupByOutputType[P]>
            : GetScalarType<T[P], OpnameSessionGroupByOutputType[P]>
        }
      >
    >


  export type OpnameSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdBy?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    notes?: boolean
    createdAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    approver?: boolean | OpnameSession$approverArgs<ExtArgs>
    items?: boolean | OpnameSession$itemsArgs<ExtArgs>
    _count?: boolean | OpnameSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opnameSession"]>

  export type OpnameSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdBy?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    notes?: boolean
    createdAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    approver?: boolean | OpnameSession$approverArgs<ExtArgs>
  }, ExtArgs["result"]["opnameSession"]>

  export type OpnameSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdBy?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    notes?: boolean
    createdAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    approver?: boolean | OpnameSession$approverArgs<ExtArgs>
  }, ExtArgs["result"]["opnameSession"]>

  export type OpnameSessionSelectScalar = {
    id?: boolean
    code?: boolean
    title?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdBy?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type OpnameSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "title" | "status" | "startedAt" | "completedAt" | "createdBy" | "approvedBy" | "approvedAt" | "notes" | "createdAt", ExtArgs["result"]["opnameSession"]>
  export type OpnameSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    approver?: boolean | OpnameSession$approverArgs<ExtArgs>
    items?: boolean | OpnameSession$itemsArgs<ExtArgs>
    _count?: boolean | OpnameSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OpnameSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    approver?: boolean | OpnameSession$approverArgs<ExtArgs>
  }
  export type OpnameSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    approver?: boolean | OpnameSession$approverArgs<ExtArgs>
  }

  export type $OpnameSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OpnameSession"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      approver: Prisma.$UserPayload<ExtArgs> | null
      items: Prisma.$OpnameItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      title: string | null
      status: string
      startedAt: Date | null
      completedAt: Date | null
      createdBy: number
      approvedBy: number | null
      approvedAt: Date | null
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["opnameSession"]>
    composites: {}
  }

  type OpnameSessionGetPayload<S extends boolean | null | undefined | OpnameSessionDefaultArgs> = $Result.GetResult<Prisma.$OpnameSessionPayload, S>

  type OpnameSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OpnameSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OpnameSessionCountAggregateInputType | true
    }

  export interface OpnameSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OpnameSession'], meta: { name: 'OpnameSession' } }
    /**
     * Find zero or one OpnameSession that matches the filter.
     * @param {OpnameSessionFindUniqueArgs} args - Arguments to find a OpnameSession
     * @example
     * // Get one OpnameSession
     * const opnameSession = await prisma.opnameSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OpnameSessionFindUniqueArgs>(args: SelectSubset<T, OpnameSessionFindUniqueArgs<ExtArgs>>): Prisma__OpnameSessionClient<$Result.GetResult<Prisma.$OpnameSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OpnameSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OpnameSessionFindUniqueOrThrowArgs} args - Arguments to find a OpnameSession
     * @example
     * // Get one OpnameSession
     * const opnameSession = await prisma.opnameSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OpnameSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, OpnameSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OpnameSessionClient<$Result.GetResult<Prisma.$OpnameSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OpnameSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpnameSessionFindFirstArgs} args - Arguments to find a OpnameSession
     * @example
     * // Get one OpnameSession
     * const opnameSession = await prisma.opnameSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OpnameSessionFindFirstArgs>(args?: SelectSubset<T, OpnameSessionFindFirstArgs<ExtArgs>>): Prisma__OpnameSessionClient<$Result.GetResult<Prisma.$OpnameSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OpnameSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpnameSessionFindFirstOrThrowArgs} args - Arguments to find a OpnameSession
     * @example
     * // Get one OpnameSession
     * const opnameSession = await prisma.opnameSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OpnameSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, OpnameSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OpnameSessionClient<$Result.GetResult<Prisma.$OpnameSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OpnameSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpnameSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OpnameSessions
     * const opnameSessions = await prisma.opnameSession.findMany()
     * 
     * // Get first 10 OpnameSessions
     * const opnameSessions = await prisma.opnameSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const opnameSessionWithIdOnly = await prisma.opnameSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OpnameSessionFindManyArgs>(args?: SelectSubset<T, OpnameSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpnameSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OpnameSession.
     * @param {OpnameSessionCreateArgs} args - Arguments to create a OpnameSession.
     * @example
     * // Create one OpnameSession
     * const OpnameSession = await prisma.opnameSession.create({
     *   data: {
     *     // ... data to create a OpnameSession
     *   }
     * })
     * 
     */
    create<T extends OpnameSessionCreateArgs>(args: SelectSubset<T, OpnameSessionCreateArgs<ExtArgs>>): Prisma__OpnameSessionClient<$Result.GetResult<Prisma.$OpnameSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OpnameSessions.
     * @param {OpnameSessionCreateManyArgs} args - Arguments to create many OpnameSessions.
     * @example
     * // Create many OpnameSessions
     * const opnameSession = await prisma.opnameSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OpnameSessionCreateManyArgs>(args?: SelectSubset<T, OpnameSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OpnameSessions and returns the data saved in the database.
     * @param {OpnameSessionCreateManyAndReturnArgs} args - Arguments to create many OpnameSessions.
     * @example
     * // Create many OpnameSessions
     * const opnameSession = await prisma.opnameSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OpnameSessions and only return the `id`
     * const opnameSessionWithIdOnly = await prisma.opnameSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OpnameSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, OpnameSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpnameSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OpnameSession.
     * @param {OpnameSessionDeleteArgs} args - Arguments to delete one OpnameSession.
     * @example
     * // Delete one OpnameSession
     * const OpnameSession = await prisma.opnameSession.delete({
     *   where: {
     *     // ... filter to delete one OpnameSession
     *   }
     * })
     * 
     */
    delete<T extends OpnameSessionDeleteArgs>(args: SelectSubset<T, OpnameSessionDeleteArgs<ExtArgs>>): Prisma__OpnameSessionClient<$Result.GetResult<Prisma.$OpnameSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OpnameSession.
     * @param {OpnameSessionUpdateArgs} args - Arguments to update one OpnameSession.
     * @example
     * // Update one OpnameSession
     * const opnameSession = await prisma.opnameSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OpnameSessionUpdateArgs>(args: SelectSubset<T, OpnameSessionUpdateArgs<ExtArgs>>): Prisma__OpnameSessionClient<$Result.GetResult<Prisma.$OpnameSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OpnameSessions.
     * @param {OpnameSessionDeleteManyArgs} args - Arguments to filter OpnameSessions to delete.
     * @example
     * // Delete a few OpnameSessions
     * const { count } = await prisma.opnameSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OpnameSessionDeleteManyArgs>(args?: SelectSubset<T, OpnameSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpnameSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpnameSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OpnameSessions
     * const opnameSession = await prisma.opnameSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OpnameSessionUpdateManyArgs>(args: SelectSubset<T, OpnameSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpnameSessions and returns the data updated in the database.
     * @param {OpnameSessionUpdateManyAndReturnArgs} args - Arguments to update many OpnameSessions.
     * @example
     * // Update many OpnameSessions
     * const opnameSession = await prisma.opnameSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OpnameSessions and only return the `id`
     * const opnameSessionWithIdOnly = await prisma.opnameSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OpnameSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, OpnameSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpnameSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OpnameSession.
     * @param {OpnameSessionUpsertArgs} args - Arguments to update or create a OpnameSession.
     * @example
     * // Update or create a OpnameSession
     * const opnameSession = await prisma.opnameSession.upsert({
     *   create: {
     *     // ... data to create a OpnameSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OpnameSession we want to update
     *   }
     * })
     */
    upsert<T extends OpnameSessionUpsertArgs>(args: SelectSubset<T, OpnameSessionUpsertArgs<ExtArgs>>): Prisma__OpnameSessionClient<$Result.GetResult<Prisma.$OpnameSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OpnameSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpnameSessionCountArgs} args - Arguments to filter OpnameSessions to count.
     * @example
     * // Count the number of OpnameSessions
     * const count = await prisma.opnameSession.count({
     *   where: {
     *     // ... the filter for the OpnameSessions we want to count
     *   }
     * })
    **/
    count<T extends OpnameSessionCountArgs>(
      args?: Subset<T, OpnameSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpnameSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OpnameSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpnameSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OpnameSessionAggregateArgs>(args: Subset<T, OpnameSessionAggregateArgs>): Prisma.PrismaPromise<GetOpnameSessionAggregateType<T>>

    /**
     * Group by OpnameSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpnameSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OpnameSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpnameSessionGroupByArgs['orderBy'] }
        : { orderBy?: OpnameSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OpnameSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpnameSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OpnameSession model
   */
  readonly fields: OpnameSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OpnameSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OpnameSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approver<T extends OpnameSession$approverArgs<ExtArgs> = {}>(args?: Subset<T, OpnameSession$approverArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    items<T extends OpnameSession$itemsArgs<ExtArgs> = {}>(args?: Subset<T, OpnameSession$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpnameItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OpnameSession model
   */
  interface OpnameSessionFieldRefs {
    readonly id: FieldRef<"OpnameSession", 'Int'>
    readonly code: FieldRef<"OpnameSession", 'String'>
    readonly title: FieldRef<"OpnameSession", 'String'>
    readonly status: FieldRef<"OpnameSession", 'String'>
    readonly startedAt: FieldRef<"OpnameSession", 'DateTime'>
    readonly completedAt: FieldRef<"OpnameSession", 'DateTime'>
    readonly createdBy: FieldRef<"OpnameSession", 'Int'>
    readonly approvedBy: FieldRef<"OpnameSession", 'Int'>
    readonly approvedAt: FieldRef<"OpnameSession", 'DateTime'>
    readonly notes: FieldRef<"OpnameSession", 'String'>
    readonly createdAt: FieldRef<"OpnameSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OpnameSession findUnique
   */
  export type OpnameSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameSession
     */
    select?: OpnameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameSession
     */
    omit?: OpnameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameSessionInclude<ExtArgs> | null
    /**
     * Filter, which OpnameSession to fetch.
     */
    where: OpnameSessionWhereUniqueInput
  }

  /**
   * OpnameSession findUniqueOrThrow
   */
  export type OpnameSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameSession
     */
    select?: OpnameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameSession
     */
    omit?: OpnameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameSessionInclude<ExtArgs> | null
    /**
     * Filter, which OpnameSession to fetch.
     */
    where: OpnameSessionWhereUniqueInput
  }

  /**
   * OpnameSession findFirst
   */
  export type OpnameSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameSession
     */
    select?: OpnameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameSession
     */
    omit?: OpnameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameSessionInclude<ExtArgs> | null
    /**
     * Filter, which OpnameSession to fetch.
     */
    where?: OpnameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpnameSessions to fetch.
     */
    orderBy?: OpnameSessionOrderByWithRelationInput | OpnameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpnameSessions.
     */
    cursor?: OpnameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpnameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpnameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpnameSessions.
     */
    distinct?: OpnameSessionScalarFieldEnum | OpnameSessionScalarFieldEnum[]
  }

  /**
   * OpnameSession findFirstOrThrow
   */
  export type OpnameSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameSession
     */
    select?: OpnameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameSession
     */
    omit?: OpnameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameSessionInclude<ExtArgs> | null
    /**
     * Filter, which OpnameSession to fetch.
     */
    where?: OpnameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpnameSessions to fetch.
     */
    orderBy?: OpnameSessionOrderByWithRelationInput | OpnameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpnameSessions.
     */
    cursor?: OpnameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpnameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpnameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpnameSessions.
     */
    distinct?: OpnameSessionScalarFieldEnum | OpnameSessionScalarFieldEnum[]
  }

  /**
   * OpnameSession findMany
   */
  export type OpnameSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameSession
     */
    select?: OpnameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameSession
     */
    omit?: OpnameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameSessionInclude<ExtArgs> | null
    /**
     * Filter, which OpnameSessions to fetch.
     */
    where?: OpnameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpnameSessions to fetch.
     */
    orderBy?: OpnameSessionOrderByWithRelationInput | OpnameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OpnameSessions.
     */
    cursor?: OpnameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpnameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpnameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpnameSessions.
     */
    distinct?: OpnameSessionScalarFieldEnum | OpnameSessionScalarFieldEnum[]
  }

  /**
   * OpnameSession create
   */
  export type OpnameSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameSession
     */
    select?: OpnameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameSession
     */
    omit?: OpnameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a OpnameSession.
     */
    data: XOR<OpnameSessionCreateInput, OpnameSessionUncheckedCreateInput>
  }

  /**
   * OpnameSession createMany
   */
  export type OpnameSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OpnameSessions.
     */
    data: OpnameSessionCreateManyInput | OpnameSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OpnameSession createManyAndReturn
   */
  export type OpnameSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameSession
     */
    select?: OpnameSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameSession
     */
    omit?: OpnameSessionOmit<ExtArgs> | null
    /**
     * The data used to create many OpnameSessions.
     */
    data: OpnameSessionCreateManyInput | OpnameSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OpnameSession update
   */
  export type OpnameSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameSession
     */
    select?: OpnameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameSession
     */
    omit?: OpnameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a OpnameSession.
     */
    data: XOR<OpnameSessionUpdateInput, OpnameSessionUncheckedUpdateInput>
    /**
     * Choose, which OpnameSession to update.
     */
    where: OpnameSessionWhereUniqueInput
  }

  /**
   * OpnameSession updateMany
   */
  export type OpnameSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OpnameSessions.
     */
    data: XOR<OpnameSessionUpdateManyMutationInput, OpnameSessionUncheckedUpdateManyInput>
    /**
     * Filter which OpnameSessions to update
     */
    where?: OpnameSessionWhereInput
    /**
     * Limit how many OpnameSessions to update.
     */
    limit?: number
  }

  /**
   * OpnameSession updateManyAndReturn
   */
  export type OpnameSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameSession
     */
    select?: OpnameSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameSession
     */
    omit?: OpnameSessionOmit<ExtArgs> | null
    /**
     * The data used to update OpnameSessions.
     */
    data: XOR<OpnameSessionUpdateManyMutationInput, OpnameSessionUncheckedUpdateManyInput>
    /**
     * Filter which OpnameSessions to update
     */
    where?: OpnameSessionWhereInput
    /**
     * Limit how many OpnameSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OpnameSession upsert
   */
  export type OpnameSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameSession
     */
    select?: OpnameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameSession
     */
    omit?: OpnameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the OpnameSession to update in case it exists.
     */
    where: OpnameSessionWhereUniqueInput
    /**
     * In case the OpnameSession found by the `where` argument doesn't exist, create a new OpnameSession with this data.
     */
    create: XOR<OpnameSessionCreateInput, OpnameSessionUncheckedCreateInput>
    /**
     * In case the OpnameSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpnameSessionUpdateInput, OpnameSessionUncheckedUpdateInput>
  }

  /**
   * OpnameSession delete
   */
  export type OpnameSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameSession
     */
    select?: OpnameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameSession
     */
    omit?: OpnameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameSessionInclude<ExtArgs> | null
    /**
     * Filter which OpnameSession to delete.
     */
    where: OpnameSessionWhereUniqueInput
  }

  /**
   * OpnameSession deleteMany
   */
  export type OpnameSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpnameSessions to delete
     */
    where?: OpnameSessionWhereInput
    /**
     * Limit how many OpnameSessions to delete.
     */
    limit?: number
  }

  /**
   * OpnameSession.approver
   */
  export type OpnameSession$approverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * OpnameSession.items
   */
  export type OpnameSession$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameItem
     */
    select?: OpnameItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameItem
     */
    omit?: OpnameItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameItemInclude<ExtArgs> | null
    where?: OpnameItemWhereInput
    orderBy?: OpnameItemOrderByWithRelationInput | OpnameItemOrderByWithRelationInput[]
    cursor?: OpnameItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpnameItemScalarFieldEnum | OpnameItemScalarFieldEnum[]
  }

  /**
   * OpnameSession without action
   */
  export type OpnameSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameSession
     */
    select?: OpnameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameSession
     */
    omit?: OpnameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameSessionInclude<ExtArgs> | null
  }


  /**
   * Model OpnameItem
   */

  export type AggregateOpnameItem = {
    _count: OpnameItemCountAggregateOutputType | null
    _avg: OpnameItemAvgAggregateOutputType | null
    _sum: OpnameItemSumAggregateOutputType | null
    _min: OpnameItemMinAggregateOutputType | null
    _max: OpnameItemMaxAggregateOutputType | null
  }

  export type OpnameItemAvgAggregateOutputType = {
    id: number | null
    sessionId: number | null
    productId: number | null
    systemStock: number | null
    physicalStock: number | null
    difference: number | null
    countedBy: number | null
  }

  export type OpnameItemSumAggregateOutputType = {
    id: number | null
    sessionId: number | null
    productId: number | null
    systemStock: number | null
    physicalStock: number | null
    difference: number | null
    countedBy: number | null
  }

  export type OpnameItemMinAggregateOutputType = {
    id: number | null
    sessionId: number | null
    productId: number | null
    systemStock: number | null
    physicalStock: number | null
    difference: number | null
    note: string | null
    countedBy: number | null
    countedAt: Date | null
    createdAt: Date | null
  }

  export type OpnameItemMaxAggregateOutputType = {
    id: number | null
    sessionId: number | null
    productId: number | null
    systemStock: number | null
    physicalStock: number | null
    difference: number | null
    note: string | null
    countedBy: number | null
    countedAt: Date | null
    createdAt: Date | null
  }

  export type OpnameItemCountAggregateOutputType = {
    id: number
    sessionId: number
    productId: number
    systemStock: number
    physicalStock: number
    difference: number
    note: number
    countedBy: number
    countedAt: number
    createdAt: number
    _all: number
  }


  export type OpnameItemAvgAggregateInputType = {
    id?: true
    sessionId?: true
    productId?: true
    systemStock?: true
    physicalStock?: true
    difference?: true
    countedBy?: true
  }

  export type OpnameItemSumAggregateInputType = {
    id?: true
    sessionId?: true
    productId?: true
    systemStock?: true
    physicalStock?: true
    difference?: true
    countedBy?: true
  }

  export type OpnameItemMinAggregateInputType = {
    id?: true
    sessionId?: true
    productId?: true
    systemStock?: true
    physicalStock?: true
    difference?: true
    note?: true
    countedBy?: true
    countedAt?: true
    createdAt?: true
  }

  export type OpnameItemMaxAggregateInputType = {
    id?: true
    sessionId?: true
    productId?: true
    systemStock?: true
    physicalStock?: true
    difference?: true
    note?: true
    countedBy?: true
    countedAt?: true
    createdAt?: true
  }

  export type OpnameItemCountAggregateInputType = {
    id?: true
    sessionId?: true
    productId?: true
    systemStock?: true
    physicalStock?: true
    difference?: true
    note?: true
    countedBy?: true
    countedAt?: true
    createdAt?: true
    _all?: true
  }

  export type OpnameItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpnameItem to aggregate.
     */
    where?: OpnameItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpnameItems to fetch.
     */
    orderBy?: OpnameItemOrderByWithRelationInput | OpnameItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpnameItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpnameItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpnameItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OpnameItems
    **/
    _count?: true | OpnameItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OpnameItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OpnameItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpnameItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpnameItemMaxAggregateInputType
  }

  export type GetOpnameItemAggregateType<T extends OpnameItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOpnameItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpnameItem[P]>
      : GetScalarType<T[P], AggregateOpnameItem[P]>
  }




  export type OpnameItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpnameItemWhereInput
    orderBy?: OpnameItemOrderByWithAggregationInput | OpnameItemOrderByWithAggregationInput[]
    by: OpnameItemScalarFieldEnum[] | OpnameItemScalarFieldEnum
    having?: OpnameItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpnameItemCountAggregateInputType | true
    _avg?: OpnameItemAvgAggregateInputType
    _sum?: OpnameItemSumAggregateInputType
    _min?: OpnameItemMinAggregateInputType
    _max?: OpnameItemMaxAggregateInputType
  }

  export type OpnameItemGroupByOutputType = {
    id: number
    sessionId: number
    productId: number
    systemStock: number
    physicalStock: number | null
    difference: number | null
    note: string | null
    countedBy: number | null
    countedAt: Date | null
    createdAt: Date
    _count: OpnameItemCountAggregateOutputType | null
    _avg: OpnameItemAvgAggregateOutputType | null
    _sum: OpnameItemSumAggregateOutputType | null
    _min: OpnameItemMinAggregateOutputType | null
    _max: OpnameItemMaxAggregateOutputType | null
  }

  type GetOpnameItemGroupByPayload<T extends OpnameItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpnameItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpnameItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpnameItemGroupByOutputType[P]>
            : GetScalarType<T[P], OpnameItemGroupByOutputType[P]>
        }
      >
    >


  export type OpnameItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    productId?: boolean
    systemStock?: boolean
    physicalStock?: boolean
    difference?: boolean
    note?: boolean
    countedBy?: boolean
    countedAt?: boolean
    createdAt?: boolean
    session?: boolean | OpnameSessionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    counter?: boolean | OpnameItem$counterArgs<ExtArgs>
  }, ExtArgs["result"]["opnameItem"]>

  export type OpnameItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    productId?: boolean
    systemStock?: boolean
    physicalStock?: boolean
    difference?: boolean
    note?: boolean
    countedBy?: boolean
    countedAt?: boolean
    createdAt?: boolean
    session?: boolean | OpnameSessionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    counter?: boolean | OpnameItem$counterArgs<ExtArgs>
  }, ExtArgs["result"]["opnameItem"]>

  export type OpnameItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    productId?: boolean
    systemStock?: boolean
    physicalStock?: boolean
    difference?: boolean
    note?: boolean
    countedBy?: boolean
    countedAt?: boolean
    createdAt?: boolean
    session?: boolean | OpnameSessionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    counter?: boolean | OpnameItem$counterArgs<ExtArgs>
  }, ExtArgs["result"]["opnameItem"]>

  export type OpnameItemSelectScalar = {
    id?: boolean
    sessionId?: boolean
    productId?: boolean
    systemStock?: boolean
    physicalStock?: boolean
    difference?: boolean
    note?: boolean
    countedBy?: boolean
    countedAt?: boolean
    createdAt?: boolean
  }

  export type OpnameItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "productId" | "systemStock" | "physicalStock" | "difference" | "note" | "countedBy" | "countedAt" | "createdAt", ExtArgs["result"]["opnameItem"]>
  export type OpnameItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | OpnameSessionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    counter?: boolean | OpnameItem$counterArgs<ExtArgs>
  }
  export type OpnameItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | OpnameSessionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    counter?: boolean | OpnameItem$counterArgs<ExtArgs>
  }
  export type OpnameItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | OpnameSessionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    counter?: boolean | OpnameItem$counterArgs<ExtArgs>
  }

  export type $OpnameItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OpnameItem"
    objects: {
      session: Prisma.$OpnameSessionPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
      counter: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sessionId: number
      productId: number
      systemStock: number
      physicalStock: number | null
      difference: number | null
      note: string | null
      countedBy: number | null
      countedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["opnameItem"]>
    composites: {}
  }

  type OpnameItemGetPayload<S extends boolean | null | undefined | OpnameItemDefaultArgs> = $Result.GetResult<Prisma.$OpnameItemPayload, S>

  type OpnameItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OpnameItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OpnameItemCountAggregateInputType | true
    }

  export interface OpnameItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OpnameItem'], meta: { name: 'OpnameItem' } }
    /**
     * Find zero or one OpnameItem that matches the filter.
     * @param {OpnameItemFindUniqueArgs} args - Arguments to find a OpnameItem
     * @example
     * // Get one OpnameItem
     * const opnameItem = await prisma.opnameItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OpnameItemFindUniqueArgs>(args: SelectSubset<T, OpnameItemFindUniqueArgs<ExtArgs>>): Prisma__OpnameItemClient<$Result.GetResult<Prisma.$OpnameItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OpnameItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OpnameItemFindUniqueOrThrowArgs} args - Arguments to find a OpnameItem
     * @example
     * // Get one OpnameItem
     * const opnameItem = await prisma.opnameItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OpnameItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OpnameItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OpnameItemClient<$Result.GetResult<Prisma.$OpnameItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OpnameItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpnameItemFindFirstArgs} args - Arguments to find a OpnameItem
     * @example
     * // Get one OpnameItem
     * const opnameItem = await prisma.opnameItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OpnameItemFindFirstArgs>(args?: SelectSubset<T, OpnameItemFindFirstArgs<ExtArgs>>): Prisma__OpnameItemClient<$Result.GetResult<Prisma.$OpnameItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OpnameItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpnameItemFindFirstOrThrowArgs} args - Arguments to find a OpnameItem
     * @example
     * // Get one OpnameItem
     * const opnameItem = await prisma.opnameItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OpnameItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OpnameItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OpnameItemClient<$Result.GetResult<Prisma.$OpnameItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OpnameItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpnameItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OpnameItems
     * const opnameItems = await prisma.opnameItem.findMany()
     * 
     * // Get first 10 OpnameItems
     * const opnameItems = await prisma.opnameItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const opnameItemWithIdOnly = await prisma.opnameItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OpnameItemFindManyArgs>(args?: SelectSubset<T, OpnameItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpnameItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OpnameItem.
     * @param {OpnameItemCreateArgs} args - Arguments to create a OpnameItem.
     * @example
     * // Create one OpnameItem
     * const OpnameItem = await prisma.opnameItem.create({
     *   data: {
     *     // ... data to create a OpnameItem
     *   }
     * })
     * 
     */
    create<T extends OpnameItemCreateArgs>(args: SelectSubset<T, OpnameItemCreateArgs<ExtArgs>>): Prisma__OpnameItemClient<$Result.GetResult<Prisma.$OpnameItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OpnameItems.
     * @param {OpnameItemCreateManyArgs} args - Arguments to create many OpnameItems.
     * @example
     * // Create many OpnameItems
     * const opnameItem = await prisma.opnameItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OpnameItemCreateManyArgs>(args?: SelectSubset<T, OpnameItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OpnameItems and returns the data saved in the database.
     * @param {OpnameItemCreateManyAndReturnArgs} args - Arguments to create many OpnameItems.
     * @example
     * // Create many OpnameItems
     * const opnameItem = await prisma.opnameItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OpnameItems and only return the `id`
     * const opnameItemWithIdOnly = await prisma.opnameItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OpnameItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OpnameItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpnameItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OpnameItem.
     * @param {OpnameItemDeleteArgs} args - Arguments to delete one OpnameItem.
     * @example
     * // Delete one OpnameItem
     * const OpnameItem = await prisma.opnameItem.delete({
     *   where: {
     *     // ... filter to delete one OpnameItem
     *   }
     * })
     * 
     */
    delete<T extends OpnameItemDeleteArgs>(args: SelectSubset<T, OpnameItemDeleteArgs<ExtArgs>>): Prisma__OpnameItemClient<$Result.GetResult<Prisma.$OpnameItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OpnameItem.
     * @param {OpnameItemUpdateArgs} args - Arguments to update one OpnameItem.
     * @example
     * // Update one OpnameItem
     * const opnameItem = await prisma.opnameItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OpnameItemUpdateArgs>(args: SelectSubset<T, OpnameItemUpdateArgs<ExtArgs>>): Prisma__OpnameItemClient<$Result.GetResult<Prisma.$OpnameItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OpnameItems.
     * @param {OpnameItemDeleteManyArgs} args - Arguments to filter OpnameItems to delete.
     * @example
     * // Delete a few OpnameItems
     * const { count } = await prisma.opnameItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OpnameItemDeleteManyArgs>(args?: SelectSubset<T, OpnameItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpnameItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpnameItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OpnameItems
     * const opnameItem = await prisma.opnameItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OpnameItemUpdateManyArgs>(args: SelectSubset<T, OpnameItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpnameItems and returns the data updated in the database.
     * @param {OpnameItemUpdateManyAndReturnArgs} args - Arguments to update many OpnameItems.
     * @example
     * // Update many OpnameItems
     * const opnameItem = await prisma.opnameItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OpnameItems and only return the `id`
     * const opnameItemWithIdOnly = await prisma.opnameItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OpnameItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OpnameItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpnameItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OpnameItem.
     * @param {OpnameItemUpsertArgs} args - Arguments to update or create a OpnameItem.
     * @example
     * // Update or create a OpnameItem
     * const opnameItem = await prisma.opnameItem.upsert({
     *   create: {
     *     // ... data to create a OpnameItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OpnameItem we want to update
     *   }
     * })
     */
    upsert<T extends OpnameItemUpsertArgs>(args: SelectSubset<T, OpnameItemUpsertArgs<ExtArgs>>): Prisma__OpnameItemClient<$Result.GetResult<Prisma.$OpnameItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OpnameItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpnameItemCountArgs} args - Arguments to filter OpnameItems to count.
     * @example
     * // Count the number of OpnameItems
     * const count = await prisma.opnameItem.count({
     *   where: {
     *     // ... the filter for the OpnameItems we want to count
     *   }
     * })
    **/
    count<T extends OpnameItemCountArgs>(
      args?: Subset<T, OpnameItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpnameItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OpnameItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpnameItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OpnameItemAggregateArgs>(args: Subset<T, OpnameItemAggregateArgs>): Prisma.PrismaPromise<GetOpnameItemAggregateType<T>>

    /**
     * Group by OpnameItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpnameItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OpnameItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpnameItemGroupByArgs['orderBy'] }
        : { orderBy?: OpnameItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OpnameItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpnameItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OpnameItem model
   */
  readonly fields: OpnameItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OpnameItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OpnameItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends OpnameSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OpnameSessionDefaultArgs<ExtArgs>>): Prisma__OpnameSessionClient<$Result.GetResult<Prisma.$OpnameSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    counter<T extends OpnameItem$counterArgs<ExtArgs> = {}>(args?: Subset<T, OpnameItem$counterArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OpnameItem model
   */
  interface OpnameItemFieldRefs {
    readonly id: FieldRef<"OpnameItem", 'Int'>
    readonly sessionId: FieldRef<"OpnameItem", 'Int'>
    readonly productId: FieldRef<"OpnameItem", 'Int'>
    readonly systemStock: FieldRef<"OpnameItem", 'Int'>
    readonly physicalStock: FieldRef<"OpnameItem", 'Int'>
    readonly difference: FieldRef<"OpnameItem", 'Int'>
    readonly note: FieldRef<"OpnameItem", 'String'>
    readonly countedBy: FieldRef<"OpnameItem", 'Int'>
    readonly countedAt: FieldRef<"OpnameItem", 'DateTime'>
    readonly createdAt: FieldRef<"OpnameItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OpnameItem findUnique
   */
  export type OpnameItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameItem
     */
    select?: OpnameItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameItem
     */
    omit?: OpnameItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameItemInclude<ExtArgs> | null
    /**
     * Filter, which OpnameItem to fetch.
     */
    where: OpnameItemWhereUniqueInput
  }

  /**
   * OpnameItem findUniqueOrThrow
   */
  export type OpnameItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameItem
     */
    select?: OpnameItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameItem
     */
    omit?: OpnameItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameItemInclude<ExtArgs> | null
    /**
     * Filter, which OpnameItem to fetch.
     */
    where: OpnameItemWhereUniqueInput
  }

  /**
   * OpnameItem findFirst
   */
  export type OpnameItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameItem
     */
    select?: OpnameItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameItem
     */
    omit?: OpnameItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameItemInclude<ExtArgs> | null
    /**
     * Filter, which OpnameItem to fetch.
     */
    where?: OpnameItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpnameItems to fetch.
     */
    orderBy?: OpnameItemOrderByWithRelationInput | OpnameItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpnameItems.
     */
    cursor?: OpnameItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpnameItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpnameItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpnameItems.
     */
    distinct?: OpnameItemScalarFieldEnum | OpnameItemScalarFieldEnum[]
  }

  /**
   * OpnameItem findFirstOrThrow
   */
  export type OpnameItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameItem
     */
    select?: OpnameItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameItem
     */
    omit?: OpnameItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameItemInclude<ExtArgs> | null
    /**
     * Filter, which OpnameItem to fetch.
     */
    where?: OpnameItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpnameItems to fetch.
     */
    orderBy?: OpnameItemOrderByWithRelationInput | OpnameItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpnameItems.
     */
    cursor?: OpnameItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpnameItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpnameItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpnameItems.
     */
    distinct?: OpnameItemScalarFieldEnum | OpnameItemScalarFieldEnum[]
  }

  /**
   * OpnameItem findMany
   */
  export type OpnameItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameItem
     */
    select?: OpnameItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameItem
     */
    omit?: OpnameItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameItemInclude<ExtArgs> | null
    /**
     * Filter, which OpnameItems to fetch.
     */
    where?: OpnameItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpnameItems to fetch.
     */
    orderBy?: OpnameItemOrderByWithRelationInput | OpnameItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OpnameItems.
     */
    cursor?: OpnameItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpnameItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpnameItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpnameItems.
     */
    distinct?: OpnameItemScalarFieldEnum | OpnameItemScalarFieldEnum[]
  }

  /**
   * OpnameItem create
   */
  export type OpnameItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameItem
     */
    select?: OpnameItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameItem
     */
    omit?: OpnameItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OpnameItem.
     */
    data: XOR<OpnameItemCreateInput, OpnameItemUncheckedCreateInput>
  }

  /**
   * OpnameItem createMany
   */
  export type OpnameItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OpnameItems.
     */
    data: OpnameItemCreateManyInput | OpnameItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OpnameItem createManyAndReturn
   */
  export type OpnameItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameItem
     */
    select?: OpnameItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameItem
     */
    omit?: OpnameItemOmit<ExtArgs> | null
    /**
     * The data used to create many OpnameItems.
     */
    data: OpnameItemCreateManyInput | OpnameItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OpnameItem update
   */
  export type OpnameItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameItem
     */
    select?: OpnameItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameItem
     */
    omit?: OpnameItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OpnameItem.
     */
    data: XOR<OpnameItemUpdateInput, OpnameItemUncheckedUpdateInput>
    /**
     * Choose, which OpnameItem to update.
     */
    where: OpnameItemWhereUniqueInput
  }

  /**
   * OpnameItem updateMany
   */
  export type OpnameItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OpnameItems.
     */
    data: XOR<OpnameItemUpdateManyMutationInput, OpnameItemUncheckedUpdateManyInput>
    /**
     * Filter which OpnameItems to update
     */
    where?: OpnameItemWhereInput
    /**
     * Limit how many OpnameItems to update.
     */
    limit?: number
  }

  /**
   * OpnameItem updateManyAndReturn
   */
  export type OpnameItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameItem
     */
    select?: OpnameItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameItem
     */
    omit?: OpnameItemOmit<ExtArgs> | null
    /**
     * The data used to update OpnameItems.
     */
    data: XOR<OpnameItemUpdateManyMutationInput, OpnameItemUncheckedUpdateManyInput>
    /**
     * Filter which OpnameItems to update
     */
    where?: OpnameItemWhereInput
    /**
     * Limit how many OpnameItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OpnameItem upsert
   */
  export type OpnameItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameItem
     */
    select?: OpnameItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameItem
     */
    omit?: OpnameItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OpnameItem to update in case it exists.
     */
    where: OpnameItemWhereUniqueInput
    /**
     * In case the OpnameItem found by the `where` argument doesn't exist, create a new OpnameItem with this data.
     */
    create: XOR<OpnameItemCreateInput, OpnameItemUncheckedCreateInput>
    /**
     * In case the OpnameItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpnameItemUpdateInput, OpnameItemUncheckedUpdateInput>
  }

  /**
   * OpnameItem delete
   */
  export type OpnameItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameItem
     */
    select?: OpnameItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameItem
     */
    omit?: OpnameItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameItemInclude<ExtArgs> | null
    /**
     * Filter which OpnameItem to delete.
     */
    where: OpnameItemWhereUniqueInput
  }

  /**
   * OpnameItem deleteMany
   */
  export type OpnameItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpnameItems to delete
     */
    where?: OpnameItemWhereInput
    /**
     * Limit how many OpnameItems to delete.
     */
    limit?: number
  }

  /**
   * OpnameItem.counter
   */
  export type OpnameItem$counterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * OpnameItem without action
   */
  export type OpnameItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpnameItem
     */
    select?: OpnameItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpnameItem
     */
    omit?: OpnameItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpnameItemInclude<ExtArgs> | null
  }


  /**
   * Model MarketplaceAccount
   */

  export type AggregateMarketplaceAccount = {
    _count: MarketplaceAccountCountAggregateOutputType | null
    _avg: MarketplaceAccountAvgAggregateOutputType | null
    _sum: MarketplaceAccountSumAggregateOutputType | null
    _min: MarketplaceAccountMinAggregateOutputType | null
    _max: MarketplaceAccountMaxAggregateOutputType | null
  }

  export type MarketplaceAccountAvgAggregateOutputType = {
    id: number | null
  }

  export type MarketplaceAccountSumAggregateOutputType = {
    id: number | null
  }

  export type MarketplaceAccountMinAggregateOutputType = {
    id: number | null
    marketplace: string | null
    shopId: string | null
    shopName: string | null
    accessToken: string | null
    refreshToken: string | null
    tokenExpiresAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MarketplaceAccountMaxAggregateOutputType = {
    id: number | null
    marketplace: string | null
    shopId: string | null
    shopName: string | null
    accessToken: string | null
    refreshToken: string | null
    tokenExpiresAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MarketplaceAccountCountAggregateOutputType = {
    id: number
    marketplace: number
    shopId: number
    shopName: number
    accessToken: number
    refreshToken: number
    tokenExpiresAt: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MarketplaceAccountAvgAggregateInputType = {
    id?: true
  }

  export type MarketplaceAccountSumAggregateInputType = {
    id?: true
  }

  export type MarketplaceAccountMinAggregateInputType = {
    id?: true
    marketplace?: true
    shopId?: true
    shopName?: true
    accessToken?: true
    refreshToken?: true
    tokenExpiresAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MarketplaceAccountMaxAggregateInputType = {
    id?: true
    marketplace?: true
    shopId?: true
    shopName?: true
    accessToken?: true
    refreshToken?: true
    tokenExpiresAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MarketplaceAccountCountAggregateInputType = {
    id?: true
    marketplace?: true
    shopId?: true
    shopName?: true
    accessToken?: true
    refreshToken?: true
    tokenExpiresAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MarketplaceAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketplaceAccount to aggregate.
     */
    where?: MarketplaceAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketplaceAccounts to fetch.
     */
    orderBy?: MarketplaceAccountOrderByWithRelationInput | MarketplaceAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketplaceAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketplaceAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketplaceAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarketplaceAccounts
    **/
    _count?: true | MarketplaceAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarketplaceAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarketplaceAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketplaceAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketplaceAccountMaxAggregateInputType
  }

  export type GetMarketplaceAccountAggregateType<T extends MarketplaceAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketplaceAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketplaceAccount[P]>
      : GetScalarType<T[P], AggregateMarketplaceAccount[P]>
  }




  export type MarketplaceAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketplaceAccountWhereInput
    orderBy?: MarketplaceAccountOrderByWithAggregationInput | MarketplaceAccountOrderByWithAggregationInput[]
    by: MarketplaceAccountScalarFieldEnum[] | MarketplaceAccountScalarFieldEnum
    having?: MarketplaceAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketplaceAccountCountAggregateInputType | true
    _avg?: MarketplaceAccountAvgAggregateInputType
    _sum?: MarketplaceAccountSumAggregateInputType
    _min?: MarketplaceAccountMinAggregateInputType
    _max?: MarketplaceAccountMaxAggregateInputType
  }

  export type MarketplaceAccountGroupByOutputType = {
    id: number
    marketplace: string
    shopId: string
    shopName: string | null
    accessToken: string | null
    refreshToken: string | null
    tokenExpiresAt: Date | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: MarketplaceAccountCountAggregateOutputType | null
    _avg: MarketplaceAccountAvgAggregateOutputType | null
    _sum: MarketplaceAccountSumAggregateOutputType | null
    _min: MarketplaceAccountMinAggregateOutputType | null
    _max: MarketplaceAccountMaxAggregateOutputType | null
  }

  type GetMarketplaceAccountGroupByPayload<T extends MarketplaceAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketplaceAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketplaceAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketplaceAccountGroupByOutputType[P]>
            : GetScalarType<T[P], MarketplaceAccountGroupByOutputType[P]>
        }
      >
    >


  export type MarketplaceAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketplace?: boolean
    shopId?: boolean
    shopName?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiresAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productMappings?: boolean | MarketplaceAccount$productMappingsArgs<ExtArgs>
    syncJobs?: boolean | MarketplaceAccount$syncJobsArgs<ExtArgs>
    _count?: boolean | MarketplaceAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marketplaceAccount"]>

  export type MarketplaceAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketplace?: boolean
    shopId?: boolean
    shopName?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiresAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["marketplaceAccount"]>

  export type MarketplaceAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketplace?: boolean
    shopId?: boolean
    shopName?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiresAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["marketplaceAccount"]>

  export type MarketplaceAccountSelectScalar = {
    id?: boolean
    marketplace?: boolean
    shopId?: boolean
    shopName?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiresAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MarketplaceAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "marketplace" | "shopId" | "shopName" | "accessToken" | "refreshToken" | "tokenExpiresAt" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["marketplaceAccount"]>
  export type MarketplaceAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productMappings?: boolean | MarketplaceAccount$productMappingsArgs<ExtArgs>
    syncJobs?: boolean | MarketplaceAccount$syncJobsArgs<ExtArgs>
    _count?: boolean | MarketplaceAccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MarketplaceAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MarketplaceAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MarketplaceAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarketplaceAccount"
    objects: {
      productMappings: Prisma.$ProductChannelMappingPayload<ExtArgs>[]
      syncJobs: Prisma.$StockSyncJobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      marketplace: string
      shopId: string
      shopName: string | null
      accessToken: string | null
      refreshToken: string | null
      tokenExpiresAt: Date | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["marketplaceAccount"]>
    composites: {}
  }

  type MarketplaceAccountGetPayload<S extends boolean | null | undefined | MarketplaceAccountDefaultArgs> = $Result.GetResult<Prisma.$MarketplaceAccountPayload, S>

  type MarketplaceAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketplaceAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketplaceAccountCountAggregateInputType | true
    }

  export interface MarketplaceAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarketplaceAccount'], meta: { name: 'MarketplaceAccount' } }
    /**
     * Find zero or one MarketplaceAccount that matches the filter.
     * @param {MarketplaceAccountFindUniqueArgs} args - Arguments to find a MarketplaceAccount
     * @example
     * // Get one MarketplaceAccount
     * const marketplaceAccount = await prisma.marketplaceAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketplaceAccountFindUniqueArgs>(args: SelectSubset<T, MarketplaceAccountFindUniqueArgs<ExtArgs>>): Prisma__MarketplaceAccountClient<$Result.GetResult<Prisma.$MarketplaceAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MarketplaceAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketplaceAccountFindUniqueOrThrowArgs} args - Arguments to find a MarketplaceAccount
     * @example
     * // Get one MarketplaceAccount
     * const marketplaceAccount = await prisma.marketplaceAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketplaceAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketplaceAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketplaceAccountClient<$Result.GetResult<Prisma.$MarketplaceAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketplaceAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketplaceAccountFindFirstArgs} args - Arguments to find a MarketplaceAccount
     * @example
     * // Get one MarketplaceAccount
     * const marketplaceAccount = await prisma.marketplaceAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketplaceAccountFindFirstArgs>(args?: SelectSubset<T, MarketplaceAccountFindFirstArgs<ExtArgs>>): Prisma__MarketplaceAccountClient<$Result.GetResult<Prisma.$MarketplaceAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketplaceAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketplaceAccountFindFirstOrThrowArgs} args - Arguments to find a MarketplaceAccount
     * @example
     * // Get one MarketplaceAccount
     * const marketplaceAccount = await prisma.marketplaceAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketplaceAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketplaceAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketplaceAccountClient<$Result.GetResult<Prisma.$MarketplaceAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MarketplaceAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketplaceAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketplaceAccounts
     * const marketplaceAccounts = await prisma.marketplaceAccount.findMany()
     * 
     * // Get first 10 MarketplaceAccounts
     * const marketplaceAccounts = await prisma.marketplaceAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketplaceAccountWithIdOnly = await prisma.marketplaceAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketplaceAccountFindManyArgs>(args?: SelectSubset<T, MarketplaceAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketplaceAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MarketplaceAccount.
     * @param {MarketplaceAccountCreateArgs} args - Arguments to create a MarketplaceAccount.
     * @example
     * // Create one MarketplaceAccount
     * const MarketplaceAccount = await prisma.marketplaceAccount.create({
     *   data: {
     *     // ... data to create a MarketplaceAccount
     *   }
     * })
     * 
     */
    create<T extends MarketplaceAccountCreateArgs>(args: SelectSubset<T, MarketplaceAccountCreateArgs<ExtArgs>>): Prisma__MarketplaceAccountClient<$Result.GetResult<Prisma.$MarketplaceAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MarketplaceAccounts.
     * @param {MarketplaceAccountCreateManyArgs} args - Arguments to create many MarketplaceAccounts.
     * @example
     * // Create many MarketplaceAccounts
     * const marketplaceAccount = await prisma.marketplaceAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketplaceAccountCreateManyArgs>(args?: SelectSubset<T, MarketplaceAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarketplaceAccounts and returns the data saved in the database.
     * @param {MarketplaceAccountCreateManyAndReturnArgs} args - Arguments to create many MarketplaceAccounts.
     * @example
     * // Create many MarketplaceAccounts
     * const marketplaceAccount = await prisma.marketplaceAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarketplaceAccounts and only return the `id`
     * const marketplaceAccountWithIdOnly = await prisma.marketplaceAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketplaceAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketplaceAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketplaceAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MarketplaceAccount.
     * @param {MarketplaceAccountDeleteArgs} args - Arguments to delete one MarketplaceAccount.
     * @example
     * // Delete one MarketplaceAccount
     * const MarketplaceAccount = await prisma.marketplaceAccount.delete({
     *   where: {
     *     // ... filter to delete one MarketplaceAccount
     *   }
     * })
     * 
     */
    delete<T extends MarketplaceAccountDeleteArgs>(args: SelectSubset<T, MarketplaceAccountDeleteArgs<ExtArgs>>): Prisma__MarketplaceAccountClient<$Result.GetResult<Prisma.$MarketplaceAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MarketplaceAccount.
     * @param {MarketplaceAccountUpdateArgs} args - Arguments to update one MarketplaceAccount.
     * @example
     * // Update one MarketplaceAccount
     * const marketplaceAccount = await prisma.marketplaceAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketplaceAccountUpdateArgs>(args: SelectSubset<T, MarketplaceAccountUpdateArgs<ExtArgs>>): Prisma__MarketplaceAccountClient<$Result.GetResult<Prisma.$MarketplaceAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MarketplaceAccounts.
     * @param {MarketplaceAccountDeleteManyArgs} args - Arguments to filter MarketplaceAccounts to delete.
     * @example
     * // Delete a few MarketplaceAccounts
     * const { count } = await prisma.marketplaceAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketplaceAccountDeleteManyArgs>(args?: SelectSubset<T, MarketplaceAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketplaceAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketplaceAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketplaceAccounts
     * const marketplaceAccount = await prisma.marketplaceAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketplaceAccountUpdateManyArgs>(args: SelectSubset<T, MarketplaceAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketplaceAccounts and returns the data updated in the database.
     * @param {MarketplaceAccountUpdateManyAndReturnArgs} args - Arguments to update many MarketplaceAccounts.
     * @example
     * // Update many MarketplaceAccounts
     * const marketplaceAccount = await prisma.marketplaceAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MarketplaceAccounts and only return the `id`
     * const marketplaceAccountWithIdOnly = await prisma.marketplaceAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarketplaceAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, MarketplaceAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketplaceAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MarketplaceAccount.
     * @param {MarketplaceAccountUpsertArgs} args - Arguments to update or create a MarketplaceAccount.
     * @example
     * // Update or create a MarketplaceAccount
     * const marketplaceAccount = await prisma.marketplaceAccount.upsert({
     *   create: {
     *     // ... data to create a MarketplaceAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketplaceAccount we want to update
     *   }
     * })
     */
    upsert<T extends MarketplaceAccountUpsertArgs>(args: SelectSubset<T, MarketplaceAccountUpsertArgs<ExtArgs>>): Prisma__MarketplaceAccountClient<$Result.GetResult<Prisma.$MarketplaceAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MarketplaceAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketplaceAccountCountArgs} args - Arguments to filter MarketplaceAccounts to count.
     * @example
     * // Count the number of MarketplaceAccounts
     * const count = await prisma.marketplaceAccount.count({
     *   where: {
     *     // ... the filter for the MarketplaceAccounts we want to count
     *   }
     * })
    **/
    count<T extends MarketplaceAccountCountArgs>(
      args?: Subset<T, MarketplaceAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketplaceAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarketplaceAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketplaceAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarketplaceAccountAggregateArgs>(args: Subset<T, MarketplaceAccountAggregateArgs>): Prisma.PrismaPromise<GetMarketplaceAccountAggregateType<T>>

    /**
     * Group by MarketplaceAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketplaceAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarketplaceAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketplaceAccountGroupByArgs['orderBy'] }
        : { orderBy?: MarketplaceAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarketplaceAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketplaceAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarketplaceAccount model
   */
  readonly fields: MarketplaceAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarketplaceAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketplaceAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productMappings<T extends MarketplaceAccount$productMappingsArgs<ExtArgs> = {}>(args?: Subset<T, MarketplaceAccount$productMappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductChannelMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    syncJobs<T extends MarketplaceAccount$syncJobsArgs<ExtArgs> = {}>(args?: Subset<T, MarketplaceAccount$syncJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockSyncJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MarketplaceAccount model
   */
  interface MarketplaceAccountFieldRefs {
    readonly id: FieldRef<"MarketplaceAccount", 'Int'>
    readonly marketplace: FieldRef<"MarketplaceAccount", 'String'>
    readonly shopId: FieldRef<"MarketplaceAccount", 'String'>
    readonly shopName: FieldRef<"MarketplaceAccount", 'String'>
    readonly accessToken: FieldRef<"MarketplaceAccount", 'String'>
    readonly refreshToken: FieldRef<"MarketplaceAccount", 'String'>
    readonly tokenExpiresAt: FieldRef<"MarketplaceAccount", 'DateTime'>
    readonly isActive: FieldRef<"MarketplaceAccount", 'Boolean'>
    readonly createdAt: FieldRef<"MarketplaceAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"MarketplaceAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MarketplaceAccount findUnique
   */
  export type MarketplaceAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceAccount
     */
    select?: MarketplaceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketplaceAccount
     */
    omit?: MarketplaceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketplaceAccountInclude<ExtArgs> | null
    /**
     * Filter, which MarketplaceAccount to fetch.
     */
    where: MarketplaceAccountWhereUniqueInput
  }

  /**
   * MarketplaceAccount findUniqueOrThrow
   */
  export type MarketplaceAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceAccount
     */
    select?: MarketplaceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketplaceAccount
     */
    omit?: MarketplaceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketplaceAccountInclude<ExtArgs> | null
    /**
     * Filter, which MarketplaceAccount to fetch.
     */
    where: MarketplaceAccountWhereUniqueInput
  }

  /**
   * MarketplaceAccount findFirst
   */
  export type MarketplaceAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceAccount
     */
    select?: MarketplaceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketplaceAccount
     */
    omit?: MarketplaceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketplaceAccountInclude<ExtArgs> | null
    /**
     * Filter, which MarketplaceAccount to fetch.
     */
    where?: MarketplaceAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketplaceAccounts to fetch.
     */
    orderBy?: MarketplaceAccountOrderByWithRelationInput | MarketplaceAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketplaceAccounts.
     */
    cursor?: MarketplaceAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketplaceAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketplaceAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketplaceAccounts.
     */
    distinct?: MarketplaceAccountScalarFieldEnum | MarketplaceAccountScalarFieldEnum[]
  }

  /**
   * MarketplaceAccount findFirstOrThrow
   */
  export type MarketplaceAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceAccount
     */
    select?: MarketplaceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketplaceAccount
     */
    omit?: MarketplaceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketplaceAccountInclude<ExtArgs> | null
    /**
     * Filter, which MarketplaceAccount to fetch.
     */
    where?: MarketplaceAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketplaceAccounts to fetch.
     */
    orderBy?: MarketplaceAccountOrderByWithRelationInput | MarketplaceAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketplaceAccounts.
     */
    cursor?: MarketplaceAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketplaceAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketplaceAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketplaceAccounts.
     */
    distinct?: MarketplaceAccountScalarFieldEnum | MarketplaceAccountScalarFieldEnum[]
  }

  /**
   * MarketplaceAccount findMany
   */
  export type MarketplaceAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceAccount
     */
    select?: MarketplaceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketplaceAccount
     */
    omit?: MarketplaceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketplaceAccountInclude<ExtArgs> | null
    /**
     * Filter, which MarketplaceAccounts to fetch.
     */
    where?: MarketplaceAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketplaceAccounts to fetch.
     */
    orderBy?: MarketplaceAccountOrderByWithRelationInput | MarketplaceAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarketplaceAccounts.
     */
    cursor?: MarketplaceAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketplaceAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketplaceAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketplaceAccounts.
     */
    distinct?: MarketplaceAccountScalarFieldEnum | MarketplaceAccountScalarFieldEnum[]
  }

  /**
   * MarketplaceAccount create
   */
  export type MarketplaceAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceAccount
     */
    select?: MarketplaceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketplaceAccount
     */
    omit?: MarketplaceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketplaceAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a MarketplaceAccount.
     */
    data: XOR<MarketplaceAccountCreateInput, MarketplaceAccountUncheckedCreateInput>
  }

  /**
   * MarketplaceAccount createMany
   */
  export type MarketplaceAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketplaceAccounts.
     */
    data: MarketplaceAccountCreateManyInput | MarketplaceAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketplaceAccount createManyAndReturn
   */
  export type MarketplaceAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceAccount
     */
    select?: MarketplaceAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketplaceAccount
     */
    omit?: MarketplaceAccountOmit<ExtArgs> | null
    /**
     * The data used to create many MarketplaceAccounts.
     */
    data: MarketplaceAccountCreateManyInput | MarketplaceAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketplaceAccount update
   */
  export type MarketplaceAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceAccount
     */
    select?: MarketplaceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketplaceAccount
     */
    omit?: MarketplaceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketplaceAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a MarketplaceAccount.
     */
    data: XOR<MarketplaceAccountUpdateInput, MarketplaceAccountUncheckedUpdateInput>
    /**
     * Choose, which MarketplaceAccount to update.
     */
    where: MarketplaceAccountWhereUniqueInput
  }

  /**
   * MarketplaceAccount updateMany
   */
  export type MarketplaceAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketplaceAccounts.
     */
    data: XOR<MarketplaceAccountUpdateManyMutationInput, MarketplaceAccountUncheckedUpdateManyInput>
    /**
     * Filter which MarketplaceAccounts to update
     */
    where?: MarketplaceAccountWhereInput
    /**
     * Limit how many MarketplaceAccounts to update.
     */
    limit?: number
  }

  /**
   * MarketplaceAccount updateManyAndReturn
   */
  export type MarketplaceAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceAccount
     */
    select?: MarketplaceAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketplaceAccount
     */
    omit?: MarketplaceAccountOmit<ExtArgs> | null
    /**
     * The data used to update MarketplaceAccounts.
     */
    data: XOR<MarketplaceAccountUpdateManyMutationInput, MarketplaceAccountUncheckedUpdateManyInput>
    /**
     * Filter which MarketplaceAccounts to update
     */
    where?: MarketplaceAccountWhereInput
    /**
     * Limit how many MarketplaceAccounts to update.
     */
    limit?: number
  }

  /**
   * MarketplaceAccount upsert
   */
  export type MarketplaceAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceAccount
     */
    select?: MarketplaceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketplaceAccount
     */
    omit?: MarketplaceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketplaceAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the MarketplaceAccount to update in case it exists.
     */
    where: MarketplaceAccountWhereUniqueInput
    /**
     * In case the MarketplaceAccount found by the `where` argument doesn't exist, create a new MarketplaceAccount with this data.
     */
    create: XOR<MarketplaceAccountCreateInput, MarketplaceAccountUncheckedCreateInput>
    /**
     * In case the MarketplaceAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketplaceAccountUpdateInput, MarketplaceAccountUncheckedUpdateInput>
  }

  /**
   * MarketplaceAccount delete
   */
  export type MarketplaceAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceAccount
     */
    select?: MarketplaceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketplaceAccount
     */
    omit?: MarketplaceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketplaceAccountInclude<ExtArgs> | null
    /**
     * Filter which MarketplaceAccount to delete.
     */
    where: MarketplaceAccountWhereUniqueInput
  }

  /**
   * MarketplaceAccount deleteMany
   */
  export type MarketplaceAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketplaceAccounts to delete
     */
    where?: MarketplaceAccountWhereInput
    /**
     * Limit how many MarketplaceAccounts to delete.
     */
    limit?: number
  }

  /**
   * MarketplaceAccount.productMappings
   */
  export type MarketplaceAccount$productMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductChannelMapping
     */
    select?: ProductChannelMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductChannelMapping
     */
    omit?: ProductChannelMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductChannelMappingInclude<ExtArgs> | null
    where?: ProductChannelMappingWhereInput
    orderBy?: ProductChannelMappingOrderByWithRelationInput | ProductChannelMappingOrderByWithRelationInput[]
    cursor?: ProductChannelMappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductChannelMappingScalarFieldEnum | ProductChannelMappingScalarFieldEnum[]
  }

  /**
   * MarketplaceAccount.syncJobs
   */
  export type MarketplaceAccount$syncJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockSyncJob
     */
    select?: StockSyncJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockSyncJob
     */
    omit?: StockSyncJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockSyncJobInclude<ExtArgs> | null
    where?: StockSyncJobWhereInput
    orderBy?: StockSyncJobOrderByWithRelationInput | StockSyncJobOrderByWithRelationInput[]
    cursor?: StockSyncJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockSyncJobScalarFieldEnum | StockSyncJobScalarFieldEnum[]
  }

  /**
   * MarketplaceAccount without action
   */
  export type MarketplaceAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceAccount
     */
    select?: MarketplaceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketplaceAccount
     */
    omit?: MarketplaceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketplaceAccountInclude<ExtArgs> | null
  }


  /**
   * Model ProductChannelMapping
   */

  export type AggregateProductChannelMapping = {
    _count: ProductChannelMappingCountAggregateOutputType | null
    _avg: ProductChannelMappingAvgAggregateOutputType | null
    _sum: ProductChannelMappingSumAggregateOutputType | null
    _min: ProductChannelMappingMinAggregateOutputType | null
    _max: ProductChannelMappingMaxAggregateOutputType | null
  }

  export type ProductChannelMappingAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    marketplaceAccountId: number | null
    safetyStock: number | null
    lastSyncedStock: number | null
  }

  export type ProductChannelMappingSumAggregateOutputType = {
    id: number | null
    productId: number | null
    marketplaceAccountId: number | null
    safetyStock: number | null
    lastSyncedStock: number | null
  }

  export type ProductChannelMappingMinAggregateOutputType = {
    id: number | null
    productId: number | null
    marketplaceAccountId: number | null
    externalProductId: string | null
    externalVariantId: string | null
    externalSku: string | null
    safetyStock: number | null
    lastSyncedStock: number | null
    lastSyncedAt: Date | null
    syncStatus: string | null
    syncError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductChannelMappingMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    marketplaceAccountId: number | null
    externalProductId: string | null
    externalVariantId: string | null
    externalSku: string | null
    safetyStock: number | null
    lastSyncedStock: number | null
    lastSyncedAt: Date | null
    syncStatus: string | null
    syncError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductChannelMappingCountAggregateOutputType = {
    id: number
    productId: number
    marketplaceAccountId: number
    externalProductId: number
    externalVariantId: number
    externalSku: number
    safetyStock: number
    lastSyncedStock: number
    lastSyncedAt: number
    syncStatus: number
    syncError: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductChannelMappingAvgAggregateInputType = {
    id?: true
    productId?: true
    marketplaceAccountId?: true
    safetyStock?: true
    lastSyncedStock?: true
  }

  export type ProductChannelMappingSumAggregateInputType = {
    id?: true
    productId?: true
    marketplaceAccountId?: true
    safetyStock?: true
    lastSyncedStock?: true
  }

  export type ProductChannelMappingMinAggregateInputType = {
    id?: true
    productId?: true
    marketplaceAccountId?: true
    externalProductId?: true
    externalVariantId?: true
    externalSku?: true
    safetyStock?: true
    lastSyncedStock?: true
    lastSyncedAt?: true
    syncStatus?: true
    syncError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductChannelMappingMaxAggregateInputType = {
    id?: true
    productId?: true
    marketplaceAccountId?: true
    externalProductId?: true
    externalVariantId?: true
    externalSku?: true
    safetyStock?: true
    lastSyncedStock?: true
    lastSyncedAt?: true
    syncStatus?: true
    syncError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductChannelMappingCountAggregateInputType = {
    id?: true
    productId?: true
    marketplaceAccountId?: true
    externalProductId?: true
    externalVariantId?: true
    externalSku?: true
    safetyStock?: true
    lastSyncedStock?: true
    lastSyncedAt?: true
    syncStatus?: true
    syncError?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductChannelMappingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductChannelMapping to aggregate.
     */
    where?: ProductChannelMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductChannelMappings to fetch.
     */
    orderBy?: ProductChannelMappingOrderByWithRelationInput | ProductChannelMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductChannelMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductChannelMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductChannelMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductChannelMappings
    **/
    _count?: true | ProductChannelMappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductChannelMappingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductChannelMappingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductChannelMappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductChannelMappingMaxAggregateInputType
  }

  export type GetProductChannelMappingAggregateType<T extends ProductChannelMappingAggregateArgs> = {
        [P in keyof T & keyof AggregateProductChannelMapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductChannelMapping[P]>
      : GetScalarType<T[P], AggregateProductChannelMapping[P]>
  }




  export type ProductChannelMappingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductChannelMappingWhereInput
    orderBy?: ProductChannelMappingOrderByWithAggregationInput | ProductChannelMappingOrderByWithAggregationInput[]
    by: ProductChannelMappingScalarFieldEnum[] | ProductChannelMappingScalarFieldEnum
    having?: ProductChannelMappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductChannelMappingCountAggregateInputType | true
    _avg?: ProductChannelMappingAvgAggregateInputType
    _sum?: ProductChannelMappingSumAggregateInputType
    _min?: ProductChannelMappingMinAggregateInputType
    _max?: ProductChannelMappingMaxAggregateInputType
  }

  export type ProductChannelMappingGroupByOutputType = {
    id: number
    productId: number
    marketplaceAccountId: number
    externalProductId: string
    externalVariantId: string | null
    externalSku: string | null
    safetyStock: number
    lastSyncedStock: number | null
    lastSyncedAt: Date | null
    syncStatus: string
    syncError: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductChannelMappingCountAggregateOutputType | null
    _avg: ProductChannelMappingAvgAggregateOutputType | null
    _sum: ProductChannelMappingSumAggregateOutputType | null
    _min: ProductChannelMappingMinAggregateOutputType | null
    _max: ProductChannelMappingMaxAggregateOutputType | null
  }

  type GetProductChannelMappingGroupByPayload<T extends ProductChannelMappingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductChannelMappingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductChannelMappingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductChannelMappingGroupByOutputType[P]>
            : GetScalarType<T[P], ProductChannelMappingGroupByOutputType[P]>
        }
      >
    >


  export type ProductChannelMappingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    marketplaceAccountId?: boolean
    externalProductId?: boolean
    externalVariantId?: boolean
    externalSku?: boolean
    safetyStock?: boolean
    lastSyncedStock?: boolean
    lastSyncedAt?: boolean
    syncStatus?: boolean
    syncError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    marketplaceAccount?: boolean | MarketplaceAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productChannelMapping"]>

  export type ProductChannelMappingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    marketplaceAccountId?: boolean
    externalProductId?: boolean
    externalVariantId?: boolean
    externalSku?: boolean
    safetyStock?: boolean
    lastSyncedStock?: boolean
    lastSyncedAt?: boolean
    syncStatus?: boolean
    syncError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    marketplaceAccount?: boolean | MarketplaceAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productChannelMapping"]>

  export type ProductChannelMappingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    marketplaceAccountId?: boolean
    externalProductId?: boolean
    externalVariantId?: boolean
    externalSku?: boolean
    safetyStock?: boolean
    lastSyncedStock?: boolean
    lastSyncedAt?: boolean
    syncStatus?: boolean
    syncError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    marketplaceAccount?: boolean | MarketplaceAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productChannelMapping"]>

  export type ProductChannelMappingSelectScalar = {
    id?: boolean
    productId?: boolean
    marketplaceAccountId?: boolean
    externalProductId?: boolean
    externalVariantId?: boolean
    externalSku?: boolean
    safetyStock?: boolean
    lastSyncedStock?: boolean
    lastSyncedAt?: boolean
    syncStatus?: boolean
    syncError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductChannelMappingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "marketplaceAccountId" | "externalProductId" | "externalVariantId" | "externalSku" | "safetyStock" | "lastSyncedStock" | "lastSyncedAt" | "syncStatus" | "syncError" | "createdAt" | "updatedAt", ExtArgs["result"]["productChannelMapping"]>
  export type ProductChannelMappingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    marketplaceAccount?: boolean | MarketplaceAccountDefaultArgs<ExtArgs>
  }
  export type ProductChannelMappingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    marketplaceAccount?: boolean | MarketplaceAccountDefaultArgs<ExtArgs>
  }
  export type ProductChannelMappingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    marketplaceAccount?: boolean | MarketplaceAccountDefaultArgs<ExtArgs>
  }

  export type $ProductChannelMappingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductChannelMapping"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      marketplaceAccount: Prisma.$MarketplaceAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      marketplaceAccountId: number
      externalProductId: string
      externalVariantId: string | null
      externalSku: string | null
      safetyStock: number
      lastSyncedStock: number | null
      lastSyncedAt: Date | null
      syncStatus: string
      syncError: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productChannelMapping"]>
    composites: {}
  }

  type ProductChannelMappingGetPayload<S extends boolean | null | undefined | ProductChannelMappingDefaultArgs> = $Result.GetResult<Prisma.$ProductChannelMappingPayload, S>

  type ProductChannelMappingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductChannelMappingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductChannelMappingCountAggregateInputType | true
    }

  export interface ProductChannelMappingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductChannelMapping'], meta: { name: 'ProductChannelMapping' } }
    /**
     * Find zero or one ProductChannelMapping that matches the filter.
     * @param {ProductChannelMappingFindUniqueArgs} args - Arguments to find a ProductChannelMapping
     * @example
     * // Get one ProductChannelMapping
     * const productChannelMapping = await prisma.productChannelMapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductChannelMappingFindUniqueArgs>(args: SelectSubset<T, ProductChannelMappingFindUniqueArgs<ExtArgs>>): Prisma__ProductChannelMappingClient<$Result.GetResult<Prisma.$ProductChannelMappingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductChannelMapping that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductChannelMappingFindUniqueOrThrowArgs} args - Arguments to find a ProductChannelMapping
     * @example
     * // Get one ProductChannelMapping
     * const productChannelMapping = await prisma.productChannelMapping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductChannelMappingFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductChannelMappingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductChannelMappingClient<$Result.GetResult<Prisma.$ProductChannelMappingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductChannelMapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductChannelMappingFindFirstArgs} args - Arguments to find a ProductChannelMapping
     * @example
     * // Get one ProductChannelMapping
     * const productChannelMapping = await prisma.productChannelMapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductChannelMappingFindFirstArgs>(args?: SelectSubset<T, ProductChannelMappingFindFirstArgs<ExtArgs>>): Prisma__ProductChannelMappingClient<$Result.GetResult<Prisma.$ProductChannelMappingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductChannelMapping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductChannelMappingFindFirstOrThrowArgs} args - Arguments to find a ProductChannelMapping
     * @example
     * // Get one ProductChannelMapping
     * const productChannelMapping = await prisma.productChannelMapping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductChannelMappingFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductChannelMappingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductChannelMappingClient<$Result.GetResult<Prisma.$ProductChannelMappingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductChannelMappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductChannelMappingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductChannelMappings
     * const productChannelMappings = await prisma.productChannelMapping.findMany()
     * 
     * // Get first 10 ProductChannelMappings
     * const productChannelMappings = await prisma.productChannelMapping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productChannelMappingWithIdOnly = await prisma.productChannelMapping.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductChannelMappingFindManyArgs>(args?: SelectSubset<T, ProductChannelMappingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductChannelMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductChannelMapping.
     * @param {ProductChannelMappingCreateArgs} args - Arguments to create a ProductChannelMapping.
     * @example
     * // Create one ProductChannelMapping
     * const ProductChannelMapping = await prisma.productChannelMapping.create({
     *   data: {
     *     // ... data to create a ProductChannelMapping
     *   }
     * })
     * 
     */
    create<T extends ProductChannelMappingCreateArgs>(args: SelectSubset<T, ProductChannelMappingCreateArgs<ExtArgs>>): Prisma__ProductChannelMappingClient<$Result.GetResult<Prisma.$ProductChannelMappingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductChannelMappings.
     * @param {ProductChannelMappingCreateManyArgs} args - Arguments to create many ProductChannelMappings.
     * @example
     * // Create many ProductChannelMappings
     * const productChannelMapping = await prisma.productChannelMapping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductChannelMappingCreateManyArgs>(args?: SelectSubset<T, ProductChannelMappingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductChannelMappings and returns the data saved in the database.
     * @param {ProductChannelMappingCreateManyAndReturnArgs} args - Arguments to create many ProductChannelMappings.
     * @example
     * // Create many ProductChannelMappings
     * const productChannelMapping = await prisma.productChannelMapping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductChannelMappings and only return the `id`
     * const productChannelMappingWithIdOnly = await prisma.productChannelMapping.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductChannelMappingCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductChannelMappingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductChannelMappingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductChannelMapping.
     * @param {ProductChannelMappingDeleteArgs} args - Arguments to delete one ProductChannelMapping.
     * @example
     * // Delete one ProductChannelMapping
     * const ProductChannelMapping = await prisma.productChannelMapping.delete({
     *   where: {
     *     // ... filter to delete one ProductChannelMapping
     *   }
     * })
     * 
     */
    delete<T extends ProductChannelMappingDeleteArgs>(args: SelectSubset<T, ProductChannelMappingDeleteArgs<ExtArgs>>): Prisma__ProductChannelMappingClient<$Result.GetResult<Prisma.$ProductChannelMappingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductChannelMapping.
     * @param {ProductChannelMappingUpdateArgs} args - Arguments to update one ProductChannelMapping.
     * @example
     * // Update one ProductChannelMapping
     * const productChannelMapping = await prisma.productChannelMapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductChannelMappingUpdateArgs>(args: SelectSubset<T, ProductChannelMappingUpdateArgs<ExtArgs>>): Prisma__ProductChannelMappingClient<$Result.GetResult<Prisma.$ProductChannelMappingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductChannelMappings.
     * @param {ProductChannelMappingDeleteManyArgs} args - Arguments to filter ProductChannelMappings to delete.
     * @example
     * // Delete a few ProductChannelMappings
     * const { count } = await prisma.productChannelMapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductChannelMappingDeleteManyArgs>(args?: SelectSubset<T, ProductChannelMappingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductChannelMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductChannelMappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductChannelMappings
     * const productChannelMapping = await prisma.productChannelMapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductChannelMappingUpdateManyArgs>(args: SelectSubset<T, ProductChannelMappingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductChannelMappings and returns the data updated in the database.
     * @param {ProductChannelMappingUpdateManyAndReturnArgs} args - Arguments to update many ProductChannelMappings.
     * @example
     * // Update many ProductChannelMappings
     * const productChannelMapping = await prisma.productChannelMapping.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductChannelMappings and only return the `id`
     * const productChannelMappingWithIdOnly = await prisma.productChannelMapping.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductChannelMappingUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductChannelMappingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductChannelMappingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductChannelMapping.
     * @param {ProductChannelMappingUpsertArgs} args - Arguments to update or create a ProductChannelMapping.
     * @example
     * // Update or create a ProductChannelMapping
     * const productChannelMapping = await prisma.productChannelMapping.upsert({
     *   create: {
     *     // ... data to create a ProductChannelMapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductChannelMapping we want to update
     *   }
     * })
     */
    upsert<T extends ProductChannelMappingUpsertArgs>(args: SelectSubset<T, ProductChannelMappingUpsertArgs<ExtArgs>>): Prisma__ProductChannelMappingClient<$Result.GetResult<Prisma.$ProductChannelMappingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductChannelMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductChannelMappingCountArgs} args - Arguments to filter ProductChannelMappings to count.
     * @example
     * // Count the number of ProductChannelMappings
     * const count = await prisma.productChannelMapping.count({
     *   where: {
     *     // ... the filter for the ProductChannelMappings we want to count
     *   }
     * })
    **/
    count<T extends ProductChannelMappingCountArgs>(
      args?: Subset<T, ProductChannelMappingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductChannelMappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductChannelMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductChannelMappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductChannelMappingAggregateArgs>(args: Subset<T, ProductChannelMappingAggregateArgs>): Prisma.PrismaPromise<GetProductChannelMappingAggregateType<T>>

    /**
     * Group by ProductChannelMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductChannelMappingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductChannelMappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductChannelMappingGroupByArgs['orderBy'] }
        : { orderBy?: ProductChannelMappingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductChannelMappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductChannelMappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductChannelMapping model
   */
  readonly fields: ProductChannelMappingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductChannelMapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductChannelMappingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    marketplaceAccount<T extends MarketplaceAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarketplaceAccountDefaultArgs<ExtArgs>>): Prisma__MarketplaceAccountClient<$Result.GetResult<Prisma.$MarketplaceAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductChannelMapping model
   */
  interface ProductChannelMappingFieldRefs {
    readonly id: FieldRef<"ProductChannelMapping", 'Int'>
    readonly productId: FieldRef<"ProductChannelMapping", 'Int'>
    readonly marketplaceAccountId: FieldRef<"ProductChannelMapping", 'Int'>
    readonly externalProductId: FieldRef<"ProductChannelMapping", 'String'>
    readonly externalVariantId: FieldRef<"ProductChannelMapping", 'String'>
    readonly externalSku: FieldRef<"ProductChannelMapping", 'String'>
    readonly safetyStock: FieldRef<"ProductChannelMapping", 'Int'>
    readonly lastSyncedStock: FieldRef<"ProductChannelMapping", 'Int'>
    readonly lastSyncedAt: FieldRef<"ProductChannelMapping", 'DateTime'>
    readonly syncStatus: FieldRef<"ProductChannelMapping", 'String'>
    readonly syncError: FieldRef<"ProductChannelMapping", 'String'>
    readonly createdAt: FieldRef<"ProductChannelMapping", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductChannelMapping", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductChannelMapping findUnique
   */
  export type ProductChannelMappingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductChannelMapping
     */
    select?: ProductChannelMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductChannelMapping
     */
    omit?: ProductChannelMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductChannelMappingInclude<ExtArgs> | null
    /**
     * Filter, which ProductChannelMapping to fetch.
     */
    where: ProductChannelMappingWhereUniqueInput
  }

  /**
   * ProductChannelMapping findUniqueOrThrow
   */
  export type ProductChannelMappingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductChannelMapping
     */
    select?: ProductChannelMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductChannelMapping
     */
    omit?: ProductChannelMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductChannelMappingInclude<ExtArgs> | null
    /**
     * Filter, which ProductChannelMapping to fetch.
     */
    where: ProductChannelMappingWhereUniqueInput
  }

  /**
   * ProductChannelMapping findFirst
   */
  export type ProductChannelMappingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductChannelMapping
     */
    select?: ProductChannelMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductChannelMapping
     */
    omit?: ProductChannelMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductChannelMappingInclude<ExtArgs> | null
    /**
     * Filter, which ProductChannelMapping to fetch.
     */
    where?: ProductChannelMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductChannelMappings to fetch.
     */
    orderBy?: ProductChannelMappingOrderByWithRelationInput | ProductChannelMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductChannelMappings.
     */
    cursor?: ProductChannelMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductChannelMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductChannelMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductChannelMappings.
     */
    distinct?: ProductChannelMappingScalarFieldEnum | ProductChannelMappingScalarFieldEnum[]
  }

  /**
   * ProductChannelMapping findFirstOrThrow
   */
  export type ProductChannelMappingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductChannelMapping
     */
    select?: ProductChannelMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductChannelMapping
     */
    omit?: ProductChannelMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductChannelMappingInclude<ExtArgs> | null
    /**
     * Filter, which ProductChannelMapping to fetch.
     */
    where?: ProductChannelMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductChannelMappings to fetch.
     */
    orderBy?: ProductChannelMappingOrderByWithRelationInput | ProductChannelMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductChannelMappings.
     */
    cursor?: ProductChannelMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductChannelMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductChannelMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductChannelMappings.
     */
    distinct?: ProductChannelMappingScalarFieldEnum | ProductChannelMappingScalarFieldEnum[]
  }

  /**
   * ProductChannelMapping findMany
   */
  export type ProductChannelMappingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductChannelMapping
     */
    select?: ProductChannelMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductChannelMapping
     */
    omit?: ProductChannelMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductChannelMappingInclude<ExtArgs> | null
    /**
     * Filter, which ProductChannelMappings to fetch.
     */
    where?: ProductChannelMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductChannelMappings to fetch.
     */
    orderBy?: ProductChannelMappingOrderByWithRelationInput | ProductChannelMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductChannelMappings.
     */
    cursor?: ProductChannelMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductChannelMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductChannelMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductChannelMappings.
     */
    distinct?: ProductChannelMappingScalarFieldEnum | ProductChannelMappingScalarFieldEnum[]
  }

  /**
   * ProductChannelMapping create
   */
  export type ProductChannelMappingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductChannelMapping
     */
    select?: ProductChannelMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductChannelMapping
     */
    omit?: ProductChannelMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductChannelMappingInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductChannelMapping.
     */
    data: XOR<ProductChannelMappingCreateInput, ProductChannelMappingUncheckedCreateInput>
  }

  /**
   * ProductChannelMapping createMany
   */
  export type ProductChannelMappingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductChannelMappings.
     */
    data: ProductChannelMappingCreateManyInput | ProductChannelMappingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductChannelMapping createManyAndReturn
   */
  export type ProductChannelMappingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductChannelMapping
     */
    select?: ProductChannelMappingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductChannelMapping
     */
    omit?: ProductChannelMappingOmit<ExtArgs> | null
    /**
     * The data used to create many ProductChannelMappings.
     */
    data: ProductChannelMappingCreateManyInput | ProductChannelMappingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductChannelMappingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductChannelMapping update
   */
  export type ProductChannelMappingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductChannelMapping
     */
    select?: ProductChannelMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductChannelMapping
     */
    omit?: ProductChannelMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductChannelMappingInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductChannelMapping.
     */
    data: XOR<ProductChannelMappingUpdateInput, ProductChannelMappingUncheckedUpdateInput>
    /**
     * Choose, which ProductChannelMapping to update.
     */
    where: ProductChannelMappingWhereUniqueInput
  }

  /**
   * ProductChannelMapping updateMany
   */
  export type ProductChannelMappingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductChannelMappings.
     */
    data: XOR<ProductChannelMappingUpdateManyMutationInput, ProductChannelMappingUncheckedUpdateManyInput>
    /**
     * Filter which ProductChannelMappings to update
     */
    where?: ProductChannelMappingWhereInput
    /**
     * Limit how many ProductChannelMappings to update.
     */
    limit?: number
  }

  /**
   * ProductChannelMapping updateManyAndReturn
   */
  export type ProductChannelMappingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductChannelMapping
     */
    select?: ProductChannelMappingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductChannelMapping
     */
    omit?: ProductChannelMappingOmit<ExtArgs> | null
    /**
     * The data used to update ProductChannelMappings.
     */
    data: XOR<ProductChannelMappingUpdateManyMutationInput, ProductChannelMappingUncheckedUpdateManyInput>
    /**
     * Filter which ProductChannelMappings to update
     */
    where?: ProductChannelMappingWhereInput
    /**
     * Limit how many ProductChannelMappings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductChannelMappingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductChannelMapping upsert
   */
  export type ProductChannelMappingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductChannelMapping
     */
    select?: ProductChannelMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductChannelMapping
     */
    omit?: ProductChannelMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductChannelMappingInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductChannelMapping to update in case it exists.
     */
    where: ProductChannelMappingWhereUniqueInput
    /**
     * In case the ProductChannelMapping found by the `where` argument doesn't exist, create a new ProductChannelMapping with this data.
     */
    create: XOR<ProductChannelMappingCreateInput, ProductChannelMappingUncheckedCreateInput>
    /**
     * In case the ProductChannelMapping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductChannelMappingUpdateInput, ProductChannelMappingUncheckedUpdateInput>
  }

  /**
   * ProductChannelMapping delete
   */
  export type ProductChannelMappingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductChannelMapping
     */
    select?: ProductChannelMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductChannelMapping
     */
    omit?: ProductChannelMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductChannelMappingInclude<ExtArgs> | null
    /**
     * Filter which ProductChannelMapping to delete.
     */
    where: ProductChannelMappingWhereUniqueInput
  }

  /**
   * ProductChannelMapping deleteMany
   */
  export type ProductChannelMappingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductChannelMappings to delete
     */
    where?: ProductChannelMappingWhereInput
    /**
     * Limit how many ProductChannelMappings to delete.
     */
    limit?: number
  }

  /**
   * ProductChannelMapping without action
   */
  export type ProductChannelMappingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductChannelMapping
     */
    select?: ProductChannelMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductChannelMapping
     */
    omit?: ProductChannelMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductChannelMappingInclude<ExtArgs> | null
  }


  /**
   * Model StockSyncJob
   */

  export type AggregateStockSyncJob = {
    _count: StockSyncJobCountAggregateOutputType | null
    _avg: StockSyncJobAvgAggregateOutputType | null
    _sum: StockSyncJobSumAggregateOutputType | null
    _min: StockSyncJobMinAggregateOutputType | null
    _max: StockSyncJobMaxAggregateOutputType | null
  }

  export type StockSyncJobAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    marketplaceAccountId: number | null
    targetStock: number | null
    attempts: number | null
  }

  export type StockSyncJobSumAggregateOutputType = {
    id: number | null
    productId: number | null
    marketplaceAccountId: number | null
    targetStock: number | null
    attempts: number | null
  }

  export type StockSyncJobMinAggregateOutputType = {
    id: number | null
    productId: number | null
    marketplaceAccountId: number | null
    targetStock: number | null
    status: string | null
    attempts: number | null
    lastError: string | null
    createdAt: Date | null
    processedAt: Date | null
  }

  export type StockSyncJobMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    marketplaceAccountId: number | null
    targetStock: number | null
    status: string | null
    attempts: number | null
    lastError: string | null
    createdAt: Date | null
    processedAt: Date | null
  }

  export type StockSyncJobCountAggregateOutputType = {
    id: number
    productId: number
    marketplaceAccountId: number
    targetStock: number
    status: number
    attempts: number
    lastError: number
    createdAt: number
    processedAt: number
    _all: number
  }


  export type StockSyncJobAvgAggregateInputType = {
    id?: true
    productId?: true
    marketplaceAccountId?: true
    targetStock?: true
    attempts?: true
  }

  export type StockSyncJobSumAggregateInputType = {
    id?: true
    productId?: true
    marketplaceAccountId?: true
    targetStock?: true
    attempts?: true
  }

  export type StockSyncJobMinAggregateInputType = {
    id?: true
    productId?: true
    marketplaceAccountId?: true
    targetStock?: true
    status?: true
    attempts?: true
    lastError?: true
    createdAt?: true
    processedAt?: true
  }

  export type StockSyncJobMaxAggregateInputType = {
    id?: true
    productId?: true
    marketplaceAccountId?: true
    targetStock?: true
    status?: true
    attempts?: true
    lastError?: true
    createdAt?: true
    processedAt?: true
  }

  export type StockSyncJobCountAggregateInputType = {
    id?: true
    productId?: true
    marketplaceAccountId?: true
    targetStock?: true
    status?: true
    attempts?: true
    lastError?: true
    createdAt?: true
    processedAt?: true
    _all?: true
  }

  export type StockSyncJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockSyncJob to aggregate.
     */
    where?: StockSyncJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockSyncJobs to fetch.
     */
    orderBy?: StockSyncJobOrderByWithRelationInput | StockSyncJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockSyncJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockSyncJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockSyncJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockSyncJobs
    **/
    _count?: true | StockSyncJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockSyncJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockSyncJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockSyncJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockSyncJobMaxAggregateInputType
  }

  export type GetStockSyncJobAggregateType<T extends StockSyncJobAggregateArgs> = {
        [P in keyof T & keyof AggregateStockSyncJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockSyncJob[P]>
      : GetScalarType<T[P], AggregateStockSyncJob[P]>
  }




  export type StockSyncJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockSyncJobWhereInput
    orderBy?: StockSyncJobOrderByWithAggregationInput | StockSyncJobOrderByWithAggregationInput[]
    by: StockSyncJobScalarFieldEnum[] | StockSyncJobScalarFieldEnum
    having?: StockSyncJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockSyncJobCountAggregateInputType | true
    _avg?: StockSyncJobAvgAggregateInputType
    _sum?: StockSyncJobSumAggregateInputType
    _min?: StockSyncJobMinAggregateInputType
    _max?: StockSyncJobMaxAggregateInputType
  }

  export type StockSyncJobGroupByOutputType = {
    id: number
    productId: number
    marketplaceAccountId: number | null
    targetStock: number
    status: string
    attempts: number
    lastError: string | null
    createdAt: Date
    processedAt: Date | null
    _count: StockSyncJobCountAggregateOutputType | null
    _avg: StockSyncJobAvgAggregateOutputType | null
    _sum: StockSyncJobSumAggregateOutputType | null
    _min: StockSyncJobMinAggregateOutputType | null
    _max: StockSyncJobMaxAggregateOutputType | null
  }

  type GetStockSyncJobGroupByPayload<T extends StockSyncJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockSyncJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockSyncJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockSyncJobGroupByOutputType[P]>
            : GetScalarType<T[P], StockSyncJobGroupByOutputType[P]>
        }
      >
    >


  export type StockSyncJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    marketplaceAccountId?: boolean
    targetStock?: boolean
    status?: boolean
    attempts?: boolean
    lastError?: boolean
    createdAt?: boolean
    processedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    marketplaceAccount?: boolean | StockSyncJob$marketplaceAccountArgs<ExtArgs>
  }, ExtArgs["result"]["stockSyncJob"]>

  export type StockSyncJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    marketplaceAccountId?: boolean
    targetStock?: boolean
    status?: boolean
    attempts?: boolean
    lastError?: boolean
    createdAt?: boolean
    processedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    marketplaceAccount?: boolean | StockSyncJob$marketplaceAccountArgs<ExtArgs>
  }, ExtArgs["result"]["stockSyncJob"]>

  export type StockSyncJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    marketplaceAccountId?: boolean
    targetStock?: boolean
    status?: boolean
    attempts?: boolean
    lastError?: boolean
    createdAt?: boolean
    processedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    marketplaceAccount?: boolean | StockSyncJob$marketplaceAccountArgs<ExtArgs>
  }, ExtArgs["result"]["stockSyncJob"]>

  export type StockSyncJobSelectScalar = {
    id?: boolean
    productId?: boolean
    marketplaceAccountId?: boolean
    targetStock?: boolean
    status?: boolean
    attempts?: boolean
    lastError?: boolean
    createdAt?: boolean
    processedAt?: boolean
  }

  export type StockSyncJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "marketplaceAccountId" | "targetStock" | "status" | "attempts" | "lastError" | "createdAt" | "processedAt", ExtArgs["result"]["stockSyncJob"]>
  export type StockSyncJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    marketplaceAccount?: boolean | StockSyncJob$marketplaceAccountArgs<ExtArgs>
  }
  export type StockSyncJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    marketplaceAccount?: boolean | StockSyncJob$marketplaceAccountArgs<ExtArgs>
  }
  export type StockSyncJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    marketplaceAccount?: boolean | StockSyncJob$marketplaceAccountArgs<ExtArgs>
  }

  export type $StockSyncJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockSyncJob"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      marketplaceAccount: Prisma.$MarketplaceAccountPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      marketplaceAccountId: number | null
      targetStock: number
      status: string
      attempts: number
      lastError: string | null
      createdAt: Date
      processedAt: Date | null
    }, ExtArgs["result"]["stockSyncJob"]>
    composites: {}
  }

  type StockSyncJobGetPayload<S extends boolean | null | undefined | StockSyncJobDefaultArgs> = $Result.GetResult<Prisma.$StockSyncJobPayload, S>

  type StockSyncJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockSyncJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockSyncJobCountAggregateInputType | true
    }

  export interface StockSyncJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockSyncJob'], meta: { name: 'StockSyncJob' } }
    /**
     * Find zero or one StockSyncJob that matches the filter.
     * @param {StockSyncJobFindUniqueArgs} args - Arguments to find a StockSyncJob
     * @example
     * // Get one StockSyncJob
     * const stockSyncJob = await prisma.stockSyncJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockSyncJobFindUniqueArgs>(args: SelectSubset<T, StockSyncJobFindUniqueArgs<ExtArgs>>): Prisma__StockSyncJobClient<$Result.GetResult<Prisma.$StockSyncJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StockSyncJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockSyncJobFindUniqueOrThrowArgs} args - Arguments to find a StockSyncJob
     * @example
     * // Get one StockSyncJob
     * const stockSyncJob = await prisma.stockSyncJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockSyncJobFindUniqueOrThrowArgs>(args: SelectSubset<T, StockSyncJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockSyncJobClient<$Result.GetResult<Prisma.$StockSyncJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockSyncJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockSyncJobFindFirstArgs} args - Arguments to find a StockSyncJob
     * @example
     * // Get one StockSyncJob
     * const stockSyncJob = await prisma.stockSyncJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockSyncJobFindFirstArgs>(args?: SelectSubset<T, StockSyncJobFindFirstArgs<ExtArgs>>): Prisma__StockSyncJobClient<$Result.GetResult<Prisma.$StockSyncJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockSyncJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockSyncJobFindFirstOrThrowArgs} args - Arguments to find a StockSyncJob
     * @example
     * // Get one StockSyncJob
     * const stockSyncJob = await prisma.stockSyncJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockSyncJobFindFirstOrThrowArgs>(args?: SelectSubset<T, StockSyncJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockSyncJobClient<$Result.GetResult<Prisma.$StockSyncJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StockSyncJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockSyncJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockSyncJobs
     * const stockSyncJobs = await prisma.stockSyncJob.findMany()
     * 
     * // Get first 10 StockSyncJobs
     * const stockSyncJobs = await prisma.stockSyncJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockSyncJobWithIdOnly = await prisma.stockSyncJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockSyncJobFindManyArgs>(args?: SelectSubset<T, StockSyncJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockSyncJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StockSyncJob.
     * @param {StockSyncJobCreateArgs} args - Arguments to create a StockSyncJob.
     * @example
     * // Create one StockSyncJob
     * const StockSyncJob = await prisma.stockSyncJob.create({
     *   data: {
     *     // ... data to create a StockSyncJob
     *   }
     * })
     * 
     */
    create<T extends StockSyncJobCreateArgs>(args: SelectSubset<T, StockSyncJobCreateArgs<ExtArgs>>): Prisma__StockSyncJobClient<$Result.GetResult<Prisma.$StockSyncJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StockSyncJobs.
     * @param {StockSyncJobCreateManyArgs} args - Arguments to create many StockSyncJobs.
     * @example
     * // Create many StockSyncJobs
     * const stockSyncJob = await prisma.stockSyncJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockSyncJobCreateManyArgs>(args?: SelectSubset<T, StockSyncJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockSyncJobs and returns the data saved in the database.
     * @param {StockSyncJobCreateManyAndReturnArgs} args - Arguments to create many StockSyncJobs.
     * @example
     * // Create many StockSyncJobs
     * const stockSyncJob = await prisma.stockSyncJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockSyncJobs and only return the `id`
     * const stockSyncJobWithIdOnly = await prisma.stockSyncJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockSyncJobCreateManyAndReturnArgs>(args?: SelectSubset<T, StockSyncJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockSyncJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StockSyncJob.
     * @param {StockSyncJobDeleteArgs} args - Arguments to delete one StockSyncJob.
     * @example
     * // Delete one StockSyncJob
     * const StockSyncJob = await prisma.stockSyncJob.delete({
     *   where: {
     *     // ... filter to delete one StockSyncJob
     *   }
     * })
     * 
     */
    delete<T extends StockSyncJobDeleteArgs>(args: SelectSubset<T, StockSyncJobDeleteArgs<ExtArgs>>): Prisma__StockSyncJobClient<$Result.GetResult<Prisma.$StockSyncJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StockSyncJob.
     * @param {StockSyncJobUpdateArgs} args - Arguments to update one StockSyncJob.
     * @example
     * // Update one StockSyncJob
     * const stockSyncJob = await prisma.stockSyncJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockSyncJobUpdateArgs>(args: SelectSubset<T, StockSyncJobUpdateArgs<ExtArgs>>): Prisma__StockSyncJobClient<$Result.GetResult<Prisma.$StockSyncJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StockSyncJobs.
     * @param {StockSyncJobDeleteManyArgs} args - Arguments to filter StockSyncJobs to delete.
     * @example
     * // Delete a few StockSyncJobs
     * const { count } = await prisma.stockSyncJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockSyncJobDeleteManyArgs>(args?: SelectSubset<T, StockSyncJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockSyncJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockSyncJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockSyncJobs
     * const stockSyncJob = await prisma.stockSyncJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockSyncJobUpdateManyArgs>(args: SelectSubset<T, StockSyncJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockSyncJobs and returns the data updated in the database.
     * @param {StockSyncJobUpdateManyAndReturnArgs} args - Arguments to update many StockSyncJobs.
     * @example
     * // Update many StockSyncJobs
     * const stockSyncJob = await prisma.stockSyncJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StockSyncJobs and only return the `id`
     * const stockSyncJobWithIdOnly = await prisma.stockSyncJob.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StockSyncJobUpdateManyAndReturnArgs>(args: SelectSubset<T, StockSyncJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockSyncJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StockSyncJob.
     * @param {StockSyncJobUpsertArgs} args - Arguments to update or create a StockSyncJob.
     * @example
     * // Update or create a StockSyncJob
     * const stockSyncJob = await prisma.stockSyncJob.upsert({
     *   create: {
     *     // ... data to create a StockSyncJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockSyncJob we want to update
     *   }
     * })
     */
    upsert<T extends StockSyncJobUpsertArgs>(args: SelectSubset<T, StockSyncJobUpsertArgs<ExtArgs>>): Prisma__StockSyncJobClient<$Result.GetResult<Prisma.$StockSyncJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StockSyncJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockSyncJobCountArgs} args - Arguments to filter StockSyncJobs to count.
     * @example
     * // Count the number of StockSyncJobs
     * const count = await prisma.stockSyncJob.count({
     *   where: {
     *     // ... the filter for the StockSyncJobs we want to count
     *   }
     * })
    **/
    count<T extends StockSyncJobCountArgs>(
      args?: Subset<T, StockSyncJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockSyncJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockSyncJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockSyncJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockSyncJobAggregateArgs>(args: Subset<T, StockSyncJobAggregateArgs>): Prisma.PrismaPromise<GetStockSyncJobAggregateType<T>>

    /**
     * Group by StockSyncJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockSyncJobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockSyncJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockSyncJobGroupByArgs['orderBy'] }
        : { orderBy?: StockSyncJobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockSyncJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockSyncJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockSyncJob model
   */
  readonly fields: StockSyncJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockSyncJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockSyncJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    marketplaceAccount<T extends StockSyncJob$marketplaceAccountArgs<ExtArgs> = {}>(args?: Subset<T, StockSyncJob$marketplaceAccountArgs<ExtArgs>>): Prisma__MarketplaceAccountClient<$Result.GetResult<Prisma.$MarketplaceAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StockSyncJob model
   */
  interface StockSyncJobFieldRefs {
    readonly id: FieldRef<"StockSyncJob", 'Int'>
    readonly productId: FieldRef<"StockSyncJob", 'Int'>
    readonly marketplaceAccountId: FieldRef<"StockSyncJob", 'Int'>
    readonly targetStock: FieldRef<"StockSyncJob", 'Int'>
    readonly status: FieldRef<"StockSyncJob", 'String'>
    readonly attempts: FieldRef<"StockSyncJob", 'Int'>
    readonly lastError: FieldRef<"StockSyncJob", 'String'>
    readonly createdAt: FieldRef<"StockSyncJob", 'DateTime'>
    readonly processedAt: FieldRef<"StockSyncJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StockSyncJob findUnique
   */
  export type StockSyncJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockSyncJob
     */
    select?: StockSyncJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockSyncJob
     */
    omit?: StockSyncJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockSyncJobInclude<ExtArgs> | null
    /**
     * Filter, which StockSyncJob to fetch.
     */
    where: StockSyncJobWhereUniqueInput
  }

  /**
   * StockSyncJob findUniqueOrThrow
   */
  export type StockSyncJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockSyncJob
     */
    select?: StockSyncJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockSyncJob
     */
    omit?: StockSyncJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockSyncJobInclude<ExtArgs> | null
    /**
     * Filter, which StockSyncJob to fetch.
     */
    where: StockSyncJobWhereUniqueInput
  }

  /**
   * StockSyncJob findFirst
   */
  export type StockSyncJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockSyncJob
     */
    select?: StockSyncJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockSyncJob
     */
    omit?: StockSyncJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockSyncJobInclude<ExtArgs> | null
    /**
     * Filter, which StockSyncJob to fetch.
     */
    where?: StockSyncJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockSyncJobs to fetch.
     */
    orderBy?: StockSyncJobOrderByWithRelationInput | StockSyncJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockSyncJobs.
     */
    cursor?: StockSyncJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockSyncJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockSyncJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockSyncJobs.
     */
    distinct?: StockSyncJobScalarFieldEnum | StockSyncJobScalarFieldEnum[]
  }

  /**
   * StockSyncJob findFirstOrThrow
   */
  export type StockSyncJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockSyncJob
     */
    select?: StockSyncJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockSyncJob
     */
    omit?: StockSyncJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockSyncJobInclude<ExtArgs> | null
    /**
     * Filter, which StockSyncJob to fetch.
     */
    where?: StockSyncJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockSyncJobs to fetch.
     */
    orderBy?: StockSyncJobOrderByWithRelationInput | StockSyncJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockSyncJobs.
     */
    cursor?: StockSyncJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockSyncJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockSyncJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockSyncJobs.
     */
    distinct?: StockSyncJobScalarFieldEnum | StockSyncJobScalarFieldEnum[]
  }

  /**
   * StockSyncJob findMany
   */
  export type StockSyncJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockSyncJob
     */
    select?: StockSyncJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockSyncJob
     */
    omit?: StockSyncJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockSyncJobInclude<ExtArgs> | null
    /**
     * Filter, which StockSyncJobs to fetch.
     */
    where?: StockSyncJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockSyncJobs to fetch.
     */
    orderBy?: StockSyncJobOrderByWithRelationInput | StockSyncJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockSyncJobs.
     */
    cursor?: StockSyncJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockSyncJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockSyncJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockSyncJobs.
     */
    distinct?: StockSyncJobScalarFieldEnum | StockSyncJobScalarFieldEnum[]
  }

  /**
   * StockSyncJob create
   */
  export type StockSyncJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockSyncJob
     */
    select?: StockSyncJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockSyncJob
     */
    omit?: StockSyncJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockSyncJobInclude<ExtArgs> | null
    /**
     * The data needed to create a StockSyncJob.
     */
    data: XOR<StockSyncJobCreateInput, StockSyncJobUncheckedCreateInput>
  }

  /**
   * StockSyncJob createMany
   */
  export type StockSyncJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockSyncJobs.
     */
    data: StockSyncJobCreateManyInput | StockSyncJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockSyncJob createManyAndReturn
   */
  export type StockSyncJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockSyncJob
     */
    select?: StockSyncJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockSyncJob
     */
    omit?: StockSyncJobOmit<ExtArgs> | null
    /**
     * The data used to create many StockSyncJobs.
     */
    data: StockSyncJobCreateManyInput | StockSyncJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockSyncJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockSyncJob update
   */
  export type StockSyncJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockSyncJob
     */
    select?: StockSyncJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockSyncJob
     */
    omit?: StockSyncJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockSyncJobInclude<ExtArgs> | null
    /**
     * The data needed to update a StockSyncJob.
     */
    data: XOR<StockSyncJobUpdateInput, StockSyncJobUncheckedUpdateInput>
    /**
     * Choose, which StockSyncJob to update.
     */
    where: StockSyncJobWhereUniqueInput
  }

  /**
   * StockSyncJob updateMany
   */
  export type StockSyncJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockSyncJobs.
     */
    data: XOR<StockSyncJobUpdateManyMutationInput, StockSyncJobUncheckedUpdateManyInput>
    /**
     * Filter which StockSyncJobs to update
     */
    where?: StockSyncJobWhereInput
    /**
     * Limit how many StockSyncJobs to update.
     */
    limit?: number
  }

  /**
   * StockSyncJob updateManyAndReturn
   */
  export type StockSyncJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockSyncJob
     */
    select?: StockSyncJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockSyncJob
     */
    omit?: StockSyncJobOmit<ExtArgs> | null
    /**
     * The data used to update StockSyncJobs.
     */
    data: XOR<StockSyncJobUpdateManyMutationInput, StockSyncJobUncheckedUpdateManyInput>
    /**
     * Filter which StockSyncJobs to update
     */
    where?: StockSyncJobWhereInput
    /**
     * Limit how many StockSyncJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockSyncJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockSyncJob upsert
   */
  export type StockSyncJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockSyncJob
     */
    select?: StockSyncJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockSyncJob
     */
    omit?: StockSyncJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockSyncJobInclude<ExtArgs> | null
    /**
     * The filter to search for the StockSyncJob to update in case it exists.
     */
    where: StockSyncJobWhereUniqueInput
    /**
     * In case the StockSyncJob found by the `where` argument doesn't exist, create a new StockSyncJob with this data.
     */
    create: XOR<StockSyncJobCreateInput, StockSyncJobUncheckedCreateInput>
    /**
     * In case the StockSyncJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockSyncJobUpdateInput, StockSyncJobUncheckedUpdateInput>
  }

  /**
   * StockSyncJob delete
   */
  export type StockSyncJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockSyncJob
     */
    select?: StockSyncJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockSyncJob
     */
    omit?: StockSyncJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockSyncJobInclude<ExtArgs> | null
    /**
     * Filter which StockSyncJob to delete.
     */
    where: StockSyncJobWhereUniqueInput
  }

  /**
   * StockSyncJob deleteMany
   */
  export type StockSyncJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockSyncJobs to delete
     */
    where?: StockSyncJobWhereInput
    /**
     * Limit how many StockSyncJobs to delete.
     */
    limit?: number
  }

  /**
   * StockSyncJob.marketplaceAccount
   */
  export type StockSyncJob$marketplaceAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketplaceAccount
     */
    select?: MarketplaceAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketplaceAccount
     */
    omit?: MarketplaceAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketplaceAccountInclude<ExtArgs> | null
    where?: MarketplaceAccountWhereInput
  }

  /**
   * StockSyncJob without action
   */
  export type StockSyncJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockSyncJob
     */
    select?: StockSyncJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockSyncJob
     */
    omit?: StockSyncJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockSyncJobInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    contactName: 'contactName',
    phone: 'phone',
    email: 'email',
    address: 'address',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    sku: 'sku',
    name: 'name',
    categoryId: 'categoryId',
    unit: 'unit',
    purchasePrice: 'purchasePrice',
    sellingPrice: 'sellingPrice',
    minStock: 'minStock',
    currentStock: 'currentStock',
    imageUrl: 'imageUrl',
    isPerishable: 'isPerishable',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductBatchScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    batchCode: 'batchCode',
    quantity: 'quantity',
    expiredDate: 'expiredDate',
    receivedDate: 'receivedDate',
    createdAt: 'createdAt'
  };

  export type ProductBatchScalarFieldEnum = (typeof ProductBatchScalarFieldEnum)[keyof typeof ProductBatchScalarFieldEnum]


  export const StockMovementScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    type: 'type',
    quantity: 'quantity',
    referenceType: 'referenceType',
    referenceId: 'referenceId',
    supplierId: 'supplierId',
    note: 'note',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type StockMovementScalarFieldEnum = (typeof StockMovementScalarFieldEnum)[keyof typeof StockMovementScalarFieldEnum]


  export const OpnameSessionScalarFieldEnum: {
    id: 'id',
    code: 'code',
    title: 'title',
    status: 'status',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdBy: 'createdBy',
    approvedBy: 'approvedBy',
    approvedAt: 'approvedAt',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type OpnameSessionScalarFieldEnum = (typeof OpnameSessionScalarFieldEnum)[keyof typeof OpnameSessionScalarFieldEnum]


  export const OpnameItemScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    productId: 'productId',
    systemStock: 'systemStock',
    physicalStock: 'physicalStock',
    difference: 'difference',
    note: 'note',
    countedBy: 'countedBy',
    countedAt: 'countedAt',
    createdAt: 'createdAt'
  };

  export type OpnameItemScalarFieldEnum = (typeof OpnameItemScalarFieldEnum)[keyof typeof OpnameItemScalarFieldEnum]


  export const MarketplaceAccountScalarFieldEnum: {
    id: 'id',
    marketplace: 'marketplace',
    shopId: 'shopId',
    shopName: 'shopName',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    tokenExpiresAt: 'tokenExpiresAt',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MarketplaceAccountScalarFieldEnum = (typeof MarketplaceAccountScalarFieldEnum)[keyof typeof MarketplaceAccountScalarFieldEnum]


  export const ProductChannelMappingScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    marketplaceAccountId: 'marketplaceAccountId',
    externalProductId: 'externalProductId',
    externalVariantId: 'externalVariantId',
    externalSku: 'externalSku',
    safetyStock: 'safetyStock',
    lastSyncedStock: 'lastSyncedStock',
    lastSyncedAt: 'lastSyncedAt',
    syncStatus: 'syncStatus',
    syncError: 'syncError',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductChannelMappingScalarFieldEnum = (typeof ProductChannelMappingScalarFieldEnum)[keyof typeof ProductChannelMappingScalarFieldEnum]


  export const StockSyncJobScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    marketplaceAccountId: 'marketplaceAccountId',
    targetStock: 'targetStock',
    status: 'status',
    attempts: 'attempts',
    lastError: 'lastError',
    createdAt: 'createdAt',
    processedAt: 'processedAt'
  };

  export type StockSyncJobScalarFieldEnum = (typeof StockSyncJobScalarFieldEnum)[keyof typeof StockSyncJobScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    stockMovements?: StockMovementListRelationFilter
    opnameSessions?: OpnameSessionListRelationFilter
    approvedOpname?: OpnameSessionListRelationFilter
    countedItems?: OpnameItemListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    stockMovements?: StockMovementOrderByRelationAggregateInput
    opnameSessions?: OpnameSessionOrderByRelationAggregateInput
    approvedOpname?: OpnameSessionOrderByRelationAggregateInput
    countedItems?: OpnameItemOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    stockMovements?: StockMovementListRelationFilter
    opnameSessions?: OpnameSessionListRelationFilter
    approvedOpname?: OpnameSessionListRelationFilter
    countedItems?: OpnameItemListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: IntFilter<"Supplier"> | number
    name?: StringFilter<"Supplier"> | string
    contactName?: StringNullableFilter<"Supplier"> | string | null
    phone?: StringNullableFilter<"Supplier"> | string | null
    email?: StringNullableFilter<"Supplier"> | string | null
    address?: StringNullableFilter<"Supplier"> | string | null
    isActive?: BoolFilter<"Supplier"> | boolean
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    stockMovements?: StockMovementListRelationFilter
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    contactName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    stockMovements?: StockMovementOrderByRelationAggregateInput
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    name?: StringFilter<"Supplier"> | string
    contactName?: StringNullableFilter<"Supplier"> | string | null
    phone?: StringNullableFilter<"Supplier"> | string | null
    email?: StringNullableFilter<"Supplier"> | string | null
    address?: StringNullableFilter<"Supplier"> | string | null
    isActive?: BoolFilter<"Supplier"> | boolean
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    stockMovements?: StockMovementListRelationFilter
  }, "id">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    contactName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _avg?: SupplierAvgOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
    _sum?: SupplierSumOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Supplier"> | number
    name?: StringWithAggregatesFilter<"Supplier"> | string
    contactName?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    email?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    address?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    isActive?: BoolWithAggregatesFilter<"Supplier"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    description?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    products?: ProductListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    sku?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    categoryId?: IntNullableFilter<"Product"> | number | null
    unit?: StringFilter<"Product"> | string
    purchasePrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    sellingPrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    minStock?: IntFilter<"Product"> | number
    currentStock?: IntFilter<"Product"> | number
    imageUrl?: StringNullableFilter<"Product"> | string | null
    isPerishable?: BoolFilter<"Product"> | boolean
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    batches?: ProductBatchListRelationFilter
    stockMovements?: StockMovementListRelationFilter
    opnameItems?: OpnameItemListRelationFilter
    channelMappings?: ProductChannelMappingListRelationFilter
    syncJobs?: StockSyncJobListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    unit?: SortOrder
    purchasePrice?: SortOrder
    sellingPrice?: SortOrder
    minStock?: SortOrder
    currentStock?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isPerishable?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    batches?: ProductBatchOrderByRelationAggregateInput
    stockMovements?: StockMovementOrderByRelationAggregateInput
    opnameItems?: OpnameItemOrderByRelationAggregateInput
    channelMappings?: ProductChannelMappingOrderByRelationAggregateInput
    syncJobs?: StockSyncJobOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sku?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    categoryId?: IntNullableFilter<"Product"> | number | null
    unit?: StringFilter<"Product"> | string
    purchasePrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    sellingPrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    minStock?: IntFilter<"Product"> | number
    currentStock?: IntFilter<"Product"> | number
    imageUrl?: StringNullableFilter<"Product"> | string | null
    isPerishable?: BoolFilter<"Product"> | boolean
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    batches?: ProductBatchListRelationFilter
    stockMovements?: StockMovementListRelationFilter
    opnameItems?: OpnameItemListRelationFilter
    channelMappings?: ProductChannelMappingListRelationFilter
    syncJobs?: StockSyncJobListRelationFilter
  }, "id" | "sku">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    unit?: SortOrder
    purchasePrice?: SortOrder
    sellingPrice?: SortOrder
    minStock?: SortOrder
    currentStock?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isPerishable?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    sku?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    categoryId?: IntNullableWithAggregatesFilter<"Product"> | number | null
    unit?: StringWithAggregatesFilter<"Product"> | string
    purchasePrice?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    sellingPrice?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    minStock?: IntWithAggregatesFilter<"Product"> | number
    currentStock?: IntWithAggregatesFilter<"Product"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"Product"> | string | null
    isPerishable?: BoolWithAggregatesFilter<"Product"> | boolean
    isActive?: BoolWithAggregatesFilter<"Product"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductBatchWhereInput = {
    AND?: ProductBatchWhereInput | ProductBatchWhereInput[]
    OR?: ProductBatchWhereInput[]
    NOT?: ProductBatchWhereInput | ProductBatchWhereInput[]
    id?: IntFilter<"ProductBatch"> | number
    productId?: IntFilter<"ProductBatch"> | number
    batchCode?: StringNullableFilter<"ProductBatch"> | string | null
    quantity?: IntFilter<"ProductBatch"> | number
    expiredDate?: DateTimeNullableFilter<"ProductBatch"> | Date | string | null
    receivedDate?: DateTimeFilter<"ProductBatch"> | Date | string
    createdAt?: DateTimeFilter<"ProductBatch"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductBatchOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    batchCode?: SortOrderInput | SortOrder
    quantity?: SortOrder
    expiredDate?: SortOrderInput | SortOrder
    receivedDate?: SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductBatchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductBatchWhereInput | ProductBatchWhereInput[]
    OR?: ProductBatchWhereInput[]
    NOT?: ProductBatchWhereInput | ProductBatchWhereInput[]
    productId?: IntFilter<"ProductBatch"> | number
    batchCode?: StringNullableFilter<"ProductBatch"> | string | null
    quantity?: IntFilter<"ProductBatch"> | number
    expiredDate?: DateTimeNullableFilter<"ProductBatch"> | Date | string | null
    receivedDate?: DateTimeFilter<"ProductBatch"> | Date | string
    createdAt?: DateTimeFilter<"ProductBatch"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductBatchOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    batchCode?: SortOrderInput | SortOrder
    quantity?: SortOrder
    expiredDate?: SortOrderInput | SortOrder
    receivedDate?: SortOrder
    createdAt?: SortOrder
    _count?: ProductBatchCountOrderByAggregateInput
    _avg?: ProductBatchAvgOrderByAggregateInput
    _max?: ProductBatchMaxOrderByAggregateInput
    _min?: ProductBatchMinOrderByAggregateInput
    _sum?: ProductBatchSumOrderByAggregateInput
  }

  export type ProductBatchScalarWhereWithAggregatesInput = {
    AND?: ProductBatchScalarWhereWithAggregatesInput | ProductBatchScalarWhereWithAggregatesInput[]
    OR?: ProductBatchScalarWhereWithAggregatesInput[]
    NOT?: ProductBatchScalarWhereWithAggregatesInput | ProductBatchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductBatch"> | number
    productId?: IntWithAggregatesFilter<"ProductBatch"> | number
    batchCode?: StringNullableWithAggregatesFilter<"ProductBatch"> | string | null
    quantity?: IntWithAggregatesFilter<"ProductBatch"> | number
    expiredDate?: DateTimeNullableWithAggregatesFilter<"ProductBatch"> | Date | string | null
    receivedDate?: DateTimeWithAggregatesFilter<"ProductBatch"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ProductBatch"> | Date | string
  }

  export type StockMovementWhereInput = {
    AND?: StockMovementWhereInput | StockMovementWhereInput[]
    OR?: StockMovementWhereInput[]
    NOT?: StockMovementWhereInput | StockMovementWhereInput[]
    id?: IntFilter<"StockMovement"> | number
    productId?: IntFilter<"StockMovement"> | number
    type?: StringFilter<"StockMovement"> | string
    quantity?: IntFilter<"StockMovement"> | number
    referenceType?: StringNullableFilter<"StockMovement"> | string | null
    referenceId?: IntNullableFilter<"StockMovement"> | number | null
    supplierId?: IntNullableFilter<"StockMovement"> | number | null
    note?: StringNullableFilter<"StockMovement"> | string | null
    createdBy?: IntFilter<"StockMovement"> | number
    createdAt?: DateTimeFilter<"StockMovement"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    supplier?: XOR<SupplierNullableScalarRelationFilter, SupplierWhereInput> | null
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StockMovementOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    referenceType?: SortOrderInput | SortOrder
    referenceId?: SortOrderInput | SortOrder
    supplierId?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    supplier?: SupplierOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
  }

  export type StockMovementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StockMovementWhereInput | StockMovementWhereInput[]
    OR?: StockMovementWhereInput[]
    NOT?: StockMovementWhereInput | StockMovementWhereInput[]
    productId?: IntFilter<"StockMovement"> | number
    type?: StringFilter<"StockMovement"> | string
    quantity?: IntFilter<"StockMovement"> | number
    referenceType?: StringNullableFilter<"StockMovement"> | string | null
    referenceId?: IntNullableFilter<"StockMovement"> | number | null
    supplierId?: IntNullableFilter<"StockMovement"> | number | null
    note?: StringNullableFilter<"StockMovement"> | string | null
    createdBy?: IntFilter<"StockMovement"> | number
    createdAt?: DateTimeFilter<"StockMovement"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    supplier?: XOR<SupplierNullableScalarRelationFilter, SupplierWhereInput> | null
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type StockMovementOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    referenceType?: SortOrderInput | SortOrder
    referenceId?: SortOrderInput | SortOrder
    supplierId?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    _count?: StockMovementCountOrderByAggregateInput
    _avg?: StockMovementAvgOrderByAggregateInput
    _max?: StockMovementMaxOrderByAggregateInput
    _min?: StockMovementMinOrderByAggregateInput
    _sum?: StockMovementSumOrderByAggregateInput
  }

  export type StockMovementScalarWhereWithAggregatesInput = {
    AND?: StockMovementScalarWhereWithAggregatesInput | StockMovementScalarWhereWithAggregatesInput[]
    OR?: StockMovementScalarWhereWithAggregatesInput[]
    NOT?: StockMovementScalarWhereWithAggregatesInput | StockMovementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StockMovement"> | number
    productId?: IntWithAggregatesFilter<"StockMovement"> | number
    type?: StringWithAggregatesFilter<"StockMovement"> | string
    quantity?: IntWithAggregatesFilter<"StockMovement"> | number
    referenceType?: StringNullableWithAggregatesFilter<"StockMovement"> | string | null
    referenceId?: IntNullableWithAggregatesFilter<"StockMovement"> | number | null
    supplierId?: IntNullableWithAggregatesFilter<"StockMovement"> | number | null
    note?: StringNullableWithAggregatesFilter<"StockMovement"> | string | null
    createdBy?: IntWithAggregatesFilter<"StockMovement"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StockMovement"> | Date | string
  }

  export type OpnameSessionWhereInput = {
    AND?: OpnameSessionWhereInput | OpnameSessionWhereInput[]
    OR?: OpnameSessionWhereInput[]
    NOT?: OpnameSessionWhereInput | OpnameSessionWhereInput[]
    id?: IntFilter<"OpnameSession"> | number
    code?: StringFilter<"OpnameSession"> | string
    title?: StringNullableFilter<"OpnameSession"> | string | null
    status?: StringFilter<"OpnameSession"> | string
    startedAt?: DateTimeNullableFilter<"OpnameSession"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"OpnameSession"> | Date | string | null
    createdBy?: IntFilter<"OpnameSession"> | number
    approvedBy?: IntNullableFilter<"OpnameSession"> | number | null
    approvedAt?: DateTimeNullableFilter<"OpnameSession"> | Date | string | null
    notes?: StringNullableFilter<"OpnameSession"> | string | null
    createdAt?: DateTimeFilter<"OpnameSession"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    approver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    items?: OpnameItemListRelationFilter
  }

  export type OpnameSessionOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrderInput | SortOrder
    status?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    approvedBy?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    approver?: UserOrderByWithRelationInput
    items?: OpnameItemOrderByRelationAggregateInput
  }

  export type OpnameSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: OpnameSessionWhereInput | OpnameSessionWhereInput[]
    OR?: OpnameSessionWhereInput[]
    NOT?: OpnameSessionWhereInput | OpnameSessionWhereInput[]
    title?: StringNullableFilter<"OpnameSession"> | string | null
    status?: StringFilter<"OpnameSession"> | string
    startedAt?: DateTimeNullableFilter<"OpnameSession"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"OpnameSession"> | Date | string | null
    createdBy?: IntFilter<"OpnameSession"> | number
    approvedBy?: IntNullableFilter<"OpnameSession"> | number | null
    approvedAt?: DateTimeNullableFilter<"OpnameSession"> | Date | string | null
    notes?: StringNullableFilter<"OpnameSession"> | string | null
    createdAt?: DateTimeFilter<"OpnameSession"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    approver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    items?: OpnameItemListRelationFilter
  }, "id" | "code">

  export type OpnameSessionOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrderInput | SortOrder
    status?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    approvedBy?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OpnameSessionCountOrderByAggregateInput
    _avg?: OpnameSessionAvgOrderByAggregateInput
    _max?: OpnameSessionMaxOrderByAggregateInput
    _min?: OpnameSessionMinOrderByAggregateInput
    _sum?: OpnameSessionSumOrderByAggregateInput
  }

  export type OpnameSessionScalarWhereWithAggregatesInput = {
    AND?: OpnameSessionScalarWhereWithAggregatesInput | OpnameSessionScalarWhereWithAggregatesInput[]
    OR?: OpnameSessionScalarWhereWithAggregatesInput[]
    NOT?: OpnameSessionScalarWhereWithAggregatesInput | OpnameSessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OpnameSession"> | number
    code?: StringWithAggregatesFilter<"OpnameSession"> | string
    title?: StringNullableWithAggregatesFilter<"OpnameSession"> | string | null
    status?: StringWithAggregatesFilter<"OpnameSession"> | string
    startedAt?: DateTimeNullableWithAggregatesFilter<"OpnameSession"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"OpnameSession"> | Date | string | null
    createdBy?: IntWithAggregatesFilter<"OpnameSession"> | number
    approvedBy?: IntNullableWithAggregatesFilter<"OpnameSession"> | number | null
    approvedAt?: DateTimeNullableWithAggregatesFilter<"OpnameSession"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"OpnameSession"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OpnameSession"> | Date | string
  }

  export type OpnameItemWhereInput = {
    AND?: OpnameItemWhereInput | OpnameItemWhereInput[]
    OR?: OpnameItemWhereInput[]
    NOT?: OpnameItemWhereInput | OpnameItemWhereInput[]
    id?: IntFilter<"OpnameItem"> | number
    sessionId?: IntFilter<"OpnameItem"> | number
    productId?: IntFilter<"OpnameItem"> | number
    systemStock?: IntFilter<"OpnameItem"> | number
    physicalStock?: IntNullableFilter<"OpnameItem"> | number | null
    difference?: IntNullableFilter<"OpnameItem"> | number | null
    note?: StringNullableFilter<"OpnameItem"> | string | null
    countedBy?: IntNullableFilter<"OpnameItem"> | number | null
    countedAt?: DateTimeNullableFilter<"OpnameItem"> | Date | string | null
    createdAt?: DateTimeFilter<"OpnameItem"> | Date | string
    session?: XOR<OpnameSessionScalarRelationFilter, OpnameSessionWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    counter?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type OpnameItemOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    productId?: SortOrder
    systemStock?: SortOrder
    physicalStock?: SortOrderInput | SortOrder
    difference?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    countedBy?: SortOrderInput | SortOrder
    countedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    session?: OpnameSessionOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    counter?: UserOrderByWithRelationInput
  }

  export type OpnameItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sessionId_productId?: OpnameItemSessionIdProductIdCompoundUniqueInput
    AND?: OpnameItemWhereInput | OpnameItemWhereInput[]
    OR?: OpnameItemWhereInput[]
    NOT?: OpnameItemWhereInput | OpnameItemWhereInput[]
    sessionId?: IntFilter<"OpnameItem"> | number
    productId?: IntFilter<"OpnameItem"> | number
    systemStock?: IntFilter<"OpnameItem"> | number
    physicalStock?: IntNullableFilter<"OpnameItem"> | number | null
    difference?: IntNullableFilter<"OpnameItem"> | number | null
    note?: StringNullableFilter<"OpnameItem"> | string | null
    countedBy?: IntNullableFilter<"OpnameItem"> | number | null
    countedAt?: DateTimeNullableFilter<"OpnameItem"> | Date | string | null
    createdAt?: DateTimeFilter<"OpnameItem"> | Date | string
    session?: XOR<OpnameSessionScalarRelationFilter, OpnameSessionWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    counter?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "sessionId_productId">

  export type OpnameItemOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    productId?: SortOrder
    systemStock?: SortOrder
    physicalStock?: SortOrderInput | SortOrder
    difference?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    countedBy?: SortOrderInput | SortOrder
    countedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OpnameItemCountOrderByAggregateInput
    _avg?: OpnameItemAvgOrderByAggregateInput
    _max?: OpnameItemMaxOrderByAggregateInput
    _min?: OpnameItemMinOrderByAggregateInput
    _sum?: OpnameItemSumOrderByAggregateInput
  }

  export type OpnameItemScalarWhereWithAggregatesInput = {
    AND?: OpnameItemScalarWhereWithAggregatesInput | OpnameItemScalarWhereWithAggregatesInput[]
    OR?: OpnameItemScalarWhereWithAggregatesInput[]
    NOT?: OpnameItemScalarWhereWithAggregatesInput | OpnameItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OpnameItem"> | number
    sessionId?: IntWithAggregatesFilter<"OpnameItem"> | number
    productId?: IntWithAggregatesFilter<"OpnameItem"> | number
    systemStock?: IntWithAggregatesFilter<"OpnameItem"> | number
    physicalStock?: IntNullableWithAggregatesFilter<"OpnameItem"> | number | null
    difference?: IntNullableWithAggregatesFilter<"OpnameItem"> | number | null
    note?: StringNullableWithAggregatesFilter<"OpnameItem"> | string | null
    countedBy?: IntNullableWithAggregatesFilter<"OpnameItem"> | number | null
    countedAt?: DateTimeNullableWithAggregatesFilter<"OpnameItem"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OpnameItem"> | Date | string
  }

  export type MarketplaceAccountWhereInput = {
    AND?: MarketplaceAccountWhereInput | MarketplaceAccountWhereInput[]
    OR?: MarketplaceAccountWhereInput[]
    NOT?: MarketplaceAccountWhereInput | MarketplaceAccountWhereInput[]
    id?: IntFilter<"MarketplaceAccount"> | number
    marketplace?: StringFilter<"MarketplaceAccount"> | string
    shopId?: StringFilter<"MarketplaceAccount"> | string
    shopName?: StringNullableFilter<"MarketplaceAccount"> | string | null
    accessToken?: StringNullableFilter<"MarketplaceAccount"> | string | null
    refreshToken?: StringNullableFilter<"MarketplaceAccount"> | string | null
    tokenExpiresAt?: DateTimeNullableFilter<"MarketplaceAccount"> | Date | string | null
    isActive?: BoolFilter<"MarketplaceAccount"> | boolean
    createdAt?: DateTimeFilter<"MarketplaceAccount"> | Date | string
    updatedAt?: DateTimeFilter<"MarketplaceAccount"> | Date | string
    productMappings?: ProductChannelMappingListRelationFilter
    syncJobs?: StockSyncJobListRelationFilter
  }

  export type MarketplaceAccountOrderByWithRelationInput = {
    id?: SortOrder
    marketplace?: SortOrder
    shopId?: SortOrder
    shopName?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    tokenExpiresAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productMappings?: ProductChannelMappingOrderByRelationAggregateInput
    syncJobs?: StockSyncJobOrderByRelationAggregateInput
  }

  export type MarketplaceAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    marketplace_shopId?: MarketplaceAccountMarketplaceShopIdCompoundUniqueInput
    AND?: MarketplaceAccountWhereInput | MarketplaceAccountWhereInput[]
    OR?: MarketplaceAccountWhereInput[]
    NOT?: MarketplaceAccountWhereInput | MarketplaceAccountWhereInput[]
    marketplace?: StringFilter<"MarketplaceAccount"> | string
    shopId?: StringFilter<"MarketplaceAccount"> | string
    shopName?: StringNullableFilter<"MarketplaceAccount"> | string | null
    accessToken?: StringNullableFilter<"MarketplaceAccount"> | string | null
    refreshToken?: StringNullableFilter<"MarketplaceAccount"> | string | null
    tokenExpiresAt?: DateTimeNullableFilter<"MarketplaceAccount"> | Date | string | null
    isActive?: BoolFilter<"MarketplaceAccount"> | boolean
    createdAt?: DateTimeFilter<"MarketplaceAccount"> | Date | string
    updatedAt?: DateTimeFilter<"MarketplaceAccount"> | Date | string
    productMappings?: ProductChannelMappingListRelationFilter
    syncJobs?: StockSyncJobListRelationFilter
  }, "id" | "marketplace_shopId">

  export type MarketplaceAccountOrderByWithAggregationInput = {
    id?: SortOrder
    marketplace?: SortOrder
    shopId?: SortOrder
    shopName?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    tokenExpiresAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MarketplaceAccountCountOrderByAggregateInput
    _avg?: MarketplaceAccountAvgOrderByAggregateInput
    _max?: MarketplaceAccountMaxOrderByAggregateInput
    _min?: MarketplaceAccountMinOrderByAggregateInput
    _sum?: MarketplaceAccountSumOrderByAggregateInput
  }

  export type MarketplaceAccountScalarWhereWithAggregatesInput = {
    AND?: MarketplaceAccountScalarWhereWithAggregatesInput | MarketplaceAccountScalarWhereWithAggregatesInput[]
    OR?: MarketplaceAccountScalarWhereWithAggregatesInput[]
    NOT?: MarketplaceAccountScalarWhereWithAggregatesInput | MarketplaceAccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MarketplaceAccount"> | number
    marketplace?: StringWithAggregatesFilter<"MarketplaceAccount"> | string
    shopId?: StringWithAggregatesFilter<"MarketplaceAccount"> | string
    shopName?: StringNullableWithAggregatesFilter<"MarketplaceAccount"> | string | null
    accessToken?: StringNullableWithAggregatesFilter<"MarketplaceAccount"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"MarketplaceAccount"> | string | null
    tokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"MarketplaceAccount"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"MarketplaceAccount"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MarketplaceAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MarketplaceAccount"> | Date | string
  }

  export type ProductChannelMappingWhereInput = {
    AND?: ProductChannelMappingWhereInput | ProductChannelMappingWhereInput[]
    OR?: ProductChannelMappingWhereInput[]
    NOT?: ProductChannelMappingWhereInput | ProductChannelMappingWhereInput[]
    id?: IntFilter<"ProductChannelMapping"> | number
    productId?: IntFilter<"ProductChannelMapping"> | number
    marketplaceAccountId?: IntFilter<"ProductChannelMapping"> | number
    externalProductId?: StringFilter<"ProductChannelMapping"> | string
    externalVariantId?: StringNullableFilter<"ProductChannelMapping"> | string | null
    externalSku?: StringNullableFilter<"ProductChannelMapping"> | string | null
    safetyStock?: IntFilter<"ProductChannelMapping"> | number
    lastSyncedStock?: IntNullableFilter<"ProductChannelMapping"> | number | null
    lastSyncedAt?: DateTimeNullableFilter<"ProductChannelMapping"> | Date | string | null
    syncStatus?: StringFilter<"ProductChannelMapping"> | string
    syncError?: StringNullableFilter<"ProductChannelMapping"> | string | null
    createdAt?: DateTimeFilter<"ProductChannelMapping"> | Date | string
    updatedAt?: DateTimeFilter<"ProductChannelMapping"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    marketplaceAccount?: XOR<MarketplaceAccountScalarRelationFilter, MarketplaceAccountWhereInput>
  }

  export type ProductChannelMappingOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    marketplaceAccountId?: SortOrder
    externalProductId?: SortOrder
    externalVariantId?: SortOrderInput | SortOrder
    externalSku?: SortOrderInput | SortOrder
    safetyStock?: SortOrder
    lastSyncedStock?: SortOrderInput | SortOrder
    lastSyncedAt?: SortOrderInput | SortOrder
    syncStatus?: SortOrder
    syncError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    marketplaceAccount?: MarketplaceAccountOrderByWithRelationInput
  }

  export type ProductChannelMappingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    marketplaceAccountId_externalProductId_externalVariantId?: ProductChannelMappingMarketplaceAccountIdExternalProductIdExternalVariantIdCompoundUniqueInput
    AND?: ProductChannelMappingWhereInput | ProductChannelMappingWhereInput[]
    OR?: ProductChannelMappingWhereInput[]
    NOT?: ProductChannelMappingWhereInput | ProductChannelMappingWhereInput[]
    productId?: IntFilter<"ProductChannelMapping"> | number
    marketplaceAccountId?: IntFilter<"ProductChannelMapping"> | number
    externalProductId?: StringFilter<"ProductChannelMapping"> | string
    externalVariantId?: StringNullableFilter<"ProductChannelMapping"> | string | null
    externalSku?: StringNullableFilter<"ProductChannelMapping"> | string | null
    safetyStock?: IntFilter<"ProductChannelMapping"> | number
    lastSyncedStock?: IntNullableFilter<"ProductChannelMapping"> | number | null
    lastSyncedAt?: DateTimeNullableFilter<"ProductChannelMapping"> | Date | string | null
    syncStatus?: StringFilter<"ProductChannelMapping"> | string
    syncError?: StringNullableFilter<"ProductChannelMapping"> | string | null
    createdAt?: DateTimeFilter<"ProductChannelMapping"> | Date | string
    updatedAt?: DateTimeFilter<"ProductChannelMapping"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    marketplaceAccount?: XOR<MarketplaceAccountScalarRelationFilter, MarketplaceAccountWhereInput>
  }, "id" | "marketplaceAccountId_externalProductId_externalVariantId">

  export type ProductChannelMappingOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    marketplaceAccountId?: SortOrder
    externalProductId?: SortOrder
    externalVariantId?: SortOrderInput | SortOrder
    externalSku?: SortOrderInput | SortOrder
    safetyStock?: SortOrder
    lastSyncedStock?: SortOrderInput | SortOrder
    lastSyncedAt?: SortOrderInput | SortOrder
    syncStatus?: SortOrder
    syncError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductChannelMappingCountOrderByAggregateInput
    _avg?: ProductChannelMappingAvgOrderByAggregateInput
    _max?: ProductChannelMappingMaxOrderByAggregateInput
    _min?: ProductChannelMappingMinOrderByAggregateInput
    _sum?: ProductChannelMappingSumOrderByAggregateInput
  }

  export type ProductChannelMappingScalarWhereWithAggregatesInput = {
    AND?: ProductChannelMappingScalarWhereWithAggregatesInput | ProductChannelMappingScalarWhereWithAggregatesInput[]
    OR?: ProductChannelMappingScalarWhereWithAggregatesInput[]
    NOT?: ProductChannelMappingScalarWhereWithAggregatesInput | ProductChannelMappingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductChannelMapping"> | number
    productId?: IntWithAggregatesFilter<"ProductChannelMapping"> | number
    marketplaceAccountId?: IntWithAggregatesFilter<"ProductChannelMapping"> | number
    externalProductId?: StringWithAggregatesFilter<"ProductChannelMapping"> | string
    externalVariantId?: StringNullableWithAggregatesFilter<"ProductChannelMapping"> | string | null
    externalSku?: StringNullableWithAggregatesFilter<"ProductChannelMapping"> | string | null
    safetyStock?: IntWithAggregatesFilter<"ProductChannelMapping"> | number
    lastSyncedStock?: IntNullableWithAggregatesFilter<"ProductChannelMapping"> | number | null
    lastSyncedAt?: DateTimeNullableWithAggregatesFilter<"ProductChannelMapping"> | Date | string | null
    syncStatus?: StringWithAggregatesFilter<"ProductChannelMapping"> | string
    syncError?: StringNullableWithAggregatesFilter<"ProductChannelMapping"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProductChannelMapping"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductChannelMapping"> | Date | string
  }

  export type StockSyncJobWhereInput = {
    AND?: StockSyncJobWhereInput | StockSyncJobWhereInput[]
    OR?: StockSyncJobWhereInput[]
    NOT?: StockSyncJobWhereInput | StockSyncJobWhereInput[]
    id?: IntFilter<"StockSyncJob"> | number
    productId?: IntFilter<"StockSyncJob"> | number
    marketplaceAccountId?: IntNullableFilter<"StockSyncJob"> | number | null
    targetStock?: IntFilter<"StockSyncJob"> | number
    status?: StringFilter<"StockSyncJob"> | string
    attempts?: IntFilter<"StockSyncJob"> | number
    lastError?: StringNullableFilter<"StockSyncJob"> | string | null
    createdAt?: DateTimeFilter<"StockSyncJob"> | Date | string
    processedAt?: DateTimeNullableFilter<"StockSyncJob"> | Date | string | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    marketplaceAccount?: XOR<MarketplaceAccountNullableScalarRelationFilter, MarketplaceAccountWhereInput> | null
  }

  export type StockSyncJobOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    marketplaceAccountId?: SortOrderInput | SortOrder
    targetStock?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
    marketplaceAccount?: MarketplaceAccountOrderByWithRelationInput
  }

  export type StockSyncJobWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StockSyncJobWhereInput | StockSyncJobWhereInput[]
    OR?: StockSyncJobWhereInput[]
    NOT?: StockSyncJobWhereInput | StockSyncJobWhereInput[]
    productId?: IntFilter<"StockSyncJob"> | number
    marketplaceAccountId?: IntNullableFilter<"StockSyncJob"> | number | null
    targetStock?: IntFilter<"StockSyncJob"> | number
    status?: StringFilter<"StockSyncJob"> | string
    attempts?: IntFilter<"StockSyncJob"> | number
    lastError?: StringNullableFilter<"StockSyncJob"> | string | null
    createdAt?: DateTimeFilter<"StockSyncJob"> | Date | string
    processedAt?: DateTimeNullableFilter<"StockSyncJob"> | Date | string | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    marketplaceAccount?: XOR<MarketplaceAccountNullableScalarRelationFilter, MarketplaceAccountWhereInput> | null
  }, "id">

  export type StockSyncJobOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    marketplaceAccountId?: SortOrderInput | SortOrder
    targetStock?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    _count?: StockSyncJobCountOrderByAggregateInput
    _avg?: StockSyncJobAvgOrderByAggregateInput
    _max?: StockSyncJobMaxOrderByAggregateInput
    _min?: StockSyncJobMinOrderByAggregateInput
    _sum?: StockSyncJobSumOrderByAggregateInput
  }

  export type StockSyncJobScalarWhereWithAggregatesInput = {
    AND?: StockSyncJobScalarWhereWithAggregatesInput | StockSyncJobScalarWhereWithAggregatesInput[]
    OR?: StockSyncJobScalarWhereWithAggregatesInput[]
    NOT?: StockSyncJobScalarWhereWithAggregatesInput | StockSyncJobScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StockSyncJob"> | number
    productId?: IntWithAggregatesFilter<"StockSyncJob"> | number
    marketplaceAccountId?: IntNullableWithAggregatesFilter<"StockSyncJob"> | number | null
    targetStock?: IntWithAggregatesFilter<"StockSyncJob"> | number
    status?: StringWithAggregatesFilter<"StockSyncJob"> | string
    attempts?: IntWithAggregatesFilter<"StockSyncJob"> | number
    lastError?: StringNullableWithAggregatesFilter<"StockSyncJob"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StockSyncJob"> | Date | string
    processedAt?: DateTimeNullableWithAggregatesFilter<"StockSyncJob"> | Date | string | null
  }

  export type UserCreateInput = {
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stockMovements?: StockMovementCreateNestedManyWithoutCreatorInput
    opnameSessions?: OpnameSessionCreateNestedManyWithoutCreatorInput
    approvedOpname?: OpnameSessionCreateNestedManyWithoutApproverInput
    countedItems?: OpnameItemCreateNestedManyWithoutCounterInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutCreatorInput
    opnameSessions?: OpnameSessionUncheckedCreateNestedManyWithoutCreatorInput
    approvedOpname?: OpnameSessionUncheckedCreateNestedManyWithoutApproverInput
    countedItems?: OpnameItemUncheckedCreateNestedManyWithoutCounterInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockMovements?: StockMovementUpdateManyWithoutCreatorNestedInput
    opnameSessions?: OpnameSessionUpdateManyWithoutCreatorNestedInput
    approvedOpname?: OpnameSessionUpdateManyWithoutApproverNestedInput
    countedItems?: OpnameItemUpdateManyWithoutCounterNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockMovements?: StockMovementUncheckedUpdateManyWithoutCreatorNestedInput
    opnameSessions?: OpnameSessionUncheckedUpdateManyWithoutCreatorNestedInput
    approvedOpname?: OpnameSessionUncheckedUpdateManyWithoutApproverNestedInput
    countedItems?: OpnameItemUncheckedUpdateManyWithoutCounterNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierCreateInput = {
    name: string
    contactName?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    stockMovements?: StockMovementCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateInput = {
    id?: number
    name: string
    contactName?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockMovements?: StockMovementUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockMovements?: StockMovementUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateManyInput = {
    id?: number
    name: string
    contactName?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type SupplierUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    sku: string
    name: string
    unit?: string
    purchasePrice?: Decimal | DecimalJsLike | number | string
    sellingPrice?: Decimal | DecimalJsLike | number | string
    minStock?: number
    currentStock?: number
    imageUrl?: string | null
    isPerishable?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProductsInput
    batches?: ProductBatchCreateNestedManyWithoutProductInput
    stockMovements?: StockMovementCreateNestedManyWithoutProductInput
    opnameItems?: OpnameItemCreateNestedManyWithoutProductInput
    channelMappings?: ProductChannelMappingCreateNestedManyWithoutProductInput
    syncJobs?: StockSyncJobCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    sku: string
    name: string
    categoryId?: number | null
    unit?: string
    purchasePrice?: Decimal | DecimalJsLike | number | string
    sellingPrice?: Decimal | DecimalJsLike | number | string
    minStock?: number
    currentStock?: number
    imageUrl?: string | null
    isPerishable?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: ProductBatchUncheckedCreateNestedManyWithoutProductInput
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutProductInput
    opnameItems?: OpnameItemUncheckedCreateNestedManyWithoutProductInput
    channelMappings?: ProductChannelMappingUncheckedCreateNestedManyWithoutProductInput
    syncJobs?: StockSyncJobUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sellingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minStock?: IntFieldUpdateOperationsInput | number
    currentStock?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPerishable?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProductsNestedInput
    batches?: ProductBatchUpdateManyWithoutProductNestedInput
    stockMovements?: StockMovementUpdateManyWithoutProductNestedInput
    opnameItems?: OpnameItemUpdateManyWithoutProductNestedInput
    channelMappings?: ProductChannelMappingUpdateManyWithoutProductNestedInput
    syncJobs?: StockSyncJobUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: StringFieldUpdateOperationsInput | string
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sellingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minStock?: IntFieldUpdateOperationsInput | number
    currentStock?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPerishable?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: ProductBatchUncheckedUpdateManyWithoutProductNestedInput
    stockMovements?: StockMovementUncheckedUpdateManyWithoutProductNestedInput
    opnameItems?: OpnameItemUncheckedUpdateManyWithoutProductNestedInput
    channelMappings?: ProductChannelMappingUncheckedUpdateManyWithoutProductNestedInput
    syncJobs?: StockSyncJobUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    sku: string
    name: string
    categoryId?: number | null
    unit?: string
    purchasePrice?: Decimal | DecimalJsLike | number | string
    sellingPrice?: Decimal | DecimalJsLike | number | string
    minStock?: number
    currentStock?: number
    imageUrl?: string | null
    isPerishable?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sellingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minStock?: IntFieldUpdateOperationsInput | number
    currentStock?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPerishable?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: StringFieldUpdateOperationsInput | string
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sellingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minStock?: IntFieldUpdateOperationsInput | number
    currentStock?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPerishable?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductBatchCreateInput = {
    batchCode?: string | null
    quantity?: number
    expiredDate?: Date | string | null
    receivedDate?: Date | string
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutBatchesInput
  }

  export type ProductBatchUncheckedCreateInput = {
    id?: number
    productId: number
    batchCode?: string | null
    quantity?: number
    expiredDate?: Date | string | null
    receivedDate?: Date | string
    createdAt?: Date | string
  }

  export type ProductBatchUpdateInput = {
    batchCode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutBatchesNestedInput
  }

  export type ProductBatchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    batchCode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductBatchCreateManyInput = {
    id?: number
    productId: number
    batchCode?: string | null
    quantity?: number
    expiredDate?: Date | string | null
    receivedDate?: Date | string
    createdAt?: Date | string
  }

  export type ProductBatchUpdateManyMutationInput = {
    batchCode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductBatchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    batchCode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementCreateInput = {
    type: string
    quantity: number
    referenceType?: string | null
    referenceId?: number | null
    note?: string | null
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutStockMovementsInput
    supplier?: SupplierCreateNestedOneWithoutStockMovementsInput
    creator: UserCreateNestedOneWithoutStockMovementsInput
  }

  export type StockMovementUncheckedCreateInput = {
    id?: number
    productId: number
    type: string
    quantity: number
    referenceType?: string | null
    referenceId?: number | null
    supplierId?: number | null
    note?: string | null
    createdBy: number
    createdAt?: Date | string
  }

  export type StockMovementUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutStockMovementsNestedInput
    supplier?: SupplierUpdateOneWithoutStockMovementsNestedInput
    creator?: UserUpdateOneRequiredWithoutStockMovementsNestedInput
  }

  export type StockMovementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableIntFieldUpdateOperationsInput | number | null
    supplierId?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementCreateManyInput = {
    id?: number
    productId: number
    type: string
    quantity: number
    referenceType?: string | null
    referenceId?: number | null
    supplierId?: number | null
    note?: string | null
    createdBy: number
    createdAt?: Date | string
  }

  export type StockMovementUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableIntFieldUpdateOperationsInput | number | null
    supplierId?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpnameSessionCreateInput = {
    code: string
    title?: string | null
    status?: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    approvedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutOpnameSessionsInput
    approver?: UserCreateNestedOneWithoutApprovedOpnameInput
    items?: OpnameItemCreateNestedManyWithoutSessionInput
  }

  export type OpnameSessionUncheckedCreateInput = {
    id?: number
    code: string
    title?: string | null
    status?: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdBy: number
    approvedBy?: number | null
    approvedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    items?: OpnameItemUncheckedCreateNestedManyWithoutSessionInput
  }

  export type OpnameSessionUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutOpnameSessionsNestedInput
    approver?: UserUpdateOneWithoutApprovedOpnameNestedInput
    items?: OpnameItemUpdateManyWithoutSessionNestedInput
  }

  export type OpnameSessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    approvedBy?: NullableIntFieldUpdateOperationsInput | number | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OpnameItemUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type OpnameSessionCreateManyInput = {
    id?: number
    code: string
    title?: string | null
    status?: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdBy: number
    approvedBy?: number | null
    approvedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type OpnameSessionUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpnameSessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    approvedBy?: NullableIntFieldUpdateOperationsInput | number | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpnameItemCreateInput = {
    systemStock: number
    physicalStock?: number | null
    difference?: number | null
    note?: string | null
    countedAt?: Date | string | null
    createdAt?: Date | string
    session: OpnameSessionCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutOpnameItemsInput
    counter?: UserCreateNestedOneWithoutCountedItemsInput
  }

  export type OpnameItemUncheckedCreateInput = {
    id?: number
    sessionId: number
    productId: number
    systemStock: number
    physicalStock?: number | null
    difference?: number | null
    note?: string | null
    countedBy?: number | null
    countedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OpnameItemUpdateInput = {
    systemStock?: IntFieldUpdateOperationsInput | number
    physicalStock?: NullableIntFieldUpdateOperationsInput | number | null
    difference?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    countedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: OpnameSessionUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutOpnameItemsNestedInput
    counter?: UserUpdateOneWithoutCountedItemsNestedInput
  }

  export type OpnameItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    systemStock?: IntFieldUpdateOperationsInput | number
    physicalStock?: NullableIntFieldUpdateOperationsInput | number | null
    difference?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    countedBy?: NullableIntFieldUpdateOperationsInput | number | null
    countedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpnameItemCreateManyInput = {
    id?: number
    sessionId: number
    productId: number
    systemStock: number
    physicalStock?: number | null
    difference?: number | null
    note?: string | null
    countedBy?: number | null
    countedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OpnameItemUpdateManyMutationInput = {
    systemStock?: IntFieldUpdateOperationsInput | number
    physicalStock?: NullableIntFieldUpdateOperationsInput | number | null
    difference?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    countedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpnameItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    systemStock?: IntFieldUpdateOperationsInput | number
    physicalStock?: NullableIntFieldUpdateOperationsInput | number | null
    difference?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    countedBy?: NullableIntFieldUpdateOperationsInput | number | null
    countedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketplaceAccountCreateInput = {
    marketplace: string
    shopId: string
    shopName?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productMappings?: ProductChannelMappingCreateNestedManyWithoutMarketplaceAccountInput
    syncJobs?: StockSyncJobCreateNestedManyWithoutMarketplaceAccountInput
  }

  export type MarketplaceAccountUncheckedCreateInput = {
    id?: number
    marketplace: string
    shopId: string
    shopName?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productMappings?: ProductChannelMappingUncheckedCreateNestedManyWithoutMarketplaceAccountInput
    syncJobs?: StockSyncJobUncheckedCreateNestedManyWithoutMarketplaceAccountInput
  }

  export type MarketplaceAccountUpdateInput = {
    marketplace?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    shopName?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productMappings?: ProductChannelMappingUpdateManyWithoutMarketplaceAccountNestedInput
    syncJobs?: StockSyncJobUpdateManyWithoutMarketplaceAccountNestedInput
  }

  export type MarketplaceAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    marketplace?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    shopName?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productMappings?: ProductChannelMappingUncheckedUpdateManyWithoutMarketplaceAccountNestedInput
    syncJobs?: StockSyncJobUncheckedUpdateManyWithoutMarketplaceAccountNestedInput
  }

  export type MarketplaceAccountCreateManyInput = {
    id?: number
    marketplace: string
    shopId: string
    shopName?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarketplaceAccountUpdateManyMutationInput = {
    marketplace?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    shopName?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketplaceAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    marketplace?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    shopName?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductChannelMappingCreateInput = {
    externalProductId: string
    externalVariantId?: string | null
    externalSku?: string | null
    safetyStock?: number
    lastSyncedStock?: number | null
    lastSyncedAt?: Date | string | null
    syncStatus?: string
    syncError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutChannelMappingsInput
    marketplaceAccount: MarketplaceAccountCreateNestedOneWithoutProductMappingsInput
  }

  export type ProductChannelMappingUncheckedCreateInput = {
    id?: number
    productId: number
    marketplaceAccountId: number
    externalProductId: string
    externalVariantId?: string | null
    externalSku?: string | null
    safetyStock?: number
    lastSyncedStock?: number | null
    lastSyncedAt?: Date | string | null
    syncStatus?: string
    syncError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductChannelMappingUpdateInput = {
    externalProductId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: NullableStringFieldUpdateOperationsInput | string | null
    externalSku?: NullableStringFieldUpdateOperationsInput | string | null
    safetyStock?: IntFieldUpdateOperationsInput | number
    lastSyncedStock?: NullableIntFieldUpdateOperationsInput | number | null
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncStatus?: StringFieldUpdateOperationsInput | string
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutChannelMappingsNestedInput
    marketplaceAccount?: MarketplaceAccountUpdateOneRequiredWithoutProductMappingsNestedInput
  }

  export type ProductChannelMappingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    marketplaceAccountId?: IntFieldUpdateOperationsInput | number
    externalProductId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: NullableStringFieldUpdateOperationsInput | string | null
    externalSku?: NullableStringFieldUpdateOperationsInput | string | null
    safetyStock?: IntFieldUpdateOperationsInput | number
    lastSyncedStock?: NullableIntFieldUpdateOperationsInput | number | null
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncStatus?: StringFieldUpdateOperationsInput | string
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductChannelMappingCreateManyInput = {
    id?: number
    productId: number
    marketplaceAccountId: number
    externalProductId: string
    externalVariantId?: string | null
    externalSku?: string | null
    safetyStock?: number
    lastSyncedStock?: number | null
    lastSyncedAt?: Date | string | null
    syncStatus?: string
    syncError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductChannelMappingUpdateManyMutationInput = {
    externalProductId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: NullableStringFieldUpdateOperationsInput | string | null
    externalSku?: NullableStringFieldUpdateOperationsInput | string | null
    safetyStock?: IntFieldUpdateOperationsInput | number
    lastSyncedStock?: NullableIntFieldUpdateOperationsInput | number | null
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncStatus?: StringFieldUpdateOperationsInput | string
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductChannelMappingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    marketplaceAccountId?: IntFieldUpdateOperationsInput | number
    externalProductId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: NullableStringFieldUpdateOperationsInput | string | null
    externalSku?: NullableStringFieldUpdateOperationsInput | string | null
    safetyStock?: IntFieldUpdateOperationsInput | number
    lastSyncedStock?: NullableIntFieldUpdateOperationsInput | number | null
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncStatus?: StringFieldUpdateOperationsInput | string
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockSyncJobCreateInput = {
    targetStock: number
    status?: string
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
    product: ProductCreateNestedOneWithoutSyncJobsInput
    marketplaceAccount?: MarketplaceAccountCreateNestedOneWithoutSyncJobsInput
  }

  export type StockSyncJobUncheckedCreateInput = {
    id?: number
    productId: number
    marketplaceAccountId?: number | null
    targetStock: number
    status?: string
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
  }

  export type StockSyncJobUpdateInput = {
    targetStock?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product?: ProductUpdateOneRequiredWithoutSyncJobsNestedInput
    marketplaceAccount?: MarketplaceAccountUpdateOneWithoutSyncJobsNestedInput
  }

  export type StockSyncJobUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    marketplaceAccountId?: NullableIntFieldUpdateOperationsInput | number | null
    targetStock?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StockSyncJobCreateManyInput = {
    id?: number
    productId: number
    marketplaceAccountId?: number | null
    targetStock: number
    status?: string
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
  }

  export type StockSyncJobUpdateManyMutationInput = {
    targetStock?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StockSyncJobUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    marketplaceAccountId?: NullableIntFieldUpdateOperationsInput | number | null
    targetStock?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StockMovementListRelationFilter = {
    every?: StockMovementWhereInput
    some?: StockMovementWhereInput
    none?: StockMovementWhereInput
  }

  export type OpnameSessionListRelationFilter = {
    every?: OpnameSessionWhereInput
    some?: OpnameSessionWhereInput
    none?: OpnameSessionWhereInput
  }

  export type OpnameItemListRelationFilter = {
    every?: OpnameItemWhereInput
    some?: OpnameItemWhereInput
    none?: OpnameItemWhereInput
  }

  export type StockMovementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OpnameSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OpnameItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contactName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contactName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contactName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type ProductBatchListRelationFilter = {
    every?: ProductBatchWhereInput
    some?: ProductBatchWhereInput
    none?: ProductBatchWhereInput
  }

  export type ProductChannelMappingListRelationFilter = {
    every?: ProductChannelMappingWhereInput
    some?: ProductChannelMappingWhereInput
    none?: ProductChannelMappingWhereInput
  }

  export type StockSyncJobListRelationFilter = {
    every?: StockSyncJobWhereInput
    some?: StockSyncJobWhereInput
    none?: StockSyncJobWhereInput
  }

  export type ProductBatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductChannelMappingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockSyncJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    unit?: SortOrder
    purchasePrice?: SortOrder
    sellingPrice?: SortOrder
    minStock?: SortOrder
    currentStock?: SortOrder
    imageUrl?: SortOrder
    isPerishable?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    purchasePrice?: SortOrder
    sellingPrice?: SortOrder
    minStock?: SortOrder
    currentStock?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    unit?: SortOrder
    purchasePrice?: SortOrder
    sellingPrice?: SortOrder
    minStock?: SortOrder
    currentStock?: SortOrder
    imageUrl?: SortOrder
    isPerishable?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    unit?: SortOrder
    purchasePrice?: SortOrder
    sellingPrice?: SortOrder
    minStock?: SortOrder
    currentStock?: SortOrder
    imageUrl?: SortOrder
    isPerishable?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    purchasePrice?: SortOrder
    sellingPrice?: SortOrder
    minStock?: SortOrder
    currentStock?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductBatchCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    batchCode?: SortOrder
    quantity?: SortOrder
    expiredDate?: SortOrder
    receivedDate?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductBatchAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type ProductBatchMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    batchCode?: SortOrder
    quantity?: SortOrder
    expiredDate?: SortOrder
    receivedDate?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductBatchMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    batchCode?: SortOrder
    quantity?: SortOrder
    expiredDate?: SortOrder
    receivedDate?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductBatchSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SupplierNullableScalarRelationFilter = {
    is?: SupplierWhereInput | null
    isNot?: SupplierWhereInput | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StockMovementCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    referenceType?: SortOrder
    referenceId?: SortOrder
    supplierId?: SortOrder
    note?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type StockMovementAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    referenceId?: SortOrder
    supplierId?: SortOrder
    createdBy?: SortOrder
  }

  export type StockMovementMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    referenceType?: SortOrder
    referenceId?: SortOrder
    supplierId?: SortOrder
    note?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type StockMovementMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    referenceType?: SortOrder
    referenceId?: SortOrder
    supplierId?: SortOrder
    note?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type StockMovementSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    referenceId?: SortOrder
    supplierId?: SortOrder
    createdBy?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type OpnameSessionCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdBy?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type OpnameSessionAvgOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    approvedBy?: SortOrder
  }

  export type OpnameSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdBy?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type OpnameSessionMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdBy?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type OpnameSessionSumOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    approvedBy?: SortOrder
  }

  export type OpnameSessionScalarRelationFilter = {
    is?: OpnameSessionWhereInput
    isNot?: OpnameSessionWhereInput
  }

  export type OpnameItemSessionIdProductIdCompoundUniqueInput = {
    sessionId: number
    productId: number
  }

  export type OpnameItemCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    productId?: SortOrder
    systemStock?: SortOrder
    physicalStock?: SortOrder
    difference?: SortOrder
    note?: SortOrder
    countedBy?: SortOrder
    countedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OpnameItemAvgOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    productId?: SortOrder
    systemStock?: SortOrder
    physicalStock?: SortOrder
    difference?: SortOrder
    countedBy?: SortOrder
  }

  export type OpnameItemMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    productId?: SortOrder
    systemStock?: SortOrder
    physicalStock?: SortOrder
    difference?: SortOrder
    note?: SortOrder
    countedBy?: SortOrder
    countedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OpnameItemMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    productId?: SortOrder
    systemStock?: SortOrder
    physicalStock?: SortOrder
    difference?: SortOrder
    note?: SortOrder
    countedBy?: SortOrder
    countedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OpnameItemSumOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    productId?: SortOrder
    systemStock?: SortOrder
    physicalStock?: SortOrder
    difference?: SortOrder
    countedBy?: SortOrder
  }

  export type MarketplaceAccountMarketplaceShopIdCompoundUniqueInput = {
    marketplace: string
    shopId: string
  }

  export type MarketplaceAccountCountOrderByAggregateInput = {
    id?: SortOrder
    marketplace?: SortOrder
    shopId?: SortOrder
    shopName?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiresAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketplaceAccountAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MarketplaceAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    marketplace?: SortOrder
    shopId?: SortOrder
    shopName?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiresAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketplaceAccountMinOrderByAggregateInput = {
    id?: SortOrder
    marketplace?: SortOrder
    shopId?: SortOrder
    shopName?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiresAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketplaceAccountSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MarketplaceAccountScalarRelationFilter = {
    is?: MarketplaceAccountWhereInput
    isNot?: MarketplaceAccountWhereInput
  }

  export type ProductChannelMappingMarketplaceAccountIdExternalProductIdExternalVariantIdCompoundUniqueInput = {
    marketplaceAccountId: number
    externalProductId: string
    externalVariantId: string
  }

  export type ProductChannelMappingCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    marketplaceAccountId?: SortOrder
    externalProductId?: SortOrder
    externalVariantId?: SortOrder
    externalSku?: SortOrder
    safetyStock?: SortOrder
    lastSyncedStock?: SortOrder
    lastSyncedAt?: SortOrder
    syncStatus?: SortOrder
    syncError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductChannelMappingAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    marketplaceAccountId?: SortOrder
    safetyStock?: SortOrder
    lastSyncedStock?: SortOrder
  }

  export type ProductChannelMappingMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    marketplaceAccountId?: SortOrder
    externalProductId?: SortOrder
    externalVariantId?: SortOrder
    externalSku?: SortOrder
    safetyStock?: SortOrder
    lastSyncedStock?: SortOrder
    lastSyncedAt?: SortOrder
    syncStatus?: SortOrder
    syncError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductChannelMappingMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    marketplaceAccountId?: SortOrder
    externalProductId?: SortOrder
    externalVariantId?: SortOrder
    externalSku?: SortOrder
    safetyStock?: SortOrder
    lastSyncedStock?: SortOrder
    lastSyncedAt?: SortOrder
    syncStatus?: SortOrder
    syncError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductChannelMappingSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    marketplaceAccountId?: SortOrder
    safetyStock?: SortOrder
    lastSyncedStock?: SortOrder
  }

  export type MarketplaceAccountNullableScalarRelationFilter = {
    is?: MarketplaceAccountWhereInput | null
    isNot?: MarketplaceAccountWhereInput | null
  }

  export type StockSyncJobCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    marketplaceAccountId?: SortOrder
    targetStock?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrder
  }

  export type StockSyncJobAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    marketplaceAccountId?: SortOrder
    targetStock?: SortOrder
    attempts?: SortOrder
  }

  export type StockSyncJobMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    marketplaceAccountId?: SortOrder
    targetStock?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrder
  }

  export type StockSyncJobMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    marketplaceAccountId?: SortOrder
    targetStock?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrder
  }

  export type StockSyncJobSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    marketplaceAccountId?: SortOrder
    targetStock?: SortOrder
    attempts?: SortOrder
  }

  export type StockMovementCreateNestedManyWithoutCreatorInput = {
    create?: XOR<StockMovementCreateWithoutCreatorInput, StockMovementUncheckedCreateWithoutCreatorInput> | StockMovementCreateWithoutCreatorInput[] | StockMovementUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutCreatorInput | StockMovementCreateOrConnectWithoutCreatorInput[]
    createMany?: StockMovementCreateManyCreatorInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type OpnameSessionCreateNestedManyWithoutCreatorInput = {
    create?: XOR<OpnameSessionCreateWithoutCreatorInput, OpnameSessionUncheckedCreateWithoutCreatorInput> | OpnameSessionCreateWithoutCreatorInput[] | OpnameSessionUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: OpnameSessionCreateOrConnectWithoutCreatorInput | OpnameSessionCreateOrConnectWithoutCreatorInput[]
    createMany?: OpnameSessionCreateManyCreatorInputEnvelope
    connect?: OpnameSessionWhereUniqueInput | OpnameSessionWhereUniqueInput[]
  }

  export type OpnameSessionCreateNestedManyWithoutApproverInput = {
    create?: XOR<OpnameSessionCreateWithoutApproverInput, OpnameSessionUncheckedCreateWithoutApproverInput> | OpnameSessionCreateWithoutApproverInput[] | OpnameSessionUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: OpnameSessionCreateOrConnectWithoutApproverInput | OpnameSessionCreateOrConnectWithoutApproverInput[]
    createMany?: OpnameSessionCreateManyApproverInputEnvelope
    connect?: OpnameSessionWhereUniqueInput | OpnameSessionWhereUniqueInput[]
  }

  export type OpnameItemCreateNestedManyWithoutCounterInput = {
    create?: XOR<OpnameItemCreateWithoutCounterInput, OpnameItemUncheckedCreateWithoutCounterInput> | OpnameItemCreateWithoutCounterInput[] | OpnameItemUncheckedCreateWithoutCounterInput[]
    connectOrCreate?: OpnameItemCreateOrConnectWithoutCounterInput | OpnameItemCreateOrConnectWithoutCounterInput[]
    createMany?: OpnameItemCreateManyCounterInputEnvelope
    connect?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
  }

  export type StockMovementUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<StockMovementCreateWithoutCreatorInput, StockMovementUncheckedCreateWithoutCreatorInput> | StockMovementCreateWithoutCreatorInput[] | StockMovementUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutCreatorInput | StockMovementCreateOrConnectWithoutCreatorInput[]
    createMany?: StockMovementCreateManyCreatorInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type OpnameSessionUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<OpnameSessionCreateWithoutCreatorInput, OpnameSessionUncheckedCreateWithoutCreatorInput> | OpnameSessionCreateWithoutCreatorInput[] | OpnameSessionUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: OpnameSessionCreateOrConnectWithoutCreatorInput | OpnameSessionCreateOrConnectWithoutCreatorInput[]
    createMany?: OpnameSessionCreateManyCreatorInputEnvelope
    connect?: OpnameSessionWhereUniqueInput | OpnameSessionWhereUniqueInput[]
  }

  export type OpnameSessionUncheckedCreateNestedManyWithoutApproverInput = {
    create?: XOR<OpnameSessionCreateWithoutApproverInput, OpnameSessionUncheckedCreateWithoutApproverInput> | OpnameSessionCreateWithoutApproverInput[] | OpnameSessionUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: OpnameSessionCreateOrConnectWithoutApproverInput | OpnameSessionCreateOrConnectWithoutApproverInput[]
    createMany?: OpnameSessionCreateManyApproverInputEnvelope
    connect?: OpnameSessionWhereUniqueInput | OpnameSessionWhereUniqueInput[]
  }

  export type OpnameItemUncheckedCreateNestedManyWithoutCounterInput = {
    create?: XOR<OpnameItemCreateWithoutCounterInput, OpnameItemUncheckedCreateWithoutCounterInput> | OpnameItemCreateWithoutCounterInput[] | OpnameItemUncheckedCreateWithoutCounterInput[]
    connectOrCreate?: OpnameItemCreateOrConnectWithoutCounterInput | OpnameItemCreateOrConnectWithoutCounterInput[]
    createMany?: OpnameItemCreateManyCounterInputEnvelope
    connect?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StockMovementUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<StockMovementCreateWithoutCreatorInput, StockMovementUncheckedCreateWithoutCreatorInput> | StockMovementCreateWithoutCreatorInput[] | StockMovementUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutCreatorInput | StockMovementCreateOrConnectWithoutCreatorInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutCreatorInput | StockMovementUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: StockMovementCreateManyCreatorInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutCreatorInput | StockMovementUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutCreatorInput | StockMovementUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type OpnameSessionUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<OpnameSessionCreateWithoutCreatorInput, OpnameSessionUncheckedCreateWithoutCreatorInput> | OpnameSessionCreateWithoutCreatorInput[] | OpnameSessionUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: OpnameSessionCreateOrConnectWithoutCreatorInput | OpnameSessionCreateOrConnectWithoutCreatorInput[]
    upsert?: OpnameSessionUpsertWithWhereUniqueWithoutCreatorInput | OpnameSessionUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: OpnameSessionCreateManyCreatorInputEnvelope
    set?: OpnameSessionWhereUniqueInput | OpnameSessionWhereUniqueInput[]
    disconnect?: OpnameSessionWhereUniqueInput | OpnameSessionWhereUniqueInput[]
    delete?: OpnameSessionWhereUniqueInput | OpnameSessionWhereUniqueInput[]
    connect?: OpnameSessionWhereUniqueInput | OpnameSessionWhereUniqueInput[]
    update?: OpnameSessionUpdateWithWhereUniqueWithoutCreatorInput | OpnameSessionUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: OpnameSessionUpdateManyWithWhereWithoutCreatorInput | OpnameSessionUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: OpnameSessionScalarWhereInput | OpnameSessionScalarWhereInput[]
  }

  export type OpnameSessionUpdateManyWithoutApproverNestedInput = {
    create?: XOR<OpnameSessionCreateWithoutApproverInput, OpnameSessionUncheckedCreateWithoutApproverInput> | OpnameSessionCreateWithoutApproverInput[] | OpnameSessionUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: OpnameSessionCreateOrConnectWithoutApproverInput | OpnameSessionCreateOrConnectWithoutApproverInput[]
    upsert?: OpnameSessionUpsertWithWhereUniqueWithoutApproverInput | OpnameSessionUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: OpnameSessionCreateManyApproverInputEnvelope
    set?: OpnameSessionWhereUniqueInput | OpnameSessionWhereUniqueInput[]
    disconnect?: OpnameSessionWhereUniqueInput | OpnameSessionWhereUniqueInput[]
    delete?: OpnameSessionWhereUniqueInput | OpnameSessionWhereUniqueInput[]
    connect?: OpnameSessionWhereUniqueInput | OpnameSessionWhereUniqueInput[]
    update?: OpnameSessionUpdateWithWhereUniqueWithoutApproverInput | OpnameSessionUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: OpnameSessionUpdateManyWithWhereWithoutApproverInput | OpnameSessionUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: OpnameSessionScalarWhereInput | OpnameSessionScalarWhereInput[]
  }

  export type OpnameItemUpdateManyWithoutCounterNestedInput = {
    create?: XOR<OpnameItemCreateWithoutCounterInput, OpnameItemUncheckedCreateWithoutCounterInput> | OpnameItemCreateWithoutCounterInput[] | OpnameItemUncheckedCreateWithoutCounterInput[]
    connectOrCreate?: OpnameItemCreateOrConnectWithoutCounterInput | OpnameItemCreateOrConnectWithoutCounterInput[]
    upsert?: OpnameItemUpsertWithWhereUniqueWithoutCounterInput | OpnameItemUpsertWithWhereUniqueWithoutCounterInput[]
    createMany?: OpnameItemCreateManyCounterInputEnvelope
    set?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
    disconnect?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
    delete?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
    connect?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
    update?: OpnameItemUpdateWithWhereUniqueWithoutCounterInput | OpnameItemUpdateWithWhereUniqueWithoutCounterInput[]
    updateMany?: OpnameItemUpdateManyWithWhereWithoutCounterInput | OpnameItemUpdateManyWithWhereWithoutCounterInput[]
    deleteMany?: OpnameItemScalarWhereInput | OpnameItemScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StockMovementUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<StockMovementCreateWithoutCreatorInput, StockMovementUncheckedCreateWithoutCreatorInput> | StockMovementCreateWithoutCreatorInput[] | StockMovementUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutCreatorInput | StockMovementCreateOrConnectWithoutCreatorInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutCreatorInput | StockMovementUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: StockMovementCreateManyCreatorInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutCreatorInput | StockMovementUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutCreatorInput | StockMovementUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type OpnameSessionUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<OpnameSessionCreateWithoutCreatorInput, OpnameSessionUncheckedCreateWithoutCreatorInput> | OpnameSessionCreateWithoutCreatorInput[] | OpnameSessionUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: OpnameSessionCreateOrConnectWithoutCreatorInput | OpnameSessionCreateOrConnectWithoutCreatorInput[]
    upsert?: OpnameSessionUpsertWithWhereUniqueWithoutCreatorInput | OpnameSessionUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: OpnameSessionCreateManyCreatorInputEnvelope
    set?: OpnameSessionWhereUniqueInput | OpnameSessionWhereUniqueInput[]
    disconnect?: OpnameSessionWhereUniqueInput | OpnameSessionWhereUniqueInput[]
    delete?: OpnameSessionWhereUniqueInput | OpnameSessionWhereUniqueInput[]
    connect?: OpnameSessionWhereUniqueInput | OpnameSessionWhereUniqueInput[]
    update?: OpnameSessionUpdateWithWhereUniqueWithoutCreatorInput | OpnameSessionUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: OpnameSessionUpdateManyWithWhereWithoutCreatorInput | OpnameSessionUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: OpnameSessionScalarWhereInput | OpnameSessionScalarWhereInput[]
  }

  export type OpnameSessionUncheckedUpdateManyWithoutApproverNestedInput = {
    create?: XOR<OpnameSessionCreateWithoutApproverInput, OpnameSessionUncheckedCreateWithoutApproverInput> | OpnameSessionCreateWithoutApproverInput[] | OpnameSessionUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: OpnameSessionCreateOrConnectWithoutApproverInput | OpnameSessionCreateOrConnectWithoutApproverInput[]
    upsert?: OpnameSessionUpsertWithWhereUniqueWithoutApproverInput | OpnameSessionUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: OpnameSessionCreateManyApproverInputEnvelope
    set?: OpnameSessionWhereUniqueInput | OpnameSessionWhereUniqueInput[]
    disconnect?: OpnameSessionWhereUniqueInput | OpnameSessionWhereUniqueInput[]
    delete?: OpnameSessionWhereUniqueInput | OpnameSessionWhereUniqueInput[]
    connect?: OpnameSessionWhereUniqueInput | OpnameSessionWhereUniqueInput[]
    update?: OpnameSessionUpdateWithWhereUniqueWithoutApproverInput | OpnameSessionUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: OpnameSessionUpdateManyWithWhereWithoutApproverInput | OpnameSessionUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: OpnameSessionScalarWhereInput | OpnameSessionScalarWhereInput[]
  }

  export type OpnameItemUncheckedUpdateManyWithoutCounterNestedInput = {
    create?: XOR<OpnameItemCreateWithoutCounterInput, OpnameItemUncheckedCreateWithoutCounterInput> | OpnameItemCreateWithoutCounterInput[] | OpnameItemUncheckedCreateWithoutCounterInput[]
    connectOrCreate?: OpnameItemCreateOrConnectWithoutCounterInput | OpnameItemCreateOrConnectWithoutCounterInput[]
    upsert?: OpnameItemUpsertWithWhereUniqueWithoutCounterInput | OpnameItemUpsertWithWhereUniqueWithoutCounterInput[]
    createMany?: OpnameItemCreateManyCounterInputEnvelope
    set?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
    disconnect?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
    delete?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
    connect?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
    update?: OpnameItemUpdateWithWhereUniqueWithoutCounterInput | OpnameItemUpdateWithWhereUniqueWithoutCounterInput[]
    updateMany?: OpnameItemUpdateManyWithWhereWithoutCounterInput | OpnameItemUpdateManyWithWhereWithoutCounterInput[]
    deleteMany?: OpnameItemScalarWhereInput | OpnameItemScalarWhereInput[]
  }

  export type StockMovementCreateNestedManyWithoutSupplierInput = {
    create?: XOR<StockMovementCreateWithoutSupplierInput, StockMovementUncheckedCreateWithoutSupplierInput> | StockMovementCreateWithoutSupplierInput[] | StockMovementUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutSupplierInput | StockMovementCreateOrConnectWithoutSupplierInput[]
    createMany?: StockMovementCreateManySupplierInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type StockMovementUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<StockMovementCreateWithoutSupplierInput, StockMovementUncheckedCreateWithoutSupplierInput> | StockMovementCreateWithoutSupplierInput[] | StockMovementUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutSupplierInput | StockMovementCreateOrConnectWithoutSupplierInput[]
    createMany?: StockMovementCreateManySupplierInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StockMovementUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<StockMovementCreateWithoutSupplierInput, StockMovementUncheckedCreateWithoutSupplierInput> | StockMovementCreateWithoutSupplierInput[] | StockMovementUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutSupplierInput | StockMovementCreateOrConnectWithoutSupplierInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutSupplierInput | StockMovementUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: StockMovementCreateManySupplierInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutSupplierInput | StockMovementUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutSupplierInput | StockMovementUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type StockMovementUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<StockMovementCreateWithoutSupplierInput, StockMovementUncheckedCreateWithoutSupplierInput> | StockMovementCreateWithoutSupplierInput[] | StockMovementUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutSupplierInput | StockMovementCreateOrConnectWithoutSupplierInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutSupplierInput | StockMovementUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: StockMovementCreateManySupplierInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutSupplierInput | StockMovementUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutSupplierInput | StockMovementUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProductBatchCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductBatchCreateWithoutProductInput, ProductBatchUncheckedCreateWithoutProductInput> | ProductBatchCreateWithoutProductInput[] | ProductBatchUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductBatchCreateOrConnectWithoutProductInput | ProductBatchCreateOrConnectWithoutProductInput[]
    createMany?: ProductBatchCreateManyProductInputEnvelope
    connect?: ProductBatchWhereUniqueInput | ProductBatchWhereUniqueInput[]
  }

  export type StockMovementCreateNestedManyWithoutProductInput = {
    create?: XOR<StockMovementCreateWithoutProductInput, StockMovementUncheckedCreateWithoutProductInput> | StockMovementCreateWithoutProductInput[] | StockMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutProductInput | StockMovementCreateOrConnectWithoutProductInput[]
    createMany?: StockMovementCreateManyProductInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type OpnameItemCreateNestedManyWithoutProductInput = {
    create?: XOR<OpnameItemCreateWithoutProductInput, OpnameItemUncheckedCreateWithoutProductInput> | OpnameItemCreateWithoutProductInput[] | OpnameItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OpnameItemCreateOrConnectWithoutProductInput | OpnameItemCreateOrConnectWithoutProductInput[]
    createMany?: OpnameItemCreateManyProductInputEnvelope
    connect?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
  }

  export type ProductChannelMappingCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductChannelMappingCreateWithoutProductInput, ProductChannelMappingUncheckedCreateWithoutProductInput> | ProductChannelMappingCreateWithoutProductInput[] | ProductChannelMappingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductChannelMappingCreateOrConnectWithoutProductInput | ProductChannelMappingCreateOrConnectWithoutProductInput[]
    createMany?: ProductChannelMappingCreateManyProductInputEnvelope
    connect?: ProductChannelMappingWhereUniqueInput | ProductChannelMappingWhereUniqueInput[]
  }

  export type StockSyncJobCreateNestedManyWithoutProductInput = {
    create?: XOR<StockSyncJobCreateWithoutProductInput, StockSyncJobUncheckedCreateWithoutProductInput> | StockSyncJobCreateWithoutProductInput[] | StockSyncJobUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockSyncJobCreateOrConnectWithoutProductInput | StockSyncJobCreateOrConnectWithoutProductInput[]
    createMany?: StockSyncJobCreateManyProductInputEnvelope
    connect?: StockSyncJobWhereUniqueInput | StockSyncJobWhereUniqueInput[]
  }

  export type ProductBatchUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductBatchCreateWithoutProductInput, ProductBatchUncheckedCreateWithoutProductInput> | ProductBatchCreateWithoutProductInput[] | ProductBatchUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductBatchCreateOrConnectWithoutProductInput | ProductBatchCreateOrConnectWithoutProductInput[]
    createMany?: ProductBatchCreateManyProductInputEnvelope
    connect?: ProductBatchWhereUniqueInput | ProductBatchWhereUniqueInput[]
  }

  export type StockMovementUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<StockMovementCreateWithoutProductInput, StockMovementUncheckedCreateWithoutProductInput> | StockMovementCreateWithoutProductInput[] | StockMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutProductInput | StockMovementCreateOrConnectWithoutProductInput[]
    createMany?: StockMovementCreateManyProductInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type OpnameItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OpnameItemCreateWithoutProductInput, OpnameItemUncheckedCreateWithoutProductInput> | OpnameItemCreateWithoutProductInput[] | OpnameItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OpnameItemCreateOrConnectWithoutProductInput | OpnameItemCreateOrConnectWithoutProductInput[]
    createMany?: OpnameItemCreateManyProductInputEnvelope
    connect?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
  }

  export type ProductChannelMappingUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductChannelMappingCreateWithoutProductInput, ProductChannelMappingUncheckedCreateWithoutProductInput> | ProductChannelMappingCreateWithoutProductInput[] | ProductChannelMappingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductChannelMappingCreateOrConnectWithoutProductInput | ProductChannelMappingCreateOrConnectWithoutProductInput[]
    createMany?: ProductChannelMappingCreateManyProductInputEnvelope
    connect?: ProductChannelMappingWhereUniqueInput | ProductChannelMappingWhereUniqueInput[]
  }

  export type StockSyncJobUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<StockSyncJobCreateWithoutProductInput, StockSyncJobUncheckedCreateWithoutProductInput> | StockSyncJobCreateWithoutProductInput[] | StockSyncJobUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockSyncJobCreateOrConnectWithoutProductInput | StockSyncJobCreateOrConnectWithoutProductInput[]
    createMany?: StockSyncJobCreateManyProductInputEnvelope
    connect?: StockSyncJobWhereUniqueInput | StockSyncJobWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CategoryUpdateOneWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type ProductBatchUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductBatchCreateWithoutProductInput, ProductBatchUncheckedCreateWithoutProductInput> | ProductBatchCreateWithoutProductInput[] | ProductBatchUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductBatchCreateOrConnectWithoutProductInput | ProductBatchCreateOrConnectWithoutProductInput[]
    upsert?: ProductBatchUpsertWithWhereUniqueWithoutProductInput | ProductBatchUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductBatchCreateManyProductInputEnvelope
    set?: ProductBatchWhereUniqueInput | ProductBatchWhereUniqueInput[]
    disconnect?: ProductBatchWhereUniqueInput | ProductBatchWhereUniqueInput[]
    delete?: ProductBatchWhereUniqueInput | ProductBatchWhereUniqueInput[]
    connect?: ProductBatchWhereUniqueInput | ProductBatchWhereUniqueInput[]
    update?: ProductBatchUpdateWithWhereUniqueWithoutProductInput | ProductBatchUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductBatchUpdateManyWithWhereWithoutProductInput | ProductBatchUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductBatchScalarWhereInput | ProductBatchScalarWhereInput[]
  }

  export type StockMovementUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockMovementCreateWithoutProductInput, StockMovementUncheckedCreateWithoutProductInput> | StockMovementCreateWithoutProductInput[] | StockMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutProductInput | StockMovementCreateOrConnectWithoutProductInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutProductInput | StockMovementUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockMovementCreateManyProductInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutProductInput | StockMovementUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutProductInput | StockMovementUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type OpnameItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<OpnameItemCreateWithoutProductInput, OpnameItemUncheckedCreateWithoutProductInput> | OpnameItemCreateWithoutProductInput[] | OpnameItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OpnameItemCreateOrConnectWithoutProductInput | OpnameItemCreateOrConnectWithoutProductInput[]
    upsert?: OpnameItemUpsertWithWhereUniqueWithoutProductInput | OpnameItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OpnameItemCreateManyProductInputEnvelope
    set?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
    disconnect?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
    delete?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
    connect?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
    update?: OpnameItemUpdateWithWhereUniqueWithoutProductInput | OpnameItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OpnameItemUpdateManyWithWhereWithoutProductInput | OpnameItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OpnameItemScalarWhereInput | OpnameItemScalarWhereInput[]
  }

  export type ProductChannelMappingUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductChannelMappingCreateWithoutProductInput, ProductChannelMappingUncheckedCreateWithoutProductInput> | ProductChannelMappingCreateWithoutProductInput[] | ProductChannelMappingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductChannelMappingCreateOrConnectWithoutProductInput | ProductChannelMappingCreateOrConnectWithoutProductInput[]
    upsert?: ProductChannelMappingUpsertWithWhereUniqueWithoutProductInput | ProductChannelMappingUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductChannelMappingCreateManyProductInputEnvelope
    set?: ProductChannelMappingWhereUniqueInput | ProductChannelMappingWhereUniqueInput[]
    disconnect?: ProductChannelMappingWhereUniqueInput | ProductChannelMappingWhereUniqueInput[]
    delete?: ProductChannelMappingWhereUniqueInput | ProductChannelMappingWhereUniqueInput[]
    connect?: ProductChannelMappingWhereUniqueInput | ProductChannelMappingWhereUniqueInput[]
    update?: ProductChannelMappingUpdateWithWhereUniqueWithoutProductInput | ProductChannelMappingUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductChannelMappingUpdateManyWithWhereWithoutProductInput | ProductChannelMappingUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductChannelMappingScalarWhereInput | ProductChannelMappingScalarWhereInput[]
  }

  export type StockSyncJobUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockSyncJobCreateWithoutProductInput, StockSyncJobUncheckedCreateWithoutProductInput> | StockSyncJobCreateWithoutProductInput[] | StockSyncJobUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockSyncJobCreateOrConnectWithoutProductInput | StockSyncJobCreateOrConnectWithoutProductInput[]
    upsert?: StockSyncJobUpsertWithWhereUniqueWithoutProductInput | StockSyncJobUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockSyncJobCreateManyProductInputEnvelope
    set?: StockSyncJobWhereUniqueInput | StockSyncJobWhereUniqueInput[]
    disconnect?: StockSyncJobWhereUniqueInput | StockSyncJobWhereUniqueInput[]
    delete?: StockSyncJobWhereUniqueInput | StockSyncJobWhereUniqueInput[]
    connect?: StockSyncJobWhereUniqueInput | StockSyncJobWhereUniqueInput[]
    update?: StockSyncJobUpdateWithWhereUniqueWithoutProductInput | StockSyncJobUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockSyncJobUpdateManyWithWhereWithoutProductInput | StockSyncJobUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockSyncJobScalarWhereInput | StockSyncJobScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductBatchUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductBatchCreateWithoutProductInput, ProductBatchUncheckedCreateWithoutProductInput> | ProductBatchCreateWithoutProductInput[] | ProductBatchUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductBatchCreateOrConnectWithoutProductInput | ProductBatchCreateOrConnectWithoutProductInput[]
    upsert?: ProductBatchUpsertWithWhereUniqueWithoutProductInput | ProductBatchUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductBatchCreateManyProductInputEnvelope
    set?: ProductBatchWhereUniqueInput | ProductBatchWhereUniqueInput[]
    disconnect?: ProductBatchWhereUniqueInput | ProductBatchWhereUniqueInput[]
    delete?: ProductBatchWhereUniqueInput | ProductBatchWhereUniqueInput[]
    connect?: ProductBatchWhereUniqueInput | ProductBatchWhereUniqueInput[]
    update?: ProductBatchUpdateWithWhereUniqueWithoutProductInput | ProductBatchUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductBatchUpdateManyWithWhereWithoutProductInput | ProductBatchUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductBatchScalarWhereInput | ProductBatchScalarWhereInput[]
  }

  export type StockMovementUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockMovementCreateWithoutProductInput, StockMovementUncheckedCreateWithoutProductInput> | StockMovementCreateWithoutProductInput[] | StockMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutProductInput | StockMovementCreateOrConnectWithoutProductInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutProductInput | StockMovementUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockMovementCreateManyProductInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutProductInput | StockMovementUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutProductInput | StockMovementUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type OpnameItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OpnameItemCreateWithoutProductInput, OpnameItemUncheckedCreateWithoutProductInput> | OpnameItemCreateWithoutProductInput[] | OpnameItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OpnameItemCreateOrConnectWithoutProductInput | OpnameItemCreateOrConnectWithoutProductInput[]
    upsert?: OpnameItemUpsertWithWhereUniqueWithoutProductInput | OpnameItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OpnameItemCreateManyProductInputEnvelope
    set?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
    disconnect?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
    delete?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
    connect?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
    update?: OpnameItemUpdateWithWhereUniqueWithoutProductInput | OpnameItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OpnameItemUpdateManyWithWhereWithoutProductInput | OpnameItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OpnameItemScalarWhereInput | OpnameItemScalarWhereInput[]
  }

  export type ProductChannelMappingUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductChannelMappingCreateWithoutProductInput, ProductChannelMappingUncheckedCreateWithoutProductInput> | ProductChannelMappingCreateWithoutProductInput[] | ProductChannelMappingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductChannelMappingCreateOrConnectWithoutProductInput | ProductChannelMappingCreateOrConnectWithoutProductInput[]
    upsert?: ProductChannelMappingUpsertWithWhereUniqueWithoutProductInput | ProductChannelMappingUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductChannelMappingCreateManyProductInputEnvelope
    set?: ProductChannelMappingWhereUniqueInput | ProductChannelMappingWhereUniqueInput[]
    disconnect?: ProductChannelMappingWhereUniqueInput | ProductChannelMappingWhereUniqueInput[]
    delete?: ProductChannelMappingWhereUniqueInput | ProductChannelMappingWhereUniqueInput[]
    connect?: ProductChannelMappingWhereUniqueInput | ProductChannelMappingWhereUniqueInput[]
    update?: ProductChannelMappingUpdateWithWhereUniqueWithoutProductInput | ProductChannelMappingUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductChannelMappingUpdateManyWithWhereWithoutProductInput | ProductChannelMappingUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductChannelMappingScalarWhereInput | ProductChannelMappingScalarWhereInput[]
  }

  export type StockSyncJobUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockSyncJobCreateWithoutProductInput, StockSyncJobUncheckedCreateWithoutProductInput> | StockSyncJobCreateWithoutProductInput[] | StockSyncJobUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockSyncJobCreateOrConnectWithoutProductInput | StockSyncJobCreateOrConnectWithoutProductInput[]
    upsert?: StockSyncJobUpsertWithWhereUniqueWithoutProductInput | StockSyncJobUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockSyncJobCreateManyProductInputEnvelope
    set?: StockSyncJobWhereUniqueInput | StockSyncJobWhereUniqueInput[]
    disconnect?: StockSyncJobWhereUniqueInput | StockSyncJobWhereUniqueInput[]
    delete?: StockSyncJobWhereUniqueInput | StockSyncJobWhereUniqueInput[]
    connect?: StockSyncJobWhereUniqueInput | StockSyncJobWhereUniqueInput[]
    update?: StockSyncJobUpdateWithWhereUniqueWithoutProductInput | StockSyncJobUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockSyncJobUpdateManyWithWhereWithoutProductInput | StockSyncJobUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockSyncJobScalarWhereInput | StockSyncJobScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutBatchesInput = {
    create?: XOR<ProductCreateWithoutBatchesInput, ProductUncheckedCreateWithoutBatchesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutBatchesInput
    connect?: ProductWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProductUpdateOneRequiredWithoutBatchesNestedInput = {
    create?: XOR<ProductCreateWithoutBatchesInput, ProductUncheckedCreateWithoutBatchesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutBatchesInput
    upsert?: ProductUpsertWithoutBatchesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutBatchesInput, ProductUpdateWithoutBatchesInput>, ProductUncheckedUpdateWithoutBatchesInput>
  }

  export type ProductCreateNestedOneWithoutStockMovementsInput = {
    create?: XOR<ProductCreateWithoutStockMovementsInput, ProductUncheckedCreateWithoutStockMovementsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockMovementsInput
    connect?: ProductWhereUniqueInput
  }

  export type SupplierCreateNestedOneWithoutStockMovementsInput = {
    create?: XOR<SupplierCreateWithoutStockMovementsInput, SupplierUncheckedCreateWithoutStockMovementsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutStockMovementsInput
    connect?: SupplierWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStockMovementsInput = {
    create?: XOR<UserCreateWithoutStockMovementsInput, UserUncheckedCreateWithoutStockMovementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStockMovementsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutStockMovementsNestedInput = {
    create?: XOR<ProductCreateWithoutStockMovementsInput, ProductUncheckedCreateWithoutStockMovementsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockMovementsInput
    upsert?: ProductUpsertWithoutStockMovementsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutStockMovementsInput, ProductUpdateWithoutStockMovementsInput>, ProductUncheckedUpdateWithoutStockMovementsInput>
  }

  export type SupplierUpdateOneWithoutStockMovementsNestedInput = {
    create?: XOR<SupplierCreateWithoutStockMovementsInput, SupplierUncheckedCreateWithoutStockMovementsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutStockMovementsInput
    upsert?: SupplierUpsertWithoutStockMovementsInput
    disconnect?: SupplierWhereInput | boolean
    delete?: SupplierWhereInput | boolean
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutStockMovementsInput, SupplierUpdateWithoutStockMovementsInput>, SupplierUncheckedUpdateWithoutStockMovementsInput>
  }

  export type UserUpdateOneRequiredWithoutStockMovementsNestedInput = {
    create?: XOR<UserCreateWithoutStockMovementsInput, UserUncheckedCreateWithoutStockMovementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStockMovementsInput
    upsert?: UserUpsertWithoutStockMovementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStockMovementsInput, UserUpdateWithoutStockMovementsInput>, UserUncheckedUpdateWithoutStockMovementsInput>
  }

  export type UserCreateNestedOneWithoutOpnameSessionsInput = {
    create?: XOR<UserCreateWithoutOpnameSessionsInput, UserUncheckedCreateWithoutOpnameSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOpnameSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApprovedOpnameInput = {
    create?: XOR<UserCreateWithoutApprovedOpnameInput, UserUncheckedCreateWithoutApprovedOpnameInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovedOpnameInput
    connect?: UserWhereUniqueInput
  }

  export type OpnameItemCreateNestedManyWithoutSessionInput = {
    create?: XOR<OpnameItemCreateWithoutSessionInput, OpnameItemUncheckedCreateWithoutSessionInput> | OpnameItemCreateWithoutSessionInput[] | OpnameItemUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: OpnameItemCreateOrConnectWithoutSessionInput | OpnameItemCreateOrConnectWithoutSessionInput[]
    createMany?: OpnameItemCreateManySessionInputEnvelope
    connect?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
  }

  export type OpnameItemUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<OpnameItemCreateWithoutSessionInput, OpnameItemUncheckedCreateWithoutSessionInput> | OpnameItemCreateWithoutSessionInput[] | OpnameItemUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: OpnameItemCreateOrConnectWithoutSessionInput | OpnameItemCreateOrConnectWithoutSessionInput[]
    createMany?: OpnameItemCreateManySessionInputEnvelope
    connect?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOpnameSessionsNestedInput = {
    create?: XOR<UserCreateWithoutOpnameSessionsInput, UserUncheckedCreateWithoutOpnameSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOpnameSessionsInput
    upsert?: UserUpsertWithoutOpnameSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOpnameSessionsInput, UserUpdateWithoutOpnameSessionsInput>, UserUncheckedUpdateWithoutOpnameSessionsInput>
  }

  export type UserUpdateOneWithoutApprovedOpnameNestedInput = {
    create?: XOR<UserCreateWithoutApprovedOpnameInput, UserUncheckedCreateWithoutApprovedOpnameInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovedOpnameInput
    upsert?: UserUpsertWithoutApprovedOpnameInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApprovedOpnameInput, UserUpdateWithoutApprovedOpnameInput>, UserUncheckedUpdateWithoutApprovedOpnameInput>
  }

  export type OpnameItemUpdateManyWithoutSessionNestedInput = {
    create?: XOR<OpnameItemCreateWithoutSessionInput, OpnameItemUncheckedCreateWithoutSessionInput> | OpnameItemCreateWithoutSessionInput[] | OpnameItemUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: OpnameItemCreateOrConnectWithoutSessionInput | OpnameItemCreateOrConnectWithoutSessionInput[]
    upsert?: OpnameItemUpsertWithWhereUniqueWithoutSessionInput | OpnameItemUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: OpnameItemCreateManySessionInputEnvelope
    set?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
    disconnect?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
    delete?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
    connect?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
    update?: OpnameItemUpdateWithWhereUniqueWithoutSessionInput | OpnameItemUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: OpnameItemUpdateManyWithWhereWithoutSessionInput | OpnameItemUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: OpnameItemScalarWhereInput | OpnameItemScalarWhereInput[]
  }

  export type OpnameItemUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<OpnameItemCreateWithoutSessionInput, OpnameItemUncheckedCreateWithoutSessionInput> | OpnameItemCreateWithoutSessionInput[] | OpnameItemUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: OpnameItemCreateOrConnectWithoutSessionInput | OpnameItemCreateOrConnectWithoutSessionInput[]
    upsert?: OpnameItemUpsertWithWhereUniqueWithoutSessionInput | OpnameItemUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: OpnameItemCreateManySessionInputEnvelope
    set?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
    disconnect?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
    delete?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
    connect?: OpnameItemWhereUniqueInput | OpnameItemWhereUniqueInput[]
    update?: OpnameItemUpdateWithWhereUniqueWithoutSessionInput | OpnameItemUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: OpnameItemUpdateManyWithWhereWithoutSessionInput | OpnameItemUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: OpnameItemScalarWhereInput | OpnameItemScalarWhereInput[]
  }

  export type OpnameSessionCreateNestedOneWithoutItemsInput = {
    create?: XOR<OpnameSessionCreateWithoutItemsInput, OpnameSessionUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OpnameSessionCreateOrConnectWithoutItemsInput
    connect?: OpnameSessionWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOpnameItemsInput = {
    create?: XOR<ProductCreateWithoutOpnameItemsInput, ProductUncheckedCreateWithoutOpnameItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOpnameItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCountedItemsInput = {
    create?: XOR<UserCreateWithoutCountedItemsInput, UserUncheckedCreateWithoutCountedItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCountedItemsInput
    connect?: UserWhereUniqueInput
  }

  export type OpnameSessionUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OpnameSessionCreateWithoutItemsInput, OpnameSessionUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OpnameSessionCreateOrConnectWithoutItemsInput
    upsert?: OpnameSessionUpsertWithoutItemsInput
    connect?: OpnameSessionWhereUniqueInput
    update?: XOR<XOR<OpnameSessionUpdateToOneWithWhereWithoutItemsInput, OpnameSessionUpdateWithoutItemsInput>, OpnameSessionUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutOpnameItemsNestedInput = {
    create?: XOR<ProductCreateWithoutOpnameItemsInput, ProductUncheckedCreateWithoutOpnameItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOpnameItemsInput
    upsert?: ProductUpsertWithoutOpnameItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOpnameItemsInput, ProductUpdateWithoutOpnameItemsInput>, ProductUncheckedUpdateWithoutOpnameItemsInput>
  }

  export type UserUpdateOneWithoutCountedItemsNestedInput = {
    create?: XOR<UserCreateWithoutCountedItemsInput, UserUncheckedCreateWithoutCountedItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCountedItemsInput
    upsert?: UserUpsertWithoutCountedItemsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCountedItemsInput, UserUpdateWithoutCountedItemsInput>, UserUncheckedUpdateWithoutCountedItemsInput>
  }

  export type ProductChannelMappingCreateNestedManyWithoutMarketplaceAccountInput = {
    create?: XOR<ProductChannelMappingCreateWithoutMarketplaceAccountInput, ProductChannelMappingUncheckedCreateWithoutMarketplaceAccountInput> | ProductChannelMappingCreateWithoutMarketplaceAccountInput[] | ProductChannelMappingUncheckedCreateWithoutMarketplaceAccountInput[]
    connectOrCreate?: ProductChannelMappingCreateOrConnectWithoutMarketplaceAccountInput | ProductChannelMappingCreateOrConnectWithoutMarketplaceAccountInput[]
    createMany?: ProductChannelMappingCreateManyMarketplaceAccountInputEnvelope
    connect?: ProductChannelMappingWhereUniqueInput | ProductChannelMappingWhereUniqueInput[]
  }

  export type StockSyncJobCreateNestedManyWithoutMarketplaceAccountInput = {
    create?: XOR<StockSyncJobCreateWithoutMarketplaceAccountInput, StockSyncJobUncheckedCreateWithoutMarketplaceAccountInput> | StockSyncJobCreateWithoutMarketplaceAccountInput[] | StockSyncJobUncheckedCreateWithoutMarketplaceAccountInput[]
    connectOrCreate?: StockSyncJobCreateOrConnectWithoutMarketplaceAccountInput | StockSyncJobCreateOrConnectWithoutMarketplaceAccountInput[]
    createMany?: StockSyncJobCreateManyMarketplaceAccountInputEnvelope
    connect?: StockSyncJobWhereUniqueInput | StockSyncJobWhereUniqueInput[]
  }

  export type ProductChannelMappingUncheckedCreateNestedManyWithoutMarketplaceAccountInput = {
    create?: XOR<ProductChannelMappingCreateWithoutMarketplaceAccountInput, ProductChannelMappingUncheckedCreateWithoutMarketplaceAccountInput> | ProductChannelMappingCreateWithoutMarketplaceAccountInput[] | ProductChannelMappingUncheckedCreateWithoutMarketplaceAccountInput[]
    connectOrCreate?: ProductChannelMappingCreateOrConnectWithoutMarketplaceAccountInput | ProductChannelMappingCreateOrConnectWithoutMarketplaceAccountInput[]
    createMany?: ProductChannelMappingCreateManyMarketplaceAccountInputEnvelope
    connect?: ProductChannelMappingWhereUniqueInput | ProductChannelMappingWhereUniqueInput[]
  }

  export type StockSyncJobUncheckedCreateNestedManyWithoutMarketplaceAccountInput = {
    create?: XOR<StockSyncJobCreateWithoutMarketplaceAccountInput, StockSyncJobUncheckedCreateWithoutMarketplaceAccountInput> | StockSyncJobCreateWithoutMarketplaceAccountInput[] | StockSyncJobUncheckedCreateWithoutMarketplaceAccountInput[]
    connectOrCreate?: StockSyncJobCreateOrConnectWithoutMarketplaceAccountInput | StockSyncJobCreateOrConnectWithoutMarketplaceAccountInput[]
    createMany?: StockSyncJobCreateManyMarketplaceAccountInputEnvelope
    connect?: StockSyncJobWhereUniqueInput | StockSyncJobWhereUniqueInput[]
  }

  export type ProductChannelMappingUpdateManyWithoutMarketplaceAccountNestedInput = {
    create?: XOR<ProductChannelMappingCreateWithoutMarketplaceAccountInput, ProductChannelMappingUncheckedCreateWithoutMarketplaceAccountInput> | ProductChannelMappingCreateWithoutMarketplaceAccountInput[] | ProductChannelMappingUncheckedCreateWithoutMarketplaceAccountInput[]
    connectOrCreate?: ProductChannelMappingCreateOrConnectWithoutMarketplaceAccountInput | ProductChannelMappingCreateOrConnectWithoutMarketplaceAccountInput[]
    upsert?: ProductChannelMappingUpsertWithWhereUniqueWithoutMarketplaceAccountInput | ProductChannelMappingUpsertWithWhereUniqueWithoutMarketplaceAccountInput[]
    createMany?: ProductChannelMappingCreateManyMarketplaceAccountInputEnvelope
    set?: ProductChannelMappingWhereUniqueInput | ProductChannelMappingWhereUniqueInput[]
    disconnect?: ProductChannelMappingWhereUniqueInput | ProductChannelMappingWhereUniqueInput[]
    delete?: ProductChannelMappingWhereUniqueInput | ProductChannelMappingWhereUniqueInput[]
    connect?: ProductChannelMappingWhereUniqueInput | ProductChannelMappingWhereUniqueInput[]
    update?: ProductChannelMappingUpdateWithWhereUniqueWithoutMarketplaceAccountInput | ProductChannelMappingUpdateWithWhereUniqueWithoutMarketplaceAccountInput[]
    updateMany?: ProductChannelMappingUpdateManyWithWhereWithoutMarketplaceAccountInput | ProductChannelMappingUpdateManyWithWhereWithoutMarketplaceAccountInput[]
    deleteMany?: ProductChannelMappingScalarWhereInput | ProductChannelMappingScalarWhereInput[]
  }

  export type StockSyncJobUpdateManyWithoutMarketplaceAccountNestedInput = {
    create?: XOR<StockSyncJobCreateWithoutMarketplaceAccountInput, StockSyncJobUncheckedCreateWithoutMarketplaceAccountInput> | StockSyncJobCreateWithoutMarketplaceAccountInput[] | StockSyncJobUncheckedCreateWithoutMarketplaceAccountInput[]
    connectOrCreate?: StockSyncJobCreateOrConnectWithoutMarketplaceAccountInput | StockSyncJobCreateOrConnectWithoutMarketplaceAccountInput[]
    upsert?: StockSyncJobUpsertWithWhereUniqueWithoutMarketplaceAccountInput | StockSyncJobUpsertWithWhereUniqueWithoutMarketplaceAccountInput[]
    createMany?: StockSyncJobCreateManyMarketplaceAccountInputEnvelope
    set?: StockSyncJobWhereUniqueInput | StockSyncJobWhereUniqueInput[]
    disconnect?: StockSyncJobWhereUniqueInput | StockSyncJobWhereUniqueInput[]
    delete?: StockSyncJobWhereUniqueInput | StockSyncJobWhereUniqueInput[]
    connect?: StockSyncJobWhereUniqueInput | StockSyncJobWhereUniqueInput[]
    update?: StockSyncJobUpdateWithWhereUniqueWithoutMarketplaceAccountInput | StockSyncJobUpdateWithWhereUniqueWithoutMarketplaceAccountInput[]
    updateMany?: StockSyncJobUpdateManyWithWhereWithoutMarketplaceAccountInput | StockSyncJobUpdateManyWithWhereWithoutMarketplaceAccountInput[]
    deleteMany?: StockSyncJobScalarWhereInput | StockSyncJobScalarWhereInput[]
  }

  export type ProductChannelMappingUncheckedUpdateManyWithoutMarketplaceAccountNestedInput = {
    create?: XOR<ProductChannelMappingCreateWithoutMarketplaceAccountInput, ProductChannelMappingUncheckedCreateWithoutMarketplaceAccountInput> | ProductChannelMappingCreateWithoutMarketplaceAccountInput[] | ProductChannelMappingUncheckedCreateWithoutMarketplaceAccountInput[]
    connectOrCreate?: ProductChannelMappingCreateOrConnectWithoutMarketplaceAccountInput | ProductChannelMappingCreateOrConnectWithoutMarketplaceAccountInput[]
    upsert?: ProductChannelMappingUpsertWithWhereUniqueWithoutMarketplaceAccountInput | ProductChannelMappingUpsertWithWhereUniqueWithoutMarketplaceAccountInput[]
    createMany?: ProductChannelMappingCreateManyMarketplaceAccountInputEnvelope
    set?: ProductChannelMappingWhereUniqueInput | ProductChannelMappingWhereUniqueInput[]
    disconnect?: ProductChannelMappingWhereUniqueInput | ProductChannelMappingWhereUniqueInput[]
    delete?: ProductChannelMappingWhereUniqueInput | ProductChannelMappingWhereUniqueInput[]
    connect?: ProductChannelMappingWhereUniqueInput | ProductChannelMappingWhereUniqueInput[]
    update?: ProductChannelMappingUpdateWithWhereUniqueWithoutMarketplaceAccountInput | ProductChannelMappingUpdateWithWhereUniqueWithoutMarketplaceAccountInput[]
    updateMany?: ProductChannelMappingUpdateManyWithWhereWithoutMarketplaceAccountInput | ProductChannelMappingUpdateManyWithWhereWithoutMarketplaceAccountInput[]
    deleteMany?: ProductChannelMappingScalarWhereInput | ProductChannelMappingScalarWhereInput[]
  }

  export type StockSyncJobUncheckedUpdateManyWithoutMarketplaceAccountNestedInput = {
    create?: XOR<StockSyncJobCreateWithoutMarketplaceAccountInput, StockSyncJobUncheckedCreateWithoutMarketplaceAccountInput> | StockSyncJobCreateWithoutMarketplaceAccountInput[] | StockSyncJobUncheckedCreateWithoutMarketplaceAccountInput[]
    connectOrCreate?: StockSyncJobCreateOrConnectWithoutMarketplaceAccountInput | StockSyncJobCreateOrConnectWithoutMarketplaceAccountInput[]
    upsert?: StockSyncJobUpsertWithWhereUniqueWithoutMarketplaceAccountInput | StockSyncJobUpsertWithWhereUniqueWithoutMarketplaceAccountInput[]
    createMany?: StockSyncJobCreateManyMarketplaceAccountInputEnvelope
    set?: StockSyncJobWhereUniqueInput | StockSyncJobWhereUniqueInput[]
    disconnect?: StockSyncJobWhereUniqueInput | StockSyncJobWhereUniqueInput[]
    delete?: StockSyncJobWhereUniqueInput | StockSyncJobWhereUniqueInput[]
    connect?: StockSyncJobWhereUniqueInput | StockSyncJobWhereUniqueInput[]
    update?: StockSyncJobUpdateWithWhereUniqueWithoutMarketplaceAccountInput | StockSyncJobUpdateWithWhereUniqueWithoutMarketplaceAccountInput[]
    updateMany?: StockSyncJobUpdateManyWithWhereWithoutMarketplaceAccountInput | StockSyncJobUpdateManyWithWhereWithoutMarketplaceAccountInput[]
    deleteMany?: StockSyncJobScalarWhereInput | StockSyncJobScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutChannelMappingsInput = {
    create?: XOR<ProductCreateWithoutChannelMappingsInput, ProductUncheckedCreateWithoutChannelMappingsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutChannelMappingsInput
    connect?: ProductWhereUniqueInput
  }

  export type MarketplaceAccountCreateNestedOneWithoutProductMappingsInput = {
    create?: XOR<MarketplaceAccountCreateWithoutProductMappingsInput, MarketplaceAccountUncheckedCreateWithoutProductMappingsInput>
    connectOrCreate?: MarketplaceAccountCreateOrConnectWithoutProductMappingsInput
    connect?: MarketplaceAccountWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutChannelMappingsNestedInput = {
    create?: XOR<ProductCreateWithoutChannelMappingsInput, ProductUncheckedCreateWithoutChannelMappingsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutChannelMappingsInput
    upsert?: ProductUpsertWithoutChannelMappingsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutChannelMappingsInput, ProductUpdateWithoutChannelMappingsInput>, ProductUncheckedUpdateWithoutChannelMappingsInput>
  }

  export type MarketplaceAccountUpdateOneRequiredWithoutProductMappingsNestedInput = {
    create?: XOR<MarketplaceAccountCreateWithoutProductMappingsInput, MarketplaceAccountUncheckedCreateWithoutProductMappingsInput>
    connectOrCreate?: MarketplaceAccountCreateOrConnectWithoutProductMappingsInput
    upsert?: MarketplaceAccountUpsertWithoutProductMappingsInput
    connect?: MarketplaceAccountWhereUniqueInput
    update?: XOR<XOR<MarketplaceAccountUpdateToOneWithWhereWithoutProductMappingsInput, MarketplaceAccountUpdateWithoutProductMappingsInput>, MarketplaceAccountUncheckedUpdateWithoutProductMappingsInput>
  }

  export type ProductCreateNestedOneWithoutSyncJobsInput = {
    create?: XOR<ProductCreateWithoutSyncJobsInput, ProductUncheckedCreateWithoutSyncJobsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSyncJobsInput
    connect?: ProductWhereUniqueInput
  }

  export type MarketplaceAccountCreateNestedOneWithoutSyncJobsInput = {
    create?: XOR<MarketplaceAccountCreateWithoutSyncJobsInput, MarketplaceAccountUncheckedCreateWithoutSyncJobsInput>
    connectOrCreate?: MarketplaceAccountCreateOrConnectWithoutSyncJobsInput
    connect?: MarketplaceAccountWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutSyncJobsNestedInput = {
    create?: XOR<ProductCreateWithoutSyncJobsInput, ProductUncheckedCreateWithoutSyncJobsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSyncJobsInput
    upsert?: ProductUpsertWithoutSyncJobsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSyncJobsInput, ProductUpdateWithoutSyncJobsInput>, ProductUncheckedUpdateWithoutSyncJobsInput>
  }

  export type MarketplaceAccountUpdateOneWithoutSyncJobsNestedInput = {
    create?: XOR<MarketplaceAccountCreateWithoutSyncJobsInput, MarketplaceAccountUncheckedCreateWithoutSyncJobsInput>
    connectOrCreate?: MarketplaceAccountCreateOrConnectWithoutSyncJobsInput
    upsert?: MarketplaceAccountUpsertWithoutSyncJobsInput
    disconnect?: MarketplaceAccountWhereInput | boolean
    delete?: MarketplaceAccountWhereInput | boolean
    connect?: MarketplaceAccountWhereUniqueInput
    update?: XOR<XOR<MarketplaceAccountUpdateToOneWithWhereWithoutSyncJobsInput, MarketplaceAccountUpdateWithoutSyncJobsInput>, MarketplaceAccountUncheckedUpdateWithoutSyncJobsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StockMovementCreateWithoutCreatorInput = {
    type: string
    quantity: number
    referenceType?: string | null
    referenceId?: number | null
    note?: string | null
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutStockMovementsInput
    supplier?: SupplierCreateNestedOneWithoutStockMovementsInput
  }

  export type StockMovementUncheckedCreateWithoutCreatorInput = {
    id?: number
    productId: number
    type: string
    quantity: number
    referenceType?: string | null
    referenceId?: number | null
    supplierId?: number | null
    note?: string | null
    createdAt?: Date | string
  }

  export type StockMovementCreateOrConnectWithoutCreatorInput = {
    where: StockMovementWhereUniqueInput
    create: XOR<StockMovementCreateWithoutCreatorInput, StockMovementUncheckedCreateWithoutCreatorInput>
  }

  export type StockMovementCreateManyCreatorInputEnvelope = {
    data: StockMovementCreateManyCreatorInput | StockMovementCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type OpnameSessionCreateWithoutCreatorInput = {
    code: string
    title?: string | null
    status?: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    approvedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    approver?: UserCreateNestedOneWithoutApprovedOpnameInput
    items?: OpnameItemCreateNestedManyWithoutSessionInput
  }

  export type OpnameSessionUncheckedCreateWithoutCreatorInput = {
    id?: number
    code: string
    title?: string | null
    status?: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    approvedBy?: number | null
    approvedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    items?: OpnameItemUncheckedCreateNestedManyWithoutSessionInput
  }

  export type OpnameSessionCreateOrConnectWithoutCreatorInput = {
    where: OpnameSessionWhereUniqueInput
    create: XOR<OpnameSessionCreateWithoutCreatorInput, OpnameSessionUncheckedCreateWithoutCreatorInput>
  }

  export type OpnameSessionCreateManyCreatorInputEnvelope = {
    data: OpnameSessionCreateManyCreatorInput | OpnameSessionCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type OpnameSessionCreateWithoutApproverInput = {
    code: string
    title?: string | null
    status?: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    approvedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutOpnameSessionsInput
    items?: OpnameItemCreateNestedManyWithoutSessionInput
  }

  export type OpnameSessionUncheckedCreateWithoutApproverInput = {
    id?: number
    code: string
    title?: string | null
    status?: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdBy: number
    approvedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    items?: OpnameItemUncheckedCreateNestedManyWithoutSessionInput
  }

  export type OpnameSessionCreateOrConnectWithoutApproverInput = {
    where: OpnameSessionWhereUniqueInput
    create: XOR<OpnameSessionCreateWithoutApproverInput, OpnameSessionUncheckedCreateWithoutApproverInput>
  }

  export type OpnameSessionCreateManyApproverInputEnvelope = {
    data: OpnameSessionCreateManyApproverInput | OpnameSessionCreateManyApproverInput[]
    skipDuplicates?: boolean
  }

  export type OpnameItemCreateWithoutCounterInput = {
    systemStock: number
    physicalStock?: number | null
    difference?: number | null
    note?: string | null
    countedAt?: Date | string | null
    createdAt?: Date | string
    session: OpnameSessionCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutOpnameItemsInput
  }

  export type OpnameItemUncheckedCreateWithoutCounterInput = {
    id?: number
    sessionId: number
    productId: number
    systemStock: number
    physicalStock?: number | null
    difference?: number | null
    note?: string | null
    countedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OpnameItemCreateOrConnectWithoutCounterInput = {
    where: OpnameItemWhereUniqueInput
    create: XOR<OpnameItemCreateWithoutCounterInput, OpnameItemUncheckedCreateWithoutCounterInput>
  }

  export type OpnameItemCreateManyCounterInputEnvelope = {
    data: OpnameItemCreateManyCounterInput | OpnameItemCreateManyCounterInput[]
    skipDuplicates?: boolean
  }

  export type StockMovementUpsertWithWhereUniqueWithoutCreatorInput = {
    where: StockMovementWhereUniqueInput
    update: XOR<StockMovementUpdateWithoutCreatorInput, StockMovementUncheckedUpdateWithoutCreatorInput>
    create: XOR<StockMovementCreateWithoutCreatorInput, StockMovementUncheckedCreateWithoutCreatorInput>
  }

  export type StockMovementUpdateWithWhereUniqueWithoutCreatorInput = {
    where: StockMovementWhereUniqueInput
    data: XOR<StockMovementUpdateWithoutCreatorInput, StockMovementUncheckedUpdateWithoutCreatorInput>
  }

  export type StockMovementUpdateManyWithWhereWithoutCreatorInput = {
    where: StockMovementScalarWhereInput
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyWithoutCreatorInput>
  }

  export type StockMovementScalarWhereInput = {
    AND?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
    OR?: StockMovementScalarWhereInput[]
    NOT?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
    id?: IntFilter<"StockMovement"> | number
    productId?: IntFilter<"StockMovement"> | number
    type?: StringFilter<"StockMovement"> | string
    quantity?: IntFilter<"StockMovement"> | number
    referenceType?: StringNullableFilter<"StockMovement"> | string | null
    referenceId?: IntNullableFilter<"StockMovement"> | number | null
    supplierId?: IntNullableFilter<"StockMovement"> | number | null
    note?: StringNullableFilter<"StockMovement"> | string | null
    createdBy?: IntFilter<"StockMovement"> | number
    createdAt?: DateTimeFilter<"StockMovement"> | Date | string
  }

  export type OpnameSessionUpsertWithWhereUniqueWithoutCreatorInput = {
    where: OpnameSessionWhereUniqueInput
    update: XOR<OpnameSessionUpdateWithoutCreatorInput, OpnameSessionUncheckedUpdateWithoutCreatorInput>
    create: XOR<OpnameSessionCreateWithoutCreatorInput, OpnameSessionUncheckedCreateWithoutCreatorInput>
  }

  export type OpnameSessionUpdateWithWhereUniqueWithoutCreatorInput = {
    where: OpnameSessionWhereUniqueInput
    data: XOR<OpnameSessionUpdateWithoutCreatorInput, OpnameSessionUncheckedUpdateWithoutCreatorInput>
  }

  export type OpnameSessionUpdateManyWithWhereWithoutCreatorInput = {
    where: OpnameSessionScalarWhereInput
    data: XOR<OpnameSessionUpdateManyMutationInput, OpnameSessionUncheckedUpdateManyWithoutCreatorInput>
  }

  export type OpnameSessionScalarWhereInput = {
    AND?: OpnameSessionScalarWhereInput | OpnameSessionScalarWhereInput[]
    OR?: OpnameSessionScalarWhereInput[]
    NOT?: OpnameSessionScalarWhereInput | OpnameSessionScalarWhereInput[]
    id?: IntFilter<"OpnameSession"> | number
    code?: StringFilter<"OpnameSession"> | string
    title?: StringNullableFilter<"OpnameSession"> | string | null
    status?: StringFilter<"OpnameSession"> | string
    startedAt?: DateTimeNullableFilter<"OpnameSession"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"OpnameSession"> | Date | string | null
    createdBy?: IntFilter<"OpnameSession"> | number
    approvedBy?: IntNullableFilter<"OpnameSession"> | number | null
    approvedAt?: DateTimeNullableFilter<"OpnameSession"> | Date | string | null
    notes?: StringNullableFilter<"OpnameSession"> | string | null
    createdAt?: DateTimeFilter<"OpnameSession"> | Date | string
  }

  export type OpnameSessionUpsertWithWhereUniqueWithoutApproverInput = {
    where: OpnameSessionWhereUniqueInput
    update: XOR<OpnameSessionUpdateWithoutApproverInput, OpnameSessionUncheckedUpdateWithoutApproverInput>
    create: XOR<OpnameSessionCreateWithoutApproverInput, OpnameSessionUncheckedCreateWithoutApproverInput>
  }

  export type OpnameSessionUpdateWithWhereUniqueWithoutApproverInput = {
    where: OpnameSessionWhereUniqueInput
    data: XOR<OpnameSessionUpdateWithoutApproverInput, OpnameSessionUncheckedUpdateWithoutApproverInput>
  }

  export type OpnameSessionUpdateManyWithWhereWithoutApproverInput = {
    where: OpnameSessionScalarWhereInput
    data: XOR<OpnameSessionUpdateManyMutationInput, OpnameSessionUncheckedUpdateManyWithoutApproverInput>
  }

  export type OpnameItemUpsertWithWhereUniqueWithoutCounterInput = {
    where: OpnameItemWhereUniqueInput
    update: XOR<OpnameItemUpdateWithoutCounterInput, OpnameItemUncheckedUpdateWithoutCounterInput>
    create: XOR<OpnameItemCreateWithoutCounterInput, OpnameItemUncheckedCreateWithoutCounterInput>
  }

  export type OpnameItemUpdateWithWhereUniqueWithoutCounterInput = {
    where: OpnameItemWhereUniqueInput
    data: XOR<OpnameItemUpdateWithoutCounterInput, OpnameItemUncheckedUpdateWithoutCounterInput>
  }

  export type OpnameItemUpdateManyWithWhereWithoutCounterInput = {
    where: OpnameItemScalarWhereInput
    data: XOR<OpnameItemUpdateManyMutationInput, OpnameItemUncheckedUpdateManyWithoutCounterInput>
  }

  export type OpnameItemScalarWhereInput = {
    AND?: OpnameItemScalarWhereInput | OpnameItemScalarWhereInput[]
    OR?: OpnameItemScalarWhereInput[]
    NOT?: OpnameItemScalarWhereInput | OpnameItemScalarWhereInput[]
    id?: IntFilter<"OpnameItem"> | number
    sessionId?: IntFilter<"OpnameItem"> | number
    productId?: IntFilter<"OpnameItem"> | number
    systemStock?: IntFilter<"OpnameItem"> | number
    physicalStock?: IntNullableFilter<"OpnameItem"> | number | null
    difference?: IntNullableFilter<"OpnameItem"> | number | null
    note?: StringNullableFilter<"OpnameItem"> | string | null
    countedBy?: IntNullableFilter<"OpnameItem"> | number | null
    countedAt?: DateTimeNullableFilter<"OpnameItem"> | Date | string | null
    createdAt?: DateTimeFilter<"OpnameItem"> | Date | string
  }

  export type StockMovementCreateWithoutSupplierInput = {
    type: string
    quantity: number
    referenceType?: string | null
    referenceId?: number | null
    note?: string | null
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutStockMovementsInput
    creator: UserCreateNestedOneWithoutStockMovementsInput
  }

  export type StockMovementUncheckedCreateWithoutSupplierInput = {
    id?: number
    productId: number
    type: string
    quantity: number
    referenceType?: string | null
    referenceId?: number | null
    note?: string | null
    createdBy: number
    createdAt?: Date | string
  }

  export type StockMovementCreateOrConnectWithoutSupplierInput = {
    where: StockMovementWhereUniqueInput
    create: XOR<StockMovementCreateWithoutSupplierInput, StockMovementUncheckedCreateWithoutSupplierInput>
  }

  export type StockMovementCreateManySupplierInputEnvelope = {
    data: StockMovementCreateManySupplierInput | StockMovementCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type StockMovementUpsertWithWhereUniqueWithoutSupplierInput = {
    where: StockMovementWhereUniqueInput
    update: XOR<StockMovementUpdateWithoutSupplierInput, StockMovementUncheckedUpdateWithoutSupplierInput>
    create: XOR<StockMovementCreateWithoutSupplierInput, StockMovementUncheckedCreateWithoutSupplierInput>
  }

  export type StockMovementUpdateWithWhereUniqueWithoutSupplierInput = {
    where: StockMovementWhereUniqueInput
    data: XOR<StockMovementUpdateWithoutSupplierInput, StockMovementUncheckedUpdateWithoutSupplierInput>
  }

  export type StockMovementUpdateManyWithWhereWithoutSupplierInput = {
    where: StockMovementScalarWhereInput
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyWithoutSupplierInput>
  }

  export type ProductCreateWithoutCategoryInput = {
    sku: string
    name: string
    unit?: string
    purchasePrice?: Decimal | DecimalJsLike | number | string
    sellingPrice?: Decimal | DecimalJsLike | number | string
    minStock?: number
    currentStock?: number
    imageUrl?: string | null
    isPerishable?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: ProductBatchCreateNestedManyWithoutProductInput
    stockMovements?: StockMovementCreateNestedManyWithoutProductInput
    opnameItems?: OpnameItemCreateNestedManyWithoutProductInput
    channelMappings?: ProductChannelMappingCreateNestedManyWithoutProductInput
    syncJobs?: StockSyncJobCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    sku: string
    name: string
    unit?: string
    purchasePrice?: Decimal | DecimalJsLike | number | string
    sellingPrice?: Decimal | DecimalJsLike | number | string
    minStock?: number
    currentStock?: number
    imageUrl?: string | null
    isPerishable?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: ProductBatchUncheckedCreateNestedManyWithoutProductInput
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutProductInput
    opnameItems?: OpnameItemUncheckedCreateNestedManyWithoutProductInput
    channelMappings?: ProductChannelMappingUncheckedCreateNestedManyWithoutProductInput
    syncJobs?: StockSyncJobUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    sku?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    categoryId?: IntNullableFilter<"Product"> | number | null
    unit?: StringFilter<"Product"> | string
    purchasePrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    sellingPrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    minStock?: IntFilter<"Product"> | number
    currentStock?: IntFilter<"Product"> | number
    imageUrl?: StringNullableFilter<"Product"> | string | null
    isPerishable?: BoolFilter<"Product"> | boolean
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type CategoryCreateWithoutProductsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type ProductBatchCreateWithoutProductInput = {
    batchCode?: string | null
    quantity?: number
    expiredDate?: Date | string | null
    receivedDate?: Date | string
    createdAt?: Date | string
  }

  export type ProductBatchUncheckedCreateWithoutProductInput = {
    id?: number
    batchCode?: string | null
    quantity?: number
    expiredDate?: Date | string | null
    receivedDate?: Date | string
    createdAt?: Date | string
  }

  export type ProductBatchCreateOrConnectWithoutProductInput = {
    where: ProductBatchWhereUniqueInput
    create: XOR<ProductBatchCreateWithoutProductInput, ProductBatchUncheckedCreateWithoutProductInput>
  }

  export type ProductBatchCreateManyProductInputEnvelope = {
    data: ProductBatchCreateManyProductInput | ProductBatchCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type StockMovementCreateWithoutProductInput = {
    type: string
    quantity: number
    referenceType?: string | null
    referenceId?: number | null
    note?: string | null
    createdAt?: Date | string
    supplier?: SupplierCreateNestedOneWithoutStockMovementsInput
    creator: UserCreateNestedOneWithoutStockMovementsInput
  }

  export type StockMovementUncheckedCreateWithoutProductInput = {
    id?: number
    type: string
    quantity: number
    referenceType?: string | null
    referenceId?: number | null
    supplierId?: number | null
    note?: string | null
    createdBy: number
    createdAt?: Date | string
  }

  export type StockMovementCreateOrConnectWithoutProductInput = {
    where: StockMovementWhereUniqueInput
    create: XOR<StockMovementCreateWithoutProductInput, StockMovementUncheckedCreateWithoutProductInput>
  }

  export type StockMovementCreateManyProductInputEnvelope = {
    data: StockMovementCreateManyProductInput | StockMovementCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type OpnameItemCreateWithoutProductInput = {
    systemStock: number
    physicalStock?: number | null
    difference?: number | null
    note?: string | null
    countedAt?: Date | string | null
    createdAt?: Date | string
    session: OpnameSessionCreateNestedOneWithoutItemsInput
    counter?: UserCreateNestedOneWithoutCountedItemsInput
  }

  export type OpnameItemUncheckedCreateWithoutProductInput = {
    id?: number
    sessionId: number
    systemStock: number
    physicalStock?: number | null
    difference?: number | null
    note?: string | null
    countedBy?: number | null
    countedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OpnameItemCreateOrConnectWithoutProductInput = {
    where: OpnameItemWhereUniqueInput
    create: XOR<OpnameItemCreateWithoutProductInput, OpnameItemUncheckedCreateWithoutProductInput>
  }

  export type OpnameItemCreateManyProductInputEnvelope = {
    data: OpnameItemCreateManyProductInput | OpnameItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductChannelMappingCreateWithoutProductInput = {
    externalProductId: string
    externalVariantId?: string | null
    externalSku?: string | null
    safetyStock?: number
    lastSyncedStock?: number | null
    lastSyncedAt?: Date | string | null
    syncStatus?: string
    syncError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    marketplaceAccount: MarketplaceAccountCreateNestedOneWithoutProductMappingsInput
  }

  export type ProductChannelMappingUncheckedCreateWithoutProductInput = {
    id?: number
    marketplaceAccountId: number
    externalProductId: string
    externalVariantId?: string | null
    externalSku?: string | null
    safetyStock?: number
    lastSyncedStock?: number | null
    lastSyncedAt?: Date | string | null
    syncStatus?: string
    syncError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductChannelMappingCreateOrConnectWithoutProductInput = {
    where: ProductChannelMappingWhereUniqueInput
    create: XOR<ProductChannelMappingCreateWithoutProductInput, ProductChannelMappingUncheckedCreateWithoutProductInput>
  }

  export type ProductChannelMappingCreateManyProductInputEnvelope = {
    data: ProductChannelMappingCreateManyProductInput | ProductChannelMappingCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type StockSyncJobCreateWithoutProductInput = {
    targetStock: number
    status?: string
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
    marketplaceAccount?: MarketplaceAccountCreateNestedOneWithoutSyncJobsInput
  }

  export type StockSyncJobUncheckedCreateWithoutProductInput = {
    id?: number
    marketplaceAccountId?: number | null
    targetStock: number
    status?: string
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
  }

  export type StockSyncJobCreateOrConnectWithoutProductInput = {
    where: StockSyncJobWhereUniqueInput
    create: XOR<StockSyncJobCreateWithoutProductInput, StockSyncJobUncheckedCreateWithoutProductInput>
  }

  export type StockSyncJobCreateManyProductInputEnvelope = {
    data: StockSyncJobCreateManyProductInput | StockSyncJobCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductBatchUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductBatchWhereUniqueInput
    update: XOR<ProductBatchUpdateWithoutProductInput, ProductBatchUncheckedUpdateWithoutProductInput>
    create: XOR<ProductBatchCreateWithoutProductInput, ProductBatchUncheckedCreateWithoutProductInput>
  }

  export type ProductBatchUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductBatchWhereUniqueInput
    data: XOR<ProductBatchUpdateWithoutProductInput, ProductBatchUncheckedUpdateWithoutProductInput>
  }

  export type ProductBatchUpdateManyWithWhereWithoutProductInput = {
    where: ProductBatchScalarWhereInput
    data: XOR<ProductBatchUpdateManyMutationInput, ProductBatchUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductBatchScalarWhereInput = {
    AND?: ProductBatchScalarWhereInput | ProductBatchScalarWhereInput[]
    OR?: ProductBatchScalarWhereInput[]
    NOT?: ProductBatchScalarWhereInput | ProductBatchScalarWhereInput[]
    id?: IntFilter<"ProductBatch"> | number
    productId?: IntFilter<"ProductBatch"> | number
    batchCode?: StringNullableFilter<"ProductBatch"> | string | null
    quantity?: IntFilter<"ProductBatch"> | number
    expiredDate?: DateTimeNullableFilter<"ProductBatch"> | Date | string | null
    receivedDate?: DateTimeFilter<"ProductBatch"> | Date | string
    createdAt?: DateTimeFilter<"ProductBatch"> | Date | string
  }

  export type StockMovementUpsertWithWhereUniqueWithoutProductInput = {
    where: StockMovementWhereUniqueInput
    update: XOR<StockMovementUpdateWithoutProductInput, StockMovementUncheckedUpdateWithoutProductInput>
    create: XOR<StockMovementCreateWithoutProductInput, StockMovementUncheckedCreateWithoutProductInput>
  }

  export type StockMovementUpdateWithWhereUniqueWithoutProductInput = {
    where: StockMovementWhereUniqueInput
    data: XOR<StockMovementUpdateWithoutProductInput, StockMovementUncheckedUpdateWithoutProductInput>
  }

  export type StockMovementUpdateManyWithWhereWithoutProductInput = {
    where: StockMovementScalarWhereInput
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyWithoutProductInput>
  }

  export type OpnameItemUpsertWithWhereUniqueWithoutProductInput = {
    where: OpnameItemWhereUniqueInput
    update: XOR<OpnameItemUpdateWithoutProductInput, OpnameItemUncheckedUpdateWithoutProductInput>
    create: XOR<OpnameItemCreateWithoutProductInput, OpnameItemUncheckedCreateWithoutProductInput>
  }

  export type OpnameItemUpdateWithWhereUniqueWithoutProductInput = {
    where: OpnameItemWhereUniqueInput
    data: XOR<OpnameItemUpdateWithoutProductInput, OpnameItemUncheckedUpdateWithoutProductInput>
  }

  export type OpnameItemUpdateManyWithWhereWithoutProductInput = {
    where: OpnameItemScalarWhereInput
    data: XOR<OpnameItemUpdateManyMutationInput, OpnameItemUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductChannelMappingUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductChannelMappingWhereUniqueInput
    update: XOR<ProductChannelMappingUpdateWithoutProductInput, ProductChannelMappingUncheckedUpdateWithoutProductInput>
    create: XOR<ProductChannelMappingCreateWithoutProductInput, ProductChannelMappingUncheckedCreateWithoutProductInput>
  }

  export type ProductChannelMappingUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductChannelMappingWhereUniqueInput
    data: XOR<ProductChannelMappingUpdateWithoutProductInput, ProductChannelMappingUncheckedUpdateWithoutProductInput>
  }

  export type ProductChannelMappingUpdateManyWithWhereWithoutProductInput = {
    where: ProductChannelMappingScalarWhereInput
    data: XOR<ProductChannelMappingUpdateManyMutationInput, ProductChannelMappingUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductChannelMappingScalarWhereInput = {
    AND?: ProductChannelMappingScalarWhereInput | ProductChannelMappingScalarWhereInput[]
    OR?: ProductChannelMappingScalarWhereInput[]
    NOT?: ProductChannelMappingScalarWhereInput | ProductChannelMappingScalarWhereInput[]
    id?: IntFilter<"ProductChannelMapping"> | number
    productId?: IntFilter<"ProductChannelMapping"> | number
    marketplaceAccountId?: IntFilter<"ProductChannelMapping"> | number
    externalProductId?: StringFilter<"ProductChannelMapping"> | string
    externalVariantId?: StringNullableFilter<"ProductChannelMapping"> | string | null
    externalSku?: StringNullableFilter<"ProductChannelMapping"> | string | null
    safetyStock?: IntFilter<"ProductChannelMapping"> | number
    lastSyncedStock?: IntNullableFilter<"ProductChannelMapping"> | number | null
    lastSyncedAt?: DateTimeNullableFilter<"ProductChannelMapping"> | Date | string | null
    syncStatus?: StringFilter<"ProductChannelMapping"> | string
    syncError?: StringNullableFilter<"ProductChannelMapping"> | string | null
    createdAt?: DateTimeFilter<"ProductChannelMapping"> | Date | string
    updatedAt?: DateTimeFilter<"ProductChannelMapping"> | Date | string
  }

  export type StockSyncJobUpsertWithWhereUniqueWithoutProductInput = {
    where: StockSyncJobWhereUniqueInput
    update: XOR<StockSyncJobUpdateWithoutProductInput, StockSyncJobUncheckedUpdateWithoutProductInput>
    create: XOR<StockSyncJobCreateWithoutProductInput, StockSyncJobUncheckedCreateWithoutProductInput>
  }

  export type StockSyncJobUpdateWithWhereUniqueWithoutProductInput = {
    where: StockSyncJobWhereUniqueInput
    data: XOR<StockSyncJobUpdateWithoutProductInput, StockSyncJobUncheckedUpdateWithoutProductInput>
  }

  export type StockSyncJobUpdateManyWithWhereWithoutProductInput = {
    where: StockSyncJobScalarWhereInput
    data: XOR<StockSyncJobUpdateManyMutationInput, StockSyncJobUncheckedUpdateManyWithoutProductInput>
  }

  export type StockSyncJobScalarWhereInput = {
    AND?: StockSyncJobScalarWhereInput | StockSyncJobScalarWhereInput[]
    OR?: StockSyncJobScalarWhereInput[]
    NOT?: StockSyncJobScalarWhereInput | StockSyncJobScalarWhereInput[]
    id?: IntFilter<"StockSyncJob"> | number
    productId?: IntFilter<"StockSyncJob"> | number
    marketplaceAccountId?: IntNullableFilter<"StockSyncJob"> | number | null
    targetStock?: IntFilter<"StockSyncJob"> | number
    status?: StringFilter<"StockSyncJob"> | string
    attempts?: IntFilter<"StockSyncJob"> | number
    lastError?: StringNullableFilter<"StockSyncJob"> | string | null
    createdAt?: DateTimeFilter<"StockSyncJob"> | Date | string
    processedAt?: DateTimeNullableFilter<"StockSyncJob"> | Date | string | null
  }

  export type ProductCreateWithoutBatchesInput = {
    sku: string
    name: string
    unit?: string
    purchasePrice?: Decimal | DecimalJsLike | number | string
    sellingPrice?: Decimal | DecimalJsLike | number | string
    minStock?: number
    currentStock?: number
    imageUrl?: string | null
    isPerishable?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProductsInput
    stockMovements?: StockMovementCreateNestedManyWithoutProductInput
    opnameItems?: OpnameItemCreateNestedManyWithoutProductInput
    channelMappings?: ProductChannelMappingCreateNestedManyWithoutProductInput
    syncJobs?: StockSyncJobCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBatchesInput = {
    id?: number
    sku: string
    name: string
    categoryId?: number | null
    unit?: string
    purchasePrice?: Decimal | DecimalJsLike | number | string
    sellingPrice?: Decimal | DecimalJsLike | number | string
    minStock?: number
    currentStock?: number
    imageUrl?: string | null
    isPerishable?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutProductInput
    opnameItems?: OpnameItemUncheckedCreateNestedManyWithoutProductInput
    channelMappings?: ProductChannelMappingUncheckedCreateNestedManyWithoutProductInput
    syncJobs?: StockSyncJobUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBatchesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBatchesInput, ProductUncheckedCreateWithoutBatchesInput>
  }

  export type ProductUpsertWithoutBatchesInput = {
    update: XOR<ProductUpdateWithoutBatchesInput, ProductUncheckedUpdateWithoutBatchesInput>
    create: XOR<ProductCreateWithoutBatchesInput, ProductUncheckedCreateWithoutBatchesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutBatchesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutBatchesInput, ProductUncheckedUpdateWithoutBatchesInput>
  }

  export type ProductUpdateWithoutBatchesInput = {
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sellingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minStock?: IntFieldUpdateOperationsInput | number
    currentStock?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPerishable?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProductsNestedInput
    stockMovements?: StockMovementUpdateManyWithoutProductNestedInput
    opnameItems?: OpnameItemUpdateManyWithoutProductNestedInput
    channelMappings?: ProductChannelMappingUpdateManyWithoutProductNestedInput
    syncJobs?: StockSyncJobUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: StringFieldUpdateOperationsInput | string
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sellingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minStock?: IntFieldUpdateOperationsInput | number
    currentStock?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPerishable?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockMovements?: StockMovementUncheckedUpdateManyWithoutProductNestedInput
    opnameItems?: OpnameItemUncheckedUpdateManyWithoutProductNestedInput
    channelMappings?: ProductChannelMappingUncheckedUpdateManyWithoutProductNestedInput
    syncJobs?: StockSyncJobUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutStockMovementsInput = {
    sku: string
    name: string
    unit?: string
    purchasePrice?: Decimal | DecimalJsLike | number | string
    sellingPrice?: Decimal | DecimalJsLike | number | string
    minStock?: number
    currentStock?: number
    imageUrl?: string | null
    isPerishable?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProductsInput
    batches?: ProductBatchCreateNestedManyWithoutProductInput
    opnameItems?: OpnameItemCreateNestedManyWithoutProductInput
    channelMappings?: ProductChannelMappingCreateNestedManyWithoutProductInput
    syncJobs?: StockSyncJobCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutStockMovementsInput = {
    id?: number
    sku: string
    name: string
    categoryId?: number | null
    unit?: string
    purchasePrice?: Decimal | DecimalJsLike | number | string
    sellingPrice?: Decimal | DecimalJsLike | number | string
    minStock?: number
    currentStock?: number
    imageUrl?: string | null
    isPerishable?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: ProductBatchUncheckedCreateNestedManyWithoutProductInput
    opnameItems?: OpnameItemUncheckedCreateNestedManyWithoutProductInput
    channelMappings?: ProductChannelMappingUncheckedCreateNestedManyWithoutProductInput
    syncJobs?: StockSyncJobUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutStockMovementsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutStockMovementsInput, ProductUncheckedCreateWithoutStockMovementsInput>
  }

  export type SupplierCreateWithoutStockMovementsInput = {
    name: string
    contactName?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type SupplierUncheckedCreateWithoutStockMovementsInput = {
    id?: number
    name: string
    contactName?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type SupplierCreateOrConnectWithoutStockMovementsInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutStockMovementsInput, SupplierUncheckedCreateWithoutStockMovementsInput>
  }

  export type UserCreateWithoutStockMovementsInput = {
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    opnameSessions?: OpnameSessionCreateNestedManyWithoutCreatorInput
    approvedOpname?: OpnameSessionCreateNestedManyWithoutApproverInput
    countedItems?: OpnameItemCreateNestedManyWithoutCounterInput
  }

  export type UserUncheckedCreateWithoutStockMovementsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    opnameSessions?: OpnameSessionUncheckedCreateNestedManyWithoutCreatorInput
    approvedOpname?: OpnameSessionUncheckedCreateNestedManyWithoutApproverInput
    countedItems?: OpnameItemUncheckedCreateNestedManyWithoutCounterInput
  }

  export type UserCreateOrConnectWithoutStockMovementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStockMovementsInput, UserUncheckedCreateWithoutStockMovementsInput>
  }

  export type ProductUpsertWithoutStockMovementsInput = {
    update: XOR<ProductUpdateWithoutStockMovementsInput, ProductUncheckedUpdateWithoutStockMovementsInput>
    create: XOR<ProductCreateWithoutStockMovementsInput, ProductUncheckedCreateWithoutStockMovementsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutStockMovementsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutStockMovementsInput, ProductUncheckedUpdateWithoutStockMovementsInput>
  }

  export type ProductUpdateWithoutStockMovementsInput = {
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sellingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minStock?: IntFieldUpdateOperationsInput | number
    currentStock?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPerishable?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProductsNestedInput
    batches?: ProductBatchUpdateManyWithoutProductNestedInput
    opnameItems?: OpnameItemUpdateManyWithoutProductNestedInput
    channelMappings?: ProductChannelMappingUpdateManyWithoutProductNestedInput
    syncJobs?: StockSyncJobUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutStockMovementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: StringFieldUpdateOperationsInput | string
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sellingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minStock?: IntFieldUpdateOperationsInput | number
    currentStock?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPerishable?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: ProductBatchUncheckedUpdateManyWithoutProductNestedInput
    opnameItems?: OpnameItemUncheckedUpdateManyWithoutProductNestedInput
    channelMappings?: ProductChannelMappingUncheckedUpdateManyWithoutProductNestedInput
    syncJobs?: StockSyncJobUncheckedUpdateManyWithoutProductNestedInput
  }

  export type SupplierUpsertWithoutStockMovementsInput = {
    update: XOR<SupplierUpdateWithoutStockMovementsInput, SupplierUncheckedUpdateWithoutStockMovementsInput>
    create: XOR<SupplierCreateWithoutStockMovementsInput, SupplierUncheckedCreateWithoutStockMovementsInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutStockMovementsInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutStockMovementsInput, SupplierUncheckedUpdateWithoutStockMovementsInput>
  }

  export type SupplierUpdateWithoutStockMovementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateWithoutStockMovementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutStockMovementsInput = {
    update: XOR<UserUpdateWithoutStockMovementsInput, UserUncheckedUpdateWithoutStockMovementsInput>
    create: XOR<UserCreateWithoutStockMovementsInput, UserUncheckedCreateWithoutStockMovementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStockMovementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStockMovementsInput, UserUncheckedUpdateWithoutStockMovementsInput>
  }

  export type UserUpdateWithoutStockMovementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opnameSessions?: OpnameSessionUpdateManyWithoutCreatorNestedInput
    approvedOpname?: OpnameSessionUpdateManyWithoutApproverNestedInput
    countedItems?: OpnameItemUpdateManyWithoutCounterNestedInput
  }

  export type UserUncheckedUpdateWithoutStockMovementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opnameSessions?: OpnameSessionUncheckedUpdateManyWithoutCreatorNestedInput
    approvedOpname?: OpnameSessionUncheckedUpdateManyWithoutApproverNestedInput
    countedItems?: OpnameItemUncheckedUpdateManyWithoutCounterNestedInput
  }

  export type UserCreateWithoutOpnameSessionsInput = {
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stockMovements?: StockMovementCreateNestedManyWithoutCreatorInput
    approvedOpname?: OpnameSessionCreateNestedManyWithoutApproverInput
    countedItems?: OpnameItemCreateNestedManyWithoutCounterInput
  }

  export type UserUncheckedCreateWithoutOpnameSessionsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutCreatorInput
    approvedOpname?: OpnameSessionUncheckedCreateNestedManyWithoutApproverInput
    countedItems?: OpnameItemUncheckedCreateNestedManyWithoutCounterInput
  }

  export type UserCreateOrConnectWithoutOpnameSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOpnameSessionsInput, UserUncheckedCreateWithoutOpnameSessionsInput>
  }

  export type UserCreateWithoutApprovedOpnameInput = {
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stockMovements?: StockMovementCreateNestedManyWithoutCreatorInput
    opnameSessions?: OpnameSessionCreateNestedManyWithoutCreatorInput
    countedItems?: OpnameItemCreateNestedManyWithoutCounterInput
  }

  export type UserUncheckedCreateWithoutApprovedOpnameInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutCreatorInput
    opnameSessions?: OpnameSessionUncheckedCreateNestedManyWithoutCreatorInput
    countedItems?: OpnameItemUncheckedCreateNestedManyWithoutCounterInput
  }

  export type UserCreateOrConnectWithoutApprovedOpnameInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApprovedOpnameInput, UserUncheckedCreateWithoutApprovedOpnameInput>
  }

  export type OpnameItemCreateWithoutSessionInput = {
    systemStock: number
    physicalStock?: number | null
    difference?: number | null
    note?: string | null
    countedAt?: Date | string | null
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutOpnameItemsInput
    counter?: UserCreateNestedOneWithoutCountedItemsInput
  }

  export type OpnameItemUncheckedCreateWithoutSessionInput = {
    id?: number
    productId: number
    systemStock: number
    physicalStock?: number | null
    difference?: number | null
    note?: string | null
    countedBy?: number | null
    countedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OpnameItemCreateOrConnectWithoutSessionInput = {
    where: OpnameItemWhereUniqueInput
    create: XOR<OpnameItemCreateWithoutSessionInput, OpnameItemUncheckedCreateWithoutSessionInput>
  }

  export type OpnameItemCreateManySessionInputEnvelope = {
    data: OpnameItemCreateManySessionInput | OpnameItemCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOpnameSessionsInput = {
    update: XOR<UserUpdateWithoutOpnameSessionsInput, UserUncheckedUpdateWithoutOpnameSessionsInput>
    create: XOR<UserCreateWithoutOpnameSessionsInput, UserUncheckedCreateWithoutOpnameSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOpnameSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOpnameSessionsInput, UserUncheckedUpdateWithoutOpnameSessionsInput>
  }

  export type UserUpdateWithoutOpnameSessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockMovements?: StockMovementUpdateManyWithoutCreatorNestedInput
    approvedOpname?: OpnameSessionUpdateManyWithoutApproverNestedInput
    countedItems?: OpnameItemUpdateManyWithoutCounterNestedInput
  }

  export type UserUncheckedUpdateWithoutOpnameSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockMovements?: StockMovementUncheckedUpdateManyWithoutCreatorNestedInput
    approvedOpname?: OpnameSessionUncheckedUpdateManyWithoutApproverNestedInput
    countedItems?: OpnameItemUncheckedUpdateManyWithoutCounterNestedInput
  }

  export type UserUpsertWithoutApprovedOpnameInput = {
    update: XOR<UserUpdateWithoutApprovedOpnameInput, UserUncheckedUpdateWithoutApprovedOpnameInput>
    create: XOR<UserCreateWithoutApprovedOpnameInput, UserUncheckedCreateWithoutApprovedOpnameInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApprovedOpnameInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApprovedOpnameInput, UserUncheckedUpdateWithoutApprovedOpnameInput>
  }

  export type UserUpdateWithoutApprovedOpnameInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockMovements?: StockMovementUpdateManyWithoutCreatorNestedInput
    opnameSessions?: OpnameSessionUpdateManyWithoutCreatorNestedInput
    countedItems?: OpnameItemUpdateManyWithoutCounterNestedInput
  }

  export type UserUncheckedUpdateWithoutApprovedOpnameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockMovements?: StockMovementUncheckedUpdateManyWithoutCreatorNestedInput
    opnameSessions?: OpnameSessionUncheckedUpdateManyWithoutCreatorNestedInput
    countedItems?: OpnameItemUncheckedUpdateManyWithoutCounterNestedInput
  }

  export type OpnameItemUpsertWithWhereUniqueWithoutSessionInput = {
    where: OpnameItemWhereUniqueInput
    update: XOR<OpnameItemUpdateWithoutSessionInput, OpnameItemUncheckedUpdateWithoutSessionInput>
    create: XOR<OpnameItemCreateWithoutSessionInput, OpnameItemUncheckedCreateWithoutSessionInput>
  }

  export type OpnameItemUpdateWithWhereUniqueWithoutSessionInput = {
    where: OpnameItemWhereUniqueInput
    data: XOR<OpnameItemUpdateWithoutSessionInput, OpnameItemUncheckedUpdateWithoutSessionInput>
  }

  export type OpnameItemUpdateManyWithWhereWithoutSessionInput = {
    where: OpnameItemScalarWhereInput
    data: XOR<OpnameItemUpdateManyMutationInput, OpnameItemUncheckedUpdateManyWithoutSessionInput>
  }

  export type OpnameSessionCreateWithoutItemsInput = {
    code: string
    title?: string | null
    status?: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    approvedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutOpnameSessionsInput
    approver?: UserCreateNestedOneWithoutApprovedOpnameInput
  }

  export type OpnameSessionUncheckedCreateWithoutItemsInput = {
    id?: number
    code: string
    title?: string | null
    status?: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdBy: number
    approvedBy?: number | null
    approvedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type OpnameSessionCreateOrConnectWithoutItemsInput = {
    where: OpnameSessionWhereUniqueInput
    create: XOR<OpnameSessionCreateWithoutItemsInput, OpnameSessionUncheckedCreateWithoutItemsInput>
  }

  export type ProductCreateWithoutOpnameItemsInput = {
    sku: string
    name: string
    unit?: string
    purchasePrice?: Decimal | DecimalJsLike | number | string
    sellingPrice?: Decimal | DecimalJsLike | number | string
    minStock?: number
    currentStock?: number
    imageUrl?: string | null
    isPerishable?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProductsInput
    batches?: ProductBatchCreateNestedManyWithoutProductInput
    stockMovements?: StockMovementCreateNestedManyWithoutProductInput
    channelMappings?: ProductChannelMappingCreateNestedManyWithoutProductInput
    syncJobs?: StockSyncJobCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOpnameItemsInput = {
    id?: number
    sku: string
    name: string
    categoryId?: number | null
    unit?: string
    purchasePrice?: Decimal | DecimalJsLike | number | string
    sellingPrice?: Decimal | DecimalJsLike | number | string
    minStock?: number
    currentStock?: number
    imageUrl?: string | null
    isPerishable?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: ProductBatchUncheckedCreateNestedManyWithoutProductInput
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutProductInput
    channelMappings?: ProductChannelMappingUncheckedCreateNestedManyWithoutProductInput
    syncJobs?: StockSyncJobUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOpnameItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOpnameItemsInput, ProductUncheckedCreateWithoutOpnameItemsInput>
  }

  export type UserCreateWithoutCountedItemsInput = {
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stockMovements?: StockMovementCreateNestedManyWithoutCreatorInput
    opnameSessions?: OpnameSessionCreateNestedManyWithoutCreatorInput
    approvedOpname?: OpnameSessionCreateNestedManyWithoutApproverInput
  }

  export type UserUncheckedCreateWithoutCountedItemsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutCreatorInput
    opnameSessions?: OpnameSessionUncheckedCreateNestedManyWithoutCreatorInput
    approvedOpname?: OpnameSessionUncheckedCreateNestedManyWithoutApproverInput
  }

  export type UserCreateOrConnectWithoutCountedItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCountedItemsInput, UserUncheckedCreateWithoutCountedItemsInput>
  }

  export type OpnameSessionUpsertWithoutItemsInput = {
    update: XOR<OpnameSessionUpdateWithoutItemsInput, OpnameSessionUncheckedUpdateWithoutItemsInput>
    create: XOR<OpnameSessionCreateWithoutItemsInput, OpnameSessionUncheckedCreateWithoutItemsInput>
    where?: OpnameSessionWhereInput
  }

  export type OpnameSessionUpdateToOneWithWhereWithoutItemsInput = {
    where?: OpnameSessionWhereInput
    data: XOR<OpnameSessionUpdateWithoutItemsInput, OpnameSessionUncheckedUpdateWithoutItemsInput>
  }

  export type OpnameSessionUpdateWithoutItemsInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutOpnameSessionsNestedInput
    approver?: UserUpdateOneWithoutApprovedOpnameNestedInput
  }

  export type OpnameSessionUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    approvedBy?: NullableIntFieldUpdateOperationsInput | number | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutOpnameItemsInput = {
    update: XOR<ProductUpdateWithoutOpnameItemsInput, ProductUncheckedUpdateWithoutOpnameItemsInput>
    create: XOR<ProductCreateWithoutOpnameItemsInput, ProductUncheckedCreateWithoutOpnameItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOpnameItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOpnameItemsInput, ProductUncheckedUpdateWithoutOpnameItemsInput>
  }

  export type ProductUpdateWithoutOpnameItemsInput = {
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sellingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minStock?: IntFieldUpdateOperationsInput | number
    currentStock?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPerishable?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProductsNestedInput
    batches?: ProductBatchUpdateManyWithoutProductNestedInput
    stockMovements?: StockMovementUpdateManyWithoutProductNestedInput
    channelMappings?: ProductChannelMappingUpdateManyWithoutProductNestedInput
    syncJobs?: StockSyncJobUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOpnameItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: StringFieldUpdateOperationsInput | string
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sellingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minStock?: IntFieldUpdateOperationsInput | number
    currentStock?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPerishable?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: ProductBatchUncheckedUpdateManyWithoutProductNestedInput
    stockMovements?: StockMovementUncheckedUpdateManyWithoutProductNestedInput
    channelMappings?: ProductChannelMappingUncheckedUpdateManyWithoutProductNestedInput
    syncJobs?: StockSyncJobUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserUpsertWithoutCountedItemsInput = {
    update: XOR<UserUpdateWithoutCountedItemsInput, UserUncheckedUpdateWithoutCountedItemsInput>
    create: XOR<UserCreateWithoutCountedItemsInput, UserUncheckedCreateWithoutCountedItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCountedItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCountedItemsInput, UserUncheckedUpdateWithoutCountedItemsInput>
  }

  export type UserUpdateWithoutCountedItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockMovements?: StockMovementUpdateManyWithoutCreatorNestedInput
    opnameSessions?: OpnameSessionUpdateManyWithoutCreatorNestedInput
    approvedOpname?: OpnameSessionUpdateManyWithoutApproverNestedInput
  }

  export type UserUncheckedUpdateWithoutCountedItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockMovements?: StockMovementUncheckedUpdateManyWithoutCreatorNestedInput
    opnameSessions?: OpnameSessionUncheckedUpdateManyWithoutCreatorNestedInput
    approvedOpname?: OpnameSessionUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type ProductChannelMappingCreateWithoutMarketplaceAccountInput = {
    externalProductId: string
    externalVariantId?: string | null
    externalSku?: string | null
    safetyStock?: number
    lastSyncedStock?: number | null
    lastSyncedAt?: Date | string | null
    syncStatus?: string
    syncError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutChannelMappingsInput
  }

  export type ProductChannelMappingUncheckedCreateWithoutMarketplaceAccountInput = {
    id?: number
    productId: number
    externalProductId: string
    externalVariantId?: string | null
    externalSku?: string | null
    safetyStock?: number
    lastSyncedStock?: number | null
    lastSyncedAt?: Date | string | null
    syncStatus?: string
    syncError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductChannelMappingCreateOrConnectWithoutMarketplaceAccountInput = {
    where: ProductChannelMappingWhereUniqueInput
    create: XOR<ProductChannelMappingCreateWithoutMarketplaceAccountInput, ProductChannelMappingUncheckedCreateWithoutMarketplaceAccountInput>
  }

  export type ProductChannelMappingCreateManyMarketplaceAccountInputEnvelope = {
    data: ProductChannelMappingCreateManyMarketplaceAccountInput | ProductChannelMappingCreateManyMarketplaceAccountInput[]
    skipDuplicates?: boolean
  }

  export type StockSyncJobCreateWithoutMarketplaceAccountInput = {
    targetStock: number
    status?: string
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
    product: ProductCreateNestedOneWithoutSyncJobsInput
  }

  export type StockSyncJobUncheckedCreateWithoutMarketplaceAccountInput = {
    id?: number
    productId: number
    targetStock: number
    status?: string
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
  }

  export type StockSyncJobCreateOrConnectWithoutMarketplaceAccountInput = {
    where: StockSyncJobWhereUniqueInput
    create: XOR<StockSyncJobCreateWithoutMarketplaceAccountInput, StockSyncJobUncheckedCreateWithoutMarketplaceAccountInput>
  }

  export type StockSyncJobCreateManyMarketplaceAccountInputEnvelope = {
    data: StockSyncJobCreateManyMarketplaceAccountInput | StockSyncJobCreateManyMarketplaceAccountInput[]
    skipDuplicates?: boolean
  }

  export type ProductChannelMappingUpsertWithWhereUniqueWithoutMarketplaceAccountInput = {
    where: ProductChannelMappingWhereUniqueInput
    update: XOR<ProductChannelMappingUpdateWithoutMarketplaceAccountInput, ProductChannelMappingUncheckedUpdateWithoutMarketplaceAccountInput>
    create: XOR<ProductChannelMappingCreateWithoutMarketplaceAccountInput, ProductChannelMappingUncheckedCreateWithoutMarketplaceAccountInput>
  }

  export type ProductChannelMappingUpdateWithWhereUniqueWithoutMarketplaceAccountInput = {
    where: ProductChannelMappingWhereUniqueInput
    data: XOR<ProductChannelMappingUpdateWithoutMarketplaceAccountInput, ProductChannelMappingUncheckedUpdateWithoutMarketplaceAccountInput>
  }

  export type ProductChannelMappingUpdateManyWithWhereWithoutMarketplaceAccountInput = {
    where: ProductChannelMappingScalarWhereInput
    data: XOR<ProductChannelMappingUpdateManyMutationInput, ProductChannelMappingUncheckedUpdateManyWithoutMarketplaceAccountInput>
  }

  export type StockSyncJobUpsertWithWhereUniqueWithoutMarketplaceAccountInput = {
    where: StockSyncJobWhereUniqueInput
    update: XOR<StockSyncJobUpdateWithoutMarketplaceAccountInput, StockSyncJobUncheckedUpdateWithoutMarketplaceAccountInput>
    create: XOR<StockSyncJobCreateWithoutMarketplaceAccountInput, StockSyncJobUncheckedCreateWithoutMarketplaceAccountInput>
  }

  export type StockSyncJobUpdateWithWhereUniqueWithoutMarketplaceAccountInput = {
    where: StockSyncJobWhereUniqueInput
    data: XOR<StockSyncJobUpdateWithoutMarketplaceAccountInput, StockSyncJobUncheckedUpdateWithoutMarketplaceAccountInput>
  }

  export type StockSyncJobUpdateManyWithWhereWithoutMarketplaceAccountInput = {
    where: StockSyncJobScalarWhereInput
    data: XOR<StockSyncJobUpdateManyMutationInput, StockSyncJobUncheckedUpdateManyWithoutMarketplaceAccountInput>
  }

  export type ProductCreateWithoutChannelMappingsInput = {
    sku: string
    name: string
    unit?: string
    purchasePrice?: Decimal | DecimalJsLike | number | string
    sellingPrice?: Decimal | DecimalJsLike | number | string
    minStock?: number
    currentStock?: number
    imageUrl?: string | null
    isPerishable?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProductsInput
    batches?: ProductBatchCreateNestedManyWithoutProductInput
    stockMovements?: StockMovementCreateNestedManyWithoutProductInput
    opnameItems?: OpnameItemCreateNestedManyWithoutProductInput
    syncJobs?: StockSyncJobCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutChannelMappingsInput = {
    id?: number
    sku: string
    name: string
    categoryId?: number | null
    unit?: string
    purchasePrice?: Decimal | DecimalJsLike | number | string
    sellingPrice?: Decimal | DecimalJsLike | number | string
    minStock?: number
    currentStock?: number
    imageUrl?: string | null
    isPerishable?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: ProductBatchUncheckedCreateNestedManyWithoutProductInput
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutProductInput
    opnameItems?: OpnameItemUncheckedCreateNestedManyWithoutProductInput
    syncJobs?: StockSyncJobUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutChannelMappingsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutChannelMappingsInput, ProductUncheckedCreateWithoutChannelMappingsInput>
  }

  export type MarketplaceAccountCreateWithoutProductMappingsInput = {
    marketplace: string
    shopId: string
    shopName?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    syncJobs?: StockSyncJobCreateNestedManyWithoutMarketplaceAccountInput
  }

  export type MarketplaceAccountUncheckedCreateWithoutProductMappingsInput = {
    id?: number
    marketplace: string
    shopId: string
    shopName?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    syncJobs?: StockSyncJobUncheckedCreateNestedManyWithoutMarketplaceAccountInput
  }

  export type MarketplaceAccountCreateOrConnectWithoutProductMappingsInput = {
    where: MarketplaceAccountWhereUniqueInput
    create: XOR<MarketplaceAccountCreateWithoutProductMappingsInput, MarketplaceAccountUncheckedCreateWithoutProductMappingsInput>
  }

  export type ProductUpsertWithoutChannelMappingsInput = {
    update: XOR<ProductUpdateWithoutChannelMappingsInput, ProductUncheckedUpdateWithoutChannelMappingsInput>
    create: XOR<ProductCreateWithoutChannelMappingsInput, ProductUncheckedCreateWithoutChannelMappingsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutChannelMappingsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutChannelMappingsInput, ProductUncheckedUpdateWithoutChannelMappingsInput>
  }

  export type ProductUpdateWithoutChannelMappingsInput = {
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sellingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minStock?: IntFieldUpdateOperationsInput | number
    currentStock?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPerishable?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProductsNestedInput
    batches?: ProductBatchUpdateManyWithoutProductNestedInput
    stockMovements?: StockMovementUpdateManyWithoutProductNestedInput
    opnameItems?: OpnameItemUpdateManyWithoutProductNestedInput
    syncJobs?: StockSyncJobUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutChannelMappingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: StringFieldUpdateOperationsInput | string
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sellingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minStock?: IntFieldUpdateOperationsInput | number
    currentStock?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPerishable?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: ProductBatchUncheckedUpdateManyWithoutProductNestedInput
    stockMovements?: StockMovementUncheckedUpdateManyWithoutProductNestedInput
    opnameItems?: OpnameItemUncheckedUpdateManyWithoutProductNestedInput
    syncJobs?: StockSyncJobUncheckedUpdateManyWithoutProductNestedInput
  }

  export type MarketplaceAccountUpsertWithoutProductMappingsInput = {
    update: XOR<MarketplaceAccountUpdateWithoutProductMappingsInput, MarketplaceAccountUncheckedUpdateWithoutProductMappingsInput>
    create: XOR<MarketplaceAccountCreateWithoutProductMappingsInput, MarketplaceAccountUncheckedCreateWithoutProductMappingsInput>
    where?: MarketplaceAccountWhereInput
  }

  export type MarketplaceAccountUpdateToOneWithWhereWithoutProductMappingsInput = {
    where?: MarketplaceAccountWhereInput
    data: XOR<MarketplaceAccountUpdateWithoutProductMappingsInput, MarketplaceAccountUncheckedUpdateWithoutProductMappingsInput>
  }

  export type MarketplaceAccountUpdateWithoutProductMappingsInput = {
    marketplace?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    shopName?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncJobs?: StockSyncJobUpdateManyWithoutMarketplaceAccountNestedInput
  }

  export type MarketplaceAccountUncheckedUpdateWithoutProductMappingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    marketplace?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    shopName?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncJobs?: StockSyncJobUncheckedUpdateManyWithoutMarketplaceAccountNestedInput
  }

  export type ProductCreateWithoutSyncJobsInput = {
    sku: string
    name: string
    unit?: string
    purchasePrice?: Decimal | DecimalJsLike | number | string
    sellingPrice?: Decimal | DecimalJsLike | number | string
    minStock?: number
    currentStock?: number
    imageUrl?: string | null
    isPerishable?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProductsInput
    batches?: ProductBatchCreateNestedManyWithoutProductInput
    stockMovements?: StockMovementCreateNestedManyWithoutProductInput
    opnameItems?: OpnameItemCreateNestedManyWithoutProductInput
    channelMappings?: ProductChannelMappingCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSyncJobsInput = {
    id?: number
    sku: string
    name: string
    categoryId?: number | null
    unit?: string
    purchasePrice?: Decimal | DecimalJsLike | number | string
    sellingPrice?: Decimal | DecimalJsLike | number | string
    minStock?: number
    currentStock?: number
    imageUrl?: string | null
    isPerishable?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: ProductBatchUncheckedCreateNestedManyWithoutProductInput
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutProductInput
    opnameItems?: OpnameItemUncheckedCreateNestedManyWithoutProductInput
    channelMappings?: ProductChannelMappingUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSyncJobsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSyncJobsInput, ProductUncheckedCreateWithoutSyncJobsInput>
  }

  export type MarketplaceAccountCreateWithoutSyncJobsInput = {
    marketplace: string
    shopId: string
    shopName?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productMappings?: ProductChannelMappingCreateNestedManyWithoutMarketplaceAccountInput
  }

  export type MarketplaceAccountUncheckedCreateWithoutSyncJobsInput = {
    id?: number
    marketplace: string
    shopId: string
    shopName?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productMappings?: ProductChannelMappingUncheckedCreateNestedManyWithoutMarketplaceAccountInput
  }

  export type MarketplaceAccountCreateOrConnectWithoutSyncJobsInput = {
    where: MarketplaceAccountWhereUniqueInput
    create: XOR<MarketplaceAccountCreateWithoutSyncJobsInput, MarketplaceAccountUncheckedCreateWithoutSyncJobsInput>
  }

  export type ProductUpsertWithoutSyncJobsInput = {
    update: XOR<ProductUpdateWithoutSyncJobsInput, ProductUncheckedUpdateWithoutSyncJobsInput>
    create: XOR<ProductCreateWithoutSyncJobsInput, ProductUncheckedCreateWithoutSyncJobsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutSyncJobsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutSyncJobsInput, ProductUncheckedUpdateWithoutSyncJobsInput>
  }

  export type ProductUpdateWithoutSyncJobsInput = {
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sellingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minStock?: IntFieldUpdateOperationsInput | number
    currentStock?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPerishable?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProductsNestedInput
    batches?: ProductBatchUpdateManyWithoutProductNestedInput
    stockMovements?: StockMovementUpdateManyWithoutProductNestedInput
    opnameItems?: OpnameItemUpdateManyWithoutProductNestedInput
    channelMappings?: ProductChannelMappingUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSyncJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: StringFieldUpdateOperationsInput | string
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sellingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minStock?: IntFieldUpdateOperationsInput | number
    currentStock?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPerishable?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: ProductBatchUncheckedUpdateManyWithoutProductNestedInput
    stockMovements?: StockMovementUncheckedUpdateManyWithoutProductNestedInput
    opnameItems?: OpnameItemUncheckedUpdateManyWithoutProductNestedInput
    channelMappings?: ProductChannelMappingUncheckedUpdateManyWithoutProductNestedInput
  }

  export type MarketplaceAccountUpsertWithoutSyncJobsInput = {
    update: XOR<MarketplaceAccountUpdateWithoutSyncJobsInput, MarketplaceAccountUncheckedUpdateWithoutSyncJobsInput>
    create: XOR<MarketplaceAccountCreateWithoutSyncJobsInput, MarketplaceAccountUncheckedCreateWithoutSyncJobsInput>
    where?: MarketplaceAccountWhereInput
  }

  export type MarketplaceAccountUpdateToOneWithWhereWithoutSyncJobsInput = {
    where?: MarketplaceAccountWhereInput
    data: XOR<MarketplaceAccountUpdateWithoutSyncJobsInput, MarketplaceAccountUncheckedUpdateWithoutSyncJobsInput>
  }

  export type MarketplaceAccountUpdateWithoutSyncJobsInput = {
    marketplace?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    shopName?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productMappings?: ProductChannelMappingUpdateManyWithoutMarketplaceAccountNestedInput
  }

  export type MarketplaceAccountUncheckedUpdateWithoutSyncJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    marketplace?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    shopName?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productMappings?: ProductChannelMappingUncheckedUpdateManyWithoutMarketplaceAccountNestedInput
  }

  export type StockMovementCreateManyCreatorInput = {
    id?: number
    productId: number
    type: string
    quantity: number
    referenceType?: string | null
    referenceId?: number | null
    supplierId?: number | null
    note?: string | null
    createdAt?: Date | string
  }

  export type OpnameSessionCreateManyCreatorInput = {
    id?: number
    code: string
    title?: string | null
    status?: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    approvedBy?: number | null
    approvedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type OpnameSessionCreateManyApproverInput = {
    id?: number
    code: string
    title?: string | null
    status?: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdBy: number
    approvedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type OpnameItemCreateManyCounterInput = {
    id?: number
    sessionId: number
    productId: number
    systemStock: number
    physicalStock?: number | null
    difference?: number | null
    note?: string | null
    countedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type StockMovementUpdateWithoutCreatorInput = {
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutStockMovementsNestedInput
    supplier?: SupplierUpdateOneWithoutStockMovementsNestedInput
  }

  export type StockMovementUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableIntFieldUpdateOperationsInput | number | null
    supplierId?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableIntFieldUpdateOperationsInput | number | null
    supplierId?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpnameSessionUpdateWithoutCreatorInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approver?: UserUpdateOneWithoutApprovedOpnameNestedInput
    items?: OpnameItemUpdateManyWithoutSessionNestedInput
  }

  export type OpnameSessionUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableIntFieldUpdateOperationsInput | number | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OpnameItemUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type OpnameSessionUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableIntFieldUpdateOperationsInput | number | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpnameSessionUpdateWithoutApproverInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutOpnameSessionsNestedInput
    items?: OpnameItemUpdateManyWithoutSessionNestedInput
  }

  export type OpnameSessionUncheckedUpdateWithoutApproverInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OpnameItemUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type OpnameSessionUncheckedUpdateManyWithoutApproverInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpnameItemUpdateWithoutCounterInput = {
    systemStock?: IntFieldUpdateOperationsInput | number
    physicalStock?: NullableIntFieldUpdateOperationsInput | number | null
    difference?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    countedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: OpnameSessionUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutOpnameItemsNestedInput
  }

  export type OpnameItemUncheckedUpdateWithoutCounterInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    systemStock?: IntFieldUpdateOperationsInput | number
    physicalStock?: NullableIntFieldUpdateOperationsInput | number | null
    difference?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    countedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpnameItemUncheckedUpdateManyWithoutCounterInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    systemStock?: IntFieldUpdateOperationsInput | number
    physicalStock?: NullableIntFieldUpdateOperationsInput | number | null
    difference?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    countedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementCreateManySupplierInput = {
    id?: number
    productId: number
    type: string
    quantity: number
    referenceType?: string | null
    referenceId?: number | null
    note?: string | null
    createdBy: number
    createdAt?: Date | string
  }

  export type StockMovementUpdateWithoutSupplierInput = {
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutStockMovementsNestedInput
    creator?: UserUpdateOneRequiredWithoutStockMovementsNestedInput
  }

  export type StockMovementUncheckedUpdateWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUncheckedUpdateManyWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: number
    sku: string
    name: string
    unit?: string
    purchasePrice?: Decimal | DecimalJsLike | number | string
    sellingPrice?: Decimal | DecimalJsLike | number | string
    minStock?: number
    currentStock?: number
    imageUrl?: string | null
    isPerishable?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sellingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minStock?: IntFieldUpdateOperationsInput | number
    currentStock?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPerishable?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: ProductBatchUpdateManyWithoutProductNestedInput
    stockMovements?: StockMovementUpdateManyWithoutProductNestedInput
    opnameItems?: OpnameItemUpdateManyWithoutProductNestedInput
    channelMappings?: ProductChannelMappingUpdateManyWithoutProductNestedInput
    syncJobs?: StockSyncJobUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sellingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minStock?: IntFieldUpdateOperationsInput | number
    currentStock?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPerishable?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: ProductBatchUncheckedUpdateManyWithoutProductNestedInput
    stockMovements?: StockMovementUncheckedUpdateManyWithoutProductNestedInput
    opnameItems?: OpnameItemUncheckedUpdateManyWithoutProductNestedInput
    channelMappings?: ProductChannelMappingUncheckedUpdateManyWithoutProductNestedInput
    syncJobs?: StockSyncJobUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sellingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minStock?: IntFieldUpdateOperationsInput | number
    currentStock?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPerishable?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductBatchCreateManyProductInput = {
    id?: number
    batchCode?: string | null
    quantity?: number
    expiredDate?: Date | string | null
    receivedDate?: Date | string
    createdAt?: Date | string
  }

  export type StockMovementCreateManyProductInput = {
    id?: number
    type: string
    quantity: number
    referenceType?: string | null
    referenceId?: number | null
    supplierId?: number | null
    note?: string | null
    createdBy: number
    createdAt?: Date | string
  }

  export type OpnameItemCreateManyProductInput = {
    id?: number
    sessionId: number
    systemStock: number
    physicalStock?: number | null
    difference?: number | null
    note?: string | null
    countedBy?: number | null
    countedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ProductChannelMappingCreateManyProductInput = {
    id?: number
    marketplaceAccountId: number
    externalProductId: string
    externalVariantId?: string | null
    externalSku?: string | null
    safetyStock?: number
    lastSyncedStock?: number | null
    lastSyncedAt?: Date | string | null
    syncStatus?: string
    syncError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockSyncJobCreateManyProductInput = {
    id?: number
    marketplaceAccountId?: number | null
    targetStock: number
    status?: string
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
  }

  export type ProductBatchUpdateWithoutProductInput = {
    batchCode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductBatchUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    batchCode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductBatchUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    batchCode?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    expiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUpdateWithoutProductInput = {
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneWithoutStockMovementsNestedInput
    creator?: UserUpdateOneRequiredWithoutStockMovementsNestedInput
  }

  export type StockMovementUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableIntFieldUpdateOperationsInput | number | null
    supplierId?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableIntFieldUpdateOperationsInput | number | null
    supplierId?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpnameItemUpdateWithoutProductInput = {
    systemStock?: IntFieldUpdateOperationsInput | number
    physicalStock?: NullableIntFieldUpdateOperationsInput | number | null
    difference?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    countedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: OpnameSessionUpdateOneRequiredWithoutItemsNestedInput
    counter?: UserUpdateOneWithoutCountedItemsNestedInput
  }

  export type OpnameItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    systemStock?: IntFieldUpdateOperationsInput | number
    physicalStock?: NullableIntFieldUpdateOperationsInput | number | null
    difference?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    countedBy?: NullableIntFieldUpdateOperationsInput | number | null
    countedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpnameItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    systemStock?: IntFieldUpdateOperationsInput | number
    physicalStock?: NullableIntFieldUpdateOperationsInput | number | null
    difference?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    countedBy?: NullableIntFieldUpdateOperationsInput | number | null
    countedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductChannelMappingUpdateWithoutProductInput = {
    externalProductId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: NullableStringFieldUpdateOperationsInput | string | null
    externalSku?: NullableStringFieldUpdateOperationsInput | string | null
    safetyStock?: IntFieldUpdateOperationsInput | number
    lastSyncedStock?: NullableIntFieldUpdateOperationsInput | number | null
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncStatus?: StringFieldUpdateOperationsInput | string
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marketplaceAccount?: MarketplaceAccountUpdateOneRequiredWithoutProductMappingsNestedInput
  }

  export type ProductChannelMappingUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    marketplaceAccountId?: IntFieldUpdateOperationsInput | number
    externalProductId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: NullableStringFieldUpdateOperationsInput | string | null
    externalSku?: NullableStringFieldUpdateOperationsInput | string | null
    safetyStock?: IntFieldUpdateOperationsInput | number
    lastSyncedStock?: NullableIntFieldUpdateOperationsInput | number | null
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncStatus?: StringFieldUpdateOperationsInput | string
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductChannelMappingUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    marketplaceAccountId?: IntFieldUpdateOperationsInput | number
    externalProductId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: NullableStringFieldUpdateOperationsInput | string | null
    externalSku?: NullableStringFieldUpdateOperationsInput | string | null
    safetyStock?: IntFieldUpdateOperationsInput | number
    lastSyncedStock?: NullableIntFieldUpdateOperationsInput | number | null
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncStatus?: StringFieldUpdateOperationsInput | string
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockSyncJobUpdateWithoutProductInput = {
    targetStock?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketplaceAccount?: MarketplaceAccountUpdateOneWithoutSyncJobsNestedInput
  }

  export type StockSyncJobUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    marketplaceAccountId?: NullableIntFieldUpdateOperationsInput | number | null
    targetStock?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StockSyncJobUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    marketplaceAccountId?: NullableIntFieldUpdateOperationsInput | number | null
    targetStock?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OpnameItemCreateManySessionInput = {
    id?: number
    productId: number
    systemStock: number
    physicalStock?: number | null
    difference?: number | null
    note?: string | null
    countedBy?: number | null
    countedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OpnameItemUpdateWithoutSessionInput = {
    systemStock?: IntFieldUpdateOperationsInput | number
    physicalStock?: NullableIntFieldUpdateOperationsInput | number | null
    difference?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    countedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutOpnameItemsNestedInput
    counter?: UserUpdateOneWithoutCountedItemsNestedInput
  }

  export type OpnameItemUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    systemStock?: IntFieldUpdateOperationsInput | number
    physicalStock?: NullableIntFieldUpdateOperationsInput | number | null
    difference?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    countedBy?: NullableIntFieldUpdateOperationsInput | number | null
    countedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpnameItemUncheckedUpdateManyWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    systemStock?: IntFieldUpdateOperationsInput | number
    physicalStock?: NullableIntFieldUpdateOperationsInput | number | null
    difference?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    countedBy?: NullableIntFieldUpdateOperationsInput | number | null
    countedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductChannelMappingCreateManyMarketplaceAccountInput = {
    id?: number
    productId: number
    externalProductId: string
    externalVariantId?: string | null
    externalSku?: string | null
    safetyStock?: number
    lastSyncedStock?: number | null
    lastSyncedAt?: Date | string | null
    syncStatus?: string
    syncError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockSyncJobCreateManyMarketplaceAccountInput = {
    id?: number
    productId: number
    targetStock: number
    status?: string
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
  }

  export type ProductChannelMappingUpdateWithoutMarketplaceAccountInput = {
    externalProductId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: NullableStringFieldUpdateOperationsInput | string | null
    externalSku?: NullableStringFieldUpdateOperationsInput | string | null
    safetyStock?: IntFieldUpdateOperationsInput | number
    lastSyncedStock?: NullableIntFieldUpdateOperationsInput | number | null
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncStatus?: StringFieldUpdateOperationsInput | string
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutChannelMappingsNestedInput
  }

  export type ProductChannelMappingUncheckedUpdateWithoutMarketplaceAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    externalProductId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: NullableStringFieldUpdateOperationsInput | string | null
    externalSku?: NullableStringFieldUpdateOperationsInput | string | null
    safetyStock?: IntFieldUpdateOperationsInput | number
    lastSyncedStock?: NullableIntFieldUpdateOperationsInput | number | null
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncStatus?: StringFieldUpdateOperationsInput | string
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductChannelMappingUncheckedUpdateManyWithoutMarketplaceAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    externalProductId?: StringFieldUpdateOperationsInput | string
    externalVariantId?: NullableStringFieldUpdateOperationsInput | string | null
    externalSku?: NullableStringFieldUpdateOperationsInput | string | null
    safetyStock?: IntFieldUpdateOperationsInput | number
    lastSyncedStock?: NullableIntFieldUpdateOperationsInput | number | null
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncStatus?: StringFieldUpdateOperationsInput | string
    syncError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockSyncJobUpdateWithoutMarketplaceAccountInput = {
    targetStock?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product?: ProductUpdateOneRequiredWithoutSyncJobsNestedInput
  }

  export type StockSyncJobUncheckedUpdateWithoutMarketplaceAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    targetStock?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StockSyncJobUncheckedUpdateManyWithoutMarketplaceAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    targetStock?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}