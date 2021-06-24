/**
 * Checks if `value` is array or an object.
 *
 * @asMemberOf quark
 * @since 1.0.0
 * @category is
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array or an object, else `false`.
 * @example
 * ```ts
 * _.is.like([true]);
 * // => true
 *
 * _.is.like("alice");
 * // => false
 *
 * _.is.like({});
 * // => true
 * ```
 */
export default function like(value?: unknown): value is (any[] | object);
//# sourceMappingURL=like.d.ts.map