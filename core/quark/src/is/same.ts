import pure from '../utils/pure';
import {map} from '../utils/diff';
import empty from "./object_empty";

let basics = ["[object String]","[object Number]","[object Null]","[object Undefined]", "[object Boolean]"];
let loops = ["[object Object]", "[object Array]"];

export default function Same(value?: unknown, value2?: unknown): Boolean {
    let type = pure(value);
    let type2 = pure(value2);

    if (type !== type2) {
        return false;
    } else {
        if(basics.includes(type)) {
            return value === value2;
        }else if (loops.includes(type)) {
            return empty(map(value, value2));
        }else {
            return true;
        }
    }
}
