import Atom from "../../../../core/atom/";
import Li from "../../../../libs/lithium/src/iife";

import $user from "./services/user";

let elem = new Atom().plug(Li({})).plug((el) => {
  return {
    parent: el.$li.client("http://localhost:3000"),
    $: {
      // user: el.$li.subscribeService($user),
    }
  }
});

export default elem;