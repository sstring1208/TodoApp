import React from 'react'
import { Input } from "@material-ui/core";
import { Button } from "@material-ui/core";
import "./NewTodoForm.css";





function NewTodoForm(props) {
    return (
        <div>
            <form className="NewTodoForm" onSubmit={props.addItem}>
            <label htmlFor="task">New todo</label>
            <Input  className="input" onChange={(e) => props.setText(e.target.value)} value={props.text} />
            <Button variant="contained" className="button"
              disabled={!props.text}
              type="submit"
            >
              Add Item
            </Button>
          </form>
        </div>
    )
}

export default NewTodoForm
