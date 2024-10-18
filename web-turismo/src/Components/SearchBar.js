import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faSearch, faUser, faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../App.css';

const SearchBar = () => {
  const navigate = useNavigate();

  // Estados para almacenar los valores de los inputs
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [transport, setTransport] = useState('avion');

  // Cargar datos de localStorage al montar el componente
  useEffect(() => {
    const savedOrigin = localStorage.getItem('origin');
    const savedDestination = localStorage.getItem('destination');
    const savedStartDate = localStorage.getItem('startDate');
    const savedEndDate = localStorage.getItem('endDate');
    const savedPassengers = localStorage.getItem('passengers');
    const savedTransport = localStorage.getItem('transport');

    if (savedOrigin) setOrigin(savedOrigin);
    if (savedDestination) setDestination(savedDestination);
    if (savedStartDate) setStartDate(savedStartDate);
    if (savedEndDate) setEndDate(savedEndDate);
    if (savedPassengers) setPassengers(savedPassengers);
    if (savedTransport) setTransport(savedTransport);
  }, []);

  // Guardar datos en localStorage al hacer clic en buscar
  const handleSearchClick = () => {
    localStorage.setItem('origin', origin);
    localStorage.setItem('destination', destination);
    localStorage.setItem('startDate', startDate);
    localStorage.setItem('endDate', endDate);
    localStorage.setItem('passengers', passengers);
    localStorage.setItem('transport', transport);

    navigate('/resultSearch');
  };

  return (
    <Container className="color p-3 mb-5 mt-3 rounded">
      <Form>
        <Row className="g-1 mb-3">
          {/* Grupo 1: Origen y Destino */}
          <Col md={4} className="mb-2">
            <Form.Group>
              <Form.Label className="fw-bold">Origen y Destino</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Lugar de Origen"
                  aria-label="Origen"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)} // Actualizar estado
                />
                <Form.Control
                  placeholder="Lugar de Destino"
                  aria-label="Destino"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)} // Actualizar estado
                />
              </InputGroup>
            </Form.Group>
          </Col>

          {/* Grupo 2: Fecha de Ida y Vuelta */}
          <Col md={4} className="mb-2">
            <Form.Group>
              <Form.Label className="fw-bold">Fechas</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </InputGroup.Text>
                <Form.Control
                  type="date"
                  aria-label="Fecha Ida"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)} // Actualizar estado
                />
                <Form.Control
                  type="date"
                  aria-label="Fecha Vuelta"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)} // Actualizar estado
                />
              </InputGroup>
            </Form.Group>
          </Col>

          {/* Grupo 3: Pasajeros y Transporte */}
          <Col md={3} className="mb-2">
            <Form.Group>
              <Form.Label className="fw-bold">Pasajeros/Transporte</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faUser} />
                </InputGroup.Text>
                <Form.Control
                  type="number"
                  min="1"
                  placeholder="Pasajeros"
                  aria-label="Pasajeros"
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)} // Actualizar estado
                />
                <Form.Select
                  aria-label="Transporte"
                  value={transport}
                  onChange={(e) => setTransport(e.target.value)} // Actualizar estado
                >
                  <option value="avion">Avión</option>
                  <option value="autobus">Autobús</option>
                  <option value="barco">Barco</option>
                </Form.Select>
              </InputGroup>
            </Form.Group>
          </Col>

          {/* Botón de búsqueda */}
          <Col md={1} className="d-flex align-items-end mb-2">
            <Button
              as={Col}
              type="button"
              onClick={handleSearchClick}
              className="w-100 colorPurple d-flex justify-content-center align-items-center"
            >
              <span className="button-text">Buscar</span>
              <FontAwesomeIcon icon={faSearch} className="ms-1" />
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default SearchBar;
