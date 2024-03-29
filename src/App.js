import React, { useState, useEffect } from "react";
//import { hot } from 'react-hot-loader/root';
//components
import Loading from './components/Loading/Loading';
import AddTaskForm from "./components/AddTaskFrom/AddTaskForm";
import Tasks from "./components/Tasks/Tasks";
import FilterButtons from "./components/FilterButtons/FilterButtons";


function App() {
  const [loading, setLoading] = useState(true);

  const [todo, setTodo] = useState({
    task: '',
    completed: false
  });    
  const [tasks, setTasks] = useState([]);

  const [sortedTasks, setSortedTasks] = useState(tasks);

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
      setSortedTasks([...tasks, newTodo]);
      setTodo({task: ''});
    }
  }

//function to remove todo from list:
  const removeItem = (id) => { 
    console.log('click remove btn')
    const newTasks = tasks.filter((i) =>  i.id !== id);     
    setTasks(newTasks);
    setSortedTasks(newTasks);
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
    setSortedTasks([...tasks]);
  };

  //show all
  const showAll   = () => {
    setSortedTasks(tasks);
  }

//show active tasks
  const showActive = () => {
    const activeTasks = tasks.filter((item) => {
     return item.completed === false;
    })

    setSortedTasks(activeTasks);
}

//show completed tasks
const showCompleted = () => {
  const completedTasks = tasks.filter((item) => {
    return item.completed === true;
   })

   setSortedTasks(completedTasks); 
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

   if (loading) {
    setTimeout(() => {
      return (
        <main>
          <Loading />
        </main>
      ) 
    }, 6000);
    setLoading(false)
  }
 
    return (
      <>
        <main>
       
          <AddTaskForm 
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              todo={todo}
          />       
          <Tasks 
          todo={todo}
          tasks={tasks}
          checked={checked}
          sortedTasks={sortedTasks}
          removeItem={removeItem}
          taskChecked={taskChecked}
          dragStartHandler={dragStartHandler}
          dragEndHandler={dragEndHandler}
          dragOverHandler={dragOverHandler}
          dropHandler={dropHandler}
          sortTodos={sortTodos}
          
          />

          {sortedTasks.length > 0 ? 
          <FilterButtons 
          showAll={showAll}
          showActive={showActive}
          showCompleted={showCompleted}          
          />
          : 
          null
          }

          
              
       
        </main>
      </>
    );

}

export default App;

