export interface ITodo {
  id: number;
  text: string;
  isCompleted: boolean;
}

export interface ITodos {
  todos: ITodo[];
}
