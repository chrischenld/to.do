import { Button } from "../components/Button";
import { AddItemForm } from "../components/AddItemForm";
import { useState, useEffect } from "react";
import { Icon } from "../components/Icon";

export default function Home() {
  const [showTextInput, setShowTextInput] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [completeList, setCompleteList] = useState([]);

  // handling hover and focus
  const [hoveredItem, setHoveredItem] = useState(null);
  const [focusedItem, setFocusedItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    if (hoveredItem !== focusedItem) {
      setHoveredItem(null);
    }
  };

  const handleFocus = (index) => {
    setFocusedItem(index);
    setHoveredItem(index);
  };

  const handleBlur = () => {
    setFocusedItem(null);
    setHoveredItem(null);
  };

  // handling shortcut
  // command K or control K
  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        newItemForm();
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // enter and spacebar shortcuts
  const handleKeyDown = (event, todoItem) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleSubmitComplete(todoItem);
    }
  };

  // Form submission
  const handleSubmit = (newItem) => {
    setTodoList((prevItems) => [...prevItems, newItem]);
    setShowTextInput(false);
    console.log(todoList);
  };

  const handleSubmitComplete = (completedItem) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todoItem) => todoItem !== completedItem)
    );
    setCompleteList((prevCompleteList) => [...prevCompleteList, completedItem]);
  };

  // Showing text input upon button click
  const newItemForm = () => {
    setShowTextInput(true);
  };

  // Handle form visibility when focus leaves the form
  const handleFormVisibility = () => {
    setShowTextInput(false);
  };

  return (
    <div className="bg-zinc-900 min-h-screen text-sm flex justify-center w-full selection:bg-zinc-100 selection:text-zinc-900">
      <div className="max-w-screen-md w-full flex flex-col gap-8 p-16">
        <div className="flex flex-row items-center justify-between">
          <h1 className="pl-4 pr-4 text-zinc-200 font-semibold font-sans">
            to.do
          </h1>
          <Button text="add new" onClick={newItemForm}></Button>
        </div>
        <ul className="flex flex-col gap-1">
          {todoList.map((todoItem, index) => (
            <li
              key={index}
              className="flex justify-between items-center h-12 pl-4 pr-4 text-zinc-400 rounded-md hover:bg-zinc-800 hover:text-zinc-200 cursor-pointer focus:bg-zinc-800 focus:text-zinc-200 focus:outline-0"
              onClick={() => handleSubmitComplete(todoItem)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onFocus={() => handleFocus(index)}
              onBlur={handleBlur}
              onKeyDown={(event) => handleKeyDown(event, todoItem)} // Handle keydown event
              tabIndex={0} // Make the <li> focusable
            >
              <p className="truncate max-w-full">{todoItem.text}</p>
              {hoveredItem === index && <Icon name="Check"></Icon>}
            </li>
          ))}
          {showTextInput && (
            <li
              className="flex justify-between items-center h-12 pl-4 pr-4 bg-zinc-800 text-zinc-300 rounded-md "
              onBlur={handleFormVisibility}
            >
              <AddItemForm onSubmit={handleSubmit}></AddItemForm>
            </li>
          )}
        </ul>
        <ul className="flex flex-col gap-1">
          {completeList.map((completeItem, index) => (
            <li
              key={index}
              className="flex justify-between items-center h-12 pl-4 pr-4 text-zinc-600 rounded-md line-through"
            >
              <p className="truncate max-w-full">{completeItem.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
