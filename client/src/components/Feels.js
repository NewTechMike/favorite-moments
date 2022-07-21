import React, {useEffect, useState} from 'react'

function Feels({momentId}){
  const [feelings, setFeelings] = useState("");
  const [feelMoment, setFeelMoment] = useState();

  console.log("Mo Id: ", momentId)
  useEffect(()=> {
    fetch(`/moments/${momentId}/feels`)
    .then((r) => r.json())
    .then((feelData) =>{ 
      if(feelData.emotion_name){
          setFeelings(feelData.emotion_name)
          console.log(momentId)
        } else {
          console.log("its null")
        }}
      )}, [])

  console.log("Feelings: ", feelings)
  //After adding a field for the user to enter new feeling
  //Throw a conditional if Feeling does not exist, add feel

  return(
    <div>
      <li style={{color: "green"}}>I feel {feelings}</li>
    </div>
  )
}
export default Feels;