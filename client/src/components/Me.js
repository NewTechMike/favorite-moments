import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Moments from './Moments'

function Me(){
  const [user, setUser] = useState("")
  const history = useHistory();
  
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [moment, setMoment] = useState("");
  const [errors, setErrors] = useState([]);
 
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
    fetch("/moments", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
  })
      .then((r)=> {
        if(r.ok) {
          r.json().then((data) => console.log(data));
          setTimeout(()=>{
            history.push('/moments')
          }, 100)
        } else {
          r.json().then((errorData) => setErrors(errorData.errors));
        }
      })
    }

  function handleMomentClick(){
    <Moments username={user.username} />
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
          <br></br>
          <textarea 
            type="text" 
            name="title" 
            placeholder="ex: The Matrix"
            onChange={(e) => setTitle(e.target.value)}
            /> <br/>
          Category:
          <br></br>
          <textarea 
            type="text" 
            name="category" 
            placeholder="ex: Movie"
            onChange={(e) => setCategory(e.target.value)}
            /> <br/>
          Moment: 
          <br></br>
          <textarea 
            type="text" 
            name="title" 
            placeholder=" "
            onChange={(e) => setMoment(e.target.value)}
            />
        </label> <br/>
        {errors.length > 0 && (
        <ul style={{color: "red"}}>
          {errors.map((error)=>(
            <li key={error}>{error}</li>
            ))}
        </ul>
      )}
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