export function isValid(s: string): boolean {
  if (s.length % 2 > 0) {
    return false;
  }
  const stack: string[] = [];
  for (const character of s) {
    if (character === "(" || character === "{" || character === "[") {
      stack.push(character);
    }

    if (character === ")" || character === "}" || character === "]") {
      const lastCharacter = stack.pop();
      if (
        (lastCharacter === "(" && character === ")") ||
        (lastCharacter === "{" && character === "}") ||
        (lastCharacter === "[" && character === "]")
      ) {
      } else {
        return false;
      }
    }
  }

  return true;
}
