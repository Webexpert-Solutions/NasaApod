import React from "react";
import "./App.css";
import Navi from "../NavBar/nav";
import Buton from "../Button/buton";
import Apod from "../Apod/apod";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='container'>
      <Router>
        <Route path='/' exact component={Home}></Route>
        <Navi />
        <Switch>
          <Route path='/apod' component={Apod}></Route>
          <Buton />
        </Switch>
      </Router>
    </div>
  );
}

const Home = () => {
  return <div></div>;
};

export default App;
