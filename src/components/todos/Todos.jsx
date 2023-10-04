import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Todos.scss";
const Todos = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="container">
        <div className="par">
        <h1>Todos</h1>

        </div>
        <div className="todos">
          {users.map((todo, index) => (
            <div className="todo" key={index}>
              <p>{todo.title}</p>
              <p>{todo.completed ? "✅" : "❌"}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todos;
