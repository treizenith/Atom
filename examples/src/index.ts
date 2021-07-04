// import Atom from "../../core/atom";
// import Li from "../../libs/lithium";
// import express from "express";
// import cors from "cors";
// import http from "http";

// import $user from "./services/user";

// let elem = new Atom().plug(Li({

// }));

// const app = express();

// app.use(cors({
//   allowedHeaders: "*",
// }));

// const server = http.createServer(app);
// elem.$li.registerApp(app);
// elem.$li.runServer(server);

// elem.$li.registerService($user);

// server.listen(3000, () => {
//   console.log('listening on *:3000');
// });

// export default elem;

// // let newPlugin = () => ({
// //   $: {
// //     foo: "sa"
// //   }
// // });

// // let newPlugin2 = () => ({
// //   $: {
// //     foo2: "sa"
// //   },
// // });

// let atom;

// // atom = new Atom().plug(newPlugin);
// // atom = atom.plug(newPlugin2);

// atom = new Atom();

// function Rename<T, U extends any[], >(name: String, body: Z, self?: T, ...args: U): Z {
//   let binded = (function (this: T, body: Z, ...args: U) {
//     console.log(this, body, args);
//   }).bind(self as T, body);
//   console.log(binded, binded)
//   return new Function(
//     `return function ${name} (...args) { (${binded.toString()})(...args) }`
//   )();
// }

import Atom from "../../core/atom";

// let newF = Atom._.u.rn((greeting: string,) => { console.log(greeting) }, "bruh");

// console.log(newF)
// newF("Ahmet")


let { state, computed } = Atom.reactor;

let name = state("Ahmet");
let surname = state("Eker");

let computedData = computed(() => {
  return `new: ${name()}\nold: ${surname()}\n`
});

name("Ahmets");
name("Ahmetsss");
console.log(computedData(), name(), surname());


// user.subscribe(cb(diff.map, (diff) => {
//   console.log(diff);
// }))

// // user.subscribe((value, old) => {
// //   console.log("cb", value, old);
// // });

// user.set("bruh", "sanane");
// user.set("bruh", "wtf?")
// user.del("items.sword");
// user.del("name");


// // import Quark from "../../core/quark";

// // let user = "undefined";

// // if (Quark.is.like(user) && !Quark.is.str(user)) {
// //   user
// //   console.log("here");
// // } else {
// //   console.log("js")
// // }