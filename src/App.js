import React from 'react';
import './App.css';
import Task from "./Components/Task/Task";
import AddTaskForm from "./Components/Task/AddTaskForm";


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-auto mt-4">
            <h3 className="mainText">To Do List</h3>
            <Task/>
            <AddTaskForm/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
