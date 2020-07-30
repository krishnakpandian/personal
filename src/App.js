import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
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
    <div className="App">
      <Router>
        <Header/>
        <Switch>  
          <Route exact path="/life" >
            <Life/>
          </Route>
          <Route path="/projects">
          <Projects/>
          </Route>
          <Route path="/resume">
          <Resume/>
          </Route>
          <Route path="/">
          <About/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
  }
}

export default App;
