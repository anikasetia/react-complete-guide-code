import { ExpenseItem } from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import { useEffect, useState } from "react";

export const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState(2021);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const initialList = props.expenses.filter(
      (expense) => expense.date.getFullYear().toString() === selectedYear
    );
    setFilteredList(initialList);
  }, [selectedYear, props.expenses]);

  let filterContent = <p>Np expenses found</p>;

  if (filteredList.length > 0) {
    filterContent = filteredList.map((expense) => {
      return <ExpenseItem expense={expense} key={expense.id}></ExpenseItem>;
    });
  }

  return (
    <div className="expenses">
      <ExpensesFilter setSelectedYear={setSelectedYear} />
      {filterContent}
    </div>
  );
};
