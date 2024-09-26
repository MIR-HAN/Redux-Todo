import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../store/actions/todoActions';
import api from '../utils/api';

const Modal = ({ close, todo }) => {
  const inputRef = useRef();

  const dispatch = useDispatch();

  const handleClick = (e) => {
    // 1) Get the value from the input field
    const newText = inputRef.current.value;

    // 2) Update the title value of the todo object
    const updatedTodo = {
      ...todo,
      text: newText,
      created_at: new Date().toLocaleDateString(),
    };

    // 3) Save the updated data to the API
    api
      .put(`/todos/${todo.id}`, updatedTodo)
      // 4) Notify the reducer that the item will be updated
      .then(() => dispatch(updateTodo(updatedTodo)))
      // 5) Show an alert in case of an error
      .catch((err) => alert('Sorry, an error occurred'));

    // 5) Close the modal
    close();
  };

  return (
    <div className="modal bg-black d-block text-dark bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Update Todo</h5>
          </div>

          <div className="modal-body my-2">
            <label>New Title</label>
            <input
              ref={inputRef}
              defaultValue={todo.text}
              className="form-control shadow mt-2"
              type="text"
            />
          </div>

          <div className="modal-footer">
            <button
              onClick={handleClick}
              type="button"
              className="btn btn-primary"
            >
              Save
            </button>
            <button onClick={close} type="button" className="btn btn-secondary">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
