import React from 'react';
import Greeting from '../Greeting'
import DailyTask from '../DailyTask'
import './Board.scss'
import PropTypes from 'prop-types'


Board.propTypes = {
    taskToday: PropTypes.array,
};

Board.defaultProps = {
    taskToday: [ 
        { id: '1', title: 'Task Header', time: '18:30', notes: ['Hang out', 'See a movie', 'Make a tree !'] },
        { id: '2', title: 'Make to do list every day', time: '19:30', notes: ['Hang out', 'See a movie', 'Make a tree !'] },
        { id: '3', title: 'Make to do list every day Make to do list every day', time: '20:00', notes: ['Hang out', 'See a movie', 'Make a tree !'] },
        { id: '4', title: 'Make to do list every day Make to do list every day ', time: '21:15', notes: ['Hang out', 'See a movie', 'Make a tree !'] },
        { id: '4', title: 'Make to do list every day Make to do list every day ', time: '21:15', notes: ['Hang out', 'See a movie', 'Make a tree !'] },
        { id: '4', title: 'Make to do list every day Make to do list every day ', time: '21:15', notes: ['Hang out', 'See a movie', 'Make a tree !'] },
    ]
}


function Board(props: any) {
    
    const { taskToday } = props;

    return (
        <div className="home-container__task-list flex-board" >
            <Greeting /> 
            <DailyTask tasks={taskToday}/>
        </div>
    );
}

export default Board;