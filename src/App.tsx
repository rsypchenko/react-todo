import { useReducer, useCallback } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

import { initialTodos, reducer} from './reducer';

function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = useCallback((id: number) => {
    dispatch({ type: "COMPLETE", payload: id });
  }, []);

  const formSubmitHandle = (todo: string) => {
    dispatch({ type: "ADD", payload: todo });
  };

  const handleRemove = (id: number) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <div className="flex justify-center">
      <div className="flex sm:w-full md:w-8/12 lg:w-6/12 xl:w-5/12 flex-col h-screen p-10">
        <Header />
        <Form onSubmit={formSubmitHandle} />
        <List
          todos={todos}
          handleComplete={handleComplete}
          onRemove={handleRemove}
        />
      </div>
    </div>
  );
}

export default App;
