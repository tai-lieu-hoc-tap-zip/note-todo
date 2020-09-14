import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Task.scss';
import { ReactComponent as DotIcon } from '../../assert/icon/rec.svg';
import Delete from '../../assert/logo/delete.png'
import Edit from '../../assert/logo/edit.png'
Task.propTypes = {
  task: PropTypes.object,
  handleNote: PropTypes.func,
  handleIsActive: PropTypes.func,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
};

Task.defaultProps = {
  task: null,
  handleNote: null,
  handleIsActive: null,
  handleDelete: null,
  handleEdit: null,
};

function Task(props: any) {
  const { handleNote, handleIsActive, handleDelete, handleEdit } = props;
  const [task, setTask] = useState(() => {
    return props.task;
  });
  const [showAdd, setShowAdd] = useState(false);
  function handleNotes(note: string) {
    if (handleNote) {
      handleNote(note);
    }
  }

  useEffect(() => {}, []);

  function handleActiveTask(id: string, isActive: boolean) {
    if (handleIsActive && id) {
      handleIsActive(id, isActive);
      let tempTask = Object.assign(task);
      tempTask.isActive = !isActive;
      console.log(tempTask);
      setTask(tempTask);
    }
  }

  function handleDel(id:string){
    handleDelete(id);
  }

  function handleEditNote(id: string){
    handleEdit(id);
  }
  return (
    <div
      className="task-container"
      onClick={() => handleActiveTask(task._id, task.isActive)}
    >
      <div className="task-container__left">
        {task.isActive ? (
          <DotIcon className="task-container__left__image"></DotIcon>
        ) : (
          <DotIcon className="task-container__left__image-active"></DotIcon>
        )}
        <div className="task-container__left__title">Info</div>
      </div>
      <div className="task-container__right">
        {task.isActive ? (
          <div className="task-container__right__title">{task.title}</div>
        ) : (
          <div className="task-container__right__title text-remove">
            {task.title}
          </div>
        )}
        <div className="task-container__right__change">
          <div className="task-container__right__change__del">
            <img src={Delete} alt='Delete' onClick={() => handleDel(task._id)} />
          </div>
          <div className="task-container__right__change__edit" >
            <img src={Edit} alt='Edit' onClick={() => handleEditNote(task._id)} />
          </div>
        </div>
        <div className="task-container__right__time">{task.createdAt}</div>
        <ul className="task-container__right__notes">
          {/* {task.notes.map((note: string, index: number) => (
            <li key={index} onClick={() => handleNotes(note)}>
              {note}
            </li>
          ))} */}
          <li>
            {task.body}
          </li>
          <li>
            {task.author}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Task;
