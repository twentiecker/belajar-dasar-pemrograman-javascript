import { it } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

it("should add correctly", () => {
  // Arrange
  const num1 = 29;
  const num2 = 4;

  // Action
  const actualValue = sum(num1, num2);

  // Assert
  const expectedValue = 33;
  assert.equal(actualValue, expectedValue);
});
