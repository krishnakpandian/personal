import React from 'react';
import "./Life.scss";
import Event from './Event/Event.js';
import data from './events.json';
import Title from '../Shared/Title/Title.js';
const Life = () => {
    return(
        <React.Fragment>
            <div class ="life-container">
                <Title title="Life"/>
                <div class="events">
                {data.events.map((event,i) => {
                    return(
                        <Event data={event}/>
                    );
                }) 
                }
                </div>
            </div>
        </React.Fragment>
    );
}

export default Life;