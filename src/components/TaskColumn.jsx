import React from 'react'
import './TaskColumn.css'
import TaskCard from './TaskCard'
const TaskColumn = ({sectionName,icon,status,tasks,handleDelete,handleEdit,handleMove}) => {
  return (
    <div>
       <section className="task-column">
        <h2 className='task-column-heading'>
        <img className="task-column-icon" src={icon} alt="" />
      {sectionName}
        </h2>
     
        {
            tasks.map((task,index)=>task.status === status && 
            <TaskCard key={index} title={task.task}  handleDelete={handleDelete} handleEdit={handleEdit} index={index} handleMove={handleMove} task={task}/>
        )
        }
       </section>
    </div>
  )
}

export default TaskColumn
