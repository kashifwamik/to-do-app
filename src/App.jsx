import AppName from "./componets/AppName";
import AddTodo from "./componets/AddTodo";
import TodoItems from "./componets/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./componets/WelcomeMessage";
function App() {
  const [items, setItems] = useState([]);
  const handleNewItem = (itemName, dueDate) => {
    const newItems = [...items, { name: itemName, dueDate: dueDate }];
    setItems(newItems);
  };
  const handleDeleteClick = (itemName) => {
    const newItems = items.filter((item) => item.name !== itemName);
    setItems(newItems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {items.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={items} onDeleteClick={handleDeleteClick} />
    </center>
  );
}

export default App;
