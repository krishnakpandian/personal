import React from 'react';
import './Resume.scss'
import pdf from '../../Assets/Krishna_Pandian_Resume.pdf';
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