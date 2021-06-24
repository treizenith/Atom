import Atom from "../../../core/atom";
import Li from "../../../libs/lithium/src/iife";


let elem = new Atom().plug(Li({})).plug((el) => {
  return {
    io: el.$li.io("http://localhost:3000"),
  }
});

export default elem;