import React from 'react';

interface TodoItemProps {
  text: string;
  isCompleted: boolean;
  id: number;
}

export const TodoItem: React.FC<TodoItemProps> = ({ text, isCompleted }) => {
  return (
    <div className="flex w-full items-center">
      <div className="p-5 border-r">
        <input type="checkbox" checked={!!isCompleted} onChange={() => {}} />
      </div>
      <div className="p-5">{text}</div>
    </div>
  );
};
