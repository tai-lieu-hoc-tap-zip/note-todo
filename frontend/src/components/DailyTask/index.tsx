import React from 'react';
import PropTypes from 'prop-types';
import './DailyTask.scss';
import Task from '../Task';

DailyTask.propTypes = {
  date: PropTypes.string,
  day: PropTypes.string,
  tasks: PropTypes.array,
  handleActive: PropTypes.func,
};

DailyTask.defaultProps = {
  date: 'Monday 31 August, 2020',
  day: 'Today',
  tasks: [],
  handleActive: null,
};

function DailyTask(props: any) {
  const { date, day, tasks, handleActive } = props;

  function handleDailyTodoList(todo: any) {
    alert(todo);
  }

  function handleActiveTask(id: string, isActive: boolean) {
    if (id && handleActive) {
      handleActive(id, isActive);
    }
  }

  return (
    <div className="flex-board__item ">
      <div className="daily-task">
        <h2 className="daily-task__title">{day}</h2>
        <h5 className="daily-task__sub-title">{date}</h5>
        <div className="daily-task__list-task">
          {tasks.map((item: object, index: string) => (
            <Task
              key={index}
              task={item}
              handleNote={handleDailyTodoList}
              handleIsActive={handleActiveTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DailyTask;
