// @ts-nocheck

import fetch, { Headers, Request, Response } from 'node-fetch';
import AbortController from 'abort-controller';
import ky from 'ky';
import io from "socket.io";

const TEN_MEGABYTES = 1000 * 1000 * 10;

if (!globalThis.fetch) {
  globalThis.fetch = (url, options) => fetch(url, { highWaterMark: TEN_MEGABYTES, ...options });
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
      $li: new Li(ky, io.Server, atom, instance, config),
    }
  }
}
