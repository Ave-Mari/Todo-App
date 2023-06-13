import React from 'react';
import { Wrapper } from './AddTaskFrom.styles'

export default function AddTaskForm( {handleChange, handleSubmit, todo} ) {
  return (
    <Wrapper>
<form onSubmit={handleSubmit} className="form">
              <div className="input-block">
              <input placeholder='Your task to do' type="text" id="task" name="task" value={todo.task} onChange={handleChange} className='add-task-input'/>
              </div>             
              <button type="submit" className="btn-add-task">Add task</button>
    </form>

    </Wrapper>
  )
}
