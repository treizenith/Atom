/**
 * returns the type absolute type.
 *
 * **Note:** returns strict type SLICED !!!
 * @asMemberOf quark
 * @since 1.0.0
 * @category is
 * @param {*} value The value to check.
 * @returns {string} Returns type of value.
 * @example
 * ```ts
 * _.is.utils.type("alice");
 * // => String
 *
 * _.is.utils.type(Promise.resolve());
 * // => Promise
 * ```
 */
export default function type(value: unknown): string;
//# sourceMappingURL=type.d.ts.map