import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import Card from "../../UI/Card";
const NewExpense = (props) => {
  const saveExpenseData = (expenses) => {
    const expense = {
      ...expenses,
      id: Math.random().toString(),
    };

    props.onAddExpense(expense);
    console.log(expense);
  };

  return (
    <Card className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </Card>
  );
};

export default NewExpense;
