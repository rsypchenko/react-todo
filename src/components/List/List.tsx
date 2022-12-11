import { ListItem } from "./ListItem";
import { Todo } from '../../reducer';

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
