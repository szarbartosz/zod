import * as base from "./base.js";
import type * as errors from "./errors.js";
import * as schemas from "./schemas.js";
import * as util from "./util.js";

//////////    $ZodCoercedString    //////////

export interface $ZodCoercedStringDef extends schemas.$ZodStringDef {}
export interface $ZodCoercedString extends schemas.$ZodString<unknown>, base.$ZodType<string, unknown> {
  _def: $ZodCoercedStringDef;
  _isst: errors.$ZodIssueInvalidType<"string">;
}

export const $ZodCoercedString: base.$constructor<$ZodCoercedString> = /*@__PURE__*/ base.$constructor(
  "$ZodCoercedString",
  (inst, def) => {
    schemas.$ZodString.init(inst, def); // no format checks
    base.$ZodType.init(inst, def);

    const _super = inst._parse;
    inst._parse = (payload, ctx) => {
      try {
        payload.value = String(payload.value);
      } catch {}
      return _super(payload, ctx);
    };
  }
);

interface $ZodStringParams extends util.TypeParams<$ZodCoercedString, "coerce"> {}
const _string = util.factory(() => $ZodCoercedString, {
  type: "string",
  coerce: true,
});
// overloads
export function string(checks?: base.$ZodCheck<string>[]): $ZodCoercedString;
export function string(params?: string | $ZodStringParams, checks?: base.$ZodCheck<string>[]): $ZodCoercedString;
export function string(...args: any[]): $ZodCoercedString {
  return _string(...args);
}

//////////    $ZodCoercedNumber    //////////

export interface $ZodCoercedNumberDef extends schemas.$ZodNumberDef {}
export interface $ZodCoercedNumber extends schemas.$ZodNumber<unknown>, base.$ZodType<number, unknown> {
  _def: $ZodCoercedNumberDef;
  _isst: errors.$ZodIssueInvalidType<"number">;
}

export const $ZodCoercedNumber: base.$constructor<$ZodCoercedNumber> = /*@__PURE__*/ base.$constructor(
  "$ZodCoercedNumber",
  (inst, def) => {
    schemas.$ZodNumber.init(inst, def); // no format checks
    base.$ZodType.init(inst, def);

    const _super = inst._parse;
    inst._parse = (payload, ctx) => {
      try {
        payload.value = Number(payload.value);
      } catch {}
      return _super(payload, ctx);
    };
  }
);

interface $ZodNumberParams extends util.TypeParams<$ZodCoercedNumber, "coerce"> {}
const _number = util.factory(() => $ZodCoercedNumber, {
  type: "number",
  coerce: true,
});
export function number(checks?: base.$ZodCheck<number>[]): $ZodCoercedNumber;
export function number(params?: string | $ZodNumberParams, checks?: base.$ZodCheck<number>[]): $ZodCoercedNumber;
export function number(...args: any[]): $ZodCoercedNumber {
  return _number(...args);
}

//////////    $ZodCoercedBoolean    //////////

export interface $ZodCoercedBooleanDef extends schemas.$ZodBooleanDef {}
export interface $ZodCoercedBoolean extends schemas.$ZodBoolean<unknown>, base.$ZodType<boolean, unknown> {
  _def: $ZodCoercedBooleanDef;
  _isst: errors.$ZodIssueInvalidType<"boolean">;
}

export const $ZodCoercedBoolean: base.$constructor<$ZodCoercedBoolean> = /*@__PURE__*/ base.$constructor(
  "$ZodCoercedBoolean",
  (inst, def) => {
    schemas.$ZodBoolean.init(inst, def); // no format checks
    base.$ZodType.init(inst, def);

    const _super = inst._parse;
    inst._parse = (payload, ctx) => {
      try {
        payload.value = Boolean(payload.value);
      } catch {}
      return _super(payload, ctx);
    };
  }
);

interface $ZodBooleanParams extends util.TypeParams<$ZodCoercedBoolean, "coerce"> {}
/** Use `z.stringbool()` to convert strings to boolean. */
const _boolean = util.factory(() => $ZodCoercedBoolean, {
  type: "boolean",
  coerce: true,
});
export function boolean(checks?: base.$ZodCheck<boolean>[]): $ZodCoercedBoolean;
export function boolean(params?: string | $ZodBooleanParams, checks?: base.$ZodCheck<boolean>[]): $ZodCoercedBoolean;
export function boolean(...args: any[]): $ZodCoercedBoolean {
  return _boolean(...args);
}

//////////    $ZodCoercedBigInt    //////////
export interface $ZodCoercedBigIntDef extends schemas.$ZodBigIntDef {}
export interface $ZodCoercedBigInt extends schemas.$ZodBigInt<unknown>, base.$ZodType<bigint, unknown> {
  _def: $ZodCoercedBigIntDef;
  _isst: errors.$ZodIssueInvalidType<"bigint">;
}

export const $ZodCoercedBigInt: base.$constructor<$ZodCoercedBigInt> = /*@__PURE__*/ base.$constructor(
  "$ZodCoercedBigInt",
  (inst, def) => {
    schemas.$ZodBigInt.init(inst, def); // no format checks
    base.$ZodType.init(inst, def);

    const _super = inst._parse;
    inst._parse = (payload, ctx) => {
      try {
        payload.value = BigInt(payload.value);
      } catch {}
      return _super(payload, ctx);
    };
  }
);

interface $ZodBigIntParams extends util.TypeParams<$ZodCoercedBigInt, "coerce"> {}
const _bigint = util.factory(() => $ZodCoercedBigInt, {
  type: "bigint",
  coerce: true,
});
export function bigint(checks?: base.$ZodCheck<bigint>[]): $ZodCoercedBigInt;
export function bigint(params?: string | $ZodBigIntParams, checks?: base.$ZodCheck<bigint>[]): $ZodCoercedBigInt;
export function bigint(...args: any[]): $ZodCoercedBigInt {
  return _bigint(...args);
}

//////////    $ZodCoercedDate    //////////
export interface $ZodCoercedDateDef extends schemas.$ZodDateDef {}
export interface $ZodCoercedDate extends schemas.$ZodDate<unknown>, base.$ZodType<Date, unknown> {
  _def: $ZodCoercedDateDef;
  _isst: errors.$ZodIssueInvalidType<"date">;
}

export const $ZodCoercedDate: base.$constructor<$ZodCoercedDate> = /*@__PURE__*/ base.$constructor(
  "$ZodCoercedDate",
  (inst, def) => {
    schemas.$ZodDate.init(inst, def); // no format checks
    base.$ZodType.init(inst, def);

    const _super = inst._parse;
    inst._parse = (payload, ctx) => {
      try {
        payload.value = new Date(payload.value);
      } catch {}
      return _super(payload, ctx);
    };
  }
);

interface $ZodDateParams extends util.TypeParams<$ZodCoercedDate, "coerce"> {}
const _date = util.factory(() => $ZodCoercedDate, {
  type: "date",
  coerce: true,
});
export function date(checks?: base.$ZodCheck<Date>[]): $ZodCoercedDate;
export function date(params?: string | $ZodDateParams, checks?: base.$ZodCheck<Date>[]): $ZodCoercedDate;
export function date(...args: any[]): $ZodCoercedDate {
  return _date(...args);
}
