'use client';
import Link from 'next/link';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
// import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import { FiLogOut } from 'react-icons/fi';

function Dashboard() {
  return (
    <div className='App bg-gradient-to-r from-red-500 to-orange-500'>
      <div className='flex flex-col h-screen  '>
        <nav className='bg-slate-800/40 py-4'>
          <div className='container mx-auto flex justify-between items-center px-4'>
            <div>
              <Link href='/' className='text-white font-bold text-xl'>
                Todo List
              </Link>
            </div>
            <a href='/api/auth/logout'>
              <button
                type='button'
                className='text-white flex gap-2 items-center bg-black px-8 py-2 rounded-md shadow-lg hover:bg-lime-500 hover:text-black'
              >
                Logout
                <FiLogOut />
              </button>
            </a>
          </div>
        </nav>
        {''}
        <div className='container mx-auto px-4 '>
          <div className='flex justify-center items-center mt-8 '>
            <h1 className=' text-white rounded-md  w-1/2 text-center'>
              <AddTodo />
              <TodoList />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default withPageAuthRequired(Dashboard as any);

export default Dashboard;
