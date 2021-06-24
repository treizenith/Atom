export default function clone<T extends object>(from: T, to?: any): T {
  if (from == null || typeof from != "object") return from;
  if (from.constructor != Object && from.constructor != Array) return from;
  if (from.constructor == Date || from.constructor == RegExp || from.constructor == Function ||
    from.constructor == String || from.constructor == Number || from.constructor == Boolean)
    return new (from.constructor as any)(from);

  to = to || new (from.constructor as any)();

  for (var name in from) {
    to[name] = typeof to[name] == "undefined" ? clone(from[name] as any, null) : to[name];
  }

  return to;
}