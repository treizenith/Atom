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
export default function del(target: object | any[], path: string | any[]): any;
//# sourceMappingURL=delete.d.ts.map