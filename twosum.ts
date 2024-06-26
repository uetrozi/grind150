export function findIndices(nums: number[], target: number): number[] {
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    for (let index2 = 0; index2 < nums.length; index2++) {
      const element2 = nums[index2];
      if (element + element2 === target && index !== index2) {
        return [index, index2];
      }
    }
  }

  return [];
}
