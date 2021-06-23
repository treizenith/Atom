import type * as $ServerIO from "socket.io";
import type * as $ClientIO from "socket.io-client";
export interface Config {
}
export declare type ClientIO = typeof $ClientIO;
export declare type ServerIO = typeof $ServerIO;
export interface IOTYPE {
    client: ClientIO;
    server: ServerIO;
}
//# sourceMappingURL=general.d.ts.map