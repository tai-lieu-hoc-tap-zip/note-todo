import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';
Modal.propTypes = {
    task: PropTypes.object,
    submit: PropTypes.func,
    close: PropTypes.func,
}

Modal.defaultProp = {
    task: {
        _id: "",
        title: "",
        body: "",
        author: "",
        createdAt: "",
    },
    submit: null,
    close: null,
}
function Modal(props: any){
    const {submit, close} = props;
    const [taskId, setTaskId] = useState( props.task._id);
    const [taskTitle, setTaskTitle] = useState( props.task.title);
    const [taskAuthor, setTaskAuthor] = useState( props.task.author);
    const [taskBody, setTaskBody] = useState( props.task.body);
    const [tasktCreatedAt, setTaskCreatedAt] = useState( props.task.createdAt);
    function handleAdd(){
        let notes = {
            "title": taskTitle,
            "body": taskBody,
            "author": taskAuthor,
            "createdAt": tasktCreatedAt
        }
        submit(notes, taskId);
    }
    return(
    <div className="popup">
        <div className="popup__inner">
            <div className="popup__inner__item">
                <label> Title: </label>
                <input onChange={event => setTaskTitle(event.target.value)} type="text" value={taskTitle}/>
            </div>
            <div className="popup__inner__item">
                <label> Body: </label>
                <input onChange={event => setTaskBody(event.target.value)} type="text" value={taskBody} />
            </div>
            <div className="popup__inner__item">
                <label> Author: </label>
                <input onChange={event => setTaskAuthor(event.target.value)} type="text" value={taskAuthor}/>
            </div>
            <div className="popup__inner__item">
                <label> Time: </label>
                <input onChange={event => setTaskCreatedAt(event.target.value)} type="text" value={tasktCreatedAt}/>
            </div>
            <div className="popup__inner__button">
                <button onClick={handleAdd}>Submit</button>
                <button onClick={close}>Close</button>
            </div>
        </div>
        

    </div>
    
    );
}
export default Modal;