const profitFromPrice = (lowestPrice, prices) => {
  const lowestPricePostion = prices.indexOf(lowestPrice)
  const highestPrice = prices.slice(lowestPricePostion+1).sort((a, b) => a - b).slice(-1)[0]

  if (typeof highestPrice !== 'number') return 0
  const profit = highestPrice - lowestPrice

  return profit > 0 ? profit : 0
}

const maxProfit = (prices) => {
  if (prices.length < 2) return 0

  if (prices.length === 2) {
    const profit = prices[1] - prices[0]
    return profit > 0 ? profit : 0
  }
  
  const sortedPrices = [...prices].sort((a, b) => a - b)

  const profits = [0]
  for(let i=0; i < sortedPrices.length; i++) {
    let candidateLowestPrice = sortedPrices[i]
    let profit = profitFromPrice(candidateLowestPrice, prices)

    if (profit > 0) {
      profits.push(profit)
    }
  }

  return profits.sort((a, b) => a - b)[profits.length - 1]
}

export default maxProfit