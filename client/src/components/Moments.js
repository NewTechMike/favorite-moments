import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Feels from './Feels';

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

    function handleMomentEdit(id){
      if(editing === true ){
        fetch(`/moments/${id}`,{
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

    const [felt, setFelt] = useState()
    function handleFeelClick(id){
      console.log("Clicked?: ", id)
      setFelt(<Feels momentId={id}/>)
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
            onChange={(e)=>setNewMoment(e.target.value)}>
            </textarea>
            :`${momentData.moment}`} 
            <br></br>

            <div>
            <button 
            type="button" 
            value={`${felt}`}
            placeholder={"How'd that make you feel?"}
            onClick={()=>handleFeelClick(momentData.id)}>{felt}</button>
          </div>

          <input 
            type="submit" 
            value={`${editButton}`} 
            onClick={() => handleMomentEdit(momentData.id)}>
          </input>
          <button type="button" onClick={() => handleMomentDelete(momentData.id)}>Delete</button>
          <br></br>
        </ul>
      ))}
      
    </div>
  )
}

export default Moments;