import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function SignUp ({setUser}){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([])
  const history = useHistory();
  
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
    })
      .then((r) => {
        if(r.ok){
          r.json().then((user) => setUser(user))
          setTimeout (() => {
            history.push('/me');
          }, 500);
        }else {
          r.json().then((errorData) => setErrors(errorData.errors))
        }
      })
  }

  function handleBackClick(){
    history.push('/home');
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1> 
        <br></br>
        <label htmlFor="username">Username: </label>
        <br></br>
        <input 
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
        /> <br/>
        <label htmlFor="password">Password: </label>
        <br></br>
        <input 
          type="password"
          id="password"
          autoComplete="off"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        /> <br/>
        <label htmlFor="password">Password Confirmation: </label>
        <br></br>
        <input 
          type="password"
          id="passwordConfirmation"
          autoComplete="off"
          value={passwordConfirmation}
          onChange={(e)=> setPasswordConfirmation(e.target.value)}
        /> <br/>
      {errors.length > 0 && (
        <ul style={{color: "red"}}>
          {errors.map((error)=>(
            <li key={error}>{error}</li>
            ))}
        </ul>
      )}
      <button type="submit">Submit</button>
      <button type="button" onClick={handleBackClick}>Back</button>
      </form>
    </div>
  );
}

export default SignUp;