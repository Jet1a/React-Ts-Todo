import { TodoType } from "../types/TodoType";

interface TodoSummaryProps {
  todos: TodoType[];
}

const TodoSummary = ({ todos }: TodoSummaryProps) => {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="flex items-center justify-center gap-10 border rounded-3xl border-itemBorder p-6 max-w-md mx-auto">
      <div className="text-itemBorder ">
        <h1 className="font-bold text-2xl">Todo Done</h1>
        <p className=" text-lg tracking-widest">keep it up</p>
      </div>
      <div className="rounded-full bg-button py-8 px-6 text-center">
        <span className=" text-4xl  font-bold ">
          {completedTodos.length}/{todos.length}
        </span>
      </div>
    </div>
  );
};

export default TodoSummary;
