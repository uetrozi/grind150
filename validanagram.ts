export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const sortedS = Array.from(s)
    .sort((a, b) => a.localeCompare(b))
    .join("");
  const sortedT = Array.from(t)
    .sort((a, b) => a.localeCompare(b))
    .join("");

  for (let i = 0; i < sortedS.length; i++) {
    if (sortedS[i] !== sortedT[i]) return false;
  }
  return true;
}
