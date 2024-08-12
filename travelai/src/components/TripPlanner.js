import React from 'react';
import './TripPlanner.css';
import { useNavigate } from 'react-router-dom';

const TripPlanner = () => {
    const navigate = useNavigate();
    const options = [
      "Uncover hidden trails in my backyard wilderness",
      "Discover paradise: Where golden sands kiss turquoise waters nearby",
      "Jet off to Mallorca without breaking the bank",
      "Chase the ethereal dance of the aurora borealis",
      "Craft an epic cross-country odyssey through America's heartland",
      "Embark on a wild family adventure in the African savanna",
      "Carve through powder at Europe's most exhilarating snow havens",
      "Time-travel through Europe's grand tapestry of bygone eras",
      "Set sail on a sun-soaked odyssey around the Mediterranean's azure waters"
    ];

    const handleSuggestionClick = (suggestion) => {
      navigate(`/home?query=${encodeURIComponent(suggestion)}`);
    };

    return (
        <div className="personal-ai-planner" style={{ backgroundColor: 'white' }}>
          <h1>Your Personal AI Trip Planner</h1>
          <p>Discover and plan personalised itinerary to have the perfect trip.</p>
          <div className="trip-suggestions">
            {options.map((option, index) => (
              <button
                key={index}
                className="suggestion-button"
                onClick={() => handleSuggestionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className="plan-trip-button"
            onClick={() => handleSuggestionClick("Plan a new trip")}
          >
            Plan a new trip ✈️
          </button>
        </div>
      );

};

export default TripPlanner;