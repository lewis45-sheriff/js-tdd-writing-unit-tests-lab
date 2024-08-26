// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for a simple palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("returns true for a palindrome with mixed case", () => {
    expect(isPalindrome("Racecar")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error if the input has non-alphabetic characters", () => {
    expect(() => isPalindrome("racecar!")).toThrow("Invalid input: only alphabetic characters are allowed");
  });

  it("throws an error if the input is not a string", () => {
    expect(() => isPalindrome(12345)).toThrow("Invalid input: input must be a string");
  });
});
