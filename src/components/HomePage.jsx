
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function HomePage() {

    const [cards, setCards] = useState([]);
    const [setName, setSetName] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      
      const fetchCards = async () => {
        try {
        
        const sets = await fetch('https://api.tcgdex.net/v2/en/sets/base1');
        if (!sets.ok) {
            throw new Error('Response failed: ' + sets.status);
        }
        const data = await sets.json();
        setSetName(data.name);
        setCards(data.cards);
      } catch (error) {
        setError("Failed to fetch cards. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
      fetchCards();
    }, []);
    

  return (

    <Container>
        {loading && (
            <div>
                <h1>Welcome to the Pokemon TCG Cards Explorer</h1>
                <p>Loading...</p>
            </div>
        )}


        {!loading && !error && (
            <Row xs={2} md={4} className="g-3">
                {cards.map((card) => (
                    <Col key={card.id}>
                         <img src={`${card.image}/low.webp`} 
                         alt={card.name} 
                         title={card.name} 
                         className="img-fluid" 
                         loading="lazy"
                         onClick={() => navigate(`/card/${card.id}`)}
                         />  
                    </Col>
                ))}
            </Row>
        )}
        
    </Container>  
  );
}

export default HomePage;