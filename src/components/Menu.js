import React from 'react';
import Banner from '../img/Card.png'
import '../styles/Menu.css'

const Menu = () => {
    return (
        <div style={{ overflowY: 'scroll', height: '100vh' }}>
            {/* View 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
                <img src={Banner} alt="Banner 1" style={{ width: '100%', maxWidth: '500px' }} />
                <div className="container">
                    <button className="menuBtn">View All Our Products</button>
                </div>
            </div>

            {/* View 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
                <img src={Banner} alt="Banner 2" style={{ width: '100%', maxWidth: '500px' }} />
                <div className="container">
                    <button className="menuBtn"><a href='https://www.nivea.co.uk/advice/findmyroutine#/'>Analyze Your Skin</a></button>
                </div>
            </div>

            {/* View 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
                <img src={Banner} alt="Banner 3" style={{ width: '100%', maxWidth: '500px' }} />
                <div className="container">
                    <button className="menuBtn"><a href='/question'>Discover Your Perfect Skincare Routine</a></button>
                </div>      </div>

            {/* View 4 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
                <img src={Banner} alt="Banner 4" style={{ width: '100%', maxWidth: '500px' }} />
                <div className="container">
                    <button className="menuBtn">Daily Skincare Challenge</button>
                </div>      </div>

        </div>
    );
};

export default Menu;
