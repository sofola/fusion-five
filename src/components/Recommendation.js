import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Recommendation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Recommendation = () => {
  const location = useLocation();
  const { products = [], ingredients = [] } = location.state.state || {};
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [viewAll, setViewAll] = useState(true);
  const [prices, setPrices] = useState({});

  useEffect(() => {
    if (products.length > 0) {
      const initialPrices = {};
      products.forEach((item) => {
        initialPrices[item.product_name] = Math.floor(Math.random() * 61) + 20; // Generate random price between 20 and 80
      });
      setPrices(initialPrices);
      setFilteredProducts(products);
    }
  }, [products]);

  const handleFilterChange = (ingredient) => {
    const filtered = products.filter((item) => item.ingredients.includes(ingredient));
    setFilteredProducts(filtered);
    setViewAll(false);
  };

  const handleViewAll = () => {
    setFilteredProducts(products);
    setViewAll(true);
    console.log("View all products: ", products);
  };

  return (
    <div className="recommendation">
      <h1>YOUR IDEAL SKINCARE ROUTINE</h1>
      <p>A good skincare routine should be simple, effective, and target the skin's various concerns. Find in these routines all the products adapted to your needs.</p>

      <div className="filter">
        <button className={`filter-button ${viewAll ? 'selected' : ''}`} onClick={handleViewAll}>
          View All
        </button>
        {ingredients.map((ingredient, index) => (
          <button key={index} className="filter-button" onClick={() => handleFilterChange(ingredient)}>
            {ingredient}
          </button>
        ))}
      </div>

      <div className="recommendation-list">
        {filteredProducts.map((item, index) => (
          <div key={index} className="recommendation-item">
            <div className="item-content">
              <h2>{item.product_name}</h2>
              <div className="ingredients-list">
                {item.active_ingredients.length > 0 ? (
                  item.active_ingredients.map((ingredient, i) => (
                    <p key={i}>{ingredient}</p>
                  ))
                ) : (
                  <p></p>
                )}
              </div>
              <div className="price-arrow">
                <p className="price">{prices[item.product_name]}€</p>
                <FontAwesomeIcon icon={faArrowRight} className="fa-arrow-right" />
              </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
