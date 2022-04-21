import React, { useState, useEffect } from "react";

function Me(){
  const [user, setUser] = useState("")

  useEffect(()=>{
    fetch('/me')
    .then((r)=>r.json())
    .then((user) => setUser(user))
  }, [])

  return (
    <div>
      <h1>Welcome {user.username}</h1>
    </div>
  )
}

export default Me;