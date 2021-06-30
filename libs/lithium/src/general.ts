import type ServerIO from "socket.io";
import type ClientIO from "socket.io-client";
import type { ReturnTypeOf } from "../../../core/quark/types";
import type { Server as $Server } from "socket.io";

export interface Config {

}

export type IOFront = typeof ClientIO;
export type IOBack = typeof ServerIO;
export type Server = $Server;
export type Client = ReturnTypeOf<IOFront>;

export type Res = [null | Error, any]