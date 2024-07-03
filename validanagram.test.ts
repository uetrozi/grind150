import { isAnagram } from "./validanagram";

test("is anagram", () => {
  const output = isAnagram("anagram", "nagaram");
  expect(output).toBeTruthy();
});

test("is not anagram", () => {
  const output = isAnagram("rat", "car");
  expect(output).toBeFalsy();
});

test("is not another anagram", () => {
  const output = isAnagram("hellworld", "hello, world");
  expect(output).toBeFalsy();
});

test("is another anagram", () => {
  const output = isAnagram("rantanplan", "nalpnatnar");
  expect(output).toBeTruthy();
});

test("is unicode anagram", () => {
  const output = isAnagram("😊🍎", "🍎😊");
  expect(output).toBeTruthy();
});

test("is unicode anagram", () => {
  const output = isAnagram("🍎🍎", "🍎😊");
  expect(output).toBeFalsy();
});
