import React from 'react';
import './DestinationCard.css';

const DestinationCard = ({ videoSrc, location, title, tags = [] }) => {
  return (
    <div className="destination-card">
      <video className="destination-card__video" src={videoSrc} autoPlay loop muted playsInline style={{ height: '550px' }} />
      <div className="destination-card__content">
        <h2 className="destination-card__title">{title}</h2>
        <p className="destination-card__location">{location}</p>
        {tags.length > 0 && <p className="destination-card__tags">{tags.join(', ')}</p>}
      </div>
    </div>
  );
};

export default DestinationCard;