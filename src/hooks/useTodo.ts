import { useEffect, useState } from "react";
import { TodoType } from "../types/TodoType";
import { dummyData } from "../data/todos";

export default function useTodo() {
  const [todos, setTodos] = useState(() => {
    const savedTodo: TodoType[] = JSON.parse(
      localStorage.getItem("todos") || "[]"
    );
    return savedTodo.length > 0 ? savedTodo : dummyData;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleCompletedChange = (id: number, completed: boolean) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  const addTodo = (title: string) => {
    setTodos((prevTodos) => [
      {
        id: prevTodos.length + 1,
        title: title,
        completed: false,
      },
      ...prevTodos,
    ]);
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, newTitle: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  };

  return {
   todos,
   addTodo,
   deleteTodo,
   editTodo,
   handleCompletedChange,
  }
}


