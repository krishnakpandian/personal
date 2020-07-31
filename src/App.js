import React, {Component} from 'react';
import './App.scss';
import { HashRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
import Resume from "./Components/Resume/Resume.js";
import Life from "./Components/Life/Life.js";
import About from "./Components/About/About.js";
import Projects from "./Components/Projects/Projects.js";

class App extends Component {
  constructor(props){
    super(props);
  }

  render () {
  return (
    <div class="App">
      <Router basename = "/personal">
        <Header/>
        <div class = "body">
        <Switch>  
          <Route exact path="/life" >
            <Life/>
          </Route>
          <Route exact path="/projects">
          <Projects/>
          </Route>
          <Route exact path="/resume">
          <Resume/>
          </Route>
          <Route exact path="/">
          <About/>
          </Route>
        </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
  }
}

export default App;
