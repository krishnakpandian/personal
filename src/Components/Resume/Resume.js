import React from 'react';
import './Resume.scss'
import pdf from '../../Assets/Web_Resume.pdf';

const Resume = () => {
    return(
        <React.Fragment>
            <div class="resume-container">
                Resume
                <embed src={pdf} type="application/pdf"/>
            </div>
        </React.Fragment>
    );
}

export default Resume;