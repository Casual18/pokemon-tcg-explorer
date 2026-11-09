import React from 'react';
function CardInfo({ card }) {
  return (
    <div>
      <h2>{card.name}</h2>
      <p>{card.description}</p>
      <p>Type: {card.type}</p>
      <p>Rarity: {card.rarity}</p>
    </div>
  );
}

export default CardInfo;