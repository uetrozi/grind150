import { floodFill } from "./floodfill";

test("case 1", () => {
  const output = floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  );
  expect(output).toEqual([
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1],
  ]);
});

test("case 2", () => {
  const output = floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    0,
    0,
    0
  );
  expect(output).toEqual([
    [0, 0, 0],
    [0, 0, 0],
  ]);
});

test("case 3", () => {
  const output = floodFill(
    [
      [2, 2, 2],
      [2, 0, 2],
      [2, 1, 2],
    ],
    3,
    1,
    3
  );
  expect(output).toEqual([
    [3, 3, 3],
    [3, 0, 3],
    [3, 1, 3],
  ]);
});
