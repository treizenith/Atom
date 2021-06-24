import * as express from "express";
import * as path from "path";
import $http from "http";
import cors from "cors";
import Atom from "../../core/atom";
import Li from "../../libs/lithium";
import type { Socket } from "socket.io";


const app = express.default();
app.use(cors());
app.set("port", process.env.PORT || 3000);

let http = new $http.Server(app);
// set up socket.io and bind it to our
// http server.
let elem = new Atom().plug(Li({})).plug((el) => {
  return {
    io: el.$li.runServer(http),
  }
});

console.log(elem.io);
// let io = new socketio.Server(http);

// whenever a user connects on port 3000 via

let i = 0;
// a websocket, log that a user has connected
elem.io.on("connection", function (socket: Socket) {
  console.log("a user connected");
  // whenever we receive a 'message' we log it out

  setInterval(() => {
    i++;
    socket.emit("message", i);
  }, 100);
});

const server = http.listen(3000, function () {
  console.log("listening on *:3000");
});

// import Atom from "../../core/atom";
// import Li from "../../libs/lithium";

// let elem = new Atom().plug(Li({}));

// elem.

// // let newPlugin = () => ({
// //   $: {
// //     foo: "sa"
// //   }
// // });

// // let newPlugin2 = () => ({
// //   $: {
// //     foo2: "sa"
// //   },

// //   yarrak: "anan"
// // });

// let atom;

// // atom = new Atom().plug(newPlugin);
// // atom = atom.plug(newPlugin2);

// atom = new Atom();

// let { space, computed } = Atom.reactor;
// let { cb, diff } = Atom._.u;

// let user = space({
//   name: "ahmet",
//   surname: "eker",
//   age: 17,
//   items: {
//     sword: "excalibur",
//     shield: "castifiol",
//   }
// });

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