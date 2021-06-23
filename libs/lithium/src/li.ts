import type Atom from '@treizenith/atom';
import type { Server as HTTP } from "http";
import type { Server } from "socket.io";
import type { io as IO } from "socket.io-client";
import type { ky } from 'ky/distribution/types/ky';
import type { Config } from './general';

export default class Li {
  props: {
    url: string
  } = {
      url: "",
    }

  constructor(public ky: ky, public io: typeof IO & typeof Server, public atom: typeof Atom, public instance: Atom, public $config?: Config) { }

  async login() {
  }

  async init() {
    return await this.ky.get("https://jsonplaceholder.typicode.com/todos/1");
  }

  runServer(server: HTTP): Server {
    let io = this.io as typeof Server;
    return new io(server, {
      cors: {
        origin: '*',
      }
    });
  }
}