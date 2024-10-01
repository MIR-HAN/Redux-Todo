import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions/todoActions';
import api from '../utils/api';
import { toast } from 'react-toastify';

const AddForm = () => {
  // This allows us to use the dispatch method within this component
  const dispatch = useDispatch();

  // When the form is submitted:
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data to be saved to the store
    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date().toLocaleDateString(),
    };

    // Save the data to the API
    const promise = api
      .post('/todos', newTodo)
      // If the request is successful, save the data to the store
      .then(() => dispatch(addTodo(newTodo)))
      // If the request fails
      .catch((err) => {
        throw new Error();
      });

    // Display toast notifications for the API request
    toast.promise(promise, {
      pending: 'Loading new todo',
      success: 'Todo successfully added 👌',
      error: 'There was an issue adding the todo 🤯',
    });

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input
        className="form-control"
        placeholder="e.g., TypeScript project"
        type="text"
      />

      <button className="btn btn-warning">Add</button>
    </form>
  );
};

export default AddForm;
