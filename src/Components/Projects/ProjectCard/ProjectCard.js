import React from 'react';
import './ProjectCard.scss';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Fade from 'react-reveal/Fade';

const ProjectCard = (project) => {
    console.log(project);
    return (
        // <React.Fragment>
        //     <div class="projectCard-container">
        //     <Card bg={project.data.color} style={{ width: '25vw', height: '50vh' }}>
        //         <Card.Body>
        //             <Card.Title>{project.data.name}</Card.Title>
        //             <Card.Subtitle className="mb-2 text-muted">Tools: {project.data.tools.map(tool => {
        //                 return(
        //                     <React.Fragment>
        //                         {tool} &nbsp;
        //                     </React.Fragment>
        //                 );
        //             })}</Card.Subtitle>
        //             <Card.Text>{project.data.description}</Card.Text>
        //             <Card.Link href={project.data.link}>Card Link</Card.Link>
        //         </Card.Body>
        //     </Card>
        <React.Fragment>
            <div class="projectCard-container">
            <Fade down delay={300} distance={"0.5em"}>
                <Card>
                    <Card.Body>
                        <Card.Title>{project.data.name}</Card.Title>
                        <Card.Text>
                            {project.data.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        {project.data.tools.map(tool => {
                            return (
                                <React.Fragment>
                                    <ListGroup.Item>
                                        {tool}
                                </ListGroup.Item>
                                </React.Fragment>
                            );
                        })}
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href={project.data.link} target="_blank" rel="noopener noreferrer">Project Link</Card.Link>
                    </Card.Body>
                </Card>
                </Fade>
            </div>
        </React.Fragment>
    );
}

export default ProjectCard;