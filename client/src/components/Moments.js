import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Moment from './Moment';

function Moments({onCount, username}){
  const [showMoments, setShowMoments] = useState([""]);
  
  const history = useHistory();

  function handleClick(){
    history.push('/me');
  }
  const [feelMoment, setFeelMoment] = useState();
    
    useEffect(()=>{
      fetch('/moments')
      .then((r)=>r.json())
      .then(setShowMoments)
    }, [])

  return(
    <div>
      <h1>Welcome {username}, to your Favorite Moments</h1>
      <button onClick={handleClick}>Home</button>
      {showMoments.map((momentData)=>(
       <Moment 
          key={momentData.id}
          momentData={momentData} 
          onCount={onCount}
        />
      ))}   
    </div>
  )
}

export default Moments;