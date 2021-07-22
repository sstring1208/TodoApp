import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from '@material-ui/icons/Delete';

import "./TodoList.css";

function TodoList(props) {
  return (
    <div className="Todo">
      <li key={props.index}>
        {props.todo}
        </li>

        <div className="Todo-buttons">
        <EditIcon className="buttons"onClick={() => props.handleEdit(props.index)} />
        <DeleteIcon className="buttons" onClick={() => props.handleRemove(props.index)} />
        
        </div>
       
     
    </div>
  );
}

export default TodoList;
