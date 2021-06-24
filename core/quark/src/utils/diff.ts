import $is from "../is";

export const VALUE_CREATED = 'created',
  VALUE_UPDATED = 'updated',
  VALUE_DELETED = 'deleted',
  VALUE_UNCHANGED = 'unchanged';


export type Diff = {
  [key: string]: {
    $type: string,
    $data: any,
  } | Diff,
  [key: number]: {
    $type: string,
    $data: any,
  } | Diff,
}

export function compareValues(value1: unknown, value2: unknown) {
  if (value1 === value2) {
    return VALUE_UNCHANGED;
  }
  if ($is.date(value1) && $is.date(value2) && value1.getTime() === value2.getTime()) {
    return VALUE_UNCHANGED;
  }
  if (value1 === undefined) {
    return VALUE_CREATED;
  }
  if (value2 === undefined) {
    return VALUE_DELETED;
  }
  return VALUE_UPDATED;
}

export function map(obj2: any, obj1: any) {
  if ($is.func(obj1) || $is.func(obj2)) {
    throw 'Invalid argument. Function given, object expected.';
  }
  if (!$is.like(obj1) && !$is.like(obj2)) {
    return {
      $type: compareValues(obj1, obj2),
      $data: obj1 === undefined ? obj2 : obj1
    };
  }

  let diff: Diff = {};


  for (var key in obj1) {
    if ($is.func(obj1[key])) {
      continue;
    }

    var value2 = undefined;
    if (obj2[key] !== undefined) {
      value2 = obj2[key];
    }

    diff[key] = map(value2, obj1[key]);
  }

  for (var key in obj2) {
    if ($is.func(obj2[key]) || diff[key] !== undefined) {
      continue;
    }

    diff[key] = map(obj2[key], undefined);
  }

  for (let v in diff) {
    if (diff[v].$type == VALUE_UNCHANGED || $is.objEmp(diff[v])) {
      Reflect.deleteProperty(diff, v);
    }
  }

  return diff;
}

// export function map(value: any, old: any) { // new, old
//   if ($is.func(old) || $is.func(value)) {
//     throw 'Invalid argument. Function given, object expected.';
//   }

//   if (!$is.like(old) && !$is.like(value)) {
//     let res = {
//       $type: compareValues(old, value),
//       $data: (value === undefined) ? old : value
//     };

//     if (res.$type == VALUE_UNCHANGED) {
//       return false;
//     }

//     return res;
//   }

//   var diff: Diff = {};

//   for (var key in old) {
//     if ($is.func(old[key])) {
//       continue;
//     }

//     var value2 = undefined;
//     if (value[key] !== undefined) {
//       value2 = value[key];
//     }

//     diff[key] = map(old[key], value2);
//   }
//   for (var key in value) {
//     if ($is.func(value[key]) || diff[key] !== undefined) {
//       continue;
//     }

//     diff[key] = map(undefined, value[key]);
//   }

//   let r: Diff = {};

//   for (let i in diff) {
//     if (diff[i]) {
//       r[i] = diff[i]
//     }
//   }

//   return r;
// }