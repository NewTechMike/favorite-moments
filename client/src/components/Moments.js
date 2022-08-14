import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Moment from './Moment';

function Moments({onCount, username, setUser}){
  const [showMoments, setShowMoments] = useState([""]);
  const history = useHistory();
  
    useEffect(()=>{
      fetch('/moments')
      .then((r)=>r.json())
      .then(setShowMoments)
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

  return(
    <div>
      <div style={{float: "right "}}>
        <button type="button" onClick={handleLogout}>Logout</button>
      </div>
      <h1>Welcome {username}, to your Favorite Moments</h1>  
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