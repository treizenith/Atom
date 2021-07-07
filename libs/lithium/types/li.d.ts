/// <reference types="node" />
import type Atom from '@treizenith/atom';
import type { Server as HTTP, RequestListener } from "http";
import type { ky } from 'ky/distribution/types/ky';
import type { Config, OPT, Server, IOBack, IOFront, Client, OPTBack, Service } from './general';
export default class Li {
    ky: ky;
    io: IOFront | IOBack;
    atom: typeof Atom;
    instance: Atom;
    $config?: Config | undefined;
    isClient: boolean;
    props: {
        url: string;
    };
    serviceList: import("@treizenith/atom").ObservableMega<Record<string, import("./general").ServiceRes>>;
    primary?: Server;
    app?: RequestListener;
    constructor(ky: ky, io: IOFront | IOBack, atom: typeof Atom, instance: Atom, $config?: Config | undefined, isClient?: boolean);
    login(): Promise<void>;
    init(): Promise<void>;
    runServer(server: HTTP, options?: OPTBack): Server;
    client(url: string, options?: OPT): Client;
    registerApp(app: RequestListener): void;
    registerService(service: Service, opt?: any): void;
}
//# sourceMappingURL=li.d.ts.map