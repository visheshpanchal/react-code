import React, { useState } from "react";
import Card from "../../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";

const ExpenseItems = (props) => {
  const [title, setTitle] = useState(props.title);

  const updateTitle = () => {
    setTitle("Updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div>
          <h2>{props.location}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={updateTitle}>Click Me!!</button>
      </div>
    </Card>
  );
};

export default ExpenseItems;
