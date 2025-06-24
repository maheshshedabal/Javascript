//Ref: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
//You are given an array prices where prices[i] is the price of a given stock on the ith day.
//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future 
// to sell that stock.
//Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

//Time complexity: O(n)
//Space complexity: O(1)
var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let profit = 0;

    for(let i=0; i<prices.length; i++){
        buyPrice = Math.min(buyPrice, prices[i]);
        profit = Math.max(profit, prices[i] - buyPrice);
    }

    return profit;
}

console.log("maxProfit: ",maxProfit([7,1,5,3,6,4])); //5