import React, { useState } from "react";

import ExpenseItems from "./ExpenseItems";
import Card from "../../UI/Card";

import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const noItem = <p>No Items</p>;

  const singleItem = <p>Single items add more</p>;

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpense.length === 1 ? singleItem : ""}
      {filteredExpense.length === 0
        ? noItem
        : filteredExpense.map((expense) => {
            return (
              <ExpenseItems
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                location={expense.location}
                key={expense.id}
              />
            );
          })}
    </Card>
  );
};

export default Expenses;
