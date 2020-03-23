import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import { addExpense, editExpense, removeExpense } from "./actions/expenses";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  // console.log(state);
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

// store.dispatch(
//   addExpense({ description: "Water bill", createdAt: "300", amount: "100" })
// );
// store.dispatch(
//   addExpense({ description: "Gas bill", createdAt: "200", amount: "200" })
// );
// store.dispatch(
//   addExpense({ description: "Rent bill", createdAt: "100", amount: "300" })
// );
// store.dispatch(setTextFilter("Water bill"));

// console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
