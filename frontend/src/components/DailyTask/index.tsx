import React from 'react';
import PropTypes from 'prop-types';
import './DailyTask.scss'
import Task from '../Task'

DailyTask.propTypes = {
    date: PropTypes.string,
    day: PropTypes.string,
    tasks: PropTypes.array,
};

DailyTask.defaultProps = {
    date: 'Monday 31 August, 2020',
    day: 'Today',
    tasks: [],
}

function DailyTask(props: any) {

    const { date, day, tasks } = props;

    function handleDailyTodoList(todo:any) {
        alert(todo);
    }

    return (
        <div className="flex-board__item ">
            <div className="daily-task">
                <h2 className="daily-task__title" >{day}</h2>
                <h5 className="daily-task__sub-title" >{date}</h5>
                <div className="daily-task__list-task">
                    {
                        tasks.map((item: object,index: number) => (
                            <Task key={index} task={item} handleNote={handleDailyTodoList}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default DailyTask;