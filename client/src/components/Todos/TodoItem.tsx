import React from 'react';

interface TodoItemProps {
  text: string;
  isCompleted: boolean;
  id: number;
  onToggleComplete: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ text, isCompleted, id, onToggleComplete }: TodoItemProps) => {
  return (
    <div className="flex w-full items-center">
      <div className="p-5 border-r">
        <input type="checkbox" checked={!!isCompleted} onChange={() => onToggleComplete(id)} />
      </div>
      <div className="p-5">{text}</div>
    </div>
  );
};
