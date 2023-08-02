'use client';
import { FiLogIn } from 'react-icons/fi';

export default function Main() {
  return (
    <main className=''>
      <div className='App bg-gradient-to-r from-red-500 to-orange-500'>
        <div className='flex flex-col h-screen  '>
          <header className=' flex gap-10 justify-between items-center text-2xl sm:text-3xl font-semibold p-2 px-10'>
            <h1>
              <span className='text-indigo-100 bg-slate-800/40 p-5 rounded-lg shadow-2xl'>
                Todo App
              </span>
            </h1>
          </header>
          {/*  */}
          <div className='flex justify-center items-center h-screen'>
            <div className='bg-slate-800/40 p-12 px-28 rounded-lg shadow-lg'>
              <p className='text-white text-lg'>Log in to continue . . .</p>
              <div className='flex flex-row justify-center items-center gap-4  mt-4'>
                <a href='/api/auth/login'>
                  <button className='bg-black flex items-center gap-2 hover:bg-lime-500 hover:text-black text-white  py-2 px-8 text-lg rounded-lg shadow-lg'>
                    Log in
                    <FiLogIn />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
