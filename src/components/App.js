
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent from "./ChildComponent";
const App = () => {
 let [todos,settodos] = useState([    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a React app", completed: false },
    { id: 3, text: "Deploy the React app", completed: false }])
    let handleComplete = (id)=>{
      settodos(prev=>prev.map(todo=>todo.id===id ? {...todo, completed:true}:todo))
    }

  return (
    <div>
      <h1>Parent Component</h1>
        {/* Do not remove the main div */}
        <ChildComponent todos={todos} handleComplete={handleComplete}/>       
    </div>
  )
}

export default App
