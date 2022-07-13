/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "blog.blog";

export interface MsgCreatePost {
  creator: string;
  title: string;
  body: string;
  id: number;
}

export interface MsgCreatePostResponse {
  id: number;
}

export interface MsgCreateComment {
  creator: string;
  postID: number;
  title: string;
  body: string;
  id: number;
}

export interface MsgCreateCommentResponse {
  id: number;
}

export interface MsgDeleteComment {
  creator: string;
  commentID: number;
  postID: number;
  id: number;
}

export interface MsgDeleteCommentResponse {
  id: number;
}

const baseMsgCreatePost: object = { creator: "", title: "", body: "", id: 0 };

export const MsgCreatePost = {
  encode(message: MsgCreatePost, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(26).string(message.body);
    }
    if (message.id !== 0) {
      writer.uint32(32).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePost {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePost } as MsgCreatePost;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.body = reader.string();
          break;
        case 4:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePost {
    const message = { ...baseMsgCreatePost } as MsgCreatePost;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body);
    } else {
      message.body = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreatePost): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.body !== undefined && (obj.body = message.body);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePost>): MsgCreatePost {
    const message = { ...baseMsgCreatePost } as MsgCreatePost;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    } else {
      message.body = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgCreatePostResponse: object = { id: 0 };

export const MsgCreatePostResponse = {
  encode(
    message: MsgCreatePostResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePostResponse } as MsgCreatePostResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePostResponse {
    const message = { ...baseMsgCreatePostResponse } as MsgCreatePostResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreatePostResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePostResponse>
  ): MsgCreatePostResponse {
    const message = { ...baseMsgCreatePostResponse } as MsgCreatePostResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgCreateComment: object = {
  creator: "",
  postID: 0,
  title: "",
  body: "",
  id: 0,
};

export const MsgCreateComment = {
  encode(message: MsgCreateComment, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.postID !== 0) {
      writer.uint32(16).uint64(message.postID);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(34).string(message.body);
    }
    if (message.id !== 0) {
      writer.uint32(40).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateComment {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateComment } as MsgCreateComment;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.postID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.body = reader.string();
          break;
        case 5:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateComment {
    const message = { ...baseMsgCreateComment } as MsgCreateComment;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.postID !== undefined && object.postID !== null) {
      message.postID = Number(object.postID);
    } else {
      message.postID = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body);
    } else {
      message.body = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateComment): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.postID !== undefined && (obj.postID = message.postID);
    message.title !== undefined && (obj.title = message.title);
    message.body !== undefined && (obj.body = message.body);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateComment>): MsgCreateComment {
    const message = { ...baseMsgCreateComment } as MsgCreateComment;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.postID !== undefined && object.postID !== null) {
      message.postID = object.postID;
    } else {
      message.postID = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    } else {
      message.body = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgCreateCommentResponse: object = { id: 0 };

export const MsgCreateCommentResponse = {
  encode(
    message: MsgCreateCommentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateCommentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCommentResponse,
    } as MsgCreateCommentResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCommentResponse {
    const message = {
      ...baseMsgCreateCommentResponse,
    } as MsgCreateCommentResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateCommentResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateCommentResponse>
  ): MsgCreateCommentResponse {
    const message = {
      ...baseMsgCreateCommentResponse,
    } as MsgCreateCommentResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteComment: object = {
  creator: "",
  commentID: 0,
  postID: 0,
  id: 0,
};

export const MsgDeleteComment = {
  encode(message: MsgDeleteComment, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.commentID !== 0) {
      writer.uint32(16).uint64(message.commentID);
    }
    if (message.postID !== 0) {
      writer.uint32(24).uint64(message.postID);
    }
    if (message.id !== 0) {
      writer.uint32(32).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteComment {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteComment } as MsgDeleteComment;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.commentID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.postID = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteComment {
    const message = { ...baseMsgDeleteComment } as MsgDeleteComment;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.commentID !== undefined && object.commentID !== null) {
      message.commentID = Number(object.commentID);
    } else {
      message.commentID = 0;
    }
    if (object.postID !== undefined && object.postID !== null) {
      message.postID = Number(object.postID);
    } else {
      message.postID = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteComment): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.commentID !== undefined && (obj.commentID = message.commentID);
    message.postID !== undefined && (obj.postID = message.postID);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteComment>): MsgDeleteComment {
    const message = { ...baseMsgDeleteComment } as MsgDeleteComment;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.commentID !== undefined && object.commentID !== null) {
      message.commentID = object.commentID;
    } else {
      message.commentID = 0;
    }
    if (object.postID !== undefined && object.postID !== null) {
      message.postID = object.postID;
    } else {
      message.postID = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteCommentResponse: object = { id: 0 };

export const MsgDeleteCommentResponse = {
  encode(
    message: MsgDeleteCommentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteCommentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCommentResponse,
    } as MsgDeleteCommentResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteCommentResponse {
    const message = {
      ...baseMsgDeleteCommentResponse,
    } as MsgDeleteCommentResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteCommentResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteCommentResponse>
  ): MsgDeleteCommentResponse {
    const message = {
      ...baseMsgDeleteCommentResponse,
    } as MsgDeleteCommentResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
  CreateComment(request: MsgCreateComment): Promise<MsgCreateCommentResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteComment(request: MsgDeleteComment): Promise<MsgDeleteCommentResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse> {
    const data = MsgCreatePost.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Msg", "CreatePost", data);
    return promise.then((data) =>
      MsgCreatePostResponse.decode(new Reader(data))
    );
  }

  CreateComment(request: MsgCreateComment): Promise<MsgCreateCommentResponse> {
    const data = MsgCreateComment.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Msg", "CreateComment", data);
    return promise.then((data) =>
      MsgCreateCommentResponse.decode(new Reader(data))
    );
  }

  DeleteComment(request: MsgDeleteComment): Promise<MsgDeleteCommentResponse> {
    const data = MsgDeleteComment.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Msg", "DeleteComment", data);
    return promise.then((data) =>
      MsgDeleteCommentResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
