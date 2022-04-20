import React from "react"; 
import { useHistory, NavLink, Link } from 'react-router-dom';

function Home(){
  let history = useHistory();

  function loginClick(){
    alert("You Cliked Login")
  }
  function signUpClick(){
    history.push('/signup')
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={loginClick}>Login </button>
      <button onClick={signUpClick}>SignUp</button>
    </div>
  )
}

export default Home;