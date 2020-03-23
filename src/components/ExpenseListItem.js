import React from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";

const ExpenseListItem = props => (
  <div>
    <Link to={`/edit/${props.id}`}>
      <h3>{props.description}</h3>
    </Link>
    <p>{numeral(props.amount).format("0,0[.]00 $")}</p>
    <p>{props.createdAt.toString()}</p>
  </div>
);

export default ExpenseListItem;
