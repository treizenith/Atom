// Computations are a tuple of: [ subscriber ]
import Atom from ".";
import type { Computation, Writer, Subscriber, Observable, ObservableMega } from "./general";

var map: Record<any, any[]> = {};

export function space<T>(value?: T): ObservableMega<T> {
  let $state = state(value) as ObservableMega<T>;

  $state.set = (path, data) => {
    $state(Atom._.obj.set(Atom._.obj.cl($state() as Object), path, data) as unknown as T);
  }

  $state.get = (path) => {
    return Atom._.obj.get(Atom._.obj.cl($state() as Object), path);
  }

  $state.has = (path) => {
    return Atom._.obj.has(Atom._.obj.cl($state() as Object), path);
  }

  $state.del = (path) => {
    $state(Atom._.obj.del(Atom._.obj.cl($state() as Object), path));
  }

  return $state;
}

export function state<T>(value?: T): Observable<T> {
  var subscribers: Subscriber<T>[] = [];

  var subscribe = (subscriber: Subscriber<T>, immediate?: boolean) => {
    if (!~subscribers.indexOf(subscriber)) {
      subscribers.push(subscriber);
    }
    if (immediate) {
      subscriber(value as T);
    }

    return () => {
      remove(subscribers, subscriber);
    };
  }

  var self = <Observable<T>>function (...args: T[]) {
    return args.length
      ? write(args[0])
      : read();
  };

  self.subscribe = subscribe;
  self.unsubscribe = (subscriber: Subscriber<T>) => {
    remove(subscribers, subscriber);
  };
  self.subscribers = subscribers;

  function write(newValue: T) {
    if (Atom._.is.same(newValue, value)) {
      return;
    }

    var oldValue = value;
    value = newValue;

    for (let i = subscribers.length - 1; i > -1; i--) {
      subscribers[i](value, oldValue);
    }
  }

  function read() {
    for (let keys in map) {
      let runningComputation = map[keys][map[keys].length - 1];

      if (runningComputation) {
        subscribe(runningComputation[0]);
      }
    }

    return value;
  }

  return self;
}


export const computed = <T>(fn: Computation<T>): Observable<T> => {
  var self = state<T>();
  var computationToken = [runComputed]
  var priv = Atom.unique();
  self.priv = priv;

  map[priv] = map[priv] || [];

  runComputed();
  return self;

  function runComputed() {
    detectCircularity(priv, computationToken);
    map[priv].push(computationToken);
    var errors, result;
    try {
      result = fn();
    } catch (e) {
      errors = e;
    }
    map[priv].pop();
    if (errors) {
      throw errors;
    }
    self(result as T);
  }
};

export const from = <T extends Writer>(executor: T): Parameters<Writer>[0] => {
  var self = state();
  executor(self);
  return self;
};

function detectCircularity(priv: string, token: unknown) {
  if (map[priv].indexOf(token) > -1) {
    throw Error('Circular computation');
  }
}

function remove(array: any[], item: any) {
  var position = array.indexOf(item);
  if (position > -1) {
    array.splice(position, 1);
  }
}