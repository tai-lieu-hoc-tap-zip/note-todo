import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './DailyTask.scss';
import Task from '../Task';
import Add from '../../assert/logo/plus.png';
import Modal from '../Modal';
DailyTask.propTypes = {
  date: PropTypes.string,
  day: PropTypes.string,
  tasks: PropTypes.array,
  handleActive: PropTypes.func,
  handleDelete: PropTypes.func,
  showAdd: PropTypes.bool,
  dataEdit: PropTypes.object,
  funcModal: PropTypes.bool
};

DailyTask.defaultProps = {
  date: 'Monday 31 August, 2020',
  day: 'Today',
  tasks: [],
  handleActive: null,
  handleDelete: null,
  showAdd: false,
  dataEdit: {       
    _id: "",
    title: "",
    body: "",
    author: "",
    createdAt: "",
  },
  funcModal: false,
};

function DailyTask(props: any) {
   
  const { date, day, handleActive, handleDelete } = props;
  const [tasks, setTasks] = useState(props.tasks)
  const [showAdd, setShowAdd] = useState(false);
  const [dataEdit, setDataEdit] = useState({});
  const [funcModal, setFuncModal] = useState(false);
  useEffect(() => {setTasks(props.tasks)}, [props.tasks]);

  function handleDailyTodoList(todo: any) {
    alert(todo);
  }

  function handleActiveTask(id: string, isActive: boolean) {
    if (id && handleActive) {
      handleActive(id, isActive);
    }
  }
  function handleDeleteTask(id:string){
    handleDelete(id);
  }
  function handleToggleModal(){
      setShowAdd(!showAdd);
  }
  function handleButtonAdd(){
    setDataEdit({});
    setFuncModal(true);
    handleToggleModal();
  }
  async function handleAdd(task: any, id:any){
    let res = await fetch("http://localhost:5000/notes",{
      method: 'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(task)
    });

    res.json().then((res) => {task.id = res.todo._id})
    task.isActive = true;
    setTasks([...tasks,task])

    handleToggleModal();
  }

  function handleButtonEdit(id: string){
    let note =  tasks.find((task:any) => task._id === id);
    let index = tasks.indexOf(note);  
    setDataEdit(tasks[index]);
    setFuncModal(false);
    handleToggleModal();
  }
  async function handleEdit(task:any, id:any){
    let note =  tasks.find((task:any) => task._id === id);
    let index = tasks.indexOf(note);  
    let res = await fetch("http://localhost:5000/notes/"+id,{
      method: 'PUT',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(task)
    });

    let tempTasks = [...tasks];
    tempTasks[index].title = task.title
    tempTasks[index].body = task.body
    tempTasks[index].author = task.author
    tempTasks[index].createdAt = task.createdAt
    setTasks(tempTasks);

    handleToggleModal();
  }
  return (
    <div className="flex-board__item ">
      <div className="daily-task">
        <div className="daily-task__add" onClick={handleButtonAdd}>
            <img  src={Add} alt='Add note' />
        </div>
        {showAdd ? <Modal close={handleToggleModal} task={dataEdit} submit={funcModal ? handleAdd : handleEdit}/> : null}
        <h2 className="daily-task__title">{day}</h2>
        <h5 className="daily-task__sub-title">{date}</h5>

        <div className="daily-task__list-task">
          {tasks.map((item: object, index: string) => (
            <Task
              key={index}
              task={item}
              handleNote={handleDailyTodoList}
              handleIsActive={handleActiveTask}
              handleDelete= {handleDeleteTask}
              handleEdit={handleButtonEdit}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DailyTask;
