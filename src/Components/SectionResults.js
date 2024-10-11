
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import TurismDefault from '../images/Turismo.jpg';
import { Container, Row, Button, Image, Stack, Card, Col } from 'react-bootstrap';

export default function SectionResults() {
  const [likedCards, setLikedCards] = useState([false, false, false, false]);
  //Simulacion de Datos
  const hotels = [
    { name: 'Hotel 1', price: 125000, stars: 3 },
    { name: 'Hotel 2', price: 110000, stars: 4 },
    { name: 'Hotel 3', price: 135000, stars: 5 },
    { name: 'Hotel 4', price: 95000, stars: 2 },
  ];
  {/* Funcionalidad a los Favoritos */}
  const toggleLike = (index) => {
    const newLikedCards = [...likedCards];
    newLikedCards[index] = !newLikedCards[index];
    setLikedCards(newLikedCards);
  };
  {/* Renderizador de cantidad de estrellas */}
  const renderStars = (count) => {
    return Array.from({ length: count }).map((_, index) => (
      <FontAwesomeIcon key={index} icon={faStar} style={{ color: "#FFD43B" }} />
    ));
  };

  return (
    <Container fluid="md" className="d-flex justify-content-center mb-5">
      <Row xs={1} md={1} lg={2} className="g-4 justify-content-center">
        {hotels.map((hotel, idx) => (
          <Col key={idx} className="d-flex justify-content-center">
            <Card className="hotel-card">
              <Stack direction="horizontal" className="align-items-center justify-content-between" gap={3}>
                {/* Imagen del hotel */}
                <div className="p-2">
                  <Image src={TurismDefault} alt="Foto de ejemplo" rounded fluid className="fotoCard"
                  />
                </div>

                {/* Datos del hotel */}
                <div className="p-2 flex-grow-1">
                  <p>{hotel.name}</p>
                  <div>{renderStars(hotel.stars)}</div>
                  <FontAwesomeIcon
                    icon={faHeart}
                    onClick={() => toggleLike(idx)}
                    style={{ color: likedCards[idx] ? "#e02e2e" : "#000000", cursor: "pointer" }}
                  />
                </div>

                {/* Precio y botón */}
                <div className="p-2 hotel-card-price">
                  <h5 className="hotel-price-text">${hotel.price.toLocaleString('es')}</h5>
                  <Button variant="success" className="hotel-card-button">
                    Ver oferta
                  </Button>
                </div>
              </Stack>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

  );
}
