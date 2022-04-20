//import logo from './logo.svg';
import React, { useState, useEffect} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from './Signup';
import '../App.css';

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);

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

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            <h1> Page Count: {count} </h1>
          </Route>
          <Route path="/signup">
            <SignUp setUser={setUser}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
