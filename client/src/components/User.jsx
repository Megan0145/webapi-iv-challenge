import React, { useEffect, useState } from "react";
import axios from "axios";

export default function User({ name, id }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/users/${id}/posts`)
      .then(res => {
        setPosts(posts.concat(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  if (!posts) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>{name}</h1>
      <div>
        <h3>Posts: </h3>
        <ul>
          {posts.map(post => {
            return <li key={post.id}>{post.text}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
