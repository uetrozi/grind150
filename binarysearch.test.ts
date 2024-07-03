import { search } from "./binarysearch";

test("case 1", () => {
  const output = search([-1, 0, 3, 5, 9, 12], 9);
  expect(output).toEqual(4);
});

test("case 2", () => {
  const output = search([-1, 0, 3, 5, 9, 12], 2);
  expect(output).toEqual(-1);
});
