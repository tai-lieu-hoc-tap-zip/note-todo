import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Task.scss';
import { ReactComponent as DotIcon } from '../../assert/icon/rec.svg';

Task.propTypes = {
    task: PropTypes.object,
    handleNote: PropTypes.func,
    handleIsActive: PropTypes.func,
};

Task.defaultProps = {
    task: null, 
    handleNote: null,
    handleIsActive: null,
}

function Task(props:any) {
    
    const { handleNote, handleIsActive } = props; 
    const [ task, setTask ] = useState(() => { return props.task });

    function handleNotes(note:string) {
        if (handleNote) {
            handleNote(note);
       }
    }

    useEffect(() => {
        

    }, []);

    function handleActiveTask(id: string, isActive: boolean) { 
        if (handleIsActive && id) {
            handleIsActive(id, isActive);
            let tempTask = Object.assign(task);
            tempTask.isActive = !isActive;
            console.log(tempTask);
            setTask(tempTask); 
       }
    }

    return (
        <div className="task-container" onClick={() => handleActiveTask(task.id,task.isActive)}> 
            <div className="task-container__left"> 
                {task.isActive ?
                    <DotIcon className="task-container__left__image"></DotIcon>
                    :<DotIcon className="task-container__left__image-active"></DotIcon>
                }  
                <div className="task-container__left__title" >Notes</div>
            </div>
            <div className="task-container__right">
                {task.isActive ?
                    <div className='task-container__right__title'>{task.title}</div>
                    :<div className='task-container__right__title text-remove'>{task.title}</div>
                } 
                <div className='task-container__right__time'>{task.time}</div>
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