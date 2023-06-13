import React from 'react';
import { Wrapper } from './Tasks.styles'

export default function Tasks( { tasks, 
    checked,
                                removeItem, 
                                taskChecked, 
                                sortTodos,
                                dragStartHandler, 
                                dragEndHandler, 
                                dragOverHandler, 
                                dropHandler 
                                } ) {
  return (
    <Wrapper>
         {tasks.length <= 0 && (
                  <p className="no-task">There is no task...</p>
                )}
                {tasks.sort(sortTodos).map((item) => {
                  const {id, task, completed} = item;
                  return (
                    <ul 
                      key={id} 
                      draggable={true} 
                      className="todo-list"
                      onDragStart={(e) => dragStartHandler(e, item)}
                      onDragLeave={(e) => dragEndHandler(e)}
                      onDragEnd={(e) => dragEndHandler(e)}
                      onDragOver={(e) => dragOverHandler(e)}
                      onDrop={(e) => dropHandler(e, item)}
                    >
                      <li className="todo-item" >
                        <p className={completed ? 'task-checked' : 'task-unchecked'}>
                          {task}
                          </p> 
                          <div className="todo-checkbox-block">
                            <label className="todo-checkbox-label">
                          <input 
                          type='checkbox' 
                          className="todo-checkbox"
                          checked={checked[id]}
                          onChange={(e) => {   
                          setChecked(e.target.checked);
                          taskChecked(id);
                       }}
                       />
                       </label>
                          </div>
                       
                      <button className="todo-item-btn" onClick={() => 
                      setTimeout(() => {
                        removeItem(id)
                      }, 800)
                        
                        }>
                          🗑️
                          </button>
                      </li>
                      
                    </ul>
                  )
                })}
    </Wrapper>
  )
}
