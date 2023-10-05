import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

export default function Counter({ nbNotDoneTasks }) {
  return (
    <p className="counter">{nbNotDoneTasks} task(s) in progress</p>
  );
}

Counter.propTypes = {
  nbNotDoneTasks: PropTypes.number.isRequired,
};
