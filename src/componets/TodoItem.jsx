import { AiFillDelete } from "react-icons/ai";
import "./TodoItem.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/items-store";
function TodoItem({ todoName, todoDate, onDeleteClick }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row ks-row">
        <div className="col-4 ks-name">{todoName}</div>
        <div className="col-4 ks-add-date">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger ks-button"
            onClick={() => deleteItem(todoName)}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
