import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import totalExpenses from "../selectors/expenses-total";

const ExpenseSummary = props => (
  <div>
    <p>Total expenses: {numeral(props.totalExpenses).format("0,0[.]00 $")}</p>
    <p>Total items: {props.expenses.length}</p>
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    totalExpenses: totalExpenses(state.expenses)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
