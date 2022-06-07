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
      <h1>Welcome Traveler, </h1> 
      <h1>to Favorite Moments!</h1>
      <p1>Throughout your adventures in Books, Movies, Games, 
        and everything else, your mind must be filled with
        some of your Favorite Moments. Like the Pensieve in Harry Potter, 
        this is a place where you can collect those moments.</p1>
        <br></br>
        <h4>Login if you're returning or SignUp if you're new</h4>
      <button onClick={loginClick}>Login </button>
      <button onClick={signUpClick}>SignUp</button>
    </div>
  )
}

export default Home;