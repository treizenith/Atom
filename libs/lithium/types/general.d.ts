import type ServerIO from "socket.io";
import type ClientIO from "socket.io-client";
import type { ReturnTypeOf } from "../../../core/quark/types";
import type { Server as $Server } from "socket.io";
export interface Config {
}
export declare type IOFront = typeof ClientIO;
export declare type IOBack = typeof ServerIO;
export declare type Server = $Server;
export declare type Client = ReturnTypeOf<IOFront>;
export declare type Res = [null | Error, any];
//# sourceMappingURL=general.d.ts.map