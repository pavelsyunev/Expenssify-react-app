import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.incrementBy };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: "INCREMENT"
// });

store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 10 }));

store.dispatch({
  type: "DECREMENT"
});

// console.log(store.getState());
