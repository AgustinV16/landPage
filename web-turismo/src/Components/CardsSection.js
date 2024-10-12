import { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas, faCircleInfo, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function CardsSection() {
  {/*Estados para eL modal */}
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="color p-4 mb-4 mt-4 rounded g-3">
      <Row className="justify-content-md-center">
        {/*Card de Agencia de Viajes*/}
        <Col>
          <Card className="p-4">
            <Card.Body>
              <Card.Title>
                Agencia de Viajes
                <FontAwesomeIcon className="ms-1" icon={faEarthAmericas} style={{ color: "#9a9996" }} />
              </Card.Title>
              <Card.Text>
                En Atlas, nuestra misión es transformar tus sueños de viaje en experiencias inolvidables. Desde nuestros inicios, hemos estado dedicados a ofrecer un servicio personalizado y excepcional que se adapta a las necesidades y deseos únicos de cada uno de nuestros clientes.

                Nuestro compromiso es proporcionar una experiencia de viaje sin estrés, con la tranquilidad de saber que estás en manos de profesionales dedicados. Estamos aquí para ayudarte a explorar el mundo con confianza y alegría.

                Gracias por considerar a Atlas para tu próxima aventura. ¡Esperamos tener la oportunidad de hacer realidad tus sueños de viaje!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/*Card de Soporte*/}
        <Col>
          <Card className="p-4">
            <Card.Body>
              <Card.Title>
                Soporte
                <FontAwesomeIcon className="ms-1" icon={faCircleInfo} style={{ color: "#9a9996" }} />
              </Card.Title>
              <Card.Text>
                En Atlas, nos comprometemos a ofrecerte una experiencia de viaje sin preocupaciones. Sabemos que pueden surgir preguntas o imprevistos antes, durante o después de tu viaje, por lo que estamos aquí para ayudarte en todo momento.

                Si tienes alguna duda, necesitas asistencia o simplemente deseas más información, no dudes en ponerte en contacto con nosotros. Nuestro equipo de soporte está disponible 24/7 para brindarte la atención que mereces.
              </Card.Text>
              <Button className="colorPurple" onClick={handleShow}>
                Déjanos tu consulta
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff" }} className="ms-1"/>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal, Envia consulta*/}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Consulta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/*Grupo de Formualario*/}
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Direccion Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Ingrese su Consulta</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
        </Modal.Body>
        {/*Boton de cerrar Modal*/}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        {/*Boton de enviar la consulta*/}
          <Button variant="primary" onClick={handleClose}>
            Enviar consulta
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
export default CardsSection;