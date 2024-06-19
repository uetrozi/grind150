import { isValid } from "./validparantheses";

test("single brackets", () => {
  const output = isValid("()");
  expect(output).toBeTruthy()
});

test("triple brackets", () => {
    const output = isValid("()[]{}");
    expect(output).toBeTruthy()
  });

  test("different brackets", () => {
    const output = isValid("(]");
    expect(output).toBeFalsy()
  });

  test("alternating brackets", () => {
    const output = isValid("({[]})");
    expect(output).toBeTruthy()
  });

  test("uneven count of brackets", () => {
    const output = isValid("(()");
    expect(output).toBeFalsy()
  });