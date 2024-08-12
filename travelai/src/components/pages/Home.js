import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ChatInterface from '../ChatInterface';



const ServicePage = () => {
  return (
    <>
      <Navbar />
      <div>
       <ChatInterface />
       
      </div>
      <Footer />
    </>
  );
};

export default ServicePage;