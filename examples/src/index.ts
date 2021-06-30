// import Atom from "../../core/atom";
// import Li from "../../libs/lithium";
// import express from "express";
// import cors from "cors";
// import http from "http";

// let elem = new Atom().plug(Li({}));

// const app = express();
// app.use(cors({
//   allowedHeaders: "*",
// }))
// const server = http.createServer(app);
// const io = elem.$li.runServer(server);

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

// server.listen(3000, () => {
//   console.log('listening on *:3000');
// });

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

function Rename<Z extends Function>(fn: Z, name: string): Z {
  return Function("fn", "return (function " + name + "(){\n  return fn.apply(this, arguments)\n});")(fn);
}

let newF = Rename((greeting: string,) => { console.log(greeting) }, "bruh");

console.log(newF)
newF("Ahmet")

import Atom from "../../core/atom";

let { state, computed } = Atom.reactor;

let name = state("Ahmet");
let surname = state("Eker");

name.subscribe(function here(val, old) {
  console.log(`new: ${val}\nold: ${old}`);
});

surname.subscribe((val, old) => {
  console.log(`new: ${val}\nold: ${old}`);
});

let fullName = computed(() => {
  return `${name()} ${surname()}`;
});

let greeting = computed(() => {
  return `Merhaba${name()}`;
});

name("Ahmets");
name("Ahmetsss");
surname("Kaplan");


console.log(fullName(), greeting(), name.subscribers, surname.subscribers);


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