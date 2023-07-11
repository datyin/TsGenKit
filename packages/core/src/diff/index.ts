import { isObject } from "..";

interface DiffItem {
  path: string;
  from: unknown;
  into: unknown;
};

/**
 * Return only top level differences between two objects or arrays.
 * 
 * @param from the object or array to compare from
 * @param into the object or array to compare into
 * @returns an array of differences
 */
function diff(from: unknown, into: unknown): DiffItem[] {
  const differences: DiffItem[] = [];

  if ((isObject(from) && isObject(into)) || (Array.isArray(from) && Array.isArray(into))) {
    for (const key in from) {
      if (JSON.stringify(from[key]) !== JSON.stringify(into[key])) {
        differences.push({
          path: key,
          from: from[key],
          into: into[key]
        });
      }
    }

    for (const key in into) {
      const alreadyMapped = differences.find(difference => difference.path === key);

      if (alreadyMapped) {
        continue;
      }

      if (JSON.stringify(into[key]) !== JSON.stringify(from[key])) {
        differences.push({
          path: key,
          from: from[key],
          into: into[key]
        });
      }
    }
  }
  else {
    if (JSON.stringify(from) !== JSON.stringify(into)) {
      differences.push({
        path: "",
        from,
        into
      });
    }
  }

  return differences;
}

export { diff };
export type { DiffItem };
