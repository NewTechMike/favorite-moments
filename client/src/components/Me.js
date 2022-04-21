import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Me(){
  const [user, setUser] = useState("")
  const history = useHistory();

  useEffect(()=>{
    fetch('/me')
    .then((r)=>r.json())
    .then((user) => setUser(user))
  }, [])

  function handleLogout(){
    fetch('/logout', {
      method: "DELETE"
    })
    .then((r) => {
    if(r.ok){
      setUser(null);
    }
    });
    history.push('/home')
  }


  return (
    <div>
      <h1>Welcome {user.username}</h1>
      <button type="button" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Me;