import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from "react";

interface TodoInputProps {
  onSubmit: (title: string) => void;
}

const TodoInput = ({ onSubmit }: TodoInputProps) => {
  const [input, setInput] = useState("");

  const addTodoTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSubmit(input);
    setInput("");
  };

  return (
    <form className="flex justify-center items-center" onSubmit={addTodoTask}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="write your next task"
        className="rounded-xl grow mx-4 p-3 bg-items border-none my-6 text-lg text-white"
      />
      <button title="submitBtn" type="submit"  className="text-button text-5xl cursor-pointer">
        <AiFillPlusCircle />
      </button>
    </form>
  );
};

export default TodoInput;
