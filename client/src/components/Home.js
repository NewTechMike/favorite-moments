import React from "react"; 
import { useHistory } from 'react-router-dom';

function Home(){
  let history = useHistory();

  function loginClick(){
    history.push('/login')
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