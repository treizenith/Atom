/**
 * sets nested key and value to target
 *
 * if any key (i) of the nested path doesnt exist on the target:
 * quark will create object or an array as default with these rules
 * if the key after that comes with our lost key (i+1) is a number then default will be an array
 * else the default will be an object
 *
 *
 * **Note:** mutates the target
 * @asMemberOf quark
 * @since 1.0.0
 * @category obj
 * @param {object|any[]} target The target.
 * @param {string|any[]} path The path of nested key.
 * @param {unknown} value The default value.
 * @returns {any} Returns mutated target.
 * @example
 * ```ts
 * // rule 1
 * _.obj.set({}, "some.property", 15);
 *
 * // {
 * //  some: {
 * //   property: 15
 * //  }
 * // }
 *
 * // rule 2
 * _.obj.set({}, "some.0", 15);
 *
 * // {
 * //  some: [15]
 * // }
 *
 * let obj = {}
 *
 * _.obj.set(obj, "user", 5);
 * // {
 * //  user: 5
 * // }
 *
 * _.obj.set(obj, "user");
 * // {
 * //  user: undefined
 * // }
 * ```
 */
export default function set(obj: object | any[], path: string | any[], value?: unknown): object | any[];
//# sourceMappingURL=set.d.ts.map