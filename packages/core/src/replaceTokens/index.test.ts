import { test, expect } from "vitest";
import { replaceTokens } from "./index";

test("replaceTokens", () => {
  // Arrange
  const text = "Hello {{ name }} {{name}} {{name }} {{ name}} {{name}} {{name }}";

  const replacements = new Map<string, string>();
  replacements.set("name", "World");

  // Act
  const result = replaceTokens(text, replacements);

  // Assert
  expect(result).toBe("Hello World World World World World World");
});
