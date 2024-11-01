export type ClassNameJoinParams = string | number | boolean | undefined | null;

export default function classNameJoin(arr: ClassNameJoinParams[]) {
  return arr
    .filter((v) => v !== undefined && v !== false && v !== null)
    .join(" ");
}
