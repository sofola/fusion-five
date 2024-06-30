import React from 'react';
import A from '../img/a.png'
import B from '../img/b.png'
import C from '../img/c.png'
import D from '../img/d.png'
import E from '../img/e.png'



import '../styles/Menu.css'

const Menu = () => {
    return (
        <div style={{ overflowY: 'scroll', height: '100vh' }}>
            {/* View 1 */}
            <div className="view">
                <img src={A} alt="Banner 1" style={{ width: '100%', maxWidth: '500px' }} />
                <div className="container">
                    <button className="menuBtn">View All Our Products</button>
                </div>
            </div>

            {/* View 2 */}
            <div className="view">
                <img src={B} alt="Banner 2" style={{ width: '100%', maxWidth: '500px' }} />
                <div className="container">
                    <button className="menuBtn"><a href='https://www.nivea.co.uk/advice/findmyroutine#/'>Analyze Your Skin</a></button>
                </div>
            </div>

            {/* View 3 */}
            <div className="view">
                <img src={C} alt="Banner 3" style={{ width: '100%', maxWidth: '500px' }} />
                <div className="container">
                    <button className="menuBtn"><a href='/question'>Discover Your Perfect Skincare Routine</a></button>
                </div>      </div>

            {/* View 4 */}
            <div className="view">
                <img src={D} alt="Banner 4" style={{ width: '100%', maxWidth: '500px' }} />
                <div className="container">
                    <button className="menuBtn">Daily Skincare Challenge</button>
                </div>      </div>

                {/* View 5 */}
            <div className="view">
                <img src={E} alt="Banner 5" style={{ width: '100%', maxWidth: '500px' }} />
                <div className="container">
                    <button className="menuBtn">Join the Skincare Community</button>
                </div>      </div>


        </div>
    );
};

export default Menu;
