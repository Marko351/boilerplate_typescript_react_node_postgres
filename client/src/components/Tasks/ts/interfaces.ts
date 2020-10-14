export interface ITask {
  id: number;
  taskName: string;
  description: string;
  dueDate: Date;
  priority: number;
  checklist: Array<IChecklist>;
  isCompleted: boolean;
}

export interface ITasks {
  tasks: ITask[];
}

export interface IChecklist {
  title: string;
  isCompleted: boolean;
}
