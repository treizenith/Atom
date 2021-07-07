import type Atom from '@treizenith/atom';
import type { Server as HTTP, RequestListener } from "http";
import type { ky } from 'ky/distribution/types/ky';
import type { Config, OPT, Server, IOBack, IOFront, Client, OPTBack, Service } from './general';

export default class Li {
  props: {
    url: string
  } = {
      url: "",
    }

  serviceList = this.atom.reactor.space<Record<string, ReturnType<Service>>>({});

  primary?: Server;
  app?: RequestListener;

  constructor(public ky: ky, public io: IOFront | IOBack, public atom: typeof Atom, public instance: Atom, public $config?: Config, public isClient: boolean = true) { }

  async login() {
  }

  async init() {
    this.serviceList.subscribe(this.atom._.u.cb((a, b) => {
      return this.atom._.u.diff.nDeep(a, b, true);
    }, (...args: any[]) => {
      console.log(...args)
    }))
  }

  runServer(server: HTTP, options?: OPTBack): Server {
    this.primary = new (this.io as IOBack).Server(server, this.atom._.u.merge({
      cors: {
        origin: '*',
      }
    }, options || {}) as unknown as OPTBack);

    return this.primary;
  }

  client(url: string, options?: OPT): Client {
    return (this.io as IOFront)(url, options);
  }

  registerApp(app: RequestListener) {
    this.app = app;
  }

  registerService(service: Service, opt?: any) {
    let s = service.apply(this, [this.atom, this.instance, service]);

    if (s.hooks && this.atom._.is.func(s.hooks.start)) {
      s.hooks.start(this, opt);
    }

    this.serviceList.set(s.name, s);
  }
}