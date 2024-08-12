import React, { useState, useEffect } from 'react';
import './ChatInterface.css'; // Ensure this CSS file exists with the appropriate styles
import ItenaryView from './ItenaryView';
import axios from 'axios';

import record1 from '../assets/record1.mov'
import record2 from '../assets/record2.mov'
import record3 from '../assets/record3.mov'
import record4 from '../assets/country10.mov'
import record5 from '../assets/record33.mp4'
import record6 from '../assets/instagram1.mov'
import record7 from '../assets/instagram2.mov'
import record8 from '../assets/instagram3.mov'
import record9 from '../assets/instagram4.mov'
import record10 from '../assets/instagram6.mov'
import record11 from '../assets/country2.mov'
import record12 from '../assets/country4.mov'
import record13  from '../assets/blog3.mov'
import record14  from '../assets/hotel9.mp4'



const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [itinerary, setItinerary] = useState([]);
  const [input, setInput] = useState('');
  const [mapCenter, setMapCenter] = useState({ lat: 40.7128, lng: -74.0060 }); // Default to New York City
  const [mapZoom, setMapZoom] = useState(12);
  const [selectedDay, setSelectedDay] = useState(0);
  const [tripData, setTripData] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const initialQuery = urlParams.get('query');
    const fromParam = urlParams.get('from');
    if (initialQuery) {
      const decodedQuery = decodeURIComponent(initialQuery);
      handleInitialQuery(decodedQuery, fromParam);
    }
  }, []);

  const handleInitialQuery = async (query, from_param) => {
    setMessages([{ text: query, user: 'user' }]);
    try {
      const requestData = {
        prompt: query,
        from_param: from_param
      };
      const response = await axios.post('http://localhost:8001/api/travel-advisor/', requestData);
      handleResponse(response);
    } catch (error) {
      console.error('Error sending message to the backend:', error);
      const errorMessage = { text: 'There was an error processing your request.', user: 'bot' };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    }
  };

  const handleSendMessage = async (message = input, from_param) => {
    if (message.trim()) {
      const userMessage = { text: message, user: 'user' };
      setMessages(prevMessages => [...prevMessages, userMessage]);
      setInput('');

      try {
        const requestData = {
          prompt: message,
          from_param: from_param,
        };
        const response = await axios.post('http://localhost:8001/api/travel-advisor/', requestData);
        handleResponse(response);
      } catch (error) {
        console.error('Error sending message to the backend:', error);
        const errorMessage = { text: 'There was an error processing your request.', user: 'bot' };
        setMessages(prevMessages => [...prevMessages, errorMessage]);
      }
    }
  };

  const handleResponse = (response) => {
    if (response.data.raw_response) {
      const botMessage = { text: response.data.raw_response.replace('RAW_RESPONSE:', ''), user: 'bot' };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } else {
      setTripData(response);
      const botMessage = { text: "Received. Is there anything else you want to modify in the itinerary?", user: 'bot' };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }
  };

  const handleAddItineraryItem = () => {
    setItinerary((prevItinerary) => [...prevItinerary, { time: '3:00 PM', activity: 'New Activity' }]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage(input, "home");
    }
  };

  const LoadingSection = () => (
    <div className="loading-container">
      <p>Loading your personalized itinerary...</p>
      <video autoPlay loop muted style={{ width: '100%', height: '669px', objectFit: 'cover' }}>
        <source src={record5} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );

  const VisaInfoSection = ({ visaInfo }) => (
    <div className="visa-info-container">
      <h2 style={{ fontSize: '50px', marginTop: '20px', marginBottom: '10px' }}>Visa Information</h2>
      <div className="image-grid">
          <video autoPlay loop muted style={{ width: '100%', height: '300px', objectFit: 'cover' }}>
            <source src={record13} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      <h3>{visaInfo.country}</h3>
      <p><strong>Visa Type:</strong> {visaInfo.visa_type}</p>
      <h4>Application Process:</h4>
      <ol>
        {visaInfo.application_process.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <h4>Required Documents:</h4>
      <ul>
        {visaInfo.required_documents.map((doc, index) => (
          <li key={index}>{doc}</li>
        ))}
      </ul>
      <p><strong>Processing Time:</strong> {visaInfo.processing_time}</p>
      <p><strong>Fees:</strong> {visaInfo.fees}</p>
      <p><strong>Special Conditions:</strong> {visaInfo.special_conditions}</p>
      <h4>Official Links:</h4>
      <ul>
        {visaInfo.official_links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.description}</a>
          </li>
        ))}
      </ul>
      <GoogleMapSection destinationCoordinates={{ x: visaInfo.coordinates.longitude, y: visaInfo.coordinates.latitude }} mapZoom={6} />
    </div>
  );

  const AccommodationSection = ({ accommodation }) => (
    <>
      <h4>Accommodation Options:</h4>
      {accommodation && accommodation.map((acc, index) => (
        <div key={index}>
          <h5>{acc.type}</h5>
          <p>{acc.description}</p>
          <p>Price: {acc.price}</p>
        </div>
      ))}
    </>
  );

  const BudgetManagementSection = ({ budgetManagement }) => (
    <>
      <h4>Budget Management Tips:</h4>
      <ul>
        {budgetManagement && budgetManagement.map((tip, index) => (
          <li key={index}>
            <strong>{tip.title}:</strong> {tip.description}
          </li>
        ))}
      </ul>
    </>
  );

  const ItineraryDetailsSection = ({ itinerary, selectedDay, setSelectedDay }) => (
    <div className="itinerary-details-container" style={{ marginTop: '20px' }}>
      <div className="itinerary-days" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        {itinerary && itinerary.slice(0, 5).map((day, index) => (
          <button 
            key={index} 
            className={`day-button ${selectedDay === index ? 'active' : ''}`}
            onClick={() => setSelectedDay(index)}
          >
            Day {day.day}
          </button>
        ))}
      </div>
      {itinerary && itinerary.slice(0, 5).map((day, index) => (
        selectedDay === index && (
          <div key={index} className="itinerary-details">
            <h3>{day.title}</h3>
            <ul>
              {day.activities.map((activity, actIndex) => (
                <li key={actIndex}>
                  <strong>{activity.name}:</strong> {activity.description}
                </li>
              ))}
            </ul>
          </div>
        )
      ))}
    </div>
  );

  const LocalTipsSection = ({ localTips }) => (
    <>
      <h4>Local Tips:</h4>
      <ul>
        {localTips && localTips.map((tip, index) => (
          <li key={index}>
            <strong>{tip.tip}:</strong> {tip.description}
          </li>
        ))}
      </ul>
    </>
  );

  const TravelVideosSection = () => (
    <div className="travel-videos-container" style={{ marginBottom: '20px' }}>
      <h3 style={{fontSize: '50px', marginBottom: '10px' }}>Your Next Location to Visit</h3>
      <div className="video-grid" style={{ display: 'flex', gap: '10px', overflowX: 'auto' }}>
        {[record6, record7, record8, record9, record10, record11, record12].map((video, index) => (
          <div key={index} className="video-item" style={{ flexShrink: 0 }}>
            <video 
              src={video} 
              alt={`Travel video ${index + 1}`} 
              style={{ width: '200px', height: '500px', objectFit: 'cover', borderRadius: '8px' }} 
              autoPlay 
              muted 
              loop 
              playsInline
              onError={(e) => {
                console.error("Video failed to load:", e);
                e.target.style.display = 'none';
              }}
            />
            <p style={{ display: 'none' }}>Video failed to load. Please check your connection.</p>
          </div>
        ))}
      </div>
    </div>
  );

  const GoogleMapSection = ({ destinationCoordinates, mapZoom }) => (
    <div className="google-map-container">
      <h3 style={{ fontSize: '50px', marginTop: '20px', marginBottom: '10px' }}>Find Your Directions</h3>
      {destinationCoordinates && (
        <iframe
          title="Google Map"
          width="100%"
          height="230"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyAOqkiOaAC6YZ4zIb0QZKuzm_UhmPbTd-c&center=${destinationCoordinates.y},${destinationCoordinates.x}&zoom=${mapZoom}`}
          allowFullScreen
        ></iframe>
      )}
    </div>
  );

  const ItineraryContent = ({ tripData, selectedDay, setSelectedDay, mapZoom }) => (
    <>
      <h2 style={{ fontSize: '50px', marginTop: '20px', marginBottom: '10px' }}>ITINERARY</h2>
      <div className="itinerary-views-container" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3>{tripData.title}</h3>
        <div className="image-grid">
          <video autoPlay loop muted style={{ width: '100%', height: '300px', objectFit: 'cover' }}>
            <source src={record4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p>{tripData.welcome_message}</p>
        <AccommodationSection accommodation={tripData.accommodation} />
        <BudgetManagementSection budgetManagement={tripData.budget_management} />
        <ItineraryDetailsSection itinerary={tripData.itinerary} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
        <LocalTipsSection localTips={tripData.local_tips} />
      </div>
      <TravelVideosSection />
      <GoogleMapSection destinationCoordinates={tripData.destination_coordinates} mapZoom={mapZoom} />
    </>
  );

  const RestaurantRecommendationsSection = ({ recommendations }) => (
    <div className="restaurant-recommendations-container">
      <h2 style={{ fontSize: '50px', marginTop: '20px', marginBottom: '10px' }}>Restaurant Recommendations</h2>
      <div className="image-grid">
          <video autoPlay loop muted style={{ width: '100%', height: '300px', objectFit: 'cover' }}>
            <source src={record14} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
      <h3>{recommendations.location}</h3>
      {recommendations.restaurants.map((restaurant, index) => (
        <div key={index} className="restaurant-item">
          <h4>{restaurant.name}</h4>
          <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
          <p><strong>Rating:</strong> {restaurant.rating}</p>
          <p><strong>Price Range:</strong> {restaurant.price_range}</p>
          <p>{restaurant.description}</p>
          <p><strong>Famous for:</strong> {restaurant.famous_for}</p>
          <p><strong>Address:</strong> {restaurant.address}</p>
          <p><strong>Opening Hours:</strong> {restaurant.opening_hours}</p>
          <p><strong>Contact:</strong> {restaurant.contact}</p>
        </div>
      ))}
      <h4>Local Food Tips:</h4>
      <ul>
        {recommendations.local_food_tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
      <GoogleMapSection destinationCoordinates={recommendations.coordinates} mapZoom={12} />
    </div>
  );

  return (
    <div className="chat-interface">
      <div className="chat-section">
        <h2 style={{ fontSize: '50px', marginTop: '20px', marginBottom: '10px' }}>Welcome to TRAVIZOR</h2>
        <div className="chat-container" style={{ height: '500px', display: 'flex', flexDirection: 'column' }}>
          <div className="chat-messages" style={{ flexGrow: 1, overflowY: 'auto', marginBottom: '10px' }}>
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.user === 'user' ? 'user-message' : 'bot-message'}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSendMessage(input, "home");
                }
              }}
              placeholder="Ask anything..."
              className="chat-input"
            />
            <button onClick={(e) => {
              e.preventDefault();
              handleSendMessage(input, "home");
            }} className="send-button">Send</button>
          </div>
        </div>
      </div>
      <div className="itinerary-section">
        {!tripData ? (
          <LoadingSection />
        ) : tripData.data?.COUNTRY_VISA_INFO ? (
          <VisaInfoSection visaInfo={tripData.data.COUNTRY_VISA_INFO} />
        ) : tripData.data?.RESTAURANT_RECOMMENDATIONS ? (
          <RestaurantRecommendationsSection recommendations={tripData.data.RESTAURANT_RECOMMENDATIONS} />
        ) : tripData.data && !tripData.data.raw_response ? (
          <ItineraryContent
            tripData={tripData.data}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            mapZoom={mapZoom}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ChatInterface;