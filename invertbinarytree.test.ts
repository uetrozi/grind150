import { invertTree } from "./invertbinarytree";


test("long binary tree", () => {
  const invertedRoot = invertTree([4,2,7,1,3,6,9]);
  expect(invertedRoot).toEqual([4,7,2,9,6,3,1]);
});