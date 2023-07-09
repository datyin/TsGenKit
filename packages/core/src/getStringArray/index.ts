function getStringArray(input: unknown): string[] {
  if (Array.isArray(input)) {
    return input.filter((item) => typeof item === "string");
  }

  return [];
}

export { getStringArray };
