import { useState, useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const noOfUpdates = useRef(0);

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    noOfUpdates.current++;
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
    console.log(`no of updates: ${noOfUpdates.current}`);
  };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <form className="row row-prop" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here..."
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button className="btn btn-success btn-prop">
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
