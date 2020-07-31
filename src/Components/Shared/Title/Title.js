import React from 'react';
import './Title.scss';

const Title = (props) => {
    return(
        <React.Fragment>
            <div class="title">
                {props.title}
            </div>
        </React.Fragment>
    );
}

export default Title;