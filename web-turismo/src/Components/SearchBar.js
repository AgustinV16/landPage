import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faSearch, faUser, faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import '../App.css';

const SearchBar = () => {
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
                <Form.Control placeholder="Lugar de Origen" aria-label="Origen" />
                <Form.Control placeholder="Lugar de Destino" aria-label="Destino" />
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
                <Form.Control type="date" aria-label="Fecha Ida" />
                <Form.Control type="date" aria-label="Fecha Vuelta" />
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
                <Form.Control type="number" min="1" placeholder="Pasajeros" aria-label="Pasajeros" />
                <Form.Select aria-label="Transporte">
                  <option value="avion">Avión</option>
                  <option value="autobus">Autobús</option>
                  <option value="barco">Barco</option>
                </Form.Select>
              </InputGroup>
            </Form.Group>
          </Col>

          {/* Botón de búsqueda */}
          <Col md={1} className="d-flex align-items-end mb-2">
            <Button as={Col} type="submit" className="w-100 colorPurple d-flex justify-content-center align-items-center ">
              <span className="button-text "> Buscar</span> {/* Añadimos span para controlar el texto */}
              <FontAwesomeIcon  icon={faSearch} className="ms-1"/>
            </Button>
          </Col>

        </Row>
      </Form>
    </Container>
  );
}

export default SearchBar;
