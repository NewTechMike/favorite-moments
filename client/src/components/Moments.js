import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Moments({onCount, username}){
  const [showMoments, setShowMoments] = useState([""]);
  const [newMoment, setNewMoment] = useState("");
  const [editing, setEditing] = useState(false);
  const [editButton, setEditButton] = useState("Edit");
  const history = useHistory();

  function handleClick(){
    history.push('/me');
  }
  
  function handleMomentDelete(id){
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

    function handleMomentEdit(momentData){
      if(editing === true ){
        fetch(`/moments/${momentData.id}`,{
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({moment: newMoment}),
        })
          .then((r) => r.json())
          .then((mData) => console.log("mData: ", mData))
        
          handleEdit()
          setTimeout(() => {
            onCount();
          }, 250);
      } else {   
        handleEdit()
      }
    }

    function handleEdit(){
      setEditing(!editing)
      {editing ? setEditButton("Edit") : setEditButton("Save")}
    }

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
        <ul key={"a" + momentData.id}>
          <p>{momentData.title}, {momentData.category}</p>
          {editing ? 
          <textarea 
            defaultValue={`${momentData.moment}`}
            onChange={(e)=>setNewMoment(e.target.value)}></textarea>
            :`${momentData.moment}`} <br></br>

          <input 
            type="submit" 
            value={`${editButton}`} 
            onClick={() => handleMomentEdit(momentData)}>
          </input>
          <button type="button" onClick={() => handleMomentDelete(momentData.id)}>Delete</button>
          <br></br>
        </ul>
      ))}
    </div>
  )
}

export default Moments;