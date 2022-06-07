import React, { useState } from "react"
import { useHistory } from "react-router-dom";

function Login ({setUser}){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
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
        setTimeout (() => {
          history.push('/me');
        }, 500);
      } else {
        r.json().then((errorData) => setErrors(errorData.error))
      }
    });
  }

  function handleBackClick(){
    history.push('/home');
  }
 
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <br></br>
        <input 
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          /> <br/>
        <label htmlFor="password">Password</label>
        <br></br>
        <input 
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          /> <br/>
          <ul style={{color: "red"}}>{errors}</ul>
          <button type="submit">Login</button>
          <button type="button" onClick={handleBackClick}>Back</button>
      </form>
    </div>
  )
}

export default Login;