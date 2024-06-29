import React from 'react';
import Questionnaire from './Questionnaire';

const sectionsCurrentRoutine = [
  {
    title: 'My age is',
    options: ['16 - 20', '21 - 30', '31 - 50', '50 - 60', '60 +'],
    type: 'single',
  },
  {
    title: 'My bad habit is',
    options: ['Smoking', 'Sun exposure', 'Stress'],
    type: 'single',
  },
  {
    title: 'Products I use',
    options: ['Moisturiser', 'Serum', 'Cleaner'],
    type: 'multiple',
  },
  {
    title: 'My skin type is',
    options: ['Normal', 'Oily', 'Acne', 'Sensitive'],
    type: 'single',
  },
  {
    title: 'My concern is/take care of',
    options: ['Wrinkles', 'Acne', 'Irritation', 'Redness', 'Dry skin', 'Pigmentation spots'],
    type: 'multiple',
  },
  {
    title: 'Brands I use',
    options: ['Vichy', 'Sun exposure', 'Soumis au stress'],
    type: 'multiple',
  },
  {
    title: 'Is there a specific ingredient your skin needs?',
    options: ['Reposant', 'Sportif', 'Soumis au stress'],
    type: 'single',
  },
];

const Ingredients = () => {
  return (
    <div className="App">
      <h1>Current Skincare Routine</h1>
      <Questionnaire sections={sectionsCurrentRoutine} />
    </div>
  );
};

export default Ingredients;
