import React from 'react';
import imageIndex from '../../../Assets/imageIndex';
const Event = (eventObj) => {

    // const images = {
    //     "CruzHacks_2020": require("../../../Assets/CruzHacks_2020.JPG"),
    //     "Hackathons": require("../../../Assets/Hackathons.JPG"),
    //     "SASE_WRC": require("../../../Assets/SASE_WRC.jpeg")
    // }
    // const img = images[eventObj.data.img];
    const img = imageIndex(eventObj.data.img);
    return(
        <React.Fragment>
        <div class="event-container">
            <div class = "title">{eventObj.data.name}</div>
            <img src= {img} alt="error"/>
            <div class = "description">{eventObj.data.description}</div>
        </div>
        </React.Fragment>
    );
}

export default Event;