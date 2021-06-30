/// <reference types="node" />
import type Atom from '@treizenith/atom';
import type { Server as HTTP } from "http";
import type { ky } from 'ky/distribution/types/ky';
import type { Config, Server, IOBack, IOFront, Client, Res } from './general';
export default class Li<T> {
    ky: ky;
    io: IOFront | IOBack;
    atom: typeof Atom;
    instance: Atom;
    $config?: Config | undefined;
    props: {
        url: string;
    };
    socket?: Server | Client;
    user: import("@treizenith/atom").ObservableMega<T>;
    constructor(ky: ky, io: IOFront | IOBack, atom: typeof Atom, instance: Atom, $config?: Config | undefined);
    login(): Promise<void>;
    init(): Promise<Response>;
    runServer(server: HTTP): Res;
}
export * from "./general";
//# sourceMappingURL=li.d.ts.map