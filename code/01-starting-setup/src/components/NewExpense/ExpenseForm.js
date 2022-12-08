import "./ExpenseForm.css";
import { useState } from "react";

export const ExpenseForm = (props) => {
  const [formItems, setFormItems] = useState({
    title: "",
    amount: 0.01,
    date: new Date(),
  });

  const onFormSubmission = (event) => {
    console.log(formItems);
    props.setExpenses((prevState) => {
      return [...prevState, { ...formItems, id: Math.random() }];
    });
    toggleExpandedState();
    event.preventDefault();
  };

  const onInputValueChangeHandler = (event) => {
    if (event.target.id === "titleInput")
      setFormItems((prevState) => {
        return {
          ...prevState,
          title: event.target.value,
        };
      });
    else if (event.target.id === "amountInput")
      setFormItems((prevState) => {
        return {
          ...prevState,
          amount: event.target.value,
        };
      });
    else if (event.target.id === "dateInput")
      setFormItems((prevState) => {
        console.log(event.target.value);
        return {
          ...prevState,
          date: new Date(event.target.value),
        };
      });
  };

  const [expanded, setExpanded] = useState(false);

  const toggleExpandedState = () => {
    setExpanded((prevState) => {
      return !prevState;
    });
  };

  return (
    <div>
      {!expanded && (
        <div className="new-expense__controls">
          <div className="new-expense__actions">
            <button onClick={toggleExpandedState}>Add new expense</button>
          </div>
        </div>
      )}
      {expanded && (
        <form onSubmit={onFormSubmission}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                onChange={onInputValueChangeHandler}
                id="titleInput"
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min={0.01}
                step={0.01}
                onChange={onInputValueChangeHandler}
                id="amountInput"
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2022-01-01"
                max="2022-12-31"
                onChange={onInputValueChangeHandler}
                id="dateInput"
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add expense</button>
          </div>
        </form>
      )}
    </div>
  );
};
