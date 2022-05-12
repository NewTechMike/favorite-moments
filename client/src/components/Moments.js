import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Moments(){
  const [temp, setTemp] = useState([""]);
  const history = useHistory();
  //console.log("temp: ", temp)

  useEffect(()=>{
    fetch('/moments')
    .then((r)=>r.json())
    .then(setTemp)
  }, [])

  function handleClick(){
    history.push('/me');
  }

  function handleDelete(id){
    fetch(`/moments/${id}`,{
      method: "DETELE"
    })
  }

  return(
    <div>
      <h1>Moments</h1>
      <button onClick={handleClick}>Home</button>
      {temp.map((data)=>(
        <ul key={data.id}>
          <li>{data.title}, {data.category}, {data.moment}</li>
          <button onClick={handleDelete}>Delete</button>
        </ul>
      ))}
    </div>
  )
}

export default Moments;