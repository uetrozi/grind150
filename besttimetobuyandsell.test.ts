import { findMaxProfit } from "./besttimetobuyandsell";

test("Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5", () => {
  const output = findMaxProfit([7, 1, 5, 3, 6, 4]);
  expect(output).toEqual(5);
});

test("In this case, no transactions are done and the max profit = 0.", () => {
  const output = findMaxProfit([7, 6, 4, 3, 1]);
  expect(output).toEqual(0);
});

test("another test", () => {
  const output = findMaxProfit([3, 2, 6, 5, 0, 3]);
  expect(output).toEqual(4);
});

test("more test", () => {
  const output = findMaxProfit([4, 1, 5, 2, 7]);
  expect(output).toEqual(6);
});
