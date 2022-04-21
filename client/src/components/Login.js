import React, { useState } from "react"
import { useHistory } from "react-router-dom";

function Login ({setUser}){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function handleSubmit(e){
    e.preventDefault();
    fetch('/login', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if(r.ok) { 
        r.json().then((user) => setUser(user));
      }
    });
    setTimeout (() => {
    history.push('/me');
  }, 500);
  }
  
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input 
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          /> <br/>
        <label htmlFor="password">Password</label>
        <input 
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          /> <br/>
          <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;