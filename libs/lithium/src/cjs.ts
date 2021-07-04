import fetch, { Headers, Request, Response, RequestInit, RequestInfo } from 'node-fetch';
import type { Headers as $Headers, Request as $Request, Response as $Response, RequestInit as $RequestInit, RequestInfo as $RequestInfo } from 'node-fetch';
import AbortController from 'abort-controller';
import type $AbortController from "abort-controller";
import ky from 'ky';
import io from "socket.io";

const TEN_MEGABYTES = 1000 * 1000 * 10;

if (!globalThis.fetch) {
  globalThis.fetch = (url: RequestInfo, options: RequestInit) => fetch(url, { highWaterMark: TEN_MEGABYTES, ...options } as RequestInit);
}

if (!globalThis.Headers) {
  globalThis.Headers = Headers;
}

if (!globalThis.Request) {
  globalThis.Request = Request;
}

if (!globalThis.Response) {
  globalThis.Response = Response;
}

if (!globalThis.AbortController) {
  globalThis.AbortController = AbortController;
}

if (!globalThis.ReadableStream) {
  try {
    globalThis.ReadableStream = require('web-streams-polyfill/ponyfill/es2018');
  } catch { }
}

import type Atom from '@treizenith/atom';
import type { Config } from './general';
import Li from "./li";

export default function LithiumWrapper(config: Config) {
  return function Lithium(instance: Atom, atom: typeof Atom) {
    return {
      $li: new Li(ky, io, atom, instance, config),
    }
  }
}

export declare module globalThis {
  export function fetch(url: $RequestInfo, options: $RequestInit): Promise<$Response>;
  export var Headers: typeof $Headers;
  export var Request: typeof $Request;
  export var Response: typeof $Response;
  export var AbortController: typeof $AbortController;
  export var ReadableStream: ReadableStream;
}
export * from "./general";