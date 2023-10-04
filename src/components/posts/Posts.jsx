import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Posts.scss";
import { Outlet } from "react-router-dom";

const Posts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data))

      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="container">
        <div className="par">
          <h1>Posts</h1>
        </div>
        <div className="posts">
          {data.map((post, index) => (
            <div className="post" key={index}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <button>Comments</button>
            </div>
          ))}
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Posts;
