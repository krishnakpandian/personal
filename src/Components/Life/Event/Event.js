import React from 'react';
import imageIndex from '../../Shared/imageIndex';
import './Event.scss';
import Card from 'react-bootstrap/Card';
import Fade from 'react-reveal/Fade';
const Event = (eventObj) => {

    const img = imageIndex(eventObj.data.img);
    return(
        <React.Fragment>
        <div class="event-container">
        <Fade down delay={300} distance={"0.5em"}>
            <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{eventObj.data.name}</Card.Title>
              <Card.Text>
              {eventObj.data.description}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Card.Link href={eventObj.data.links} target="_blank" rel="noopener noreferrer">Link</Card.Link>
            </Card.Footer>
          </Card>
        </Fade>
        </div>
        </React.Fragment>
    );
}

            // <div class = "title">{eventObj.data.name}</div>
            // <img src= {img} alt="error"/>
            // <div class = "description">{eventObj.data.description}</div>
export default Event;