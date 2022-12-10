import React, { ReactNode, useState } from "react";
import { TextField } from "./TextField";

interface Props {
  onSubmit: (todo: string) => void
}

const Form = ({ onSubmit }: Props) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!todo.length) {
      return;
    }
    onSubmit(todo);
    setTodo("");
  };

  const handleChange = (text: string) => {
    setTodo(text);
  }

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit} className="flex justify-center mt-4">
        <TextField text={todo} onChange={handleChange} />
        <input
          className="border-rounded px-10 py-2 outline-none bg-green-600 text-white shadow-xl"
          type="submit"
          value="ADD"
        ></input>
      </form>
    </div>
  );
};

export default Form;
