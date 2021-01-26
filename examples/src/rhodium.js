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
const atom_1 = __importDefault(require("../../core/atom/"));
const rhodium_1 = __importDefault(require("../../libs/rhodium/"));
let elem = new atom_1.default().plug(rhodium_1.default);
(() => __awaiter(void 0, void 0, void 0, function* () {
    let cardinal = new elem.rh.gem();
    yield cardinal.run();
    let service = new elem.rh.gem();
    yield service.run();
    cardinal.follow('data', (_f, data) => {
        console.log('in', data);
        return 'hüğ';
    });
    let res = yield service.send('data', 'bruh');
    console.log(res);
}))();
console.log(elem);
//# sourceMappingURL=rhodium.js.map