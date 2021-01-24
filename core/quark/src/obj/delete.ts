import $obj from '../is/object';
import $arr from '../is/array';
import $str from '../is/string';

/**
 * delete the key from target.
 *
 * **Note:** mutates the target
 * @asMemberOf quark
 * @since 1.0.0
 * @category obj
 * @param {object|any[]} target The target.
 * @param {string|any[]} path The path of nested key.
 * @returns {any} Returns `deleted value` if path exist, else `undefined`.
 * @example
 * ```ts
 * let obj = {
 *  user: {
 *   name: "alice",
 *   surname: "zuberg"
 *  },
 *  items: ["sword", "armor"]
 * }
 *
 * _.obj.del(obj, "user.name");
 * // {
 * //  user: {
 * //   surname: "zuberg"
 * //  },
 * //  items: ["sword", "armor"]
 * // }
 *
 * _.obj.del(obj, "items.0");
 * // {
 * //  user: {
 * //   name: "alice",
 * //   surname: "zuberg"
 * //  },
 * //  items: [__emty__, "armor"]
 * // }
 * ```
 */

export default function del(target: object | any[], path: string | any[]): any {
	if (!$obj(target) && !$arr(target)) return target;

	if ($str(path)) {
		path = path.toString().match(/[^.[\]]+/g) || [];
	}

	return path.reduce(
		(xs: any, x: any, i: any, arr: any[]) =>
			xs && xs[x]
				? i == arr.length - 1 && Reflect.has(xs, x)
					? (() => {
							let data = xs[x];
							Reflect.deleteProperty(xs, x);
							return data;
					  })()
					: xs[x]
				: (arr.splice(1), false),
		target,
	);
}
