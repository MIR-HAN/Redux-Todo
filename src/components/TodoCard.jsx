import Modal from '../components/Modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../store/actions/todoActions';
import api from './../utils/api';

const TodoCard = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  
  // Send the delete action to the reducer
  const handleDelete = () => {
    api
      .delete(`/todos/${todo.id}`)
      .then(() => dispatch(deleteTodo(todo.id)))
      .catch((err) => alert('Sorry, an error occurred'));
  };

  // Toggle the is_done value
  const toggleIsDone = () => {
    // Create a new object with the opposite value of is_done
    const updated = { ...todo, is_done: !todo.is_done };

    api
      .put(`/todos/${todo.id}`, updated)
      // Notify the reducer to update the store
      .then(() => dispatch(updateTodo(updated)))
      .catch(() => alert('Sorry, an error occurred'));
  };

  return (
    <div className="border shadow-lg p-4 my-5">
      <h5>{todo.text}</h5>
      <h6>{todo.is_done ? 'Completed' : 'In Progress'}</h6>
      <p>{todo.created_at}</p>

      <button onClick={() => setIsOpen(!isOpen)} className="btn btn-primary">
        Edit
      </button>
      <button onClick={toggleIsDone} className="btn btn-success mx-3">
        {todo.is_done ? 'Undo' : 'Complete'}
      </button>
      <button onClick={handleDelete} className="btn btn-danger">
        Delete
      </button>

      {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
    </div>
  );
};

export default TodoCard;
