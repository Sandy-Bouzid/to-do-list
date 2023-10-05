import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './styles.scss';

export default function Tasks({ tasksList, toggleDoneTask, deleteTask }) {
  return (
    <ul className="list">
      {tasksList.map((item) => <Task key={item.id} {...item} toggleDoneTask={toggleDoneTask} deleteTask={deleteTask} />)}
    </ul>
  );
}

Tasks.propTypes = {
  tasksList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  toggleDoneTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
