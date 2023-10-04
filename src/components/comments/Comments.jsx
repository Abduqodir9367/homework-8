import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Comments.scss";

const Comments = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="container">
        <div className="par">
          <h1>comments</h1>
        </div>
        <div className="comments">
          {data.map((comment, index) => (
            <div className="post" key={index}>
              <h2>{comment.email}</h2>
              <h2>{comment.name}</h2>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Comments;
