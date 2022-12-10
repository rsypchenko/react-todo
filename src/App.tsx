import { useReducer, useCallback } from "react";
import Header from "./components/Header";
import Form from "./components/Form/Form";
import List from "./components/List";

interface Todo {
  id: number;
  title: string;
  complete: boolean;
}

type ACTIONTYPE = { type: "COMPLETE"; payload: any } | { type: "ADD"; payload: any } | { type: "REMOVE"; payload: number}

const initialTodos: any = [];

const reducer = (state: typeof initialTodos, action: ACTIONTYPE) => {
  switch (action.type) {
    case "ADD":
      const id = state.length;
      return [...state, {
        id,
        complete: false,
        title: action.payload
      }];
    case "REMOVE":
      return [...state].filter(todo => todo.id !== action.payload);
    case "COMPLETE":
      return state.map((todo: Todo) => {
        if (todo.id === action.payload) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = useCallback((id: number) => {
    dispatch({ type: "COMPLETE", payload: id });
  }, []);

  const formSubmitHandle = (todo: string) => {
    dispatch({ type: "ADD", payload: todo})
  }

  const handleRemove = (id: number) => {
    dispatch({ type: "REMOVE", payload: id});
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col h-screen p-10">
        <Header />
        <Form onSubmit={formSubmitHandle} />
        <List todos={todos} handleComplete={handleComplete} onRemove={handleRemove}/>
      </div>
    </div>
  );
}

export default App;
