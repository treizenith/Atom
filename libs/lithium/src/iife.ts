// @ts-nocheck
import ky from 'ky';

import type Atom from '@treizenith/atom';
import type { Config } from './general';
import Li from "./li";
import io from "socket.io-client";

export default function LithiumWrapper(config: Config) {
  return function Lithium(instance: Atom, atom: typeof Atom) {
    return {
      $li: new Li(ky, io, atom, instance, config),
    }
  }
}
