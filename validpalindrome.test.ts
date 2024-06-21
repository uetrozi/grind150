import { isPalindrome } from "./validpalindrome";

test("amanaplanacanalpanama is a palindrome.", () => {
  const output = isPalindrome("A man, a plan, a canal: Panama");
  expect(output).toBeTruthy();
});

test("raceacar is not a palindrome", () => {
  const output = isPalindrome("race a car");
  expect(output).toBeFalsy();
});

test("s is an empty string  after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.", () => {
  const output = isPalindrome(" ");
  expect(output).toBeTruthy();
});

test("1010", () => {
  const output = isPalindrome("1010");
  expect(output).toBeFalsy();
});

test("Taco Cat", () => {
  const output = isPalindrome("taco Cat");
  expect(output).toBeTruthy();
});

test("Was it a car or a cat I saw?", () => {
  const output = isPalindrome("Was it a car or a cat I saw?");
  expect(output).toBeTruthy();
});

test("hello", () => {
  const output = isPalindrome("hello");
  expect(output).toBeFalsy();
});

test("momma made me eat my m&ms", () => {
  const output = isPalindrome("momma made me eat my m&ms");
  expect(output).toBeFalsy();
});
