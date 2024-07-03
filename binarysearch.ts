export function search(nums: number[], target: number): number {
  let first = 0;
  let last = nums.length - 1;

  while (first <= last) {
    const mid = Math.floor((first + last) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      first = mid + 1;
    } else {
      last = mid - 1;
    }
  }
  return -1;
}
