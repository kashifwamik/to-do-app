import { createContext } from "react";
import { useReducer } from "react";
export const TodoItemsContext = createContext({
  items: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
const itemsReducer = (currItems, action) => {
  let newItems = currItems;
  if (action.type === "ADD_ITEM") {
    newItems = [
      ...currItems,
      { name: action.payload.itemName, dueDate: action.payload.dueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newItems = currItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }

  return newItems;
};
const TodoIemsContextProvider = ({ children }) => {
  const [items, dispatchItems] = useReducer(itemsReducer, []);
  const addNewItem = (itemName, dueDate) => {
    const newAction = {
      type: "ADD_ITEM",
      payload: {
        itemName: itemName,
        dueDate: dueDate,
      },
    };
    dispatchItems(newAction);
  };
  const deleteItem = (itemName) => {
    const deleteAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: itemName,
      },
    };
    dispatchItems(deleteAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        items: items,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoIemsContextProvider;
