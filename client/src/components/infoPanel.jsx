import React from 'react';

export const InfoPanel = (props) => (
  <div className='infoPanel'>
    <h3 className='display'>{props.skateData.name}</h3>
    <p>{props.skateData.address}</p>
    <p>The skinny: {props.skateData.shortDescription}</p>
    <p>The fat: {props.skateData.detailedDescription}</p>
    <p>Bust? : {props.skateData.bust}</p>
  </div>
  );