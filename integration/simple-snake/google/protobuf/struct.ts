/* eslint-disable */
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';

export const protobufPackage = 'google.protobuf';

/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 *  The JSON representation for `NullValue` is JSON `null`.
 */
export enum NullValue {
  /** NULL_VALUE - Null value. */
  NULL_VALUE = 0,
  UNRECOGNIZED = -1,
}

export function nullValueFromJSON(object: any): NullValue {
  switch (object) {
    case 0:
    case 'NULL_VALUE':
      return NullValue.NULL_VALUE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return NullValue.UNRECOGNIZED;
  }
}

export function nullValueToJSON(object: NullValue): string {
  switch (object) {
    case NullValue.NULL_VALUE:
      return 'NULL_VALUE';
    case NullValue.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

/**
 * `Struct` represents a structured data value, consisting of fields
 * which map to dynamically typed values. In some languages, `Struct`
 * might be supported by a native representation. For example, in
 * scripting languages like JS a struct is represented as an
 * object. The details of that representation are described together
 * with the proto support for the language.
 *
 * The JSON representation for `Struct` is JSON object.
 */
export interface Struct {
  /** Unordered map of dynamically typed values. */
  fields: { [key: string]: any | undefined };
}

export interface Struct_FieldsEntry {
  key: string;
  value: any | undefined;
}

/**
 * `Value` represents a dynamically typed value which can be either
 * null, a number, a string, a boolean, a recursive struct value, or a
 * list of values. A producer of value is expected to set one of these
 * variants. Absence of any variant indicates an error.
 *
 * The JSON representation for `Value` is JSON value.
 */
export interface Value {
  /** Represents a null value. */
  null_value: NullValue | undefined;
  /** Represents a double value. */
  number_value: number | undefined;
  /** Represents a string value. */
  string_value: string | undefined;
  /** Represents a boolean value. */
  bool_value: boolean | undefined;
  /** Represents a structured value. */
  struct_value: { [key: string]: any } | undefined;
  /** Represents a repeated `Value`. */
  list_value: Array<any> | undefined;
}

/**
 * `ListValue` is a wrapper around a repeated field of values.
 *
 * The JSON representation for `ListValue` is JSON array.
 */
export interface ListValue {
  /** Repeated field of dynamically typed values. */
  values: any[];
}

function createBaseStruct(): Struct {
  return { fields: {} };
}

export const Struct = {
  encode(message: Struct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.fields).forEach(([key, value]) => {
      if (value !== undefined) {
        Struct_FieldsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
      }
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Struct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStruct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = Struct_FieldsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.fields[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Struct {
    return {
      fields: isObject(object.fields)
        ? Object.entries(object.fields).reduce<{ [key: string]: any | undefined }>((acc, [key, value]) => {
            acc[key] = value as any | undefined;
            return acc;
          }, {})
        : {},
    };
  },

  toJSON(message: Struct): unknown {
    const obj: any = {};
    obj.fields = {};
    if (message.fields) {
      Object.entries(message.fields).forEach(([k, v]) => {
        obj.fields[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Struct>, I>>(object: I): Struct {
    const message = createBaseStruct();
    message.fields = Object.entries(object.fields ?? {}).reduce<{ [key: string]: any | undefined }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value;
        }
        return acc;
      },
      {}
    );
    return message;
  },

  wrap(object: { [key: string]: any } | undefined): Struct {
    const struct = createBaseStruct();
    if (object !== undefined) {
      Object.keys(object).forEach((key) => {
        struct.fields[key] = object[key];
      });
    }
    return struct;
  },

  unwrap(message: Struct): { [key: string]: any } {
    const object: { [key: string]: any } = {};
    Object.keys(message.fields).forEach((key) => {
      object[key] = message.fields[key];
    });
    return object;
  },
};

function createBaseStruct_FieldsEntry(): Struct_FieldsEntry {
  return { key: '', value: undefined };
}

export const Struct_FieldsEntry = {
  encode(message: Struct_FieldsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(Value.wrap(message.value), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Struct_FieldsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStruct_FieldsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Struct_FieldsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object?.value) ? object.value : undefined,
    };
  },

  toJSON(message: Struct_FieldsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Struct_FieldsEntry>, I>>(object: I): Struct_FieldsEntry {
    const message = createBaseStruct_FieldsEntry();
    message.key = object.key ?? '';
    message.value = object.value ?? undefined;
    return message;
  },
};

function createBaseValue(): Value {
  return {
    null_value: undefined,
    number_value: undefined,
    string_value: undefined,
    bool_value: undefined,
    struct_value: undefined,
    list_value: undefined,
  };
}

export const Value = {
  encode(message: Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.null_value !== undefined) {
      writer.uint32(8).int32(message.null_value);
    }
    if (message.number_value !== undefined) {
      writer.uint32(17).double(message.number_value);
    }
    if (message.string_value !== undefined) {
      writer.uint32(26).string(message.string_value);
    }
    if (message.bool_value !== undefined) {
      writer.uint32(32).bool(message.bool_value);
    }
    if (message.struct_value !== undefined) {
      Struct.encode(Struct.wrap(message.struct_value), writer.uint32(42).fork()).ldelim();
    }
    if (message.list_value !== undefined) {
      ListValue.encode(ListValue.wrap(message.list_value), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Value {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.null_value = reader.int32() as any;
          break;
        case 2:
          message.number_value = reader.double();
          break;
        case 3:
          message.string_value = reader.string();
          break;
        case 4:
          message.bool_value = reader.bool();
          break;
        case 5:
          message.struct_value = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 6:
          message.list_value = ListValue.unwrap(ListValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Value {
    return {
      null_value: isSet(object.null_value) ? nullValueFromJSON(object.null_value) : undefined,
      number_value: isSet(object.number_value) ? Number(object.number_value) : undefined,
      string_value: isSet(object.string_value) ? String(object.string_value) : undefined,
      bool_value: isSet(object.bool_value) ? Boolean(object.bool_value) : undefined,
      struct_value: isObject(object.struct_value) ? object.struct_value : undefined,
      list_value: Array.isArray(object.list_value) ? [...object.list_value] : undefined,
    };
  },

  toJSON(message: Value): unknown {
    const obj: any = {};
    message.null_value !== undefined &&
      (obj.null_value = message.null_value !== undefined ? nullValueToJSON(message.null_value) : undefined);
    message.number_value !== undefined && (obj.number_value = message.number_value);
    message.string_value !== undefined && (obj.string_value = message.string_value);
    message.bool_value !== undefined && (obj.bool_value = message.bool_value);
    message.struct_value !== undefined && (obj.struct_value = message.struct_value);
    message.list_value !== undefined && (obj.list_value = message.list_value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Value>, I>>(object: I): Value {
    const message = createBaseValue();
    message.null_value = object.null_value ?? undefined;
    message.number_value = object.number_value ?? undefined;
    message.string_value = object.string_value ?? undefined;
    message.bool_value = object.bool_value ?? undefined;
    message.struct_value = object.struct_value ?? undefined;
    message.list_value = object.list_value ?? undefined;
    return message;
  },

  wrap(value: any): Value {
    const result = createBaseValue();

    if (value === null) {
      result.null_value = NullValue.NULL_VALUE;
    } else if (typeof value === 'boolean') {
      result.bool_value = value;
    } else if (typeof value === 'number') {
      result.number_value = value;
    } else if (typeof value === 'string') {
      result.string_value = value;
    } else if (Array.isArray(value)) {
      result.list_value = value;
    } else if (typeof value === 'object') {
      result.struct_value = value;
    } else if (typeof value !== 'undefined') {
      throw new Error('Unsupported any value type: ' + typeof value);
    }

    return result;
  },

  unwrap(message: Value): string | number | boolean | Object | null | Array<any> | undefined {
    if (message?.string_value !== undefined) {
      return message.string_value;
    } else if (message?.number_value !== undefined) {
      return message.number_value;
    } else if (message?.bool_value !== undefined) {
      return message.bool_value;
    } else if (message?.struct_value !== undefined) {
      return message.struct_value;
    } else if (message?.list_value !== undefined) {
      return message.list_value;
    } else if (message?.null_value !== undefined) {
      return null;
    }
    return undefined;
  },
};

function createBaseListValue(): ListValue {
  return { values: [] };
}

export const ListValue = {
  encode(message: ListValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      Value.encode(Value.wrap(v!), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(Value.unwrap(Value.decode(reader, reader.uint32())));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListValue {
    return {
      values: Array.isArray(object?.values) ? [...object.values] : [],
    };
  },

  toJSON(message: ListValue): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) => e);
    } else {
      obj.values = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListValue>, I>>(object: I): ListValue {
    const message = createBaseListValue();
    message.values = object.values?.map((e) => e) || [];
    return message;
  },

  wrap(value: Array<any> | undefined): ListValue {
    const result = createBaseListValue();

    result.values = value ?? [];

    return result;
  },

  unwrap(message: ListValue): Array<any> {
    return message.values;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === 'object' && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
