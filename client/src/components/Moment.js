import React, { useEffect, useState } from "react";


function Moment({momentData, onCount}){
  const [feelings, setFeelings] = useState([]);
  const [fClick, setFClick] = useState(false)

  const [editing, setEditing] = useState(false);
  const [editButton, setEditButton] = useState("Edit");

  const [newMoment, setNewMoment] = useState("");
  
  const [feltClick, setFeltClick] = useState("");

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
    }
  }
  
    function handleFeelSubmit(e){
      e.preventDefault();
      console.log("HandleFeelSubmit triggered")
    }

    function handleFeltClick(e){
      console.log("Feel Click...Clicked", e)
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

              <form onClick={handleFeltClick(feltClick)}>
                {fClick ? 
                  <input
                    type="text"
                    placeholder="For Emoji Keyboard: Command-Control-Space"
                    onChange={(e)=> setFeltClick(e.target.value)}
                  />
                    : null
                }
                {fClick ? 
                  <button type="button" >Feeling?</button> : null
                }
              </form>
              <ul id="feelings">{feelings}</ul>
              
            </div>
        </ul>
    </div>
  )}

  export default Moment;