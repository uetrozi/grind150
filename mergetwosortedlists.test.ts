import { mergeTwoLists } from "./mergetwosortedlists";

test("two lists with numbers", () => {
  const output = mergeTwoLists([1, 2, 4], [1, 3, 4]);
  expect(output).toEqual([1, 1, 2, 3, 4, 4]);
});

test("two empty lists", () => {
  const output = mergeTwoLists([], []);
  expect(output).toEqual([]);
});

test("two empty lists", () => {
  const output = mergeTwoLists([], [0]);
  expect(output).toEqual([0]);
});
