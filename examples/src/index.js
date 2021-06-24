"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
require("path");
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const atom_1 = __importDefault(require("../../core/atom"));
const lithium_1 = __importDefault(require("../../libs/lithium"));
const app = express.default();
app.use(cors_1.default());
app.set("port", process.env.PORT || 3000);
let http = new http_1.default.Server(app);
// set up socket.io and bind it to our
// http server.
let elem = new atom_1.default().plug(lithium_1.default({})).plug((el) => {
    return {
        io: el.$li.runServer(http),
    };
});
console.log(elem.io);
// let io = new socketio.Server(http);
// whenever a user connects on port 3000 via
let i = 0;
// a websocket, log that a user has connected
elem.io.on("connection", function (socket) {
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
//# sourceMappingURL=index.js.map