import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const myname = "Lauren";

  const toDoList = [
    {
      id: 1,
      title: "Homework",
      description: "Have to complete lecture notes",
    },
    {
      id: 2,
      title: "Work",
      description: "Have to print off reports",
    },
    {
      id: 3,
      title: "Apartment Work",
      description: "Need to clean kitchen",
    },
  ];

  const taskManager = () => {
    const int = Math.floor(Math.random() * 3);
    return toDoList[int].title;
  }
return (
  <div className="App">
  <h1>This is my First React APP </h1>
  <>Hello {myname} you have a task of <h3>{taskManager()}</h3> to complete.
  </>
  </div>
  );
//   return React.createElement(
//     "div", 
//     {id: "hello", className: "dummyclass"}, 
//     React.createElement("h1", null, "Hello World" ),
//     React.createElement("h2", null, "this is H2" )
//   );
}

export default App;
