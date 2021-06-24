export default function cb<T extends Array<any>, U, N>(fn: (...as: T) => U, rs: (b: U, ...ab: T) => N) {
  return (...args: T): N => rs(fn(...args), ...args)
}