import React from 'react';

import {useState, useEffect} from 'react';

function HomePage() {

    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      
      const fetchCards = async () => {
        try {
        
        const response = await fetch();
        if (!response.ok) {
            throw new Error('Response failed: ' + response.status);
        }
        const data = await response.json();
        setCards(data);
      } catch (error) {
        setError("Failed to fetch cards. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
      fetchCards();
    }, []);
    

  return (
    <div>
      <h1>Welcome to the Pokemon TCG Cards Explorer</h1>
      <p>Explore Pokemon cards and their information.</p>
    </div>
  );
}

export default HomePage;