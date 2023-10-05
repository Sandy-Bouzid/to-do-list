import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { useRef } from 'react';

export default function Form({ newTaskLabel, setNewTaskLabel, addTask }) {
    const inputRef = useRef();

    return (
        <form
            className="form"
            onSubmit={(e) => {
                e.preventDefault();
                addTask();
            }}
        >
            <input
                type="text"
                ref={inputRef}
                className="form-item"
                placeholder="Add a task"
                value={newTaskLabel}
                onChange={(e) => {
                    setNewTaskLabel(e.target.value);
                }}
            />
        </form>
    );
}

Form.propTypes = {
    newTaskLabel: PropTypes.string.isRequired,
    setNewTaskLabel: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired,
};