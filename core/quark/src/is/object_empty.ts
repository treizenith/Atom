import $obj from "./object";

export default function objEmp(val: unknown) {
  return $obj(val) && Object.keys(val).length === 0;
}