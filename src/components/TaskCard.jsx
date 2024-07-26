import React, { useState } from "react";
import "./TaskCard.css";
import deleteIcon from "../assets/delete.png";
import { FiEdit, FiCheck } from "react-icons/fi";

const TaskCard = ({ title, handleDelete, handleEdit, index,task,handleMove }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleDoubleClick = () => {
    setEditMode(true);
  };
  console.log(title)

  const handleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleConfirmEdit = (index) => {
    handleEdit(index, editedTitle);
    setEditMode(false);
  };

  return (
    <div>
      <article className="task-card">
      <div className="task">
        {editMode ? (
          <>
            <input
              type="text"
              value={editedTitle}
              onChange={handleChange}
              className="task-edit-input"
            />
            <FiCheck
              className="edit-icon"
              onClick={() => handleConfirmEdit(index)}
            />
         
          </>
        ) : (
          <>
          <div className="task-view" onDoubleClick={handleDoubleClick}>
            <p className="task-text">{title}</p>
            <FiEdit className="edit-icon" />
          </div>
        
           </>
        )
        
        }
        </div>
        < div className="task">
        {task.status !== "completed" && (
            <button onClick={() => handleMove(task, index)}>Move</button>
          )}
        <div className="task-delete" onClick={() => handleDelete(index)}>
          <img src={deleteIcon} alt="" className="delete-icon" />
        </div>
        </div>
      </article>
    </div>
  );
};

export default TaskCard;
