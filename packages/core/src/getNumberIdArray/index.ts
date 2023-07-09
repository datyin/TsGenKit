import { isNumberID } from "..";

function getNumberIdArray(input: unknown): number[] {
  if (Array.isArray(input)) {
    return input.filter((item) => isNumberID(item));
  }

  return [];
  
}

export { getNumberIdArray };
