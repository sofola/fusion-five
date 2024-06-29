import React from 'react';
import { useHistory } from "react-router-dom";
import '../styles/GenderSelection.css';
import womanImage from '../img/woman.png'; // Update with the correct path to the image
import manImage from '../img/man.png'; // Update with the correct path to the image
import allGendersImage from '../img/all_genders.png'; // Update with the correct path to the image

const GenderSelection = () => {
  const history = useHistory();

  const handleGenderSelect = async (gender) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/gender', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ gender }),
      });
      const data = await response.json();
      console.log('Response from backend:', data);
      history.push('/menu');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className="gender-selection">
      <div className="gender-item" onClick={() => handleGenderSelect('woman')}>
        <img src={womanImage} alt="Woman" />
        <p>WOMAN</p>
      </div>
      <div className="gender-item" onClick={() => handleGenderSelect('man')}>
        <img src={manImage} alt="Man" />
        <p>MAN</p>
      </div>
      <div className="gender-item" onClick={() => handleGenderSelect('all_genders')}>
        <img src={allGendersImage} alt="All Genders" />
        <p id="all_genders">ALL GENDERS</p>
      </div>
    </div>
  );
};

export default GenderSelection;
