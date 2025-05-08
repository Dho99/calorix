
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Authenticator
 * 
 */
export type Authenticator = $Result.DefaultSelection<Prisma.$AuthenticatorPayload>
/**
 * Model UserCharacteristics
 * 
 */
export type UserCharacteristics = $Result.DefaultSelection<Prisma.$UserCharacteristicsPayload>
/**
 * Model UserGoal
 * 
 */
export type UserGoal = $Result.DefaultSelection<Prisma.$UserGoalPayload>
/**
 * Model PhysicalActivityLog
 * 
 */
export type PhysicalActivityLog = $Result.DefaultSelection<Prisma.$PhysicalActivityLogPayload>
/**
 * Model ActivityType
 * 
 */
export type ActivityType = $Result.DefaultSelection<Prisma.$ActivityTypePayload>
/**
 * Model FoodLog
 * 
 */
export type FoodLog = $Result.DefaultSelection<Prisma.$FoodLogPayload>
/**
 * Model UserHydration
 * 
 */
export type UserHydration = $Result.DefaultSelection<Prisma.$UserHydrationPayload>
/**
 * Model SleepTracker
 * 
 */
export type SleepTracker = $Result.DefaultSelection<Prisma.$SleepTrackerPayload>
/**
 * Model UserActivites
 * 
 */
export type UserActivites = $Result.DefaultSelection<Prisma.$UserActivitesPayload>
/**
 * Model Chatbot
 * 
 */
export type Chatbot = $Result.DefaultSelection<Prisma.$ChatbotPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SENDER: {
  USER: 'USER',
  BOT: 'BOT'
};

export type SENDER = (typeof SENDER)[keyof typeof SENDER]


export const ACTIVITY_TYPE: {
  SLEEP_TRACKER: 'SLEEP_TRACKER',
  USER_HYDRATION: 'USER_HYDRATION',
  FOOD_LOG: 'FOOD_LOG',
  PHYSICAL_ACTIVITY: 'PHYSICAL_ACTIVITY',
  STEP_TRACKER: 'STEP_TRACKER'
};

export type ACTIVITY_TYPE = (typeof ACTIVITY_TYPE)[keyof typeof ACTIVITY_TYPE]

}

export type SENDER = $Enums.SENDER

export const SENDER: typeof $Enums.SENDER

export type ACTIVITY_TYPE = $Enums.ACTIVITY_TYPE

export const ACTIVITY_TYPE: typeof $Enums.ACTIVITY_TYPE

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authenticator`: Exposes CRUD operations for the **Authenticator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authenticators
    * const authenticators = await prisma.authenticator.findMany()
    * ```
    */
  get authenticator(): Prisma.AuthenticatorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userCharacteristics`: Exposes CRUD operations for the **UserCharacteristics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCharacteristics
    * const userCharacteristics = await prisma.userCharacteristics.findMany()
    * ```
    */
  get userCharacteristics(): Prisma.UserCharacteristicsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userGoal`: Exposes CRUD operations for the **UserGoal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserGoals
    * const userGoals = await prisma.userGoal.findMany()
    * ```
    */
  get userGoal(): Prisma.UserGoalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.physicalActivityLog`: Exposes CRUD operations for the **PhysicalActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhysicalActivityLogs
    * const physicalActivityLogs = await prisma.physicalActivityLog.findMany()
    * ```
    */
  get physicalActivityLog(): Prisma.PhysicalActivityLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityType`: Exposes CRUD operations for the **ActivityType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityTypes
    * const activityTypes = await prisma.activityType.findMany()
    * ```
    */
  get activityType(): Prisma.ActivityTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foodLog`: Exposes CRUD operations for the **FoodLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodLogs
    * const foodLogs = await prisma.foodLog.findMany()
    * ```
    */
  get foodLog(): Prisma.FoodLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userHydration`: Exposes CRUD operations for the **UserHydration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserHydrations
    * const userHydrations = await prisma.userHydration.findMany()
    * ```
    */
  get userHydration(): Prisma.UserHydrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sleepTracker`: Exposes CRUD operations for the **SleepTracker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SleepTrackers
    * const sleepTrackers = await prisma.sleepTracker.findMany()
    * ```
    */
  get sleepTracker(): Prisma.SleepTrackerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userActivites`: Exposes CRUD operations for the **UserActivites** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserActivites
    * const userActivites = await prisma.userActivites.findMany()
    * ```
    */
  get userActivites(): Prisma.UserActivitesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatbot`: Exposes CRUD operations for the **Chatbot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chatbots
    * const chatbots = await prisma.chatbot.findMany()
    * ```
    */
  get chatbot(): Prisma.ChatbotDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Authenticator: 'Authenticator',
    UserCharacteristics: 'UserCharacteristics',
    UserGoal: 'UserGoal',
    PhysicalActivityLog: 'PhysicalActivityLog',
    ActivityType: 'ActivityType',
    FoodLog: 'FoodLog',
    UserHydration: 'UserHydration',
    SleepTracker: 'SleepTracker',
    UserActivites: 'UserActivites',
    Chatbot: 'Chatbot'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "session" | "verificationToken" | "authenticator" | "userCharacteristics" | "userGoal" | "physicalActivityLog" | "activityType" | "foodLog" | "userHydration" | "sleepTracker" | "userActivites" | "chatbot"
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
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Authenticator: {
        payload: Prisma.$AuthenticatorPayload<ExtArgs>
        fields: Prisma.AuthenticatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthenticatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthenticatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          findFirst: {
            args: Prisma.AuthenticatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthenticatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          findMany: {
            args: Prisma.AuthenticatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>[]
          }
          create: {
            args: Prisma.AuthenticatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          createMany: {
            args: Prisma.AuthenticatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AuthenticatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          update: {
            args: Prisma.AuthenticatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          deleteMany: {
            args: Prisma.AuthenticatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthenticatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuthenticatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          aggregate: {
            args: Prisma.AuthenticatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthenticator>
          }
          groupBy: {
            args: Prisma.AuthenticatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthenticatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthenticatorCountArgs<ExtArgs>
            result: $Utils.Optional<AuthenticatorCountAggregateOutputType> | number
          }
        }
      }
      UserCharacteristics: {
        payload: Prisma.$UserCharacteristicsPayload<ExtArgs>
        fields: Prisma.UserCharacteristicsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCharacteristicsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharacteristicsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCharacteristicsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharacteristicsPayload>
          }
          findFirst: {
            args: Prisma.UserCharacteristicsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharacteristicsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCharacteristicsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharacteristicsPayload>
          }
          findMany: {
            args: Prisma.UserCharacteristicsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharacteristicsPayload>[]
          }
          create: {
            args: Prisma.UserCharacteristicsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharacteristicsPayload>
          }
          createMany: {
            args: Prisma.UserCharacteristicsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserCharacteristicsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharacteristicsPayload>
          }
          update: {
            args: Prisma.UserCharacteristicsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharacteristicsPayload>
          }
          deleteMany: {
            args: Prisma.UserCharacteristicsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCharacteristicsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserCharacteristicsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharacteristicsPayload>
          }
          aggregate: {
            args: Prisma.UserCharacteristicsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCharacteristics>
          }
          groupBy: {
            args: Prisma.UserCharacteristicsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCharacteristicsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCharacteristicsCountArgs<ExtArgs>
            result: $Utils.Optional<UserCharacteristicsCountAggregateOutputType> | number
          }
        }
      }
      UserGoal: {
        payload: Prisma.$UserGoalPayload<ExtArgs>
        fields: Prisma.UserGoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserGoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserGoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGoalPayload>
          }
          findFirst: {
            args: Prisma.UserGoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserGoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGoalPayload>
          }
          findMany: {
            args: Prisma.UserGoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGoalPayload>[]
          }
          create: {
            args: Prisma.UserGoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGoalPayload>
          }
          createMany: {
            args: Prisma.UserGoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserGoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGoalPayload>
          }
          update: {
            args: Prisma.UserGoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGoalPayload>
          }
          deleteMany: {
            args: Prisma.UserGoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserGoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserGoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGoalPayload>
          }
          aggregate: {
            args: Prisma.UserGoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserGoal>
          }
          groupBy: {
            args: Prisma.UserGoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserGoalCountArgs<ExtArgs>
            result: $Utils.Optional<UserGoalCountAggregateOutputType> | number
          }
        }
      }
      PhysicalActivityLog: {
        payload: Prisma.$PhysicalActivityLogPayload<ExtArgs>
        fields: Prisma.PhysicalActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhysicalActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhysicalActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalActivityLogPayload>
          }
          findFirst: {
            args: Prisma.PhysicalActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhysicalActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalActivityLogPayload>
          }
          findMany: {
            args: Prisma.PhysicalActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalActivityLogPayload>[]
          }
          create: {
            args: Prisma.PhysicalActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalActivityLogPayload>
          }
          createMany: {
            args: Prisma.PhysicalActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PhysicalActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalActivityLogPayload>
          }
          update: {
            args: Prisma.PhysicalActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.PhysicalActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhysicalActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PhysicalActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhysicalActivityLogPayload>
          }
          aggregate: {
            args: Prisma.PhysicalActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhysicalActivityLog>
          }
          groupBy: {
            args: Prisma.PhysicalActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhysicalActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhysicalActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<PhysicalActivityLogCountAggregateOutputType> | number
          }
        }
      }
      ActivityType: {
        payload: Prisma.$ActivityTypePayload<ExtArgs>
        fields: Prisma.ActivityTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload>
          }
          findFirst: {
            args: Prisma.ActivityTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload>
          }
          findMany: {
            args: Prisma.ActivityTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload>[]
          }
          create: {
            args: Prisma.ActivityTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload>
          }
          createMany: {
            args: Prisma.ActivityTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ActivityTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload>
          }
          update: {
            args: Prisma.ActivityTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload>
          }
          deleteMany: {
            args: Prisma.ActivityTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActivityTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityTypePayload>
          }
          aggregate: {
            args: Prisma.ActivityTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityType>
          }
          groupBy: {
            args: Prisma.ActivityTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityTypeCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityTypeCountAggregateOutputType> | number
          }
        }
      }
      FoodLog: {
        payload: Prisma.$FoodLogPayload<ExtArgs>
        fields: Prisma.FoodLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodLogPayload>
          }
          findFirst: {
            args: Prisma.FoodLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodLogPayload>
          }
          findMany: {
            args: Prisma.FoodLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodLogPayload>[]
          }
          create: {
            args: Prisma.FoodLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodLogPayload>
          }
          createMany: {
            args: Prisma.FoodLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FoodLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodLogPayload>
          }
          update: {
            args: Prisma.FoodLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodLogPayload>
          }
          deleteMany: {
            args: Prisma.FoodLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FoodLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodLogPayload>
          }
          aggregate: {
            args: Prisma.FoodLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoodLog>
          }
          groupBy: {
            args: Prisma.FoodLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodLogCountArgs<ExtArgs>
            result: $Utils.Optional<FoodLogCountAggregateOutputType> | number
          }
        }
      }
      UserHydration: {
        payload: Prisma.$UserHydrationPayload<ExtArgs>
        fields: Prisma.UserHydrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserHydrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHydrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserHydrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHydrationPayload>
          }
          findFirst: {
            args: Prisma.UserHydrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHydrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserHydrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHydrationPayload>
          }
          findMany: {
            args: Prisma.UserHydrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHydrationPayload>[]
          }
          create: {
            args: Prisma.UserHydrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHydrationPayload>
          }
          createMany: {
            args: Prisma.UserHydrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserHydrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHydrationPayload>
          }
          update: {
            args: Prisma.UserHydrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHydrationPayload>
          }
          deleteMany: {
            args: Prisma.UserHydrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserHydrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserHydrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHydrationPayload>
          }
          aggregate: {
            args: Prisma.UserHydrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserHydration>
          }
          groupBy: {
            args: Prisma.UserHydrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserHydrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserHydrationCountArgs<ExtArgs>
            result: $Utils.Optional<UserHydrationCountAggregateOutputType> | number
          }
        }
      }
      SleepTracker: {
        payload: Prisma.$SleepTrackerPayload<ExtArgs>
        fields: Prisma.SleepTrackerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SleepTrackerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleepTrackerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SleepTrackerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleepTrackerPayload>
          }
          findFirst: {
            args: Prisma.SleepTrackerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleepTrackerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SleepTrackerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleepTrackerPayload>
          }
          findMany: {
            args: Prisma.SleepTrackerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleepTrackerPayload>[]
          }
          create: {
            args: Prisma.SleepTrackerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleepTrackerPayload>
          }
          createMany: {
            args: Prisma.SleepTrackerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SleepTrackerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleepTrackerPayload>
          }
          update: {
            args: Prisma.SleepTrackerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleepTrackerPayload>
          }
          deleteMany: {
            args: Prisma.SleepTrackerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SleepTrackerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SleepTrackerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SleepTrackerPayload>
          }
          aggregate: {
            args: Prisma.SleepTrackerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSleepTracker>
          }
          groupBy: {
            args: Prisma.SleepTrackerGroupByArgs<ExtArgs>
            result: $Utils.Optional<SleepTrackerGroupByOutputType>[]
          }
          count: {
            args: Prisma.SleepTrackerCountArgs<ExtArgs>
            result: $Utils.Optional<SleepTrackerCountAggregateOutputType> | number
          }
        }
      }
      UserActivites: {
        payload: Prisma.$UserActivitesPayload<ExtArgs>
        fields: Prisma.UserActivitesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserActivitesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivitesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserActivitesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivitesPayload>
          }
          findFirst: {
            args: Prisma.UserActivitesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivitesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserActivitesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivitesPayload>
          }
          findMany: {
            args: Prisma.UserActivitesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivitesPayload>[]
          }
          create: {
            args: Prisma.UserActivitesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivitesPayload>
          }
          createMany: {
            args: Prisma.UserActivitesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserActivitesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivitesPayload>
          }
          update: {
            args: Prisma.UserActivitesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivitesPayload>
          }
          deleteMany: {
            args: Prisma.UserActivitesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserActivitesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserActivitesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivitesPayload>
          }
          aggregate: {
            args: Prisma.UserActivitesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserActivites>
          }
          groupBy: {
            args: Prisma.UserActivitesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserActivitesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserActivitesCountArgs<ExtArgs>
            result: $Utils.Optional<UserActivitesCountAggregateOutputType> | number
          }
        }
      }
      Chatbot: {
        payload: Prisma.$ChatbotPayload<ExtArgs>
        fields: Prisma.ChatbotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatbotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatbotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotPayload>
          }
          findFirst: {
            args: Prisma.ChatbotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatbotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotPayload>
          }
          findMany: {
            args: Prisma.ChatbotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotPayload>[]
          }
          create: {
            args: Prisma.ChatbotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotPayload>
          }
          createMany: {
            args: Prisma.ChatbotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChatbotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotPayload>
          }
          update: {
            args: Prisma.ChatbotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotPayload>
          }
          deleteMany: {
            args: Prisma.ChatbotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatbotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatbotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotPayload>
          }
          aggregate: {
            args: Prisma.ChatbotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatbot>
          }
          groupBy: {
            args: Prisma.ChatbotGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatbotGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatbotCountArgs<ExtArgs>
            result: $Utils.Optional<ChatbotCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    authenticator?: AuthenticatorOmit
    userCharacteristics?: UserCharacteristicsOmit
    userGoal?: UserGoalOmit
    physicalActivityLog?: PhysicalActivityLogOmit
    activityType?: ActivityTypeOmit
    foodLog?: FoodLogOmit
    userHydration?: UserHydrationOmit
    sleepTracker?: SleepTrackerOmit
    userActivites?: UserActivitesOmit
    chatbot?: ChatbotOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    accounts: number
    sessions: number
    Authenticator: number
    Chatbot: number
    UserCharacteristic: number
    PhysicalActivityLog: number
    UserActivites: number
    FoodLog: number
    UserHydration: number
    SleepTracker: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    Authenticator?: boolean | UserCountOutputTypeCountAuthenticatorArgs
    Chatbot?: boolean | UserCountOutputTypeCountChatbotArgs
    UserCharacteristic?: boolean | UserCountOutputTypeCountUserCharacteristicArgs
    PhysicalActivityLog?: boolean | UserCountOutputTypeCountPhysicalActivityLogArgs
    UserActivites?: boolean | UserCountOutputTypeCountUserActivitesArgs
    FoodLog?: boolean | UserCountOutputTypeCountFoodLogArgs
    UserHydration?: boolean | UserCountOutputTypeCountUserHydrationArgs
    SleepTracker?: boolean | UserCountOutputTypeCountSleepTrackerArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuthenticatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthenticatorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatbotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatbotWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserCharacteristicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCharacteristicsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPhysicalActivityLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhysicalActivityLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserActivitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserActivitesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFoodLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserHydrationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserHydrationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSleepTrackerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SleepTrackerWhereInput
  }


  /**
   * Count Type PhysicalActivityLogCountOutputType
   */

  export type PhysicalActivityLogCountOutputType = {
    activityType: number
  }

  export type PhysicalActivityLogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityType?: boolean | PhysicalActivityLogCountOutputTypeCountActivityTypeArgs
  }

  // Custom InputTypes
  /**
   * PhysicalActivityLogCountOutputType without action
   */
  export type PhysicalActivityLogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalActivityLogCountOutputType
     */
    select?: PhysicalActivityLogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PhysicalActivityLogCountOutputType without action
   */
  export type PhysicalActivityLogCountOutputTypeCountActivityTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityTypeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    username: string | null
    lastSeen: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    username: string | null
    lastSeen: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    password: number
    username: number
    lastSeen: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    username?: true
    lastSeen?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    username?: true
    lastSeen?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    username?: true
    lastSeen?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    emailVerified: Date | null
    image: string | null
    password: string | null
    username: string | null
    lastSeen: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    username?: boolean
    lastSeen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    Authenticator?: boolean | User$AuthenticatorArgs<ExtArgs>
    Chatbot?: boolean | User$ChatbotArgs<ExtArgs>
    UserCharacteristic?: boolean | User$UserCharacteristicArgs<ExtArgs>
    PhysicalActivityLog?: boolean | User$PhysicalActivityLogArgs<ExtArgs>
    UserActivites?: boolean | User$UserActivitesArgs<ExtArgs>
    FoodLog?: boolean | User$FoodLogArgs<ExtArgs>
    UserHydration?: boolean | User$UserHydrationArgs<ExtArgs>
    SleepTracker?: boolean | User$SleepTrackerArgs<ExtArgs>
    UserGoal?: boolean | User$UserGoalArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    username?: boolean
    lastSeen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "password" | "username" | "lastSeen" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    Authenticator?: boolean | User$AuthenticatorArgs<ExtArgs>
    Chatbot?: boolean | User$ChatbotArgs<ExtArgs>
    UserCharacteristic?: boolean | User$UserCharacteristicArgs<ExtArgs>
    PhysicalActivityLog?: boolean | User$PhysicalActivityLogArgs<ExtArgs>
    UserActivites?: boolean | User$UserActivitesArgs<ExtArgs>
    FoodLog?: boolean | User$FoodLogArgs<ExtArgs>
    UserHydration?: boolean | User$UserHydrationArgs<ExtArgs>
    SleepTracker?: boolean | User$SleepTrackerArgs<ExtArgs>
    UserGoal?: boolean | User$UserGoalArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      Authenticator: Prisma.$AuthenticatorPayload<ExtArgs>[]
      Chatbot: Prisma.$ChatbotPayload<ExtArgs>[]
      UserCharacteristic: Prisma.$UserCharacteristicsPayload<ExtArgs>[]
      PhysicalActivityLog: Prisma.$PhysicalActivityLogPayload<ExtArgs>[]
      UserActivites: Prisma.$UserActivitesPayload<ExtArgs>[]
      FoodLog: Prisma.$FoodLogPayload<ExtArgs>[]
      UserHydration: Prisma.$UserHydrationPayload<ExtArgs>[]
      SleepTracker: Prisma.$SleepTrackerPayload<ExtArgs>[]
      UserGoal: Prisma.$UserGoalPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      image: string | null
      password: string | null
      username: string | null
      lastSeen: Date | null
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
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Authenticator<T extends User$AuthenticatorArgs<ExtArgs> = {}>(args?: Subset<T, User$AuthenticatorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Chatbot<T extends User$ChatbotArgs<ExtArgs> = {}>(args?: Subset<T, User$ChatbotArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatbotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserCharacteristic<T extends User$UserCharacteristicArgs<ExtArgs> = {}>(args?: Subset<T, User$UserCharacteristicArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCharacteristicsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PhysicalActivityLog<T extends User$PhysicalActivityLogArgs<ExtArgs> = {}>(args?: Subset<T, User$PhysicalActivityLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhysicalActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserActivites<T extends User$UserActivitesArgs<ExtArgs> = {}>(args?: Subset<T, User$UserActivitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserActivitesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    FoodLog<T extends User$FoodLogArgs<ExtArgs> = {}>(args?: Subset<T, User$FoodLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserHydration<T extends User$UserHydrationArgs<ExtArgs> = {}>(args?: Subset<T, User$UserHydrationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHydrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SleepTracker<T extends User$SleepTrackerArgs<ExtArgs> = {}>(args?: Subset<T, User$SleepTrackerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SleepTrackerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserGoal<T extends User$UserGoalArgs<ExtArgs> = {}>(args?: Subset<T, User$UserGoalArgs<ExtArgs>>): Prisma__UserGoalClient<$Result.GetResult<Prisma.$UserGoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly lastSeen: FieldRef<"User", 'DateTime'>
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
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.Authenticator
   */
  export type User$AuthenticatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    where?: AuthenticatorWhereInput
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    cursor?: AuthenticatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthenticatorScalarFieldEnum | AuthenticatorScalarFieldEnum[]
  }

  /**
   * User.Chatbot
   */
  export type User$ChatbotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot
     */
    select?: ChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot
     */
    omit?: ChatbotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotInclude<ExtArgs> | null
    where?: ChatbotWhereInput
    orderBy?: ChatbotOrderByWithRelationInput | ChatbotOrderByWithRelationInput[]
    cursor?: ChatbotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatbotScalarFieldEnum | ChatbotScalarFieldEnum[]
  }

  /**
   * User.UserCharacteristic
   */
  export type User$UserCharacteristicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharacteristics
     */
    select?: UserCharacteristicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharacteristics
     */
    omit?: UserCharacteristicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharacteristicsInclude<ExtArgs> | null
    where?: UserCharacteristicsWhereInput
    orderBy?: UserCharacteristicsOrderByWithRelationInput | UserCharacteristicsOrderByWithRelationInput[]
    cursor?: UserCharacteristicsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCharacteristicsScalarFieldEnum | UserCharacteristicsScalarFieldEnum[]
  }

  /**
   * User.PhysicalActivityLog
   */
  export type User$PhysicalActivityLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalActivityLog
     */
    select?: PhysicalActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalActivityLog
     */
    omit?: PhysicalActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalActivityLogInclude<ExtArgs> | null
    where?: PhysicalActivityLogWhereInput
    orderBy?: PhysicalActivityLogOrderByWithRelationInput | PhysicalActivityLogOrderByWithRelationInput[]
    cursor?: PhysicalActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhysicalActivityLogScalarFieldEnum | PhysicalActivityLogScalarFieldEnum[]
  }

  /**
   * User.UserActivites
   */
  export type User$UserActivitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivites
     */
    select?: UserActivitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivites
     */
    omit?: UserActivitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivitesInclude<ExtArgs> | null
    where?: UserActivitesWhereInput
    orderBy?: UserActivitesOrderByWithRelationInput | UserActivitesOrderByWithRelationInput[]
    cursor?: UserActivitesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserActivitesScalarFieldEnum | UserActivitesScalarFieldEnum[]
  }

  /**
   * User.FoodLog
   */
  export type User$FoodLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodLog
     */
    select?: FoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodLog
     */
    omit?: FoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodLogInclude<ExtArgs> | null
    where?: FoodLogWhereInput
    orderBy?: FoodLogOrderByWithRelationInput | FoodLogOrderByWithRelationInput[]
    cursor?: FoodLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodLogScalarFieldEnum | FoodLogScalarFieldEnum[]
  }

  /**
   * User.UserHydration
   */
  export type User$UserHydrationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHydration
     */
    select?: UserHydrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHydration
     */
    omit?: UserHydrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHydrationInclude<ExtArgs> | null
    where?: UserHydrationWhereInput
    orderBy?: UserHydrationOrderByWithRelationInput | UserHydrationOrderByWithRelationInput[]
    cursor?: UserHydrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserHydrationScalarFieldEnum | UserHydrationScalarFieldEnum[]
  }

  /**
   * User.SleepTracker
   */
  export type User$SleepTrackerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleepTracker
     */
    select?: SleepTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleepTracker
     */
    omit?: SleepTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SleepTrackerInclude<ExtArgs> | null
    where?: SleepTrackerWhereInput
    orderBy?: SleepTrackerOrderByWithRelationInput | SleepTrackerOrderByWithRelationInput[]
    cursor?: SleepTrackerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SleepTrackerScalarFieldEnum | SleepTrackerScalarFieldEnum[]
  }

  /**
   * User.UserGoal
   */
  export type User$UserGoalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGoal
     */
    select?: UserGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGoal
     */
    omit?: UserGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGoalInclude<ExtArgs> | null
    where?: UserGoalWhereInput
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
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>



  export type AccountSelectScalar = {
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const accountWithUserIdOnly = await prisma.account.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    sessionToken: number
    userId: number
    expires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    sessionToken: string
    userId: string
    expires: Date
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sessionToken" | "userId" | "expires" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sessionToken: string
      userId: string
      expires: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.findMany({ select: { sessionToken: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>



  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Authenticator
   */

  export type AggregateAuthenticator = {
    _count: AuthenticatorCountAggregateOutputType | null
    _avg: AuthenticatorAvgAggregateOutputType | null
    _sum: AuthenticatorSumAggregateOutputType | null
    _min: AuthenticatorMinAggregateOutputType | null
    _max: AuthenticatorMaxAggregateOutputType | null
  }

  export type AuthenticatorAvgAggregateOutputType = {
    counter: number | null
  }

  export type AuthenticatorSumAggregateOutputType = {
    counter: number | null
  }

  export type AuthenticatorMinAggregateOutputType = {
    credentialID: string | null
    userId: string | null
    providerAccountId: string | null
    credentialPublicKey: string | null
    counter: number | null
    credentialDeviceType: string | null
    credentialBackedUp: boolean | null
    transports: string | null
  }

  export type AuthenticatorMaxAggregateOutputType = {
    credentialID: string | null
    userId: string | null
    providerAccountId: string | null
    credentialPublicKey: string | null
    counter: number | null
    credentialDeviceType: string | null
    credentialBackedUp: boolean | null
    transports: string | null
  }

  export type AuthenticatorCountAggregateOutputType = {
    credentialID: number
    userId: number
    providerAccountId: number
    credentialPublicKey: number
    counter: number
    credentialDeviceType: number
    credentialBackedUp: number
    transports: number
    _all: number
  }


  export type AuthenticatorAvgAggregateInputType = {
    counter?: true
  }

  export type AuthenticatorSumAggregateInputType = {
    counter?: true
  }

  export type AuthenticatorMinAggregateInputType = {
    credentialID?: true
    userId?: true
    providerAccountId?: true
    credentialPublicKey?: true
    counter?: true
    credentialDeviceType?: true
    credentialBackedUp?: true
    transports?: true
  }

  export type AuthenticatorMaxAggregateInputType = {
    credentialID?: true
    userId?: true
    providerAccountId?: true
    credentialPublicKey?: true
    counter?: true
    credentialDeviceType?: true
    credentialBackedUp?: true
    transports?: true
  }

  export type AuthenticatorCountAggregateInputType = {
    credentialID?: true
    userId?: true
    providerAccountId?: true
    credentialPublicKey?: true
    counter?: true
    credentialDeviceType?: true
    credentialBackedUp?: true
    transports?: true
    _all?: true
  }

  export type AuthenticatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authenticator to aggregate.
     */
    where?: AuthenticatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthenticatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authenticators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authenticators
    **/
    _count?: true | AuthenticatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthenticatorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthenticatorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthenticatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthenticatorMaxAggregateInputType
  }

  export type GetAuthenticatorAggregateType<T extends AuthenticatorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthenticator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthenticator[P]>
      : GetScalarType<T[P], AggregateAuthenticator[P]>
  }




  export type AuthenticatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthenticatorWhereInput
    orderBy?: AuthenticatorOrderByWithAggregationInput | AuthenticatorOrderByWithAggregationInput[]
    by: AuthenticatorScalarFieldEnum[] | AuthenticatorScalarFieldEnum
    having?: AuthenticatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthenticatorCountAggregateInputType | true
    _avg?: AuthenticatorAvgAggregateInputType
    _sum?: AuthenticatorSumAggregateInputType
    _min?: AuthenticatorMinAggregateInputType
    _max?: AuthenticatorMaxAggregateInputType
  }

  export type AuthenticatorGroupByOutputType = {
    credentialID: string
    userId: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports: string | null
    _count: AuthenticatorCountAggregateOutputType | null
    _avg: AuthenticatorAvgAggregateOutputType | null
    _sum: AuthenticatorSumAggregateOutputType | null
    _min: AuthenticatorMinAggregateOutputType | null
    _max: AuthenticatorMaxAggregateOutputType | null
  }

  type GetAuthenticatorGroupByPayload<T extends AuthenticatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthenticatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthenticatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthenticatorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthenticatorGroupByOutputType[P]>
        }
      >
    >


  export type AuthenticatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    credentialID?: boolean
    userId?: boolean
    providerAccountId?: boolean
    credentialPublicKey?: boolean
    counter?: boolean
    credentialDeviceType?: boolean
    credentialBackedUp?: boolean
    transports?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authenticator"]>



  export type AuthenticatorSelectScalar = {
    credentialID?: boolean
    userId?: boolean
    providerAccountId?: boolean
    credentialPublicKey?: boolean
    counter?: boolean
    credentialDeviceType?: boolean
    credentialBackedUp?: boolean
    transports?: boolean
  }

  export type AuthenticatorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"credentialID" | "userId" | "providerAccountId" | "credentialPublicKey" | "counter" | "credentialDeviceType" | "credentialBackedUp" | "transports", ExtArgs["result"]["authenticator"]>
  export type AuthenticatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuthenticatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Authenticator"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      credentialID: string
      userId: string
      providerAccountId: string
      credentialPublicKey: string
      counter: number
      credentialDeviceType: string
      credentialBackedUp: boolean
      transports: string | null
    }, ExtArgs["result"]["authenticator"]>
    composites: {}
  }

  type AuthenticatorGetPayload<S extends boolean | null | undefined | AuthenticatorDefaultArgs> = $Result.GetResult<Prisma.$AuthenticatorPayload, S>

  type AuthenticatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthenticatorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthenticatorCountAggregateInputType | true
    }

  export interface AuthenticatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Authenticator'], meta: { name: 'Authenticator' } }
    /**
     * Find zero or one Authenticator that matches the filter.
     * @param {AuthenticatorFindUniqueArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthenticatorFindUniqueArgs>(args: SelectSubset<T, AuthenticatorFindUniqueArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Authenticator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthenticatorFindUniqueOrThrowArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthenticatorFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthenticatorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authenticator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorFindFirstArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthenticatorFindFirstArgs>(args?: SelectSubset<T, AuthenticatorFindFirstArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authenticator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorFindFirstOrThrowArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthenticatorFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthenticatorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authenticators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authenticators
     * const authenticators = await prisma.authenticator.findMany()
     * 
     * // Get first 10 Authenticators
     * const authenticators = await prisma.authenticator.findMany({ take: 10 })
     * 
     * // Only select the `credentialID`
     * const authenticatorWithCredentialIDOnly = await prisma.authenticator.findMany({ select: { credentialID: true } })
     * 
     */
    findMany<T extends AuthenticatorFindManyArgs>(args?: SelectSubset<T, AuthenticatorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Authenticator.
     * @param {AuthenticatorCreateArgs} args - Arguments to create a Authenticator.
     * @example
     * // Create one Authenticator
     * const Authenticator = await prisma.authenticator.create({
     *   data: {
     *     // ... data to create a Authenticator
     *   }
     * })
     * 
     */
    create<T extends AuthenticatorCreateArgs>(args: SelectSubset<T, AuthenticatorCreateArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authenticators.
     * @param {AuthenticatorCreateManyArgs} args - Arguments to create many Authenticators.
     * @example
     * // Create many Authenticators
     * const authenticator = await prisma.authenticator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthenticatorCreateManyArgs>(args?: SelectSubset<T, AuthenticatorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Authenticator.
     * @param {AuthenticatorDeleteArgs} args - Arguments to delete one Authenticator.
     * @example
     * // Delete one Authenticator
     * const Authenticator = await prisma.authenticator.delete({
     *   where: {
     *     // ... filter to delete one Authenticator
     *   }
     * })
     * 
     */
    delete<T extends AuthenticatorDeleteArgs>(args: SelectSubset<T, AuthenticatorDeleteArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Authenticator.
     * @param {AuthenticatorUpdateArgs} args - Arguments to update one Authenticator.
     * @example
     * // Update one Authenticator
     * const authenticator = await prisma.authenticator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthenticatorUpdateArgs>(args: SelectSubset<T, AuthenticatorUpdateArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authenticators.
     * @param {AuthenticatorDeleteManyArgs} args - Arguments to filter Authenticators to delete.
     * @example
     * // Delete a few Authenticators
     * const { count } = await prisma.authenticator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthenticatorDeleteManyArgs>(args?: SelectSubset<T, AuthenticatorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authenticators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authenticators
     * const authenticator = await prisma.authenticator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthenticatorUpdateManyArgs>(args: SelectSubset<T, AuthenticatorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Authenticator.
     * @param {AuthenticatorUpsertArgs} args - Arguments to update or create a Authenticator.
     * @example
     * // Update or create a Authenticator
     * const authenticator = await prisma.authenticator.upsert({
     *   create: {
     *     // ... data to create a Authenticator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authenticator we want to update
     *   }
     * })
     */
    upsert<T extends AuthenticatorUpsertArgs>(args: SelectSubset<T, AuthenticatorUpsertArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authenticators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorCountArgs} args - Arguments to filter Authenticators to count.
     * @example
     * // Count the number of Authenticators
     * const count = await prisma.authenticator.count({
     *   where: {
     *     // ... the filter for the Authenticators we want to count
     *   }
     * })
    **/
    count<T extends AuthenticatorCountArgs>(
      args?: Subset<T, AuthenticatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthenticatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authenticator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthenticatorAggregateArgs>(args: Subset<T, AuthenticatorAggregateArgs>): Prisma.PrismaPromise<GetAuthenticatorAggregateType<T>>

    /**
     * Group by Authenticator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorGroupByArgs} args - Group by arguments.
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
      T extends AuthenticatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthenticatorGroupByArgs['orderBy'] }
        : { orderBy?: AuthenticatorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthenticatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthenticatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Authenticator model
   */
  readonly fields: AuthenticatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Authenticator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthenticatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Authenticator model
   */
  interface AuthenticatorFieldRefs {
    readonly credentialID: FieldRef<"Authenticator", 'String'>
    readonly userId: FieldRef<"Authenticator", 'String'>
    readonly providerAccountId: FieldRef<"Authenticator", 'String'>
    readonly credentialPublicKey: FieldRef<"Authenticator", 'String'>
    readonly counter: FieldRef<"Authenticator", 'Int'>
    readonly credentialDeviceType: FieldRef<"Authenticator", 'String'>
    readonly credentialBackedUp: FieldRef<"Authenticator", 'Boolean'>
    readonly transports: FieldRef<"Authenticator", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Authenticator findUnique
   */
  export type AuthenticatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticator to fetch.
     */
    where: AuthenticatorWhereUniqueInput
  }

  /**
   * Authenticator findUniqueOrThrow
   */
  export type AuthenticatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticator to fetch.
     */
    where: AuthenticatorWhereUniqueInput
  }

  /**
   * Authenticator findFirst
   */
  export type AuthenticatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticator to fetch.
     */
    where?: AuthenticatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authenticators.
     */
    cursor?: AuthenticatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authenticators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authenticators.
     */
    distinct?: AuthenticatorScalarFieldEnum | AuthenticatorScalarFieldEnum[]
  }

  /**
   * Authenticator findFirstOrThrow
   */
  export type AuthenticatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticator to fetch.
     */
    where?: AuthenticatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authenticators.
     */
    cursor?: AuthenticatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authenticators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authenticators.
     */
    distinct?: AuthenticatorScalarFieldEnum | AuthenticatorScalarFieldEnum[]
  }

  /**
   * Authenticator findMany
   */
  export type AuthenticatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticators to fetch.
     */
    where?: AuthenticatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authenticators.
     */
    cursor?: AuthenticatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authenticators.
     */
    skip?: number
    distinct?: AuthenticatorScalarFieldEnum | AuthenticatorScalarFieldEnum[]
  }

  /**
   * Authenticator create
   */
  export type AuthenticatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * The data needed to create a Authenticator.
     */
    data: XOR<AuthenticatorCreateInput, AuthenticatorUncheckedCreateInput>
  }

  /**
   * Authenticator createMany
   */
  export type AuthenticatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authenticators.
     */
    data: AuthenticatorCreateManyInput | AuthenticatorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Authenticator update
   */
  export type AuthenticatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * The data needed to update a Authenticator.
     */
    data: XOR<AuthenticatorUpdateInput, AuthenticatorUncheckedUpdateInput>
    /**
     * Choose, which Authenticator to update.
     */
    where: AuthenticatorWhereUniqueInput
  }

  /**
   * Authenticator updateMany
   */
  export type AuthenticatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authenticators.
     */
    data: XOR<AuthenticatorUpdateManyMutationInput, AuthenticatorUncheckedUpdateManyInput>
    /**
     * Filter which Authenticators to update
     */
    where?: AuthenticatorWhereInput
    /**
     * Limit how many Authenticators to update.
     */
    limit?: number
  }

  /**
   * Authenticator upsert
   */
  export type AuthenticatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * The filter to search for the Authenticator to update in case it exists.
     */
    where: AuthenticatorWhereUniqueInput
    /**
     * In case the Authenticator found by the `where` argument doesn't exist, create a new Authenticator with this data.
     */
    create: XOR<AuthenticatorCreateInput, AuthenticatorUncheckedCreateInput>
    /**
     * In case the Authenticator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthenticatorUpdateInput, AuthenticatorUncheckedUpdateInput>
  }

  /**
   * Authenticator delete
   */
  export type AuthenticatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter which Authenticator to delete.
     */
    where: AuthenticatorWhereUniqueInput
  }

  /**
   * Authenticator deleteMany
   */
  export type AuthenticatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authenticators to delete
     */
    where?: AuthenticatorWhereInput
    /**
     * Limit how many Authenticators to delete.
     */
    limit?: number
  }

  /**
   * Authenticator without action
   */
  export type AuthenticatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
  }


  /**
   * Model UserCharacteristics
   */

  export type AggregateUserCharacteristics = {
    _count: UserCharacteristicsCountAggregateOutputType | null
    _min: UserCharacteristicsMinAggregateOutputType | null
    _max: UserCharacteristicsMaxAggregateOutputType | null
  }

  export type UserCharacteristicsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    gender: string | null
    age: string | null
    height: string | null
    currentWeight: string | null
    activityFactor: string | null
    mealsPerDay: string | null
    sleepHours: string | null
    workoutsPerWeek: string | null
    manualCalorieAdjustment: string | null
    bmi: string | null
    tdee: string | null
    bmr: string | null
    bodyFatPercentage: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCharacteristicsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    gender: string | null
    age: string | null
    height: string | null
    currentWeight: string | null
    activityFactor: string | null
    mealsPerDay: string | null
    sleepHours: string | null
    workoutsPerWeek: string | null
    manualCalorieAdjustment: string | null
    bmi: string | null
    tdee: string | null
    bmr: string | null
    bodyFatPercentage: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCharacteristicsCountAggregateOutputType = {
    id: number
    userId: number
    gender: number
    age: number
    height: number
    currentWeight: number
    activityFactor: number
    mealsPerDay: number
    sleepHours: number
    workoutsPerWeek: number
    manualCalorieAdjustment: number
    bmi: number
    tdee: number
    bmr: number
    bodyFatPercentage: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserCharacteristicsMinAggregateInputType = {
    id?: true
    userId?: true
    gender?: true
    age?: true
    height?: true
    currentWeight?: true
    activityFactor?: true
    mealsPerDay?: true
    sleepHours?: true
    workoutsPerWeek?: true
    manualCalorieAdjustment?: true
    bmi?: true
    tdee?: true
    bmr?: true
    bodyFatPercentage?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCharacteristicsMaxAggregateInputType = {
    id?: true
    userId?: true
    gender?: true
    age?: true
    height?: true
    currentWeight?: true
    activityFactor?: true
    mealsPerDay?: true
    sleepHours?: true
    workoutsPerWeek?: true
    manualCalorieAdjustment?: true
    bmi?: true
    tdee?: true
    bmr?: true
    bodyFatPercentage?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCharacteristicsCountAggregateInputType = {
    id?: true
    userId?: true
    gender?: true
    age?: true
    height?: true
    currentWeight?: true
    activityFactor?: true
    mealsPerDay?: true
    sleepHours?: true
    workoutsPerWeek?: true
    manualCalorieAdjustment?: true
    bmi?: true
    tdee?: true
    bmr?: true
    bodyFatPercentage?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserCharacteristicsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCharacteristics to aggregate.
     */
    where?: UserCharacteristicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCharacteristics to fetch.
     */
    orderBy?: UserCharacteristicsOrderByWithRelationInput | UserCharacteristicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCharacteristicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCharacteristics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCharacteristics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCharacteristics
    **/
    _count?: true | UserCharacteristicsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCharacteristicsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCharacteristicsMaxAggregateInputType
  }

  export type GetUserCharacteristicsAggregateType<T extends UserCharacteristicsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCharacteristics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCharacteristics[P]>
      : GetScalarType<T[P], AggregateUserCharacteristics[P]>
  }




  export type UserCharacteristicsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCharacteristicsWhereInput
    orderBy?: UserCharacteristicsOrderByWithAggregationInput | UserCharacteristicsOrderByWithAggregationInput[]
    by: UserCharacteristicsScalarFieldEnum[] | UserCharacteristicsScalarFieldEnum
    having?: UserCharacteristicsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCharacteristicsCountAggregateInputType | true
    _min?: UserCharacteristicsMinAggregateInputType
    _max?: UserCharacteristicsMaxAggregateInputType
  }

  export type UserCharacteristicsGroupByOutputType = {
    id: string
    userId: string
    gender: string
    age: string
    height: string
    currentWeight: string
    activityFactor: string
    mealsPerDay: string
    sleepHours: string
    workoutsPerWeek: string
    manualCalorieAdjustment: string | null
    bmi: string | null
    tdee: string | null
    bmr: string | null
    bodyFatPercentage: string | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCharacteristicsCountAggregateOutputType | null
    _min: UserCharacteristicsMinAggregateOutputType | null
    _max: UserCharacteristicsMaxAggregateOutputType | null
  }

  type GetUserCharacteristicsGroupByPayload<T extends UserCharacteristicsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCharacteristicsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCharacteristicsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCharacteristicsGroupByOutputType[P]>
            : GetScalarType<T[P], UserCharacteristicsGroupByOutputType[P]>
        }
      >
    >


  export type UserCharacteristicsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gender?: boolean
    age?: boolean
    height?: boolean
    currentWeight?: boolean
    activityFactor?: boolean
    mealsPerDay?: boolean
    sleepHours?: boolean
    workoutsPerWeek?: boolean
    manualCalorieAdjustment?: boolean
    bmi?: boolean
    tdee?: boolean
    bmr?: boolean
    bodyFatPercentage?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCharacteristics"]>



  export type UserCharacteristicsSelectScalar = {
    id?: boolean
    userId?: boolean
    gender?: boolean
    age?: boolean
    height?: boolean
    currentWeight?: boolean
    activityFactor?: boolean
    mealsPerDay?: boolean
    sleepHours?: boolean
    workoutsPerWeek?: boolean
    manualCalorieAdjustment?: boolean
    bmi?: boolean
    tdee?: boolean
    bmr?: boolean
    bodyFatPercentage?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserCharacteristicsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "gender" | "age" | "height" | "currentWeight" | "activityFactor" | "mealsPerDay" | "sleepHours" | "workoutsPerWeek" | "manualCalorieAdjustment" | "bmi" | "tdee" | "bmr" | "bodyFatPercentage" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["userCharacteristics"]>
  export type UserCharacteristicsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserCharacteristicsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCharacteristics"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      gender: string
      age: string
      height: string
      currentWeight: string
      activityFactor: string
      mealsPerDay: string
      sleepHours: string
      workoutsPerWeek: string
      manualCalorieAdjustment: string | null
      bmi: string | null
      tdee: string | null
      bmr: string | null
      bodyFatPercentage: string | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userCharacteristics"]>
    composites: {}
  }

  type UserCharacteristicsGetPayload<S extends boolean | null | undefined | UserCharacteristicsDefaultArgs> = $Result.GetResult<Prisma.$UserCharacteristicsPayload, S>

  type UserCharacteristicsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCharacteristicsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCharacteristicsCountAggregateInputType | true
    }

  export interface UserCharacteristicsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCharacteristics'], meta: { name: 'UserCharacteristics' } }
    /**
     * Find zero or one UserCharacteristics that matches the filter.
     * @param {UserCharacteristicsFindUniqueArgs} args - Arguments to find a UserCharacteristics
     * @example
     * // Get one UserCharacteristics
     * const userCharacteristics = await prisma.userCharacteristics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCharacteristicsFindUniqueArgs>(args: SelectSubset<T, UserCharacteristicsFindUniqueArgs<ExtArgs>>): Prisma__UserCharacteristicsClient<$Result.GetResult<Prisma.$UserCharacteristicsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCharacteristics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCharacteristicsFindUniqueOrThrowArgs} args - Arguments to find a UserCharacteristics
     * @example
     * // Get one UserCharacteristics
     * const userCharacteristics = await prisma.userCharacteristics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCharacteristicsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCharacteristicsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCharacteristicsClient<$Result.GetResult<Prisma.$UserCharacteristicsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCharacteristics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCharacteristicsFindFirstArgs} args - Arguments to find a UserCharacteristics
     * @example
     * // Get one UserCharacteristics
     * const userCharacteristics = await prisma.userCharacteristics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCharacteristicsFindFirstArgs>(args?: SelectSubset<T, UserCharacteristicsFindFirstArgs<ExtArgs>>): Prisma__UserCharacteristicsClient<$Result.GetResult<Prisma.$UserCharacteristicsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCharacteristics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCharacteristicsFindFirstOrThrowArgs} args - Arguments to find a UserCharacteristics
     * @example
     * // Get one UserCharacteristics
     * const userCharacteristics = await prisma.userCharacteristics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCharacteristicsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCharacteristicsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCharacteristicsClient<$Result.GetResult<Prisma.$UserCharacteristicsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCharacteristics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCharacteristicsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCharacteristics
     * const userCharacteristics = await prisma.userCharacteristics.findMany()
     * 
     * // Get first 10 UserCharacteristics
     * const userCharacteristics = await prisma.userCharacteristics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCharacteristicsWithIdOnly = await prisma.userCharacteristics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCharacteristicsFindManyArgs>(args?: SelectSubset<T, UserCharacteristicsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCharacteristicsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCharacteristics.
     * @param {UserCharacteristicsCreateArgs} args - Arguments to create a UserCharacteristics.
     * @example
     * // Create one UserCharacteristics
     * const UserCharacteristics = await prisma.userCharacteristics.create({
     *   data: {
     *     // ... data to create a UserCharacteristics
     *   }
     * })
     * 
     */
    create<T extends UserCharacteristicsCreateArgs>(args: SelectSubset<T, UserCharacteristicsCreateArgs<ExtArgs>>): Prisma__UserCharacteristicsClient<$Result.GetResult<Prisma.$UserCharacteristicsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCharacteristics.
     * @param {UserCharacteristicsCreateManyArgs} args - Arguments to create many UserCharacteristics.
     * @example
     * // Create many UserCharacteristics
     * const userCharacteristics = await prisma.userCharacteristics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCharacteristicsCreateManyArgs>(args?: SelectSubset<T, UserCharacteristicsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserCharacteristics.
     * @param {UserCharacteristicsDeleteArgs} args - Arguments to delete one UserCharacteristics.
     * @example
     * // Delete one UserCharacteristics
     * const UserCharacteristics = await prisma.userCharacteristics.delete({
     *   where: {
     *     // ... filter to delete one UserCharacteristics
     *   }
     * })
     * 
     */
    delete<T extends UserCharacteristicsDeleteArgs>(args: SelectSubset<T, UserCharacteristicsDeleteArgs<ExtArgs>>): Prisma__UserCharacteristicsClient<$Result.GetResult<Prisma.$UserCharacteristicsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCharacteristics.
     * @param {UserCharacteristicsUpdateArgs} args - Arguments to update one UserCharacteristics.
     * @example
     * // Update one UserCharacteristics
     * const userCharacteristics = await prisma.userCharacteristics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCharacteristicsUpdateArgs>(args: SelectSubset<T, UserCharacteristicsUpdateArgs<ExtArgs>>): Prisma__UserCharacteristicsClient<$Result.GetResult<Prisma.$UserCharacteristicsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCharacteristics.
     * @param {UserCharacteristicsDeleteManyArgs} args - Arguments to filter UserCharacteristics to delete.
     * @example
     * // Delete a few UserCharacteristics
     * const { count } = await prisma.userCharacteristics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCharacteristicsDeleteManyArgs>(args?: SelectSubset<T, UserCharacteristicsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCharacteristics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCharacteristicsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCharacteristics
     * const userCharacteristics = await prisma.userCharacteristics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCharacteristicsUpdateManyArgs>(args: SelectSubset<T, UserCharacteristicsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserCharacteristics.
     * @param {UserCharacteristicsUpsertArgs} args - Arguments to update or create a UserCharacteristics.
     * @example
     * // Update or create a UserCharacteristics
     * const userCharacteristics = await prisma.userCharacteristics.upsert({
     *   create: {
     *     // ... data to create a UserCharacteristics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCharacteristics we want to update
     *   }
     * })
     */
    upsert<T extends UserCharacteristicsUpsertArgs>(args: SelectSubset<T, UserCharacteristicsUpsertArgs<ExtArgs>>): Prisma__UserCharacteristicsClient<$Result.GetResult<Prisma.$UserCharacteristicsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCharacteristics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCharacteristicsCountArgs} args - Arguments to filter UserCharacteristics to count.
     * @example
     * // Count the number of UserCharacteristics
     * const count = await prisma.userCharacteristics.count({
     *   where: {
     *     // ... the filter for the UserCharacteristics we want to count
     *   }
     * })
    **/
    count<T extends UserCharacteristicsCountArgs>(
      args?: Subset<T, UserCharacteristicsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCharacteristicsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCharacteristics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCharacteristicsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserCharacteristicsAggregateArgs>(args: Subset<T, UserCharacteristicsAggregateArgs>): Prisma.PrismaPromise<GetUserCharacteristicsAggregateType<T>>

    /**
     * Group by UserCharacteristics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCharacteristicsGroupByArgs} args - Group by arguments.
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
      T extends UserCharacteristicsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCharacteristicsGroupByArgs['orderBy'] }
        : { orderBy?: UserCharacteristicsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserCharacteristicsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCharacteristicsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCharacteristics model
   */
  readonly fields: UserCharacteristicsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCharacteristics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCharacteristicsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserCharacteristics model
   */
  interface UserCharacteristicsFieldRefs {
    readonly id: FieldRef<"UserCharacteristics", 'String'>
    readonly userId: FieldRef<"UserCharacteristics", 'String'>
    readonly gender: FieldRef<"UserCharacteristics", 'String'>
    readonly age: FieldRef<"UserCharacteristics", 'String'>
    readonly height: FieldRef<"UserCharacteristics", 'String'>
    readonly currentWeight: FieldRef<"UserCharacteristics", 'String'>
    readonly activityFactor: FieldRef<"UserCharacteristics", 'String'>
    readonly mealsPerDay: FieldRef<"UserCharacteristics", 'String'>
    readonly sleepHours: FieldRef<"UserCharacteristics", 'String'>
    readonly workoutsPerWeek: FieldRef<"UserCharacteristics", 'String'>
    readonly manualCalorieAdjustment: FieldRef<"UserCharacteristics", 'String'>
    readonly bmi: FieldRef<"UserCharacteristics", 'String'>
    readonly tdee: FieldRef<"UserCharacteristics", 'String'>
    readonly bmr: FieldRef<"UserCharacteristics", 'String'>
    readonly bodyFatPercentage: FieldRef<"UserCharacteristics", 'String'>
    readonly isDeleted: FieldRef<"UserCharacteristics", 'Boolean'>
    readonly createdAt: FieldRef<"UserCharacteristics", 'DateTime'>
    readonly updatedAt: FieldRef<"UserCharacteristics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCharacteristics findUnique
   */
  export type UserCharacteristicsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharacteristics
     */
    select?: UserCharacteristicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharacteristics
     */
    omit?: UserCharacteristicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharacteristicsInclude<ExtArgs> | null
    /**
     * Filter, which UserCharacteristics to fetch.
     */
    where: UserCharacteristicsWhereUniqueInput
  }

  /**
   * UserCharacteristics findUniqueOrThrow
   */
  export type UserCharacteristicsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharacteristics
     */
    select?: UserCharacteristicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharacteristics
     */
    omit?: UserCharacteristicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharacteristicsInclude<ExtArgs> | null
    /**
     * Filter, which UserCharacteristics to fetch.
     */
    where: UserCharacteristicsWhereUniqueInput
  }

  /**
   * UserCharacteristics findFirst
   */
  export type UserCharacteristicsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharacteristics
     */
    select?: UserCharacteristicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharacteristics
     */
    omit?: UserCharacteristicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharacteristicsInclude<ExtArgs> | null
    /**
     * Filter, which UserCharacteristics to fetch.
     */
    where?: UserCharacteristicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCharacteristics to fetch.
     */
    orderBy?: UserCharacteristicsOrderByWithRelationInput | UserCharacteristicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCharacteristics.
     */
    cursor?: UserCharacteristicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCharacteristics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCharacteristics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCharacteristics.
     */
    distinct?: UserCharacteristicsScalarFieldEnum | UserCharacteristicsScalarFieldEnum[]
  }

  /**
   * UserCharacteristics findFirstOrThrow
   */
  export type UserCharacteristicsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharacteristics
     */
    select?: UserCharacteristicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharacteristics
     */
    omit?: UserCharacteristicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharacteristicsInclude<ExtArgs> | null
    /**
     * Filter, which UserCharacteristics to fetch.
     */
    where?: UserCharacteristicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCharacteristics to fetch.
     */
    orderBy?: UserCharacteristicsOrderByWithRelationInput | UserCharacteristicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCharacteristics.
     */
    cursor?: UserCharacteristicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCharacteristics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCharacteristics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCharacteristics.
     */
    distinct?: UserCharacteristicsScalarFieldEnum | UserCharacteristicsScalarFieldEnum[]
  }

  /**
   * UserCharacteristics findMany
   */
  export type UserCharacteristicsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharacteristics
     */
    select?: UserCharacteristicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharacteristics
     */
    omit?: UserCharacteristicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharacteristicsInclude<ExtArgs> | null
    /**
     * Filter, which UserCharacteristics to fetch.
     */
    where?: UserCharacteristicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCharacteristics to fetch.
     */
    orderBy?: UserCharacteristicsOrderByWithRelationInput | UserCharacteristicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCharacteristics.
     */
    cursor?: UserCharacteristicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCharacteristics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCharacteristics.
     */
    skip?: number
    distinct?: UserCharacteristicsScalarFieldEnum | UserCharacteristicsScalarFieldEnum[]
  }

  /**
   * UserCharacteristics create
   */
  export type UserCharacteristicsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharacteristics
     */
    select?: UserCharacteristicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharacteristics
     */
    omit?: UserCharacteristicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharacteristicsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCharacteristics.
     */
    data: XOR<UserCharacteristicsCreateInput, UserCharacteristicsUncheckedCreateInput>
  }

  /**
   * UserCharacteristics createMany
   */
  export type UserCharacteristicsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCharacteristics.
     */
    data: UserCharacteristicsCreateManyInput | UserCharacteristicsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCharacteristics update
   */
  export type UserCharacteristicsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharacteristics
     */
    select?: UserCharacteristicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharacteristics
     */
    omit?: UserCharacteristicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharacteristicsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCharacteristics.
     */
    data: XOR<UserCharacteristicsUpdateInput, UserCharacteristicsUncheckedUpdateInput>
    /**
     * Choose, which UserCharacteristics to update.
     */
    where: UserCharacteristicsWhereUniqueInput
  }

  /**
   * UserCharacteristics updateMany
   */
  export type UserCharacteristicsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCharacteristics.
     */
    data: XOR<UserCharacteristicsUpdateManyMutationInput, UserCharacteristicsUncheckedUpdateManyInput>
    /**
     * Filter which UserCharacteristics to update
     */
    where?: UserCharacteristicsWhereInput
    /**
     * Limit how many UserCharacteristics to update.
     */
    limit?: number
  }

  /**
   * UserCharacteristics upsert
   */
  export type UserCharacteristicsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharacteristics
     */
    select?: UserCharacteristicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharacteristics
     */
    omit?: UserCharacteristicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharacteristicsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCharacteristics to update in case it exists.
     */
    where: UserCharacteristicsWhereUniqueInput
    /**
     * In case the UserCharacteristics found by the `where` argument doesn't exist, create a new UserCharacteristics with this data.
     */
    create: XOR<UserCharacteristicsCreateInput, UserCharacteristicsUncheckedCreateInput>
    /**
     * In case the UserCharacteristics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCharacteristicsUpdateInput, UserCharacteristicsUncheckedUpdateInput>
  }

  /**
   * UserCharacteristics delete
   */
  export type UserCharacteristicsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharacteristics
     */
    select?: UserCharacteristicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharacteristics
     */
    omit?: UserCharacteristicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharacteristicsInclude<ExtArgs> | null
    /**
     * Filter which UserCharacteristics to delete.
     */
    where: UserCharacteristicsWhereUniqueInput
  }

  /**
   * UserCharacteristics deleteMany
   */
  export type UserCharacteristicsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCharacteristics to delete
     */
    where?: UserCharacteristicsWhereInput
    /**
     * Limit how many UserCharacteristics to delete.
     */
    limit?: number
  }

  /**
   * UserCharacteristics without action
   */
  export type UserCharacteristicsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharacteristics
     */
    select?: UserCharacteristicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharacteristics
     */
    omit?: UserCharacteristicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharacteristicsInclude<ExtArgs> | null
  }


  /**
   * Model UserGoal
   */

  export type AggregateUserGoal = {
    _count: UserGoalCountAggregateOutputType | null
    _min: UserGoalMinAggregateOutputType | null
    _max: UserGoalMaxAggregateOutputType | null
  }

  export type UserGoalMinAggregateOutputType = {
    id: string | null
    userId: string | null
    goal: string | null
    deficitPerDay: string | null
    targetTime: string | null
    hydrationNeeds: string | null
    targetWeight: string | null
    totalDeficit: string | null
    stepNeeds: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserGoalMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    goal: string | null
    deficitPerDay: string | null
    targetTime: string | null
    hydrationNeeds: string | null
    targetWeight: string | null
    totalDeficit: string | null
    stepNeeds: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserGoalCountAggregateOutputType = {
    id: number
    userId: number
    goal: number
    deficitPerDay: number
    targetTime: number
    hydrationNeeds: number
    targetWeight: number
    totalDeficit: number
    stepNeeds: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserGoalMinAggregateInputType = {
    id?: true
    userId?: true
    goal?: true
    deficitPerDay?: true
    targetTime?: true
    hydrationNeeds?: true
    targetWeight?: true
    totalDeficit?: true
    stepNeeds?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserGoalMaxAggregateInputType = {
    id?: true
    userId?: true
    goal?: true
    deficitPerDay?: true
    targetTime?: true
    hydrationNeeds?: true
    targetWeight?: true
    totalDeficit?: true
    stepNeeds?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserGoalCountAggregateInputType = {
    id?: true
    userId?: true
    goal?: true
    deficitPerDay?: true
    targetTime?: true
    hydrationNeeds?: true
    targetWeight?: true
    totalDeficit?: true
    stepNeeds?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserGoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGoal to aggregate.
     */
    where?: UserGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGoals to fetch.
     */
    orderBy?: UserGoalOrderByWithRelationInput | UserGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserGoals
    **/
    _count?: true | UserGoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserGoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserGoalMaxAggregateInputType
  }

  export type GetUserGoalAggregateType<T extends UserGoalAggregateArgs> = {
        [P in keyof T & keyof AggregateUserGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserGoal[P]>
      : GetScalarType<T[P], AggregateUserGoal[P]>
  }




  export type UserGoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGoalWhereInput
    orderBy?: UserGoalOrderByWithAggregationInput | UserGoalOrderByWithAggregationInput[]
    by: UserGoalScalarFieldEnum[] | UserGoalScalarFieldEnum
    having?: UserGoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserGoalCountAggregateInputType | true
    _min?: UserGoalMinAggregateInputType
    _max?: UserGoalMaxAggregateInputType
  }

  export type UserGoalGroupByOutputType = {
    id: string
    userId: string
    goal: string
    deficitPerDay: string
    targetTime: string | null
    hydrationNeeds: string
    targetWeight: string
    totalDeficit: string
    stepNeeds: string
    createdAt: Date
    updatedAt: Date
    _count: UserGoalCountAggregateOutputType | null
    _min: UserGoalMinAggregateOutputType | null
    _max: UserGoalMaxAggregateOutputType | null
  }

  type GetUserGoalGroupByPayload<T extends UserGoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGoalGroupByOutputType[P]>
            : GetScalarType<T[P], UserGoalGroupByOutputType[P]>
        }
      >
    >


  export type UserGoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    goal?: boolean
    deficitPerDay?: boolean
    targetTime?: boolean
    hydrationNeeds?: boolean
    targetWeight?: boolean
    totalDeficit?: boolean
    stepNeeds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGoal"]>



  export type UserGoalSelectScalar = {
    id?: boolean
    userId?: boolean
    goal?: boolean
    deficitPerDay?: boolean
    targetTime?: boolean
    hydrationNeeds?: boolean
    targetWeight?: boolean
    totalDeficit?: boolean
    stepNeeds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserGoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "goal" | "deficitPerDay" | "targetTime" | "hydrationNeeds" | "targetWeight" | "totalDeficit" | "stepNeeds" | "createdAt" | "updatedAt", ExtArgs["result"]["userGoal"]>
  export type UserGoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserGoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserGoal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      goal: string
      deficitPerDay: string
      targetTime: string | null
      hydrationNeeds: string
      targetWeight: string
      totalDeficit: string
      stepNeeds: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userGoal"]>
    composites: {}
  }

  type UserGoalGetPayload<S extends boolean | null | undefined | UserGoalDefaultArgs> = $Result.GetResult<Prisma.$UserGoalPayload, S>

  type UserGoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserGoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserGoalCountAggregateInputType | true
    }

  export interface UserGoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserGoal'], meta: { name: 'UserGoal' } }
    /**
     * Find zero or one UserGoal that matches the filter.
     * @param {UserGoalFindUniqueArgs} args - Arguments to find a UserGoal
     * @example
     * // Get one UserGoal
     * const userGoal = await prisma.userGoal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserGoalFindUniqueArgs>(args: SelectSubset<T, UserGoalFindUniqueArgs<ExtArgs>>): Prisma__UserGoalClient<$Result.GetResult<Prisma.$UserGoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserGoal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserGoalFindUniqueOrThrowArgs} args - Arguments to find a UserGoal
     * @example
     * // Get one UserGoal
     * const userGoal = await prisma.userGoal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserGoalFindUniqueOrThrowArgs>(args: SelectSubset<T, UserGoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserGoalClient<$Result.GetResult<Prisma.$UserGoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGoal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGoalFindFirstArgs} args - Arguments to find a UserGoal
     * @example
     * // Get one UserGoal
     * const userGoal = await prisma.userGoal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserGoalFindFirstArgs>(args?: SelectSubset<T, UserGoalFindFirstArgs<ExtArgs>>): Prisma__UserGoalClient<$Result.GetResult<Prisma.$UserGoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGoal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGoalFindFirstOrThrowArgs} args - Arguments to find a UserGoal
     * @example
     * // Get one UserGoal
     * const userGoal = await prisma.userGoal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserGoalFindFirstOrThrowArgs>(args?: SelectSubset<T, UserGoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserGoalClient<$Result.GetResult<Prisma.$UserGoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserGoals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserGoals
     * const userGoals = await prisma.userGoal.findMany()
     * 
     * // Get first 10 UserGoals
     * const userGoals = await prisma.userGoal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userGoalWithIdOnly = await prisma.userGoal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserGoalFindManyArgs>(args?: SelectSubset<T, UserGoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserGoal.
     * @param {UserGoalCreateArgs} args - Arguments to create a UserGoal.
     * @example
     * // Create one UserGoal
     * const UserGoal = await prisma.userGoal.create({
     *   data: {
     *     // ... data to create a UserGoal
     *   }
     * })
     * 
     */
    create<T extends UserGoalCreateArgs>(args: SelectSubset<T, UserGoalCreateArgs<ExtArgs>>): Prisma__UserGoalClient<$Result.GetResult<Prisma.$UserGoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserGoals.
     * @param {UserGoalCreateManyArgs} args - Arguments to create many UserGoals.
     * @example
     * // Create many UserGoals
     * const userGoal = await prisma.userGoal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserGoalCreateManyArgs>(args?: SelectSubset<T, UserGoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserGoal.
     * @param {UserGoalDeleteArgs} args - Arguments to delete one UserGoal.
     * @example
     * // Delete one UserGoal
     * const UserGoal = await prisma.userGoal.delete({
     *   where: {
     *     // ... filter to delete one UserGoal
     *   }
     * })
     * 
     */
    delete<T extends UserGoalDeleteArgs>(args: SelectSubset<T, UserGoalDeleteArgs<ExtArgs>>): Prisma__UserGoalClient<$Result.GetResult<Prisma.$UserGoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserGoal.
     * @param {UserGoalUpdateArgs} args - Arguments to update one UserGoal.
     * @example
     * // Update one UserGoal
     * const userGoal = await prisma.userGoal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserGoalUpdateArgs>(args: SelectSubset<T, UserGoalUpdateArgs<ExtArgs>>): Prisma__UserGoalClient<$Result.GetResult<Prisma.$UserGoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserGoals.
     * @param {UserGoalDeleteManyArgs} args - Arguments to filter UserGoals to delete.
     * @example
     * // Delete a few UserGoals
     * const { count } = await prisma.userGoal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserGoalDeleteManyArgs>(args?: SelectSubset<T, UserGoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserGoals
     * const userGoal = await prisma.userGoal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserGoalUpdateManyArgs>(args: SelectSubset<T, UserGoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserGoal.
     * @param {UserGoalUpsertArgs} args - Arguments to update or create a UserGoal.
     * @example
     * // Update or create a UserGoal
     * const userGoal = await prisma.userGoal.upsert({
     *   create: {
     *     // ... data to create a UserGoal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserGoal we want to update
     *   }
     * })
     */
    upsert<T extends UserGoalUpsertArgs>(args: SelectSubset<T, UserGoalUpsertArgs<ExtArgs>>): Prisma__UserGoalClient<$Result.GetResult<Prisma.$UserGoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGoalCountArgs} args - Arguments to filter UserGoals to count.
     * @example
     * // Count the number of UserGoals
     * const count = await prisma.userGoal.count({
     *   where: {
     *     // ... the filter for the UserGoals we want to count
     *   }
     * })
    **/
    count<T extends UserGoalCountArgs>(
      args?: Subset<T, UserGoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserGoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserGoalAggregateArgs>(args: Subset<T, UserGoalAggregateArgs>): Prisma.PrismaPromise<GetUserGoalAggregateType<T>>

    /**
     * Group by UserGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGoalGroupByArgs} args - Group by arguments.
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
      T extends UserGoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGoalGroupByArgs['orderBy'] }
        : { orderBy?: UserGoalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserGoal model
   */
  readonly fields: UserGoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserGoal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserGoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserGoal model
   */
  interface UserGoalFieldRefs {
    readonly id: FieldRef<"UserGoal", 'String'>
    readonly userId: FieldRef<"UserGoal", 'String'>
    readonly goal: FieldRef<"UserGoal", 'String'>
    readonly deficitPerDay: FieldRef<"UserGoal", 'String'>
    readonly targetTime: FieldRef<"UserGoal", 'String'>
    readonly hydrationNeeds: FieldRef<"UserGoal", 'String'>
    readonly targetWeight: FieldRef<"UserGoal", 'String'>
    readonly totalDeficit: FieldRef<"UserGoal", 'String'>
    readonly stepNeeds: FieldRef<"UserGoal", 'String'>
    readonly createdAt: FieldRef<"UserGoal", 'DateTime'>
    readonly updatedAt: FieldRef<"UserGoal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserGoal findUnique
   */
  export type UserGoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGoal
     */
    select?: UserGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGoal
     */
    omit?: UserGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGoalInclude<ExtArgs> | null
    /**
     * Filter, which UserGoal to fetch.
     */
    where: UserGoalWhereUniqueInput
  }

  /**
   * UserGoal findUniqueOrThrow
   */
  export type UserGoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGoal
     */
    select?: UserGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGoal
     */
    omit?: UserGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGoalInclude<ExtArgs> | null
    /**
     * Filter, which UserGoal to fetch.
     */
    where: UserGoalWhereUniqueInput
  }

  /**
   * UserGoal findFirst
   */
  export type UserGoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGoal
     */
    select?: UserGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGoal
     */
    omit?: UserGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGoalInclude<ExtArgs> | null
    /**
     * Filter, which UserGoal to fetch.
     */
    where?: UserGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGoals to fetch.
     */
    orderBy?: UserGoalOrderByWithRelationInput | UserGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGoals.
     */
    cursor?: UserGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGoals.
     */
    distinct?: UserGoalScalarFieldEnum | UserGoalScalarFieldEnum[]
  }

  /**
   * UserGoal findFirstOrThrow
   */
  export type UserGoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGoal
     */
    select?: UserGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGoal
     */
    omit?: UserGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGoalInclude<ExtArgs> | null
    /**
     * Filter, which UserGoal to fetch.
     */
    where?: UserGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGoals to fetch.
     */
    orderBy?: UserGoalOrderByWithRelationInput | UserGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGoals.
     */
    cursor?: UserGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGoals.
     */
    distinct?: UserGoalScalarFieldEnum | UserGoalScalarFieldEnum[]
  }

  /**
   * UserGoal findMany
   */
  export type UserGoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGoal
     */
    select?: UserGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGoal
     */
    omit?: UserGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGoalInclude<ExtArgs> | null
    /**
     * Filter, which UserGoals to fetch.
     */
    where?: UserGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGoals to fetch.
     */
    orderBy?: UserGoalOrderByWithRelationInput | UserGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserGoals.
     */
    cursor?: UserGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGoals.
     */
    skip?: number
    distinct?: UserGoalScalarFieldEnum | UserGoalScalarFieldEnum[]
  }

  /**
   * UserGoal create
   */
  export type UserGoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGoal
     */
    select?: UserGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGoal
     */
    omit?: UserGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGoalInclude<ExtArgs> | null
    /**
     * The data needed to create a UserGoal.
     */
    data: XOR<UserGoalCreateInput, UserGoalUncheckedCreateInput>
  }

  /**
   * UserGoal createMany
   */
  export type UserGoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserGoals.
     */
    data: UserGoalCreateManyInput | UserGoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserGoal update
   */
  export type UserGoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGoal
     */
    select?: UserGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGoal
     */
    omit?: UserGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGoalInclude<ExtArgs> | null
    /**
     * The data needed to update a UserGoal.
     */
    data: XOR<UserGoalUpdateInput, UserGoalUncheckedUpdateInput>
    /**
     * Choose, which UserGoal to update.
     */
    where: UserGoalWhereUniqueInput
  }

  /**
   * UserGoal updateMany
   */
  export type UserGoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserGoals.
     */
    data: XOR<UserGoalUpdateManyMutationInput, UserGoalUncheckedUpdateManyInput>
    /**
     * Filter which UserGoals to update
     */
    where?: UserGoalWhereInput
    /**
     * Limit how many UserGoals to update.
     */
    limit?: number
  }

  /**
   * UserGoal upsert
   */
  export type UserGoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGoal
     */
    select?: UserGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGoal
     */
    omit?: UserGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGoalInclude<ExtArgs> | null
    /**
     * The filter to search for the UserGoal to update in case it exists.
     */
    where: UserGoalWhereUniqueInput
    /**
     * In case the UserGoal found by the `where` argument doesn't exist, create a new UserGoal with this data.
     */
    create: XOR<UserGoalCreateInput, UserGoalUncheckedCreateInput>
    /**
     * In case the UserGoal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserGoalUpdateInput, UserGoalUncheckedUpdateInput>
  }

  /**
   * UserGoal delete
   */
  export type UserGoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGoal
     */
    select?: UserGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGoal
     */
    omit?: UserGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGoalInclude<ExtArgs> | null
    /**
     * Filter which UserGoal to delete.
     */
    where: UserGoalWhereUniqueInput
  }

  /**
   * UserGoal deleteMany
   */
  export type UserGoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGoals to delete
     */
    where?: UserGoalWhereInput
    /**
     * Limit how many UserGoals to delete.
     */
    limit?: number
  }

  /**
   * UserGoal without action
   */
  export type UserGoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGoal
     */
    select?: UserGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGoal
     */
    omit?: UserGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGoalInclude<ExtArgs> | null
  }


  /**
   * Model PhysicalActivityLog
   */

  export type AggregatePhysicalActivityLog = {
    _count: PhysicalActivityLogCountAggregateOutputType | null
    _avg: PhysicalActivityLogAvgAggregateOutputType | null
    _sum: PhysicalActivityLogSumAggregateOutputType | null
    _min: PhysicalActivityLogMinAggregateOutputType | null
    _max: PhysicalActivityLogMaxAggregateOutputType | null
  }

  export type PhysicalActivityLogAvgAggregateOutputType = {
    duration: number | null
    caloriesBurned: number | null
  }

  export type PhysicalActivityLogSumAggregateOutputType = {
    duration: number | null
    caloriesBurned: number | null
  }

  export type PhysicalActivityLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    duration: number | null
    caloriesBurned: number | null
    createdAt: Date | null
  }

  export type PhysicalActivityLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    duration: number | null
    caloriesBurned: number | null
    createdAt: Date | null
  }

  export type PhysicalActivityLogCountAggregateOutputType = {
    id: number
    userId: number
    duration: number
    caloriesBurned: number
    createdAt: number
    _all: number
  }


  export type PhysicalActivityLogAvgAggregateInputType = {
    duration?: true
    caloriesBurned?: true
  }

  export type PhysicalActivityLogSumAggregateInputType = {
    duration?: true
    caloriesBurned?: true
  }

  export type PhysicalActivityLogMinAggregateInputType = {
    id?: true
    userId?: true
    duration?: true
    caloriesBurned?: true
    createdAt?: true
  }

  export type PhysicalActivityLogMaxAggregateInputType = {
    id?: true
    userId?: true
    duration?: true
    caloriesBurned?: true
    createdAt?: true
  }

  export type PhysicalActivityLogCountAggregateInputType = {
    id?: true
    userId?: true
    duration?: true
    caloriesBurned?: true
    createdAt?: true
    _all?: true
  }

  export type PhysicalActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhysicalActivityLog to aggregate.
     */
    where?: PhysicalActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalActivityLogs to fetch.
     */
    orderBy?: PhysicalActivityLogOrderByWithRelationInput | PhysicalActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhysicalActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhysicalActivityLogs
    **/
    _count?: true | PhysicalActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhysicalActivityLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhysicalActivityLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhysicalActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhysicalActivityLogMaxAggregateInputType
  }

  export type GetPhysicalActivityLogAggregateType<T extends PhysicalActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregatePhysicalActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhysicalActivityLog[P]>
      : GetScalarType<T[P], AggregatePhysicalActivityLog[P]>
  }




  export type PhysicalActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhysicalActivityLogWhereInput
    orderBy?: PhysicalActivityLogOrderByWithAggregationInput | PhysicalActivityLogOrderByWithAggregationInput[]
    by: PhysicalActivityLogScalarFieldEnum[] | PhysicalActivityLogScalarFieldEnum
    having?: PhysicalActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhysicalActivityLogCountAggregateInputType | true
    _avg?: PhysicalActivityLogAvgAggregateInputType
    _sum?: PhysicalActivityLogSumAggregateInputType
    _min?: PhysicalActivityLogMinAggregateInputType
    _max?: PhysicalActivityLogMaxAggregateInputType
  }

  export type PhysicalActivityLogGroupByOutputType = {
    id: string
    userId: string
    duration: number
    caloriesBurned: number
    createdAt: Date
    _count: PhysicalActivityLogCountAggregateOutputType | null
    _avg: PhysicalActivityLogAvgAggregateOutputType | null
    _sum: PhysicalActivityLogSumAggregateOutputType | null
    _min: PhysicalActivityLogMinAggregateOutputType | null
    _max: PhysicalActivityLogMaxAggregateOutputType | null
  }

  type GetPhysicalActivityLogGroupByPayload<T extends PhysicalActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhysicalActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhysicalActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhysicalActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], PhysicalActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type PhysicalActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    duration?: boolean
    caloriesBurned?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    activityType?: boolean | PhysicalActivityLog$activityTypeArgs<ExtArgs>
    userActivityId?: boolean | PhysicalActivityLog$userActivityIdArgs<ExtArgs>
    _count?: boolean | PhysicalActivityLogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["physicalActivityLog"]>



  export type PhysicalActivityLogSelectScalar = {
    id?: boolean
    userId?: boolean
    duration?: boolean
    caloriesBurned?: boolean
    createdAt?: boolean
  }

  export type PhysicalActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "duration" | "caloriesBurned" | "createdAt", ExtArgs["result"]["physicalActivityLog"]>
  export type PhysicalActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    activityType?: boolean | PhysicalActivityLog$activityTypeArgs<ExtArgs>
    userActivityId?: boolean | PhysicalActivityLog$userActivityIdArgs<ExtArgs>
    _count?: boolean | PhysicalActivityLogCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PhysicalActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhysicalActivityLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      activityType: Prisma.$ActivityTypePayload<ExtArgs>[]
      userActivityId: Prisma.$UserActivitesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      duration: number
      caloriesBurned: number
      createdAt: Date
    }, ExtArgs["result"]["physicalActivityLog"]>
    composites: {}
  }

  type PhysicalActivityLogGetPayload<S extends boolean | null | undefined | PhysicalActivityLogDefaultArgs> = $Result.GetResult<Prisma.$PhysicalActivityLogPayload, S>

  type PhysicalActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhysicalActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhysicalActivityLogCountAggregateInputType | true
    }

  export interface PhysicalActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhysicalActivityLog'], meta: { name: 'PhysicalActivityLog' } }
    /**
     * Find zero or one PhysicalActivityLog that matches the filter.
     * @param {PhysicalActivityLogFindUniqueArgs} args - Arguments to find a PhysicalActivityLog
     * @example
     * // Get one PhysicalActivityLog
     * const physicalActivityLog = await prisma.physicalActivityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhysicalActivityLogFindUniqueArgs>(args: SelectSubset<T, PhysicalActivityLogFindUniqueArgs<ExtArgs>>): Prisma__PhysicalActivityLogClient<$Result.GetResult<Prisma.$PhysicalActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PhysicalActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhysicalActivityLogFindUniqueOrThrowArgs} args - Arguments to find a PhysicalActivityLog
     * @example
     * // Get one PhysicalActivityLog
     * const physicalActivityLog = await prisma.physicalActivityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhysicalActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, PhysicalActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhysicalActivityLogClient<$Result.GetResult<Prisma.$PhysicalActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhysicalActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalActivityLogFindFirstArgs} args - Arguments to find a PhysicalActivityLog
     * @example
     * // Get one PhysicalActivityLog
     * const physicalActivityLog = await prisma.physicalActivityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhysicalActivityLogFindFirstArgs>(args?: SelectSubset<T, PhysicalActivityLogFindFirstArgs<ExtArgs>>): Prisma__PhysicalActivityLogClient<$Result.GetResult<Prisma.$PhysicalActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhysicalActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalActivityLogFindFirstOrThrowArgs} args - Arguments to find a PhysicalActivityLog
     * @example
     * // Get one PhysicalActivityLog
     * const physicalActivityLog = await prisma.physicalActivityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhysicalActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, PhysicalActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhysicalActivityLogClient<$Result.GetResult<Prisma.$PhysicalActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PhysicalActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhysicalActivityLogs
     * const physicalActivityLogs = await prisma.physicalActivityLog.findMany()
     * 
     * // Get first 10 PhysicalActivityLogs
     * const physicalActivityLogs = await prisma.physicalActivityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const physicalActivityLogWithIdOnly = await prisma.physicalActivityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhysicalActivityLogFindManyArgs>(args?: SelectSubset<T, PhysicalActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhysicalActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PhysicalActivityLog.
     * @param {PhysicalActivityLogCreateArgs} args - Arguments to create a PhysicalActivityLog.
     * @example
     * // Create one PhysicalActivityLog
     * const PhysicalActivityLog = await prisma.physicalActivityLog.create({
     *   data: {
     *     // ... data to create a PhysicalActivityLog
     *   }
     * })
     * 
     */
    create<T extends PhysicalActivityLogCreateArgs>(args: SelectSubset<T, PhysicalActivityLogCreateArgs<ExtArgs>>): Prisma__PhysicalActivityLogClient<$Result.GetResult<Prisma.$PhysicalActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PhysicalActivityLogs.
     * @param {PhysicalActivityLogCreateManyArgs} args - Arguments to create many PhysicalActivityLogs.
     * @example
     * // Create many PhysicalActivityLogs
     * const physicalActivityLog = await prisma.physicalActivityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhysicalActivityLogCreateManyArgs>(args?: SelectSubset<T, PhysicalActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PhysicalActivityLog.
     * @param {PhysicalActivityLogDeleteArgs} args - Arguments to delete one PhysicalActivityLog.
     * @example
     * // Delete one PhysicalActivityLog
     * const PhysicalActivityLog = await prisma.physicalActivityLog.delete({
     *   where: {
     *     // ... filter to delete one PhysicalActivityLog
     *   }
     * })
     * 
     */
    delete<T extends PhysicalActivityLogDeleteArgs>(args: SelectSubset<T, PhysicalActivityLogDeleteArgs<ExtArgs>>): Prisma__PhysicalActivityLogClient<$Result.GetResult<Prisma.$PhysicalActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PhysicalActivityLog.
     * @param {PhysicalActivityLogUpdateArgs} args - Arguments to update one PhysicalActivityLog.
     * @example
     * // Update one PhysicalActivityLog
     * const physicalActivityLog = await prisma.physicalActivityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhysicalActivityLogUpdateArgs>(args: SelectSubset<T, PhysicalActivityLogUpdateArgs<ExtArgs>>): Prisma__PhysicalActivityLogClient<$Result.GetResult<Prisma.$PhysicalActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PhysicalActivityLogs.
     * @param {PhysicalActivityLogDeleteManyArgs} args - Arguments to filter PhysicalActivityLogs to delete.
     * @example
     * // Delete a few PhysicalActivityLogs
     * const { count } = await prisma.physicalActivityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhysicalActivityLogDeleteManyArgs>(args?: SelectSubset<T, PhysicalActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhysicalActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhysicalActivityLogs
     * const physicalActivityLog = await prisma.physicalActivityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhysicalActivityLogUpdateManyArgs>(args: SelectSubset<T, PhysicalActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PhysicalActivityLog.
     * @param {PhysicalActivityLogUpsertArgs} args - Arguments to update or create a PhysicalActivityLog.
     * @example
     * // Update or create a PhysicalActivityLog
     * const physicalActivityLog = await prisma.physicalActivityLog.upsert({
     *   create: {
     *     // ... data to create a PhysicalActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhysicalActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends PhysicalActivityLogUpsertArgs>(args: SelectSubset<T, PhysicalActivityLogUpsertArgs<ExtArgs>>): Prisma__PhysicalActivityLogClient<$Result.GetResult<Prisma.$PhysicalActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PhysicalActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalActivityLogCountArgs} args - Arguments to filter PhysicalActivityLogs to count.
     * @example
     * // Count the number of PhysicalActivityLogs
     * const count = await prisma.physicalActivityLog.count({
     *   where: {
     *     // ... the filter for the PhysicalActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends PhysicalActivityLogCountArgs>(
      args?: Subset<T, PhysicalActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhysicalActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhysicalActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhysicalActivityLogAggregateArgs>(args: Subset<T, PhysicalActivityLogAggregateArgs>): Prisma.PrismaPromise<GetPhysicalActivityLogAggregateType<T>>

    /**
     * Group by PhysicalActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhysicalActivityLogGroupByArgs} args - Group by arguments.
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
      T extends PhysicalActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhysicalActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: PhysicalActivityLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhysicalActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhysicalActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhysicalActivityLog model
   */
  readonly fields: PhysicalActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhysicalActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhysicalActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    activityType<T extends PhysicalActivityLog$activityTypeArgs<ExtArgs> = {}>(args?: Subset<T, PhysicalActivityLog$activityTypeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userActivityId<T extends PhysicalActivityLog$userActivityIdArgs<ExtArgs> = {}>(args?: Subset<T, PhysicalActivityLog$userActivityIdArgs<ExtArgs>>): Prisma__UserActivitesClient<$Result.GetResult<Prisma.$UserActivitesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PhysicalActivityLog model
   */
  interface PhysicalActivityLogFieldRefs {
    readonly id: FieldRef<"PhysicalActivityLog", 'String'>
    readonly userId: FieldRef<"PhysicalActivityLog", 'String'>
    readonly duration: FieldRef<"PhysicalActivityLog", 'Int'>
    readonly caloriesBurned: FieldRef<"PhysicalActivityLog", 'Float'>
    readonly createdAt: FieldRef<"PhysicalActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PhysicalActivityLog findUnique
   */
  export type PhysicalActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalActivityLog
     */
    select?: PhysicalActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalActivityLog
     */
    omit?: PhysicalActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalActivityLog to fetch.
     */
    where: PhysicalActivityLogWhereUniqueInput
  }

  /**
   * PhysicalActivityLog findUniqueOrThrow
   */
  export type PhysicalActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalActivityLog
     */
    select?: PhysicalActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalActivityLog
     */
    omit?: PhysicalActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalActivityLog to fetch.
     */
    where: PhysicalActivityLogWhereUniqueInput
  }

  /**
   * PhysicalActivityLog findFirst
   */
  export type PhysicalActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalActivityLog
     */
    select?: PhysicalActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalActivityLog
     */
    omit?: PhysicalActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalActivityLog to fetch.
     */
    where?: PhysicalActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalActivityLogs to fetch.
     */
    orderBy?: PhysicalActivityLogOrderByWithRelationInput | PhysicalActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhysicalActivityLogs.
     */
    cursor?: PhysicalActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhysicalActivityLogs.
     */
    distinct?: PhysicalActivityLogScalarFieldEnum | PhysicalActivityLogScalarFieldEnum[]
  }

  /**
   * PhysicalActivityLog findFirstOrThrow
   */
  export type PhysicalActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalActivityLog
     */
    select?: PhysicalActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalActivityLog
     */
    omit?: PhysicalActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalActivityLog to fetch.
     */
    where?: PhysicalActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalActivityLogs to fetch.
     */
    orderBy?: PhysicalActivityLogOrderByWithRelationInput | PhysicalActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhysicalActivityLogs.
     */
    cursor?: PhysicalActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhysicalActivityLogs.
     */
    distinct?: PhysicalActivityLogScalarFieldEnum | PhysicalActivityLogScalarFieldEnum[]
  }

  /**
   * PhysicalActivityLog findMany
   */
  export type PhysicalActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalActivityLog
     */
    select?: PhysicalActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalActivityLog
     */
    omit?: PhysicalActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which PhysicalActivityLogs to fetch.
     */
    where?: PhysicalActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhysicalActivityLogs to fetch.
     */
    orderBy?: PhysicalActivityLogOrderByWithRelationInput | PhysicalActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhysicalActivityLogs.
     */
    cursor?: PhysicalActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhysicalActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhysicalActivityLogs.
     */
    skip?: number
    distinct?: PhysicalActivityLogScalarFieldEnum | PhysicalActivityLogScalarFieldEnum[]
  }

  /**
   * PhysicalActivityLog create
   */
  export type PhysicalActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalActivityLog
     */
    select?: PhysicalActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalActivityLog
     */
    omit?: PhysicalActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a PhysicalActivityLog.
     */
    data: XOR<PhysicalActivityLogCreateInput, PhysicalActivityLogUncheckedCreateInput>
  }

  /**
   * PhysicalActivityLog createMany
   */
  export type PhysicalActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhysicalActivityLogs.
     */
    data: PhysicalActivityLogCreateManyInput | PhysicalActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhysicalActivityLog update
   */
  export type PhysicalActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalActivityLog
     */
    select?: PhysicalActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalActivityLog
     */
    omit?: PhysicalActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a PhysicalActivityLog.
     */
    data: XOR<PhysicalActivityLogUpdateInput, PhysicalActivityLogUncheckedUpdateInput>
    /**
     * Choose, which PhysicalActivityLog to update.
     */
    where: PhysicalActivityLogWhereUniqueInput
  }

  /**
   * PhysicalActivityLog updateMany
   */
  export type PhysicalActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhysicalActivityLogs.
     */
    data: XOR<PhysicalActivityLogUpdateManyMutationInput, PhysicalActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which PhysicalActivityLogs to update
     */
    where?: PhysicalActivityLogWhereInput
    /**
     * Limit how many PhysicalActivityLogs to update.
     */
    limit?: number
  }

  /**
   * PhysicalActivityLog upsert
   */
  export type PhysicalActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalActivityLog
     */
    select?: PhysicalActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalActivityLog
     */
    omit?: PhysicalActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the PhysicalActivityLog to update in case it exists.
     */
    where: PhysicalActivityLogWhereUniqueInput
    /**
     * In case the PhysicalActivityLog found by the `where` argument doesn't exist, create a new PhysicalActivityLog with this data.
     */
    create: XOR<PhysicalActivityLogCreateInput, PhysicalActivityLogUncheckedCreateInput>
    /**
     * In case the PhysicalActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhysicalActivityLogUpdateInput, PhysicalActivityLogUncheckedUpdateInput>
  }

  /**
   * PhysicalActivityLog delete
   */
  export type PhysicalActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalActivityLog
     */
    select?: PhysicalActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalActivityLog
     */
    omit?: PhysicalActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalActivityLogInclude<ExtArgs> | null
    /**
     * Filter which PhysicalActivityLog to delete.
     */
    where: PhysicalActivityLogWhereUniqueInput
  }

  /**
   * PhysicalActivityLog deleteMany
   */
  export type PhysicalActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhysicalActivityLogs to delete
     */
    where?: PhysicalActivityLogWhereInput
    /**
     * Limit how many PhysicalActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * PhysicalActivityLog.activityType
   */
  export type PhysicalActivityLog$activityTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityType
     */
    omit?: ActivityTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityTypeInclude<ExtArgs> | null
    where?: ActivityTypeWhereInput
    orderBy?: ActivityTypeOrderByWithRelationInput | ActivityTypeOrderByWithRelationInput[]
    cursor?: ActivityTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityTypeScalarFieldEnum | ActivityTypeScalarFieldEnum[]
  }

  /**
   * PhysicalActivityLog.userActivityId
   */
  export type PhysicalActivityLog$userActivityIdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivites
     */
    select?: UserActivitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivites
     */
    omit?: UserActivitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivitesInclude<ExtArgs> | null
    where?: UserActivitesWhereInput
  }

  /**
   * PhysicalActivityLog without action
   */
  export type PhysicalActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalActivityLog
     */
    select?: PhysicalActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalActivityLog
     */
    omit?: PhysicalActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalActivityLogInclude<ExtArgs> | null
  }


  /**
   * Model ActivityType
   */

  export type AggregateActivityType = {
    _count: ActivityTypeCountAggregateOutputType | null
    _avg: ActivityTypeAvgAggregateOutputType | null
    _sum: ActivityTypeSumAggregateOutputType | null
    _min: ActivityTypeMinAggregateOutputType | null
    _max: ActivityTypeMaxAggregateOutputType | null
  }

  export type ActivityTypeAvgAggregateOutputType = {
    duration: number | null
    metValue: number | null
  }

  export type ActivityTypeSumAggregateOutputType = {
    duration: number | null
    metValue: number | null
  }

  export type ActivityTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    duration: number | null
    metValue: number | null
    physicalActivityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActivityTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    duration: number | null
    metValue: number | null
    physicalActivityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActivityTypeCountAggregateOutputType = {
    id: number
    name: number
    duration: number
    metValue: number
    physicalActivityId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ActivityTypeAvgAggregateInputType = {
    duration?: true
    metValue?: true
  }

  export type ActivityTypeSumAggregateInputType = {
    duration?: true
    metValue?: true
  }

  export type ActivityTypeMinAggregateInputType = {
    id?: true
    name?: true
    duration?: true
    metValue?: true
    physicalActivityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActivityTypeMaxAggregateInputType = {
    id?: true
    name?: true
    duration?: true
    metValue?: true
    physicalActivityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActivityTypeCountAggregateInputType = {
    id?: true
    name?: true
    duration?: true
    metValue?: true
    physicalActivityId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ActivityTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityType to aggregate.
     */
    where?: ActivityTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityTypes to fetch.
     */
    orderBy?: ActivityTypeOrderByWithRelationInput | ActivityTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityTypes
    **/
    _count?: true | ActivityTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityTypeMaxAggregateInputType
  }

  export type GetActivityTypeAggregateType<T extends ActivityTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityType[P]>
      : GetScalarType<T[P], AggregateActivityType[P]>
  }




  export type ActivityTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityTypeWhereInput
    orderBy?: ActivityTypeOrderByWithAggregationInput | ActivityTypeOrderByWithAggregationInput[]
    by: ActivityTypeScalarFieldEnum[] | ActivityTypeScalarFieldEnum
    having?: ActivityTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityTypeCountAggregateInputType | true
    _avg?: ActivityTypeAvgAggregateInputType
    _sum?: ActivityTypeSumAggregateInputType
    _min?: ActivityTypeMinAggregateInputType
    _max?: ActivityTypeMaxAggregateInputType
  }

  export type ActivityTypeGroupByOutputType = {
    id: string
    name: string
    duration: number
    metValue: number
    physicalActivityId: string
    createdAt: Date
    updatedAt: Date
    _count: ActivityTypeCountAggregateOutputType | null
    _avg: ActivityTypeAvgAggregateOutputType | null
    _sum: ActivityTypeSumAggregateOutputType | null
    _min: ActivityTypeMinAggregateOutputType | null
    _max: ActivityTypeMaxAggregateOutputType | null
  }

  type GetActivityTypeGroupByPayload<T extends ActivityTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityTypeGroupByOutputType[P]>
        }
      >
    >


  export type ActivityTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    duration?: boolean
    metValue?: boolean
    physicalActivityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    physicalActivity?: boolean | PhysicalActivityLogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityType"]>



  export type ActivityTypeSelectScalar = {
    id?: boolean
    name?: boolean
    duration?: boolean
    metValue?: boolean
    physicalActivityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ActivityTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "duration" | "metValue" | "physicalActivityId" | "createdAt" | "updatedAt", ExtArgs["result"]["activityType"]>
  export type ActivityTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    physicalActivity?: boolean | PhysicalActivityLogDefaultArgs<ExtArgs>
  }

  export type $ActivityTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityType"
    objects: {
      physicalActivity: Prisma.$PhysicalActivityLogPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      duration: number
      metValue: number
      physicalActivityId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["activityType"]>
    composites: {}
  }

  type ActivityTypeGetPayload<S extends boolean | null | undefined | ActivityTypeDefaultArgs> = $Result.GetResult<Prisma.$ActivityTypePayload, S>

  type ActivityTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityTypeCountAggregateInputType | true
    }

  export interface ActivityTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityType'], meta: { name: 'ActivityType' } }
    /**
     * Find zero or one ActivityType that matches the filter.
     * @param {ActivityTypeFindUniqueArgs} args - Arguments to find a ActivityType
     * @example
     * // Get one ActivityType
     * const activityType = await prisma.activityType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityTypeFindUniqueArgs>(args: SelectSubset<T, ActivityTypeFindUniqueArgs<ExtArgs>>): Prisma__ActivityTypeClient<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityTypeFindUniqueOrThrowArgs} args - Arguments to find a ActivityType
     * @example
     * // Get one ActivityType
     * const activityType = await prisma.activityType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityTypeClient<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypeFindFirstArgs} args - Arguments to find a ActivityType
     * @example
     * // Get one ActivityType
     * const activityType = await prisma.activityType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityTypeFindFirstArgs>(args?: SelectSubset<T, ActivityTypeFindFirstArgs<ExtArgs>>): Prisma__ActivityTypeClient<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypeFindFirstOrThrowArgs} args - Arguments to find a ActivityType
     * @example
     * // Get one ActivityType
     * const activityType = await prisma.activityType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityTypeClient<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityTypes
     * const activityTypes = await prisma.activityType.findMany()
     * 
     * // Get first 10 ActivityTypes
     * const activityTypes = await prisma.activityType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityTypeWithIdOnly = await prisma.activityType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityTypeFindManyArgs>(args?: SelectSubset<T, ActivityTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityType.
     * @param {ActivityTypeCreateArgs} args - Arguments to create a ActivityType.
     * @example
     * // Create one ActivityType
     * const ActivityType = await prisma.activityType.create({
     *   data: {
     *     // ... data to create a ActivityType
     *   }
     * })
     * 
     */
    create<T extends ActivityTypeCreateArgs>(args: SelectSubset<T, ActivityTypeCreateArgs<ExtArgs>>): Prisma__ActivityTypeClient<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityTypes.
     * @param {ActivityTypeCreateManyArgs} args - Arguments to create many ActivityTypes.
     * @example
     * // Create many ActivityTypes
     * const activityType = await prisma.activityType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityTypeCreateManyArgs>(args?: SelectSubset<T, ActivityTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ActivityType.
     * @param {ActivityTypeDeleteArgs} args - Arguments to delete one ActivityType.
     * @example
     * // Delete one ActivityType
     * const ActivityType = await prisma.activityType.delete({
     *   where: {
     *     // ... filter to delete one ActivityType
     *   }
     * })
     * 
     */
    delete<T extends ActivityTypeDeleteArgs>(args: SelectSubset<T, ActivityTypeDeleteArgs<ExtArgs>>): Prisma__ActivityTypeClient<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityType.
     * @param {ActivityTypeUpdateArgs} args - Arguments to update one ActivityType.
     * @example
     * // Update one ActivityType
     * const activityType = await prisma.activityType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityTypeUpdateArgs>(args: SelectSubset<T, ActivityTypeUpdateArgs<ExtArgs>>): Prisma__ActivityTypeClient<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityTypes.
     * @param {ActivityTypeDeleteManyArgs} args - Arguments to filter ActivityTypes to delete.
     * @example
     * // Delete a few ActivityTypes
     * const { count } = await prisma.activityType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityTypeDeleteManyArgs>(args?: SelectSubset<T, ActivityTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityTypes
     * const activityType = await prisma.activityType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityTypeUpdateManyArgs>(args: SelectSubset<T, ActivityTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ActivityType.
     * @param {ActivityTypeUpsertArgs} args - Arguments to update or create a ActivityType.
     * @example
     * // Update or create a ActivityType
     * const activityType = await prisma.activityType.upsert({
     *   create: {
     *     // ... data to create a ActivityType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityType we want to update
     *   }
     * })
     */
    upsert<T extends ActivityTypeUpsertArgs>(args: SelectSubset<T, ActivityTypeUpsertArgs<ExtArgs>>): Prisma__ActivityTypeClient<$Result.GetResult<Prisma.$ActivityTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypeCountArgs} args - Arguments to filter ActivityTypes to count.
     * @example
     * // Count the number of ActivityTypes
     * const count = await prisma.activityType.count({
     *   where: {
     *     // ... the filter for the ActivityTypes we want to count
     *   }
     * })
    **/
    count<T extends ActivityTypeCountArgs>(
      args?: Subset<T, ActivityTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityTypeAggregateArgs>(args: Subset<T, ActivityTypeAggregateArgs>): Prisma.PrismaPromise<GetActivityTypeAggregateType<T>>

    /**
     * Group by ActivityType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypeGroupByArgs} args - Group by arguments.
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
      T extends ActivityTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityTypeGroupByArgs['orderBy'] }
        : { orderBy?: ActivityTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityType model
   */
  readonly fields: ActivityTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    physicalActivity<T extends PhysicalActivityLogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PhysicalActivityLogDefaultArgs<ExtArgs>>): Prisma__PhysicalActivityLogClient<$Result.GetResult<Prisma.$PhysicalActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ActivityType model
   */
  interface ActivityTypeFieldRefs {
    readonly id: FieldRef<"ActivityType", 'String'>
    readonly name: FieldRef<"ActivityType", 'String'>
    readonly duration: FieldRef<"ActivityType", 'Int'>
    readonly metValue: FieldRef<"ActivityType", 'Float'>
    readonly physicalActivityId: FieldRef<"ActivityType", 'String'>
    readonly createdAt: FieldRef<"ActivityType", 'DateTime'>
    readonly updatedAt: FieldRef<"ActivityType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityType findUnique
   */
  export type ActivityTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityType
     */
    omit?: ActivityTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityTypeInclude<ExtArgs> | null
    /**
     * Filter, which ActivityType to fetch.
     */
    where: ActivityTypeWhereUniqueInput
  }

  /**
   * ActivityType findUniqueOrThrow
   */
  export type ActivityTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityType
     */
    omit?: ActivityTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityTypeInclude<ExtArgs> | null
    /**
     * Filter, which ActivityType to fetch.
     */
    where: ActivityTypeWhereUniqueInput
  }

  /**
   * ActivityType findFirst
   */
  export type ActivityTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityType
     */
    omit?: ActivityTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityTypeInclude<ExtArgs> | null
    /**
     * Filter, which ActivityType to fetch.
     */
    where?: ActivityTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityTypes to fetch.
     */
    orderBy?: ActivityTypeOrderByWithRelationInput | ActivityTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityTypes.
     */
    cursor?: ActivityTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityTypes.
     */
    distinct?: ActivityTypeScalarFieldEnum | ActivityTypeScalarFieldEnum[]
  }

  /**
   * ActivityType findFirstOrThrow
   */
  export type ActivityTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityType
     */
    omit?: ActivityTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityTypeInclude<ExtArgs> | null
    /**
     * Filter, which ActivityType to fetch.
     */
    where?: ActivityTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityTypes to fetch.
     */
    orderBy?: ActivityTypeOrderByWithRelationInput | ActivityTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityTypes.
     */
    cursor?: ActivityTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityTypes.
     */
    distinct?: ActivityTypeScalarFieldEnum | ActivityTypeScalarFieldEnum[]
  }

  /**
   * ActivityType findMany
   */
  export type ActivityTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityType
     */
    omit?: ActivityTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityTypeInclude<ExtArgs> | null
    /**
     * Filter, which ActivityTypes to fetch.
     */
    where?: ActivityTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityTypes to fetch.
     */
    orderBy?: ActivityTypeOrderByWithRelationInput | ActivityTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityTypes.
     */
    cursor?: ActivityTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityTypes.
     */
    skip?: number
    distinct?: ActivityTypeScalarFieldEnum | ActivityTypeScalarFieldEnum[]
  }

  /**
   * ActivityType create
   */
  export type ActivityTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityType
     */
    omit?: ActivityTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityType.
     */
    data: XOR<ActivityTypeCreateInput, ActivityTypeUncheckedCreateInput>
  }

  /**
   * ActivityType createMany
   */
  export type ActivityTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityTypes.
     */
    data: ActivityTypeCreateManyInput | ActivityTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityType update
   */
  export type ActivityTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityType
     */
    omit?: ActivityTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityType.
     */
    data: XOR<ActivityTypeUpdateInput, ActivityTypeUncheckedUpdateInput>
    /**
     * Choose, which ActivityType to update.
     */
    where: ActivityTypeWhereUniqueInput
  }

  /**
   * ActivityType updateMany
   */
  export type ActivityTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityTypes.
     */
    data: XOR<ActivityTypeUpdateManyMutationInput, ActivityTypeUncheckedUpdateManyInput>
    /**
     * Filter which ActivityTypes to update
     */
    where?: ActivityTypeWhereInput
    /**
     * Limit how many ActivityTypes to update.
     */
    limit?: number
  }

  /**
   * ActivityType upsert
   */
  export type ActivityTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityType
     */
    omit?: ActivityTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityType to update in case it exists.
     */
    where: ActivityTypeWhereUniqueInput
    /**
     * In case the ActivityType found by the `where` argument doesn't exist, create a new ActivityType with this data.
     */
    create: XOR<ActivityTypeCreateInput, ActivityTypeUncheckedCreateInput>
    /**
     * In case the ActivityType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityTypeUpdateInput, ActivityTypeUncheckedUpdateInput>
  }

  /**
   * ActivityType delete
   */
  export type ActivityTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityType
     */
    omit?: ActivityTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityTypeInclude<ExtArgs> | null
    /**
     * Filter which ActivityType to delete.
     */
    where: ActivityTypeWhereUniqueInput
  }

  /**
   * ActivityType deleteMany
   */
  export type ActivityTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityTypes to delete
     */
    where?: ActivityTypeWhereInput
    /**
     * Limit how many ActivityTypes to delete.
     */
    limit?: number
  }

  /**
   * ActivityType without action
   */
  export type ActivityTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityType
     */
    select?: ActivityTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityType
     */
    omit?: ActivityTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityTypeInclude<ExtArgs> | null
  }


  /**
   * Model FoodLog
   */

  export type AggregateFoodLog = {
    _count: FoodLogCountAggregateOutputType | null
    _avg: FoodLogAvgAggregateOutputType | null
    _sum: FoodLogSumAggregateOutputType | null
    _min: FoodLogMinAggregateOutputType | null
    _max: FoodLogMaxAggregateOutputType | null
  }

  export type FoodLogAvgAggregateOutputType = {
    calories: number | null
  }

  export type FoodLogSumAggregateOutputType = {
    calories: number | null
  }

  export type FoodLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    foodName: string | null
    calories: number | null
    mealType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    foodName: string | null
    calories: number | null
    mealType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodLogCountAggregateOutputType = {
    id: number
    userId: number
    foodName: number
    calories: number
    mealType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FoodLogAvgAggregateInputType = {
    calories?: true
  }

  export type FoodLogSumAggregateInputType = {
    calories?: true
  }

  export type FoodLogMinAggregateInputType = {
    id?: true
    userId?: true
    foodName?: true
    calories?: true
    mealType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodLogMaxAggregateInputType = {
    id?: true
    userId?: true
    foodName?: true
    calories?: true
    mealType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodLogCountAggregateInputType = {
    id?: true
    userId?: true
    foodName?: true
    calories?: true
    mealType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FoodLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodLog to aggregate.
     */
    where?: FoodLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodLogs to fetch.
     */
    orderBy?: FoodLogOrderByWithRelationInput | FoodLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodLogs
    **/
    _count?: true | FoodLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodLogMaxAggregateInputType
  }

  export type GetFoodLogAggregateType<T extends FoodLogAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodLog[P]>
      : GetScalarType<T[P], AggregateFoodLog[P]>
  }




  export type FoodLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodLogWhereInput
    orderBy?: FoodLogOrderByWithAggregationInput | FoodLogOrderByWithAggregationInput[]
    by: FoodLogScalarFieldEnum[] | FoodLogScalarFieldEnum
    having?: FoodLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodLogCountAggregateInputType | true
    _avg?: FoodLogAvgAggregateInputType
    _sum?: FoodLogSumAggregateInputType
    _min?: FoodLogMinAggregateInputType
    _max?: FoodLogMaxAggregateInputType
  }

  export type FoodLogGroupByOutputType = {
    id: string
    userId: string
    foodName: string
    calories: number
    mealType: string
    createdAt: Date
    updatedAt: Date
    _count: FoodLogCountAggregateOutputType | null
    _avg: FoodLogAvgAggregateOutputType | null
    _sum: FoodLogSumAggregateOutputType | null
    _min: FoodLogMinAggregateOutputType | null
    _max: FoodLogMaxAggregateOutputType | null
  }

  type GetFoodLogGroupByPayload<T extends FoodLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodLogGroupByOutputType[P]>
            : GetScalarType<T[P], FoodLogGroupByOutputType[P]>
        }
      >
    >


  export type FoodLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    foodName?: boolean
    calories?: boolean
    mealType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    userActivityId?: boolean | FoodLog$userActivityIdArgs<ExtArgs>
  }, ExtArgs["result"]["foodLog"]>



  export type FoodLogSelectScalar = {
    id?: boolean
    userId?: boolean
    foodName?: boolean
    calories?: boolean
    mealType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FoodLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "foodName" | "calories" | "mealType" | "createdAt" | "updatedAt", ExtArgs["result"]["foodLog"]>
  export type FoodLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    userActivityId?: boolean | FoodLog$userActivityIdArgs<ExtArgs>
  }

  export type $FoodLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      userActivityId: Prisma.$UserActivitesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      foodName: string
      calories: number
      mealType: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["foodLog"]>
    composites: {}
  }

  type FoodLogGetPayload<S extends boolean | null | undefined | FoodLogDefaultArgs> = $Result.GetResult<Prisma.$FoodLogPayload, S>

  type FoodLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodLogCountAggregateInputType | true
    }

  export interface FoodLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodLog'], meta: { name: 'FoodLog' } }
    /**
     * Find zero or one FoodLog that matches the filter.
     * @param {FoodLogFindUniqueArgs} args - Arguments to find a FoodLog
     * @example
     * // Get one FoodLog
     * const foodLog = await prisma.foodLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodLogFindUniqueArgs>(args: SelectSubset<T, FoodLogFindUniqueArgs<ExtArgs>>): Prisma__FoodLogClient<$Result.GetResult<Prisma.$FoodLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FoodLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodLogFindUniqueOrThrowArgs} args - Arguments to find a FoodLog
     * @example
     * // Get one FoodLog
     * const foodLog = await prisma.foodLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodLogFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodLogClient<$Result.GetResult<Prisma.$FoodLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodLogFindFirstArgs} args - Arguments to find a FoodLog
     * @example
     * // Get one FoodLog
     * const foodLog = await prisma.foodLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodLogFindFirstArgs>(args?: SelectSubset<T, FoodLogFindFirstArgs<ExtArgs>>): Prisma__FoodLogClient<$Result.GetResult<Prisma.$FoodLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodLogFindFirstOrThrowArgs} args - Arguments to find a FoodLog
     * @example
     * // Get one FoodLog
     * const foodLog = await prisma.foodLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodLogFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodLogClient<$Result.GetResult<Prisma.$FoodLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FoodLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodLogs
     * const foodLogs = await prisma.foodLog.findMany()
     * 
     * // Get first 10 FoodLogs
     * const foodLogs = await prisma.foodLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodLogWithIdOnly = await prisma.foodLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodLogFindManyArgs>(args?: SelectSubset<T, FoodLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FoodLog.
     * @param {FoodLogCreateArgs} args - Arguments to create a FoodLog.
     * @example
     * // Create one FoodLog
     * const FoodLog = await prisma.foodLog.create({
     *   data: {
     *     // ... data to create a FoodLog
     *   }
     * })
     * 
     */
    create<T extends FoodLogCreateArgs>(args: SelectSubset<T, FoodLogCreateArgs<ExtArgs>>): Prisma__FoodLogClient<$Result.GetResult<Prisma.$FoodLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FoodLogs.
     * @param {FoodLogCreateManyArgs} args - Arguments to create many FoodLogs.
     * @example
     * // Create many FoodLogs
     * const foodLog = await prisma.foodLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodLogCreateManyArgs>(args?: SelectSubset<T, FoodLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FoodLog.
     * @param {FoodLogDeleteArgs} args - Arguments to delete one FoodLog.
     * @example
     * // Delete one FoodLog
     * const FoodLog = await prisma.foodLog.delete({
     *   where: {
     *     // ... filter to delete one FoodLog
     *   }
     * })
     * 
     */
    delete<T extends FoodLogDeleteArgs>(args: SelectSubset<T, FoodLogDeleteArgs<ExtArgs>>): Prisma__FoodLogClient<$Result.GetResult<Prisma.$FoodLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FoodLog.
     * @param {FoodLogUpdateArgs} args - Arguments to update one FoodLog.
     * @example
     * // Update one FoodLog
     * const foodLog = await prisma.foodLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodLogUpdateArgs>(args: SelectSubset<T, FoodLogUpdateArgs<ExtArgs>>): Prisma__FoodLogClient<$Result.GetResult<Prisma.$FoodLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FoodLogs.
     * @param {FoodLogDeleteManyArgs} args - Arguments to filter FoodLogs to delete.
     * @example
     * // Delete a few FoodLogs
     * const { count } = await prisma.foodLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodLogDeleteManyArgs>(args?: SelectSubset<T, FoodLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodLogs
     * const foodLog = await prisma.foodLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodLogUpdateManyArgs>(args: SelectSubset<T, FoodLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FoodLog.
     * @param {FoodLogUpsertArgs} args - Arguments to update or create a FoodLog.
     * @example
     * // Update or create a FoodLog
     * const foodLog = await prisma.foodLog.upsert({
     *   create: {
     *     // ... data to create a FoodLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodLog we want to update
     *   }
     * })
     */
    upsert<T extends FoodLogUpsertArgs>(args: SelectSubset<T, FoodLogUpsertArgs<ExtArgs>>): Prisma__FoodLogClient<$Result.GetResult<Prisma.$FoodLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FoodLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodLogCountArgs} args - Arguments to filter FoodLogs to count.
     * @example
     * // Count the number of FoodLogs
     * const count = await prisma.foodLog.count({
     *   where: {
     *     // ... the filter for the FoodLogs we want to count
     *   }
     * })
    **/
    count<T extends FoodLogCountArgs>(
      args?: Subset<T, FoodLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoodLogAggregateArgs>(args: Subset<T, FoodLogAggregateArgs>): Prisma.PrismaPromise<GetFoodLogAggregateType<T>>

    /**
     * Group by FoodLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodLogGroupByArgs} args - Group by arguments.
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
      T extends FoodLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodLogGroupByArgs['orderBy'] }
        : { orderBy?: FoodLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FoodLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodLog model
   */
  readonly fields: FoodLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userActivityId<T extends FoodLog$userActivityIdArgs<ExtArgs> = {}>(args?: Subset<T, FoodLog$userActivityIdArgs<ExtArgs>>): Prisma__UserActivitesClient<$Result.GetResult<Prisma.$UserActivitesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FoodLog model
   */
  interface FoodLogFieldRefs {
    readonly id: FieldRef<"FoodLog", 'String'>
    readonly userId: FieldRef<"FoodLog", 'String'>
    readonly foodName: FieldRef<"FoodLog", 'String'>
    readonly calories: FieldRef<"FoodLog", 'Float'>
    readonly mealType: FieldRef<"FoodLog", 'String'>
    readonly createdAt: FieldRef<"FoodLog", 'DateTime'>
    readonly updatedAt: FieldRef<"FoodLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FoodLog findUnique
   */
  export type FoodLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodLog
     */
    select?: FoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodLog
     */
    omit?: FoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodLogInclude<ExtArgs> | null
    /**
     * Filter, which FoodLog to fetch.
     */
    where: FoodLogWhereUniqueInput
  }

  /**
   * FoodLog findUniqueOrThrow
   */
  export type FoodLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodLog
     */
    select?: FoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodLog
     */
    omit?: FoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodLogInclude<ExtArgs> | null
    /**
     * Filter, which FoodLog to fetch.
     */
    where: FoodLogWhereUniqueInput
  }

  /**
   * FoodLog findFirst
   */
  export type FoodLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodLog
     */
    select?: FoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodLog
     */
    omit?: FoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodLogInclude<ExtArgs> | null
    /**
     * Filter, which FoodLog to fetch.
     */
    where?: FoodLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodLogs to fetch.
     */
    orderBy?: FoodLogOrderByWithRelationInput | FoodLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodLogs.
     */
    cursor?: FoodLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodLogs.
     */
    distinct?: FoodLogScalarFieldEnum | FoodLogScalarFieldEnum[]
  }

  /**
   * FoodLog findFirstOrThrow
   */
  export type FoodLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodLog
     */
    select?: FoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodLog
     */
    omit?: FoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodLogInclude<ExtArgs> | null
    /**
     * Filter, which FoodLog to fetch.
     */
    where?: FoodLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodLogs to fetch.
     */
    orderBy?: FoodLogOrderByWithRelationInput | FoodLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodLogs.
     */
    cursor?: FoodLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodLogs.
     */
    distinct?: FoodLogScalarFieldEnum | FoodLogScalarFieldEnum[]
  }

  /**
   * FoodLog findMany
   */
  export type FoodLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodLog
     */
    select?: FoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodLog
     */
    omit?: FoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodLogInclude<ExtArgs> | null
    /**
     * Filter, which FoodLogs to fetch.
     */
    where?: FoodLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodLogs to fetch.
     */
    orderBy?: FoodLogOrderByWithRelationInput | FoodLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodLogs.
     */
    cursor?: FoodLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodLogs.
     */
    skip?: number
    distinct?: FoodLogScalarFieldEnum | FoodLogScalarFieldEnum[]
  }

  /**
   * FoodLog create
   */
  export type FoodLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodLog
     */
    select?: FoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodLog
     */
    omit?: FoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodLogInclude<ExtArgs> | null
    /**
     * The data needed to create a FoodLog.
     */
    data: XOR<FoodLogCreateInput, FoodLogUncheckedCreateInput>
  }

  /**
   * FoodLog createMany
   */
  export type FoodLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodLogs.
     */
    data: FoodLogCreateManyInput | FoodLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodLog update
   */
  export type FoodLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodLog
     */
    select?: FoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodLog
     */
    omit?: FoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodLogInclude<ExtArgs> | null
    /**
     * The data needed to update a FoodLog.
     */
    data: XOR<FoodLogUpdateInput, FoodLogUncheckedUpdateInput>
    /**
     * Choose, which FoodLog to update.
     */
    where: FoodLogWhereUniqueInput
  }

  /**
   * FoodLog updateMany
   */
  export type FoodLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodLogs.
     */
    data: XOR<FoodLogUpdateManyMutationInput, FoodLogUncheckedUpdateManyInput>
    /**
     * Filter which FoodLogs to update
     */
    where?: FoodLogWhereInput
    /**
     * Limit how many FoodLogs to update.
     */
    limit?: number
  }

  /**
   * FoodLog upsert
   */
  export type FoodLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodLog
     */
    select?: FoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodLog
     */
    omit?: FoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodLogInclude<ExtArgs> | null
    /**
     * The filter to search for the FoodLog to update in case it exists.
     */
    where: FoodLogWhereUniqueInput
    /**
     * In case the FoodLog found by the `where` argument doesn't exist, create a new FoodLog with this data.
     */
    create: XOR<FoodLogCreateInput, FoodLogUncheckedCreateInput>
    /**
     * In case the FoodLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodLogUpdateInput, FoodLogUncheckedUpdateInput>
  }

  /**
   * FoodLog delete
   */
  export type FoodLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodLog
     */
    select?: FoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodLog
     */
    omit?: FoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodLogInclude<ExtArgs> | null
    /**
     * Filter which FoodLog to delete.
     */
    where: FoodLogWhereUniqueInput
  }

  /**
   * FoodLog deleteMany
   */
  export type FoodLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodLogs to delete
     */
    where?: FoodLogWhereInput
    /**
     * Limit how many FoodLogs to delete.
     */
    limit?: number
  }

  /**
   * FoodLog.userActivityId
   */
  export type FoodLog$userActivityIdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivites
     */
    select?: UserActivitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivites
     */
    omit?: UserActivitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivitesInclude<ExtArgs> | null
    where?: UserActivitesWhereInput
  }

  /**
   * FoodLog without action
   */
  export type FoodLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodLog
     */
    select?: FoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodLog
     */
    omit?: FoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodLogInclude<ExtArgs> | null
  }


  /**
   * Model UserHydration
   */

  export type AggregateUserHydration = {
    _count: UserHydrationCountAggregateOutputType | null
    _min: UserHydrationMinAggregateOutputType | null
    _max: UserHydrationMaxAggregateOutputType | null
  }

  export type UserHydrationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    waterIntake: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserHydrationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    waterIntake: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserHydrationCountAggregateOutputType = {
    id: number
    userId: number
    waterIntake: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserHydrationMinAggregateInputType = {
    id?: true
    userId?: true
    waterIntake?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserHydrationMaxAggregateInputType = {
    id?: true
    userId?: true
    waterIntake?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserHydrationCountAggregateInputType = {
    id?: true
    userId?: true
    waterIntake?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserHydrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserHydration to aggregate.
     */
    where?: UserHydrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHydrations to fetch.
     */
    orderBy?: UserHydrationOrderByWithRelationInput | UserHydrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserHydrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHydrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHydrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserHydrations
    **/
    _count?: true | UserHydrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserHydrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserHydrationMaxAggregateInputType
  }

  export type GetUserHydrationAggregateType<T extends UserHydrationAggregateArgs> = {
        [P in keyof T & keyof AggregateUserHydration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserHydration[P]>
      : GetScalarType<T[P], AggregateUserHydration[P]>
  }




  export type UserHydrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserHydrationWhereInput
    orderBy?: UserHydrationOrderByWithAggregationInput | UserHydrationOrderByWithAggregationInput[]
    by: UserHydrationScalarFieldEnum[] | UserHydrationScalarFieldEnum
    having?: UserHydrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserHydrationCountAggregateInputType | true
    _min?: UserHydrationMinAggregateInputType
    _max?: UserHydrationMaxAggregateInputType
  }

  export type UserHydrationGroupByOutputType = {
    id: string
    userId: string
    waterIntake: string
    createdAt: Date
    updatedAt: Date
    _count: UserHydrationCountAggregateOutputType | null
    _min: UserHydrationMinAggregateOutputType | null
    _max: UserHydrationMaxAggregateOutputType | null
  }

  type GetUserHydrationGroupByPayload<T extends UserHydrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserHydrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserHydrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserHydrationGroupByOutputType[P]>
            : GetScalarType<T[P], UserHydrationGroupByOutputType[P]>
        }
      >
    >


  export type UserHydrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    waterIntake?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userActivity?: boolean | UserHydration$userActivityArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userHydration"]>



  export type UserHydrationSelectScalar = {
    id?: boolean
    userId?: boolean
    waterIntake?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserHydrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "waterIntake" | "createdAt" | "updatedAt", ExtArgs["result"]["userHydration"]>
  export type UserHydrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userActivity?: boolean | UserHydration$userActivityArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserHydrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserHydration"
    objects: {
      userActivity: Prisma.$UserActivitesPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      waterIntake: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userHydration"]>
    composites: {}
  }

  type UserHydrationGetPayload<S extends boolean | null | undefined | UserHydrationDefaultArgs> = $Result.GetResult<Prisma.$UserHydrationPayload, S>

  type UserHydrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserHydrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserHydrationCountAggregateInputType | true
    }

  export interface UserHydrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserHydration'], meta: { name: 'UserHydration' } }
    /**
     * Find zero or one UserHydration that matches the filter.
     * @param {UserHydrationFindUniqueArgs} args - Arguments to find a UserHydration
     * @example
     * // Get one UserHydration
     * const userHydration = await prisma.userHydration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserHydrationFindUniqueArgs>(args: SelectSubset<T, UserHydrationFindUniqueArgs<ExtArgs>>): Prisma__UserHydrationClient<$Result.GetResult<Prisma.$UserHydrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserHydration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserHydrationFindUniqueOrThrowArgs} args - Arguments to find a UserHydration
     * @example
     * // Get one UserHydration
     * const userHydration = await prisma.userHydration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserHydrationFindUniqueOrThrowArgs>(args: SelectSubset<T, UserHydrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserHydrationClient<$Result.GetResult<Prisma.$UserHydrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserHydration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHydrationFindFirstArgs} args - Arguments to find a UserHydration
     * @example
     * // Get one UserHydration
     * const userHydration = await prisma.userHydration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserHydrationFindFirstArgs>(args?: SelectSubset<T, UserHydrationFindFirstArgs<ExtArgs>>): Prisma__UserHydrationClient<$Result.GetResult<Prisma.$UserHydrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserHydration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHydrationFindFirstOrThrowArgs} args - Arguments to find a UserHydration
     * @example
     * // Get one UserHydration
     * const userHydration = await prisma.userHydration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserHydrationFindFirstOrThrowArgs>(args?: SelectSubset<T, UserHydrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserHydrationClient<$Result.GetResult<Prisma.$UserHydrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserHydrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHydrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserHydrations
     * const userHydrations = await prisma.userHydration.findMany()
     * 
     * // Get first 10 UserHydrations
     * const userHydrations = await prisma.userHydration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userHydrationWithIdOnly = await prisma.userHydration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserHydrationFindManyArgs>(args?: SelectSubset<T, UserHydrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHydrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserHydration.
     * @param {UserHydrationCreateArgs} args - Arguments to create a UserHydration.
     * @example
     * // Create one UserHydration
     * const UserHydration = await prisma.userHydration.create({
     *   data: {
     *     // ... data to create a UserHydration
     *   }
     * })
     * 
     */
    create<T extends UserHydrationCreateArgs>(args: SelectSubset<T, UserHydrationCreateArgs<ExtArgs>>): Prisma__UserHydrationClient<$Result.GetResult<Prisma.$UserHydrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserHydrations.
     * @param {UserHydrationCreateManyArgs} args - Arguments to create many UserHydrations.
     * @example
     * // Create many UserHydrations
     * const userHydration = await prisma.userHydration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserHydrationCreateManyArgs>(args?: SelectSubset<T, UserHydrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserHydration.
     * @param {UserHydrationDeleteArgs} args - Arguments to delete one UserHydration.
     * @example
     * // Delete one UserHydration
     * const UserHydration = await prisma.userHydration.delete({
     *   where: {
     *     // ... filter to delete one UserHydration
     *   }
     * })
     * 
     */
    delete<T extends UserHydrationDeleteArgs>(args: SelectSubset<T, UserHydrationDeleteArgs<ExtArgs>>): Prisma__UserHydrationClient<$Result.GetResult<Prisma.$UserHydrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserHydration.
     * @param {UserHydrationUpdateArgs} args - Arguments to update one UserHydration.
     * @example
     * // Update one UserHydration
     * const userHydration = await prisma.userHydration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserHydrationUpdateArgs>(args: SelectSubset<T, UserHydrationUpdateArgs<ExtArgs>>): Prisma__UserHydrationClient<$Result.GetResult<Prisma.$UserHydrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserHydrations.
     * @param {UserHydrationDeleteManyArgs} args - Arguments to filter UserHydrations to delete.
     * @example
     * // Delete a few UserHydrations
     * const { count } = await prisma.userHydration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserHydrationDeleteManyArgs>(args?: SelectSubset<T, UserHydrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserHydrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHydrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserHydrations
     * const userHydration = await prisma.userHydration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserHydrationUpdateManyArgs>(args: SelectSubset<T, UserHydrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserHydration.
     * @param {UserHydrationUpsertArgs} args - Arguments to update or create a UserHydration.
     * @example
     * // Update or create a UserHydration
     * const userHydration = await prisma.userHydration.upsert({
     *   create: {
     *     // ... data to create a UserHydration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserHydration we want to update
     *   }
     * })
     */
    upsert<T extends UserHydrationUpsertArgs>(args: SelectSubset<T, UserHydrationUpsertArgs<ExtArgs>>): Prisma__UserHydrationClient<$Result.GetResult<Prisma.$UserHydrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserHydrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHydrationCountArgs} args - Arguments to filter UserHydrations to count.
     * @example
     * // Count the number of UserHydrations
     * const count = await prisma.userHydration.count({
     *   where: {
     *     // ... the filter for the UserHydrations we want to count
     *   }
     * })
    **/
    count<T extends UserHydrationCountArgs>(
      args?: Subset<T, UserHydrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserHydrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserHydration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHydrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserHydrationAggregateArgs>(args: Subset<T, UserHydrationAggregateArgs>): Prisma.PrismaPromise<GetUserHydrationAggregateType<T>>

    /**
     * Group by UserHydration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHydrationGroupByArgs} args - Group by arguments.
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
      T extends UserHydrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserHydrationGroupByArgs['orderBy'] }
        : { orderBy?: UserHydrationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserHydrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserHydrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserHydration model
   */
  readonly fields: UserHydrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserHydration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserHydrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userActivity<T extends UserHydration$userActivityArgs<ExtArgs> = {}>(args?: Subset<T, UserHydration$userActivityArgs<ExtArgs>>): Prisma__UserActivitesClient<$Result.GetResult<Prisma.$UserActivitesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserHydration model
   */
  interface UserHydrationFieldRefs {
    readonly id: FieldRef<"UserHydration", 'String'>
    readonly userId: FieldRef<"UserHydration", 'String'>
    readonly waterIntake: FieldRef<"UserHydration", 'String'>
    readonly createdAt: FieldRef<"UserHydration", 'DateTime'>
    readonly updatedAt: FieldRef<"UserHydration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserHydration findUnique
   */
  export type UserHydrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHydration
     */
    select?: UserHydrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHydration
     */
    omit?: UserHydrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHydrationInclude<ExtArgs> | null
    /**
     * Filter, which UserHydration to fetch.
     */
    where: UserHydrationWhereUniqueInput
  }

  /**
   * UserHydration findUniqueOrThrow
   */
  export type UserHydrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHydration
     */
    select?: UserHydrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHydration
     */
    omit?: UserHydrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHydrationInclude<ExtArgs> | null
    /**
     * Filter, which UserHydration to fetch.
     */
    where: UserHydrationWhereUniqueInput
  }

  /**
   * UserHydration findFirst
   */
  export type UserHydrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHydration
     */
    select?: UserHydrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHydration
     */
    omit?: UserHydrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHydrationInclude<ExtArgs> | null
    /**
     * Filter, which UserHydration to fetch.
     */
    where?: UserHydrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHydrations to fetch.
     */
    orderBy?: UserHydrationOrderByWithRelationInput | UserHydrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserHydrations.
     */
    cursor?: UserHydrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHydrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHydrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserHydrations.
     */
    distinct?: UserHydrationScalarFieldEnum | UserHydrationScalarFieldEnum[]
  }

  /**
   * UserHydration findFirstOrThrow
   */
  export type UserHydrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHydration
     */
    select?: UserHydrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHydration
     */
    omit?: UserHydrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHydrationInclude<ExtArgs> | null
    /**
     * Filter, which UserHydration to fetch.
     */
    where?: UserHydrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHydrations to fetch.
     */
    orderBy?: UserHydrationOrderByWithRelationInput | UserHydrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserHydrations.
     */
    cursor?: UserHydrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHydrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHydrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserHydrations.
     */
    distinct?: UserHydrationScalarFieldEnum | UserHydrationScalarFieldEnum[]
  }

  /**
   * UserHydration findMany
   */
  export type UserHydrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHydration
     */
    select?: UserHydrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHydration
     */
    omit?: UserHydrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHydrationInclude<ExtArgs> | null
    /**
     * Filter, which UserHydrations to fetch.
     */
    where?: UserHydrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHydrations to fetch.
     */
    orderBy?: UserHydrationOrderByWithRelationInput | UserHydrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserHydrations.
     */
    cursor?: UserHydrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHydrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHydrations.
     */
    skip?: number
    distinct?: UserHydrationScalarFieldEnum | UserHydrationScalarFieldEnum[]
  }

  /**
   * UserHydration create
   */
  export type UserHydrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHydration
     */
    select?: UserHydrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHydration
     */
    omit?: UserHydrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHydrationInclude<ExtArgs> | null
    /**
     * The data needed to create a UserHydration.
     */
    data: XOR<UserHydrationCreateInput, UserHydrationUncheckedCreateInput>
  }

  /**
   * UserHydration createMany
   */
  export type UserHydrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserHydrations.
     */
    data: UserHydrationCreateManyInput | UserHydrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserHydration update
   */
  export type UserHydrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHydration
     */
    select?: UserHydrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHydration
     */
    omit?: UserHydrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHydrationInclude<ExtArgs> | null
    /**
     * The data needed to update a UserHydration.
     */
    data: XOR<UserHydrationUpdateInput, UserHydrationUncheckedUpdateInput>
    /**
     * Choose, which UserHydration to update.
     */
    where: UserHydrationWhereUniqueInput
  }

  /**
   * UserHydration updateMany
   */
  export type UserHydrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserHydrations.
     */
    data: XOR<UserHydrationUpdateManyMutationInput, UserHydrationUncheckedUpdateManyInput>
    /**
     * Filter which UserHydrations to update
     */
    where?: UserHydrationWhereInput
    /**
     * Limit how many UserHydrations to update.
     */
    limit?: number
  }

  /**
   * UserHydration upsert
   */
  export type UserHydrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHydration
     */
    select?: UserHydrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHydration
     */
    omit?: UserHydrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHydrationInclude<ExtArgs> | null
    /**
     * The filter to search for the UserHydration to update in case it exists.
     */
    where: UserHydrationWhereUniqueInput
    /**
     * In case the UserHydration found by the `where` argument doesn't exist, create a new UserHydration with this data.
     */
    create: XOR<UserHydrationCreateInput, UserHydrationUncheckedCreateInput>
    /**
     * In case the UserHydration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserHydrationUpdateInput, UserHydrationUncheckedUpdateInput>
  }

  /**
   * UserHydration delete
   */
  export type UserHydrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHydration
     */
    select?: UserHydrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHydration
     */
    omit?: UserHydrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHydrationInclude<ExtArgs> | null
    /**
     * Filter which UserHydration to delete.
     */
    where: UserHydrationWhereUniqueInput
  }

  /**
   * UserHydration deleteMany
   */
  export type UserHydrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserHydrations to delete
     */
    where?: UserHydrationWhereInput
    /**
     * Limit how many UserHydrations to delete.
     */
    limit?: number
  }

  /**
   * UserHydration.userActivity
   */
  export type UserHydration$userActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivites
     */
    select?: UserActivitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivites
     */
    omit?: UserActivitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivitesInclude<ExtArgs> | null
    where?: UserActivitesWhereInput
  }

  /**
   * UserHydration without action
   */
  export type UserHydrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHydration
     */
    select?: UserHydrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHydration
     */
    omit?: UserHydrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHydrationInclude<ExtArgs> | null
  }


  /**
   * Model SleepTracker
   */

  export type AggregateSleepTracker = {
    _count: SleepTrackerCountAggregateOutputType | null
    _avg: SleepTrackerAvgAggregateOutputType | null
    _sum: SleepTrackerSumAggregateOutputType | null
    _min: SleepTrackerMinAggregateOutputType | null
    _max: SleepTrackerMaxAggregateOutputType | null
  }

  export type SleepTrackerAvgAggregateOutputType = {
    duration: number | null
  }

  export type SleepTrackerSumAggregateOutputType = {
    duration: number | null
  }

  export type SleepTrackerMinAggregateOutputType = {
    id: string | null
    userId: string | null
    duration: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SleepTrackerMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    duration: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SleepTrackerCountAggregateOutputType = {
    id: number
    userId: number
    duration: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SleepTrackerAvgAggregateInputType = {
    duration?: true
  }

  export type SleepTrackerSumAggregateInputType = {
    duration?: true
  }

  export type SleepTrackerMinAggregateInputType = {
    id?: true
    userId?: true
    duration?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SleepTrackerMaxAggregateInputType = {
    id?: true
    userId?: true
    duration?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SleepTrackerCountAggregateInputType = {
    id?: true
    userId?: true
    duration?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SleepTrackerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SleepTracker to aggregate.
     */
    where?: SleepTrackerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SleepTrackers to fetch.
     */
    orderBy?: SleepTrackerOrderByWithRelationInput | SleepTrackerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SleepTrackerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SleepTrackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SleepTrackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SleepTrackers
    **/
    _count?: true | SleepTrackerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SleepTrackerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SleepTrackerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SleepTrackerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SleepTrackerMaxAggregateInputType
  }

  export type GetSleepTrackerAggregateType<T extends SleepTrackerAggregateArgs> = {
        [P in keyof T & keyof AggregateSleepTracker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSleepTracker[P]>
      : GetScalarType<T[P], AggregateSleepTracker[P]>
  }




  export type SleepTrackerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SleepTrackerWhereInput
    orderBy?: SleepTrackerOrderByWithAggregationInput | SleepTrackerOrderByWithAggregationInput[]
    by: SleepTrackerScalarFieldEnum[] | SleepTrackerScalarFieldEnum
    having?: SleepTrackerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SleepTrackerCountAggregateInputType | true
    _avg?: SleepTrackerAvgAggregateInputType
    _sum?: SleepTrackerSumAggregateInputType
    _min?: SleepTrackerMinAggregateInputType
    _max?: SleepTrackerMaxAggregateInputType
  }

  export type SleepTrackerGroupByOutputType = {
    id: string
    userId: string
    duration: number
    createdAt: Date
    updatedAt: Date
    _count: SleepTrackerCountAggregateOutputType | null
    _avg: SleepTrackerAvgAggregateOutputType | null
    _sum: SleepTrackerSumAggregateOutputType | null
    _min: SleepTrackerMinAggregateOutputType | null
    _max: SleepTrackerMaxAggregateOutputType | null
  }

  type GetSleepTrackerGroupByPayload<T extends SleepTrackerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SleepTrackerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SleepTrackerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SleepTrackerGroupByOutputType[P]>
            : GetScalarType<T[P], SleepTrackerGroupByOutputType[P]>
        }
      >
    >


  export type SleepTrackerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    duration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    userActivity?: boolean | SleepTracker$userActivityArgs<ExtArgs>
  }, ExtArgs["result"]["sleepTracker"]>



  export type SleepTrackerSelectScalar = {
    id?: boolean
    userId?: boolean
    duration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SleepTrackerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "duration" | "createdAt" | "updatedAt", ExtArgs["result"]["sleepTracker"]>
  export type SleepTrackerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    userActivity?: boolean | SleepTracker$userActivityArgs<ExtArgs>
  }

  export type $SleepTrackerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SleepTracker"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      userActivity: Prisma.$UserActivitesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      duration: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sleepTracker"]>
    composites: {}
  }

  type SleepTrackerGetPayload<S extends boolean | null | undefined | SleepTrackerDefaultArgs> = $Result.GetResult<Prisma.$SleepTrackerPayload, S>

  type SleepTrackerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SleepTrackerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SleepTrackerCountAggregateInputType | true
    }

  export interface SleepTrackerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SleepTracker'], meta: { name: 'SleepTracker' } }
    /**
     * Find zero or one SleepTracker that matches the filter.
     * @param {SleepTrackerFindUniqueArgs} args - Arguments to find a SleepTracker
     * @example
     * // Get one SleepTracker
     * const sleepTracker = await prisma.sleepTracker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SleepTrackerFindUniqueArgs>(args: SelectSubset<T, SleepTrackerFindUniqueArgs<ExtArgs>>): Prisma__SleepTrackerClient<$Result.GetResult<Prisma.$SleepTrackerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SleepTracker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SleepTrackerFindUniqueOrThrowArgs} args - Arguments to find a SleepTracker
     * @example
     * // Get one SleepTracker
     * const sleepTracker = await prisma.sleepTracker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SleepTrackerFindUniqueOrThrowArgs>(args: SelectSubset<T, SleepTrackerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SleepTrackerClient<$Result.GetResult<Prisma.$SleepTrackerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SleepTracker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleepTrackerFindFirstArgs} args - Arguments to find a SleepTracker
     * @example
     * // Get one SleepTracker
     * const sleepTracker = await prisma.sleepTracker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SleepTrackerFindFirstArgs>(args?: SelectSubset<T, SleepTrackerFindFirstArgs<ExtArgs>>): Prisma__SleepTrackerClient<$Result.GetResult<Prisma.$SleepTrackerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SleepTracker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleepTrackerFindFirstOrThrowArgs} args - Arguments to find a SleepTracker
     * @example
     * // Get one SleepTracker
     * const sleepTracker = await prisma.sleepTracker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SleepTrackerFindFirstOrThrowArgs>(args?: SelectSubset<T, SleepTrackerFindFirstOrThrowArgs<ExtArgs>>): Prisma__SleepTrackerClient<$Result.GetResult<Prisma.$SleepTrackerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SleepTrackers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleepTrackerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SleepTrackers
     * const sleepTrackers = await prisma.sleepTracker.findMany()
     * 
     * // Get first 10 SleepTrackers
     * const sleepTrackers = await prisma.sleepTracker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sleepTrackerWithIdOnly = await prisma.sleepTracker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SleepTrackerFindManyArgs>(args?: SelectSubset<T, SleepTrackerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SleepTrackerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SleepTracker.
     * @param {SleepTrackerCreateArgs} args - Arguments to create a SleepTracker.
     * @example
     * // Create one SleepTracker
     * const SleepTracker = await prisma.sleepTracker.create({
     *   data: {
     *     // ... data to create a SleepTracker
     *   }
     * })
     * 
     */
    create<T extends SleepTrackerCreateArgs>(args: SelectSubset<T, SleepTrackerCreateArgs<ExtArgs>>): Prisma__SleepTrackerClient<$Result.GetResult<Prisma.$SleepTrackerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SleepTrackers.
     * @param {SleepTrackerCreateManyArgs} args - Arguments to create many SleepTrackers.
     * @example
     * // Create many SleepTrackers
     * const sleepTracker = await prisma.sleepTracker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SleepTrackerCreateManyArgs>(args?: SelectSubset<T, SleepTrackerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SleepTracker.
     * @param {SleepTrackerDeleteArgs} args - Arguments to delete one SleepTracker.
     * @example
     * // Delete one SleepTracker
     * const SleepTracker = await prisma.sleepTracker.delete({
     *   where: {
     *     // ... filter to delete one SleepTracker
     *   }
     * })
     * 
     */
    delete<T extends SleepTrackerDeleteArgs>(args: SelectSubset<T, SleepTrackerDeleteArgs<ExtArgs>>): Prisma__SleepTrackerClient<$Result.GetResult<Prisma.$SleepTrackerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SleepTracker.
     * @param {SleepTrackerUpdateArgs} args - Arguments to update one SleepTracker.
     * @example
     * // Update one SleepTracker
     * const sleepTracker = await prisma.sleepTracker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SleepTrackerUpdateArgs>(args: SelectSubset<T, SleepTrackerUpdateArgs<ExtArgs>>): Prisma__SleepTrackerClient<$Result.GetResult<Prisma.$SleepTrackerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SleepTrackers.
     * @param {SleepTrackerDeleteManyArgs} args - Arguments to filter SleepTrackers to delete.
     * @example
     * // Delete a few SleepTrackers
     * const { count } = await prisma.sleepTracker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SleepTrackerDeleteManyArgs>(args?: SelectSubset<T, SleepTrackerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SleepTrackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleepTrackerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SleepTrackers
     * const sleepTracker = await prisma.sleepTracker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SleepTrackerUpdateManyArgs>(args: SelectSubset<T, SleepTrackerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SleepTracker.
     * @param {SleepTrackerUpsertArgs} args - Arguments to update or create a SleepTracker.
     * @example
     * // Update or create a SleepTracker
     * const sleepTracker = await prisma.sleepTracker.upsert({
     *   create: {
     *     // ... data to create a SleepTracker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SleepTracker we want to update
     *   }
     * })
     */
    upsert<T extends SleepTrackerUpsertArgs>(args: SelectSubset<T, SleepTrackerUpsertArgs<ExtArgs>>): Prisma__SleepTrackerClient<$Result.GetResult<Prisma.$SleepTrackerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SleepTrackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleepTrackerCountArgs} args - Arguments to filter SleepTrackers to count.
     * @example
     * // Count the number of SleepTrackers
     * const count = await prisma.sleepTracker.count({
     *   where: {
     *     // ... the filter for the SleepTrackers we want to count
     *   }
     * })
    **/
    count<T extends SleepTrackerCountArgs>(
      args?: Subset<T, SleepTrackerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SleepTrackerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SleepTracker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleepTrackerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SleepTrackerAggregateArgs>(args: Subset<T, SleepTrackerAggregateArgs>): Prisma.PrismaPromise<GetSleepTrackerAggregateType<T>>

    /**
     * Group by SleepTracker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SleepTrackerGroupByArgs} args - Group by arguments.
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
      T extends SleepTrackerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SleepTrackerGroupByArgs['orderBy'] }
        : { orderBy?: SleepTrackerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SleepTrackerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSleepTrackerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SleepTracker model
   */
  readonly fields: SleepTrackerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SleepTracker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SleepTrackerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userActivity<T extends SleepTracker$userActivityArgs<ExtArgs> = {}>(args?: Subset<T, SleepTracker$userActivityArgs<ExtArgs>>): Prisma__UserActivitesClient<$Result.GetResult<Prisma.$UserActivitesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SleepTracker model
   */
  interface SleepTrackerFieldRefs {
    readonly id: FieldRef<"SleepTracker", 'String'>
    readonly userId: FieldRef<"SleepTracker", 'String'>
    readonly duration: FieldRef<"SleepTracker", 'Float'>
    readonly createdAt: FieldRef<"SleepTracker", 'DateTime'>
    readonly updatedAt: FieldRef<"SleepTracker", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SleepTracker findUnique
   */
  export type SleepTrackerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleepTracker
     */
    select?: SleepTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleepTracker
     */
    omit?: SleepTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SleepTrackerInclude<ExtArgs> | null
    /**
     * Filter, which SleepTracker to fetch.
     */
    where: SleepTrackerWhereUniqueInput
  }

  /**
   * SleepTracker findUniqueOrThrow
   */
  export type SleepTrackerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleepTracker
     */
    select?: SleepTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleepTracker
     */
    omit?: SleepTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SleepTrackerInclude<ExtArgs> | null
    /**
     * Filter, which SleepTracker to fetch.
     */
    where: SleepTrackerWhereUniqueInput
  }

  /**
   * SleepTracker findFirst
   */
  export type SleepTrackerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleepTracker
     */
    select?: SleepTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleepTracker
     */
    omit?: SleepTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SleepTrackerInclude<ExtArgs> | null
    /**
     * Filter, which SleepTracker to fetch.
     */
    where?: SleepTrackerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SleepTrackers to fetch.
     */
    orderBy?: SleepTrackerOrderByWithRelationInput | SleepTrackerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SleepTrackers.
     */
    cursor?: SleepTrackerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SleepTrackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SleepTrackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SleepTrackers.
     */
    distinct?: SleepTrackerScalarFieldEnum | SleepTrackerScalarFieldEnum[]
  }

  /**
   * SleepTracker findFirstOrThrow
   */
  export type SleepTrackerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleepTracker
     */
    select?: SleepTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleepTracker
     */
    omit?: SleepTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SleepTrackerInclude<ExtArgs> | null
    /**
     * Filter, which SleepTracker to fetch.
     */
    where?: SleepTrackerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SleepTrackers to fetch.
     */
    orderBy?: SleepTrackerOrderByWithRelationInput | SleepTrackerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SleepTrackers.
     */
    cursor?: SleepTrackerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SleepTrackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SleepTrackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SleepTrackers.
     */
    distinct?: SleepTrackerScalarFieldEnum | SleepTrackerScalarFieldEnum[]
  }

  /**
   * SleepTracker findMany
   */
  export type SleepTrackerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleepTracker
     */
    select?: SleepTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleepTracker
     */
    omit?: SleepTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SleepTrackerInclude<ExtArgs> | null
    /**
     * Filter, which SleepTrackers to fetch.
     */
    where?: SleepTrackerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SleepTrackers to fetch.
     */
    orderBy?: SleepTrackerOrderByWithRelationInput | SleepTrackerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SleepTrackers.
     */
    cursor?: SleepTrackerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SleepTrackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SleepTrackers.
     */
    skip?: number
    distinct?: SleepTrackerScalarFieldEnum | SleepTrackerScalarFieldEnum[]
  }

  /**
   * SleepTracker create
   */
  export type SleepTrackerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleepTracker
     */
    select?: SleepTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleepTracker
     */
    omit?: SleepTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SleepTrackerInclude<ExtArgs> | null
    /**
     * The data needed to create a SleepTracker.
     */
    data: XOR<SleepTrackerCreateInput, SleepTrackerUncheckedCreateInput>
  }

  /**
   * SleepTracker createMany
   */
  export type SleepTrackerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SleepTrackers.
     */
    data: SleepTrackerCreateManyInput | SleepTrackerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SleepTracker update
   */
  export type SleepTrackerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleepTracker
     */
    select?: SleepTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleepTracker
     */
    omit?: SleepTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SleepTrackerInclude<ExtArgs> | null
    /**
     * The data needed to update a SleepTracker.
     */
    data: XOR<SleepTrackerUpdateInput, SleepTrackerUncheckedUpdateInput>
    /**
     * Choose, which SleepTracker to update.
     */
    where: SleepTrackerWhereUniqueInput
  }

  /**
   * SleepTracker updateMany
   */
  export type SleepTrackerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SleepTrackers.
     */
    data: XOR<SleepTrackerUpdateManyMutationInput, SleepTrackerUncheckedUpdateManyInput>
    /**
     * Filter which SleepTrackers to update
     */
    where?: SleepTrackerWhereInput
    /**
     * Limit how many SleepTrackers to update.
     */
    limit?: number
  }

  /**
   * SleepTracker upsert
   */
  export type SleepTrackerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleepTracker
     */
    select?: SleepTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleepTracker
     */
    omit?: SleepTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SleepTrackerInclude<ExtArgs> | null
    /**
     * The filter to search for the SleepTracker to update in case it exists.
     */
    where: SleepTrackerWhereUniqueInput
    /**
     * In case the SleepTracker found by the `where` argument doesn't exist, create a new SleepTracker with this data.
     */
    create: XOR<SleepTrackerCreateInput, SleepTrackerUncheckedCreateInput>
    /**
     * In case the SleepTracker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SleepTrackerUpdateInput, SleepTrackerUncheckedUpdateInput>
  }

  /**
   * SleepTracker delete
   */
  export type SleepTrackerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleepTracker
     */
    select?: SleepTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleepTracker
     */
    omit?: SleepTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SleepTrackerInclude<ExtArgs> | null
    /**
     * Filter which SleepTracker to delete.
     */
    where: SleepTrackerWhereUniqueInput
  }

  /**
   * SleepTracker deleteMany
   */
  export type SleepTrackerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SleepTrackers to delete
     */
    where?: SleepTrackerWhereInput
    /**
     * Limit how many SleepTrackers to delete.
     */
    limit?: number
  }

  /**
   * SleepTracker.userActivity
   */
  export type SleepTracker$userActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivites
     */
    select?: UserActivitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivites
     */
    omit?: UserActivitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivitesInclude<ExtArgs> | null
    where?: UserActivitesWhereInput
  }

  /**
   * SleepTracker without action
   */
  export type SleepTrackerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleepTracker
     */
    select?: SleepTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleepTracker
     */
    omit?: SleepTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SleepTrackerInclude<ExtArgs> | null
  }


  /**
   * Model UserActivites
   */

  export type AggregateUserActivites = {
    _count: UserActivitesCountAggregateOutputType | null
    _avg: UserActivitesAvgAggregateOutputType | null
    _sum: UserActivitesSumAggregateOutputType | null
    _min: UserActivitesMinAggregateOutputType | null
    _max: UserActivitesMaxAggregateOutputType | null
  }

  export type UserActivitesAvgAggregateOutputType = {
    stepsCount: number | null
  }

  export type UserActivitesSumAggregateOutputType = {
    stepsCount: number | null
  }

  export type UserActivitesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    category: $Enums.ACTIVITY_TYPE | null
    title: string | null
    stepsCount: number | null
    effectToBody: string | null
    sleepTrackerId: string | null
    userHydrationId: string | null
    stepTrackerId: string | null
    foodLogId: string | null
    physicalActivityLogId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserActivitesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    category: $Enums.ACTIVITY_TYPE | null
    title: string | null
    stepsCount: number | null
    effectToBody: string | null
    sleepTrackerId: string | null
    userHydrationId: string | null
    stepTrackerId: string | null
    foodLogId: string | null
    physicalActivityLogId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserActivitesCountAggregateOutputType = {
    id: number
    userId: number
    category: number
    title: number
    stepsCount: number
    effectToBody: number
    sleepTrackerId: number
    userHydrationId: number
    stepTrackerId: number
    foodLogId: number
    physicalActivityLogId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserActivitesAvgAggregateInputType = {
    stepsCount?: true
  }

  export type UserActivitesSumAggregateInputType = {
    stepsCount?: true
  }

  export type UserActivitesMinAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    title?: true
    stepsCount?: true
    effectToBody?: true
    sleepTrackerId?: true
    userHydrationId?: true
    stepTrackerId?: true
    foodLogId?: true
    physicalActivityLogId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserActivitesMaxAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    title?: true
    stepsCount?: true
    effectToBody?: true
    sleepTrackerId?: true
    userHydrationId?: true
    stepTrackerId?: true
    foodLogId?: true
    physicalActivityLogId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserActivitesCountAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    title?: true
    stepsCount?: true
    effectToBody?: true
    sleepTrackerId?: true
    userHydrationId?: true
    stepTrackerId?: true
    foodLogId?: true
    physicalActivityLogId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserActivitesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserActivites to aggregate.
     */
    where?: UserActivitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserActivites to fetch.
     */
    orderBy?: UserActivitesOrderByWithRelationInput | UserActivitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserActivitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserActivites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserActivites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserActivites
    **/
    _count?: true | UserActivitesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserActivitesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserActivitesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserActivitesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserActivitesMaxAggregateInputType
  }

  export type GetUserActivitesAggregateType<T extends UserActivitesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserActivites]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserActivites[P]>
      : GetScalarType<T[P], AggregateUserActivites[P]>
  }




  export type UserActivitesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserActivitesWhereInput
    orderBy?: UserActivitesOrderByWithAggregationInput | UserActivitesOrderByWithAggregationInput[]
    by: UserActivitesScalarFieldEnum[] | UserActivitesScalarFieldEnum
    having?: UserActivitesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserActivitesCountAggregateInputType | true
    _avg?: UserActivitesAvgAggregateInputType
    _sum?: UserActivitesSumAggregateInputType
    _min?: UserActivitesMinAggregateInputType
    _max?: UserActivitesMaxAggregateInputType
  }

  export type UserActivitesGroupByOutputType = {
    id: string
    userId: string
    category: $Enums.ACTIVITY_TYPE
    title: string
    stepsCount: number | null
    effectToBody: string | null
    sleepTrackerId: string | null
    userHydrationId: string | null
    stepTrackerId: string | null
    foodLogId: string | null
    physicalActivityLogId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserActivitesCountAggregateOutputType | null
    _avg: UserActivitesAvgAggregateOutputType | null
    _sum: UserActivitesSumAggregateOutputType | null
    _min: UserActivitesMinAggregateOutputType | null
    _max: UserActivitesMaxAggregateOutputType | null
  }

  type GetUserActivitesGroupByPayload<T extends UserActivitesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserActivitesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserActivitesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserActivitesGroupByOutputType[P]>
            : GetScalarType<T[P], UserActivitesGroupByOutputType[P]>
        }
      >
    >


  export type UserActivitesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    category?: boolean
    title?: boolean
    stepsCount?: boolean
    effectToBody?: boolean
    sleepTrackerId?: boolean
    userHydrationId?: boolean
    stepTrackerId?: boolean
    foodLogId?: boolean
    physicalActivityLogId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sleepTracker?: boolean | UserActivites$sleepTrackerArgs<ExtArgs>
    userHydration?: boolean | UserActivites$userHydrationArgs<ExtArgs>
    foodLog?: boolean | UserActivites$foodLogArgs<ExtArgs>
    physicalActivityLog?: boolean | UserActivites$physicalActivityLogArgs<ExtArgs>
  }, ExtArgs["result"]["userActivites"]>



  export type UserActivitesSelectScalar = {
    id?: boolean
    userId?: boolean
    category?: boolean
    title?: boolean
    stepsCount?: boolean
    effectToBody?: boolean
    sleepTrackerId?: boolean
    userHydrationId?: boolean
    stepTrackerId?: boolean
    foodLogId?: boolean
    physicalActivityLogId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserActivitesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "category" | "title" | "stepsCount" | "effectToBody" | "sleepTrackerId" | "userHydrationId" | "stepTrackerId" | "foodLogId" | "physicalActivityLogId" | "createdAt" | "updatedAt", ExtArgs["result"]["userActivites"]>
  export type UserActivitesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sleepTracker?: boolean | UserActivites$sleepTrackerArgs<ExtArgs>
    userHydration?: boolean | UserActivites$userHydrationArgs<ExtArgs>
    foodLog?: boolean | UserActivites$foodLogArgs<ExtArgs>
    physicalActivityLog?: boolean | UserActivites$physicalActivityLogArgs<ExtArgs>
  }

  export type $UserActivitesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserActivites"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sleepTracker: Prisma.$SleepTrackerPayload<ExtArgs> | null
      userHydration: Prisma.$UserHydrationPayload<ExtArgs> | null
      foodLog: Prisma.$FoodLogPayload<ExtArgs> | null
      physicalActivityLog: Prisma.$PhysicalActivityLogPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      category: $Enums.ACTIVITY_TYPE
      title: string
      stepsCount: number | null
      effectToBody: string | null
      sleepTrackerId: string | null
      userHydrationId: string | null
      stepTrackerId: string | null
      foodLogId: string | null
      physicalActivityLogId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userActivites"]>
    composites: {}
  }

  type UserActivitesGetPayload<S extends boolean | null | undefined | UserActivitesDefaultArgs> = $Result.GetResult<Prisma.$UserActivitesPayload, S>

  type UserActivitesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserActivitesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserActivitesCountAggregateInputType | true
    }

  export interface UserActivitesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserActivites'], meta: { name: 'UserActivites' } }
    /**
     * Find zero or one UserActivites that matches the filter.
     * @param {UserActivitesFindUniqueArgs} args - Arguments to find a UserActivites
     * @example
     * // Get one UserActivites
     * const userActivites = await prisma.userActivites.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserActivitesFindUniqueArgs>(args: SelectSubset<T, UserActivitesFindUniqueArgs<ExtArgs>>): Prisma__UserActivitesClient<$Result.GetResult<Prisma.$UserActivitesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserActivites that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserActivitesFindUniqueOrThrowArgs} args - Arguments to find a UserActivites
     * @example
     * // Get one UserActivites
     * const userActivites = await prisma.userActivites.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserActivitesFindUniqueOrThrowArgs>(args: SelectSubset<T, UserActivitesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserActivitesClient<$Result.GetResult<Prisma.$UserActivitesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserActivites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivitesFindFirstArgs} args - Arguments to find a UserActivites
     * @example
     * // Get one UserActivites
     * const userActivites = await prisma.userActivites.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserActivitesFindFirstArgs>(args?: SelectSubset<T, UserActivitesFindFirstArgs<ExtArgs>>): Prisma__UserActivitesClient<$Result.GetResult<Prisma.$UserActivitesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserActivites that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivitesFindFirstOrThrowArgs} args - Arguments to find a UserActivites
     * @example
     * // Get one UserActivites
     * const userActivites = await prisma.userActivites.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserActivitesFindFirstOrThrowArgs>(args?: SelectSubset<T, UserActivitesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserActivitesClient<$Result.GetResult<Prisma.$UserActivitesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserActivites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivitesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserActivites
     * const userActivites = await prisma.userActivites.findMany()
     * 
     * // Get first 10 UserActivites
     * const userActivites = await prisma.userActivites.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userActivitesWithIdOnly = await prisma.userActivites.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserActivitesFindManyArgs>(args?: SelectSubset<T, UserActivitesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserActivitesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserActivites.
     * @param {UserActivitesCreateArgs} args - Arguments to create a UserActivites.
     * @example
     * // Create one UserActivites
     * const UserActivites = await prisma.userActivites.create({
     *   data: {
     *     // ... data to create a UserActivites
     *   }
     * })
     * 
     */
    create<T extends UserActivitesCreateArgs>(args: SelectSubset<T, UserActivitesCreateArgs<ExtArgs>>): Prisma__UserActivitesClient<$Result.GetResult<Prisma.$UserActivitesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserActivites.
     * @param {UserActivitesCreateManyArgs} args - Arguments to create many UserActivites.
     * @example
     * // Create many UserActivites
     * const userActivites = await prisma.userActivites.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserActivitesCreateManyArgs>(args?: SelectSubset<T, UserActivitesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserActivites.
     * @param {UserActivitesDeleteArgs} args - Arguments to delete one UserActivites.
     * @example
     * // Delete one UserActivites
     * const UserActivites = await prisma.userActivites.delete({
     *   where: {
     *     // ... filter to delete one UserActivites
     *   }
     * })
     * 
     */
    delete<T extends UserActivitesDeleteArgs>(args: SelectSubset<T, UserActivitesDeleteArgs<ExtArgs>>): Prisma__UserActivitesClient<$Result.GetResult<Prisma.$UserActivitesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserActivites.
     * @param {UserActivitesUpdateArgs} args - Arguments to update one UserActivites.
     * @example
     * // Update one UserActivites
     * const userActivites = await prisma.userActivites.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserActivitesUpdateArgs>(args: SelectSubset<T, UserActivitesUpdateArgs<ExtArgs>>): Prisma__UserActivitesClient<$Result.GetResult<Prisma.$UserActivitesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserActivites.
     * @param {UserActivitesDeleteManyArgs} args - Arguments to filter UserActivites to delete.
     * @example
     * // Delete a few UserActivites
     * const { count } = await prisma.userActivites.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserActivitesDeleteManyArgs>(args?: SelectSubset<T, UserActivitesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserActivites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivitesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserActivites
     * const userActivites = await prisma.userActivites.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserActivitesUpdateManyArgs>(args: SelectSubset<T, UserActivitesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserActivites.
     * @param {UserActivitesUpsertArgs} args - Arguments to update or create a UserActivites.
     * @example
     * // Update or create a UserActivites
     * const userActivites = await prisma.userActivites.upsert({
     *   create: {
     *     // ... data to create a UserActivites
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserActivites we want to update
     *   }
     * })
     */
    upsert<T extends UserActivitesUpsertArgs>(args: SelectSubset<T, UserActivitesUpsertArgs<ExtArgs>>): Prisma__UserActivitesClient<$Result.GetResult<Prisma.$UserActivitesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserActivites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivitesCountArgs} args - Arguments to filter UserActivites to count.
     * @example
     * // Count the number of UserActivites
     * const count = await prisma.userActivites.count({
     *   where: {
     *     // ... the filter for the UserActivites we want to count
     *   }
     * })
    **/
    count<T extends UserActivitesCountArgs>(
      args?: Subset<T, UserActivitesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserActivitesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserActivites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivitesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserActivitesAggregateArgs>(args: Subset<T, UserActivitesAggregateArgs>): Prisma.PrismaPromise<GetUserActivitesAggregateType<T>>

    /**
     * Group by UserActivites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivitesGroupByArgs} args - Group by arguments.
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
      T extends UserActivitesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserActivitesGroupByArgs['orderBy'] }
        : { orderBy?: UserActivitesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserActivitesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserActivitesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserActivites model
   */
  readonly fields: UserActivitesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserActivites.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserActivitesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sleepTracker<T extends UserActivites$sleepTrackerArgs<ExtArgs> = {}>(args?: Subset<T, UserActivites$sleepTrackerArgs<ExtArgs>>): Prisma__SleepTrackerClient<$Result.GetResult<Prisma.$SleepTrackerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    userHydration<T extends UserActivites$userHydrationArgs<ExtArgs> = {}>(args?: Subset<T, UserActivites$userHydrationArgs<ExtArgs>>): Prisma__UserHydrationClient<$Result.GetResult<Prisma.$UserHydrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    foodLog<T extends UserActivites$foodLogArgs<ExtArgs> = {}>(args?: Subset<T, UserActivites$foodLogArgs<ExtArgs>>): Prisma__FoodLogClient<$Result.GetResult<Prisma.$FoodLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    physicalActivityLog<T extends UserActivites$physicalActivityLogArgs<ExtArgs> = {}>(args?: Subset<T, UserActivites$physicalActivityLogArgs<ExtArgs>>): Prisma__PhysicalActivityLogClient<$Result.GetResult<Prisma.$PhysicalActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserActivites model
   */
  interface UserActivitesFieldRefs {
    readonly id: FieldRef<"UserActivites", 'String'>
    readonly userId: FieldRef<"UserActivites", 'String'>
    readonly category: FieldRef<"UserActivites", 'ACTIVITY_TYPE'>
    readonly title: FieldRef<"UserActivites", 'String'>
    readonly stepsCount: FieldRef<"UserActivites", 'Float'>
    readonly effectToBody: FieldRef<"UserActivites", 'String'>
    readonly sleepTrackerId: FieldRef<"UserActivites", 'String'>
    readonly userHydrationId: FieldRef<"UserActivites", 'String'>
    readonly stepTrackerId: FieldRef<"UserActivites", 'String'>
    readonly foodLogId: FieldRef<"UserActivites", 'String'>
    readonly physicalActivityLogId: FieldRef<"UserActivites", 'String'>
    readonly createdAt: FieldRef<"UserActivites", 'DateTime'>
    readonly updatedAt: FieldRef<"UserActivites", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserActivites findUnique
   */
  export type UserActivitesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivites
     */
    select?: UserActivitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivites
     */
    omit?: UserActivitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivitesInclude<ExtArgs> | null
    /**
     * Filter, which UserActivites to fetch.
     */
    where: UserActivitesWhereUniqueInput
  }

  /**
   * UserActivites findUniqueOrThrow
   */
  export type UserActivitesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivites
     */
    select?: UserActivitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivites
     */
    omit?: UserActivitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivitesInclude<ExtArgs> | null
    /**
     * Filter, which UserActivites to fetch.
     */
    where: UserActivitesWhereUniqueInput
  }

  /**
   * UserActivites findFirst
   */
  export type UserActivitesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivites
     */
    select?: UserActivitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivites
     */
    omit?: UserActivitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivitesInclude<ExtArgs> | null
    /**
     * Filter, which UserActivites to fetch.
     */
    where?: UserActivitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserActivites to fetch.
     */
    orderBy?: UserActivitesOrderByWithRelationInput | UserActivitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserActivites.
     */
    cursor?: UserActivitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserActivites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserActivites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserActivites.
     */
    distinct?: UserActivitesScalarFieldEnum | UserActivitesScalarFieldEnum[]
  }

  /**
   * UserActivites findFirstOrThrow
   */
  export type UserActivitesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivites
     */
    select?: UserActivitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivites
     */
    omit?: UserActivitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivitesInclude<ExtArgs> | null
    /**
     * Filter, which UserActivites to fetch.
     */
    where?: UserActivitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserActivites to fetch.
     */
    orderBy?: UserActivitesOrderByWithRelationInput | UserActivitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserActivites.
     */
    cursor?: UserActivitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserActivites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserActivites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserActivites.
     */
    distinct?: UserActivitesScalarFieldEnum | UserActivitesScalarFieldEnum[]
  }

  /**
   * UserActivites findMany
   */
  export type UserActivitesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivites
     */
    select?: UserActivitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivites
     */
    omit?: UserActivitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivitesInclude<ExtArgs> | null
    /**
     * Filter, which UserActivites to fetch.
     */
    where?: UserActivitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserActivites to fetch.
     */
    orderBy?: UserActivitesOrderByWithRelationInput | UserActivitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserActivites.
     */
    cursor?: UserActivitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserActivites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserActivites.
     */
    skip?: number
    distinct?: UserActivitesScalarFieldEnum | UserActivitesScalarFieldEnum[]
  }

  /**
   * UserActivites create
   */
  export type UserActivitesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivites
     */
    select?: UserActivitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivites
     */
    omit?: UserActivitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivitesInclude<ExtArgs> | null
    /**
     * The data needed to create a UserActivites.
     */
    data: XOR<UserActivitesCreateInput, UserActivitesUncheckedCreateInput>
  }

  /**
   * UserActivites createMany
   */
  export type UserActivitesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserActivites.
     */
    data: UserActivitesCreateManyInput | UserActivitesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserActivites update
   */
  export type UserActivitesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivites
     */
    select?: UserActivitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivites
     */
    omit?: UserActivitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivitesInclude<ExtArgs> | null
    /**
     * The data needed to update a UserActivites.
     */
    data: XOR<UserActivitesUpdateInput, UserActivitesUncheckedUpdateInput>
    /**
     * Choose, which UserActivites to update.
     */
    where: UserActivitesWhereUniqueInput
  }

  /**
   * UserActivites updateMany
   */
  export type UserActivitesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserActivites.
     */
    data: XOR<UserActivitesUpdateManyMutationInput, UserActivitesUncheckedUpdateManyInput>
    /**
     * Filter which UserActivites to update
     */
    where?: UserActivitesWhereInput
    /**
     * Limit how many UserActivites to update.
     */
    limit?: number
  }

  /**
   * UserActivites upsert
   */
  export type UserActivitesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivites
     */
    select?: UserActivitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivites
     */
    omit?: UserActivitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivitesInclude<ExtArgs> | null
    /**
     * The filter to search for the UserActivites to update in case it exists.
     */
    where: UserActivitesWhereUniqueInput
    /**
     * In case the UserActivites found by the `where` argument doesn't exist, create a new UserActivites with this data.
     */
    create: XOR<UserActivitesCreateInput, UserActivitesUncheckedCreateInput>
    /**
     * In case the UserActivites was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserActivitesUpdateInput, UserActivitesUncheckedUpdateInput>
  }

  /**
   * UserActivites delete
   */
  export type UserActivitesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivites
     */
    select?: UserActivitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivites
     */
    omit?: UserActivitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivitesInclude<ExtArgs> | null
    /**
     * Filter which UserActivites to delete.
     */
    where: UserActivitesWhereUniqueInput
  }

  /**
   * UserActivites deleteMany
   */
  export type UserActivitesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserActivites to delete
     */
    where?: UserActivitesWhereInput
    /**
     * Limit how many UserActivites to delete.
     */
    limit?: number
  }

  /**
   * UserActivites.sleepTracker
   */
  export type UserActivites$sleepTrackerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SleepTracker
     */
    select?: SleepTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SleepTracker
     */
    omit?: SleepTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SleepTrackerInclude<ExtArgs> | null
    where?: SleepTrackerWhereInput
  }

  /**
   * UserActivites.userHydration
   */
  export type UserActivites$userHydrationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHydration
     */
    select?: UserHydrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHydration
     */
    omit?: UserHydrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHydrationInclude<ExtArgs> | null
    where?: UserHydrationWhereInput
  }

  /**
   * UserActivites.foodLog
   */
  export type UserActivites$foodLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodLog
     */
    select?: FoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodLog
     */
    omit?: FoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodLogInclude<ExtArgs> | null
    where?: FoodLogWhereInput
  }

  /**
   * UserActivites.physicalActivityLog
   */
  export type UserActivites$physicalActivityLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhysicalActivityLog
     */
    select?: PhysicalActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhysicalActivityLog
     */
    omit?: PhysicalActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhysicalActivityLogInclude<ExtArgs> | null
    where?: PhysicalActivityLogWhereInput
  }

  /**
   * UserActivites without action
   */
  export type UserActivitesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivites
     */
    select?: UserActivitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserActivites
     */
    omit?: UserActivitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivitesInclude<ExtArgs> | null
  }


  /**
   * Model Chatbot
   */

  export type AggregateChatbot = {
    _count: ChatbotCountAggregateOutputType | null
    _min: ChatbotMinAggregateOutputType | null
    _max: ChatbotMaxAggregateOutputType | null
  }

  export type ChatbotMinAggregateOutputType = {
    id: string | null
    userId: string | null
    payload: string | null
    sender: $Enums.SENDER | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatbotMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    payload: string | null
    sender: $Enums.SENDER | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatbotCountAggregateOutputType = {
    id: number
    userId: number
    payload: number
    sender: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatbotMinAggregateInputType = {
    id?: true
    userId?: true
    payload?: true
    sender?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatbotMaxAggregateInputType = {
    id?: true
    userId?: true
    payload?: true
    sender?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatbotCountAggregateInputType = {
    id?: true
    userId?: true
    payload?: true
    sender?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatbotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chatbot to aggregate.
     */
    where?: ChatbotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chatbots to fetch.
     */
    orderBy?: ChatbotOrderByWithRelationInput | ChatbotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatbotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chatbots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chatbots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chatbots
    **/
    _count?: true | ChatbotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatbotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatbotMaxAggregateInputType
  }

  export type GetChatbotAggregateType<T extends ChatbotAggregateArgs> = {
        [P in keyof T & keyof AggregateChatbot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatbot[P]>
      : GetScalarType<T[P], AggregateChatbot[P]>
  }




  export type ChatbotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatbotWhereInput
    orderBy?: ChatbotOrderByWithAggregationInput | ChatbotOrderByWithAggregationInput[]
    by: ChatbotScalarFieldEnum[] | ChatbotScalarFieldEnum
    having?: ChatbotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatbotCountAggregateInputType | true
    _min?: ChatbotMinAggregateInputType
    _max?: ChatbotMaxAggregateInputType
  }

  export type ChatbotGroupByOutputType = {
    id: string
    userId: string
    payload: string | null
    sender: $Enums.SENDER
    createdAt: Date
    updatedAt: Date
    _count: ChatbotCountAggregateOutputType | null
    _min: ChatbotMinAggregateOutputType | null
    _max: ChatbotMaxAggregateOutputType | null
  }

  type GetChatbotGroupByPayload<T extends ChatbotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatbotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatbotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatbotGroupByOutputType[P]>
            : GetScalarType<T[P], ChatbotGroupByOutputType[P]>
        }
      >
    >


  export type ChatbotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    payload?: boolean
    sender?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatbot"]>



  export type ChatbotSelectScalar = {
    id?: boolean
    userId?: boolean
    payload?: boolean
    sender?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatbotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "payload" | "sender" | "createdAt" | "updatedAt", ExtArgs["result"]["chatbot"]>
  export type ChatbotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatbotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chatbot"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      payload: string | null
      sender: $Enums.SENDER
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatbot"]>
    composites: {}
  }

  type ChatbotGetPayload<S extends boolean | null | undefined | ChatbotDefaultArgs> = $Result.GetResult<Prisma.$ChatbotPayload, S>

  type ChatbotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatbotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatbotCountAggregateInputType | true
    }

  export interface ChatbotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chatbot'], meta: { name: 'Chatbot' } }
    /**
     * Find zero or one Chatbot that matches the filter.
     * @param {ChatbotFindUniqueArgs} args - Arguments to find a Chatbot
     * @example
     * // Get one Chatbot
     * const chatbot = await prisma.chatbot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatbotFindUniqueArgs>(args: SelectSubset<T, ChatbotFindUniqueArgs<ExtArgs>>): Prisma__ChatbotClient<$Result.GetResult<Prisma.$ChatbotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chatbot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatbotFindUniqueOrThrowArgs} args - Arguments to find a Chatbot
     * @example
     * // Get one Chatbot
     * const chatbot = await prisma.chatbot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatbotFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatbotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatbotClient<$Result.GetResult<Prisma.$ChatbotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chatbot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotFindFirstArgs} args - Arguments to find a Chatbot
     * @example
     * // Get one Chatbot
     * const chatbot = await prisma.chatbot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatbotFindFirstArgs>(args?: SelectSubset<T, ChatbotFindFirstArgs<ExtArgs>>): Prisma__ChatbotClient<$Result.GetResult<Prisma.$ChatbotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chatbot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotFindFirstOrThrowArgs} args - Arguments to find a Chatbot
     * @example
     * // Get one Chatbot
     * const chatbot = await prisma.chatbot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatbotFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatbotFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatbotClient<$Result.GetResult<Prisma.$ChatbotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chatbots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chatbots
     * const chatbots = await prisma.chatbot.findMany()
     * 
     * // Get first 10 Chatbots
     * const chatbots = await prisma.chatbot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatbotWithIdOnly = await prisma.chatbot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatbotFindManyArgs>(args?: SelectSubset<T, ChatbotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatbotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chatbot.
     * @param {ChatbotCreateArgs} args - Arguments to create a Chatbot.
     * @example
     * // Create one Chatbot
     * const Chatbot = await prisma.chatbot.create({
     *   data: {
     *     // ... data to create a Chatbot
     *   }
     * })
     * 
     */
    create<T extends ChatbotCreateArgs>(args: SelectSubset<T, ChatbotCreateArgs<ExtArgs>>): Prisma__ChatbotClient<$Result.GetResult<Prisma.$ChatbotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chatbots.
     * @param {ChatbotCreateManyArgs} args - Arguments to create many Chatbots.
     * @example
     * // Create many Chatbots
     * const chatbot = await prisma.chatbot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatbotCreateManyArgs>(args?: SelectSubset<T, ChatbotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chatbot.
     * @param {ChatbotDeleteArgs} args - Arguments to delete one Chatbot.
     * @example
     * // Delete one Chatbot
     * const Chatbot = await prisma.chatbot.delete({
     *   where: {
     *     // ... filter to delete one Chatbot
     *   }
     * })
     * 
     */
    delete<T extends ChatbotDeleteArgs>(args: SelectSubset<T, ChatbotDeleteArgs<ExtArgs>>): Prisma__ChatbotClient<$Result.GetResult<Prisma.$ChatbotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chatbot.
     * @param {ChatbotUpdateArgs} args - Arguments to update one Chatbot.
     * @example
     * // Update one Chatbot
     * const chatbot = await prisma.chatbot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatbotUpdateArgs>(args: SelectSubset<T, ChatbotUpdateArgs<ExtArgs>>): Prisma__ChatbotClient<$Result.GetResult<Prisma.$ChatbotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chatbots.
     * @param {ChatbotDeleteManyArgs} args - Arguments to filter Chatbots to delete.
     * @example
     * // Delete a few Chatbots
     * const { count } = await prisma.chatbot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatbotDeleteManyArgs>(args?: SelectSubset<T, ChatbotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chatbots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chatbots
     * const chatbot = await prisma.chatbot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatbotUpdateManyArgs>(args: SelectSubset<T, ChatbotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chatbot.
     * @param {ChatbotUpsertArgs} args - Arguments to update or create a Chatbot.
     * @example
     * // Update or create a Chatbot
     * const chatbot = await prisma.chatbot.upsert({
     *   create: {
     *     // ... data to create a Chatbot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chatbot we want to update
     *   }
     * })
     */
    upsert<T extends ChatbotUpsertArgs>(args: SelectSubset<T, ChatbotUpsertArgs<ExtArgs>>): Prisma__ChatbotClient<$Result.GetResult<Prisma.$ChatbotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chatbots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotCountArgs} args - Arguments to filter Chatbots to count.
     * @example
     * // Count the number of Chatbots
     * const count = await prisma.chatbot.count({
     *   where: {
     *     // ... the filter for the Chatbots we want to count
     *   }
     * })
    **/
    count<T extends ChatbotCountArgs>(
      args?: Subset<T, ChatbotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatbotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chatbot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatbotAggregateArgs>(args: Subset<T, ChatbotAggregateArgs>): Prisma.PrismaPromise<GetChatbotAggregateType<T>>

    /**
     * Group by Chatbot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotGroupByArgs} args - Group by arguments.
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
      T extends ChatbotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatbotGroupByArgs['orderBy'] }
        : { orderBy?: ChatbotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatbotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatbotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chatbot model
   */
  readonly fields: ChatbotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chatbot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatbotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Chatbot model
   */
  interface ChatbotFieldRefs {
    readonly id: FieldRef<"Chatbot", 'String'>
    readonly userId: FieldRef<"Chatbot", 'String'>
    readonly payload: FieldRef<"Chatbot", 'String'>
    readonly sender: FieldRef<"Chatbot", 'SENDER'>
    readonly createdAt: FieldRef<"Chatbot", 'DateTime'>
    readonly updatedAt: FieldRef<"Chatbot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chatbot findUnique
   */
  export type ChatbotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot
     */
    select?: ChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot
     */
    omit?: ChatbotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotInclude<ExtArgs> | null
    /**
     * Filter, which Chatbot to fetch.
     */
    where: ChatbotWhereUniqueInput
  }

  /**
   * Chatbot findUniqueOrThrow
   */
  export type ChatbotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot
     */
    select?: ChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot
     */
    omit?: ChatbotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotInclude<ExtArgs> | null
    /**
     * Filter, which Chatbot to fetch.
     */
    where: ChatbotWhereUniqueInput
  }

  /**
   * Chatbot findFirst
   */
  export type ChatbotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot
     */
    select?: ChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot
     */
    omit?: ChatbotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotInclude<ExtArgs> | null
    /**
     * Filter, which Chatbot to fetch.
     */
    where?: ChatbotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chatbots to fetch.
     */
    orderBy?: ChatbotOrderByWithRelationInput | ChatbotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chatbots.
     */
    cursor?: ChatbotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chatbots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chatbots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chatbots.
     */
    distinct?: ChatbotScalarFieldEnum | ChatbotScalarFieldEnum[]
  }

  /**
   * Chatbot findFirstOrThrow
   */
  export type ChatbotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot
     */
    select?: ChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot
     */
    omit?: ChatbotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotInclude<ExtArgs> | null
    /**
     * Filter, which Chatbot to fetch.
     */
    where?: ChatbotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chatbots to fetch.
     */
    orderBy?: ChatbotOrderByWithRelationInput | ChatbotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chatbots.
     */
    cursor?: ChatbotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chatbots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chatbots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chatbots.
     */
    distinct?: ChatbotScalarFieldEnum | ChatbotScalarFieldEnum[]
  }

  /**
   * Chatbot findMany
   */
  export type ChatbotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot
     */
    select?: ChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot
     */
    omit?: ChatbotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotInclude<ExtArgs> | null
    /**
     * Filter, which Chatbots to fetch.
     */
    where?: ChatbotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chatbots to fetch.
     */
    orderBy?: ChatbotOrderByWithRelationInput | ChatbotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chatbots.
     */
    cursor?: ChatbotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chatbots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chatbots.
     */
    skip?: number
    distinct?: ChatbotScalarFieldEnum | ChatbotScalarFieldEnum[]
  }

  /**
   * Chatbot create
   */
  export type ChatbotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot
     */
    select?: ChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot
     */
    omit?: ChatbotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotInclude<ExtArgs> | null
    /**
     * The data needed to create a Chatbot.
     */
    data: XOR<ChatbotCreateInput, ChatbotUncheckedCreateInput>
  }

  /**
   * Chatbot createMany
   */
  export type ChatbotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chatbots.
     */
    data: ChatbotCreateManyInput | ChatbotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chatbot update
   */
  export type ChatbotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot
     */
    select?: ChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot
     */
    omit?: ChatbotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotInclude<ExtArgs> | null
    /**
     * The data needed to update a Chatbot.
     */
    data: XOR<ChatbotUpdateInput, ChatbotUncheckedUpdateInput>
    /**
     * Choose, which Chatbot to update.
     */
    where: ChatbotWhereUniqueInput
  }

  /**
   * Chatbot updateMany
   */
  export type ChatbotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chatbots.
     */
    data: XOR<ChatbotUpdateManyMutationInput, ChatbotUncheckedUpdateManyInput>
    /**
     * Filter which Chatbots to update
     */
    where?: ChatbotWhereInput
    /**
     * Limit how many Chatbots to update.
     */
    limit?: number
  }

  /**
   * Chatbot upsert
   */
  export type ChatbotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot
     */
    select?: ChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot
     */
    omit?: ChatbotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotInclude<ExtArgs> | null
    /**
     * The filter to search for the Chatbot to update in case it exists.
     */
    where: ChatbotWhereUniqueInput
    /**
     * In case the Chatbot found by the `where` argument doesn't exist, create a new Chatbot with this data.
     */
    create: XOR<ChatbotCreateInput, ChatbotUncheckedCreateInput>
    /**
     * In case the Chatbot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatbotUpdateInput, ChatbotUncheckedUpdateInput>
  }

  /**
   * Chatbot delete
   */
  export type ChatbotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot
     */
    select?: ChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot
     */
    omit?: ChatbotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotInclude<ExtArgs> | null
    /**
     * Filter which Chatbot to delete.
     */
    where: ChatbotWhereUniqueInput
  }

  /**
   * Chatbot deleteMany
   */
  export type ChatbotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chatbots to delete
     */
    where?: ChatbotWhereInput
    /**
     * Limit how many Chatbots to delete.
     */
    limit?: number
  }

  /**
   * Chatbot without action
   */
  export type ChatbotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot
     */
    select?: ChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot
     */
    omit?: ChatbotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotInclude<ExtArgs> | null
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
    emailVerified: 'emailVerified',
    image: 'image',
    password: 'password',
    username: 'username',
    lastSeen: 'lastSeen',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const AuthenticatorScalarFieldEnum: {
    credentialID: 'credentialID',
    userId: 'userId',
    providerAccountId: 'providerAccountId',
    credentialPublicKey: 'credentialPublicKey',
    counter: 'counter',
    credentialDeviceType: 'credentialDeviceType',
    credentialBackedUp: 'credentialBackedUp',
    transports: 'transports'
  };

  export type AuthenticatorScalarFieldEnum = (typeof AuthenticatorScalarFieldEnum)[keyof typeof AuthenticatorScalarFieldEnum]


  export const UserCharacteristicsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gender: 'gender',
    age: 'age',
    height: 'height',
    currentWeight: 'currentWeight',
    activityFactor: 'activityFactor',
    mealsPerDay: 'mealsPerDay',
    sleepHours: 'sleepHours',
    workoutsPerWeek: 'workoutsPerWeek',
    manualCalorieAdjustment: 'manualCalorieAdjustment',
    bmi: 'bmi',
    tdee: 'tdee',
    bmr: 'bmr',
    bodyFatPercentage: 'bodyFatPercentage',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserCharacteristicsScalarFieldEnum = (typeof UserCharacteristicsScalarFieldEnum)[keyof typeof UserCharacteristicsScalarFieldEnum]


  export const UserGoalScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    goal: 'goal',
    deficitPerDay: 'deficitPerDay',
    targetTime: 'targetTime',
    hydrationNeeds: 'hydrationNeeds',
    targetWeight: 'targetWeight',
    totalDeficit: 'totalDeficit',
    stepNeeds: 'stepNeeds',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserGoalScalarFieldEnum = (typeof UserGoalScalarFieldEnum)[keyof typeof UserGoalScalarFieldEnum]


  export const PhysicalActivityLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    duration: 'duration',
    caloriesBurned: 'caloriesBurned',
    createdAt: 'createdAt'
  };

  export type PhysicalActivityLogScalarFieldEnum = (typeof PhysicalActivityLogScalarFieldEnum)[keyof typeof PhysicalActivityLogScalarFieldEnum]


  export const ActivityTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    duration: 'duration',
    metValue: 'metValue',
    physicalActivityId: 'physicalActivityId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ActivityTypeScalarFieldEnum = (typeof ActivityTypeScalarFieldEnum)[keyof typeof ActivityTypeScalarFieldEnum]


  export const FoodLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    foodName: 'foodName',
    calories: 'calories',
    mealType: 'mealType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FoodLogScalarFieldEnum = (typeof FoodLogScalarFieldEnum)[keyof typeof FoodLogScalarFieldEnum]


  export const UserHydrationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    waterIntake: 'waterIntake',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserHydrationScalarFieldEnum = (typeof UserHydrationScalarFieldEnum)[keyof typeof UserHydrationScalarFieldEnum]


  export const SleepTrackerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    duration: 'duration',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SleepTrackerScalarFieldEnum = (typeof SleepTrackerScalarFieldEnum)[keyof typeof SleepTrackerScalarFieldEnum]


  export const UserActivitesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    category: 'category',
    title: 'title',
    stepsCount: 'stepsCount',
    effectToBody: 'effectToBody',
    sleepTrackerId: 'sleepTrackerId',
    userHydrationId: 'userHydrationId',
    stepTrackerId: 'stepTrackerId',
    foodLogId: 'foodLogId',
    physicalActivityLogId: 'physicalActivityLogId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserActivitesScalarFieldEnum = (typeof UserActivitesScalarFieldEnum)[keyof typeof UserActivitesScalarFieldEnum]


  export const ChatbotScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    payload: 'payload',
    sender: 'sender',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatbotScalarFieldEnum = (typeof ChatbotScalarFieldEnum)[keyof typeof ChatbotScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    image: 'image',
    password: 'password',
    username: 'username'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const AccountOrderByRelevanceFieldEnum: {
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountOrderByRelevanceFieldEnum = (typeof AccountOrderByRelevanceFieldEnum)[keyof typeof AccountOrderByRelevanceFieldEnum]


  export const SessionOrderByRelevanceFieldEnum: {
    sessionToken: 'sessionToken',
    userId: 'userId'
  };

  export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum]


  export const VerificationTokenOrderByRelevanceFieldEnum: {
    identifier: 'identifier',
    token: 'token'
  };

  export type VerificationTokenOrderByRelevanceFieldEnum = (typeof VerificationTokenOrderByRelevanceFieldEnum)[keyof typeof VerificationTokenOrderByRelevanceFieldEnum]


  export const AuthenticatorOrderByRelevanceFieldEnum: {
    credentialID: 'credentialID',
    userId: 'userId',
    providerAccountId: 'providerAccountId',
    credentialPublicKey: 'credentialPublicKey',
    credentialDeviceType: 'credentialDeviceType',
    transports: 'transports'
  };

  export type AuthenticatorOrderByRelevanceFieldEnum = (typeof AuthenticatorOrderByRelevanceFieldEnum)[keyof typeof AuthenticatorOrderByRelevanceFieldEnum]


  export const UserCharacteristicsOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    gender: 'gender',
    age: 'age',
    height: 'height',
    currentWeight: 'currentWeight',
    activityFactor: 'activityFactor',
    mealsPerDay: 'mealsPerDay',
    sleepHours: 'sleepHours',
    workoutsPerWeek: 'workoutsPerWeek',
    manualCalorieAdjustment: 'manualCalorieAdjustment',
    bmi: 'bmi',
    tdee: 'tdee',
    bmr: 'bmr',
    bodyFatPercentage: 'bodyFatPercentage'
  };

  export type UserCharacteristicsOrderByRelevanceFieldEnum = (typeof UserCharacteristicsOrderByRelevanceFieldEnum)[keyof typeof UserCharacteristicsOrderByRelevanceFieldEnum]


  export const UserGoalOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    goal: 'goal',
    deficitPerDay: 'deficitPerDay',
    targetTime: 'targetTime',
    hydrationNeeds: 'hydrationNeeds',
    targetWeight: 'targetWeight',
    totalDeficit: 'totalDeficit',
    stepNeeds: 'stepNeeds'
  };

  export type UserGoalOrderByRelevanceFieldEnum = (typeof UserGoalOrderByRelevanceFieldEnum)[keyof typeof UserGoalOrderByRelevanceFieldEnum]


  export const PhysicalActivityLogOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type PhysicalActivityLogOrderByRelevanceFieldEnum = (typeof PhysicalActivityLogOrderByRelevanceFieldEnum)[keyof typeof PhysicalActivityLogOrderByRelevanceFieldEnum]


  export const ActivityTypeOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    physicalActivityId: 'physicalActivityId'
  };

  export type ActivityTypeOrderByRelevanceFieldEnum = (typeof ActivityTypeOrderByRelevanceFieldEnum)[keyof typeof ActivityTypeOrderByRelevanceFieldEnum]


  export const FoodLogOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    foodName: 'foodName',
    mealType: 'mealType'
  };

  export type FoodLogOrderByRelevanceFieldEnum = (typeof FoodLogOrderByRelevanceFieldEnum)[keyof typeof FoodLogOrderByRelevanceFieldEnum]


  export const UserHydrationOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    waterIntake: 'waterIntake'
  };

  export type UserHydrationOrderByRelevanceFieldEnum = (typeof UserHydrationOrderByRelevanceFieldEnum)[keyof typeof UserHydrationOrderByRelevanceFieldEnum]


  export const SleepTrackerOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type SleepTrackerOrderByRelevanceFieldEnum = (typeof SleepTrackerOrderByRelevanceFieldEnum)[keyof typeof SleepTrackerOrderByRelevanceFieldEnum]


  export const UserActivitesOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    effectToBody: 'effectToBody',
    sleepTrackerId: 'sleepTrackerId',
    userHydrationId: 'userHydrationId',
    stepTrackerId: 'stepTrackerId',
    foodLogId: 'foodLogId',
    physicalActivityLogId: 'physicalActivityLogId'
  };

  export type UserActivitesOrderByRelevanceFieldEnum = (typeof UserActivitesOrderByRelevanceFieldEnum)[keyof typeof UserActivitesOrderByRelevanceFieldEnum]


  export const ChatbotOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    payload: 'payload'
  };

  export type ChatbotOrderByRelevanceFieldEnum = (typeof ChatbotOrderByRelevanceFieldEnum)[keyof typeof ChatbotOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'ACTIVITY_TYPE'
   */
  export type EnumACTIVITY_TYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ACTIVITY_TYPE'>
    


  /**
   * Reference to a field of type 'SENDER'
   */
  export type EnumSENDERFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SENDER'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    lastSeen?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    Authenticator?: AuthenticatorListRelationFilter
    Chatbot?: ChatbotListRelationFilter
    UserCharacteristic?: UserCharacteristicsListRelationFilter
    PhysicalActivityLog?: PhysicalActivityLogListRelationFilter
    UserActivites?: UserActivitesListRelationFilter
    FoodLog?: FoodLogListRelationFilter
    UserHydration?: UserHydrationListRelationFilter
    SleepTracker?: SleepTrackerListRelationFilter
    UserGoal?: XOR<UserGoalNullableScalarRelationFilter, UserGoalWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    lastSeen?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    Authenticator?: AuthenticatorOrderByRelationAggregateInput
    Chatbot?: ChatbotOrderByRelationAggregateInput
    UserCharacteristic?: UserCharacteristicsOrderByRelationAggregateInput
    PhysicalActivityLog?: PhysicalActivityLogOrderByRelationAggregateInput
    UserActivites?: UserActivitesOrderByRelationAggregateInput
    FoodLog?: FoodLogOrderByRelationAggregateInput
    UserHydration?: UserHydrationOrderByRelationAggregateInput
    SleepTracker?: SleepTrackerOrderByRelationAggregateInput
    UserGoal?: UserGoalOrderByWithRelationInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    lastSeen?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    Authenticator?: AuthenticatorListRelationFilter
    Chatbot?: ChatbotListRelationFilter
    UserCharacteristic?: UserCharacteristicsListRelationFilter
    PhysicalActivityLog?: PhysicalActivityLogListRelationFilter
    UserActivites?: UserActivitesListRelationFilter
    FoodLog?: FoodLogListRelationFilter
    UserHydration?: UserHydrationListRelationFilter
    SleepTracker?: SleepTrackerListRelationFilter
    UserGoal?: XOR<UserGoalNullableScalarRelationFilter, UserGoalWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    lastSeen?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastSeen?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: AccountOrderByRelevanceInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: SessionOrderByRelevanceInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _relevance?: VerificationTokenOrderByRelevanceInput
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type AuthenticatorWhereInput = {
    AND?: AuthenticatorWhereInput | AuthenticatorWhereInput[]
    OR?: AuthenticatorWhereInput[]
    NOT?: AuthenticatorWhereInput | AuthenticatorWhereInput[]
    credentialID?: StringFilter<"Authenticator"> | string
    userId?: StringFilter<"Authenticator"> | string
    providerAccountId?: StringFilter<"Authenticator"> | string
    credentialPublicKey?: StringFilter<"Authenticator"> | string
    counter?: IntFilter<"Authenticator"> | number
    credentialDeviceType?: StringFilter<"Authenticator"> | string
    credentialBackedUp?: BoolFilter<"Authenticator"> | boolean
    transports?: StringNullableFilter<"Authenticator"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuthenticatorOrderByWithRelationInput = {
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: AuthenticatorOrderByRelevanceInput
  }

  export type AuthenticatorWhereUniqueInput = Prisma.AtLeast<{
    credentialID?: string
    userId_credentialID?: AuthenticatorUserIdCredentialIDCompoundUniqueInput
    AND?: AuthenticatorWhereInput | AuthenticatorWhereInput[]
    OR?: AuthenticatorWhereInput[]
    NOT?: AuthenticatorWhereInput | AuthenticatorWhereInput[]
    userId?: StringFilter<"Authenticator"> | string
    providerAccountId?: StringFilter<"Authenticator"> | string
    credentialPublicKey?: StringFilter<"Authenticator"> | string
    counter?: IntFilter<"Authenticator"> | number
    credentialDeviceType?: StringFilter<"Authenticator"> | string
    credentialBackedUp?: BoolFilter<"Authenticator"> | boolean
    transports?: StringNullableFilter<"Authenticator"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId_credentialID" | "credentialID">

  export type AuthenticatorOrderByWithAggregationInput = {
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrderInput | SortOrder
    _count?: AuthenticatorCountOrderByAggregateInput
    _avg?: AuthenticatorAvgOrderByAggregateInput
    _max?: AuthenticatorMaxOrderByAggregateInput
    _min?: AuthenticatorMinOrderByAggregateInput
    _sum?: AuthenticatorSumOrderByAggregateInput
  }

  export type AuthenticatorScalarWhereWithAggregatesInput = {
    AND?: AuthenticatorScalarWhereWithAggregatesInput | AuthenticatorScalarWhereWithAggregatesInput[]
    OR?: AuthenticatorScalarWhereWithAggregatesInput[]
    NOT?: AuthenticatorScalarWhereWithAggregatesInput | AuthenticatorScalarWhereWithAggregatesInput[]
    credentialID?: StringWithAggregatesFilter<"Authenticator"> | string
    userId?: StringWithAggregatesFilter<"Authenticator"> | string
    providerAccountId?: StringWithAggregatesFilter<"Authenticator"> | string
    credentialPublicKey?: StringWithAggregatesFilter<"Authenticator"> | string
    counter?: IntWithAggregatesFilter<"Authenticator"> | number
    credentialDeviceType?: StringWithAggregatesFilter<"Authenticator"> | string
    credentialBackedUp?: BoolWithAggregatesFilter<"Authenticator"> | boolean
    transports?: StringNullableWithAggregatesFilter<"Authenticator"> | string | null
  }

  export type UserCharacteristicsWhereInput = {
    AND?: UserCharacteristicsWhereInput | UserCharacteristicsWhereInput[]
    OR?: UserCharacteristicsWhereInput[]
    NOT?: UserCharacteristicsWhereInput | UserCharacteristicsWhereInput[]
    id?: StringFilter<"UserCharacteristics"> | string
    userId?: StringFilter<"UserCharacteristics"> | string
    gender?: StringFilter<"UserCharacteristics"> | string
    age?: StringFilter<"UserCharacteristics"> | string
    height?: StringFilter<"UserCharacteristics"> | string
    currentWeight?: StringFilter<"UserCharacteristics"> | string
    activityFactor?: StringFilter<"UserCharacteristics"> | string
    mealsPerDay?: StringFilter<"UserCharacteristics"> | string
    sleepHours?: StringFilter<"UserCharacteristics"> | string
    workoutsPerWeek?: StringFilter<"UserCharacteristics"> | string
    manualCalorieAdjustment?: StringNullableFilter<"UserCharacteristics"> | string | null
    bmi?: StringNullableFilter<"UserCharacteristics"> | string | null
    tdee?: StringNullableFilter<"UserCharacteristics"> | string | null
    bmr?: StringNullableFilter<"UserCharacteristics"> | string | null
    bodyFatPercentage?: StringNullableFilter<"UserCharacteristics"> | string | null
    isDeleted?: BoolFilter<"UserCharacteristics"> | boolean
    createdAt?: DateTimeFilter<"UserCharacteristics"> | Date | string
    updatedAt?: DateTimeFilter<"UserCharacteristics"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserCharacteristicsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    height?: SortOrder
    currentWeight?: SortOrder
    activityFactor?: SortOrder
    mealsPerDay?: SortOrder
    sleepHours?: SortOrder
    workoutsPerWeek?: SortOrder
    manualCalorieAdjustment?: SortOrderInput | SortOrder
    bmi?: SortOrderInput | SortOrder
    tdee?: SortOrderInput | SortOrder
    bmr?: SortOrderInput | SortOrder
    bodyFatPercentage?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: UserCharacteristicsOrderByRelevanceInput
  }

  export type UserCharacteristicsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserCharacteristicsWhereInput | UserCharacteristicsWhereInput[]
    OR?: UserCharacteristicsWhereInput[]
    NOT?: UserCharacteristicsWhereInput | UserCharacteristicsWhereInput[]
    userId?: StringFilter<"UserCharacteristics"> | string
    gender?: StringFilter<"UserCharacteristics"> | string
    age?: StringFilter<"UserCharacteristics"> | string
    height?: StringFilter<"UserCharacteristics"> | string
    currentWeight?: StringFilter<"UserCharacteristics"> | string
    activityFactor?: StringFilter<"UserCharacteristics"> | string
    mealsPerDay?: StringFilter<"UserCharacteristics"> | string
    sleepHours?: StringFilter<"UserCharacteristics"> | string
    workoutsPerWeek?: StringFilter<"UserCharacteristics"> | string
    manualCalorieAdjustment?: StringNullableFilter<"UserCharacteristics"> | string | null
    bmi?: StringNullableFilter<"UserCharacteristics"> | string | null
    tdee?: StringNullableFilter<"UserCharacteristics"> | string | null
    bmr?: StringNullableFilter<"UserCharacteristics"> | string | null
    bodyFatPercentage?: StringNullableFilter<"UserCharacteristics"> | string | null
    isDeleted?: BoolFilter<"UserCharacteristics"> | boolean
    createdAt?: DateTimeFilter<"UserCharacteristics"> | Date | string
    updatedAt?: DateTimeFilter<"UserCharacteristics"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserCharacteristicsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    height?: SortOrder
    currentWeight?: SortOrder
    activityFactor?: SortOrder
    mealsPerDay?: SortOrder
    sleepHours?: SortOrder
    workoutsPerWeek?: SortOrder
    manualCalorieAdjustment?: SortOrderInput | SortOrder
    bmi?: SortOrderInput | SortOrder
    tdee?: SortOrderInput | SortOrder
    bmr?: SortOrderInput | SortOrder
    bodyFatPercentage?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCharacteristicsCountOrderByAggregateInput
    _max?: UserCharacteristicsMaxOrderByAggregateInput
    _min?: UserCharacteristicsMinOrderByAggregateInput
  }

  export type UserCharacteristicsScalarWhereWithAggregatesInput = {
    AND?: UserCharacteristicsScalarWhereWithAggregatesInput | UserCharacteristicsScalarWhereWithAggregatesInput[]
    OR?: UserCharacteristicsScalarWhereWithAggregatesInput[]
    NOT?: UserCharacteristicsScalarWhereWithAggregatesInput | UserCharacteristicsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserCharacteristics"> | string
    userId?: StringWithAggregatesFilter<"UserCharacteristics"> | string
    gender?: StringWithAggregatesFilter<"UserCharacteristics"> | string
    age?: StringWithAggregatesFilter<"UserCharacteristics"> | string
    height?: StringWithAggregatesFilter<"UserCharacteristics"> | string
    currentWeight?: StringWithAggregatesFilter<"UserCharacteristics"> | string
    activityFactor?: StringWithAggregatesFilter<"UserCharacteristics"> | string
    mealsPerDay?: StringWithAggregatesFilter<"UserCharacteristics"> | string
    sleepHours?: StringWithAggregatesFilter<"UserCharacteristics"> | string
    workoutsPerWeek?: StringWithAggregatesFilter<"UserCharacteristics"> | string
    manualCalorieAdjustment?: StringNullableWithAggregatesFilter<"UserCharacteristics"> | string | null
    bmi?: StringNullableWithAggregatesFilter<"UserCharacteristics"> | string | null
    tdee?: StringNullableWithAggregatesFilter<"UserCharacteristics"> | string | null
    bmr?: StringNullableWithAggregatesFilter<"UserCharacteristics"> | string | null
    bodyFatPercentage?: StringNullableWithAggregatesFilter<"UserCharacteristics"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"UserCharacteristics"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserCharacteristics"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserCharacteristics"> | Date | string
  }

  export type UserGoalWhereInput = {
    AND?: UserGoalWhereInput | UserGoalWhereInput[]
    OR?: UserGoalWhereInput[]
    NOT?: UserGoalWhereInput | UserGoalWhereInput[]
    id?: StringFilter<"UserGoal"> | string
    userId?: StringFilter<"UserGoal"> | string
    goal?: StringFilter<"UserGoal"> | string
    deficitPerDay?: StringFilter<"UserGoal"> | string
    targetTime?: StringNullableFilter<"UserGoal"> | string | null
    hydrationNeeds?: StringFilter<"UserGoal"> | string
    targetWeight?: StringFilter<"UserGoal"> | string
    totalDeficit?: StringFilter<"UserGoal"> | string
    stepNeeds?: StringFilter<"UserGoal"> | string
    createdAt?: DateTimeFilter<"UserGoal"> | Date | string
    updatedAt?: DateTimeFilter<"UserGoal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserGoalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    goal?: SortOrder
    deficitPerDay?: SortOrder
    targetTime?: SortOrderInput | SortOrder
    hydrationNeeds?: SortOrder
    targetWeight?: SortOrder
    totalDeficit?: SortOrder
    stepNeeds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: UserGoalOrderByRelevanceInput
  }

  export type UserGoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserGoalWhereInput | UserGoalWhereInput[]
    OR?: UserGoalWhereInput[]
    NOT?: UserGoalWhereInput | UserGoalWhereInput[]
    goal?: StringFilter<"UserGoal"> | string
    deficitPerDay?: StringFilter<"UserGoal"> | string
    targetTime?: StringNullableFilter<"UserGoal"> | string | null
    hydrationNeeds?: StringFilter<"UserGoal"> | string
    targetWeight?: StringFilter<"UserGoal"> | string
    totalDeficit?: StringFilter<"UserGoal"> | string
    stepNeeds?: StringFilter<"UserGoal"> | string
    createdAt?: DateTimeFilter<"UserGoal"> | Date | string
    updatedAt?: DateTimeFilter<"UserGoal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserGoalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    goal?: SortOrder
    deficitPerDay?: SortOrder
    targetTime?: SortOrderInput | SortOrder
    hydrationNeeds?: SortOrder
    targetWeight?: SortOrder
    totalDeficit?: SortOrder
    stepNeeds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserGoalCountOrderByAggregateInput
    _max?: UserGoalMaxOrderByAggregateInput
    _min?: UserGoalMinOrderByAggregateInput
  }

  export type UserGoalScalarWhereWithAggregatesInput = {
    AND?: UserGoalScalarWhereWithAggregatesInput | UserGoalScalarWhereWithAggregatesInput[]
    OR?: UserGoalScalarWhereWithAggregatesInput[]
    NOT?: UserGoalScalarWhereWithAggregatesInput | UserGoalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserGoal"> | string
    userId?: StringWithAggregatesFilter<"UserGoal"> | string
    goal?: StringWithAggregatesFilter<"UserGoal"> | string
    deficitPerDay?: StringWithAggregatesFilter<"UserGoal"> | string
    targetTime?: StringNullableWithAggregatesFilter<"UserGoal"> | string | null
    hydrationNeeds?: StringWithAggregatesFilter<"UserGoal"> | string
    targetWeight?: StringWithAggregatesFilter<"UserGoal"> | string
    totalDeficit?: StringWithAggregatesFilter<"UserGoal"> | string
    stepNeeds?: StringWithAggregatesFilter<"UserGoal"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserGoal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserGoal"> | Date | string
  }

  export type PhysicalActivityLogWhereInput = {
    AND?: PhysicalActivityLogWhereInput | PhysicalActivityLogWhereInput[]
    OR?: PhysicalActivityLogWhereInput[]
    NOT?: PhysicalActivityLogWhereInput | PhysicalActivityLogWhereInput[]
    id?: StringFilter<"PhysicalActivityLog"> | string
    userId?: StringFilter<"PhysicalActivityLog"> | string
    duration?: IntFilter<"PhysicalActivityLog"> | number
    caloriesBurned?: FloatFilter<"PhysicalActivityLog"> | number
    createdAt?: DateTimeFilter<"PhysicalActivityLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    activityType?: ActivityTypeListRelationFilter
    userActivityId?: XOR<UserActivitesNullableScalarRelationFilter, UserActivitesWhereInput> | null
  }

  export type PhysicalActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    caloriesBurned?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    activityType?: ActivityTypeOrderByRelationAggregateInput
    userActivityId?: UserActivitesOrderByWithRelationInput
    _relevance?: PhysicalActivityLogOrderByRelevanceInput
  }

  export type PhysicalActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhysicalActivityLogWhereInput | PhysicalActivityLogWhereInput[]
    OR?: PhysicalActivityLogWhereInput[]
    NOT?: PhysicalActivityLogWhereInput | PhysicalActivityLogWhereInput[]
    userId?: StringFilter<"PhysicalActivityLog"> | string
    duration?: IntFilter<"PhysicalActivityLog"> | number
    caloriesBurned?: FloatFilter<"PhysicalActivityLog"> | number
    createdAt?: DateTimeFilter<"PhysicalActivityLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    activityType?: ActivityTypeListRelationFilter
    userActivityId?: XOR<UserActivitesNullableScalarRelationFilter, UserActivitesWhereInput> | null
  }, "id">

  export type PhysicalActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    caloriesBurned?: SortOrder
    createdAt?: SortOrder
    _count?: PhysicalActivityLogCountOrderByAggregateInput
    _avg?: PhysicalActivityLogAvgOrderByAggregateInput
    _max?: PhysicalActivityLogMaxOrderByAggregateInput
    _min?: PhysicalActivityLogMinOrderByAggregateInput
    _sum?: PhysicalActivityLogSumOrderByAggregateInput
  }

  export type PhysicalActivityLogScalarWhereWithAggregatesInput = {
    AND?: PhysicalActivityLogScalarWhereWithAggregatesInput | PhysicalActivityLogScalarWhereWithAggregatesInput[]
    OR?: PhysicalActivityLogScalarWhereWithAggregatesInput[]
    NOT?: PhysicalActivityLogScalarWhereWithAggregatesInput | PhysicalActivityLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PhysicalActivityLog"> | string
    userId?: StringWithAggregatesFilter<"PhysicalActivityLog"> | string
    duration?: IntWithAggregatesFilter<"PhysicalActivityLog"> | number
    caloriesBurned?: FloatWithAggregatesFilter<"PhysicalActivityLog"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PhysicalActivityLog"> | Date | string
  }

  export type ActivityTypeWhereInput = {
    AND?: ActivityTypeWhereInput | ActivityTypeWhereInput[]
    OR?: ActivityTypeWhereInput[]
    NOT?: ActivityTypeWhereInput | ActivityTypeWhereInput[]
    id?: StringFilter<"ActivityType"> | string
    name?: StringFilter<"ActivityType"> | string
    duration?: IntFilter<"ActivityType"> | number
    metValue?: FloatFilter<"ActivityType"> | number
    physicalActivityId?: StringFilter<"ActivityType"> | string
    createdAt?: DateTimeFilter<"ActivityType"> | Date | string
    updatedAt?: DateTimeFilter<"ActivityType"> | Date | string
    physicalActivity?: XOR<PhysicalActivityLogScalarRelationFilter, PhysicalActivityLogWhereInput>
  }

  export type ActivityTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    metValue?: SortOrder
    physicalActivityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    physicalActivity?: PhysicalActivityLogOrderByWithRelationInput
    _relevance?: ActivityTypeOrderByRelevanceInput
  }

  export type ActivityTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityTypeWhereInput | ActivityTypeWhereInput[]
    OR?: ActivityTypeWhereInput[]
    NOT?: ActivityTypeWhereInput | ActivityTypeWhereInput[]
    name?: StringFilter<"ActivityType"> | string
    duration?: IntFilter<"ActivityType"> | number
    metValue?: FloatFilter<"ActivityType"> | number
    physicalActivityId?: StringFilter<"ActivityType"> | string
    createdAt?: DateTimeFilter<"ActivityType"> | Date | string
    updatedAt?: DateTimeFilter<"ActivityType"> | Date | string
    physicalActivity?: XOR<PhysicalActivityLogScalarRelationFilter, PhysicalActivityLogWhereInput>
  }, "id">

  export type ActivityTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    metValue?: SortOrder
    physicalActivityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ActivityTypeCountOrderByAggregateInput
    _avg?: ActivityTypeAvgOrderByAggregateInput
    _max?: ActivityTypeMaxOrderByAggregateInput
    _min?: ActivityTypeMinOrderByAggregateInput
    _sum?: ActivityTypeSumOrderByAggregateInput
  }

  export type ActivityTypeScalarWhereWithAggregatesInput = {
    AND?: ActivityTypeScalarWhereWithAggregatesInput | ActivityTypeScalarWhereWithAggregatesInput[]
    OR?: ActivityTypeScalarWhereWithAggregatesInput[]
    NOT?: ActivityTypeScalarWhereWithAggregatesInput | ActivityTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActivityType"> | string
    name?: StringWithAggregatesFilter<"ActivityType"> | string
    duration?: IntWithAggregatesFilter<"ActivityType"> | number
    metValue?: FloatWithAggregatesFilter<"ActivityType"> | number
    physicalActivityId?: StringWithAggregatesFilter<"ActivityType"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ActivityType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ActivityType"> | Date | string
  }

  export type FoodLogWhereInput = {
    AND?: FoodLogWhereInput | FoodLogWhereInput[]
    OR?: FoodLogWhereInput[]
    NOT?: FoodLogWhereInput | FoodLogWhereInput[]
    id?: StringFilter<"FoodLog"> | string
    userId?: StringFilter<"FoodLog"> | string
    foodName?: StringFilter<"FoodLog"> | string
    calories?: FloatFilter<"FoodLog"> | number
    mealType?: StringFilter<"FoodLog"> | string
    createdAt?: DateTimeFilter<"FoodLog"> | Date | string
    updatedAt?: DateTimeFilter<"FoodLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    userActivityId?: XOR<UserActivitesNullableScalarRelationFilter, UserActivitesWhereInput> | null
  }

  export type FoodLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    foodName?: SortOrder
    calories?: SortOrder
    mealType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    userActivityId?: UserActivitesOrderByWithRelationInput
    _relevance?: FoodLogOrderByRelevanceInput
  }

  export type FoodLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FoodLogWhereInput | FoodLogWhereInput[]
    OR?: FoodLogWhereInput[]
    NOT?: FoodLogWhereInput | FoodLogWhereInput[]
    userId?: StringFilter<"FoodLog"> | string
    foodName?: StringFilter<"FoodLog"> | string
    calories?: FloatFilter<"FoodLog"> | number
    mealType?: StringFilter<"FoodLog"> | string
    createdAt?: DateTimeFilter<"FoodLog"> | Date | string
    updatedAt?: DateTimeFilter<"FoodLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    userActivityId?: XOR<UserActivitesNullableScalarRelationFilter, UserActivitesWhereInput> | null
  }, "id">

  export type FoodLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    foodName?: SortOrder
    calories?: SortOrder
    mealType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FoodLogCountOrderByAggregateInput
    _avg?: FoodLogAvgOrderByAggregateInput
    _max?: FoodLogMaxOrderByAggregateInput
    _min?: FoodLogMinOrderByAggregateInput
    _sum?: FoodLogSumOrderByAggregateInput
  }

  export type FoodLogScalarWhereWithAggregatesInput = {
    AND?: FoodLogScalarWhereWithAggregatesInput | FoodLogScalarWhereWithAggregatesInput[]
    OR?: FoodLogScalarWhereWithAggregatesInput[]
    NOT?: FoodLogScalarWhereWithAggregatesInput | FoodLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FoodLog"> | string
    userId?: StringWithAggregatesFilter<"FoodLog"> | string
    foodName?: StringWithAggregatesFilter<"FoodLog"> | string
    calories?: FloatWithAggregatesFilter<"FoodLog"> | number
    mealType?: StringWithAggregatesFilter<"FoodLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FoodLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FoodLog"> | Date | string
  }

  export type UserHydrationWhereInput = {
    AND?: UserHydrationWhereInput | UserHydrationWhereInput[]
    OR?: UserHydrationWhereInput[]
    NOT?: UserHydrationWhereInput | UserHydrationWhereInput[]
    id?: StringFilter<"UserHydration"> | string
    userId?: StringFilter<"UserHydration"> | string
    waterIntake?: StringFilter<"UserHydration"> | string
    createdAt?: DateTimeFilter<"UserHydration"> | Date | string
    updatedAt?: DateTimeFilter<"UserHydration"> | Date | string
    userActivity?: XOR<UserActivitesNullableScalarRelationFilter, UserActivitesWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserHydrationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    waterIntake?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userActivity?: UserActivitesOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: UserHydrationOrderByRelevanceInput
  }

  export type UserHydrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserHydrationWhereInput | UserHydrationWhereInput[]
    OR?: UserHydrationWhereInput[]
    NOT?: UserHydrationWhereInput | UserHydrationWhereInput[]
    userId?: StringFilter<"UserHydration"> | string
    waterIntake?: StringFilter<"UserHydration"> | string
    createdAt?: DateTimeFilter<"UserHydration"> | Date | string
    updatedAt?: DateTimeFilter<"UserHydration"> | Date | string
    userActivity?: XOR<UserActivitesNullableScalarRelationFilter, UserActivitesWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserHydrationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    waterIntake?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserHydrationCountOrderByAggregateInput
    _max?: UserHydrationMaxOrderByAggregateInput
    _min?: UserHydrationMinOrderByAggregateInput
  }

  export type UserHydrationScalarWhereWithAggregatesInput = {
    AND?: UserHydrationScalarWhereWithAggregatesInput | UserHydrationScalarWhereWithAggregatesInput[]
    OR?: UserHydrationScalarWhereWithAggregatesInput[]
    NOT?: UserHydrationScalarWhereWithAggregatesInput | UserHydrationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserHydration"> | string
    userId?: StringWithAggregatesFilter<"UserHydration"> | string
    waterIntake?: StringWithAggregatesFilter<"UserHydration"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserHydration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserHydration"> | Date | string
  }

  export type SleepTrackerWhereInput = {
    AND?: SleepTrackerWhereInput | SleepTrackerWhereInput[]
    OR?: SleepTrackerWhereInput[]
    NOT?: SleepTrackerWhereInput | SleepTrackerWhereInput[]
    id?: StringFilter<"SleepTracker"> | string
    userId?: StringFilter<"SleepTracker"> | string
    duration?: FloatFilter<"SleepTracker"> | number
    createdAt?: DateTimeFilter<"SleepTracker"> | Date | string
    updatedAt?: DateTimeFilter<"SleepTracker"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    userActivity?: XOR<UserActivitesNullableScalarRelationFilter, UserActivitesWhereInput> | null
  }

  export type SleepTrackerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    userActivity?: UserActivitesOrderByWithRelationInput
    _relevance?: SleepTrackerOrderByRelevanceInput
  }

  export type SleepTrackerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SleepTrackerWhereInput | SleepTrackerWhereInput[]
    OR?: SleepTrackerWhereInput[]
    NOT?: SleepTrackerWhereInput | SleepTrackerWhereInput[]
    userId?: StringFilter<"SleepTracker"> | string
    duration?: FloatFilter<"SleepTracker"> | number
    createdAt?: DateTimeFilter<"SleepTracker"> | Date | string
    updatedAt?: DateTimeFilter<"SleepTracker"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    userActivity?: XOR<UserActivitesNullableScalarRelationFilter, UserActivitesWhereInput> | null
  }, "id">

  export type SleepTrackerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SleepTrackerCountOrderByAggregateInput
    _avg?: SleepTrackerAvgOrderByAggregateInput
    _max?: SleepTrackerMaxOrderByAggregateInput
    _min?: SleepTrackerMinOrderByAggregateInput
    _sum?: SleepTrackerSumOrderByAggregateInput
  }

  export type SleepTrackerScalarWhereWithAggregatesInput = {
    AND?: SleepTrackerScalarWhereWithAggregatesInput | SleepTrackerScalarWhereWithAggregatesInput[]
    OR?: SleepTrackerScalarWhereWithAggregatesInput[]
    NOT?: SleepTrackerScalarWhereWithAggregatesInput | SleepTrackerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SleepTracker"> | string
    userId?: StringWithAggregatesFilter<"SleepTracker"> | string
    duration?: FloatWithAggregatesFilter<"SleepTracker"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SleepTracker"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SleepTracker"> | Date | string
  }

  export type UserActivitesWhereInput = {
    AND?: UserActivitesWhereInput | UserActivitesWhereInput[]
    OR?: UserActivitesWhereInput[]
    NOT?: UserActivitesWhereInput | UserActivitesWhereInput[]
    id?: StringFilter<"UserActivites"> | string
    userId?: StringFilter<"UserActivites"> | string
    category?: EnumACTIVITY_TYPEFilter<"UserActivites"> | $Enums.ACTIVITY_TYPE
    title?: StringFilter<"UserActivites"> | string
    stepsCount?: FloatNullableFilter<"UserActivites"> | number | null
    effectToBody?: StringNullableFilter<"UserActivites"> | string | null
    sleepTrackerId?: StringNullableFilter<"UserActivites"> | string | null
    userHydrationId?: StringNullableFilter<"UserActivites"> | string | null
    stepTrackerId?: StringNullableFilter<"UserActivites"> | string | null
    foodLogId?: StringNullableFilter<"UserActivites"> | string | null
    physicalActivityLogId?: StringNullableFilter<"UserActivites"> | string | null
    createdAt?: DateTimeFilter<"UserActivites"> | Date | string
    updatedAt?: DateTimeFilter<"UserActivites"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sleepTracker?: XOR<SleepTrackerNullableScalarRelationFilter, SleepTrackerWhereInput> | null
    userHydration?: XOR<UserHydrationNullableScalarRelationFilter, UserHydrationWhereInput> | null
    foodLog?: XOR<FoodLogNullableScalarRelationFilter, FoodLogWhereInput> | null
    physicalActivityLog?: XOR<PhysicalActivityLogNullableScalarRelationFilter, PhysicalActivityLogWhereInput> | null
  }

  export type UserActivitesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    title?: SortOrder
    stepsCount?: SortOrderInput | SortOrder
    effectToBody?: SortOrderInput | SortOrder
    sleepTrackerId?: SortOrderInput | SortOrder
    userHydrationId?: SortOrderInput | SortOrder
    stepTrackerId?: SortOrderInput | SortOrder
    foodLogId?: SortOrderInput | SortOrder
    physicalActivityLogId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    sleepTracker?: SleepTrackerOrderByWithRelationInput
    userHydration?: UserHydrationOrderByWithRelationInput
    foodLog?: FoodLogOrderByWithRelationInput
    physicalActivityLog?: PhysicalActivityLogOrderByWithRelationInput
    _relevance?: UserActivitesOrderByRelevanceInput
  }

  export type UserActivitesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sleepTrackerId?: string
    userHydrationId?: string
    stepTrackerId?: string
    foodLogId?: string
    physicalActivityLogId?: string
    AND?: UserActivitesWhereInput | UserActivitesWhereInput[]
    OR?: UserActivitesWhereInput[]
    NOT?: UserActivitesWhereInput | UserActivitesWhereInput[]
    userId?: StringFilter<"UserActivites"> | string
    category?: EnumACTIVITY_TYPEFilter<"UserActivites"> | $Enums.ACTIVITY_TYPE
    title?: StringFilter<"UserActivites"> | string
    stepsCount?: FloatNullableFilter<"UserActivites"> | number | null
    effectToBody?: StringNullableFilter<"UserActivites"> | string | null
    createdAt?: DateTimeFilter<"UserActivites"> | Date | string
    updatedAt?: DateTimeFilter<"UserActivites"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sleepTracker?: XOR<SleepTrackerNullableScalarRelationFilter, SleepTrackerWhereInput> | null
    userHydration?: XOR<UserHydrationNullableScalarRelationFilter, UserHydrationWhereInput> | null
    foodLog?: XOR<FoodLogNullableScalarRelationFilter, FoodLogWhereInput> | null
    physicalActivityLog?: XOR<PhysicalActivityLogNullableScalarRelationFilter, PhysicalActivityLogWhereInput> | null
  }, "id" | "sleepTrackerId" | "userHydrationId" | "stepTrackerId" | "foodLogId" | "physicalActivityLogId">

  export type UserActivitesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    title?: SortOrder
    stepsCount?: SortOrderInput | SortOrder
    effectToBody?: SortOrderInput | SortOrder
    sleepTrackerId?: SortOrderInput | SortOrder
    userHydrationId?: SortOrderInput | SortOrder
    stepTrackerId?: SortOrderInput | SortOrder
    foodLogId?: SortOrderInput | SortOrder
    physicalActivityLogId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserActivitesCountOrderByAggregateInput
    _avg?: UserActivitesAvgOrderByAggregateInput
    _max?: UserActivitesMaxOrderByAggregateInput
    _min?: UserActivitesMinOrderByAggregateInput
    _sum?: UserActivitesSumOrderByAggregateInput
  }

  export type UserActivitesScalarWhereWithAggregatesInput = {
    AND?: UserActivitesScalarWhereWithAggregatesInput | UserActivitesScalarWhereWithAggregatesInput[]
    OR?: UserActivitesScalarWhereWithAggregatesInput[]
    NOT?: UserActivitesScalarWhereWithAggregatesInput | UserActivitesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserActivites"> | string
    userId?: StringWithAggregatesFilter<"UserActivites"> | string
    category?: EnumACTIVITY_TYPEWithAggregatesFilter<"UserActivites"> | $Enums.ACTIVITY_TYPE
    title?: StringWithAggregatesFilter<"UserActivites"> | string
    stepsCount?: FloatNullableWithAggregatesFilter<"UserActivites"> | number | null
    effectToBody?: StringNullableWithAggregatesFilter<"UserActivites"> | string | null
    sleepTrackerId?: StringNullableWithAggregatesFilter<"UserActivites"> | string | null
    userHydrationId?: StringNullableWithAggregatesFilter<"UserActivites"> | string | null
    stepTrackerId?: StringNullableWithAggregatesFilter<"UserActivites"> | string | null
    foodLogId?: StringNullableWithAggregatesFilter<"UserActivites"> | string | null
    physicalActivityLogId?: StringNullableWithAggregatesFilter<"UserActivites"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserActivites"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserActivites"> | Date | string
  }

  export type ChatbotWhereInput = {
    AND?: ChatbotWhereInput | ChatbotWhereInput[]
    OR?: ChatbotWhereInput[]
    NOT?: ChatbotWhereInput | ChatbotWhereInput[]
    id?: StringFilter<"Chatbot"> | string
    userId?: StringFilter<"Chatbot"> | string
    payload?: StringNullableFilter<"Chatbot"> | string | null
    sender?: EnumSENDERFilter<"Chatbot"> | $Enums.SENDER
    createdAt?: DateTimeFilter<"Chatbot"> | Date | string
    updatedAt?: DateTimeFilter<"Chatbot"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChatbotOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    payload?: SortOrderInput | SortOrder
    sender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: ChatbotOrderByRelevanceInput
  }

  export type ChatbotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatbotWhereInput | ChatbotWhereInput[]
    OR?: ChatbotWhereInput[]
    NOT?: ChatbotWhereInput | ChatbotWhereInput[]
    userId?: StringFilter<"Chatbot"> | string
    payload?: StringNullableFilter<"Chatbot"> | string | null
    sender?: EnumSENDERFilter<"Chatbot"> | $Enums.SENDER
    createdAt?: DateTimeFilter<"Chatbot"> | Date | string
    updatedAt?: DateTimeFilter<"Chatbot"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ChatbotOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    payload?: SortOrderInput | SortOrder
    sender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatbotCountOrderByAggregateInput
    _max?: ChatbotMaxOrderByAggregateInput
    _min?: ChatbotMinOrderByAggregateInput
  }

  export type ChatbotScalarWhereWithAggregatesInput = {
    AND?: ChatbotScalarWhereWithAggregatesInput | ChatbotScalarWhereWithAggregatesInput[]
    OR?: ChatbotScalarWhereWithAggregatesInput[]
    NOT?: ChatbotScalarWhereWithAggregatesInput | ChatbotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chatbot"> | string
    userId?: StringWithAggregatesFilter<"Chatbot"> | string
    payload?: StringNullableWithAggregatesFilter<"Chatbot"> | string | null
    sender?: EnumSENDERWithAggregatesFilter<"Chatbot"> | $Enums.SENDER
    createdAt?: DateTimeWithAggregatesFilter<"Chatbot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chatbot"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
    Chatbot?: ChatbotCreateNestedManyWithoutUserInput
    UserCharacteristic?: UserCharacteristicsCreateNestedManyWithoutUserInput
    PhysicalActivityLog?: PhysicalActivityLogCreateNestedManyWithoutUserInput
    UserActivites?: UserActivitesCreateNestedManyWithoutUserInput
    FoodLog?: FoodLogCreateNestedManyWithoutUserInput
    UserHydration?: UserHydrationCreateNestedManyWithoutUserInput
    SleepTracker?: SleepTrackerCreateNestedManyWithoutUserInput
    UserGoal?: UserGoalCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    Chatbot?: ChatbotUncheckedCreateNestedManyWithoutUserInput
    UserCharacteristic?: UserCharacteristicsUncheckedCreateNestedManyWithoutUserInput
    PhysicalActivityLog?: PhysicalActivityLogUncheckedCreateNestedManyWithoutUserInput
    UserActivites?: UserActivitesUncheckedCreateNestedManyWithoutUserInput
    FoodLog?: FoodLogUncheckedCreateNestedManyWithoutUserInput
    UserHydration?: UserHydrationUncheckedCreateNestedManyWithoutUserInput
    SleepTracker?: SleepTrackerUncheckedCreateNestedManyWithoutUserInput
    UserGoal?: UserGoalUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
    Chatbot?: ChatbotUpdateManyWithoutUserNestedInput
    UserCharacteristic?: UserCharacteristicsUpdateManyWithoutUserNestedInput
    PhysicalActivityLog?: PhysicalActivityLogUpdateManyWithoutUserNestedInput
    UserActivites?: UserActivitesUpdateManyWithoutUserNestedInput
    FoodLog?: FoodLogUpdateManyWithoutUserNestedInput
    UserHydration?: UserHydrationUpdateManyWithoutUserNestedInput
    SleepTracker?: SleepTrackerUpdateManyWithoutUserNestedInput
    UserGoal?: UserGoalUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    Chatbot?: ChatbotUncheckedUpdateManyWithoutUserNestedInput
    UserCharacteristic?: UserCharacteristicsUncheckedUpdateManyWithoutUserNestedInput
    PhysicalActivityLog?: PhysicalActivityLogUncheckedUpdateManyWithoutUserNestedInput
    UserActivites?: UserActivitesUncheckedUpdateManyWithoutUserNestedInput
    FoodLog?: FoodLogUncheckedUpdateManyWithoutUserNestedInput
    UserHydration?: UserHydrationUncheckedUpdateManyWithoutUserNestedInput
    SleepTracker?: SleepTrackerUncheckedUpdateManyWithoutUserNestedInput
    UserGoal?: UserGoalUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthenticatorCreateInput = {
    credentialID: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
    user: UserCreateNestedOneWithoutAuthenticatorInput
  }

  export type AuthenticatorUncheckedCreateInput = {
    credentialID: string
    userId: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type AuthenticatorUpdateInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAuthenticatorNestedInput
  }

  export type AuthenticatorUncheckedUpdateInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthenticatorCreateManyInput = {
    credentialID: string
    userId: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type AuthenticatorUpdateManyMutationInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthenticatorUncheckedUpdateManyInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCharacteristicsCreateInput = {
    id?: string
    gender: string
    age: string
    height: string
    currentWeight: string
    activityFactor: string
    mealsPerDay: string
    sleepHours: string
    workoutsPerWeek: string
    manualCalorieAdjustment?: string | null
    bmi?: string | null
    tdee?: string | null
    bmr?: string | null
    bodyFatPercentage?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserCharacteristicInput
  }

  export type UserCharacteristicsUncheckedCreateInput = {
    id?: string
    userId: string
    gender: string
    age: string
    height: string
    currentWeight: string
    activityFactor: string
    mealsPerDay: string
    sleepHours: string
    workoutsPerWeek: string
    manualCalorieAdjustment?: string | null
    bmi?: string | null
    tdee?: string | null
    bmr?: string | null
    bodyFatPercentage?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCharacteristicsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    currentWeight?: StringFieldUpdateOperationsInput | string
    activityFactor?: StringFieldUpdateOperationsInput | string
    mealsPerDay?: StringFieldUpdateOperationsInput | string
    sleepHours?: StringFieldUpdateOperationsInput | string
    workoutsPerWeek?: StringFieldUpdateOperationsInput | string
    manualCalorieAdjustment?: NullableStringFieldUpdateOperationsInput | string | null
    bmi?: NullableStringFieldUpdateOperationsInput | string | null
    tdee?: NullableStringFieldUpdateOperationsInput | string | null
    bmr?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFatPercentage?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserCharacteristicNestedInput
  }

  export type UserCharacteristicsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    currentWeight?: StringFieldUpdateOperationsInput | string
    activityFactor?: StringFieldUpdateOperationsInput | string
    mealsPerDay?: StringFieldUpdateOperationsInput | string
    sleepHours?: StringFieldUpdateOperationsInput | string
    workoutsPerWeek?: StringFieldUpdateOperationsInput | string
    manualCalorieAdjustment?: NullableStringFieldUpdateOperationsInput | string | null
    bmi?: NullableStringFieldUpdateOperationsInput | string | null
    tdee?: NullableStringFieldUpdateOperationsInput | string | null
    bmr?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFatPercentage?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCharacteristicsCreateManyInput = {
    id?: string
    userId: string
    gender: string
    age: string
    height: string
    currentWeight: string
    activityFactor: string
    mealsPerDay: string
    sleepHours: string
    workoutsPerWeek: string
    manualCalorieAdjustment?: string | null
    bmi?: string | null
    tdee?: string | null
    bmr?: string | null
    bodyFatPercentage?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCharacteristicsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    currentWeight?: StringFieldUpdateOperationsInput | string
    activityFactor?: StringFieldUpdateOperationsInput | string
    mealsPerDay?: StringFieldUpdateOperationsInput | string
    sleepHours?: StringFieldUpdateOperationsInput | string
    workoutsPerWeek?: StringFieldUpdateOperationsInput | string
    manualCalorieAdjustment?: NullableStringFieldUpdateOperationsInput | string | null
    bmi?: NullableStringFieldUpdateOperationsInput | string | null
    tdee?: NullableStringFieldUpdateOperationsInput | string | null
    bmr?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFatPercentage?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCharacteristicsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    currentWeight?: StringFieldUpdateOperationsInput | string
    activityFactor?: StringFieldUpdateOperationsInput | string
    mealsPerDay?: StringFieldUpdateOperationsInput | string
    sleepHours?: StringFieldUpdateOperationsInput | string
    workoutsPerWeek?: StringFieldUpdateOperationsInput | string
    manualCalorieAdjustment?: NullableStringFieldUpdateOperationsInput | string | null
    bmi?: NullableStringFieldUpdateOperationsInput | string | null
    tdee?: NullableStringFieldUpdateOperationsInput | string | null
    bmr?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFatPercentage?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGoalCreateInput = {
    id?: string
    goal: string
    deficitPerDay: string
    targetTime?: string | null
    hydrationNeeds: string
    targetWeight: string
    totalDeficit: string
    stepNeeds: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserGoalInput
  }

  export type UserGoalUncheckedCreateInput = {
    id?: string
    userId: string
    goal: string
    deficitPerDay: string
    targetTime?: string | null
    hydrationNeeds: string
    targetWeight: string
    totalDeficit: string
    stepNeeds: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserGoalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    deficitPerDay?: StringFieldUpdateOperationsInput | string
    targetTime?: NullableStringFieldUpdateOperationsInput | string | null
    hydrationNeeds?: StringFieldUpdateOperationsInput | string
    targetWeight?: StringFieldUpdateOperationsInput | string
    totalDeficit?: StringFieldUpdateOperationsInput | string
    stepNeeds?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserGoalNestedInput
  }

  export type UserGoalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    deficitPerDay?: StringFieldUpdateOperationsInput | string
    targetTime?: NullableStringFieldUpdateOperationsInput | string | null
    hydrationNeeds?: StringFieldUpdateOperationsInput | string
    targetWeight?: StringFieldUpdateOperationsInput | string
    totalDeficit?: StringFieldUpdateOperationsInput | string
    stepNeeds?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGoalCreateManyInput = {
    id?: string
    userId: string
    goal: string
    deficitPerDay: string
    targetTime?: string | null
    hydrationNeeds: string
    targetWeight: string
    totalDeficit: string
    stepNeeds: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserGoalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    deficitPerDay?: StringFieldUpdateOperationsInput | string
    targetTime?: NullableStringFieldUpdateOperationsInput | string | null
    hydrationNeeds?: StringFieldUpdateOperationsInput | string
    targetWeight?: StringFieldUpdateOperationsInput | string
    totalDeficit?: StringFieldUpdateOperationsInput | string
    stepNeeds?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGoalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    deficitPerDay?: StringFieldUpdateOperationsInput | string
    targetTime?: NullableStringFieldUpdateOperationsInput | string | null
    hydrationNeeds?: StringFieldUpdateOperationsInput | string
    targetWeight?: StringFieldUpdateOperationsInput | string
    totalDeficit?: StringFieldUpdateOperationsInput | string
    stepNeeds?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhysicalActivityLogCreateInput = {
    id?: string
    duration: number
    caloriesBurned: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPhysicalActivityLogInput
    activityType?: ActivityTypeCreateNestedManyWithoutPhysicalActivityInput
    userActivityId?: UserActivitesCreateNestedOneWithoutPhysicalActivityLogInput
  }

  export type PhysicalActivityLogUncheckedCreateInput = {
    id?: string
    userId: string
    duration: number
    caloriesBurned: number
    createdAt?: Date | string
    activityType?: ActivityTypeUncheckedCreateNestedManyWithoutPhysicalActivityInput
    userActivityId?: UserActivitesUncheckedCreateNestedOneWithoutPhysicalActivityLogInput
  }

  export type PhysicalActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    caloriesBurned?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPhysicalActivityLogNestedInput
    activityType?: ActivityTypeUpdateManyWithoutPhysicalActivityNestedInput
    userActivityId?: UserActivitesUpdateOneWithoutPhysicalActivityLogNestedInput
  }

  export type PhysicalActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    caloriesBurned?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityType?: ActivityTypeUncheckedUpdateManyWithoutPhysicalActivityNestedInput
    userActivityId?: UserActivitesUncheckedUpdateOneWithoutPhysicalActivityLogNestedInput
  }

  export type PhysicalActivityLogCreateManyInput = {
    id?: string
    userId: string
    duration: number
    caloriesBurned: number
    createdAt?: Date | string
  }

  export type PhysicalActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    caloriesBurned?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhysicalActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    caloriesBurned?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityTypeCreateInput = {
    id?: string
    name: string
    duration: number
    metValue: number
    createdAt?: Date | string
    updatedAt?: Date | string
    physicalActivity: PhysicalActivityLogCreateNestedOneWithoutActivityTypeInput
  }

  export type ActivityTypeUncheckedCreateInput = {
    id?: string
    name: string
    duration: number
    metValue: number
    physicalActivityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    metValue?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    physicalActivity?: PhysicalActivityLogUpdateOneRequiredWithoutActivityTypeNestedInput
  }

  export type ActivityTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    metValue?: FloatFieldUpdateOperationsInput | number
    physicalActivityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityTypeCreateManyInput = {
    id?: string
    name: string
    duration: number
    metValue: number
    physicalActivityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    metValue?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    metValue?: FloatFieldUpdateOperationsInput | number
    physicalActivityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodLogCreateInput = {
    id?: string
    foodName: string
    calories: number
    mealType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFoodLogInput
    userActivityId?: UserActivitesCreateNestedOneWithoutFoodLogInput
  }

  export type FoodLogUncheckedCreateInput = {
    id?: string
    userId: string
    foodName: string
    calories: number
    mealType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userActivityId?: UserActivitesUncheckedCreateNestedOneWithoutFoodLogInput
  }

  export type FoodLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodName?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    mealType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFoodLogNestedInput
    userActivityId?: UserActivitesUpdateOneWithoutFoodLogNestedInput
  }

  export type FoodLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    foodName?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    mealType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userActivityId?: UserActivitesUncheckedUpdateOneWithoutFoodLogNestedInput
  }

  export type FoodLogCreateManyInput = {
    id?: string
    userId: string
    foodName: string
    calories: number
    mealType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodName?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    mealType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    foodName?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    mealType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHydrationCreateInput = {
    id?: string
    waterIntake: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userActivity?: UserActivitesCreateNestedOneWithoutUserHydrationInput
    user: UserCreateNestedOneWithoutUserHydrationInput
  }

  export type UserHydrationUncheckedCreateInput = {
    id?: string
    userId: string
    waterIntake: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userActivity?: UserActivitesUncheckedCreateNestedOneWithoutUserHydrationInput
  }

  export type UserHydrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    waterIntake?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userActivity?: UserActivitesUpdateOneWithoutUserHydrationNestedInput
    user?: UserUpdateOneRequiredWithoutUserHydrationNestedInput
  }

  export type UserHydrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    waterIntake?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userActivity?: UserActivitesUncheckedUpdateOneWithoutUserHydrationNestedInput
  }

  export type UserHydrationCreateManyInput = {
    id?: string
    userId: string
    waterIntake: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserHydrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    waterIntake?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHydrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    waterIntake?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SleepTrackerCreateInput = {
    id?: string
    duration: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSleepTrackerInput
    userActivity?: UserActivitesCreateNestedOneWithoutSleepTrackerInput
  }

  export type SleepTrackerUncheckedCreateInput = {
    id?: string
    userId: string
    duration: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userActivity?: UserActivitesUncheckedCreateNestedOneWithoutSleepTrackerInput
  }

  export type SleepTrackerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSleepTrackerNestedInput
    userActivity?: UserActivitesUpdateOneWithoutSleepTrackerNestedInput
  }

  export type SleepTrackerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    duration?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userActivity?: UserActivitesUncheckedUpdateOneWithoutSleepTrackerNestedInput
  }

  export type SleepTrackerCreateManyInput = {
    id?: string
    userId: string
    duration: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SleepTrackerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SleepTrackerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    duration?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActivitesCreateInput = {
    id?: string
    category: $Enums.ACTIVITY_TYPE
    title: string
    stepsCount?: number | null
    effectToBody?: string | null
    stepTrackerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserActivitesInput
    sleepTracker?: SleepTrackerCreateNestedOneWithoutUserActivityInput
    userHydration?: UserHydrationCreateNestedOneWithoutUserActivityInput
    foodLog?: FoodLogCreateNestedOneWithoutUserActivityIdInput
    physicalActivityLog?: PhysicalActivityLogCreateNestedOneWithoutUserActivityIdInput
  }

  export type UserActivitesUncheckedCreateInput = {
    id?: string
    userId: string
    category: $Enums.ACTIVITY_TYPE
    title: string
    stepsCount?: number | null
    effectToBody?: string | null
    sleepTrackerId?: string | null
    userHydrationId?: string | null
    stepTrackerId?: string | null
    foodLogId?: string | null
    physicalActivityLogId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserActivitesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumACTIVITY_TYPEFieldUpdateOperationsInput | $Enums.ACTIVITY_TYPE
    title?: StringFieldUpdateOperationsInput | string
    stepsCount?: NullableFloatFieldUpdateOperationsInput | number | null
    effectToBody?: NullableStringFieldUpdateOperationsInput | string | null
    stepTrackerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserActivitesNestedInput
    sleepTracker?: SleepTrackerUpdateOneWithoutUserActivityNestedInput
    userHydration?: UserHydrationUpdateOneWithoutUserActivityNestedInput
    foodLog?: FoodLogUpdateOneWithoutUserActivityIdNestedInput
    physicalActivityLog?: PhysicalActivityLogUpdateOneWithoutUserActivityIdNestedInput
  }

  export type UserActivitesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    category?: EnumACTIVITY_TYPEFieldUpdateOperationsInput | $Enums.ACTIVITY_TYPE
    title?: StringFieldUpdateOperationsInput | string
    stepsCount?: NullableFloatFieldUpdateOperationsInput | number | null
    effectToBody?: NullableStringFieldUpdateOperationsInput | string | null
    sleepTrackerId?: NullableStringFieldUpdateOperationsInput | string | null
    userHydrationId?: NullableStringFieldUpdateOperationsInput | string | null
    stepTrackerId?: NullableStringFieldUpdateOperationsInput | string | null
    foodLogId?: NullableStringFieldUpdateOperationsInput | string | null
    physicalActivityLogId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActivitesCreateManyInput = {
    id?: string
    userId: string
    category: $Enums.ACTIVITY_TYPE
    title: string
    stepsCount?: number | null
    effectToBody?: string | null
    sleepTrackerId?: string | null
    userHydrationId?: string | null
    stepTrackerId?: string | null
    foodLogId?: string | null
    physicalActivityLogId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserActivitesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumACTIVITY_TYPEFieldUpdateOperationsInput | $Enums.ACTIVITY_TYPE
    title?: StringFieldUpdateOperationsInput | string
    stepsCount?: NullableFloatFieldUpdateOperationsInput | number | null
    effectToBody?: NullableStringFieldUpdateOperationsInput | string | null
    stepTrackerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActivitesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    category?: EnumACTIVITY_TYPEFieldUpdateOperationsInput | $Enums.ACTIVITY_TYPE
    title?: StringFieldUpdateOperationsInput | string
    stepsCount?: NullableFloatFieldUpdateOperationsInput | number | null
    effectToBody?: NullableStringFieldUpdateOperationsInput | string | null
    sleepTrackerId?: NullableStringFieldUpdateOperationsInput | string | null
    userHydrationId?: NullableStringFieldUpdateOperationsInput | string | null
    stepTrackerId?: NullableStringFieldUpdateOperationsInput | string | null
    foodLogId?: NullableStringFieldUpdateOperationsInput | string | null
    physicalActivityLogId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatbotCreateInput = {
    id?: string
    payload?: string | null
    sender: $Enums.SENDER
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChatbotInput
  }

  export type ChatbotUncheckedCreateInput = {
    id?: string
    userId: string
    payload?: string | null
    sender: $Enums.SENDER
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatbotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    sender?: EnumSENDERFieldUpdateOperationsInput | $Enums.SENDER
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatbotNestedInput
  }

  export type ChatbotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    sender?: EnumSENDERFieldUpdateOperationsInput | $Enums.SENDER
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatbotCreateManyInput = {
    id?: string
    userId: string
    payload?: string | null
    sender: $Enums.SENDER
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatbotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    sender?: EnumSENDERFieldUpdateOperationsInput | $Enums.SENDER
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatbotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    sender?: EnumSENDERFieldUpdateOperationsInput | $Enums.SENDER
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AuthenticatorListRelationFilter = {
    every?: AuthenticatorWhereInput
    some?: AuthenticatorWhereInput
    none?: AuthenticatorWhereInput
  }

  export type ChatbotListRelationFilter = {
    every?: ChatbotWhereInput
    some?: ChatbotWhereInput
    none?: ChatbotWhereInput
  }

  export type UserCharacteristicsListRelationFilter = {
    every?: UserCharacteristicsWhereInput
    some?: UserCharacteristicsWhereInput
    none?: UserCharacteristicsWhereInput
  }

  export type PhysicalActivityLogListRelationFilter = {
    every?: PhysicalActivityLogWhereInput
    some?: PhysicalActivityLogWhereInput
    none?: PhysicalActivityLogWhereInput
  }

  export type UserActivitesListRelationFilter = {
    every?: UserActivitesWhereInput
    some?: UserActivitesWhereInput
    none?: UserActivitesWhereInput
  }

  export type FoodLogListRelationFilter = {
    every?: FoodLogWhereInput
    some?: FoodLogWhereInput
    none?: FoodLogWhereInput
  }

  export type UserHydrationListRelationFilter = {
    every?: UserHydrationWhereInput
    some?: UserHydrationWhereInput
    none?: UserHydrationWhereInput
  }

  export type SleepTrackerListRelationFilter = {
    every?: SleepTrackerWhereInput
    some?: SleepTrackerWhereInput
    none?: SleepTrackerWhereInput
  }

  export type UserGoalNullableScalarRelationFilter = {
    is?: UserGoalWhereInput | null
    isNot?: UserGoalWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthenticatorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatbotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCharacteristicsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhysicalActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserActivitesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FoodLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserHydrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SleepTrackerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    username?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    username?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    username?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountOrderByRelevanceInput = {
    fields: AccountOrderByRelevanceFieldEnum | AccountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type SessionOrderByRelevanceInput = {
    fields: SessionOrderByRelevanceFieldEnum | SessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SessionCountOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationTokenOrderByRelevanceInput = {
    fields: VerificationTokenOrderByRelevanceFieldEnum | VerificationTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AuthenticatorOrderByRelevanceInput = {
    fields: AuthenticatorOrderByRelevanceFieldEnum | AuthenticatorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AuthenticatorUserIdCredentialIDCompoundUniqueInput = {
    userId: string
    credentialID: string
  }

  export type AuthenticatorCountOrderByAggregateInput = {
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrder
  }

  export type AuthenticatorAvgOrderByAggregateInput = {
    counter?: SortOrder
  }

  export type AuthenticatorMaxOrderByAggregateInput = {
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrder
  }

  export type AuthenticatorMinOrderByAggregateInput = {
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrder
  }

  export type AuthenticatorSumOrderByAggregateInput = {
    counter?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCharacteristicsOrderByRelevanceInput = {
    fields: UserCharacteristicsOrderByRelevanceFieldEnum | UserCharacteristicsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCharacteristicsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    height?: SortOrder
    currentWeight?: SortOrder
    activityFactor?: SortOrder
    mealsPerDay?: SortOrder
    sleepHours?: SortOrder
    workoutsPerWeek?: SortOrder
    manualCalorieAdjustment?: SortOrder
    bmi?: SortOrder
    tdee?: SortOrder
    bmr?: SortOrder
    bodyFatPercentage?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCharacteristicsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    height?: SortOrder
    currentWeight?: SortOrder
    activityFactor?: SortOrder
    mealsPerDay?: SortOrder
    sleepHours?: SortOrder
    workoutsPerWeek?: SortOrder
    manualCalorieAdjustment?: SortOrder
    bmi?: SortOrder
    tdee?: SortOrder
    bmr?: SortOrder
    bodyFatPercentage?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCharacteristicsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    height?: SortOrder
    currentWeight?: SortOrder
    activityFactor?: SortOrder
    mealsPerDay?: SortOrder
    sleepHours?: SortOrder
    workoutsPerWeek?: SortOrder
    manualCalorieAdjustment?: SortOrder
    bmi?: SortOrder
    tdee?: SortOrder
    bmr?: SortOrder
    bodyFatPercentage?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserGoalOrderByRelevanceInput = {
    fields: UserGoalOrderByRelevanceFieldEnum | UserGoalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserGoalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    goal?: SortOrder
    deficitPerDay?: SortOrder
    targetTime?: SortOrder
    hydrationNeeds?: SortOrder
    targetWeight?: SortOrder
    totalDeficit?: SortOrder
    stepNeeds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserGoalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    goal?: SortOrder
    deficitPerDay?: SortOrder
    targetTime?: SortOrder
    hydrationNeeds?: SortOrder
    targetWeight?: SortOrder
    totalDeficit?: SortOrder
    stepNeeds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserGoalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    goal?: SortOrder
    deficitPerDay?: SortOrder
    targetTime?: SortOrder
    hydrationNeeds?: SortOrder
    targetWeight?: SortOrder
    totalDeficit?: SortOrder
    stepNeeds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ActivityTypeListRelationFilter = {
    every?: ActivityTypeWhereInput
    some?: ActivityTypeWhereInput
    none?: ActivityTypeWhereInput
  }

  export type UserActivitesNullableScalarRelationFilter = {
    is?: UserActivitesWhereInput | null
    isNot?: UserActivitesWhereInput | null
  }

  export type ActivityTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhysicalActivityLogOrderByRelevanceInput = {
    fields: PhysicalActivityLogOrderByRelevanceFieldEnum | PhysicalActivityLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PhysicalActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    caloriesBurned?: SortOrder
    createdAt?: SortOrder
  }

  export type PhysicalActivityLogAvgOrderByAggregateInput = {
    duration?: SortOrder
    caloriesBurned?: SortOrder
  }

  export type PhysicalActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    caloriesBurned?: SortOrder
    createdAt?: SortOrder
  }

  export type PhysicalActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    caloriesBurned?: SortOrder
    createdAt?: SortOrder
  }

  export type PhysicalActivityLogSumOrderByAggregateInput = {
    duration?: SortOrder
    caloriesBurned?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PhysicalActivityLogScalarRelationFilter = {
    is?: PhysicalActivityLogWhereInput
    isNot?: PhysicalActivityLogWhereInput
  }

  export type ActivityTypeOrderByRelevanceInput = {
    fields: ActivityTypeOrderByRelevanceFieldEnum | ActivityTypeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ActivityTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    metValue?: SortOrder
    physicalActivityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivityTypeAvgOrderByAggregateInput = {
    duration?: SortOrder
    metValue?: SortOrder
  }

  export type ActivityTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    metValue?: SortOrder
    physicalActivityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivityTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    metValue?: SortOrder
    physicalActivityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivityTypeSumOrderByAggregateInput = {
    duration?: SortOrder
    metValue?: SortOrder
  }

  export type FoodLogOrderByRelevanceInput = {
    fields: FoodLogOrderByRelevanceFieldEnum | FoodLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FoodLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodName?: SortOrder
    calories?: SortOrder
    mealType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodLogAvgOrderByAggregateInput = {
    calories?: SortOrder
  }

  export type FoodLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodName?: SortOrder
    calories?: SortOrder
    mealType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodName?: SortOrder
    calories?: SortOrder
    mealType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodLogSumOrderByAggregateInput = {
    calories?: SortOrder
  }

  export type UserHydrationOrderByRelevanceInput = {
    fields: UserHydrationOrderByRelevanceFieldEnum | UserHydrationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserHydrationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    waterIntake?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserHydrationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    waterIntake?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserHydrationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    waterIntake?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SleepTrackerOrderByRelevanceInput = {
    fields: SleepTrackerOrderByRelevanceFieldEnum | SleepTrackerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SleepTrackerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SleepTrackerAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type SleepTrackerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SleepTrackerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SleepTrackerSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type EnumACTIVITY_TYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.ACTIVITY_TYPE | EnumACTIVITY_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.ACTIVITY_TYPE[]
    notIn?: $Enums.ACTIVITY_TYPE[]
    not?: NestedEnumACTIVITY_TYPEFilter<$PrismaModel> | $Enums.ACTIVITY_TYPE
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SleepTrackerNullableScalarRelationFilter = {
    is?: SleepTrackerWhereInput | null
    isNot?: SleepTrackerWhereInput | null
  }

  export type UserHydrationNullableScalarRelationFilter = {
    is?: UserHydrationWhereInput | null
    isNot?: UserHydrationWhereInput | null
  }

  export type FoodLogNullableScalarRelationFilter = {
    is?: FoodLogWhereInput | null
    isNot?: FoodLogWhereInput | null
  }

  export type PhysicalActivityLogNullableScalarRelationFilter = {
    is?: PhysicalActivityLogWhereInput | null
    isNot?: PhysicalActivityLogWhereInput | null
  }

  export type UserActivitesOrderByRelevanceInput = {
    fields: UserActivitesOrderByRelevanceFieldEnum | UserActivitesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserActivitesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    title?: SortOrder
    stepsCount?: SortOrder
    effectToBody?: SortOrder
    sleepTrackerId?: SortOrder
    userHydrationId?: SortOrder
    stepTrackerId?: SortOrder
    foodLogId?: SortOrder
    physicalActivityLogId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserActivitesAvgOrderByAggregateInput = {
    stepsCount?: SortOrder
  }

  export type UserActivitesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    title?: SortOrder
    stepsCount?: SortOrder
    effectToBody?: SortOrder
    sleepTrackerId?: SortOrder
    userHydrationId?: SortOrder
    stepTrackerId?: SortOrder
    foodLogId?: SortOrder
    physicalActivityLogId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserActivitesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    title?: SortOrder
    stepsCount?: SortOrder
    effectToBody?: SortOrder
    sleepTrackerId?: SortOrder
    userHydrationId?: SortOrder
    stepTrackerId?: SortOrder
    foodLogId?: SortOrder
    physicalActivityLogId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserActivitesSumOrderByAggregateInput = {
    stepsCount?: SortOrder
  }

  export type EnumACTIVITY_TYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ACTIVITY_TYPE | EnumACTIVITY_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.ACTIVITY_TYPE[]
    notIn?: $Enums.ACTIVITY_TYPE[]
    not?: NestedEnumACTIVITY_TYPEWithAggregatesFilter<$PrismaModel> | $Enums.ACTIVITY_TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumACTIVITY_TYPEFilter<$PrismaModel>
    _max?: NestedEnumACTIVITY_TYPEFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumSENDERFilter<$PrismaModel = never> = {
    equals?: $Enums.SENDER | EnumSENDERFieldRefInput<$PrismaModel>
    in?: $Enums.SENDER[]
    notIn?: $Enums.SENDER[]
    not?: NestedEnumSENDERFilter<$PrismaModel> | $Enums.SENDER
  }

  export type ChatbotOrderByRelevanceInput = {
    fields: ChatbotOrderByRelevanceFieldEnum | ChatbotOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChatbotCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    payload?: SortOrder
    sender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatbotMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    payload?: SortOrder
    sender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatbotMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    payload?: SortOrder
    sender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSENDERWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SENDER | EnumSENDERFieldRefInput<$PrismaModel>
    in?: $Enums.SENDER[]
    notIn?: $Enums.SENDER[]
    not?: NestedEnumSENDERWithAggregatesFilter<$PrismaModel> | $Enums.SENDER
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSENDERFilter<$PrismaModel>
    _max?: NestedEnumSENDERFilter<$PrismaModel>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AuthenticatorCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput> | AuthenticatorCreateWithoutUserInput[] | AuthenticatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthenticatorCreateOrConnectWithoutUserInput | AuthenticatorCreateOrConnectWithoutUserInput[]
    createMany?: AuthenticatorCreateManyUserInputEnvelope
    connect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
  }

  export type ChatbotCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatbotCreateWithoutUserInput, ChatbotUncheckedCreateWithoutUserInput> | ChatbotCreateWithoutUserInput[] | ChatbotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatbotCreateOrConnectWithoutUserInput | ChatbotCreateOrConnectWithoutUserInput[]
    createMany?: ChatbotCreateManyUserInputEnvelope
    connect?: ChatbotWhereUniqueInput | ChatbotWhereUniqueInput[]
  }

  export type UserCharacteristicsCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCharacteristicsCreateWithoutUserInput, UserCharacteristicsUncheckedCreateWithoutUserInput> | UserCharacteristicsCreateWithoutUserInput[] | UserCharacteristicsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCharacteristicsCreateOrConnectWithoutUserInput | UserCharacteristicsCreateOrConnectWithoutUserInput[]
    createMany?: UserCharacteristicsCreateManyUserInputEnvelope
    connect?: UserCharacteristicsWhereUniqueInput | UserCharacteristicsWhereUniqueInput[]
  }

  export type PhysicalActivityLogCreateNestedManyWithoutUserInput = {
    create?: XOR<PhysicalActivityLogCreateWithoutUserInput, PhysicalActivityLogUncheckedCreateWithoutUserInput> | PhysicalActivityLogCreateWithoutUserInput[] | PhysicalActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhysicalActivityLogCreateOrConnectWithoutUserInput | PhysicalActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: PhysicalActivityLogCreateManyUserInputEnvelope
    connect?: PhysicalActivityLogWhereUniqueInput | PhysicalActivityLogWhereUniqueInput[]
  }

  export type UserActivitesCreateNestedManyWithoutUserInput = {
    create?: XOR<UserActivitesCreateWithoutUserInput, UserActivitesUncheckedCreateWithoutUserInput> | UserActivitesCreateWithoutUserInput[] | UserActivitesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserActivitesCreateOrConnectWithoutUserInput | UserActivitesCreateOrConnectWithoutUserInput[]
    createMany?: UserActivitesCreateManyUserInputEnvelope
    connect?: UserActivitesWhereUniqueInput | UserActivitesWhereUniqueInput[]
  }

  export type FoodLogCreateNestedManyWithoutUserInput = {
    create?: XOR<FoodLogCreateWithoutUserInput, FoodLogUncheckedCreateWithoutUserInput> | FoodLogCreateWithoutUserInput[] | FoodLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoodLogCreateOrConnectWithoutUserInput | FoodLogCreateOrConnectWithoutUserInput[]
    createMany?: FoodLogCreateManyUserInputEnvelope
    connect?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
  }

  export type UserHydrationCreateNestedManyWithoutUserInput = {
    create?: XOR<UserHydrationCreateWithoutUserInput, UserHydrationUncheckedCreateWithoutUserInput> | UserHydrationCreateWithoutUserInput[] | UserHydrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHydrationCreateOrConnectWithoutUserInput | UserHydrationCreateOrConnectWithoutUserInput[]
    createMany?: UserHydrationCreateManyUserInputEnvelope
    connect?: UserHydrationWhereUniqueInput | UserHydrationWhereUniqueInput[]
  }

  export type SleepTrackerCreateNestedManyWithoutUserInput = {
    create?: XOR<SleepTrackerCreateWithoutUserInput, SleepTrackerUncheckedCreateWithoutUserInput> | SleepTrackerCreateWithoutUserInput[] | SleepTrackerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SleepTrackerCreateOrConnectWithoutUserInput | SleepTrackerCreateOrConnectWithoutUserInput[]
    createMany?: SleepTrackerCreateManyUserInputEnvelope
    connect?: SleepTrackerWhereUniqueInput | SleepTrackerWhereUniqueInput[]
  }

  export type UserGoalCreateNestedOneWithoutUserInput = {
    create?: XOR<UserGoalCreateWithoutUserInput, UserGoalUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserGoalCreateOrConnectWithoutUserInput
    connect?: UserGoalWhereUniqueInput
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AuthenticatorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput> | AuthenticatorCreateWithoutUserInput[] | AuthenticatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthenticatorCreateOrConnectWithoutUserInput | AuthenticatorCreateOrConnectWithoutUserInput[]
    createMany?: AuthenticatorCreateManyUserInputEnvelope
    connect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
  }

  export type ChatbotUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatbotCreateWithoutUserInput, ChatbotUncheckedCreateWithoutUserInput> | ChatbotCreateWithoutUserInput[] | ChatbotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatbotCreateOrConnectWithoutUserInput | ChatbotCreateOrConnectWithoutUserInput[]
    createMany?: ChatbotCreateManyUserInputEnvelope
    connect?: ChatbotWhereUniqueInput | ChatbotWhereUniqueInput[]
  }

  export type UserCharacteristicsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCharacteristicsCreateWithoutUserInput, UserCharacteristicsUncheckedCreateWithoutUserInput> | UserCharacteristicsCreateWithoutUserInput[] | UserCharacteristicsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCharacteristicsCreateOrConnectWithoutUserInput | UserCharacteristicsCreateOrConnectWithoutUserInput[]
    createMany?: UserCharacteristicsCreateManyUserInputEnvelope
    connect?: UserCharacteristicsWhereUniqueInput | UserCharacteristicsWhereUniqueInput[]
  }

  export type PhysicalActivityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PhysicalActivityLogCreateWithoutUserInput, PhysicalActivityLogUncheckedCreateWithoutUserInput> | PhysicalActivityLogCreateWithoutUserInput[] | PhysicalActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhysicalActivityLogCreateOrConnectWithoutUserInput | PhysicalActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: PhysicalActivityLogCreateManyUserInputEnvelope
    connect?: PhysicalActivityLogWhereUniqueInput | PhysicalActivityLogWhereUniqueInput[]
  }

  export type UserActivitesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserActivitesCreateWithoutUserInput, UserActivitesUncheckedCreateWithoutUserInput> | UserActivitesCreateWithoutUserInput[] | UserActivitesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserActivitesCreateOrConnectWithoutUserInput | UserActivitesCreateOrConnectWithoutUserInput[]
    createMany?: UserActivitesCreateManyUserInputEnvelope
    connect?: UserActivitesWhereUniqueInput | UserActivitesWhereUniqueInput[]
  }

  export type FoodLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FoodLogCreateWithoutUserInput, FoodLogUncheckedCreateWithoutUserInput> | FoodLogCreateWithoutUserInput[] | FoodLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoodLogCreateOrConnectWithoutUserInput | FoodLogCreateOrConnectWithoutUserInput[]
    createMany?: FoodLogCreateManyUserInputEnvelope
    connect?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
  }

  export type UserHydrationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserHydrationCreateWithoutUserInput, UserHydrationUncheckedCreateWithoutUserInput> | UserHydrationCreateWithoutUserInput[] | UserHydrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHydrationCreateOrConnectWithoutUserInput | UserHydrationCreateOrConnectWithoutUserInput[]
    createMany?: UserHydrationCreateManyUserInputEnvelope
    connect?: UserHydrationWhereUniqueInput | UserHydrationWhereUniqueInput[]
  }

  export type SleepTrackerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SleepTrackerCreateWithoutUserInput, SleepTrackerUncheckedCreateWithoutUserInput> | SleepTrackerCreateWithoutUserInput[] | SleepTrackerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SleepTrackerCreateOrConnectWithoutUserInput | SleepTrackerCreateOrConnectWithoutUserInput[]
    createMany?: SleepTrackerCreateManyUserInputEnvelope
    connect?: SleepTrackerWhereUniqueInput | SleepTrackerWhereUniqueInput[]
  }

  export type UserGoalUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserGoalCreateWithoutUserInput, UserGoalUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserGoalCreateOrConnectWithoutUserInput
    connect?: UserGoalWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AuthenticatorUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput> | AuthenticatorCreateWithoutUserInput[] | AuthenticatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthenticatorCreateOrConnectWithoutUserInput | AuthenticatorCreateOrConnectWithoutUserInput[]
    upsert?: AuthenticatorUpsertWithWhereUniqueWithoutUserInput | AuthenticatorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthenticatorCreateManyUserInputEnvelope
    set?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    disconnect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    delete?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    connect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    update?: AuthenticatorUpdateWithWhereUniqueWithoutUserInput | AuthenticatorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthenticatorUpdateManyWithWhereWithoutUserInput | AuthenticatorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthenticatorScalarWhereInput | AuthenticatorScalarWhereInput[]
  }

  export type ChatbotUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatbotCreateWithoutUserInput, ChatbotUncheckedCreateWithoutUserInput> | ChatbotCreateWithoutUserInput[] | ChatbotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatbotCreateOrConnectWithoutUserInput | ChatbotCreateOrConnectWithoutUserInput[]
    upsert?: ChatbotUpsertWithWhereUniqueWithoutUserInput | ChatbotUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatbotCreateManyUserInputEnvelope
    set?: ChatbotWhereUniqueInput | ChatbotWhereUniqueInput[]
    disconnect?: ChatbotWhereUniqueInput | ChatbotWhereUniqueInput[]
    delete?: ChatbotWhereUniqueInput | ChatbotWhereUniqueInput[]
    connect?: ChatbotWhereUniqueInput | ChatbotWhereUniqueInput[]
    update?: ChatbotUpdateWithWhereUniqueWithoutUserInput | ChatbotUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatbotUpdateManyWithWhereWithoutUserInput | ChatbotUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatbotScalarWhereInput | ChatbotScalarWhereInput[]
  }

  export type UserCharacteristicsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCharacteristicsCreateWithoutUserInput, UserCharacteristicsUncheckedCreateWithoutUserInput> | UserCharacteristicsCreateWithoutUserInput[] | UserCharacteristicsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCharacteristicsCreateOrConnectWithoutUserInput | UserCharacteristicsCreateOrConnectWithoutUserInput[]
    upsert?: UserCharacteristicsUpsertWithWhereUniqueWithoutUserInput | UserCharacteristicsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCharacteristicsCreateManyUserInputEnvelope
    set?: UserCharacteristicsWhereUniqueInput | UserCharacteristicsWhereUniqueInput[]
    disconnect?: UserCharacteristicsWhereUniqueInput | UserCharacteristicsWhereUniqueInput[]
    delete?: UserCharacteristicsWhereUniqueInput | UserCharacteristicsWhereUniqueInput[]
    connect?: UserCharacteristicsWhereUniqueInput | UserCharacteristicsWhereUniqueInput[]
    update?: UserCharacteristicsUpdateWithWhereUniqueWithoutUserInput | UserCharacteristicsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCharacteristicsUpdateManyWithWhereWithoutUserInput | UserCharacteristicsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCharacteristicsScalarWhereInput | UserCharacteristicsScalarWhereInput[]
  }

  export type PhysicalActivityLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<PhysicalActivityLogCreateWithoutUserInput, PhysicalActivityLogUncheckedCreateWithoutUserInput> | PhysicalActivityLogCreateWithoutUserInput[] | PhysicalActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhysicalActivityLogCreateOrConnectWithoutUserInput | PhysicalActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: PhysicalActivityLogUpsertWithWhereUniqueWithoutUserInput | PhysicalActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PhysicalActivityLogCreateManyUserInputEnvelope
    set?: PhysicalActivityLogWhereUniqueInput | PhysicalActivityLogWhereUniqueInput[]
    disconnect?: PhysicalActivityLogWhereUniqueInput | PhysicalActivityLogWhereUniqueInput[]
    delete?: PhysicalActivityLogWhereUniqueInput | PhysicalActivityLogWhereUniqueInput[]
    connect?: PhysicalActivityLogWhereUniqueInput | PhysicalActivityLogWhereUniqueInput[]
    update?: PhysicalActivityLogUpdateWithWhereUniqueWithoutUserInput | PhysicalActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PhysicalActivityLogUpdateManyWithWhereWithoutUserInput | PhysicalActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PhysicalActivityLogScalarWhereInput | PhysicalActivityLogScalarWhereInput[]
  }

  export type UserActivitesUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserActivitesCreateWithoutUserInput, UserActivitesUncheckedCreateWithoutUserInput> | UserActivitesCreateWithoutUserInput[] | UserActivitesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserActivitesCreateOrConnectWithoutUserInput | UserActivitesCreateOrConnectWithoutUserInput[]
    upsert?: UserActivitesUpsertWithWhereUniqueWithoutUserInput | UserActivitesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserActivitesCreateManyUserInputEnvelope
    set?: UserActivitesWhereUniqueInput | UserActivitesWhereUniqueInput[]
    disconnect?: UserActivitesWhereUniqueInput | UserActivitesWhereUniqueInput[]
    delete?: UserActivitesWhereUniqueInput | UserActivitesWhereUniqueInput[]
    connect?: UserActivitesWhereUniqueInput | UserActivitesWhereUniqueInput[]
    update?: UserActivitesUpdateWithWhereUniqueWithoutUserInput | UserActivitesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserActivitesUpdateManyWithWhereWithoutUserInput | UserActivitesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserActivitesScalarWhereInput | UserActivitesScalarWhereInput[]
  }

  export type FoodLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<FoodLogCreateWithoutUserInput, FoodLogUncheckedCreateWithoutUserInput> | FoodLogCreateWithoutUserInput[] | FoodLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoodLogCreateOrConnectWithoutUserInput | FoodLogCreateOrConnectWithoutUserInput[]
    upsert?: FoodLogUpsertWithWhereUniqueWithoutUserInput | FoodLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FoodLogCreateManyUserInputEnvelope
    set?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
    disconnect?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
    delete?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
    connect?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
    update?: FoodLogUpdateWithWhereUniqueWithoutUserInput | FoodLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FoodLogUpdateManyWithWhereWithoutUserInput | FoodLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FoodLogScalarWhereInput | FoodLogScalarWhereInput[]
  }

  export type UserHydrationUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserHydrationCreateWithoutUserInput, UserHydrationUncheckedCreateWithoutUserInput> | UserHydrationCreateWithoutUserInput[] | UserHydrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHydrationCreateOrConnectWithoutUserInput | UserHydrationCreateOrConnectWithoutUserInput[]
    upsert?: UserHydrationUpsertWithWhereUniqueWithoutUserInput | UserHydrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserHydrationCreateManyUserInputEnvelope
    set?: UserHydrationWhereUniqueInput | UserHydrationWhereUniqueInput[]
    disconnect?: UserHydrationWhereUniqueInput | UserHydrationWhereUniqueInput[]
    delete?: UserHydrationWhereUniqueInput | UserHydrationWhereUniqueInput[]
    connect?: UserHydrationWhereUniqueInput | UserHydrationWhereUniqueInput[]
    update?: UserHydrationUpdateWithWhereUniqueWithoutUserInput | UserHydrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserHydrationUpdateManyWithWhereWithoutUserInput | UserHydrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserHydrationScalarWhereInput | UserHydrationScalarWhereInput[]
  }

  export type SleepTrackerUpdateManyWithoutUserNestedInput = {
    create?: XOR<SleepTrackerCreateWithoutUserInput, SleepTrackerUncheckedCreateWithoutUserInput> | SleepTrackerCreateWithoutUserInput[] | SleepTrackerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SleepTrackerCreateOrConnectWithoutUserInput | SleepTrackerCreateOrConnectWithoutUserInput[]
    upsert?: SleepTrackerUpsertWithWhereUniqueWithoutUserInput | SleepTrackerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SleepTrackerCreateManyUserInputEnvelope
    set?: SleepTrackerWhereUniqueInput | SleepTrackerWhereUniqueInput[]
    disconnect?: SleepTrackerWhereUniqueInput | SleepTrackerWhereUniqueInput[]
    delete?: SleepTrackerWhereUniqueInput | SleepTrackerWhereUniqueInput[]
    connect?: SleepTrackerWhereUniqueInput | SleepTrackerWhereUniqueInput[]
    update?: SleepTrackerUpdateWithWhereUniqueWithoutUserInput | SleepTrackerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SleepTrackerUpdateManyWithWhereWithoutUserInput | SleepTrackerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SleepTrackerScalarWhereInput | SleepTrackerScalarWhereInput[]
  }

  export type UserGoalUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserGoalCreateWithoutUserInput, UserGoalUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserGoalCreateOrConnectWithoutUserInput
    upsert?: UserGoalUpsertWithoutUserInput
    disconnect?: UserGoalWhereInput | boolean
    delete?: UserGoalWhereInput | boolean
    connect?: UserGoalWhereUniqueInput
    update?: XOR<XOR<UserGoalUpdateToOneWithWhereWithoutUserInput, UserGoalUpdateWithoutUserInput>, UserGoalUncheckedUpdateWithoutUserInput>
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AuthenticatorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput> | AuthenticatorCreateWithoutUserInput[] | AuthenticatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthenticatorCreateOrConnectWithoutUserInput | AuthenticatorCreateOrConnectWithoutUserInput[]
    upsert?: AuthenticatorUpsertWithWhereUniqueWithoutUserInput | AuthenticatorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthenticatorCreateManyUserInputEnvelope
    set?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    disconnect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    delete?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    connect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    update?: AuthenticatorUpdateWithWhereUniqueWithoutUserInput | AuthenticatorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthenticatorUpdateManyWithWhereWithoutUserInput | AuthenticatorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthenticatorScalarWhereInput | AuthenticatorScalarWhereInput[]
  }

  export type ChatbotUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatbotCreateWithoutUserInput, ChatbotUncheckedCreateWithoutUserInput> | ChatbotCreateWithoutUserInput[] | ChatbotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatbotCreateOrConnectWithoutUserInput | ChatbotCreateOrConnectWithoutUserInput[]
    upsert?: ChatbotUpsertWithWhereUniqueWithoutUserInput | ChatbotUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatbotCreateManyUserInputEnvelope
    set?: ChatbotWhereUniqueInput | ChatbotWhereUniqueInput[]
    disconnect?: ChatbotWhereUniqueInput | ChatbotWhereUniqueInput[]
    delete?: ChatbotWhereUniqueInput | ChatbotWhereUniqueInput[]
    connect?: ChatbotWhereUniqueInput | ChatbotWhereUniqueInput[]
    update?: ChatbotUpdateWithWhereUniqueWithoutUserInput | ChatbotUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatbotUpdateManyWithWhereWithoutUserInput | ChatbotUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatbotScalarWhereInput | ChatbotScalarWhereInput[]
  }

  export type UserCharacteristicsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCharacteristicsCreateWithoutUserInput, UserCharacteristicsUncheckedCreateWithoutUserInput> | UserCharacteristicsCreateWithoutUserInput[] | UserCharacteristicsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCharacteristicsCreateOrConnectWithoutUserInput | UserCharacteristicsCreateOrConnectWithoutUserInput[]
    upsert?: UserCharacteristicsUpsertWithWhereUniqueWithoutUserInput | UserCharacteristicsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCharacteristicsCreateManyUserInputEnvelope
    set?: UserCharacteristicsWhereUniqueInput | UserCharacteristicsWhereUniqueInput[]
    disconnect?: UserCharacteristicsWhereUniqueInput | UserCharacteristicsWhereUniqueInput[]
    delete?: UserCharacteristicsWhereUniqueInput | UserCharacteristicsWhereUniqueInput[]
    connect?: UserCharacteristicsWhereUniqueInput | UserCharacteristicsWhereUniqueInput[]
    update?: UserCharacteristicsUpdateWithWhereUniqueWithoutUserInput | UserCharacteristicsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCharacteristicsUpdateManyWithWhereWithoutUserInput | UserCharacteristicsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCharacteristicsScalarWhereInput | UserCharacteristicsScalarWhereInput[]
  }

  export type PhysicalActivityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PhysicalActivityLogCreateWithoutUserInput, PhysicalActivityLogUncheckedCreateWithoutUserInput> | PhysicalActivityLogCreateWithoutUserInput[] | PhysicalActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhysicalActivityLogCreateOrConnectWithoutUserInput | PhysicalActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: PhysicalActivityLogUpsertWithWhereUniqueWithoutUserInput | PhysicalActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PhysicalActivityLogCreateManyUserInputEnvelope
    set?: PhysicalActivityLogWhereUniqueInput | PhysicalActivityLogWhereUniqueInput[]
    disconnect?: PhysicalActivityLogWhereUniqueInput | PhysicalActivityLogWhereUniqueInput[]
    delete?: PhysicalActivityLogWhereUniqueInput | PhysicalActivityLogWhereUniqueInput[]
    connect?: PhysicalActivityLogWhereUniqueInput | PhysicalActivityLogWhereUniqueInput[]
    update?: PhysicalActivityLogUpdateWithWhereUniqueWithoutUserInput | PhysicalActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PhysicalActivityLogUpdateManyWithWhereWithoutUserInput | PhysicalActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PhysicalActivityLogScalarWhereInput | PhysicalActivityLogScalarWhereInput[]
  }

  export type UserActivitesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserActivitesCreateWithoutUserInput, UserActivitesUncheckedCreateWithoutUserInput> | UserActivitesCreateWithoutUserInput[] | UserActivitesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserActivitesCreateOrConnectWithoutUserInput | UserActivitesCreateOrConnectWithoutUserInput[]
    upsert?: UserActivitesUpsertWithWhereUniqueWithoutUserInput | UserActivitesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserActivitesCreateManyUserInputEnvelope
    set?: UserActivitesWhereUniqueInput | UserActivitesWhereUniqueInput[]
    disconnect?: UserActivitesWhereUniqueInput | UserActivitesWhereUniqueInput[]
    delete?: UserActivitesWhereUniqueInput | UserActivitesWhereUniqueInput[]
    connect?: UserActivitesWhereUniqueInput | UserActivitesWhereUniqueInput[]
    update?: UserActivitesUpdateWithWhereUniqueWithoutUserInput | UserActivitesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserActivitesUpdateManyWithWhereWithoutUserInput | UserActivitesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserActivitesScalarWhereInput | UserActivitesScalarWhereInput[]
  }

  export type FoodLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FoodLogCreateWithoutUserInput, FoodLogUncheckedCreateWithoutUserInput> | FoodLogCreateWithoutUserInput[] | FoodLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoodLogCreateOrConnectWithoutUserInput | FoodLogCreateOrConnectWithoutUserInput[]
    upsert?: FoodLogUpsertWithWhereUniqueWithoutUserInput | FoodLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FoodLogCreateManyUserInputEnvelope
    set?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
    disconnect?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
    delete?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
    connect?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
    update?: FoodLogUpdateWithWhereUniqueWithoutUserInput | FoodLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FoodLogUpdateManyWithWhereWithoutUserInput | FoodLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FoodLogScalarWhereInput | FoodLogScalarWhereInput[]
  }

  export type UserHydrationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserHydrationCreateWithoutUserInput, UserHydrationUncheckedCreateWithoutUserInput> | UserHydrationCreateWithoutUserInput[] | UserHydrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHydrationCreateOrConnectWithoutUserInput | UserHydrationCreateOrConnectWithoutUserInput[]
    upsert?: UserHydrationUpsertWithWhereUniqueWithoutUserInput | UserHydrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserHydrationCreateManyUserInputEnvelope
    set?: UserHydrationWhereUniqueInput | UserHydrationWhereUniqueInput[]
    disconnect?: UserHydrationWhereUniqueInput | UserHydrationWhereUniqueInput[]
    delete?: UserHydrationWhereUniqueInput | UserHydrationWhereUniqueInput[]
    connect?: UserHydrationWhereUniqueInput | UserHydrationWhereUniqueInput[]
    update?: UserHydrationUpdateWithWhereUniqueWithoutUserInput | UserHydrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserHydrationUpdateManyWithWhereWithoutUserInput | UserHydrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserHydrationScalarWhereInput | UserHydrationScalarWhereInput[]
  }

  export type SleepTrackerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SleepTrackerCreateWithoutUserInput, SleepTrackerUncheckedCreateWithoutUserInput> | SleepTrackerCreateWithoutUserInput[] | SleepTrackerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SleepTrackerCreateOrConnectWithoutUserInput | SleepTrackerCreateOrConnectWithoutUserInput[]
    upsert?: SleepTrackerUpsertWithWhereUniqueWithoutUserInput | SleepTrackerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SleepTrackerCreateManyUserInputEnvelope
    set?: SleepTrackerWhereUniqueInput | SleepTrackerWhereUniqueInput[]
    disconnect?: SleepTrackerWhereUniqueInput | SleepTrackerWhereUniqueInput[]
    delete?: SleepTrackerWhereUniqueInput | SleepTrackerWhereUniqueInput[]
    connect?: SleepTrackerWhereUniqueInput | SleepTrackerWhereUniqueInput[]
    update?: SleepTrackerUpdateWithWhereUniqueWithoutUserInput | SleepTrackerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SleepTrackerUpdateManyWithWhereWithoutUserInput | SleepTrackerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SleepTrackerScalarWhereInput | SleepTrackerScalarWhereInput[]
  }

  export type UserGoalUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserGoalCreateWithoutUserInput, UserGoalUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserGoalCreateOrConnectWithoutUserInput
    upsert?: UserGoalUpsertWithoutUserInput
    disconnect?: UserGoalWhereInput | boolean
    delete?: UserGoalWhereInput | boolean
    connect?: UserGoalWhereUniqueInput
    update?: XOR<XOR<UserGoalUpdateToOneWithWhereWithoutUserInput, UserGoalUpdateWithoutUserInput>, UserGoalUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAuthenticatorInput = {
    create?: XOR<UserCreateWithoutAuthenticatorInput, UserUncheckedCreateWithoutAuthenticatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthenticatorInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutAuthenticatorNestedInput = {
    create?: XOR<UserCreateWithoutAuthenticatorInput, UserUncheckedCreateWithoutAuthenticatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthenticatorInput
    upsert?: UserUpsertWithoutAuthenticatorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuthenticatorInput, UserUpdateWithoutAuthenticatorInput>, UserUncheckedUpdateWithoutAuthenticatorInput>
  }

  export type UserCreateNestedOneWithoutUserCharacteristicInput = {
    create?: XOR<UserCreateWithoutUserCharacteristicInput, UserUncheckedCreateWithoutUserCharacteristicInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCharacteristicInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserCharacteristicNestedInput = {
    create?: XOR<UserCreateWithoutUserCharacteristicInput, UserUncheckedCreateWithoutUserCharacteristicInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCharacteristicInput
    upsert?: UserUpsertWithoutUserCharacteristicInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserCharacteristicInput, UserUpdateWithoutUserCharacteristicInput>, UserUncheckedUpdateWithoutUserCharacteristicInput>
  }

  export type UserCreateNestedOneWithoutUserGoalInput = {
    create?: XOR<UserCreateWithoutUserGoalInput, UserUncheckedCreateWithoutUserGoalInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserGoalInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserGoalNestedInput = {
    create?: XOR<UserCreateWithoutUserGoalInput, UserUncheckedCreateWithoutUserGoalInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserGoalInput
    upsert?: UserUpsertWithoutUserGoalInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserGoalInput, UserUpdateWithoutUserGoalInput>, UserUncheckedUpdateWithoutUserGoalInput>
  }

  export type UserCreateNestedOneWithoutPhysicalActivityLogInput = {
    create?: XOR<UserCreateWithoutPhysicalActivityLogInput, UserUncheckedCreateWithoutPhysicalActivityLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutPhysicalActivityLogInput
    connect?: UserWhereUniqueInput
  }

  export type ActivityTypeCreateNestedManyWithoutPhysicalActivityInput = {
    create?: XOR<ActivityTypeCreateWithoutPhysicalActivityInput, ActivityTypeUncheckedCreateWithoutPhysicalActivityInput> | ActivityTypeCreateWithoutPhysicalActivityInput[] | ActivityTypeUncheckedCreateWithoutPhysicalActivityInput[]
    connectOrCreate?: ActivityTypeCreateOrConnectWithoutPhysicalActivityInput | ActivityTypeCreateOrConnectWithoutPhysicalActivityInput[]
    createMany?: ActivityTypeCreateManyPhysicalActivityInputEnvelope
    connect?: ActivityTypeWhereUniqueInput | ActivityTypeWhereUniqueInput[]
  }

  export type UserActivitesCreateNestedOneWithoutPhysicalActivityLogInput = {
    create?: XOR<UserActivitesCreateWithoutPhysicalActivityLogInput, UserActivitesUncheckedCreateWithoutPhysicalActivityLogInput>
    connectOrCreate?: UserActivitesCreateOrConnectWithoutPhysicalActivityLogInput
    connect?: UserActivitesWhereUniqueInput
  }

  export type ActivityTypeUncheckedCreateNestedManyWithoutPhysicalActivityInput = {
    create?: XOR<ActivityTypeCreateWithoutPhysicalActivityInput, ActivityTypeUncheckedCreateWithoutPhysicalActivityInput> | ActivityTypeCreateWithoutPhysicalActivityInput[] | ActivityTypeUncheckedCreateWithoutPhysicalActivityInput[]
    connectOrCreate?: ActivityTypeCreateOrConnectWithoutPhysicalActivityInput | ActivityTypeCreateOrConnectWithoutPhysicalActivityInput[]
    createMany?: ActivityTypeCreateManyPhysicalActivityInputEnvelope
    connect?: ActivityTypeWhereUniqueInput | ActivityTypeWhereUniqueInput[]
  }

  export type UserActivitesUncheckedCreateNestedOneWithoutPhysicalActivityLogInput = {
    create?: XOR<UserActivitesCreateWithoutPhysicalActivityLogInput, UserActivitesUncheckedCreateWithoutPhysicalActivityLogInput>
    connectOrCreate?: UserActivitesCreateOrConnectWithoutPhysicalActivityLogInput
    connect?: UserActivitesWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPhysicalActivityLogNestedInput = {
    create?: XOR<UserCreateWithoutPhysicalActivityLogInput, UserUncheckedCreateWithoutPhysicalActivityLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutPhysicalActivityLogInput
    upsert?: UserUpsertWithoutPhysicalActivityLogInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPhysicalActivityLogInput, UserUpdateWithoutPhysicalActivityLogInput>, UserUncheckedUpdateWithoutPhysicalActivityLogInput>
  }

  export type ActivityTypeUpdateManyWithoutPhysicalActivityNestedInput = {
    create?: XOR<ActivityTypeCreateWithoutPhysicalActivityInput, ActivityTypeUncheckedCreateWithoutPhysicalActivityInput> | ActivityTypeCreateWithoutPhysicalActivityInput[] | ActivityTypeUncheckedCreateWithoutPhysicalActivityInput[]
    connectOrCreate?: ActivityTypeCreateOrConnectWithoutPhysicalActivityInput | ActivityTypeCreateOrConnectWithoutPhysicalActivityInput[]
    upsert?: ActivityTypeUpsertWithWhereUniqueWithoutPhysicalActivityInput | ActivityTypeUpsertWithWhereUniqueWithoutPhysicalActivityInput[]
    createMany?: ActivityTypeCreateManyPhysicalActivityInputEnvelope
    set?: ActivityTypeWhereUniqueInput | ActivityTypeWhereUniqueInput[]
    disconnect?: ActivityTypeWhereUniqueInput | ActivityTypeWhereUniqueInput[]
    delete?: ActivityTypeWhereUniqueInput | ActivityTypeWhereUniqueInput[]
    connect?: ActivityTypeWhereUniqueInput | ActivityTypeWhereUniqueInput[]
    update?: ActivityTypeUpdateWithWhereUniqueWithoutPhysicalActivityInput | ActivityTypeUpdateWithWhereUniqueWithoutPhysicalActivityInput[]
    updateMany?: ActivityTypeUpdateManyWithWhereWithoutPhysicalActivityInput | ActivityTypeUpdateManyWithWhereWithoutPhysicalActivityInput[]
    deleteMany?: ActivityTypeScalarWhereInput | ActivityTypeScalarWhereInput[]
  }

  export type UserActivitesUpdateOneWithoutPhysicalActivityLogNestedInput = {
    create?: XOR<UserActivitesCreateWithoutPhysicalActivityLogInput, UserActivitesUncheckedCreateWithoutPhysicalActivityLogInput>
    connectOrCreate?: UserActivitesCreateOrConnectWithoutPhysicalActivityLogInput
    upsert?: UserActivitesUpsertWithoutPhysicalActivityLogInput
    disconnect?: UserActivitesWhereInput | boolean
    delete?: UserActivitesWhereInput | boolean
    connect?: UserActivitesWhereUniqueInput
    update?: XOR<XOR<UserActivitesUpdateToOneWithWhereWithoutPhysicalActivityLogInput, UserActivitesUpdateWithoutPhysicalActivityLogInput>, UserActivitesUncheckedUpdateWithoutPhysicalActivityLogInput>
  }

  export type ActivityTypeUncheckedUpdateManyWithoutPhysicalActivityNestedInput = {
    create?: XOR<ActivityTypeCreateWithoutPhysicalActivityInput, ActivityTypeUncheckedCreateWithoutPhysicalActivityInput> | ActivityTypeCreateWithoutPhysicalActivityInput[] | ActivityTypeUncheckedCreateWithoutPhysicalActivityInput[]
    connectOrCreate?: ActivityTypeCreateOrConnectWithoutPhysicalActivityInput | ActivityTypeCreateOrConnectWithoutPhysicalActivityInput[]
    upsert?: ActivityTypeUpsertWithWhereUniqueWithoutPhysicalActivityInput | ActivityTypeUpsertWithWhereUniqueWithoutPhysicalActivityInput[]
    createMany?: ActivityTypeCreateManyPhysicalActivityInputEnvelope
    set?: ActivityTypeWhereUniqueInput | ActivityTypeWhereUniqueInput[]
    disconnect?: ActivityTypeWhereUniqueInput | ActivityTypeWhereUniqueInput[]
    delete?: ActivityTypeWhereUniqueInput | ActivityTypeWhereUniqueInput[]
    connect?: ActivityTypeWhereUniqueInput | ActivityTypeWhereUniqueInput[]
    update?: ActivityTypeUpdateWithWhereUniqueWithoutPhysicalActivityInput | ActivityTypeUpdateWithWhereUniqueWithoutPhysicalActivityInput[]
    updateMany?: ActivityTypeUpdateManyWithWhereWithoutPhysicalActivityInput | ActivityTypeUpdateManyWithWhereWithoutPhysicalActivityInput[]
    deleteMany?: ActivityTypeScalarWhereInput | ActivityTypeScalarWhereInput[]
  }

  export type UserActivitesUncheckedUpdateOneWithoutPhysicalActivityLogNestedInput = {
    create?: XOR<UserActivitesCreateWithoutPhysicalActivityLogInput, UserActivitesUncheckedCreateWithoutPhysicalActivityLogInput>
    connectOrCreate?: UserActivitesCreateOrConnectWithoutPhysicalActivityLogInput
    upsert?: UserActivitesUpsertWithoutPhysicalActivityLogInput
    disconnect?: UserActivitesWhereInput | boolean
    delete?: UserActivitesWhereInput | boolean
    connect?: UserActivitesWhereUniqueInput
    update?: XOR<XOR<UserActivitesUpdateToOneWithWhereWithoutPhysicalActivityLogInput, UserActivitesUpdateWithoutPhysicalActivityLogInput>, UserActivitesUncheckedUpdateWithoutPhysicalActivityLogInput>
  }

  export type PhysicalActivityLogCreateNestedOneWithoutActivityTypeInput = {
    create?: XOR<PhysicalActivityLogCreateWithoutActivityTypeInput, PhysicalActivityLogUncheckedCreateWithoutActivityTypeInput>
    connectOrCreate?: PhysicalActivityLogCreateOrConnectWithoutActivityTypeInput
    connect?: PhysicalActivityLogWhereUniqueInput
  }

  export type PhysicalActivityLogUpdateOneRequiredWithoutActivityTypeNestedInput = {
    create?: XOR<PhysicalActivityLogCreateWithoutActivityTypeInput, PhysicalActivityLogUncheckedCreateWithoutActivityTypeInput>
    connectOrCreate?: PhysicalActivityLogCreateOrConnectWithoutActivityTypeInput
    upsert?: PhysicalActivityLogUpsertWithoutActivityTypeInput
    connect?: PhysicalActivityLogWhereUniqueInput
    update?: XOR<XOR<PhysicalActivityLogUpdateToOneWithWhereWithoutActivityTypeInput, PhysicalActivityLogUpdateWithoutActivityTypeInput>, PhysicalActivityLogUncheckedUpdateWithoutActivityTypeInput>
  }

  export type UserCreateNestedOneWithoutFoodLogInput = {
    create?: XOR<UserCreateWithoutFoodLogInput, UserUncheckedCreateWithoutFoodLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutFoodLogInput
    connect?: UserWhereUniqueInput
  }

  export type UserActivitesCreateNestedOneWithoutFoodLogInput = {
    create?: XOR<UserActivitesCreateWithoutFoodLogInput, UserActivitesUncheckedCreateWithoutFoodLogInput>
    connectOrCreate?: UserActivitesCreateOrConnectWithoutFoodLogInput
    connect?: UserActivitesWhereUniqueInput
  }

  export type UserActivitesUncheckedCreateNestedOneWithoutFoodLogInput = {
    create?: XOR<UserActivitesCreateWithoutFoodLogInput, UserActivitesUncheckedCreateWithoutFoodLogInput>
    connectOrCreate?: UserActivitesCreateOrConnectWithoutFoodLogInput
    connect?: UserActivitesWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFoodLogNestedInput = {
    create?: XOR<UserCreateWithoutFoodLogInput, UserUncheckedCreateWithoutFoodLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutFoodLogInput
    upsert?: UserUpsertWithoutFoodLogInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFoodLogInput, UserUpdateWithoutFoodLogInput>, UserUncheckedUpdateWithoutFoodLogInput>
  }

  export type UserActivitesUpdateOneWithoutFoodLogNestedInput = {
    create?: XOR<UserActivitesCreateWithoutFoodLogInput, UserActivitesUncheckedCreateWithoutFoodLogInput>
    connectOrCreate?: UserActivitesCreateOrConnectWithoutFoodLogInput
    upsert?: UserActivitesUpsertWithoutFoodLogInput
    disconnect?: UserActivitesWhereInput | boolean
    delete?: UserActivitesWhereInput | boolean
    connect?: UserActivitesWhereUniqueInput
    update?: XOR<XOR<UserActivitesUpdateToOneWithWhereWithoutFoodLogInput, UserActivitesUpdateWithoutFoodLogInput>, UserActivitesUncheckedUpdateWithoutFoodLogInput>
  }

  export type UserActivitesUncheckedUpdateOneWithoutFoodLogNestedInput = {
    create?: XOR<UserActivitesCreateWithoutFoodLogInput, UserActivitesUncheckedCreateWithoutFoodLogInput>
    connectOrCreate?: UserActivitesCreateOrConnectWithoutFoodLogInput
    upsert?: UserActivitesUpsertWithoutFoodLogInput
    disconnect?: UserActivitesWhereInput | boolean
    delete?: UserActivitesWhereInput | boolean
    connect?: UserActivitesWhereUniqueInput
    update?: XOR<XOR<UserActivitesUpdateToOneWithWhereWithoutFoodLogInput, UserActivitesUpdateWithoutFoodLogInput>, UserActivitesUncheckedUpdateWithoutFoodLogInput>
  }

  export type UserActivitesCreateNestedOneWithoutUserHydrationInput = {
    create?: XOR<UserActivitesCreateWithoutUserHydrationInput, UserActivitesUncheckedCreateWithoutUserHydrationInput>
    connectOrCreate?: UserActivitesCreateOrConnectWithoutUserHydrationInput
    connect?: UserActivitesWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserHydrationInput = {
    create?: XOR<UserCreateWithoutUserHydrationInput, UserUncheckedCreateWithoutUserHydrationInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserHydrationInput
    connect?: UserWhereUniqueInput
  }

  export type UserActivitesUncheckedCreateNestedOneWithoutUserHydrationInput = {
    create?: XOR<UserActivitesCreateWithoutUserHydrationInput, UserActivitesUncheckedCreateWithoutUserHydrationInput>
    connectOrCreate?: UserActivitesCreateOrConnectWithoutUserHydrationInput
    connect?: UserActivitesWhereUniqueInput
  }

  export type UserActivitesUpdateOneWithoutUserHydrationNestedInput = {
    create?: XOR<UserActivitesCreateWithoutUserHydrationInput, UserActivitesUncheckedCreateWithoutUserHydrationInput>
    connectOrCreate?: UserActivitesCreateOrConnectWithoutUserHydrationInput
    upsert?: UserActivitesUpsertWithoutUserHydrationInput
    disconnect?: UserActivitesWhereInput | boolean
    delete?: UserActivitesWhereInput | boolean
    connect?: UserActivitesWhereUniqueInput
    update?: XOR<XOR<UserActivitesUpdateToOneWithWhereWithoutUserHydrationInput, UserActivitesUpdateWithoutUserHydrationInput>, UserActivitesUncheckedUpdateWithoutUserHydrationInput>
  }

  export type UserUpdateOneRequiredWithoutUserHydrationNestedInput = {
    create?: XOR<UserCreateWithoutUserHydrationInput, UserUncheckedCreateWithoutUserHydrationInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserHydrationInput
    upsert?: UserUpsertWithoutUserHydrationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserHydrationInput, UserUpdateWithoutUserHydrationInput>, UserUncheckedUpdateWithoutUserHydrationInput>
  }

  export type UserActivitesUncheckedUpdateOneWithoutUserHydrationNestedInput = {
    create?: XOR<UserActivitesCreateWithoutUserHydrationInput, UserActivitesUncheckedCreateWithoutUserHydrationInput>
    connectOrCreate?: UserActivitesCreateOrConnectWithoutUserHydrationInput
    upsert?: UserActivitesUpsertWithoutUserHydrationInput
    disconnect?: UserActivitesWhereInput | boolean
    delete?: UserActivitesWhereInput | boolean
    connect?: UserActivitesWhereUniqueInput
    update?: XOR<XOR<UserActivitesUpdateToOneWithWhereWithoutUserHydrationInput, UserActivitesUpdateWithoutUserHydrationInput>, UserActivitesUncheckedUpdateWithoutUserHydrationInput>
  }

  export type UserCreateNestedOneWithoutSleepTrackerInput = {
    create?: XOR<UserCreateWithoutSleepTrackerInput, UserUncheckedCreateWithoutSleepTrackerInput>
    connectOrCreate?: UserCreateOrConnectWithoutSleepTrackerInput
    connect?: UserWhereUniqueInput
  }

  export type UserActivitesCreateNestedOneWithoutSleepTrackerInput = {
    create?: XOR<UserActivitesCreateWithoutSleepTrackerInput, UserActivitesUncheckedCreateWithoutSleepTrackerInput>
    connectOrCreate?: UserActivitesCreateOrConnectWithoutSleepTrackerInput
    connect?: UserActivitesWhereUniqueInput
  }

  export type UserActivitesUncheckedCreateNestedOneWithoutSleepTrackerInput = {
    create?: XOR<UserActivitesCreateWithoutSleepTrackerInput, UserActivitesUncheckedCreateWithoutSleepTrackerInput>
    connectOrCreate?: UserActivitesCreateOrConnectWithoutSleepTrackerInput
    connect?: UserActivitesWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSleepTrackerNestedInput = {
    create?: XOR<UserCreateWithoutSleepTrackerInput, UserUncheckedCreateWithoutSleepTrackerInput>
    connectOrCreate?: UserCreateOrConnectWithoutSleepTrackerInput
    upsert?: UserUpsertWithoutSleepTrackerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSleepTrackerInput, UserUpdateWithoutSleepTrackerInput>, UserUncheckedUpdateWithoutSleepTrackerInput>
  }

  export type UserActivitesUpdateOneWithoutSleepTrackerNestedInput = {
    create?: XOR<UserActivitesCreateWithoutSleepTrackerInput, UserActivitesUncheckedCreateWithoutSleepTrackerInput>
    connectOrCreate?: UserActivitesCreateOrConnectWithoutSleepTrackerInput
    upsert?: UserActivitesUpsertWithoutSleepTrackerInput
    disconnect?: UserActivitesWhereInput | boolean
    delete?: UserActivitesWhereInput | boolean
    connect?: UserActivitesWhereUniqueInput
    update?: XOR<XOR<UserActivitesUpdateToOneWithWhereWithoutSleepTrackerInput, UserActivitesUpdateWithoutSleepTrackerInput>, UserActivitesUncheckedUpdateWithoutSleepTrackerInput>
  }

  export type UserActivitesUncheckedUpdateOneWithoutSleepTrackerNestedInput = {
    create?: XOR<UserActivitesCreateWithoutSleepTrackerInput, UserActivitesUncheckedCreateWithoutSleepTrackerInput>
    connectOrCreate?: UserActivitesCreateOrConnectWithoutSleepTrackerInput
    upsert?: UserActivitesUpsertWithoutSleepTrackerInput
    disconnect?: UserActivitesWhereInput | boolean
    delete?: UserActivitesWhereInput | boolean
    connect?: UserActivitesWhereUniqueInput
    update?: XOR<XOR<UserActivitesUpdateToOneWithWhereWithoutSleepTrackerInput, UserActivitesUpdateWithoutSleepTrackerInput>, UserActivitesUncheckedUpdateWithoutSleepTrackerInput>
  }

  export type UserCreateNestedOneWithoutUserActivitesInput = {
    create?: XOR<UserCreateWithoutUserActivitesInput, UserUncheckedCreateWithoutUserActivitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserActivitesInput
    connect?: UserWhereUniqueInput
  }

  export type SleepTrackerCreateNestedOneWithoutUserActivityInput = {
    create?: XOR<SleepTrackerCreateWithoutUserActivityInput, SleepTrackerUncheckedCreateWithoutUserActivityInput>
    connectOrCreate?: SleepTrackerCreateOrConnectWithoutUserActivityInput
    connect?: SleepTrackerWhereUniqueInput
  }

  export type UserHydrationCreateNestedOneWithoutUserActivityInput = {
    create?: XOR<UserHydrationCreateWithoutUserActivityInput, UserHydrationUncheckedCreateWithoutUserActivityInput>
    connectOrCreate?: UserHydrationCreateOrConnectWithoutUserActivityInput
    connect?: UserHydrationWhereUniqueInput
  }

  export type FoodLogCreateNestedOneWithoutUserActivityIdInput = {
    create?: XOR<FoodLogCreateWithoutUserActivityIdInput, FoodLogUncheckedCreateWithoutUserActivityIdInput>
    connectOrCreate?: FoodLogCreateOrConnectWithoutUserActivityIdInput
    connect?: FoodLogWhereUniqueInput
  }

  export type PhysicalActivityLogCreateNestedOneWithoutUserActivityIdInput = {
    create?: XOR<PhysicalActivityLogCreateWithoutUserActivityIdInput, PhysicalActivityLogUncheckedCreateWithoutUserActivityIdInput>
    connectOrCreate?: PhysicalActivityLogCreateOrConnectWithoutUserActivityIdInput
    connect?: PhysicalActivityLogWhereUniqueInput
  }

  export type EnumACTIVITY_TYPEFieldUpdateOperationsInput = {
    set?: $Enums.ACTIVITY_TYPE
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutUserActivitesNestedInput = {
    create?: XOR<UserCreateWithoutUserActivitesInput, UserUncheckedCreateWithoutUserActivitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserActivitesInput
    upsert?: UserUpsertWithoutUserActivitesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserActivitesInput, UserUpdateWithoutUserActivitesInput>, UserUncheckedUpdateWithoutUserActivitesInput>
  }

  export type SleepTrackerUpdateOneWithoutUserActivityNestedInput = {
    create?: XOR<SleepTrackerCreateWithoutUserActivityInput, SleepTrackerUncheckedCreateWithoutUserActivityInput>
    connectOrCreate?: SleepTrackerCreateOrConnectWithoutUserActivityInput
    upsert?: SleepTrackerUpsertWithoutUserActivityInput
    disconnect?: SleepTrackerWhereInput | boolean
    delete?: SleepTrackerWhereInput | boolean
    connect?: SleepTrackerWhereUniqueInput
    update?: XOR<XOR<SleepTrackerUpdateToOneWithWhereWithoutUserActivityInput, SleepTrackerUpdateWithoutUserActivityInput>, SleepTrackerUncheckedUpdateWithoutUserActivityInput>
  }

  export type UserHydrationUpdateOneWithoutUserActivityNestedInput = {
    create?: XOR<UserHydrationCreateWithoutUserActivityInput, UserHydrationUncheckedCreateWithoutUserActivityInput>
    connectOrCreate?: UserHydrationCreateOrConnectWithoutUserActivityInput
    upsert?: UserHydrationUpsertWithoutUserActivityInput
    disconnect?: UserHydrationWhereInput | boolean
    delete?: UserHydrationWhereInput | boolean
    connect?: UserHydrationWhereUniqueInput
    update?: XOR<XOR<UserHydrationUpdateToOneWithWhereWithoutUserActivityInput, UserHydrationUpdateWithoutUserActivityInput>, UserHydrationUncheckedUpdateWithoutUserActivityInput>
  }

  export type FoodLogUpdateOneWithoutUserActivityIdNestedInput = {
    create?: XOR<FoodLogCreateWithoutUserActivityIdInput, FoodLogUncheckedCreateWithoutUserActivityIdInput>
    connectOrCreate?: FoodLogCreateOrConnectWithoutUserActivityIdInput
    upsert?: FoodLogUpsertWithoutUserActivityIdInput
    disconnect?: FoodLogWhereInput | boolean
    delete?: FoodLogWhereInput | boolean
    connect?: FoodLogWhereUniqueInput
    update?: XOR<XOR<FoodLogUpdateToOneWithWhereWithoutUserActivityIdInput, FoodLogUpdateWithoutUserActivityIdInput>, FoodLogUncheckedUpdateWithoutUserActivityIdInput>
  }

  export type PhysicalActivityLogUpdateOneWithoutUserActivityIdNestedInput = {
    create?: XOR<PhysicalActivityLogCreateWithoutUserActivityIdInput, PhysicalActivityLogUncheckedCreateWithoutUserActivityIdInput>
    connectOrCreate?: PhysicalActivityLogCreateOrConnectWithoutUserActivityIdInput
    upsert?: PhysicalActivityLogUpsertWithoutUserActivityIdInput
    disconnect?: PhysicalActivityLogWhereInput | boolean
    delete?: PhysicalActivityLogWhereInput | boolean
    connect?: PhysicalActivityLogWhereUniqueInput
    update?: XOR<XOR<PhysicalActivityLogUpdateToOneWithWhereWithoutUserActivityIdInput, PhysicalActivityLogUpdateWithoutUserActivityIdInput>, PhysicalActivityLogUncheckedUpdateWithoutUserActivityIdInput>
  }

  export type UserCreateNestedOneWithoutChatbotInput = {
    create?: XOR<UserCreateWithoutChatbotInput, UserUncheckedCreateWithoutChatbotInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatbotInput
    connect?: UserWhereUniqueInput
  }

  export type EnumSENDERFieldUpdateOperationsInput = {
    set?: $Enums.SENDER
  }

  export type UserUpdateOneRequiredWithoutChatbotNestedInput = {
    create?: XOR<UserCreateWithoutChatbotInput, UserUncheckedCreateWithoutChatbotInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatbotInput
    upsert?: UserUpsertWithoutChatbotInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatbotInput, UserUpdateWithoutChatbotInput>, UserUncheckedUpdateWithoutChatbotInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumACTIVITY_TYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.ACTIVITY_TYPE | EnumACTIVITY_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.ACTIVITY_TYPE[]
    notIn?: $Enums.ACTIVITY_TYPE[]
    not?: NestedEnumACTIVITY_TYPEFilter<$PrismaModel> | $Enums.ACTIVITY_TYPE
  }

  export type NestedEnumACTIVITY_TYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ACTIVITY_TYPE | EnumACTIVITY_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.ACTIVITY_TYPE[]
    notIn?: $Enums.ACTIVITY_TYPE[]
    not?: NestedEnumACTIVITY_TYPEWithAggregatesFilter<$PrismaModel> | $Enums.ACTIVITY_TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumACTIVITY_TYPEFilter<$PrismaModel>
    _max?: NestedEnumACTIVITY_TYPEFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumSENDERFilter<$PrismaModel = never> = {
    equals?: $Enums.SENDER | EnumSENDERFieldRefInput<$PrismaModel>
    in?: $Enums.SENDER[]
    notIn?: $Enums.SENDER[]
    not?: NestedEnumSENDERFilter<$PrismaModel> | $Enums.SENDER
  }

  export type NestedEnumSENDERWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SENDER | EnumSENDERFieldRefInput<$PrismaModel>
    in?: $Enums.SENDER[]
    notIn?: $Enums.SENDER[]
    not?: NestedEnumSENDERWithAggregatesFilter<$PrismaModel> | $Enums.SENDER
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSENDERFilter<$PrismaModel>
    _max?: NestedEnumSENDERFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuthenticatorCreateWithoutUserInput = {
    credentialID: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type AuthenticatorUncheckedCreateWithoutUserInput = {
    credentialID: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type AuthenticatorCreateOrConnectWithoutUserInput = {
    where: AuthenticatorWhereUniqueInput
    create: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput>
  }

  export type AuthenticatorCreateManyUserInputEnvelope = {
    data: AuthenticatorCreateManyUserInput | AuthenticatorCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatbotCreateWithoutUserInput = {
    id?: string
    payload?: string | null
    sender: $Enums.SENDER
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatbotUncheckedCreateWithoutUserInput = {
    id?: string
    payload?: string | null
    sender: $Enums.SENDER
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatbotCreateOrConnectWithoutUserInput = {
    where: ChatbotWhereUniqueInput
    create: XOR<ChatbotCreateWithoutUserInput, ChatbotUncheckedCreateWithoutUserInput>
  }

  export type ChatbotCreateManyUserInputEnvelope = {
    data: ChatbotCreateManyUserInput | ChatbotCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCharacteristicsCreateWithoutUserInput = {
    id?: string
    gender: string
    age: string
    height: string
    currentWeight: string
    activityFactor: string
    mealsPerDay: string
    sleepHours: string
    workoutsPerWeek: string
    manualCalorieAdjustment?: string | null
    bmi?: string | null
    tdee?: string | null
    bmr?: string | null
    bodyFatPercentage?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCharacteristicsUncheckedCreateWithoutUserInput = {
    id?: string
    gender: string
    age: string
    height: string
    currentWeight: string
    activityFactor: string
    mealsPerDay: string
    sleepHours: string
    workoutsPerWeek: string
    manualCalorieAdjustment?: string | null
    bmi?: string | null
    tdee?: string | null
    bmr?: string | null
    bodyFatPercentage?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCharacteristicsCreateOrConnectWithoutUserInput = {
    where: UserCharacteristicsWhereUniqueInput
    create: XOR<UserCharacteristicsCreateWithoutUserInput, UserCharacteristicsUncheckedCreateWithoutUserInput>
  }

  export type UserCharacteristicsCreateManyUserInputEnvelope = {
    data: UserCharacteristicsCreateManyUserInput | UserCharacteristicsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PhysicalActivityLogCreateWithoutUserInput = {
    id?: string
    duration: number
    caloriesBurned: number
    createdAt?: Date | string
    activityType?: ActivityTypeCreateNestedManyWithoutPhysicalActivityInput
    userActivityId?: UserActivitesCreateNestedOneWithoutPhysicalActivityLogInput
  }

  export type PhysicalActivityLogUncheckedCreateWithoutUserInput = {
    id?: string
    duration: number
    caloriesBurned: number
    createdAt?: Date | string
    activityType?: ActivityTypeUncheckedCreateNestedManyWithoutPhysicalActivityInput
    userActivityId?: UserActivitesUncheckedCreateNestedOneWithoutPhysicalActivityLogInput
  }

  export type PhysicalActivityLogCreateOrConnectWithoutUserInput = {
    where: PhysicalActivityLogWhereUniqueInput
    create: XOR<PhysicalActivityLogCreateWithoutUserInput, PhysicalActivityLogUncheckedCreateWithoutUserInput>
  }

  export type PhysicalActivityLogCreateManyUserInputEnvelope = {
    data: PhysicalActivityLogCreateManyUserInput | PhysicalActivityLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserActivitesCreateWithoutUserInput = {
    id?: string
    category: $Enums.ACTIVITY_TYPE
    title: string
    stepsCount?: number | null
    effectToBody?: string | null
    stepTrackerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sleepTracker?: SleepTrackerCreateNestedOneWithoutUserActivityInput
    userHydration?: UserHydrationCreateNestedOneWithoutUserActivityInput
    foodLog?: FoodLogCreateNestedOneWithoutUserActivityIdInput
    physicalActivityLog?: PhysicalActivityLogCreateNestedOneWithoutUserActivityIdInput
  }

  export type UserActivitesUncheckedCreateWithoutUserInput = {
    id?: string
    category: $Enums.ACTIVITY_TYPE
    title: string
    stepsCount?: number | null
    effectToBody?: string | null
    sleepTrackerId?: string | null
    userHydrationId?: string | null
    stepTrackerId?: string | null
    foodLogId?: string | null
    physicalActivityLogId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserActivitesCreateOrConnectWithoutUserInput = {
    where: UserActivitesWhereUniqueInput
    create: XOR<UserActivitesCreateWithoutUserInput, UserActivitesUncheckedCreateWithoutUserInput>
  }

  export type UserActivitesCreateManyUserInputEnvelope = {
    data: UserActivitesCreateManyUserInput | UserActivitesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FoodLogCreateWithoutUserInput = {
    id?: string
    foodName: string
    calories: number
    mealType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userActivityId?: UserActivitesCreateNestedOneWithoutFoodLogInput
  }

  export type FoodLogUncheckedCreateWithoutUserInput = {
    id?: string
    foodName: string
    calories: number
    mealType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userActivityId?: UserActivitesUncheckedCreateNestedOneWithoutFoodLogInput
  }

  export type FoodLogCreateOrConnectWithoutUserInput = {
    where: FoodLogWhereUniqueInput
    create: XOR<FoodLogCreateWithoutUserInput, FoodLogUncheckedCreateWithoutUserInput>
  }

  export type FoodLogCreateManyUserInputEnvelope = {
    data: FoodLogCreateManyUserInput | FoodLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserHydrationCreateWithoutUserInput = {
    id?: string
    waterIntake: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userActivity?: UserActivitesCreateNestedOneWithoutUserHydrationInput
  }

  export type UserHydrationUncheckedCreateWithoutUserInput = {
    id?: string
    waterIntake: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userActivity?: UserActivitesUncheckedCreateNestedOneWithoutUserHydrationInput
  }

  export type UserHydrationCreateOrConnectWithoutUserInput = {
    where: UserHydrationWhereUniqueInput
    create: XOR<UserHydrationCreateWithoutUserInput, UserHydrationUncheckedCreateWithoutUserInput>
  }

  export type UserHydrationCreateManyUserInputEnvelope = {
    data: UserHydrationCreateManyUserInput | UserHydrationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SleepTrackerCreateWithoutUserInput = {
    id?: string
    duration: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userActivity?: UserActivitesCreateNestedOneWithoutSleepTrackerInput
  }

  export type SleepTrackerUncheckedCreateWithoutUserInput = {
    id?: string
    duration: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userActivity?: UserActivitesUncheckedCreateNestedOneWithoutSleepTrackerInput
  }

  export type SleepTrackerCreateOrConnectWithoutUserInput = {
    where: SleepTrackerWhereUniqueInput
    create: XOR<SleepTrackerCreateWithoutUserInput, SleepTrackerUncheckedCreateWithoutUserInput>
  }

  export type SleepTrackerCreateManyUserInputEnvelope = {
    data: SleepTrackerCreateManyUserInput | SleepTrackerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserGoalCreateWithoutUserInput = {
    id?: string
    goal: string
    deficitPerDay: string
    targetTime?: string | null
    hydrationNeeds: string
    targetWeight: string
    totalDeficit: string
    stepNeeds: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserGoalUncheckedCreateWithoutUserInput = {
    id?: string
    goal: string
    deficitPerDay: string
    targetTime?: string | null
    hydrationNeeds: string
    targetWeight: string
    totalDeficit: string
    stepNeeds: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserGoalCreateOrConnectWithoutUserInput = {
    where: UserGoalWhereUniqueInput
    create: XOR<UserGoalCreateWithoutUserInput, UserGoalUncheckedCreateWithoutUserInput>
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type AuthenticatorUpsertWithWhereUniqueWithoutUserInput = {
    where: AuthenticatorWhereUniqueInput
    update: XOR<AuthenticatorUpdateWithoutUserInput, AuthenticatorUncheckedUpdateWithoutUserInput>
    create: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput>
  }

  export type AuthenticatorUpdateWithWhereUniqueWithoutUserInput = {
    where: AuthenticatorWhereUniqueInput
    data: XOR<AuthenticatorUpdateWithoutUserInput, AuthenticatorUncheckedUpdateWithoutUserInput>
  }

  export type AuthenticatorUpdateManyWithWhereWithoutUserInput = {
    where: AuthenticatorScalarWhereInput
    data: XOR<AuthenticatorUpdateManyMutationInput, AuthenticatorUncheckedUpdateManyWithoutUserInput>
  }

  export type AuthenticatorScalarWhereInput = {
    AND?: AuthenticatorScalarWhereInput | AuthenticatorScalarWhereInput[]
    OR?: AuthenticatorScalarWhereInput[]
    NOT?: AuthenticatorScalarWhereInput | AuthenticatorScalarWhereInput[]
    credentialID?: StringFilter<"Authenticator"> | string
    userId?: StringFilter<"Authenticator"> | string
    providerAccountId?: StringFilter<"Authenticator"> | string
    credentialPublicKey?: StringFilter<"Authenticator"> | string
    counter?: IntFilter<"Authenticator"> | number
    credentialDeviceType?: StringFilter<"Authenticator"> | string
    credentialBackedUp?: BoolFilter<"Authenticator"> | boolean
    transports?: StringNullableFilter<"Authenticator"> | string | null
  }

  export type ChatbotUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatbotWhereUniqueInput
    update: XOR<ChatbotUpdateWithoutUserInput, ChatbotUncheckedUpdateWithoutUserInput>
    create: XOR<ChatbotCreateWithoutUserInput, ChatbotUncheckedCreateWithoutUserInput>
  }

  export type ChatbotUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatbotWhereUniqueInput
    data: XOR<ChatbotUpdateWithoutUserInput, ChatbotUncheckedUpdateWithoutUserInput>
  }

  export type ChatbotUpdateManyWithWhereWithoutUserInput = {
    where: ChatbotScalarWhereInput
    data: XOR<ChatbotUpdateManyMutationInput, ChatbotUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatbotScalarWhereInput = {
    AND?: ChatbotScalarWhereInput | ChatbotScalarWhereInput[]
    OR?: ChatbotScalarWhereInput[]
    NOT?: ChatbotScalarWhereInput | ChatbotScalarWhereInput[]
    id?: StringFilter<"Chatbot"> | string
    userId?: StringFilter<"Chatbot"> | string
    payload?: StringNullableFilter<"Chatbot"> | string | null
    sender?: EnumSENDERFilter<"Chatbot"> | $Enums.SENDER
    createdAt?: DateTimeFilter<"Chatbot"> | Date | string
    updatedAt?: DateTimeFilter<"Chatbot"> | Date | string
  }

  export type UserCharacteristicsUpsertWithWhereUniqueWithoutUserInput = {
    where: UserCharacteristicsWhereUniqueInput
    update: XOR<UserCharacteristicsUpdateWithoutUserInput, UserCharacteristicsUncheckedUpdateWithoutUserInput>
    create: XOR<UserCharacteristicsCreateWithoutUserInput, UserCharacteristicsUncheckedCreateWithoutUserInput>
  }

  export type UserCharacteristicsUpdateWithWhereUniqueWithoutUserInput = {
    where: UserCharacteristicsWhereUniqueInput
    data: XOR<UserCharacteristicsUpdateWithoutUserInput, UserCharacteristicsUncheckedUpdateWithoutUserInput>
  }

  export type UserCharacteristicsUpdateManyWithWhereWithoutUserInput = {
    where: UserCharacteristicsScalarWhereInput
    data: XOR<UserCharacteristicsUpdateManyMutationInput, UserCharacteristicsUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCharacteristicsScalarWhereInput = {
    AND?: UserCharacteristicsScalarWhereInput | UserCharacteristicsScalarWhereInput[]
    OR?: UserCharacteristicsScalarWhereInput[]
    NOT?: UserCharacteristicsScalarWhereInput | UserCharacteristicsScalarWhereInput[]
    id?: StringFilter<"UserCharacteristics"> | string
    userId?: StringFilter<"UserCharacteristics"> | string
    gender?: StringFilter<"UserCharacteristics"> | string
    age?: StringFilter<"UserCharacteristics"> | string
    height?: StringFilter<"UserCharacteristics"> | string
    currentWeight?: StringFilter<"UserCharacteristics"> | string
    activityFactor?: StringFilter<"UserCharacteristics"> | string
    mealsPerDay?: StringFilter<"UserCharacteristics"> | string
    sleepHours?: StringFilter<"UserCharacteristics"> | string
    workoutsPerWeek?: StringFilter<"UserCharacteristics"> | string
    manualCalorieAdjustment?: StringNullableFilter<"UserCharacteristics"> | string | null
    bmi?: StringNullableFilter<"UserCharacteristics"> | string | null
    tdee?: StringNullableFilter<"UserCharacteristics"> | string | null
    bmr?: StringNullableFilter<"UserCharacteristics"> | string | null
    bodyFatPercentage?: StringNullableFilter<"UserCharacteristics"> | string | null
    isDeleted?: BoolFilter<"UserCharacteristics"> | boolean
    createdAt?: DateTimeFilter<"UserCharacteristics"> | Date | string
    updatedAt?: DateTimeFilter<"UserCharacteristics"> | Date | string
  }

  export type PhysicalActivityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: PhysicalActivityLogWhereUniqueInput
    update: XOR<PhysicalActivityLogUpdateWithoutUserInput, PhysicalActivityLogUncheckedUpdateWithoutUserInput>
    create: XOR<PhysicalActivityLogCreateWithoutUserInput, PhysicalActivityLogUncheckedCreateWithoutUserInput>
  }

  export type PhysicalActivityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: PhysicalActivityLogWhereUniqueInput
    data: XOR<PhysicalActivityLogUpdateWithoutUserInput, PhysicalActivityLogUncheckedUpdateWithoutUserInput>
  }

  export type PhysicalActivityLogUpdateManyWithWhereWithoutUserInput = {
    where: PhysicalActivityLogScalarWhereInput
    data: XOR<PhysicalActivityLogUpdateManyMutationInput, PhysicalActivityLogUncheckedUpdateManyWithoutUserInput>
  }

  export type PhysicalActivityLogScalarWhereInput = {
    AND?: PhysicalActivityLogScalarWhereInput | PhysicalActivityLogScalarWhereInput[]
    OR?: PhysicalActivityLogScalarWhereInput[]
    NOT?: PhysicalActivityLogScalarWhereInput | PhysicalActivityLogScalarWhereInput[]
    id?: StringFilter<"PhysicalActivityLog"> | string
    userId?: StringFilter<"PhysicalActivityLog"> | string
    duration?: IntFilter<"PhysicalActivityLog"> | number
    caloriesBurned?: FloatFilter<"PhysicalActivityLog"> | number
    createdAt?: DateTimeFilter<"PhysicalActivityLog"> | Date | string
  }

  export type UserActivitesUpsertWithWhereUniqueWithoutUserInput = {
    where: UserActivitesWhereUniqueInput
    update: XOR<UserActivitesUpdateWithoutUserInput, UserActivitesUncheckedUpdateWithoutUserInput>
    create: XOR<UserActivitesCreateWithoutUserInput, UserActivitesUncheckedCreateWithoutUserInput>
  }

  export type UserActivitesUpdateWithWhereUniqueWithoutUserInput = {
    where: UserActivitesWhereUniqueInput
    data: XOR<UserActivitesUpdateWithoutUserInput, UserActivitesUncheckedUpdateWithoutUserInput>
  }

  export type UserActivitesUpdateManyWithWhereWithoutUserInput = {
    where: UserActivitesScalarWhereInput
    data: XOR<UserActivitesUpdateManyMutationInput, UserActivitesUncheckedUpdateManyWithoutUserInput>
  }

  export type UserActivitesScalarWhereInput = {
    AND?: UserActivitesScalarWhereInput | UserActivitesScalarWhereInput[]
    OR?: UserActivitesScalarWhereInput[]
    NOT?: UserActivitesScalarWhereInput | UserActivitesScalarWhereInput[]
    id?: StringFilter<"UserActivites"> | string
    userId?: StringFilter<"UserActivites"> | string
    category?: EnumACTIVITY_TYPEFilter<"UserActivites"> | $Enums.ACTIVITY_TYPE
    title?: StringFilter<"UserActivites"> | string
    stepsCount?: FloatNullableFilter<"UserActivites"> | number | null
    effectToBody?: StringNullableFilter<"UserActivites"> | string | null
    sleepTrackerId?: StringNullableFilter<"UserActivites"> | string | null
    userHydrationId?: StringNullableFilter<"UserActivites"> | string | null
    stepTrackerId?: StringNullableFilter<"UserActivites"> | string | null
    foodLogId?: StringNullableFilter<"UserActivites"> | string | null
    physicalActivityLogId?: StringNullableFilter<"UserActivites"> | string | null
    createdAt?: DateTimeFilter<"UserActivites"> | Date | string
    updatedAt?: DateTimeFilter<"UserActivites"> | Date | string
  }

  export type FoodLogUpsertWithWhereUniqueWithoutUserInput = {
    where: FoodLogWhereUniqueInput
    update: XOR<FoodLogUpdateWithoutUserInput, FoodLogUncheckedUpdateWithoutUserInput>
    create: XOR<FoodLogCreateWithoutUserInput, FoodLogUncheckedCreateWithoutUserInput>
  }

  export type FoodLogUpdateWithWhereUniqueWithoutUserInput = {
    where: FoodLogWhereUniqueInput
    data: XOR<FoodLogUpdateWithoutUserInput, FoodLogUncheckedUpdateWithoutUserInput>
  }

  export type FoodLogUpdateManyWithWhereWithoutUserInput = {
    where: FoodLogScalarWhereInput
    data: XOR<FoodLogUpdateManyMutationInput, FoodLogUncheckedUpdateManyWithoutUserInput>
  }

  export type FoodLogScalarWhereInput = {
    AND?: FoodLogScalarWhereInput | FoodLogScalarWhereInput[]
    OR?: FoodLogScalarWhereInput[]
    NOT?: FoodLogScalarWhereInput | FoodLogScalarWhereInput[]
    id?: StringFilter<"FoodLog"> | string
    userId?: StringFilter<"FoodLog"> | string
    foodName?: StringFilter<"FoodLog"> | string
    calories?: FloatFilter<"FoodLog"> | number
    mealType?: StringFilter<"FoodLog"> | string
    createdAt?: DateTimeFilter<"FoodLog"> | Date | string
    updatedAt?: DateTimeFilter<"FoodLog"> | Date | string
  }

  export type UserHydrationUpsertWithWhereUniqueWithoutUserInput = {
    where: UserHydrationWhereUniqueInput
    update: XOR<UserHydrationUpdateWithoutUserInput, UserHydrationUncheckedUpdateWithoutUserInput>
    create: XOR<UserHydrationCreateWithoutUserInput, UserHydrationUncheckedCreateWithoutUserInput>
  }

  export type UserHydrationUpdateWithWhereUniqueWithoutUserInput = {
    where: UserHydrationWhereUniqueInput
    data: XOR<UserHydrationUpdateWithoutUserInput, UserHydrationUncheckedUpdateWithoutUserInput>
  }

  export type UserHydrationUpdateManyWithWhereWithoutUserInput = {
    where: UserHydrationScalarWhereInput
    data: XOR<UserHydrationUpdateManyMutationInput, UserHydrationUncheckedUpdateManyWithoutUserInput>
  }

  export type UserHydrationScalarWhereInput = {
    AND?: UserHydrationScalarWhereInput | UserHydrationScalarWhereInput[]
    OR?: UserHydrationScalarWhereInput[]
    NOT?: UserHydrationScalarWhereInput | UserHydrationScalarWhereInput[]
    id?: StringFilter<"UserHydration"> | string
    userId?: StringFilter<"UserHydration"> | string
    waterIntake?: StringFilter<"UserHydration"> | string
    createdAt?: DateTimeFilter<"UserHydration"> | Date | string
    updatedAt?: DateTimeFilter<"UserHydration"> | Date | string
  }

  export type SleepTrackerUpsertWithWhereUniqueWithoutUserInput = {
    where: SleepTrackerWhereUniqueInput
    update: XOR<SleepTrackerUpdateWithoutUserInput, SleepTrackerUncheckedUpdateWithoutUserInput>
    create: XOR<SleepTrackerCreateWithoutUserInput, SleepTrackerUncheckedCreateWithoutUserInput>
  }

  export type SleepTrackerUpdateWithWhereUniqueWithoutUserInput = {
    where: SleepTrackerWhereUniqueInput
    data: XOR<SleepTrackerUpdateWithoutUserInput, SleepTrackerUncheckedUpdateWithoutUserInput>
  }

  export type SleepTrackerUpdateManyWithWhereWithoutUserInput = {
    where: SleepTrackerScalarWhereInput
    data: XOR<SleepTrackerUpdateManyMutationInput, SleepTrackerUncheckedUpdateManyWithoutUserInput>
  }

  export type SleepTrackerScalarWhereInput = {
    AND?: SleepTrackerScalarWhereInput | SleepTrackerScalarWhereInput[]
    OR?: SleepTrackerScalarWhereInput[]
    NOT?: SleepTrackerScalarWhereInput | SleepTrackerScalarWhereInput[]
    id?: StringFilter<"SleepTracker"> | string
    userId?: StringFilter<"SleepTracker"> | string
    duration?: FloatFilter<"SleepTracker"> | number
    createdAt?: DateTimeFilter<"SleepTracker"> | Date | string
    updatedAt?: DateTimeFilter<"SleepTracker"> | Date | string
  }

  export type UserGoalUpsertWithoutUserInput = {
    update: XOR<UserGoalUpdateWithoutUserInput, UserGoalUncheckedUpdateWithoutUserInput>
    create: XOR<UserGoalCreateWithoutUserInput, UserGoalUncheckedCreateWithoutUserInput>
    where?: UserGoalWhereInput
  }

  export type UserGoalUpdateToOneWithWhereWithoutUserInput = {
    where?: UserGoalWhereInput
    data: XOR<UserGoalUpdateWithoutUserInput, UserGoalUncheckedUpdateWithoutUserInput>
  }

  export type UserGoalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    deficitPerDay?: StringFieldUpdateOperationsInput | string
    targetTime?: NullableStringFieldUpdateOperationsInput | string | null
    hydrationNeeds?: StringFieldUpdateOperationsInput | string
    targetWeight?: StringFieldUpdateOperationsInput | string
    totalDeficit?: StringFieldUpdateOperationsInput | string
    stepNeeds?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGoalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    deficitPerDay?: StringFieldUpdateOperationsInput | string
    targetTime?: NullableStringFieldUpdateOperationsInput | string | null
    hydrationNeeds?: StringFieldUpdateOperationsInput | string
    targetWeight?: StringFieldUpdateOperationsInput | string
    totalDeficit?: StringFieldUpdateOperationsInput | string
    stepNeeds?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
    Chatbot?: ChatbotCreateNestedManyWithoutUserInput
    UserCharacteristic?: UserCharacteristicsCreateNestedManyWithoutUserInput
    PhysicalActivityLog?: PhysicalActivityLogCreateNestedManyWithoutUserInput
    UserActivites?: UserActivitesCreateNestedManyWithoutUserInput
    FoodLog?: FoodLogCreateNestedManyWithoutUserInput
    UserHydration?: UserHydrationCreateNestedManyWithoutUserInput
    SleepTracker?: SleepTrackerCreateNestedManyWithoutUserInput
    UserGoal?: UserGoalCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    Chatbot?: ChatbotUncheckedCreateNestedManyWithoutUserInput
    UserCharacteristic?: UserCharacteristicsUncheckedCreateNestedManyWithoutUserInput
    PhysicalActivityLog?: PhysicalActivityLogUncheckedCreateNestedManyWithoutUserInput
    UserActivites?: UserActivitesUncheckedCreateNestedManyWithoutUserInput
    FoodLog?: FoodLogUncheckedCreateNestedManyWithoutUserInput
    UserHydration?: UserHydrationUncheckedCreateNestedManyWithoutUserInput
    SleepTracker?: SleepTrackerUncheckedCreateNestedManyWithoutUserInput
    UserGoal?: UserGoalUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
    Chatbot?: ChatbotUpdateManyWithoutUserNestedInput
    UserCharacteristic?: UserCharacteristicsUpdateManyWithoutUserNestedInput
    PhysicalActivityLog?: PhysicalActivityLogUpdateManyWithoutUserNestedInput
    UserActivites?: UserActivitesUpdateManyWithoutUserNestedInput
    FoodLog?: FoodLogUpdateManyWithoutUserNestedInput
    UserHydration?: UserHydrationUpdateManyWithoutUserNestedInput
    SleepTracker?: SleepTrackerUpdateManyWithoutUserNestedInput
    UserGoal?: UserGoalUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    Chatbot?: ChatbotUncheckedUpdateManyWithoutUserNestedInput
    UserCharacteristic?: UserCharacteristicsUncheckedUpdateManyWithoutUserNestedInput
    PhysicalActivityLog?: PhysicalActivityLogUncheckedUpdateManyWithoutUserNestedInput
    UserActivites?: UserActivitesUncheckedUpdateManyWithoutUserNestedInput
    FoodLog?: FoodLogUncheckedUpdateManyWithoutUserNestedInput
    UserHydration?: UserHydrationUncheckedUpdateManyWithoutUserNestedInput
    SleepTracker?: SleepTrackerUncheckedUpdateManyWithoutUserNestedInput
    UserGoal?: UserGoalUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
    Chatbot?: ChatbotCreateNestedManyWithoutUserInput
    UserCharacteristic?: UserCharacteristicsCreateNestedManyWithoutUserInput
    PhysicalActivityLog?: PhysicalActivityLogCreateNestedManyWithoutUserInput
    UserActivites?: UserActivitesCreateNestedManyWithoutUserInput
    FoodLog?: FoodLogCreateNestedManyWithoutUserInput
    UserHydration?: UserHydrationCreateNestedManyWithoutUserInput
    SleepTracker?: SleepTrackerCreateNestedManyWithoutUserInput
    UserGoal?: UserGoalCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    Chatbot?: ChatbotUncheckedCreateNestedManyWithoutUserInput
    UserCharacteristic?: UserCharacteristicsUncheckedCreateNestedManyWithoutUserInput
    PhysicalActivityLog?: PhysicalActivityLogUncheckedCreateNestedManyWithoutUserInput
    UserActivites?: UserActivitesUncheckedCreateNestedManyWithoutUserInput
    FoodLog?: FoodLogUncheckedCreateNestedManyWithoutUserInput
    UserHydration?: UserHydrationUncheckedCreateNestedManyWithoutUserInput
    SleepTracker?: SleepTrackerUncheckedCreateNestedManyWithoutUserInput
    UserGoal?: UserGoalUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
    Chatbot?: ChatbotUpdateManyWithoutUserNestedInput
    UserCharacteristic?: UserCharacteristicsUpdateManyWithoutUserNestedInput
    PhysicalActivityLog?: PhysicalActivityLogUpdateManyWithoutUserNestedInput
    UserActivites?: UserActivitesUpdateManyWithoutUserNestedInput
    FoodLog?: FoodLogUpdateManyWithoutUserNestedInput
    UserHydration?: UserHydrationUpdateManyWithoutUserNestedInput
    SleepTracker?: SleepTrackerUpdateManyWithoutUserNestedInput
    UserGoal?: UserGoalUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    Chatbot?: ChatbotUncheckedUpdateManyWithoutUserNestedInput
    UserCharacteristic?: UserCharacteristicsUncheckedUpdateManyWithoutUserNestedInput
    PhysicalActivityLog?: PhysicalActivityLogUncheckedUpdateManyWithoutUserNestedInput
    UserActivites?: UserActivitesUncheckedUpdateManyWithoutUserNestedInput
    FoodLog?: FoodLogUncheckedUpdateManyWithoutUserNestedInput
    UserHydration?: UserHydrationUncheckedUpdateManyWithoutUserNestedInput
    SleepTracker?: SleepTrackerUncheckedUpdateManyWithoutUserNestedInput
    UserGoal?: UserGoalUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutAuthenticatorInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Chatbot?: ChatbotCreateNestedManyWithoutUserInput
    UserCharacteristic?: UserCharacteristicsCreateNestedManyWithoutUserInput
    PhysicalActivityLog?: PhysicalActivityLogCreateNestedManyWithoutUserInput
    UserActivites?: UserActivitesCreateNestedManyWithoutUserInput
    FoodLog?: FoodLogCreateNestedManyWithoutUserInput
    UserHydration?: UserHydrationCreateNestedManyWithoutUserInput
    SleepTracker?: SleepTrackerCreateNestedManyWithoutUserInput
    UserGoal?: UserGoalCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuthenticatorInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Chatbot?: ChatbotUncheckedCreateNestedManyWithoutUserInput
    UserCharacteristic?: UserCharacteristicsUncheckedCreateNestedManyWithoutUserInput
    PhysicalActivityLog?: PhysicalActivityLogUncheckedCreateNestedManyWithoutUserInput
    UserActivites?: UserActivitesUncheckedCreateNestedManyWithoutUserInput
    FoodLog?: FoodLogUncheckedCreateNestedManyWithoutUserInput
    UserHydration?: UserHydrationUncheckedCreateNestedManyWithoutUserInput
    SleepTracker?: SleepTrackerUncheckedCreateNestedManyWithoutUserInput
    UserGoal?: UserGoalUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuthenticatorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthenticatorInput, UserUncheckedCreateWithoutAuthenticatorInput>
  }

  export type UserUpsertWithoutAuthenticatorInput = {
    update: XOR<UserUpdateWithoutAuthenticatorInput, UserUncheckedUpdateWithoutAuthenticatorInput>
    create: XOR<UserCreateWithoutAuthenticatorInput, UserUncheckedCreateWithoutAuthenticatorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuthenticatorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuthenticatorInput, UserUncheckedUpdateWithoutAuthenticatorInput>
  }

  export type UserUpdateWithoutAuthenticatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Chatbot?: ChatbotUpdateManyWithoutUserNestedInput
    UserCharacteristic?: UserCharacteristicsUpdateManyWithoutUserNestedInput
    PhysicalActivityLog?: PhysicalActivityLogUpdateManyWithoutUserNestedInput
    UserActivites?: UserActivitesUpdateManyWithoutUserNestedInput
    FoodLog?: FoodLogUpdateManyWithoutUserNestedInput
    UserHydration?: UserHydrationUpdateManyWithoutUserNestedInput
    SleepTracker?: SleepTrackerUpdateManyWithoutUserNestedInput
    UserGoal?: UserGoalUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuthenticatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Chatbot?: ChatbotUncheckedUpdateManyWithoutUserNestedInput
    UserCharacteristic?: UserCharacteristicsUncheckedUpdateManyWithoutUserNestedInput
    PhysicalActivityLog?: PhysicalActivityLogUncheckedUpdateManyWithoutUserNestedInput
    UserActivites?: UserActivitesUncheckedUpdateManyWithoutUserNestedInput
    FoodLog?: FoodLogUncheckedUpdateManyWithoutUserNestedInput
    UserHydration?: UserHydrationUncheckedUpdateManyWithoutUserNestedInput
    SleepTracker?: SleepTrackerUncheckedUpdateManyWithoutUserNestedInput
    UserGoal?: UserGoalUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutUserCharacteristicInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
    Chatbot?: ChatbotCreateNestedManyWithoutUserInput
    PhysicalActivityLog?: PhysicalActivityLogCreateNestedManyWithoutUserInput
    UserActivites?: UserActivitesCreateNestedManyWithoutUserInput
    FoodLog?: FoodLogCreateNestedManyWithoutUserInput
    UserHydration?: UserHydrationCreateNestedManyWithoutUserInput
    SleepTracker?: SleepTrackerCreateNestedManyWithoutUserInput
    UserGoal?: UserGoalCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserCharacteristicInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    Chatbot?: ChatbotUncheckedCreateNestedManyWithoutUserInput
    PhysicalActivityLog?: PhysicalActivityLogUncheckedCreateNestedManyWithoutUserInput
    UserActivites?: UserActivitesUncheckedCreateNestedManyWithoutUserInput
    FoodLog?: FoodLogUncheckedCreateNestedManyWithoutUserInput
    UserHydration?: UserHydrationUncheckedCreateNestedManyWithoutUserInput
    SleepTracker?: SleepTrackerUncheckedCreateNestedManyWithoutUserInput
    UserGoal?: UserGoalUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserCharacteristicInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserCharacteristicInput, UserUncheckedCreateWithoutUserCharacteristicInput>
  }

  export type UserUpsertWithoutUserCharacteristicInput = {
    update: XOR<UserUpdateWithoutUserCharacteristicInput, UserUncheckedUpdateWithoutUserCharacteristicInput>
    create: XOR<UserCreateWithoutUserCharacteristicInput, UserUncheckedCreateWithoutUserCharacteristicInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserCharacteristicInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserCharacteristicInput, UserUncheckedUpdateWithoutUserCharacteristicInput>
  }

  export type UserUpdateWithoutUserCharacteristicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
    Chatbot?: ChatbotUpdateManyWithoutUserNestedInput
    PhysicalActivityLog?: PhysicalActivityLogUpdateManyWithoutUserNestedInput
    UserActivites?: UserActivitesUpdateManyWithoutUserNestedInput
    FoodLog?: FoodLogUpdateManyWithoutUserNestedInput
    UserHydration?: UserHydrationUpdateManyWithoutUserNestedInput
    SleepTracker?: SleepTrackerUpdateManyWithoutUserNestedInput
    UserGoal?: UserGoalUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserCharacteristicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    Chatbot?: ChatbotUncheckedUpdateManyWithoutUserNestedInput
    PhysicalActivityLog?: PhysicalActivityLogUncheckedUpdateManyWithoutUserNestedInput
    UserActivites?: UserActivitesUncheckedUpdateManyWithoutUserNestedInput
    FoodLog?: FoodLogUncheckedUpdateManyWithoutUserNestedInput
    UserHydration?: UserHydrationUncheckedUpdateManyWithoutUserNestedInput
    SleepTracker?: SleepTrackerUncheckedUpdateManyWithoutUserNestedInput
    UserGoal?: UserGoalUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutUserGoalInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
    Chatbot?: ChatbotCreateNestedManyWithoutUserInput
    UserCharacteristic?: UserCharacteristicsCreateNestedManyWithoutUserInput
    PhysicalActivityLog?: PhysicalActivityLogCreateNestedManyWithoutUserInput
    UserActivites?: UserActivitesCreateNestedManyWithoutUserInput
    FoodLog?: FoodLogCreateNestedManyWithoutUserInput
    UserHydration?: UserHydrationCreateNestedManyWithoutUserInput
    SleepTracker?: SleepTrackerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserGoalInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    Chatbot?: ChatbotUncheckedCreateNestedManyWithoutUserInput
    UserCharacteristic?: UserCharacteristicsUncheckedCreateNestedManyWithoutUserInput
    PhysicalActivityLog?: PhysicalActivityLogUncheckedCreateNestedManyWithoutUserInput
    UserActivites?: UserActivitesUncheckedCreateNestedManyWithoutUserInput
    FoodLog?: FoodLogUncheckedCreateNestedManyWithoutUserInput
    UserHydration?: UserHydrationUncheckedCreateNestedManyWithoutUserInput
    SleepTracker?: SleepTrackerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserGoalInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserGoalInput, UserUncheckedCreateWithoutUserGoalInput>
  }

  export type UserUpsertWithoutUserGoalInput = {
    update: XOR<UserUpdateWithoutUserGoalInput, UserUncheckedUpdateWithoutUserGoalInput>
    create: XOR<UserCreateWithoutUserGoalInput, UserUncheckedCreateWithoutUserGoalInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserGoalInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserGoalInput, UserUncheckedUpdateWithoutUserGoalInput>
  }

  export type UserUpdateWithoutUserGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
    Chatbot?: ChatbotUpdateManyWithoutUserNestedInput
    UserCharacteristic?: UserCharacteristicsUpdateManyWithoutUserNestedInput
    PhysicalActivityLog?: PhysicalActivityLogUpdateManyWithoutUserNestedInput
    UserActivites?: UserActivitesUpdateManyWithoutUserNestedInput
    FoodLog?: FoodLogUpdateManyWithoutUserNestedInput
    UserHydration?: UserHydrationUpdateManyWithoutUserNestedInput
    SleepTracker?: SleepTrackerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    Chatbot?: ChatbotUncheckedUpdateManyWithoutUserNestedInput
    UserCharacteristic?: UserCharacteristicsUncheckedUpdateManyWithoutUserNestedInput
    PhysicalActivityLog?: PhysicalActivityLogUncheckedUpdateManyWithoutUserNestedInput
    UserActivites?: UserActivitesUncheckedUpdateManyWithoutUserNestedInput
    FoodLog?: FoodLogUncheckedUpdateManyWithoutUserNestedInput
    UserHydration?: UserHydrationUncheckedUpdateManyWithoutUserNestedInput
    SleepTracker?: SleepTrackerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPhysicalActivityLogInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
    Chatbot?: ChatbotCreateNestedManyWithoutUserInput
    UserCharacteristic?: UserCharacteristicsCreateNestedManyWithoutUserInput
    UserActivites?: UserActivitesCreateNestedManyWithoutUserInput
    FoodLog?: FoodLogCreateNestedManyWithoutUserInput
    UserHydration?: UserHydrationCreateNestedManyWithoutUserInput
    SleepTracker?: SleepTrackerCreateNestedManyWithoutUserInput
    UserGoal?: UserGoalCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPhysicalActivityLogInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    Chatbot?: ChatbotUncheckedCreateNestedManyWithoutUserInput
    UserCharacteristic?: UserCharacteristicsUncheckedCreateNestedManyWithoutUserInput
    UserActivites?: UserActivitesUncheckedCreateNestedManyWithoutUserInput
    FoodLog?: FoodLogUncheckedCreateNestedManyWithoutUserInput
    UserHydration?: UserHydrationUncheckedCreateNestedManyWithoutUserInput
    SleepTracker?: SleepTrackerUncheckedCreateNestedManyWithoutUserInput
    UserGoal?: UserGoalUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPhysicalActivityLogInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPhysicalActivityLogInput, UserUncheckedCreateWithoutPhysicalActivityLogInput>
  }

  export type ActivityTypeCreateWithoutPhysicalActivityInput = {
    id?: string
    name: string
    duration: number
    metValue: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityTypeUncheckedCreateWithoutPhysicalActivityInput = {
    id?: string
    name: string
    duration: number
    metValue: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityTypeCreateOrConnectWithoutPhysicalActivityInput = {
    where: ActivityTypeWhereUniqueInput
    create: XOR<ActivityTypeCreateWithoutPhysicalActivityInput, ActivityTypeUncheckedCreateWithoutPhysicalActivityInput>
  }

  export type ActivityTypeCreateManyPhysicalActivityInputEnvelope = {
    data: ActivityTypeCreateManyPhysicalActivityInput | ActivityTypeCreateManyPhysicalActivityInput[]
    skipDuplicates?: boolean
  }

  export type UserActivitesCreateWithoutPhysicalActivityLogInput = {
    id?: string
    category: $Enums.ACTIVITY_TYPE
    title: string
    stepsCount?: number | null
    effectToBody?: string | null
    stepTrackerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserActivitesInput
    sleepTracker?: SleepTrackerCreateNestedOneWithoutUserActivityInput
    userHydration?: UserHydrationCreateNestedOneWithoutUserActivityInput
    foodLog?: FoodLogCreateNestedOneWithoutUserActivityIdInput
  }

  export type UserActivitesUncheckedCreateWithoutPhysicalActivityLogInput = {
    id?: string
    userId: string
    category: $Enums.ACTIVITY_TYPE
    title: string
    stepsCount?: number | null
    effectToBody?: string | null
    sleepTrackerId?: string | null
    userHydrationId?: string | null
    stepTrackerId?: string | null
    foodLogId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserActivitesCreateOrConnectWithoutPhysicalActivityLogInput = {
    where: UserActivitesWhereUniqueInput
    create: XOR<UserActivitesCreateWithoutPhysicalActivityLogInput, UserActivitesUncheckedCreateWithoutPhysicalActivityLogInput>
  }

  export type UserUpsertWithoutPhysicalActivityLogInput = {
    update: XOR<UserUpdateWithoutPhysicalActivityLogInput, UserUncheckedUpdateWithoutPhysicalActivityLogInput>
    create: XOR<UserCreateWithoutPhysicalActivityLogInput, UserUncheckedCreateWithoutPhysicalActivityLogInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPhysicalActivityLogInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPhysicalActivityLogInput, UserUncheckedUpdateWithoutPhysicalActivityLogInput>
  }

  export type UserUpdateWithoutPhysicalActivityLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
    Chatbot?: ChatbotUpdateManyWithoutUserNestedInput
    UserCharacteristic?: UserCharacteristicsUpdateManyWithoutUserNestedInput
    UserActivites?: UserActivitesUpdateManyWithoutUserNestedInput
    FoodLog?: FoodLogUpdateManyWithoutUserNestedInput
    UserHydration?: UserHydrationUpdateManyWithoutUserNestedInput
    SleepTracker?: SleepTrackerUpdateManyWithoutUserNestedInput
    UserGoal?: UserGoalUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPhysicalActivityLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    Chatbot?: ChatbotUncheckedUpdateManyWithoutUserNestedInput
    UserCharacteristic?: UserCharacteristicsUncheckedUpdateManyWithoutUserNestedInput
    UserActivites?: UserActivitesUncheckedUpdateManyWithoutUserNestedInput
    FoodLog?: FoodLogUncheckedUpdateManyWithoutUserNestedInput
    UserHydration?: UserHydrationUncheckedUpdateManyWithoutUserNestedInput
    SleepTracker?: SleepTrackerUncheckedUpdateManyWithoutUserNestedInput
    UserGoal?: UserGoalUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ActivityTypeUpsertWithWhereUniqueWithoutPhysicalActivityInput = {
    where: ActivityTypeWhereUniqueInput
    update: XOR<ActivityTypeUpdateWithoutPhysicalActivityInput, ActivityTypeUncheckedUpdateWithoutPhysicalActivityInput>
    create: XOR<ActivityTypeCreateWithoutPhysicalActivityInput, ActivityTypeUncheckedCreateWithoutPhysicalActivityInput>
  }

  export type ActivityTypeUpdateWithWhereUniqueWithoutPhysicalActivityInput = {
    where: ActivityTypeWhereUniqueInput
    data: XOR<ActivityTypeUpdateWithoutPhysicalActivityInput, ActivityTypeUncheckedUpdateWithoutPhysicalActivityInput>
  }

  export type ActivityTypeUpdateManyWithWhereWithoutPhysicalActivityInput = {
    where: ActivityTypeScalarWhereInput
    data: XOR<ActivityTypeUpdateManyMutationInput, ActivityTypeUncheckedUpdateManyWithoutPhysicalActivityInput>
  }

  export type ActivityTypeScalarWhereInput = {
    AND?: ActivityTypeScalarWhereInput | ActivityTypeScalarWhereInput[]
    OR?: ActivityTypeScalarWhereInput[]
    NOT?: ActivityTypeScalarWhereInput | ActivityTypeScalarWhereInput[]
    id?: StringFilter<"ActivityType"> | string
    name?: StringFilter<"ActivityType"> | string
    duration?: IntFilter<"ActivityType"> | number
    metValue?: FloatFilter<"ActivityType"> | number
    physicalActivityId?: StringFilter<"ActivityType"> | string
    createdAt?: DateTimeFilter<"ActivityType"> | Date | string
    updatedAt?: DateTimeFilter<"ActivityType"> | Date | string
  }

  export type UserActivitesUpsertWithoutPhysicalActivityLogInput = {
    update: XOR<UserActivitesUpdateWithoutPhysicalActivityLogInput, UserActivitesUncheckedUpdateWithoutPhysicalActivityLogInput>
    create: XOR<UserActivitesCreateWithoutPhysicalActivityLogInput, UserActivitesUncheckedCreateWithoutPhysicalActivityLogInput>
    where?: UserActivitesWhereInput
  }

  export type UserActivitesUpdateToOneWithWhereWithoutPhysicalActivityLogInput = {
    where?: UserActivitesWhereInput
    data: XOR<UserActivitesUpdateWithoutPhysicalActivityLogInput, UserActivitesUncheckedUpdateWithoutPhysicalActivityLogInput>
  }

  export type UserActivitesUpdateWithoutPhysicalActivityLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumACTIVITY_TYPEFieldUpdateOperationsInput | $Enums.ACTIVITY_TYPE
    title?: StringFieldUpdateOperationsInput | string
    stepsCount?: NullableFloatFieldUpdateOperationsInput | number | null
    effectToBody?: NullableStringFieldUpdateOperationsInput | string | null
    stepTrackerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserActivitesNestedInput
    sleepTracker?: SleepTrackerUpdateOneWithoutUserActivityNestedInput
    userHydration?: UserHydrationUpdateOneWithoutUserActivityNestedInput
    foodLog?: FoodLogUpdateOneWithoutUserActivityIdNestedInput
  }

  export type UserActivitesUncheckedUpdateWithoutPhysicalActivityLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    category?: EnumACTIVITY_TYPEFieldUpdateOperationsInput | $Enums.ACTIVITY_TYPE
    title?: StringFieldUpdateOperationsInput | string
    stepsCount?: NullableFloatFieldUpdateOperationsInput | number | null
    effectToBody?: NullableStringFieldUpdateOperationsInput | string | null
    sleepTrackerId?: NullableStringFieldUpdateOperationsInput | string | null
    userHydrationId?: NullableStringFieldUpdateOperationsInput | string | null
    stepTrackerId?: NullableStringFieldUpdateOperationsInput | string | null
    foodLogId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhysicalActivityLogCreateWithoutActivityTypeInput = {
    id?: string
    duration: number
    caloriesBurned: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPhysicalActivityLogInput
    userActivityId?: UserActivitesCreateNestedOneWithoutPhysicalActivityLogInput
  }

  export type PhysicalActivityLogUncheckedCreateWithoutActivityTypeInput = {
    id?: string
    userId: string
    duration: number
    caloriesBurned: number
    createdAt?: Date | string
    userActivityId?: UserActivitesUncheckedCreateNestedOneWithoutPhysicalActivityLogInput
  }

  export type PhysicalActivityLogCreateOrConnectWithoutActivityTypeInput = {
    where: PhysicalActivityLogWhereUniqueInput
    create: XOR<PhysicalActivityLogCreateWithoutActivityTypeInput, PhysicalActivityLogUncheckedCreateWithoutActivityTypeInput>
  }

  export type PhysicalActivityLogUpsertWithoutActivityTypeInput = {
    update: XOR<PhysicalActivityLogUpdateWithoutActivityTypeInput, PhysicalActivityLogUncheckedUpdateWithoutActivityTypeInput>
    create: XOR<PhysicalActivityLogCreateWithoutActivityTypeInput, PhysicalActivityLogUncheckedCreateWithoutActivityTypeInput>
    where?: PhysicalActivityLogWhereInput
  }

  export type PhysicalActivityLogUpdateToOneWithWhereWithoutActivityTypeInput = {
    where?: PhysicalActivityLogWhereInput
    data: XOR<PhysicalActivityLogUpdateWithoutActivityTypeInput, PhysicalActivityLogUncheckedUpdateWithoutActivityTypeInput>
  }

  export type PhysicalActivityLogUpdateWithoutActivityTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    caloriesBurned?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPhysicalActivityLogNestedInput
    userActivityId?: UserActivitesUpdateOneWithoutPhysicalActivityLogNestedInput
  }

  export type PhysicalActivityLogUncheckedUpdateWithoutActivityTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    caloriesBurned?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userActivityId?: UserActivitesUncheckedUpdateOneWithoutPhysicalActivityLogNestedInput
  }

  export type UserCreateWithoutFoodLogInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
    Chatbot?: ChatbotCreateNestedManyWithoutUserInput
    UserCharacteristic?: UserCharacteristicsCreateNestedManyWithoutUserInput
    PhysicalActivityLog?: PhysicalActivityLogCreateNestedManyWithoutUserInput
    UserActivites?: UserActivitesCreateNestedManyWithoutUserInput
    UserHydration?: UserHydrationCreateNestedManyWithoutUserInput
    SleepTracker?: SleepTrackerCreateNestedManyWithoutUserInput
    UserGoal?: UserGoalCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFoodLogInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    Chatbot?: ChatbotUncheckedCreateNestedManyWithoutUserInput
    UserCharacteristic?: UserCharacteristicsUncheckedCreateNestedManyWithoutUserInput
    PhysicalActivityLog?: PhysicalActivityLogUncheckedCreateNestedManyWithoutUserInput
    UserActivites?: UserActivitesUncheckedCreateNestedManyWithoutUserInput
    UserHydration?: UserHydrationUncheckedCreateNestedManyWithoutUserInput
    SleepTracker?: SleepTrackerUncheckedCreateNestedManyWithoutUserInput
    UserGoal?: UserGoalUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFoodLogInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFoodLogInput, UserUncheckedCreateWithoutFoodLogInput>
  }

  export type UserActivitesCreateWithoutFoodLogInput = {
    id?: string
    category: $Enums.ACTIVITY_TYPE
    title: string
    stepsCount?: number | null
    effectToBody?: string | null
    stepTrackerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserActivitesInput
    sleepTracker?: SleepTrackerCreateNestedOneWithoutUserActivityInput
    userHydration?: UserHydrationCreateNestedOneWithoutUserActivityInput
    physicalActivityLog?: PhysicalActivityLogCreateNestedOneWithoutUserActivityIdInput
  }

  export type UserActivitesUncheckedCreateWithoutFoodLogInput = {
    id?: string
    userId: string
    category: $Enums.ACTIVITY_TYPE
    title: string
    stepsCount?: number | null
    effectToBody?: string | null
    sleepTrackerId?: string | null
    userHydrationId?: string | null
    stepTrackerId?: string | null
    physicalActivityLogId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserActivitesCreateOrConnectWithoutFoodLogInput = {
    where: UserActivitesWhereUniqueInput
    create: XOR<UserActivitesCreateWithoutFoodLogInput, UserActivitesUncheckedCreateWithoutFoodLogInput>
  }

  export type UserUpsertWithoutFoodLogInput = {
    update: XOR<UserUpdateWithoutFoodLogInput, UserUncheckedUpdateWithoutFoodLogInput>
    create: XOR<UserCreateWithoutFoodLogInput, UserUncheckedCreateWithoutFoodLogInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFoodLogInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFoodLogInput, UserUncheckedUpdateWithoutFoodLogInput>
  }

  export type UserUpdateWithoutFoodLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
    Chatbot?: ChatbotUpdateManyWithoutUserNestedInput
    UserCharacteristic?: UserCharacteristicsUpdateManyWithoutUserNestedInput
    PhysicalActivityLog?: PhysicalActivityLogUpdateManyWithoutUserNestedInput
    UserActivites?: UserActivitesUpdateManyWithoutUserNestedInput
    UserHydration?: UserHydrationUpdateManyWithoutUserNestedInput
    SleepTracker?: SleepTrackerUpdateManyWithoutUserNestedInput
    UserGoal?: UserGoalUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFoodLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    Chatbot?: ChatbotUncheckedUpdateManyWithoutUserNestedInput
    UserCharacteristic?: UserCharacteristicsUncheckedUpdateManyWithoutUserNestedInput
    PhysicalActivityLog?: PhysicalActivityLogUncheckedUpdateManyWithoutUserNestedInput
    UserActivites?: UserActivitesUncheckedUpdateManyWithoutUserNestedInput
    UserHydration?: UserHydrationUncheckedUpdateManyWithoutUserNestedInput
    SleepTracker?: SleepTrackerUncheckedUpdateManyWithoutUserNestedInput
    UserGoal?: UserGoalUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserActivitesUpsertWithoutFoodLogInput = {
    update: XOR<UserActivitesUpdateWithoutFoodLogInput, UserActivitesUncheckedUpdateWithoutFoodLogInput>
    create: XOR<UserActivitesCreateWithoutFoodLogInput, UserActivitesUncheckedCreateWithoutFoodLogInput>
    where?: UserActivitesWhereInput
  }

  export type UserActivitesUpdateToOneWithWhereWithoutFoodLogInput = {
    where?: UserActivitesWhereInput
    data: XOR<UserActivitesUpdateWithoutFoodLogInput, UserActivitesUncheckedUpdateWithoutFoodLogInput>
  }

  export type UserActivitesUpdateWithoutFoodLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumACTIVITY_TYPEFieldUpdateOperationsInput | $Enums.ACTIVITY_TYPE
    title?: StringFieldUpdateOperationsInput | string
    stepsCount?: NullableFloatFieldUpdateOperationsInput | number | null
    effectToBody?: NullableStringFieldUpdateOperationsInput | string | null
    stepTrackerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserActivitesNestedInput
    sleepTracker?: SleepTrackerUpdateOneWithoutUserActivityNestedInput
    userHydration?: UserHydrationUpdateOneWithoutUserActivityNestedInput
    physicalActivityLog?: PhysicalActivityLogUpdateOneWithoutUserActivityIdNestedInput
  }

  export type UserActivitesUncheckedUpdateWithoutFoodLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    category?: EnumACTIVITY_TYPEFieldUpdateOperationsInput | $Enums.ACTIVITY_TYPE
    title?: StringFieldUpdateOperationsInput | string
    stepsCount?: NullableFloatFieldUpdateOperationsInput | number | null
    effectToBody?: NullableStringFieldUpdateOperationsInput | string | null
    sleepTrackerId?: NullableStringFieldUpdateOperationsInput | string | null
    userHydrationId?: NullableStringFieldUpdateOperationsInput | string | null
    stepTrackerId?: NullableStringFieldUpdateOperationsInput | string | null
    physicalActivityLogId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActivitesCreateWithoutUserHydrationInput = {
    id?: string
    category: $Enums.ACTIVITY_TYPE
    title: string
    stepsCount?: number | null
    effectToBody?: string | null
    stepTrackerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserActivitesInput
    sleepTracker?: SleepTrackerCreateNestedOneWithoutUserActivityInput
    foodLog?: FoodLogCreateNestedOneWithoutUserActivityIdInput
    physicalActivityLog?: PhysicalActivityLogCreateNestedOneWithoutUserActivityIdInput
  }

  export type UserActivitesUncheckedCreateWithoutUserHydrationInput = {
    id?: string
    userId: string
    category: $Enums.ACTIVITY_TYPE
    title: string
    stepsCount?: number | null
    effectToBody?: string | null
    sleepTrackerId?: string | null
    stepTrackerId?: string | null
    foodLogId?: string | null
    physicalActivityLogId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserActivitesCreateOrConnectWithoutUserHydrationInput = {
    where: UserActivitesWhereUniqueInput
    create: XOR<UserActivitesCreateWithoutUserHydrationInput, UserActivitesUncheckedCreateWithoutUserHydrationInput>
  }

  export type UserCreateWithoutUserHydrationInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
    Chatbot?: ChatbotCreateNestedManyWithoutUserInput
    UserCharacteristic?: UserCharacteristicsCreateNestedManyWithoutUserInput
    PhysicalActivityLog?: PhysicalActivityLogCreateNestedManyWithoutUserInput
    UserActivites?: UserActivitesCreateNestedManyWithoutUserInput
    FoodLog?: FoodLogCreateNestedManyWithoutUserInput
    SleepTracker?: SleepTrackerCreateNestedManyWithoutUserInput
    UserGoal?: UserGoalCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserHydrationInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    Chatbot?: ChatbotUncheckedCreateNestedManyWithoutUserInput
    UserCharacteristic?: UserCharacteristicsUncheckedCreateNestedManyWithoutUserInput
    PhysicalActivityLog?: PhysicalActivityLogUncheckedCreateNestedManyWithoutUserInput
    UserActivites?: UserActivitesUncheckedCreateNestedManyWithoutUserInput
    FoodLog?: FoodLogUncheckedCreateNestedManyWithoutUserInput
    SleepTracker?: SleepTrackerUncheckedCreateNestedManyWithoutUserInput
    UserGoal?: UserGoalUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserHydrationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserHydrationInput, UserUncheckedCreateWithoutUserHydrationInput>
  }

  export type UserActivitesUpsertWithoutUserHydrationInput = {
    update: XOR<UserActivitesUpdateWithoutUserHydrationInput, UserActivitesUncheckedUpdateWithoutUserHydrationInput>
    create: XOR<UserActivitesCreateWithoutUserHydrationInput, UserActivitesUncheckedCreateWithoutUserHydrationInput>
    where?: UserActivitesWhereInput
  }

  export type UserActivitesUpdateToOneWithWhereWithoutUserHydrationInput = {
    where?: UserActivitesWhereInput
    data: XOR<UserActivitesUpdateWithoutUserHydrationInput, UserActivitesUncheckedUpdateWithoutUserHydrationInput>
  }

  export type UserActivitesUpdateWithoutUserHydrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumACTIVITY_TYPEFieldUpdateOperationsInput | $Enums.ACTIVITY_TYPE
    title?: StringFieldUpdateOperationsInput | string
    stepsCount?: NullableFloatFieldUpdateOperationsInput | number | null
    effectToBody?: NullableStringFieldUpdateOperationsInput | string | null
    stepTrackerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserActivitesNestedInput
    sleepTracker?: SleepTrackerUpdateOneWithoutUserActivityNestedInput
    foodLog?: FoodLogUpdateOneWithoutUserActivityIdNestedInput
    physicalActivityLog?: PhysicalActivityLogUpdateOneWithoutUserActivityIdNestedInput
  }

  export type UserActivitesUncheckedUpdateWithoutUserHydrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    category?: EnumACTIVITY_TYPEFieldUpdateOperationsInput | $Enums.ACTIVITY_TYPE
    title?: StringFieldUpdateOperationsInput | string
    stepsCount?: NullableFloatFieldUpdateOperationsInput | number | null
    effectToBody?: NullableStringFieldUpdateOperationsInput | string | null
    sleepTrackerId?: NullableStringFieldUpdateOperationsInput | string | null
    stepTrackerId?: NullableStringFieldUpdateOperationsInput | string | null
    foodLogId?: NullableStringFieldUpdateOperationsInput | string | null
    physicalActivityLogId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutUserHydrationInput = {
    update: XOR<UserUpdateWithoutUserHydrationInput, UserUncheckedUpdateWithoutUserHydrationInput>
    create: XOR<UserCreateWithoutUserHydrationInput, UserUncheckedCreateWithoutUserHydrationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserHydrationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserHydrationInput, UserUncheckedUpdateWithoutUserHydrationInput>
  }

  export type UserUpdateWithoutUserHydrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
    Chatbot?: ChatbotUpdateManyWithoutUserNestedInput
    UserCharacteristic?: UserCharacteristicsUpdateManyWithoutUserNestedInput
    PhysicalActivityLog?: PhysicalActivityLogUpdateManyWithoutUserNestedInput
    UserActivites?: UserActivitesUpdateManyWithoutUserNestedInput
    FoodLog?: FoodLogUpdateManyWithoutUserNestedInput
    SleepTracker?: SleepTrackerUpdateManyWithoutUserNestedInput
    UserGoal?: UserGoalUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserHydrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    Chatbot?: ChatbotUncheckedUpdateManyWithoutUserNestedInput
    UserCharacteristic?: UserCharacteristicsUncheckedUpdateManyWithoutUserNestedInput
    PhysicalActivityLog?: PhysicalActivityLogUncheckedUpdateManyWithoutUserNestedInput
    UserActivites?: UserActivitesUncheckedUpdateManyWithoutUserNestedInput
    FoodLog?: FoodLogUncheckedUpdateManyWithoutUserNestedInput
    SleepTracker?: SleepTrackerUncheckedUpdateManyWithoutUserNestedInput
    UserGoal?: UserGoalUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutSleepTrackerInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
    Chatbot?: ChatbotCreateNestedManyWithoutUserInput
    UserCharacteristic?: UserCharacteristicsCreateNestedManyWithoutUserInput
    PhysicalActivityLog?: PhysicalActivityLogCreateNestedManyWithoutUserInput
    UserActivites?: UserActivitesCreateNestedManyWithoutUserInput
    FoodLog?: FoodLogCreateNestedManyWithoutUserInput
    UserHydration?: UserHydrationCreateNestedManyWithoutUserInput
    UserGoal?: UserGoalCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSleepTrackerInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    Chatbot?: ChatbotUncheckedCreateNestedManyWithoutUserInput
    UserCharacteristic?: UserCharacteristicsUncheckedCreateNestedManyWithoutUserInput
    PhysicalActivityLog?: PhysicalActivityLogUncheckedCreateNestedManyWithoutUserInput
    UserActivites?: UserActivitesUncheckedCreateNestedManyWithoutUserInput
    FoodLog?: FoodLogUncheckedCreateNestedManyWithoutUserInput
    UserHydration?: UserHydrationUncheckedCreateNestedManyWithoutUserInput
    UserGoal?: UserGoalUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSleepTrackerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSleepTrackerInput, UserUncheckedCreateWithoutSleepTrackerInput>
  }

  export type UserActivitesCreateWithoutSleepTrackerInput = {
    id?: string
    category: $Enums.ACTIVITY_TYPE
    title: string
    stepsCount?: number | null
    effectToBody?: string | null
    stepTrackerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserActivitesInput
    userHydration?: UserHydrationCreateNestedOneWithoutUserActivityInput
    foodLog?: FoodLogCreateNestedOneWithoutUserActivityIdInput
    physicalActivityLog?: PhysicalActivityLogCreateNestedOneWithoutUserActivityIdInput
  }

  export type UserActivitesUncheckedCreateWithoutSleepTrackerInput = {
    id?: string
    userId: string
    category: $Enums.ACTIVITY_TYPE
    title: string
    stepsCount?: number | null
    effectToBody?: string | null
    userHydrationId?: string | null
    stepTrackerId?: string | null
    foodLogId?: string | null
    physicalActivityLogId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserActivitesCreateOrConnectWithoutSleepTrackerInput = {
    where: UserActivitesWhereUniqueInput
    create: XOR<UserActivitesCreateWithoutSleepTrackerInput, UserActivitesUncheckedCreateWithoutSleepTrackerInput>
  }

  export type UserUpsertWithoutSleepTrackerInput = {
    update: XOR<UserUpdateWithoutSleepTrackerInput, UserUncheckedUpdateWithoutSleepTrackerInput>
    create: XOR<UserCreateWithoutSleepTrackerInput, UserUncheckedCreateWithoutSleepTrackerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSleepTrackerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSleepTrackerInput, UserUncheckedUpdateWithoutSleepTrackerInput>
  }

  export type UserUpdateWithoutSleepTrackerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
    Chatbot?: ChatbotUpdateManyWithoutUserNestedInput
    UserCharacteristic?: UserCharacteristicsUpdateManyWithoutUserNestedInput
    PhysicalActivityLog?: PhysicalActivityLogUpdateManyWithoutUserNestedInput
    UserActivites?: UserActivitesUpdateManyWithoutUserNestedInput
    FoodLog?: FoodLogUpdateManyWithoutUserNestedInput
    UserHydration?: UserHydrationUpdateManyWithoutUserNestedInput
    UserGoal?: UserGoalUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSleepTrackerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    Chatbot?: ChatbotUncheckedUpdateManyWithoutUserNestedInput
    UserCharacteristic?: UserCharacteristicsUncheckedUpdateManyWithoutUserNestedInput
    PhysicalActivityLog?: PhysicalActivityLogUncheckedUpdateManyWithoutUserNestedInput
    UserActivites?: UserActivitesUncheckedUpdateManyWithoutUserNestedInput
    FoodLog?: FoodLogUncheckedUpdateManyWithoutUserNestedInput
    UserHydration?: UserHydrationUncheckedUpdateManyWithoutUserNestedInput
    UserGoal?: UserGoalUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserActivitesUpsertWithoutSleepTrackerInput = {
    update: XOR<UserActivitesUpdateWithoutSleepTrackerInput, UserActivitesUncheckedUpdateWithoutSleepTrackerInput>
    create: XOR<UserActivitesCreateWithoutSleepTrackerInput, UserActivitesUncheckedCreateWithoutSleepTrackerInput>
    where?: UserActivitesWhereInput
  }

  export type UserActivitesUpdateToOneWithWhereWithoutSleepTrackerInput = {
    where?: UserActivitesWhereInput
    data: XOR<UserActivitesUpdateWithoutSleepTrackerInput, UserActivitesUncheckedUpdateWithoutSleepTrackerInput>
  }

  export type UserActivitesUpdateWithoutSleepTrackerInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumACTIVITY_TYPEFieldUpdateOperationsInput | $Enums.ACTIVITY_TYPE
    title?: StringFieldUpdateOperationsInput | string
    stepsCount?: NullableFloatFieldUpdateOperationsInput | number | null
    effectToBody?: NullableStringFieldUpdateOperationsInput | string | null
    stepTrackerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserActivitesNestedInput
    userHydration?: UserHydrationUpdateOneWithoutUserActivityNestedInput
    foodLog?: FoodLogUpdateOneWithoutUserActivityIdNestedInput
    physicalActivityLog?: PhysicalActivityLogUpdateOneWithoutUserActivityIdNestedInput
  }

  export type UserActivitesUncheckedUpdateWithoutSleepTrackerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    category?: EnumACTIVITY_TYPEFieldUpdateOperationsInput | $Enums.ACTIVITY_TYPE
    title?: StringFieldUpdateOperationsInput | string
    stepsCount?: NullableFloatFieldUpdateOperationsInput | number | null
    effectToBody?: NullableStringFieldUpdateOperationsInput | string | null
    userHydrationId?: NullableStringFieldUpdateOperationsInput | string | null
    stepTrackerId?: NullableStringFieldUpdateOperationsInput | string | null
    foodLogId?: NullableStringFieldUpdateOperationsInput | string | null
    physicalActivityLogId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutUserActivitesInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
    Chatbot?: ChatbotCreateNestedManyWithoutUserInput
    UserCharacteristic?: UserCharacteristicsCreateNestedManyWithoutUserInput
    PhysicalActivityLog?: PhysicalActivityLogCreateNestedManyWithoutUserInput
    FoodLog?: FoodLogCreateNestedManyWithoutUserInput
    UserHydration?: UserHydrationCreateNestedManyWithoutUserInput
    SleepTracker?: SleepTrackerCreateNestedManyWithoutUserInput
    UserGoal?: UserGoalCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserActivitesInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    Chatbot?: ChatbotUncheckedCreateNestedManyWithoutUserInput
    UserCharacteristic?: UserCharacteristicsUncheckedCreateNestedManyWithoutUserInput
    PhysicalActivityLog?: PhysicalActivityLogUncheckedCreateNestedManyWithoutUserInput
    FoodLog?: FoodLogUncheckedCreateNestedManyWithoutUserInput
    UserHydration?: UserHydrationUncheckedCreateNestedManyWithoutUserInput
    SleepTracker?: SleepTrackerUncheckedCreateNestedManyWithoutUserInput
    UserGoal?: UserGoalUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserActivitesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserActivitesInput, UserUncheckedCreateWithoutUserActivitesInput>
  }

  export type SleepTrackerCreateWithoutUserActivityInput = {
    id?: string
    duration: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSleepTrackerInput
  }

  export type SleepTrackerUncheckedCreateWithoutUserActivityInput = {
    id?: string
    userId: string
    duration: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SleepTrackerCreateOrConnectWithoutUserActivityInput = {
    where: SleepTrackerWhereUniqueInput
    create: XOR<SleepTrackerCreateWithoutUserActivityInput, SleepTrackerUncheckedCreateWithoutUserActivityInput>
  }

  export type UserHydrationCreateWithoutUserActivityInput = {
    id?: string
    waterIntake: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserHydrationInput
  }

  export type UserHydrationUncheckedCreateWithoutUserActivityInput = {
    id?: string
    userId: string
    waterIntake: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserHydrationCreateOrConnectWithoutUserActivityInput = {
    where: UserHydrationWhereUniqueInput
    create: XOR<UserHydrationCreateWithoutUserActivityInput, UserHydrationUncheckedCreateWithoutUserActivityInput>
  }

  export type FoodLogCreateWithoutUserActivityIdInput = {
    id?: string
    foodName: string
    calories: number
    mealType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFoodLogInput
  }

  export type FoodLogUncheckedCreateWithoutUserActivityIdInput = {
    id?: string
    userId: string
    foodName: string
    calories: number
    mealType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodLogCreateOrConnectWithoutUserActivityIdInput = {
    where: FoodLogWhereUniqueInput
    create: XOR<FoodLogCreateWithoutUserActivityIdInput, FoodLogUncheckedCreateWithoutUserActivityIdInput>
  }

  export type PhysicalActivityLogCreateWithoutUserActivityIdInput = {
    id?: string
    duration: number
    caloriesBurned: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPhysicalActivityLogInput
    activityType?: ActivityTypeCreateNestedManyWithoutPhysicalActivityInput
  }

  export type PhysicalActivityLogUncheckedCreateWithoutUserActivityIdInput = {
    id?: string
    userId: string
    duration: number
    caloriesBurned: number
    createdAt?: Date | string
    activityType?: ActivityTypeUncheckedCreateNestedManyWithoutPhysicalActivityInput
  }

  export type PhysicalActivityLogCreateOrConnectWithoutUserActivityIdInput = {
    where: PhysicalActivityLogWhereUniqueInput
    create: XOR<PhysicalActivityLogCreateWithoutUserActivityIdInput, PhysicalActivityLogUncheckedCreateWithoutUserActivityIdInput>
  }

  export type UserUpsertWithoutUserActivitesInput = {
    update: XOR<UserUpdateWithoutUserActivitesInput, UserUncheckedUpdateWithoutUserActivitesInput>
    create: XOR<UserCreateWithoutUserActivitesInput, UserUncheckedCreateWithoutUserActivitesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserActivitesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserActivitesInput, UserUncheckedUpdateWithoutUserActivitesInput>
  }

  export type UserUpdateWithoutUserActivitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
    Chatbot?: ChatbotUpdateManyWithoutUserNestedInput
    UserCharacteristic?: UserCharacteristicsUpdateManyWithoutUserNestedInput
    PhysicalActivityLog?: PhysicalActivityLogUpdateManyWithoutUserNestedInput
    FoodLog?: FoodLogUpdateManyWithoutUserNestedInput
    UserHydration?: UserHydrationUpdateManyWithoutUserNestedInput
    SleepTracker?: SleepTrackerUpdateManyWithoutUserNestedInput
    UserGoal?: UserGoalUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserActivitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    Chatbot?: ChatbotUncheckedUpdateManyWithoutUserNestedInput
    UserCharacteristic?: UserCharacteristicsUncheckedUpdateManyWithoutUserNestedInput
    PhysicalActivityLog?: PhysicalActivityLogUncheckedUpdateManyWithoutUserNestedInput
    FoodLog?: FoodLogUncheckedUpdateManyWithoutUserNestedInput
    UserHydration?: UserHydrationUncheckedUpdateManyWithoutUserNestedInput
    SleepTracker?: SleepTrackerUncheckedUpdateManyWithoutUserNestedInput
    UserGoal?: UserGoalUncheckedUpdateOneWithoutUserNestedInput
  }

  export type SleepTrackerUpsertWithoutUserActivityInput = {
    update: XOR<SleepTrackerUpdateWithoutUserActivityInput, SleepTrackerUncheckedUpdateWithoutUserActivityInput>
    create: XOR<SleepTrackerCreateWithoutUserActivityInput, SleepTrackerUncheckedCreateWithoutUserActivityInput>
    where?: SleepTrackerWhereInput
  }

  export type SleepTrackerUpdateToOneWithWhereWithoutUserActivityInput = {
    where?: SleepTrackerWhereInput
    data: XOR<SleepTrackerUpdateWithoutUserActivityInput, SleepTrackerUncheckedUpdateWithoutUserActivityInput>
  }

  export type SleepTrackerUpdateWithoutUserActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSleepTrackerNestedInput
  }

  export type SleepTrackerUncheckedUpdateWithoutUserActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    duration?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHydrationUpsertWithoutUserActivityInput = {
    update: XOR<UserHydrationUpdateWithoutUserActivityInput, UserHydrationUncheckedUpdateWithoutUserActivityInput>
    create: XOR<UserHydrationCreateWithoutUserActivityInput, UserHydrationUncheckedCreateWithoutUserActivityInput>
    where?: UserHydrationWhereInput
  }

  export type UserHydrationUpdateToOneWithWhereWithoutUserActivityInput = {
    where?: UserHydrationWhereInput
    data: XOR<UserHydrationUpdateWithoutUserActivityInput, UserHydrationUncheckedUpdateWithoutUserActivityInput>
  }

  export type UserHydrationUpdateWithoutUserActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    waterIntake?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserHydrationNestedInput
  }

  export type UserHydrationUncheckedUpdateWithoutUserActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    waterIntake?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodLogUpsertWithoutUserActivityIdInput = {
    update: XOR<FoodLogUpdateWithoutUserActivityIdInput, FoodLogUncheckedUpdateWithoutUserActivityIdInput>
    create: XOR<FoodLogCreateWithoutUserActivityIdInput, FoodLogUncheckedCreateWithoutUserActivityIdInput>
    where?: FoodLogWhereInput
  }

  export type FoodLogUpdateToOneWithWhereWithoutUserActivityIdInput = {
    where?: FoodLogWhereInput
    data: XOR<FoodLogUpdateWithoutUserActivityIdInput, FoodLogUncheckedUpdateWithoutUserActivityIdInput>
  }

  export type FoodLogUpdateWithoutUserActivityIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodName?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    mealType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFoodLogNestedInput
  }

  export type FoodLogUncheckedUpdateWithoutUserActivityIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    foodName?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    mealType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhysicalActivityLogUpsertWithoutUserActivityIdInput = {
    update: XOR<PhysicalActivityLogUpdateWithoutUserActivityIdInput, PhysicalActivityLogUncheckedUpdateWithoutUserActivityIdInput>
    create: XOR<PhysicalActivityLogCreateWithoutUserActivityIdInput, PhysicalActivityLogUncheckedCreateWithoutUserActivityIdInput>
    where?: PhysicalActivityLogWhereInput
  }

  export type PhysicalActivityLogUpdateToOneWithWhereWithoutUserActivityIdInput = {
    where?: PhysicalActivityLogWhereInput
    data: XOR<PhysicalActivityLogUpdateWithoutUserActivityIdInput, PhysicalActivityLogUncheckedUpdateWithoutUserActivityIdInput>
  }

  export type PhysicalActivityLogUpdateWithoutUserActivityIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    caloriesBurned?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPhysicalActivityLogNestedInput
    activityType?: ActivityTypeUpdateManyWithoutPhysicalActivityNestedInput
  }

  export type PhysicalActivityLogUncheckedUpdateWithoutUserActivityIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    caloriesBurned?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityType?: ActivityTypeUncheckedUpdateManyWithoutPhysicalActivityNestedInput
  }

  export type UserCreateWithoutChatbotInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
    UserCharacteristic?: UserCharacteristicsCreateNestedManyWithoutUserInput
    PhysicalActivityLog?: PhysicalActivityLogCreateNestedManyWithoutUserInput
    UserActivites?: UserActivitesCreateNestedManyWithoutUserInput
    FoodLog?: FoodLogCreateNestedManyWithoutUserInput
    UserHydration?: UserHydrationCreateNestedManyWithoutUserInput
    SleepTracker?: SleepTrackerCreateNestedManyWithoutUserInput
    UserGoal?: UserGoalCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatbotInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    username?: string | null
    lastSeen?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    UserCharacteristic?: UserCharacteristicsUncheckedCreateNestedManyWithoutUserInput
    PhysicalActivityLog?: PhysicalActivityLogUncheckedCreateNestedManyWithoutUserInput
    UserActivites?: UserActivitesUncheckedCreateNestedManyWithoutUserInput
    FoodLog?: FoodLogUncheckedCreateNestedManyWithoutUserInput
    UserHydration?: UserHydrationUncheckedCreateNestedManyWithoutUserInput
    SleepTracker?: SleepTrackerUncheckedCreateNestedManyWithoutUserInput
    UserGoal?: UserGoalUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatbotInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatbotInput, UserUncheckedCreateWithoutChatbotInput>
  }

  export type UserUpsertWithoutChatbotInput = {
    update: XOR<UserUpdateWithoutChatbotInput, UserUncheckedUpdateWithoutChatbotInput>
    create: XOR<UserCreateWithoutChatbotInput, UserUncheckedCreateWithoutChatbotInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatbotInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatbotInput, UserUncheckedUpdateWithoutChatbotInput>
  }

  export type UserUpdateWithoutChatbotInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
    UserCharacteristic?: UserCharacteristicsUpdateManyWithoutUserNestedInput
    PhysicalActivityLog?: PhysicalActivityLogUpdateManyWithoutUserNestedInput
    UserActivites?: UserActivitesUpdateManyWithoutUserNestedInput
    FoodLog?: FoodLogUpdateManyWithoutUserNestedInput
    UserHydration?: UserHydrationUpdateManyWithoutUserNestedInput
    SleepTracker?: SleepTrackerUpdateManyWithoutUserNestedInput
    UserGoal?: UserGoalUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatbotInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    UserCharacteristic?: UserCharacteristicsUncheckedUpdateManyWithoutUserNestedInput
    PhysicalActivityLog?: PhysicalActivityLogUncheckedUpdateManyWithoutUserNestedInput
    UserActivites?: UserActivitesUncheckedUpdateManyWithoutUserNestedInput
    FoodLog?: FoodLogUncheckedUpdateManyWithoutUserNestedInput
    UserHydration?: UserHydrationUncheckedUpdateManyWithoutUserNestedInput
    SleepTracker?: SleepTrackerUncheckedUpdateManyWithoutUserNestedInput
    UserGoal?: UserGoalUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AccountCreateManyUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthenticatorCreateManyUserInput = {
    credentialID: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type ChatbotCreateManyUserInput = {
    id?: string
    payload?: string | null
    sender: $Enums.SENDER
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCharacteristicsCreateManyUserInput = {
    id?: string
    gender: string
    age: string
    height: string
    currentWeight: string
    activityFactor: string
    mealsPerDay: string
    sleepHours: string
    workoutsPerWeek: string
    manualCalorieAdjustment?: string | null
    bmi?: string | null
    tdee?: string | null
    bmr?: string | null
    bodyFatPercentage?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhysicalActivityLogCreateManyUserInput = {
    id?: string
    duration: number
    caloriesBurned: number
    createdAt?: Date | string
  }

  export type UserActivitesCreateManyUserInput = {
    id?: string
    category: $Enums.ACTIVITY_TYPE
    title: string
    stepsCount?: number | null
    effectToBody?: string | null
    sleepTrackerId?: string | null
    userHydrationId?: string | null
    stepTrackerId?: string | null
    foodLogId?: string | null
    physicalActivityLogId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodLogCreateManyUserInput = {
    id?: string
    foodName: string
    calories: number
    mealType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserHydrationCreateManyUserInput = {
    id?: string
    waterIntake: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SleepTrackerCreateManyUserInput = {
    id?: string
    duration: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthenticatorUpdateWithoutUserInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthenticatorUncheckedUpdateWithoutUserInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthenticatorUncheckedUpdateManyWithoutUserInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatbotUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    sender?: EnumSENDERFieldUpdateOperationsInput | $Enums.SENDER
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatbotUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    sender?: EnumSENDERFieldUpdateOperationsInput | $Enums.SENDER
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatbotUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    sender?: EnumSENDERFieldUpdateOperationsInput | $Enums.SENDER
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCharacteristicsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    currentWeight?: StringFieldUpdateOperationsInput | string
    activityFactor?: StringFieldUpdateOperationsInput | string
    mealsPerDay?: StringFieldUpdateOperationsInput | string
    sleepHours?: StringFieldUpdateOperationsInput | string
    workoutsPerWeek?: StringFieldUpdateOperationsInput | string
    manualCalorieAdjustment?: NullableStringFieldUpdateOperationsInput | string | null
    bmi?: NullableStringFieldUpdateOperationsInput | string | null
    tdee?: NullableStringFieldUpdateOperationsInput | string | null
    bmr?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFatPercentage?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCharacteristicsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    currentWeight?: StringFieldUpdateOperationsInput | string
    activityFactor?: StringFieldUpdateOperationsInput | string
    mealsPerDay?: StringFieldUpdateOperationsInput | string
    sleepHours?: StringFieldUpdateOperationsInput | string
    workoutsPerWeek?: StringFieldUpdateOperationsInput | string
    manualCalorieAdjustment?: NullableStringFieldUpdateOperationsInput | string | null
    bmi?: NullableStringFieldUpdateOperationsInput | string | null
    tdee?: NullableStringFieldUpdateOperationsInput | string | null
    bmr?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFatPercentage?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCharacteristicsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    currentWeight?: StringFieldUpdateOperationsInput | string
    activityFactor?: StringFieldUpdateOperationsInput | string
    mealsPerDay?: StringFieldUpdateOperationsInput | string
    sleepHours?: StringFieldUpdateOperationsInput | string
    workoutsPerWeek?: StringFieldUpdateOperationsInput | string
    manualCalorieAdjustment?: NullableStringFieldUpdateOperationsInput | string | null
    bmi?: NullableStringFieldUpdateOperationsInput | string | null
    tdee?: NullableStringFieldUpdateOperationsInput | string | null
    bmr?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFatPercentage?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhysicalActivityLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    caloriesBurned?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityType?: ActivityTypeUpdateManyWithoutPhysicalActivityNestedInput
    userActivityId?: UserActivitesUpdateOneWithoutPhysicalActivityLogNestedInput
  }

  export type PhysicalActivityLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    caloriesBurned?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityType?: ActivityTypeUncheckedUpdateManyWithoutPhysicalActivityNestedInput
    userActivityId?: UserActivitesUncheckedUpdateOneWithoutPhysicalActivityLogNestedInput
  }

  export type PhysicalActivityLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    caloriesBurned?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActivitesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumACTIVITY_TYPEFieldUpdateOperationsInput | $Enums.ACTIVITY_TYPE
    title?: StringFieldUpdateOperationsInput | string
    stepsCount?: NullableFloatFieldUpdateOperationsInput | number | null
    effectToBody?: NullableStringFieldUpdateOperationsInput | string | null
    stepTrackerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sleepTracker?: SleepTrackerUpdateOneWithoutUserActivityNestedInput
    userHydration?: UserHydrationUpdateOneWithoutUserActivityNestedInput
    foodLog?: FoodLogUpdateOneWithoutUserActivityIdNestedInput
    physicalActivityLog?: PhysicalActivityLogUpdateOneWithoutUserActivityIdNestedInput
  }

  export type UserActivitesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumACTIVITY_TYPEFieldUpdateOperationsInput | $Enums.ACTIVITY_TYPE
    title?: StringFieldUpdateOperationsInput | string
    stepsCount?: NullableFloatFieldUpdateOperationsInput | number | null
    effectToBody?: NullableStringFieldUpdateOperationsInput | string | null
    sleepTrackerId?: NullableStringFieldUpdateOperationsInput | string | null
    userHydrationId?: NullableStringFieldUpdateOperationsInput | string | null
    stepTrackerId?: NullableStringFieldUpdateOperationsInput | string | null
    foodLogId?: NullableStringFieldUpdateOperationsInput | string | null
    physicalActivityLogId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActivitesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumACTIVITY_TYPEFieldUpdateOperationsInput | $Enums.ACTIVITY_TYPE
    title?: StringFieldUpdateOperationsInput | string
    stepsCount?: NullableFloatFieldUpdateOperationsInput | number | null
    effectToBody?: NullableStringFieldUpdateOperationsInput | string | null
    sleepTrackerId?: NullableStringFieldUpdateOperationsInput | string | null
    userHydrationId?: NullableStringFieldUpdateOperationsInput | string | null
    stepTrackerId?: NullableStringFieldUpdateOperationsInput | string | null
    foodLogId?: NullableStringFieldUpdateOperationsInput | string | null
    physicalActivityLogId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodName?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    mealType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userActivityId?: UserActivitesUpdateOneWithoutFoodLogNestedInput
  }

  export type FoodLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodName?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    mealType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userActivityId?: UserActivitesUncheckedUpdateOneWithoutFoodLogNestedInput
  }

  export type FoodLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodName?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    mealType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHydrationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    waterIntake?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userActivity?: UserActivitesUpdateOneWithoutUserHydrationNestedInput
  }

  export type UserHydrationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    waterIntake?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userActivity?: UserActivitesUncheckedUpdateOneWithoutUserHydrationNestedInput
  }

  export type UserHydrationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    waterIntake?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SleepTrackerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userActivity?: UserActivitesUpdateOneWithoutSleepTrackerNestedInput
  }

  export type SleepTrackerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userActivity?: UserActivitesUncheckedUpdateOneWithoutSleepTrackerNestedInput
  }

  export type SleepTrackerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityTypeCreateManyPhysicalActivityInput = {
    id?: string
    name: string
    duration: number
    metValue: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityTypeUpdateWithoutPhysicalActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    metValue?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityTypeUncheckedUpdateWithoutPhysicalActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    metValue?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityTypeUncheckedUpdateManyWithoutPhysicalActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    metValue?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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