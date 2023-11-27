import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import CounterWithNameAndSideEffect from "./CounterWithAndSideEffect";
import SearchFilterDemo from "./SearchFilterDemo";
import AddTodo from "./AddTodo";
import ChildComponent from "./ChildComponent";
import TodoList from "./TodoList";
import Welcome from "./Welcome";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: true },
    { id: 3, text: "Take a shower", done: false },
  ]);

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      {/* Uncomment the line below if you have a static image */}
      {/* <img src="logo.svg" className="App-logo" alt="logo" /> */}

      <ChildComponent
        message={
          "Greeting message from the parent component rendered in the child component"
        }
      />

      <Router>
        <Routes>
          <Route exact path="/welcome" element={<Welcome user={"Akash"} />} />

          <Route exact path="/search" element={<SearchFilterDemo />} />

          <Route
            exact
            path="/counter"
            element={
              <>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click me</button>
              </>
            }
          />

          <Route
            exact
            path="/counterWithNameAndSideEffect"
            element={<CounterWithNameAndSideEffect user={"Akash Das"} />}
          />

          <Route
            exact
            path="/todos"
            element={
              <>
                <TodoList todos={todos} setTodos={setTodos} />
                <AddTodo setTodos={setTodos} />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
