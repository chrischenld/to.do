import { useState } from "react";

export function TodoList() {
    const [todoList, setTodoList] = useState([]);
    
    const handleSubmit = (newItem) => {
        setTodoList((prevItems) => [...prevItems, newItem])
        setShowTextInput(false);
    }
    
    return (
        <ul>
            {todoList.map((todoItem, index) => (
            <li key={index}>{todoItem.text}</li>
            ))}
      </ul>
    );
}