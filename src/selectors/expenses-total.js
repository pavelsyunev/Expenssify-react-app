export default expenses => {
  return expenses
    .map(expense => {
      return expense.amount;
    })
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
};
