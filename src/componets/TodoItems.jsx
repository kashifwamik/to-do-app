import TodoItem from "./TodoItem";
import "./TodoItems.css";
function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          className="ks-item"
          todoName={item.name}
          key={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
}
export default TodoItems;
