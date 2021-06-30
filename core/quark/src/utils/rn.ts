export default function Rename<Z extends Function>(fn: Z, name: string): Z {
  return Function("fn", "return (function " + name + "(){\n  return fn.apply(this, arguments)\n});")(fn);
}