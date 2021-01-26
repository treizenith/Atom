"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const atom_1 = __importDefault(require("../../core/atom/"));
let { xss } = new atom_1.default();
let sub = new xss.Observable({});
let unsub = sub.subscribe((val) => {
    console.log(val);
});
sub.next('E?');
sub.next('X?');
sub.next('ALICE');
unsub();
//# sourceMappingURL=atom.js.map