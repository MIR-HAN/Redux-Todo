import { useSelector } from 'react-redux';
import TodoCard from './TodoCard';

const ListTodos = () => {

  const storeState = useSelector((store) => store.todoReducer);

  return (
    <div>
      {storeState.todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ListTodos;
