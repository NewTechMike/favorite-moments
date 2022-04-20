import React, { useState } from "react";

function SignUp ({setUser}){
  const [username, setUsername] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    fetch('/signup', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
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
      <form submit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="username">Username</label>
        <input 
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SignUp;