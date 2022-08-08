import React, {useEffect, useState} from 'react'

function Feels({momentId}){
  



  const [feelMoment, setFeelMoment] = useState();
  const [felt, setFelt] = useState()
//  function handleFeelClick(id){

//console.log("Mo Id: ", id)
//useEffect(()=> {
  //fetch(`/moments/${id}/feels`)
  //.then((r) => r.json())
  //.then((feelData) =>{ 
    //if(feelData.emotion_name){
        //setFeelings(feelData.emotion_name)
        //console.log("Feelings: ", feelings)
      //} else {
     //   console.log("its null")
   //   }}
  //  )}, [])
 // }



      //Possible Idea to fix same feel showing for all moments:
      //Either get all Feels and send it as state to Moments
      //or find another way to .map each field to the moments (Not sure how or if possible)
  //console.log("Feelings: ", feelings)
  //After adding a field for the user to enter new feeling
  //Throw a conditional if Feeling does not exist, add feel

  return(
    <div>
      <li style={{color: "green"}}>I feel feelings</li>
    </div>
  )
}
export default Feels;