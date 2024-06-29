import React, { useState } from 'react';
import '../styles/Questionnaire.css';

const Questionnaire = () => {
  const [age, setAge] = useState('');
  const [badHabit, setBadHabit] = useState('');
  const [products, setProducts] = useState([]);
  const [skinType, setSkinType] = useState('');
  const [concern, setConcern] = useState([]);
  const [beautyRoutine, setBeautyRoutine] = useState('');

  const handleProductChange = (product) => {
    setProducts((prev) =>
      prev.includes(product)
        ? prev.filter((p) => p !== product)
        : [...prev, product]
    );
  };

  const handleConcernChange = (concernItem) => {
    setConcern((prev) =>
      prev.includes(concernItem)
        ? prev.filter((c) => c !== concernItem)
        : [...prev, concernItem]
    );
  };

  return (
    <div className="questionnaire">
      <div className="section">
        <p>My age is</p>
        <div className="options">
          {['16 - 20', '21 - 30', '31 - 50', '50 - 60', '60 +'].map((ageRange) => (
            <button
              key={ageRange}
              className={age === ageRange ? 'selected' : ''}
              onClick={() => setAge(ageRange)}
            >
              {ageRange}
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <p>My bad habit is</p>
        <div className="options">
          {['Smoking', 'Sun exposure', 'Stress'].map((habit) => (
            <button
              key={habit}
              className={badHabit === habit ? 'selected' : ''}
              onClick={() => setBadHabit(habit)}
            >
              {habit}
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <p>Products I use</p>
        <div className="options">
          {['Moisturiser', 'Serum', 'Cleaner'].map((product) => (
            <button
              key={product}
              className={products.includes(product) ? 'selected' : ''}
              onClick={() => handleProductChange(product)}
            >
              {product}
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <p>My skin type is</p>
        <div className="options">
          {['Normal', 'Oily', 'Acne', 'Sensitive'].map((type) => (
            <button
              key={type}
              className={skinType === type ? 'selected' : ''}
              onClick={() => setSkinType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <p>My concern is/take care of</p>
        <div className="options">
          {['Wrinkles', 'Acne', 'Irritation', 'Redness', 'Dry skin', 'Pigmentation spots'].map((concernItem) => (
            <button
              key={concernItem}
              className={concern.includes(concernItem) ? 'selected' : ''}
              onClick={() => handleConcernChange(concernItem)}
            >
              {concernItem}
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <p>My bad habit is</p>
        <div className="options">
          {['Smoking', 'Sun exposure', 'Soumis au stress'].map((habit) => (
            <button
              key={habit}
              className={badHabit === habit ? 'selected' : ''}
              onClick={() => setBadHabit(habit)}
            >
              {habit}
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <p>Quelle est ma routine beauté ?</p>
        <div className="options">
          {['Reposant', 'Sportif', 'Soumis au stress'].map((routine) => (
            <button
              key={routine}
              className={beautyRoutine === routine ? 'selected' : ''}
              onClick={() => setBeautyRoutine(routine)}
            >
              {routine}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
