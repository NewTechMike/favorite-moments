import React from "react";

function Logout(){

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
    <div style={{float: "right "}}>
      <button type="button" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout;