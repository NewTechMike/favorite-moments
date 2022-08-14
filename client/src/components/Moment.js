import React, { useEffect, useState } from "react";


function Moment({momentData, onCount}){
  const [feelings, setFeelings] = useState([]);
  const [fClick, setFClick] = useState(false)

  const [editing, setEditing] = useState(false);
  const [editButton, setEditButton] = useState("Edit");

  const [newMoment, setNewMoment] = useState("");
  
  const [emotion_name, setEmotion_name] = useState({emo: " ", id: ""});

  const [check, setCheck] = useState(false);

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
      },
      setFClick(!fClick)
    ) 
    } else {
      setFClick(!fClick)
    }
  }

    function handleFeelSubmit(e){
      e.preventDefault();
      const id = emotion_name.id

      const feelObj = {emotion_name: emotion_name.emo}
      fetch(`/moments/${id}/feels`, {
        method: "POST", 
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(feelObj)
      })
      .then((r)=>r.json())
      .then((data)=>console.log(data))
      setFClick(!fClick)
      handleFeelClick(id);
      handleFeelClick(id);
      /* console.log("FeelClick: ", fClick)
      console.log("Felt Click: ", emotion_name.emo)
      console.log("Felt Click2: ", emotion_name.id)
      console.log(feelObj) */
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
                  <input
                    type="text"
                    placeholder="ex: happy or 😃"
                    onChange={(e) => setEmotion_name({emo: e.target.value, id: momentData.id})}
                  />
                    : null
                }
                {fClick ? 
                  <button type="submit">Submit Feel</button> : null
                }
                {fClick ?
                  <text type="text">
                    <br></br>
                    "For Emoji Keyboard on Mac: Command-Control-Space"
                  </text> : null
                }
              </form>
              <ul id="feelings">{feelings}</ul>
              
            </div>
        </ul>
    </div>
  )}

  export default Moment;