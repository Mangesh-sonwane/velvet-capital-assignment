import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);

  return (
    <div className='mt-4 '>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
