import "./AddTodo.css";
import { useState, useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
function AddTodo({ onNewItem }) {
  const itemNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddClick = (e) => {
    e.preventDefault();
    const itemName = itemNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    itemNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(itemName, dueDate);
  };
  return (
    <div className="container">
      <form className="row ks-row" onSubmit={handleAddClick}>
        <div className="col-5 ks-text">
          <input
            ref={itemNameElement}
            type="text"
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-3 ks-date">
          <input ref={dueDateElement} type="date" />
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
