import React from 'react';
import Questionnaire from './Questionnaire';

const sectionsIntro = [
  {
    title: 'MY AGE IS',
    options: ['16 - 20', '21 - 30', '31 - 50', '50 - 60', '60 +'],
    type: 'single',
  },
  {
    title: 'MY SKINCARE CHALLENGE IS',
    options: ['SMOKING', 'SUN EXPOSURE', 'STRESS'],
    type: 'single',
  },
  {
    title: 'PRODUCT I USE',
    options: ['MOISTURE','SERUM','CLEANER','TONER','SUNSCREEN'],
    type: 'multiple',
  },
  {
    title: 'MY SKIN TYPE IS',
    options: ['NORMAL', 'OILY', 'DRY', 'COMBINATION'],
    type: 'single',
  },
  {
    title: 'MY CONCERN IS/TAKE CARE OF',
    options: ['WRINKLES', 'ACNE', 'IRRITATION', 'REDNESS', 'DRY SKIN', 'PIGMENTATION SPOTS'],
    type: 'multiple',
  },
  {
    title: 'MY BAD HABIT IS',
    options: ['SMOKING','SUN EXPOSURE','DRINK ALCOHOL'],
    type: 'multiple',
  }
];

const Introduction = () => {
  return (
    <div className="App">
      <Questionnaire sections={sectionsIntro} />
    </div>
  );
};

export default Introduction;
