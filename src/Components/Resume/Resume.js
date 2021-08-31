import React from 'react';
import './Resume.scss'
import pdf from '../../Assets/Pandian_Krishna_Resume.pdf';
import Title from '../Shared/Title/Title.js';

const Resume = () => {
    return(
        <React.Fragment>
            <div class="resume-container">
                <Title title="Resume"/>
                <object data={pdf} type="application/pdf" aria-label="resume"></object>
            </div>
        </React.Fragment>
    );
}

export default Resume;