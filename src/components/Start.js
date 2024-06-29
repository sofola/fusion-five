import React from 'react'
import '../styles/Start.css';
import BackgroundImage from '../img/womanstart.jpg'


const Start = () => {
    return (
        <div className="image-container">
            <a href='/gender-selection'>
                <img src={BackgroundImage} alt="Your Image" className="full-size-image" style={{ objectFit: 'cover' }} />
                <div className="text-overlay">
                    COMFORT <br></br>
                    CONFIDENCE <br></br>
                    GLOW</div>
            </a>
        </div>
    );
}

export default Start
