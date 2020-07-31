import React from 'react'
import { Link } from "react-router-dom";
import './Header.scss';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
      return (
        <React.Fragment>
          <div class="header-container">
            <header>
                <Link to="/"><Button variant="primary">Home</Button></Link>
                <Link to="/life"><Button variant="primary">Life</Button></Link>
                <Link to="/projects"><Button variant="primary">Projects</Button></Link>
                <Link to="/resume"><Button variant="primary">Resume</Button></Link>
            </header>
            </div>
        </React.Fragment>
      );

  }
  
export default Header; 