import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Form from './Form';

function Moments({count, onCount}){
  const [showMoments, setShowMoments] = useState([""]);
  const history = useHistory();
  //console.log("temp: ", temp)

  function handleClick(){
    history.push('/me');
  }
  
  function handleDelete(id){
    fetch(`/moments/${id}`,{
      method: "DELETE",
      headers: {
        'Content-type': 'application/json'
      }
    })
      setTimeout(() => {
        onCount();
      }, 250);
    }

    useEffect(()=>{
      fetch('/moments')
      .then((r)=>r.json())
      .then(setShowMoments)
    }, [])

  return(
    <div>
      <h1>Moments</h1>
      <button onClick={handleClick}>Home</button>
      {showMoments.map((data)=>(
        <ul key={"a" + data.id}>
          <li>{data.id}, {data.title}, {data.category}, {data.moment}</li>
          <button type="button" onClick={() => handleDelete(data.id)}>Delete</button>
        </ul>
      ))}
    </div>
  )
}

export default Moments;