import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/todoSlice';

const AddTodo: React.FC = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
      };
      dispatch(addTodo(newTodo));
      setText('');
    }
  };

  return (
    <form className='mt-4' onSubmit={handleSubmit}>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Enter todo...'
        className='mr-4 px-12 py-3 border w-96 border-white bg-zinc-900 text-white rounded-md outline-none shadow-2xl'
      />
      <button
        type='submit'
        className='p-3 bg-black text-white rounded-md px-8 shadow-2xl border hover:bg-lime-500 hover:text-black'
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
