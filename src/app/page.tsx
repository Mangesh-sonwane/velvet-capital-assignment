'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import Main from './components/Main';
import Dashboard from './components/Dashboard';

export default function Home() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <main className=''>{user ? <Dashboard /> : <Main />}</main>;
}
