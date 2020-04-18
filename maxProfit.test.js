import maxProfit from './maxProfit'

test('array of [] yield max profit of 0', () => {
  expect(maxProfit([])).toBe(0)
})