import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import DestinationCard from '../DestinationCard';
import country6 from './country6.mov';
import country21 from  './country21.mp4';
import country22 from  './country22.mp4';
import country23 from  './country23.mov';
import country24 from  './country24.mp4';
import country25 from  './country25.mp4';
import country26 from  './country26.mp4';
import country17 from  './country17.mov';
import country16 from  './country16.mov';

const ServicePage = () => {
  const navigate = useNavigate();

  const tripSuggestions = [
    "United States",
    "Canada",
    "Mexico",
    "Brazil",
    "Argentina",
    "United Kingdom",
    "France",
    "Germany",
    "Italy",
    "Spain",
    "Portugal",
    "Netherlands",
    "Belgium",
    "Switzerland",
    "Austria",
    "Greece",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "Russia",
    "China",
    "Japan",
    "South Korea",
    "India",
    "Thailand",
    "Vietnam",
    "Indonesia",
    "Australia",
    "New Zealand",
    "Egypt",
    "Morocco",
    "South Africa",
    "Kenya",
    "Turkey",
    "Israel",
    "United Arab Emirates",
    "Saudi Arabia",
    "Peru",
    "Chile"
  ];

  const handleSuggestionClick = (suggestion) => {
    navigate(`/home?query=${encodeURIComponent(suggestion)}&from=service`);
  };
  return (
    <>
        <>
      <Navbar />
      <div>
        <div className="personal-ai-planner">
          <h1>Your Personal AI VISA Assistance </h1>
          <p>Discover and plan personalised itinerary to have the perfect trip.</p>
          <div className="trip-suggestions">
            {tripSuggestions.map((suggestion, index) => (
              <button
                key={index}
                className="suggestion-button"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
          <button
            className="plan-trip-button"
            onClick={() => handleSuggestionClick("Plan a new trip")}
          >
            Assist me with my VISA application  ✈️
          </button>
        </div>
        
        <div className="adjacent-cities">
          <h1>Countries</h1>
          <div className="card-grid" style={{ display: 'inline-flex', gap: '20px', padding: '20px' }}>
            <DestinationCard 
              videoSrc={country6}
              location="Amalfi Coast"
              title="Sorrento, Italy"
              description="Amalfi Coast, Limoncello, Historic Charm"
            />
            <DestinationCard 
              videoSrc={country21}
              location="Amalfi Coast"
              title="Positano, Italy"
              description="Amalfi Coast, Italian Cuisine, Picturesque Landscapes"
            />
            <DestinationCard 
              videoSrc={country22}
              location="Amalfi Coast"
              title="Positano, Italy"
              description="Amalfi Coast, Italian Cuisine, Picturesque Landscapes"
            />
             <DestinationCard 
              videoSrc={country23}
              location="Amalfi Coast"
              title="Positano, Italy"
              description="Amalfi Coast, Italian Cuisine, Picturesque Landscapes"
            />
             <DestinationCard 
              videoSrc={country17}
              location="Amalfi Coast"
              title="Positano, Italy"
              description="Amalfi Coast, Italian Cuisine, Picturesque Landscapes"
            />
             <DestinationCard 
              videoSrc={country24}
              location="Amalfi Coast"
              title="Positano, Italy"
              description="Amalfi Coast, Italian Cuisine, Picturesque Landscapes"
            />
             <DestinationCard 
              videoSrc={country25}
              location="Amalfi Coast"
              title="Positano, Italy"
              description="Amalfi Coast, Italian Cuisine, Picturesque Landscapes"
            />
             <DestinationCard 
              videoSrc={country26}
              location="Amalfi Coast"
              title="Positano, Italy"
              description="Amalfi Coast, Italian Cuisine, Picturesque Landscapes"
            />
            <DestinationCard 
              videoSrc={country16}
              location="Amalfi Coast"
              title="Positano, Italy"
              description="Amalfi Coast, Italian Cuisine, Picturesque Landscapes"
            />
            
          </div>
        </div>
      </div>
      <Footer />
    </>
    </>
  );
};

export default ServicePage;
