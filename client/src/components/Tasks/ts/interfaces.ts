export interface ITask {
  id: number;
  text: string;
  isCompleted: boolean;
}

export interface ITasks {
  tasks: ITask[];
}
