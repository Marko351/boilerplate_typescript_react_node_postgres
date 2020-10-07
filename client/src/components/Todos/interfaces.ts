export interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

export interface Todos {
  todos: Todo[];
}
