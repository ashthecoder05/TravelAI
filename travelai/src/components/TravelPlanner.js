// src/components/TravelPlanner.js
import React, { useState } from 'react';
import ChatInterface from './ChatInterface';
import ItineraryDisplay from './ItineraryDisplay';

const TravelPlanner = () => {
  const [messages, setMessages] = useState([
    { text: 'Here we are again, what are we chatting about today? Ask me literally anything related to travel.', user: 'bot' },
  ]);
  const [itinerary, setItinerary] = useState({
    title: '4 Days of Snorkeling Bliss in the Bahamas Itinerary',
    image: '/path/to/your/image.jpg', // replace with actual image path
    days: [
      { location: 'Nassau', description: 'Explore the vibrant capital city of the Bahamas.' },
      { location: 'Paradise Island', description: 'Enjoy the luxurious resorts and beautiful beaches.' },
      { location: 'Exuma', description: 'Experience the exotic marine life and stunning waters.' },
    ],
  });

  const handleSendMessage = (text) => {
    setMessages([...messages, { text, user: 'user' }]);
    // Simulate bot response
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { text: 'Making you a personalized itinerary... this will just take a few seconds!', user: 'bot' }]);
      // Simulate itinerary generation
      setTimeout(() => {
        setItinerary({
          title: '4 Days of Snorkeling Bliss in the Bahamas Itinerary',
          image: '/path/to/your/image.jpg', // replace with actual image path
          days: [
            { location: 'Nassau', description: 'Explore the vibrant capital city of the Bahamas.' },
            { location: 'Paradise Island', description: 'Enjoy the luxurious resorts and beautiful beaches.' },
            { location: 'Exuma', description: 'Experience the exotic marine life and stunning waters.' },
          ],
        });
      }, 2000);
    }, 1000);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 h-full">
        <ChatInterface messages={messages} onSendMessage={handleSendMessage} />
      </div>
      <div className="w-2/3 h-full p-4">
        <ItineraryDisplay itinerary={itinerary} />
      </div>
    </div>
  );
};

export default TravelPlanner;
