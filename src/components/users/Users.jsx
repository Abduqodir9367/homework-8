import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Users.scss";
import { NavLink } from "react-router-dom";

const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data))

      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="container">
        <div className="par">
          <h1>Users</h1>
        </div>
        <div className="users">
          {data.map((user, index) => (
            <div className="user" key={index}>
              <h3>{user.name}</h3>
              <h4>{user.username}</h4>
              <div className="user-body">
                <p>
                  Email: <a href="#">{user.email}</a>
                </p>
                <p>
                  Website: <a href="#">{user.website}</a>
                </p>
                <p>
                  Address:{" "}
                  <a href="#">
                    {user.address.city}, {user.address.street}
                  </a>
                </p>
                <p>
                  Phone: <a href="#">{user.phone}</a>
                </p>
              </div>

              <div className="btns">
                <NavLink to="posts">
                  <button className="btn1">Posts</button>
                </NavLink>
                <NavLink to="todos">
                  <button className="btn1">Todos</button>
                </NavLink>
                <button className="btn1">Album</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Users;
