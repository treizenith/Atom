// @ts-nocheck

import type { Diff } from "../general";

import $is from "../is";
import { VALUE_UPDATED, VALUE_UNCHANGED, VALUE_DELETED, VALUE_CREATED, VALUE_CNTTRACK } from "../globals";

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

export function map(obj2: any, obj1: any): Diff {
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
      diff[key] = {
        $type: VALUE_CNTTRACK,
        $data: obj1[key]
      }
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
      diff[key] = {

        $type: VALUE_CNTTRACK,
        $data: obj2[key]
      }
      continue;
    }

    diff[key] = map(obj2[key], undefined);
  }

  for (let v in diff) {
    if ((diff[v] as any).$type == VALUE_UNCHANGED || $is.objEmp(diff[v])) {
      Reflect.deleteProperty(diff, v);
    }
  }

  return diff;
}

export function same(obj1: any, obj2: any, level: number = 0): Diff {
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

  obj1 = $is.obj(obj1) ? obj1 : {};
  obj2 = $is.obj(obj2) ? obj2 : {};

  for (var key in obj1) {
    if ($is.func(obj1[key])) {
      diff[key] = {

        $type: VALUE_CNTTRACK,
        $data: obj1[key]
      }
      continue;
    }

    var value2 = undefined;
    if (obj2[key] !== undefined) {
      value2 = obj2[key];
    }

    let res = same(obj1[key], value2, level - 1);
    if (level > 0) {
      diff[key] = res;
    } else {
      diff[key] = {

        $type: compareValues(value2, obj1[key]),
        $data: value2 === undefined ? obj1[key] : value2
      }
    }
  }

  for (var key in obj2) {
    if ($is.func(obj2[key]) || diff[key] !== undefined) {
      diff[key] = {

        $type: VALUE_CNTTRACK,
        $data: obj2[key]
      }
      continue;
    }

    let res = same(undefined, obj2[key], level - 1);
    if (level > 0) {
      diff[key] = res;
    } else {
      diff[key] = {

        $type: compareValues(obj2[key], undefined),
        $data: obj2[key] === undefined ? undefined : obj2[key]
      }
    }
  }

  for (let v in diff) {
    if ((diff[v] as any).$type == VALUE_UNCHANGED || $is.objEmp(diff[v])) {
      Reflect.deleteProperty(diff, v);
    }
  }

  return diff;
}