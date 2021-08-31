import React from 'react';
import './App.scss';
import { HashRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
import Resume from "./Components/Resume/Resume.js";
import Life from "./Components/Life/Life.js";
import About from "./Components/About/About.js";
import Projects from "./Components/Projects/Projects.js";

const App = () => {
  return (
    <div class="App">
      <Router>
        <Header/>
        <div class = "body">
        <Switch>  
          <Route path="/life" component = {Life}>
          </Route>
          <Route path="/projects" component = {Projects}>
          </Route>
          <Route path="/resume" component = {Resume}>
          </Route>
          <Route exact path="/" component = {About}>
          </Route>
        </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
