import React, { useState, useEffect } from 'react';
import Greeting from '../Greeting';
import DailyTask from '../DailyTask';
import './Board.scss';
import PropTypes from 'prop-types';

Board.propTypes = {
  taskToday: PropTypes.array,
};

Board.defaultProps = {
  taskToday: [
    {
      id: '1',
      title: 'Task Header',
      time: '18:30',
      notes: ['Hang out', 'See a movie', 'Make a tree !'],
      isActive: true,
    },
    {
      id: '2',
      title: 'Make to do list every day',
      time: '19:30',
      notes: ['Hang out', 'See a movie', 'Make a tree !'],
      isActive: true,
    },
    {
      id: '3',
      title: 'Make to do list every day Make to do list every day',
      time: '20:00',
      notes: ['Hang out', 'See a movie', 'Make a tree !'],
      isActive: true,
    },
    {
      id: '4',
      title: 'Make to do list every day Make to do list every day ',
      time: '21:15',
      notes: ['Hang out', 'See a movie', 'Make a tree !'],
      isActive: true,
    },
    {
      id: '5',
      title: 'Make to do list every day Make to do list every day ',
      time: '21:15',
      notes: ['Hang out', 'See a movie', 'Make a tree !'],
      isActive: true,
    },
    {
      id: '6',
      title: 'Make to do list every day Make to do list every day ',
      time: '21:15',
      notes: ['Hang out', 'See a movie', 'Make a tree !'],
      isActive: true,
    },
  ],
};

function Board(props: any) {
  const [taskToday, setTaskToday] = useState(() => {
    return props.taskToday;
  });

  useEffect(() => {}, [taskToday]);

  function handleActive(id: string, isActive: boolean) {
    let tempTask = taskToday.find((task: any) => task.id === id);
    if (tempTask) {
      let newListTask = [...taskToday];
      let index = taskToday.indexOf(tempTask);
      newListTask[index].isActive = !isActive;
      setTaskToday(newListTask);
    }
  }

  return (
    <div className="home-container__task-list flex-board">
      <Greeting />
      <DailyTask tasks={taskToday} handleActive={handleActive} />
      {/* <DailyTask tasks={taskToday} />
            <DailyTask tasks={taskToday}/> */}
    </div>
  );
}

export default Board;
