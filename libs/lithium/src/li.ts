import type Atom from '@treizenith/atom';
import type { Server as HTTP, RequestListener } from "http";
import type { ky } from 'ky/distribution/types/ky';
import type { Config, OPT, Server, IOBack, IOFront, Client, OPTBack, Service, ServiceRes } from './general';

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
    let self = this;
    this.serviceList.subscribe(this.atom._.u.cb((a, b) => {
      return this.atom._.u.diff.same(a, b);
    }, (diff, servRoot) => {
      for (let [serv, servRes] of Object.entries(diff)) {
        if (servRes.$type == "created") {
          let specServ = servRoot[serv];

          this.serviceStart(specServ).then((res) => {
            if (specServ.hooks && this.atom._.is.func(specServ.hooks.afterStart)) {
              specServ.hooks.afterStart(self, res);
            }
          }).catch((err) => {
            console.log("failed to start service", err);
          });
        }
        if (servRes.$type == "deleted") {
          let specServ = servRoot[serv];

          this.serviceStop(specServ).then((res) => {
            if (specServ.hooks && this.atom._.is.func(specServ.hooks.afterStop)) {
              specServ.hooks.afterStop(self, res);
            }
          }).catch((err) => {
            console.log("failed to start service", err);
          });

        }
      }
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

  async registerService(service: Service, opt?: any) {
    let s = service.apply(this, [this.atom, this.instance, service]);

    if (s.hooks && this.atom._.is.func(s.hooks.start)) {
      await s.hooks.start(this, opt);
    }

    this.serviceList.set(s.name, s);
  }

  async deleteService(serviceName: string, opt?: any) {
    let s = (this.serviceList.get(serviceName) as ServiceRes);

    if (s) {
      if (s.hooks && this.atom._.is.func(s.hooks.stop)) {
        await s.hooks.stop(this, opt);
      }
      this.serviceList.del(serviceName);
    } else {
      console.log("err on shut");
    }
  }

  async serviceStart(sr: ServiceRes) {
    console.log("start", sr);
  }

  async serviceStop(sr: ServiceRes) {
    console.log("stop", sr);
  }
}