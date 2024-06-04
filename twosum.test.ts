import { findIndices } from "./twosum";

test("returns indices of the two numbers from [2,7,11,15] such that they add up to 9", () => {
  const output = findIndices([2, 7, 11, 15], 9);
  expect(output).toEqual([0, 1]);
});

test("returns indices of the two numbers from [3,2,4] such that they add up to 6", () => {
  const output = findIndices([3, 2, 4], 6);
  expect(output).toEqual([1, 2]);
});

test("returns indices of the two numbers from [3,3] such that they add up to 6", () => {
  const output = findIndices([3, 3], 6);
  expect(output).toEqual([0, 1]);
});
