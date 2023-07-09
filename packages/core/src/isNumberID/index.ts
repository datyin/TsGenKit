function isNumberID(input: unknown): input is number {
  return typeof input === "number" && Number.isFinite(input) && Number.isSafeInteger(input) && input > 0;
}

export { isNumberID };
