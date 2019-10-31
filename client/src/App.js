import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [ users, setUsers ] = useState(null);
  useEffect(() => {
    axios.get('/api/users')
    .then(res => {
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
    <div className="App">
        <div>
          {users.map(user => {
            return (
              <div key={user.id}>{user.name}</div>
            )
          })}
        </div>
    </div>
  );
}

export default App;
