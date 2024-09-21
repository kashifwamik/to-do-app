import AppName from "./componets/AppName";
import AddTodo from "./componets/AddTodo";
import TodoItems from "./componets/TodoItems";
import "./App.css";
import WelcomeMessage from "./componets/WelcomeMessage";
import TodoIemsContextProvider, { TodoItemsContext } from "./store/items-store";

function App() {
  return (
    <TodoIemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoIemsContextProvider>
  );
}

export default App;
