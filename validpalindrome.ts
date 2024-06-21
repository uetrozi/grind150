export function isPalindrome(s: string): boolean {
  const cleanedString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const reversedString = cleanedString.split("").reverse().join("");

  return cleanedString === reversedString;
}
