/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const totalsByCategory = {};

  transactions.forEach(({ category, price }) => {
    if (!totalsByCategory[category]) {
      totalsByCategory[category] = 0;
    }
    totalsByCategory[category] += price;
  });

  const finalResult = Object.keys(totalsByCategory).map(category => ({
    category,
    totalSpent: totalsByCategory[category]
  }));
  return finalResult;
}
module.exports = calculateTotalSpentByCategory;
