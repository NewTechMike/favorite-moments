import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
//import Form from './Form';
import Moments from './Moments'

function Me(){
  const [user, setUser] = useState("")
  const history = useHistory();
  const [formData, setFormData] = useState({
    title: "",
    category: " ",
    moment: " "
  }) //Future Self: Make a state out of Each from FD
  // Also, add an onChange in each field of the form
  // "(e)=>onChange(e.target.value)"

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

  function handleSubmit(e){
    e.preventDefault();
    fetch("/moments", {
      method: "POST", 
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({formData})
  })
      .then((r)=>r.json())
      .then((data) => setFormData(data));
  }

  console.log("formD: ",formData)



  return (
    <div>
      <h1>
        Welcome back, {user.username}!
        <div style={{float: "right "}}>
          <button type="button" onClick={handleLogout}>Logout</button>
        </div>
      </h1>
    <div>
      <form onSubmit={handleSubmit} >
        <label>
          Title:
          <input 
            type="text" 
            name="title" 
            placeholder="ex: The Matrix"
            /> <br/>
          Category:
          <input 
            type="text" 
            name="category" 
            placeholder="ex: Movie"
            /> <br/>
          Moment: 
          <textarea 
            type="text" 
            name="title" 
            placeholder="ex: Bullet time"
            />
        </label> <br/>
        <input 
          type="submit" 
          value="Submit" 
        />
      </form>
      </div>
    </div>
  )
}

export default Me;