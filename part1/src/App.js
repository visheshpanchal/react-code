import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    location: "Mall",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    location: "Mall",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    location: "Mall",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    location: "Mall",
  },
];

function App() {
  const [expenses, setExpense] = useState(EXPENSES);

  const addEventHandler = (expense) => {
    setExpense((prevState) => {
      return [...prevState, expense];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addEventHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
