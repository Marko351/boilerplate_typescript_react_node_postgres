export type TAddNewTodo = { type: string; payload: string };
export type TSetCompletedTodo = { type: string; payload: number };

export type TAllReduxTypes = TAddNewTodo | TSetCompletedTodo;
