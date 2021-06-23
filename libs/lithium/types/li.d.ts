/// <reference types="node" />
import type Atom from '@treizenith/atom';
import type { Server as HTTP } from "http";
import type { Server } from "socket.io";
import type { io as IO } from "socket.io-client";
import type { ky } from 'ky/distribution/types/ky';
import type { Config } from './general';
export default class Li {
    ky: ky;
    io: typeof IO & typeof Server;
    atom: typeof Atom;
    instance: Atom;
    $config?: Config | undefined;
    props: {
        url: string;
    };
    constructor(ky: ky, io: typeof IO & typeof Server, atom: typeof Atom, instance: Atom, $config?: Config | undefined);
    login(): Promise<void>;
    init(): Promise<Response>;
    runServer(server: HTTP): Server;
}
//# sourceMappingURL=li.d.ts.map