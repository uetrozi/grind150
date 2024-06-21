import {maxProfit} from "./besttimetobuyandsell"

test("Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5", () => {
    const output = maxProfit([7,1,5,3,6,4]);
    expect(output).toEqual(5);
  });

test("In this case, no transactions are done and the max profit = 0.", () => {
    const output = maxProfit([7,6,4,3,1]);
    expect(output).toEqual(0);
  });