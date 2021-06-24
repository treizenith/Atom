// Computations are a tuple of: [ subscriber ]
import Atom from ".";
import type { Computation, Writer, Subscriber, Observable, ObservableMega } from "./general";


var computedTracker: any[] = [];

export function space<T>(value?: T): ObservableMega<T> {
  let $state = state(value) as ObservableMega<T>;

  $state.set = (path, data) => {
    // @ts-ignore
    $state(Atom._.obj.set(Atom._.obj.cl($state()), path, data));
  }

  $state.get = (path) => {
    // @ts-ignore
    return Atom._.obj.get(Atom._.obj.cl($state()), path);
  }

  $state.has = (path) => {
    // @ts-ignore
    return Atom._.obj.has(Atom._.obj.cl($state()), path);
  }

  $state.del = (path) => {
    // @ts-ignore
    $state(Atom._.obj.del(Atom._.obj.cl($state()), path));
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

  function write(newValue: T) {
    if (newValue === value && (value === null || typeof value !== 'object')) {
      return;
    }

    var oldValue = value;
    value = newValue;

    for (let i = subscribers.length - 1; i > -1; i--) {
      subscribers[i](value, oldValue);
    }
  }

  function read() {
    var runningComputation = computedTracker[computedTracker.length - 1];
    if (runningComputation) {
      subscribe(runningComputation[0]);
    }
    return value;
  }

  return self;
}


export const computed = <T>(fn: Computation<T>): Observable<T> => {
  var self = state<T>();
  var computationToken = [runComputed]

  runComputed();
  return self;

  function runComputed() {
    detectCircularity(computationToken);
    computedTracker.push(computationToken);
    var errors, result;
    try {
      result = fn();
    } catch (e) {
      errors = e;
    }
    computedTracker.pop();
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

function detectCircularity(token: unknown) {
  if (computedTracker.indexOf(token) > -1) {
    throw Error('Circular computation');
  }
}

function remove(array: any[], item: any) {
  var position = array.indexOf(item);
  if (position > -1) {
    array.splice(position, 1);
  }
}