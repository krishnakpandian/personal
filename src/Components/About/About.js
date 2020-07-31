import React from 'react';
import "./About.scss";
import Title from "../Shared/Title/Title.js";
import Fade from 'react-reveal/Fade';
import img from '../../Assets/Profile.JPG';
import Card from 'react-bootstrap/Card'
const About = () => {
    return (
        <React.Fragment>
            <div class="about-container">
                <Title title="About" />
                <div class="profile">
                    <Fade down delay={300} distance={"0.5em"}>
                    <div class="img">
                            <img src={img} alt = "error"/>
                        </div>
                        <div class="bio">
                            <div>
                                Hello there! My name is Krishna Pandian, and I am a junior Computer Engineering Major at UC Santa Cruz. 
                            </div>

                            <div>
                                I am super interested in software development, embedded systems, and IOT.
                                I am motivated and passionate about building and learning new things with different tools and technologies.
                            </div>
                            <div>
                                In my free time I love to work on side projects, play board games, and try new foods with friends.
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;