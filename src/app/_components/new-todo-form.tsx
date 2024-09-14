import { useState } from "react";

type ToDoFormProps = {
  onCreate: (title: string, description: string) => void;
};

export function NewToDoForm({ onCreate }: ToDoFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="flex flex-col gap-2">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label htmlFor="title" className="text-sm font-bold">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 bg-purple-100 border border-purple-300 rounded" // pastel blue
        />
        <label htmlFor="description" className="text-sm font-bold">
          Description
        </label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 bg-pink-100 border border-pink-300 rounded" // pastel pink
        />
        <button
          type="submit"
          className="px-4 py-1 bg-gradient-to-r from-blue-200 to-pink-200 rounded-full text-blue-900 font-bold"
        >
          Create
        </button>
      </form>
    </div>
  );
}
