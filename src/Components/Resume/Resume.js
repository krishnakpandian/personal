import React from 'react';
import './Resume.scss'
import pdf from '../../Assets/Resume_Pandian_Krishna.pdf';
import Title from '../Shared/Title/Title.js';

const Resume = () => {
    return(
        <React.Fragment>
            <div class="resume-container">
                <Title title="Resume"/>
                <object data={pdf} type="application/pdf"></object>
            </div>
        </React.Fragment>
    );
}

export default Resume;