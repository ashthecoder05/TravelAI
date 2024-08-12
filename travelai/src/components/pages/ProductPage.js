import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import DestinationCard from '../DestinationCard';
import record8 from './hotel4.mp4'
import record9 from './hotel5.mp4'

import record7 from './hotel7.mp4'
import record6 from './hotel8.mp4'
import record5 from './hotel9.mp4'
import record4 from './export6.mp4'
import record1 from './hotel1.mp4'
import record2 from './hotel2.mp4'
import record3 from './hotel3.mp4'

const ProductPage = () => {
  const navigate = useNavigate();

  const tripSuggestions = [
    "Best pasta restaurants in Rome, Italy",
    "Vegetarian-friendly restaurants in New York City, USA",
    "Top-rated sushi places in Tokyo, Japan",
    "Authentic pizza restaurants in Naples, Italy",
    "Affordable taco options in Mexico City, Mexico",
    "Fine dining experiences in Paris, France",
    "Best brunch spots in Melbourne, Australia",
    "Family-friendly restaurants in Orlando, USA",
    "Romantic dinner locations in Santorini, Greece",
    "Rooftop restaurants with views in Singapore",
    "Farm-to-table restaurants in Copenhagen, Denmark",
    "Best food trucks in Portland, USA",
    "Gluten-free friendly restaurants in Berlin, Germany",
    "Michelin-starred restaurants in San Sebastian, Spain",
    "Hidden gem cafes in Vienna, Austria",
    "Best seafood restaurants in Lisbon, Portugal",
    "Vegan-friendly ice cream shops in Los Angeles, USA",
    "Authentic dim sum restaurants in Hong Kong",
    "Wine bars with food pairings in Bordeaux, France",
    "Best steakhouses in Buenos Aires, Argentina"
  ];

  const handleSuggestionClick = (suggestion) => {
    navigate(`/home?query=${encodeURIComponent(suggestion)}&from=RecommendationFood`);
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="personal-ai-planner">
          <h1>Your Personal AI Food and Restaurant Recommender </h1>
          <p>Discover and savor the best local cuisines with personalized restaurant recommendations tailored to your taste preferences and dietary needs.</p>
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
            Get Food Recommendations 🍽️
          </button>
        </div>
        
        <div className="adjacent-cities">
          <h1>Adjacent Cities</h1>
          <div className="card-grid" style={{ display: 'inline-flex', gap: '20px', padding: '20px' }}>
            <DestinationCard 
              videoSrc={record1}
              location="Amalfi Coast"
              title="Sorrento: Home of Gnocchi alla Sorrentina"
              description="Savor potato dumplings baked with tomato sauce and mozzarella"
            />
            <DestinationCard 
              videoSrc={record2}
              location="Amalfi Coast"
              title="Positano: Delight in Spaghetti alle Vongole"
              description="Enjoy spaghetti with fresh clams in a white wine sauce"
            />
            <DestinationCard 
              videoSrc={record3}
              location="Amalfi Coast"
              title="Ravello: Taste Scialatielli ai Frutti di Mare"
              description="Try homemade pasta with a medley of fresh seafood"
            />
             <DestinationCard 
              videoSrc={record6}
              location="Amalfi Coast"
              title="Amalfi: Indulge in Sfogliatella"
              description="Savor this shell-shaped pastry filled with sweet ricotta"
            />
            <DestinationCard 
              videoSrc={record4}
              location="Amalfi Coast"
              title="Atrani: Discover Sartu di Riso"
              description="Experience a baked rice timbale with meat ragù and peas"
            />
            <DestinationCard 
              videoSrc={record5}
              location="Amalfi Coast"
              title="Praiano: Relish Risotto al Limone"
              description="Enjoy creamy risotto infused with local Amalfi lemons"
            />
             <DestinationCard 
              videoSrc={record7}
              location="Amalfi Coast"
              title="Minori: Savor Ndunderi"
              description="Try these ancient ricotta dumplings, a precursor to gnocchi"
            />
            <DestinationCard 
              videoSrc={record8}
              location="Amalfi Coast"
              title="Maiori: Feast on Alici Marinate"
              description="Taste fresh anchovies marinated in lemon juice and olive oil"
            />
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;