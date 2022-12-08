import { ExpenseItem } from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import { useEffect, useState } from "react";

export const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState(2021);
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    props.expenses.map((expense) => {
      console.log(expense.date.getFullYear() === selectedYear);
      return null;
    });
  });

  return (
    <div className="expenses">
      <ExpensesFilter setSelectedYear={setSelectedYear} />
      {props.expenses.map((expense) => {
        return <ExpenseItem expense={expense} key={expense.id}></ExpenseItem>;
      })}
    </div>
  );
};
