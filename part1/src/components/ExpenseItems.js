import React from "react";
import "./ExpenseItems.css";
const ExpenseItems = (props) => {
  const expenseData = props.date;
  const expenseTitle = props.title;
  const expenseAmount = props.amount;
  const expenseLocation = props.location;

  return (
    <div className="expense-item">
      <div>{expenseData.toISOString().split("T")[0]}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div>
          <h2>{expenseLocation}</h2>
        </div>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItems;
