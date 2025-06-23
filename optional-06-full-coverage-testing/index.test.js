import { it } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

it("should add two positive numbers correctly", () => {
    // Arrange
    const num1 = 10;
    const num2 = 5;
  
    // Action
    const actualValue = sum(num1, num2);

    // Assert
    const expectedValue = 15;
    assert.equal(actualValue, expectedValue);
});

it("should return 0 when first number is negative", () => {
    // Arrange
    const num1 = -5;
    const num2 = 10;
  
    // Action
    const actualValue = sum(num1, num2);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
});

it("should return 0 when second number is negative", () => {
    // Arrange
    const num1 = 10;
    const num2 = -5;
  
    // Action
    const actualValue = sum(num1, num2);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
});

it("should return 0 when both numbers are negative", () => {
    // Arrange
    const num1 = -10;
    const num2 = -5;
  
    // Action
    const actualValue = sum(num1, num2);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
});

it("should handle zero as first input correctly", () => {
    // Arrange
    const num1 = 0;
    const num2 = 5;
  
    // Action
    const actualValue = sum(num1, num2);

    // Assert
    const expectedValue = 5;
    assert.equal(actualValue, expectedValue);
});

it("should handle zero as second input correctly", () => {
    // Arrange
    const num1 = 5;
    const num2 = 0;
  
    // Action
    const actualValue = sum(num1, num2);

    // Assert
    const expectedValue = 5;
    assert.equal(actualValue, expectedValue);
});

it("should handle zero as both inputs correctly", () => {
    // Arrange
    const num1 = 0;
    const num2 = 0;
  
    // Action
    const actualValue = sum(num1, num2);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
});

it("should handle large numbers correctly", () => {
    // Arrange
    const num1 = 1000000;
    const num2 = 5000000;
  
    // Action
    const actualValue = sum(num1, num2);

    // Assert
    const expectedValue = 6000000;
    assert.equal(actualValue, expectedValue);
});

it("should handle floating-point numbers correctly", () => {
    // Arrange
    const num1 = 2.5;
    const num2 = 3.5;

    // Action
    const actualValue = sum(num1, num2);

    // Assert
    const expectedValue = 6;
    assert.equal(actualValue, expectedValue);
});

it("should return 0 when first input is not a number", () => {
    // Arrange
    const num1 = "a";
    const num2 = 10;

    // Action
    const actualValue = sum(num1, num2);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
});

it("should return 0 when second input is not a number", () => {
    // Arrange
    const num1 = 10;
    const num2 = "b";

    // Action
    const actualValue = sum(num1, num2);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
});

it("should return 0 when both inputs are not numbers", () => {
    const num1 = "a";
    const num2 = "b";

    // Action
    const actualValue = sum(num1, num2);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
});

it("should return NaN when first input is NaN", () => {
    // Arrange
    const num1 = NaN;
    const num2 = 5;
  
    // Action
    const actualValue = sum(num1, num2);

    // Assert
    const expectedValue = NaN;
    assert.equal(actualValue, expectedValue);
});

it("should return NaN when second input is NaN", () => {
    // Arrange
    const num1 = 5;
    const num2 = NaN;
  
    // Action
    const actualValue = sum(num1, num2);

    // Assert
    const expectedValue = NaN;
    assert.equal(actualValue, expectedValue);
});

it("should return NaN when both inputs are NaN", () => {
    // Arrange
    const num1 = NaN;
    const num2 = NaN;
  
    // Action
    const actualValue = sum(num1, num2);

    // Assert
    const expectedValue = NaN;
    assert.equal(actualValue, expectedValue);
});

it("should return 0 when first input is undefined", () => {
    // Arrange
    const num1 = undefined;
    const num2 = 5;
  
    // Action
    const actualValue = sum(num1, num2);

    // Assert
    const expectedValue = 0;
});

it("should return 0 when second input is undefined", () => {
    // Arrange
    const num1 = 5;
    const num2 = undefined;
  
    // Action
    const actualValue = sum(num1, num2);

    // Assert
    const expectedValue = 0;
});

it("should return 0 when both inputs are undefined", () => {
    // Arrange
    const num1 = undefined;
    const num2 = undefined;
  
    // Action
    const actualValue = sum(num1, num2);

    // Assert
    const expectedValue = 0;
});

it("should return 0 when first input is null", () => {
    // Arrange
    const num1 = null;
    const num2 = 5;
  
    // Action
    const actualValue = sum(num1, num2);

    // Assert
    const expectedValue = 0;
});

it("should return 0 when second input is null", () => {
    // Arrange
    const num1 = null;
    const num2 = 5;
  
    // Action
    const actualValue = sum(num1, num2);

    // Assert
    const expectedValue = 0;
});

it("should return 0 when both inputs are null", () => {
    // Arrange
    const num1 = null;
    const num2 = 5;
  
    // Action
    const actualValue = sum(num1, num2);

    // Assert
    const expectedValue = 0;
});
  