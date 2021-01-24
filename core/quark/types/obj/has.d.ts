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
export default function has(target: object | any[], path: string | any[]): boolean;
//# sourceMappingURL=has.d.ts.map