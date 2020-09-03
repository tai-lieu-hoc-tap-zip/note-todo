import React from 'react';
import PropTypes from 'prop-types';
import './Greeting.scss';

Greeting.propTypes = {
  numberTask: PropTypes.number,
  numberTaskPending: PropTypes.number,
  greeting: PropTypes.string,
  name: PropTypes.string,
  subTitle: PropTypes.string,
};

Greeting.defaultProps = {
  numberTask: 7,
  numberTaskPending: 2,
  greeting: 'Hello',
  name: 'Tamaki',
  subTitle: "Let's get started with your day",
};

function Greeting(props: any) {
  const { numberTask, numberTaskPending, greeting, name, subTitle } = props;

  return (
    <div className="flex-board__item ">
      <div className="greeting">
        <h1 className="greeting__title">
          {greeting} {name} !!
        </h1>
        <h5 className="greeting__sub-title">{subTitle}</h5>
        <br></br>
        <h3 className="greeting__content">
          You have{' '}
          <div className="greeting__content__number-task"> {numberTask} </div>{' '}
          tasks for today and{' '}
          <div className="greeting__content__number-task-pending">
            {' '}
            {numberTaskPending}{' '}
          </div>{' '}
          pending tasks from yesterday
        </h3>
      </div>
    </div>
  );
}

export default Greeting;
