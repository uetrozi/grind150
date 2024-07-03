export function isAnagram(s: string, t: string): boolean {
  const sortedSToArray = Array.from(s).sort();
  const sortedTToArray = Array.from(t).sort();

  if (sortedSToArray.length !== sortedTToArray.length) return false;

  for (let i = 0; i < sortedSToArray.length; i++) {
    if (sortedSToArray[i] !== sortedTToArray[i]) return false;
  }
  return true;
}
