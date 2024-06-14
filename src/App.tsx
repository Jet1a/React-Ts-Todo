import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodo from "./hooks/useTodo";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  const { todos, addTodo, deleteTodo, editTodo, handleCompletedChange } =
    useTodo();

  return (
    <main className="bg-background min-h-screen font-custom ">
      <Navbar />
      <TodoSummary todos={todos} />
      <div className="max-w-lg mx-auto rounded-md p-5">
        <TodoInput onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onDelete={deleteTodo}
          onCompletedChange={handleCompletedChange}
          onEdit={editTodo}
        />
      </div>
    </main>
  );
};

export default App;
