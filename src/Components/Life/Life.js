import React from 'react';
import "./Life.scss";
import CruzHacks from '../../Assets/CruzHacks_2020.JPG';
import SloHacks from '../../Assets/Hackathons.JPG';
import SASE from '../../Assets/SASE_WRC.jpeg';
import Event from './Event/Event.js';
import data from './events.json';
const Life = () => {
    return(
        <React.Fragment>
            <div class ="life-container">
                <div class="title">Life Renders </div>
                {data.events.map((event,i) => {
                    return(
                        <Event data={event}/>
                    );
                }) 
                }
            </div>
        </React.Fragment>
    );
}

export default Life;