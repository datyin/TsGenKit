function isHex(input: unknown): input is string {
  if (input == null) {
    return false;
  }

  const value = input.toString();

  return /^0x[0-9a-fA-F]+$/.test(value);
}

export { isHex };
