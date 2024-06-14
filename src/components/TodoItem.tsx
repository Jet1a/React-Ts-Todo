import { useState } from "react";
import { TodoType } from "../types/TodoType";
import { FiXCircle, FiCheckCircle, FiEdit, FiTrash } from "react-icons/fi";

interface TodoItemProps {
  todo: TodoType;
  onDelete: (id: number) => void;
  onCompletedChange: (id: number, completed: boolean) => void;
  onEdit: (id: number, newTitle: string) => void;
}
const TodoItem = ({
  todo,
  onCompletedChange,
  onDelete,
  onEdit,
}: TodoItemProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEditClick = () => {
    setIsEdit(true);
  };

  const handleSaveEdit = () => {
    onEdit(todo.id, newTitle);
    setIsEdit(false);
  };

  const handleCancelEdit = () => {
    setIsEdit(false);
    setNewTitle(todo.title);
  };

  return (
    <div className="text-itemBorder flex gap-2 border rounded-lg p-4 border-itemBorder text-xl font-bold bg-items hover:bg-gray-800">
      <label className="flex justify-start items-center grow">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
          className="circle-checkbox mr-2 cursor-pointer"
        />
        {isEdit ? (
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="bg-items border-b-2 border-button outline-none mr-2 grow"
          />
        ) : (
          <span className={todo.completed ? "line-through" : "text-itemBorder"}>
            {todo.title}
          </span>
        )}
      </label>
      {isEdit ? (
        <>
          <button title="saveBtn" onClick={handleSaveEdit}>
            <FiCheckCircle className="text-itemBorder text-xl cursor-pointer hover:text-button" />
          </button>
          <button title="cancelBtn" onClick={handleCancelEdit}>
            <FiXCircle className="text-itemBorder text-xl cursor-pointer hover:text-button" />
          </button>
        </>
      ) : (
        <>
          <button title="editBtn" onClick={handleEditClick}>
            <FiEdit className="text-itemBorder text-xl cursor-pointer hover:text-button" />
          </button>
          <button title="deleteBtn" onClick={() => onDelete(todo.id)}>
            <FiTrash className="text-itemBorder text-xl cursor-pointer hover:text-button" />
          </button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
