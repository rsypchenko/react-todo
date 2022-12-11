export interface Todo {
  id: number;
  title: string;
  complete: boolean;
}

type ACTIONTYPE =
  | { type: "COMPLETE"; payload: any }
  | { type: "ADD"; payload: any }
  | { type: "REMOVE"; payload: number };

export const initialTodos: Array<Todo> = [];

export const reducer = (state: typeof initialTodos, action: ACTIONTYPE) => {
  switch (action.type) {
    case "ADD":
      const id = state.length;
      return [
        ...state,
        {
          id,
          complete: false,
          title: action.payload,
        },
      ];
    case "REMOVE":
      return [...state].filter((todo) => todo.id !== action.payload);
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
