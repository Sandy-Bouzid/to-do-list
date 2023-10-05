import './styles.scss';
import PropTypes from 'prop-types';

export default function Task({ label, done, id, toggleDoneTask, deleteTask }) {
  return (
    <li>
      <label className={done ? 'list-item list-item--done' : 'list-item'}>
        <input
          type="checkbox"
          id={id}
          checked={done}
          onChange={() => {
            toggleDoneTask(id);
          }}
        />
        {label}
        <button
          type="button"
          className="delete"
          onClick={() => deleteTask(id)}
        >
          x
        </button>
      </label>
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  toggleDoneTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
