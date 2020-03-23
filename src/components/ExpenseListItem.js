import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = props => (
  <div>
    <Link to={`/edit/${props.id}`}>
      <h3>{props.description}</h3>
    </Link>
    <p>{props.amount} 💲</p>
    <p>{props.createdAt.toString()}</p>
  </div>
);

export default ExpenseListItem;
