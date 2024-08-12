import React, { useState } from 'react';
import myImage6 from '../images/img-6.jpg';
import './ItenaryView.css'; 
import ItineraryDetailsContainer from './ItineraryDetailsContainer';

const itineraryDetails = [
  {
    title: 'Royalty and Gardens',
    times: [
      {
        period: 'Morning',
        description: 'Paris: Versailles Palace and Gardens Full Access Ticket - Start your day with a trip to the magnificent Palace of Versailles. Explore the opulent rooms, Hall of Mirrors, and expansive gardens with this full access ticket.',
      },
      {
        period: 'Afternoon',
        description: 'Tuileries Garden (Jardin des Tuileries) - After returning to Paris, spend your afternoon strolling through the Tuileries Garden. Enjoy the beautiful landscapes, fountains, and sculptures in this historic garden.',
      },
      {
        period: 'Evening',
        description: 'Le Jules Verne - End your day with a luxurious dinner at Le Jules Verne, located on the Eiffel Tower. Savor gourmet French cuisine while enjoying stunning views of Paris.',
      },
      {
        period: 'Bedtime',
        description: 'Find amazing hotels in Paris.',
      },
    ],
  },
  // Add more itinerary details as needed
];

const ItineraryView = () => {

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [itinerary, setItinerary] = useState([]);

  // Add state for map center and zoom
  const [mapCenter, setMapCenter] = useState({ lat: 40.7128, lng: -74.0060 }); // Default to New York City
  const [mapZoom, setMapZoom] = useState(12);

  return (
    <div className="itinerary-container" style={{ width: '300px', overflowY: 'auto' }}>
      <img src={myImage6} alt="Itinerary" className="itinerary-image" style={{ width: '100%', height: 'auto' }} />
      
      {/* Google Maps component */}
     
      
      {/* The rest of your component code */}
      <ul className="itinerary-list">
        {itinerary.map((item, index) => (
          <li key={index} className="itinerary-item">
            <span className="font-bold">{item.time}</span> - {item.activity}
          </li>
        ))}
      </ul>
    </div>
      );
};

export default ItineraryView;