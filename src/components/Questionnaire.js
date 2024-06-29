import React, { useState } from 'react';
import '../styles/Questionnaire.css';

const Questionnaire = ({ sections }) => {
  const [selections, setSelections] = useState({});

  const handleOptionChange = (section, option) => {
    setSelections((prev) => ({
      ...prev,
      [section]: prev[section] === option ? '' : option,
    }));
  };

  const handleMultipleOptionsChange = (section, option) => {
    setSelections((prev) => ({
      ...prev,
      [section]: prev[section]?.includes(option)
        ? prev[section].filter((opt) => opt !== option)
        : [...(prev[section] || []), option],
    }));
  };


  const handleSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/submit', {  // Make sure this URL matches your Flask server address
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selections),
      });
      const data = await response.json();
      console.log('Response from backend:', data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className="questionnaire">
      {sections.map((section, index) => (
        <div className="section" key={index}>
          <p>{section.title}</p>
          <div className="options">
            {section.options.map((option) => (
              <button
                key={option}
                className={
                  section.type === 'single'
                    ? selections[section.title] === option
                      ? 'selected'
                      : ''
                    : selections[section.title]?.includes(option)
                      ? 'selected'
                      : ''
                }
                onClick={() =>
                  section.type === 'single'
                    ? handleOptionChange(section.title, option)
                    : handleMultipleOptionsChange(section.title, option)
                }
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Questionnaire;
