import React from 'react';
import Counter from '../Counter';
import Tasks from '../Tasks';
import Form from '../Form';
import './styles.scss';
import data from '../../data/tasks';
import { useState, useEffect} from 'react'
import Header from '../Header';
import Footer from '../Footer';


export default function App() {
  const [tasksList, setTasks] = useState(JSON.parse(localStorage.getItem("tasks") || "[]"));
  const [newTaskLabel, setNewTaskLabel] = useState('');

  useEffect(() => {
    console.log(tasksList);
    localStorage.setItem("tasks", JSON.stringify(tasksList));
  }, [tasksList]);

  const generateNewId = () => {

    if (tasksList.length === 0) {
      return 1;
    }

    const idList = tasksList.map((task) => task.id);
    const higherId = Math.max(...idList);
    return higherId + 1;
  }

  const addTask = () => {

    const newTask = {
      done: false,
      id: generateNewId(),
      label: newTaskLabel,
    };

    setTasks([
      ...tasksList,
      newTask
    ]);

    setNewTaskLabel('');
  }

  const toggleDoneTask = (idTaskToChange) => {

    const tasksListCopy = tasksList.map(
      (task) => (task.id === idTaskToChange ? { ...task, done: !task.done } : task),
    );

    setTasks(tasksListCopy);
  }

  const deleteTask = (idTaskToDelete) => {

    setTasks(tasksList.filter(
      (task) => task.id !== idTaskToDelete),
    );
  }

  const notDoneTasks = tasksList.filter((task) => !task.done);
  const doneTasks = tasksList.filter((task) => task.done);
  const sortedTasks = [...notDoneTasks, ...doneTasks];

  return (
    <div className="app">
      <Header />
      <Form
        newTaskLabel={newTaskLabel}
        setNewTaskLabel={setNewTaskLabel}
        addTask={addTask}
      />
      <Counter nbNotDoneTasks={notDoneTasks.length} />
      <Tasks
        tasksList={sortedTasks}
        toggleDoneTask={toggleDoneTask}
        deleteTask={deleteTask}
      />
      <Footer />
    </div>
  );
}


