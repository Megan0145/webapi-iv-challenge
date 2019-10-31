import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./components/User";
import { StyledApp } from "./styles";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    axios
      .get("/api/users")
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (!users) {
    return <p>Loading...</p>;
  }

  return (
    <Router>
      <StyledApp>
        <Navbar users={users}/>
      </StyledApp>
    </Router>
  );
}

export default App;
