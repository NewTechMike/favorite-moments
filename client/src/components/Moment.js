import React, { useEffect, useState } from "react";


function Moment({momentData, onCount}){
  const [feelings, setFeelings] = useState([]);
  const [fClick, setFClick] = useState(false)

  const [editing, setEditing] = useState(false);
  const [editButton, setEditButton] = useState("Edit");

  const [newMoment, setNewMoment] = useState("");
  
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

  function handleFeelClick(id){
    if(fClick === false){
    fetch(`/moments/${id}/feels`)
    .then((r) => r.json())
    .then((feelData) => {
      setFeelings(feelData.map((obj) => <li key={obj.id}>{obj.emotion_name}</li>))
      console.log("feelData: ", feelData)},
      setFClick(!fClick)
    ) 
    } else {
      setFClick(!fClick)
      console.log("fClick: ", fClick)
    }
  }
    console.log("Moment f: ", feelings)
    function handleFeelSubmit(){
      console.log("HandleFeelSubmit triggered")
    }
    
  return(
    <div>
       <ul key={"a" + momentData.id}>      
          <p>{momentData.title}, {momentData.category}</p>
          {editing ? 
          <textarea 
            defaultValue={`${momentData.moment}`}
            onChange={(e)=>setNewMoment(e.target.value)}>
          </textarea>
            :`${momentData.moment}`
          } 
            <br></br>
            
            <input 
            type="submit" 
            value={`${editButton}`} 
            onClick={() => handleMomentEdit(momentData.id)}>
           </input>  
         
          <button type="button" onClick={() => handleMomentDelete(momentData.id)}>Delete</button>
          <br></br>

            <div>
              <button 
              type="button"
              value={feelings}
              onClick={()=> handleFeelClick(momentData.id)}>How'd You feel?
              </button>
              <br></br>

              <form onSubmit={handleFeelSubmit}>
              {fClick ? 
                  <textarea
                    type="submit"
                    placeholder="For Emoji Keyboard:  Command-Control-Space"
                    onSubmit={(e)=> console.log(e.target.value)}
                    ></textarea>
                    : null
              }
                </form>
              <ul id="feelings">{feelings}</ul>
              
            </div>
        </ul>
    </div>
  )}

  export default Moment;