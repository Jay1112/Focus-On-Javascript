// Buy and Sell Stocks

// TC : O(N)
// SC : O(1)

var maxProfit = function(prices) {
    let max_profit = 0, min_price = Infinity;
    for(let i = 0 ; i < prices.length; i++){
        let stockPrice = prices[i];
        min_price = Math.min(stockPrice, min_price);
        max_profit = Math.max(max_profit, stockPrice - min_price);
    }
    return max_profit;
};