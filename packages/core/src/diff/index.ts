import { isObject } from "..";

interface DiffItem {
  path: string;
  from: unknown;
  into: unknown;
};

function diff(from: unknown, into: unknown): DiffItem[] {
  const differences: DiffItem[] = [];

  if ((isObject(from) && isObject(into)) || (Array.isArray(from) && Array.isArray(into))) {
    for (const key in from) {
      if (JSON.stringify(key) !== JSON.stringify(into[key])) {
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

      if (JSON.stringify(key) !== JSON.stringify(from[key])) {
        differences.push({
          path: key,
          from: from[key],
          into: into[key]
        });
      }
    }
  }

  return differences;
}

export { diff };
export type { DiffItem };
