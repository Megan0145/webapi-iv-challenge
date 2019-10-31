import React from "react";
import { Link, Route } from "react-router-dom";
import Home from "./Home";
export default function Navbar({ users }) {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <main>
        <Route
          exact
          path="/"
          render={props => {
            return <Home users={users} />;
          }}
        />
      </main>
    </div>
  );
}
