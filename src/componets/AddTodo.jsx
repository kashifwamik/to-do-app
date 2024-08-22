import "./AddTodo.css";
import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";
function AddTodo({ onNewItem }) {
  const [itemName, setItemName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleNameChange = (e) => {
    setItemName(e.target.value);
  };
  const handleDateChange = (e) => {
    setDueDate(e.target.value);
  };
  const handleAddClick = (e) => {
    console.log(e);
    e.preventDefault();

    onNewItem(itemName, dueDate);
    setItemName("");
    setDueDate("");
  };
  return (
    <div className="container">
      <form className="row ks-row" onSubmit={handleAddClick}>
        <div className="col-5 ks-text">
          <input
            type="text"
            value={itemName}
            placeholder="Enter Todo Here"
            onChange={handleNameChange}
          />
        </div>
        <div className="col-3 ks-date">
          <input type="date" onChange={handleDateChange} value={dueDate} />
        </div>
        <div className="col-2">
          <button className="btn btn-success ks-button">
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
