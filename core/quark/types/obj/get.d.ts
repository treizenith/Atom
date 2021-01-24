/**
 * gets nested key from target
 *
 * @asMemberOf quark
 * @since 1.0.0
 * @category obj
 * @param {object|any[]} target The target.
 * @param {string|any[]} path The path of nested key.
 * @param {unknown} def The default value.
 * @returns {any} Returns `value` if path exist, else `undefined`.
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
 * _.obj.get(obj, "user.name");
 * // => "alice"
 *
 * _.obj.get(obj, "user.age", 19);
 * // => "sword"
 * ```
 */
export default function get(target: object | any[], path: string | any[], def?: unknown): any;
//# sourceMappingURL=get.d.ts.map