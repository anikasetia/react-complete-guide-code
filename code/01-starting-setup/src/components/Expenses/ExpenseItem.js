import "./ExpenseItem.css";
import { ExpenseDate } from "./ExpenseDate";
import { Card } from "../Card";
import { useState } from "react";

export const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.expense.title);

  const onChangeTitle = () => {
    setTitle("Value updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
      <button onClick={onChangeTitle}>Change Title</button>
    </Card>
  );
};
