import type { Headers as $Headers, Request as $Request, Response as $Response, RequestInit as $RequestInit, RequestInfo as $RequestInfo } from 'node-fetch';
import type $AbortController from "abort-controller";
import type Atom from '@treizenith/atom';
import type { Config } from './general';
import Li from "./li";
export default function LithiumWrapper(config: Config): (instance: Atom, atom: typeof Atom) => {
    $li: Li;
};
export declare module globalThis {
    function fetch(url: $RequestInfo, options: $RequestInit): Promise<$Response>;
    var Headers: typeof $Headers;
    var Request: typeof $Request;
    var Response: typeof $Response;
    var AbortController: typeof $AbortController;
    var ReadableStream: ReadableStream;
}
export * from "./general";
//# sourceMappingURL=cjs.d.ts.map