"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const atom_1 = __importDefault(require("../../core/atom"));
const lithium_1 = __importDefault(require("../../libs/lithium"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const user_1 = __importDefault(require("./services/user"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    let elem = new atom_1.default().plug(lithium_1.default({}));
    yield elem.$li.init();
    const app = express_1.default();
    app.use(cors_1.default({
        allowedHeaders: "*",
    }));
    const server = http_1.default.createServer(app);
    elem.$li.registerApp(app);
    elem.$li.runServer(server);
    elem.$li.registerService(user_1.default);
    server.listen(3000, () => {
        console.log('listening on *:3000');
    });
}))();
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
// import Atom from "../../core/atom"; 
// // let newF = Atom._.u.rn((greeting: string,) => { console.log(greeting) }, "bruh");
// // console.log(newF)
// // newF("Ahmet")
// let { state, computed } = Atom.reactor;
// let name = state("Ahmet");
// let surname = state("Eker");
// function g() {
//   console.log("here")
// }
// let computedData = computed(() => {
//   console.log("oto", name(), surname());
// }).subscribe(g);
// name("Ahmets");
// name("Ahmetsss");
// console.log(Atom._.u.diff.map(["sa"], ["sa"]));
// drop(computedData);
// console.log(Atom._.u.diff.map({
//   name: "Ahmet",
//   surname: "EKER",
//   items: {
//     excalibur: "1lv",
//     chastiefol: "2lsv"
//   },
//   friends: ["Alice", "Melek"]
// }, {
//   name: "Ahmet",
//   surname: "EKER",
//   items: {
//     excalibur: "1lv",
//     chastiefol: "2lv"
//   },
//   friends: ["Alice", "Melek"]
// }))
// console.log(computedData(), name(), surname());
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