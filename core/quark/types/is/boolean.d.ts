/**
 * Checks if `value` is boolean.
 *
 * **Note:** strict boolean type !
 * @asMemberOf quark
 * @since 1.0.0
 * @category is
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is boolean, else `false`.
 * @example
 * ```ts
 * _.is.bool(true);
 * // => true
 *
 * _.is.bool("alice");
 * // => false
 * ```
 */
export default function bool(value?: unknown): value is boolean;
//# sourceMappingURL=boolean.d.ts.map