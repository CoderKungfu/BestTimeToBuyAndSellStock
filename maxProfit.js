const maxProfit = (prices) => {
  let minPrice = Number.MAX_SAFE_INTEGER
  let maxProfit = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice)
      minPrice = prices[i]
    else if (prices[i] > minPrice && (prices[i] - minPrice) > maxProfit)
      maxProfit = prices[i] - minPrice
  }
  return maxProfit
}

export default maxProfit