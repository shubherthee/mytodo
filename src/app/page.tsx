"use client";
import { useState } from "react";
import { NewToDoForm } from "./_components/new-todo-form";

type ToDoItem = {
  title: string;
  description: string;
  completed: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<ToDoItem[]>([
    { title: "Example", description: "This is an example", completed: false },
  ]);

  const handleRemove = (index: number) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-screen-md mx-auto p-4 space-y-4 bg-blue-100"> {/* Page background color */}
      <h1 className="text-xl font-bold text-center">To-Do List</h1>
      <ul className="space-y-2">
        {todos.map(({ title, description, completed }, index) => (
          <ToDoItem
            key={index} // Add key prop
            title={title}
            description={description}
            completed={completed}
            onCompleteChanged={(newValue) =>
              setTodos((prev) => {
                const newTodos = [...prev];
                newTodos[index].completed = newValue;
                return newTodos;
              })
            }
            onRemove={() => handleRemove(index)} // Pass onRemove callback
          />
        ))}
      </ul>
      <NewToDoForm
        onCreate={(title, description) => {
          setTodos((prev) => [
            ...prev,
            { title, description, completed: false },
          ]);
        }}
      />
    </div>
  );
}

function ToDoItem({
  title,
  description,
  completed,
  onCompleteChanged,
  onRemove,
}: {
  title: string;
  description: string;
  completed: boolean;
  onCompleteChanged: (newValue: boolean) => void;
  onRemove: () => void; // new prop for removing the to-do item
}) {
  return (
    <li className="flex items-center justify-between gap-2 border rounded p-2 bg-white"> {/* To-do item background color */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => onCompleteChanged(e.target.checked)}
        />
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-blue-300">{description}</p>
        </div>
      </div>
      <button
        className="text-red-400 hover:text-red-600"
        onClick={onRemove}
      >
        Remove
      </button>
    </li>
  );
}
