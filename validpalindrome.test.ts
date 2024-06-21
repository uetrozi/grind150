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
