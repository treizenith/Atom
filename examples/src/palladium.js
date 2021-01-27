"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const atom_1 = __importDefault(require("../../core/atom/"));
const palladium_1 = __importDefault(require("../../libs/palladium/"));
const rhodium_1 = __importDefault(require("../../libs/rhodium/"));
let elem = new atom_1.default().plug(rhodium_1.default).plug(palladium_1.default);
console.log(elem);
//# sourceMappingURL=palladium.js.map