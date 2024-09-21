import { useContext } from "react";
import { TodoItemsContext } from "../store/items-store";

function WelcomeMessage() {
  const { items } = useContext(TodoItemsContext);
  return items.length === 0 && <h3 className="welcome">Enjoy Your Day!</h3>;
}
export default WelcomeMessage;
