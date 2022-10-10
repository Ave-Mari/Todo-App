import React, { useState, useEffect } from "react";
//import { Reorder } from "framer-motion";
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

  const [current, setCurrent] = useState(null);


  //function to edit document title
  useEffect(() => {
    return document.title = "Todo app 📝"
 }, []);

//function to add properties to object
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setTodo({...todo, [name]:value})
  }

//function to add todo to array of tasks
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task) {
      const newTodo = {...todo, id: new Date().valueOf(), completed: false, order: tasks.length + 1 };
      setTasks([...tasks, newTodo]);
      setTodo({task: ''});
    }
  }

//function to remove todo from list:
  const removeItem = (id) => { 
    console.log('click remove btn')
    const newTasks = tasks.filter((i) =>  i.id !== id);     
    setTasks(newTasks);
  };

//function to set todo checked:
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


  
//functions to run drag-and-drop:
  const dragStartHandler = (e, item) => {
    console.log('drag', item);
    setCurrent(item);
  }

  const dragEndHandler = (e) => {
    e.target.style.background = '#f3f7ff';
  }
  const dragOverHandler = (e) => {
    e.preventDefault();
    e.target.style.background = '#bac9e8';
  }

  const dropHandler = (e, item) => {
    e.preventDefault();
    setTasks(tasks.map(i => {
      if (i.id === item.id) {
        return {...i, order: current.order}
      }
      if (i.id === current.id) {
        return {...i, order: item.order}
      }
      return i;
    }))
    e.target.style.background = '#f3f7ff';
  }

  const sortTodos = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
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

