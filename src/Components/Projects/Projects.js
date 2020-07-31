import React from 'react';
import "./Projects.scss";
import ProjectCard from "./ProjectCard/ProjectCard.js";
import info from "./projects.json";
import Title from '../Shared/Title/Title.js';

const Projects = () => {
    return(
        <React.Fragment>
            <div class="projects-container">
                <Title title="Projects"/>
                
                <div class = "project-list">
                {info.projects.map((project,i) => {
                    return(
                        <ProjectCard data={project}/>
                    );
                }) 
                }
                </div>
            </div>
        </React.Fragment>
    );
}

export default Projects;