import { useContext } from "react";
import TodoItem from "./TodoItem";
import "./TodoItems.css";
import { TodoItemsContext } from "../store/items-store";
function TodoItems({ onDeleteClick }) {
  const { items } = useContext(TodoItemsContext);
  return (
    <div className="items-container">
      {items.map((item) => (
        <TodoItem
          className="ks-item"
          todoName={item.name}
          key={item.name}
          todoDate={item.dueDate}
        />
      ))}
    </div>
  );
}
export default TodoItems;
