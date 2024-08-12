import React from 'react';
import Chatbot from './components/Chatbot';
import MovingText from './components/MovingText';
import Card from './components/Card';
import TripPlanner from './components/TripPlanner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Chatbot />
      <MovingText text="Hurry up! This deal is limited." />
      <Card />
      <TripPlanner />
      <Footer />
    </>
  );
}

export default App;
