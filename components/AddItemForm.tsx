import { useState } from "react";
import { TextInput } from "../components/TextInput.tsx";

export function AddItemForm({ onSubmit }) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = { text };
    onSubmit(newItem);
    setText("");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <fieldset>
        <TextInput
          value={text}
          onChange={handleChange}
          placeholder="add a new to.do"
          className="w-full"
        ></TextInput>
      </fieldset>
    </form>
  );
}
