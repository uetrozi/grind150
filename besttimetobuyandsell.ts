export function findMaxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let maxProfit = prices[1] - prices[0];

  for (let i = 1; i < prices.length; i++) {
    const currentProfit = prices[i] - minPrice;
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
    }
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
  }
  if (maxProfit < 0) {
    return 0;
  }

  return maxProfit;
}
