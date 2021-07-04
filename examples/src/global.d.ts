import type $Atom from "@treizenith/atom";
import type $Li from "@treizenith/lithium/src/li";
import type { ServiceRes as $ServiceRes, Service as $Service } from "@treizenith/lithium/types/general";

declare global {
  type Atom = $Atom;
  type Li = $Li;
  type ServiceRes = $ServiceRes;
  type Service = $Service;
}