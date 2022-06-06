import React, { useState, useEffect} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from './SignUp';
import Home from './Home';
import Login from './Login';
import Me from './Me';
import Moments from './Moments';
import '../App.css';

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(" ");

  useEffect(() => {
    fetch("/me")
    .then((r) => {
      if(r.ok){
        r.json().then((user) => setUser(user));
      }
    });
  }, [])

  useEffect(() => {
    fetch("/hello")
    .then((r) => r.json())
    .then((data) => setCount(data.count));
  }, []);

  function increaseCount(){
    setCount(count + 1)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route exact path="/">
            <h1> Page Count: {count} </h1>
          </Route>
          <Route path="/signup">
            <SignUp setUser={setUser}/>
          </Route>
          <Route path="/login">
            <Login setUser={setUser}/>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path='/me'>
            <Me />
          </Route>
          <Route path='/moments'>
            <Moments 
            key={count}
            onCount={increaseCount}
            username={user.username}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
