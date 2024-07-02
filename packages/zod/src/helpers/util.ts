// import { objectUtil } from ".";

export type AssertEqual<T, U> = (<V>() => V extends T ? 1 : 2) extends <
  V,
>() => V extends U ? 1 : 2
  ? true
  : false;

export type isAny<T> = 0 extends 1 & T ? true : false;
export function assertEqual<A, B>(val: AssertEqual<A, B>): AssertEqual<A, B> {
  return val;
}
export function assertIs<T>(_arg: T): void {}
export function assertNever(_x: never): never {
  throw new Error();
}

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type OmitKeys<T, K extends string> = Pick<T, Exclude<keyof T, K>>;
export type MakePartial<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;
export type Exactly<T, X> = T & Record<Exclude<keyof X, keyof T>, never>;

export const arrayToEnum = <T extends string, U extends [T, ...T[]]>(
  items: U
): { [k in U[number]]: k } => {
  const obj: any = {};
  for (const item of items) {
    obj[item] = item;
  }
  return obj as any;
};

export function getValidEnumValues(obj: any): any {
  const validKeys = objectKeys(obj).filter(
    (k: any) => typeof obj[obj[k]] !== "number"
  );
  const filtered: any = {};
  for (const k of validKeys) {
    filtered[k] = obj[k];
  }
  return objectValues(filtered);
}

export function objectValues(obj: any): any {
  return objectKeys(obj).map((e) => obj[e]);
}

export const objectKeys: ObjectConstructor["keys"] =
  typeof Object.keys === "function"
    ? (obj: any) => Object.keys(obj)
    : (object: any) => {
        const keys = [];
        for (const key in object) {
          if (Object.prototype.hasOwnProperty.call(object, key)) {
            keys.push(key);
          }
        }
        return keys;
      };

export const find = <T>(arr: T[], checker: (arg: T) => any): T | undefined => {
  for (const item of arr) {
    if (checker(item)) return item;
  }
  return undefined;
};

// export type identity<T> = objectUtil.identity<T>;
// export type flatten<T> = objectUtil.flatten<T>;

export type noUndefined<T> = T extends undefined ? never : T;

export const isInteger: NumberConstructor["isInteger"] =
  typeof Number.isInteger === "function"
    ? (val) => Number.isInteger(val)
    : (val) =>
        typeof val === "number" &&
        Number.isFinite(val) &&
        Math.floor(val) === val;

export function joinValues<T extends any[]>(
  array: T,
  separator = " | "
): string {
  return array
    .map((val) => (typeof val === "string" ? `'${val}'` : val))
    .join(separator);
}

export const jsonStringifyReplacer = (_: string, value: any): any => {
  if (typeof value === "bigint") {
    return value.toString();
  }
  return value;
};

export const ZodParsedType: {
  string: "string";
  nan: "nan";
  number: "number";
  integer: "integer";
  float: "float";
  boolean: "boolean";
  date: "date";
  bigint: "bigint";
  symbol: "symbol";
  function: "function";
  undefined: "undefined";
  null: "null";
  array: "array";
  object: "object";
  unknown: "unknown";
  promise: "promise";
  void: "void";
  never: "never";
  map: "map";
  set: "set";
  file: "file";
} = arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set",
  "file",
]);

export type ZodParsedType = keyof typeof ZodParsedType;

export const getParsedType = (data: any): ZodParsedType => {
  const t = typeof data;

  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;

    case "string":
      return ZodParsedType.string;

    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;

    case "boolean":
      return ZodParsedType.boolean;

    case "function":
      return ZodParsedType.function;

    case "bigint":
      return ZodParsedType.bigint;

    case "symbol":
      return ZodParsedType.symbol;

    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (
        data.then &&
        typeof data.then === "function" &&
        data.catch &&
        typeof data.catch === "function"
      ) {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      if (typeof File !== "undefined" && data instanceof File) {
        return ZodParsedType.file;
      }
      return ZodParsedType.object;

    default:
      return ZodParsedType.unknown;
  }
};
