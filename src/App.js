import React, { useState, useEffect } from "react";
import { hot } from 'react-hot-loader/root';
import Loading from './components/Loading';


function App() {
  const [loading, setLoading] = useState(false);

  const [todo, setTodo] = useState({
    task: '',
    completed: false
  });  
  
  const [tasks, setTasks] = useState([]);

  const [checked, setChecked] = useState(false);

  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setTodo({...todo, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task) {
      const newTodo = {...todo, id: new Date().valueOf(), completed: false };
      setTasks([...tasks, newTodo]);
      setTodo({task: ''});
    }
  }

  const removeItem = (id) => { 
    console.log('click remove btn')
    const newTasks = tasks.filter((i) =>  i.id !== id);     
    setTasks(newTasks);
  };

  const taskChecked = (id) => {
    tasks.map((item) => {
       if (item.id === id) {      
        item.completed = !item.completed;          
       }
       return item;
    }
    ); 
    setTasks([...tasks]);
  }

  //  if (loading) {
  //   return (s
  //     <main>
  //       <Loading />
  //     </main>
  //   ) 
  // }

 
    return (
      <>
        <main>
          <section className="todo-section"> 
          <div className="form-block">
            <form onSubmit={handleSubmit} className="form">
              <div className="input-block">
              <label htmlFor="task" className="task-label">Task</label>
              <input type="text" id="task" name="task" value={todo.task} onChange={handleChange} className='add-task-input'/>
              </div>             
              <button type="submit" className="btn-add-task">Add Task</button>
               </form>
          </div>            
               <article className="article"> 
                {tasks.length <= 0 && (
                  <p className="no-task">There is no task...</p>
                )}
                {tasks.map((item) => {
                  const {id, task, completed} = item;
                  return (
                    <ul key={id} className="todo-list">
                      <li className="todo-item" >
                        <p className={completed ? 'task-checked' : 'task-unchecked'}>
                          {task}
                          </p> 
                          <div className="todo-checkbox-block">
                          <input 
                          type='checkbox' 
                          className="todo-checkbox"
                          checked={checked[id]}
                          onChange={(e) => {   
                          setChecked(e.target.checked);
                          taskChecked(id);

                       }}
                       />
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
               </article>
          </section>
        </main>
      </>
    );

}

export default hot(App);

