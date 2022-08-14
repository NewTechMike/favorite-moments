import React from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";


function NavBar(){
  return(
    <div>
      <NavLink 
        to="/home"
        activeStyle={{
          background: "darkblue",
        }}
      >
        <button type="button">
          Home
        </button>
      </NavLink>
      <NavLink 
        to="/moments"
      >
        <button type="button">
          Moments
        </button>
      </NavLink>
      <NavLink
        to="/me"
      >
        <button type="button">
          New Moment
        </button>
      </NavLink>
    </div>
  )
}

export default NavBar;