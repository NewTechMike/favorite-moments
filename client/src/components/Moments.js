import React, { useEffect, useState } from "react";

function Moments(){
  const [temp, setTemp] = useState("");
  //console.log(temp)

  useEffect(()=>{
    fetch('/moments')
    .then((r)=>r.json())
    .then((data)=>setTemp(data))
  }, [])

  return(
    <div>
      {temp}
      <h1>Moments</h1>
    </div>
  )
}

export default Moments;