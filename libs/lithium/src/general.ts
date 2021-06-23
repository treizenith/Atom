import type * as $ServerIO from "socket.io";
import type * as $ClientIO from "socket.io-client";

export interface Config {

}

export type ClientIO = typeof $ClientIO;
export type ServerIO = typeof $ServerIO;
export interface IOTYPE {
  client: ClientIO,
  server: ServerIO,
}