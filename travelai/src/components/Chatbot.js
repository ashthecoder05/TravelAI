import React, { useState ,useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { InputBox } from './InputBox'; // Ensure correct path
import axios from 'axios';
import record1 from '../assets/record1.mov'
import record2 from '../assets/record2.mov'
import record3 from '../assets/record3.mov'
import record4 from '../assets/record4.mov'

import './Chatbot.css';



const videos = [record1, record2, record3, record4];
const Chatbot = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState('');
 
  
  const handleSend = () => {
    if (input.trim()) {
      const encodedQuery = encodeURIComponent(input.trim());
      navigate(`/home?query=${encodedQuery}&from=app`);
      setInput('');
    }
  };
 
  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <div className="hero-container">
    <video
      src={videos[currentVideoIndex]}
      autoPlay
      loop={false}
      muted
      className="hero-video"
      ref={videoRef}
      onEnded={handleVideoEnded}
    />
    <h1>EXPEDITION NEXUS</h1>
    <p>Create unforgettable memories now!</p>
    <div className="hero-inputs">
  
 

    <div className="input-container">
      <InputBox
        inputStyle="input--outline input--large"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleSend(input, "app");
          }
        }}
        placeholder="Ask me anything"
        style={{width: '1000px', height: '40px', fontSize: '16px' }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleSend(input, "app");
        }}
        className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </button>
    </div>
    <div className="suggested-queries">
      <button onClick={() => setInput('Search Hotels')}>Search Hotels</button>
      <button onClick={() => setInput('Inspire me where to go')}>Inspire me where to go</button>
      <button onClick={() => setInput('Build me an itinerary')}>Build me an itinerary</button>
    </div>
    </div>
    </div>
  );
};

export default Chatbot;