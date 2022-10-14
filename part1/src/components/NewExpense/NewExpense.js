import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import Card from "../../UI/Card";
import { useState } from "react";
const NewExpense = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const addExpenseHandler = () => {
    setIsEdit(true);
  };

  const cancelExpenseHandler = () => {
    setIsEdit(false);
  };
  const saveExpenseData = (expenses) => {
    const expense = {
      ...expenses,
      id: Math.random().toString(),
    };

    props.onAddExpense(expense);
  };

  return (
    <Card className="new-expense">
      {!isEdit && <button onClick={addExpenseHandler}>Add Expense</button>}
      {isEdit && <ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={cancelExpenseHandler} />}
    </Card>
  );
};

export default NewExpense;
