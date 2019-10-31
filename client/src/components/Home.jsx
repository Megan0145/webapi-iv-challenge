import React from "react";
import User from "./User";

export default function Home({ users }) {
  return (
    <div>
      <div>
        {users.map(user => {
          return <User key={user.id} name={user.name} id={user.id}/>;
        })}
      </div>
    </div>
  );
}
