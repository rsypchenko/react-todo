import React from "react";
import { ListItem } from "./ListItem";

interface Todo {
  id: number
  title: string
  complete: boolean
}

interface Props {
  todos: Todo[],
  handleComplete: (id: number) => void
  onRemove: (id: number) => void
}

export const List = ({ todos, handleComplete, onRemove }: Props) => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full">
        {todos.map((todo) => (
          <ListItem key={todo.id} todo={todo} handleComplete={handleComplete} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};
