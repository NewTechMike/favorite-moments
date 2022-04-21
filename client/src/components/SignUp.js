import React, { useState } from "react";

function SignUp ({setUser}){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
  function handleSubmit(e){
    e.preventDefault();
    fetch('/signup', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if(r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="username">Username: </label>
        <input 
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
        /> <br/>
        <label htmlFor="password">Password: </label>
        <input 
          type="password"
          id="password"
          autoComplete="off"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        /> <br/>
        <label htmlFor="password">Password Confirmation: </label>
        <input 
          type="password"
          id="passwordConfirmation"
          autoComplete="off"
          value={passwordConfirmation}
          onChange={(e)=> setPasswordConfirmation(e.target.value)}
        /> <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;