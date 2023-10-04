import React from "react";
import "./App.css";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todos from "./components/todos/Todos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </Router>
  );
}

export default App;
