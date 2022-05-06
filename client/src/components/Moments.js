import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Moments(){
  const [temp, setTemp] = useState([""]);
  const history = useHistory();
  console.log("temp: ", temp)

  useEffect(()=>{
    fetch('/moments')
    .then((r)=>r.json())
    .then(setTemp)
  }, [])
  console.log("Temp ID: ", temp[0].id)

  function handleClick(){
    history.push('/me');
  }

  return(
    <div>
      <h1>Moments</h1>
      <button onClick={handleClick}>Home</button>
      {temp.map((data)=>(
        <ui key={data.id}>
          <li>{data.title}, {data.category}, {data.moment}</li>
          <li></li>
        </ui>
      ))}
    </div>
  )
}

export default Moments;