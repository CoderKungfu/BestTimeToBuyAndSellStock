const maxProfit = (prices) => {
  let maxProfit = 0
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i]
    for (let j = i+1; j < prices.length; j++) {
      const maxPrice = prices[j]
      if (maxPrice > price && (maxPrice - price) > maxProfit) {
        maxProfit = maxPrice - price
      }
    }
  }
  return maxProfit
}

export default maxProfit