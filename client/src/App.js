import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './components/User';
import { StyledApp } from './styles';
import Navbar from './components/Navbar';

function App() {
  const [ users, setUsers ] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:4000/api/users')
    .then(res => {
      console.log(res.data)
      setUsers(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[])

  if(!users){
    return <p>Loading...</p>
  }

  return (
    <StyledApp>
      <Navbar />
        <div>
          {users.map(user => {
            return (
              <User key={user.id} name={user.name}/>
            )
          })}
        </div>
    </StyledApp>
  );
}

export default App;
