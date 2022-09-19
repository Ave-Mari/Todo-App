import React, { useState, useEffect } from "react";
import { hot } from 'react-hot-loader/root';
import Loading from './components/Loading';



function App() {
  const [loading, setLoading] = useState(false);
  const [todo, setTodo] = useState({});

  const [doneTaskStyle, setDoneTaskStyle] = useState('');
  
  const [tasks, setTasks] = useState([]);

  



  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setTodo({...todo, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task) {
      const newTodo = {...todo, id: tasks.length + 1, done: false};
      setTasks([...tasks, newTodo]);
      setTodo({task: ''});
      console.log(tasks);
    }
  }

  const removeItem = (id) => { 
    console.log('click remove btn')
    const newTasks = tasks.filter((i) =>  i['id'] !== id);    
    setTasks(newTasks);
    console.log('after removing item:' + newTasks);    
  }

  const taskIsDone = (id) => {
    console.log('click done btn');
    tasks.filter((i) => {      
      if (i['id'] === id) {
       i['done'] = true;
     //console.log('merge prop:' + newTask);
       
      }
    })
    
  }

  useEffect(() => {
    if (todo.done) {
      setDoneTaskStyle('line-through');
    }  //else {
      //document.querySelector('.todo-item').style.cssText = 'text-decoration: none;';
   // }
   
  }, [doneTaskStyle]);
  
  

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    ) 
  }
 
    return (
      <>
        <main>
          <section className="todo-section"> 
            <form onSubmit={handleSubmit}>
              <label htmlFor="task">Task</label>
              <input type="text" id="task" name="task" value={todo.task} onChange={handleChange}/>
              <button type="submit">Add Task</button>
               </form>
               <article> 
                {tasks.map((item) => {
                  const {id, task} = item;
                  return (
                    <ul key={id} className="todo-list">
                      <li className="todo-item" style={{textDecoration: doneTaskStyle}}>{task}</li>
                      <button onClick={() => removeItem(id)}>🗑️</button>
                      <button onClick={() => taskIsDone(id)}>✅</button>
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
