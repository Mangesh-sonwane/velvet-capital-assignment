import React from 'react';
import { useDispatch } from 'react-redux';
import { Todo, toggleTodo, deleteTodo } from '../Redux/todoSlice';
import { BsFillTrash3Fill } from 'react-icons/bs';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className='flex items-center justify-between border mt-2 border-gray-500 bg-black rounded-md py-3  px-4'>
      <div
        className={`cursor-pointer ${
          todo.completed ? 'line-through text-gray-500' : 'text-white'
        }`}
        onClick={handleToggle}
      >
        {todo.text}
      </div>
      <button
        className='border bg-zinc-900  text-red-500	px-6 py-2 rounded-md font-semibold hover:bg-red-800 hover:text-white'
        onClick={handleDelete}
      >
        <BsFillTrash3Fill className='text-white' />
      </button>
    </div>
  );
};

export default TodoItem;
