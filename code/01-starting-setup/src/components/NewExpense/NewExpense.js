import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

export const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm setExpenses={props.setExpenses} />
    </div>
  );
};
