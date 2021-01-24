import $obj from '../is/object';
import $arr from '../is/array';
import $str from '../is/string';

/**
 * looks for path is it exist inside target.
 *
 * @asMemberOf quark
 * @since 1.0.0
 * @category obj
 * @param {object|any[]} target The target.
 * @param {string|any[]} path The path of nested key.
 * @returns {boolean} Returns `true` if path exist, else `false`.
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
 * _.obj.has(obj, "user.name");
 * // => true
 *
 * _.obj.has(obj, "items.0");
 * // => true
 *
 * _.obj.has(obj, "user.age");
 * // => false
 * ```
 */

export default function has(
	target: object | any[],
	path: string | any[],
): boolean {
	if (!$obj(target) && !$arr(target)) return target;

	if ($str(path)) {
		path = path.toString().match(/[^.[\]]+/g) || [];
	}

	return path.reduce(
		(xs: any, x: any, i: any, arr: any[]) =>
			xs && xs[x]
				? i == arr.length - 1 && Reflect.has(xs, x)
					? true
					: xs[x]
				: (arr.splice(1), false),
		target,
	);
}
