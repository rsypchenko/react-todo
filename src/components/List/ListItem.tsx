import React from "react";

interface Todo {
    id: number
    title: string
    complete: boolean
}

interface ListProps {
    todo: Todo
    handleComplete: (id: number) => void
    onRemove: (id: number) => void
}

export const ListItem = React.memo(({ todo, handleComplete, onRemove }: ListProps) => {
  return (
    <div key={todo.id} className={`flex w-full justify-start p-2 mt-2 shadow ${todo.complete ? "bg-slate-200": ""}`}>
      <label className="flex w-full p-2">
        <input
          className="h-6 w-6 rounded-full shadow checked:shadow-xl"
          type="checkbox"
          checked={todo.complete}
          onChange={() => handleComplete(todo.id)}
        />
        <span className="flex-1 ml-2 align-top">{todo.title}</span>
        <button onClick={() => onRemove(todo.id)} className="p-2 border-rounded bg-red-400 text-white uppercase">Delete</button>
      </label>
    </div>
  );
});
