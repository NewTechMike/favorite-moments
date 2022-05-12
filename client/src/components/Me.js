import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
//import Form from './Form';
import Moments from './Moments'

function Me(){
  const [user, setUser] = useState("")
  const history = useHistory();
 
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [moment, setMoment] = useState("");
 
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
    const obj = {
      title: title,
      category: category,
      moment: moment
    }
    console.log("obj: ", obj)
    fetch("/moments", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
  })
      .then((r)=>r.json())
      .then((data) => console.log(data));
  }

  console.log("title: ",title)

  function handleMomentClick(){
    history.push('/moments');
  }

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
            onChange={(e) => setTitle(e.target.value)}
            /> <br/>
          Category:
          <input 
            type="text" 
            name="category" 
            placeholder="ex: Movie"
            onChange={(e) => setCategory(e.target.value)}
            /> <br/>
          Moment: 
          <textarea 
            type="text" 
            name="title" 
            placeholder="ex: Bullet time"
            onChange={(e) => setMoment(e.target.value)}
            />
        </label> <br/>
        <input 
          type="submit" 
          value="Submit" 
        />
      </form>
      <button onClick={handleMomentClick}>Moments</button>
      </div>
    </div>
  )
}

export default Me;