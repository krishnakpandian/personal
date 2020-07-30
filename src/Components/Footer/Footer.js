import React from 'react'
import './Footer.scss';

const Footer = () => {
      return (
        <React.Fragment>
        <div class="footer-container">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <footer>
            <b>Contact Us</b>
            <div class="links">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" class="fa fa-linkedin"> </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" class="fa fa-facebook"> </a>
              <a href="mailto:krishnakpandian@gmail.com" target="_blank" rel="noopener noreferrer"><span>Krishna</span></a>
              <a href="https://twitter.com/"  target="_blank" rel="noopener noreferrer" class="fa fa-twitter"> </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" class="fa fa-github"> </a>
            </div>
        </footer>
        </div>
        </React.Fragment>
      );
  }
 
export default Footer; 