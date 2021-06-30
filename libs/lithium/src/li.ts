import type Atom from '@treizenith/atom';
import type { Server as HTTP } from "http";
import type { ky } from 'ky/distribution/types/ky';
import type { Config, Server, IOBack, IOFront, Client, Res } from './general';

export default class Li<T> {
  props: {
    url: string
  } = {
      url: "",
    }

  socket?: Server | Client

  user = this.atom.reactor.space<T>({} as T);

  constructor(public ky: ky, public io: IOFront | IOBack, public atom: typeof Atom, public instance: Atom, public $config?: Config) { }

  async login() {
  }

  async init() {
    return await this.ky.get("https://jsonplaceholder.typicode.com/todos/1");
  }

  runServer(server: HTTP): Res {
    try {
      this.socket = new (this.io as IOBack).Server(server, {
        cors: {
          origin: '*',
        }
      });

      return [null, true];
    } catch (err) {
      return [err, false];
    }
  }
}

export * from "./general";