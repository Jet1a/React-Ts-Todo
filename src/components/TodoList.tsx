import { TodoType } from "../types/TodoType";
import TodoItem from "./TodoItem";
interface TodoListProps {
  todos: TodoType[];
  onDelete: (id: number) => void;
  onCompletedChange: (id: number, completed: boolean) => void;
  onEdit: (id:number, newTitle:string) => void;
}

const TodoList = ({ todos, onDelete, onCompletedChange, onEdit }: TodoListProps) => {
  const sortedTodos = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });

  return (
    <>
      <div className="space-y-6 ">
        {sortedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompletedChange={onCompletedChange}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
      {todos.length === 0 && (
        <p className="text-center text-button text-sm">No todo left, add one</p>
      )}
    </>
  );
};

export default TodoList;
