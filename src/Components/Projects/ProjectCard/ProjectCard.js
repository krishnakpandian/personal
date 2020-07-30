import React from 'react';
import './ProjectCard.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const ProjectCard = (project) => {
    console.log(project);
    return(
        <React.Fragment>
            <div class="projectCard-container">
            <Card bg={project.data.color} style={{ width: '25vw', height: '25vh' }}>
                <Card.Body>
                    <Card.Title>{project.data.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{project.data.tools.map(tool => {
                        return(
                            <React.Fragment>
                                {tool} &nbsp;
                            </React.Fragment>
                        );
                    })}</Card.Subtitle>
                    <Card.Text>{project.data.description}</Card.Text>
                    <Card.Link href={project.data.link}>Card Link</Card.Link>
                </Card.Body>
            </Card>
            </div>
        </React.Fragment>
    );
}

export default ProjectCard;