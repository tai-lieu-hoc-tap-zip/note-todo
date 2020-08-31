import React from 'react';
import PropTypes from 'prop-types';
import './Task.scss';
import { ReactComponent as DotIcon } from '../../assert/icon/dots.svg';

Task.propTypes = {
    task: PropTypes.object,
    handleNote: PropTypes.func,
};

Task.defaultProps = {
    task: null, 
    handleNote: null,
}

function Task(props:any) {
    
    const { task, handleNote } = props; 

    function handleNotes(note:string) {
        if (handleNote) {
            handleNote(note);
       }
    }

    return (
        <div className="task-container" >
            <div className="task-container__left"> 
                <DotIcon className="task-container__left__image"></DotIcon>
                <div className="task-container__left__title" >Notes</div>
            </div>
            <div className="task-container__right">
                <div className="task-container__right__title">{task.title}</div>
                <div className="task-container__right__time">{task.time}</div>
                <ul className="task-container__right__notes">
                    {
                        task.notes.map((note:string,index:number) => (
                            <li key={index} onClick={() => handleNotes(note)}>{note}</li>
                        ))
                    }
                </ul>
            </div>
           
          

        </div>
    );
}

export default Task;