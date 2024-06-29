import React, { useState } from 'react';
import '../styles/Ingredients_Selection.css'

const Ingredients_Selection = ({ options, onChange }) => {
    // Initialize state for checklist items
    const [items, setItems] = useState([
        { id: 1, text: 'Hyaluronic Acid', checked: false },
        { id: 2, text: 'Glycerin', checked: false },
        { id: 3, text: 'Aloe Vera', checked: false },
        { id: 4, text: 'Retinoids (Retinol, Retinyl Palmitate)', checked: false },
        { id: 5, text: 'Vitamin C', checked: false },
        { id: 6, text: 'Salicylic Acid', checked: false },
        { id: 7, text: 'Niacinamide', checked: false },
        { id: 8, text: 'Alpha Hydroxy Acids (AHAs)', checked: false },
        { id: 9, text: 'Beta Hydroxy Acids (BHAs)', checked: false },
        { id: 10, text: "Don't know", checked: false },
        { id: 11, text: 'I am open to try something new', checked: false },

    ]);

    // Function to handle checkbox toggle
    const handleToggle = (itemId) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, checked: !item.checked } : item
            )
        );
    };
    const handleNext = async () => {
        try {
            console.log('Next button clicked');
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    const handleSkip = () => {
        console.log('Skip button clicked');
    };
    return (
        <div>
            <p className="ing_prompt">What ingredients do you consider  most important?</p>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <input
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => handleToggle(item.id)}
                        />
                        {item.text}
                    </li>
                ))}
            </ul>
            <div className="button-group">
                <button className="next-button" onClick={handleNext}>
                    <a href='/ingredients-selection'>Next</a>

                </button>
                <button className="skip-button" onClick={handleSkip}>
                    Skip
                </button>
            </div>
        </div>
    );
}

export default Ingredients_Selection