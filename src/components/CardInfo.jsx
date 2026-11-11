
import {useCallback, useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function CardInfo() {
  
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCard() {
      try {
        const response = await fetch(`https://api.tcgdex.net/v2/en/cards/${id}`);
        const data = await response.json();
        setCard(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCard();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!card) return <div>Card not found</div>;

  return (
    <Container className="card-info">
      <Row>
        <Col md={4}>
          <img src={`${card.image}/high.webp`}  alt={card.name} className="img-fluid"/>
        </Col>
        <Col md={7}>
          <h2>{card.name}</h2>
          <p>{card.description}</p>
          <p>Type: {card.types.join(', ')}</p>
          <p>Rarity: {card.rarity}</p>
        </Col>
      </Row>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </Container>

  );
}
  

export default CardInfo;