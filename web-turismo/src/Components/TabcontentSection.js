import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Tab, Row, Nav, Container, Form, Button, Modal, Image, Stack, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import TurismDefault from '../images/Turismo.jpg';
import defaultImage from '../images/Default.jpg';


function TabsContent() {
  // Estados para ambos modales
  const [showImageModal, setShowImageModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const handleCloseImage = () => setShowImageModal(false);
  const handleShowImage = () => setShowImageModal(true);
  const handleClosePassword = () => setShowPasswordModal(false);
  const handleShowPassword = () => {
    setShowPasswordModal(true);

    // Simulacion de confirmacion de correo
    setTimeout(()=> {
      setShowPasswordModal(false)
      navigate('/change-password')
    }, 1800)
  }

  // Estado para loading de guardar cambios
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  // Estado para favoritos
  const [likedCards, setLikedCards] = useState([true, false, false, false]);
  
  //simulacion de datos
  const hotels = [
    { name: 'Hotel 1', price: 125000, stars: 3 },
    { name: 'Hotel 2', price: 110000, stars: 4 },
    { name: 'Hotel 3', price: 135000, stars: 5 },
    { name: 'Hotel 4', price: 95000, stars: 2 },
  ];

  const toggleLike = (index) => {
    const updatedFavorites = likedCards.filter((_, idx) => idx !== index);
    setLikedCards(updatedFavorites);
    localStorage.setItem('favoriteHotels', JSON.stringify(updatedFavorites));
  };

  //Obtine los favoritos de localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteHotels')) || [];
    setLikedCards(storedFavorites);
  }, []);

  //Sincronizacion con la pestaña favoritos
  useEffect(() => {
    const handleStorageChange = () => {
      const storedFavorites = JSON.parse(localStorage.getItem('favoriteHotels')) || [];
      setLikedCards(storedFavorites);
    };
  
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
    //Para renderizar cantidad de estrellas
  const renderStars = (count) => {
    return Array.from({ length: count }).map((_, index) => (
      <FontAwesomeIcon key={index} icon={faStar} style={{ color: "#FFD43B" }} />
    ));
  };

  // Navegación
  const handleClick = () => setLoading(true);
  const navigate = useNavigate();
  const handleMainClick = () => {
    navigate('/');
  };

  // Name y Email del localStorage

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Estado para almacenar la imagen subida
  const [profileImage, setProfileImage] = useState(defaultImage);
  const [selectedImage, setSelectedImage] = useState(null);

  // User localStorage

  useEffect(()=>{
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setName(storedUser.name || '');
      setEmail(storedUser.email || '');
      if (storedUser.profileImage) {
        setProfileImage(storedUser.profileImage); // Si hay imagen en localStorage
      }
    }
  }, []);
  
   // Función para manejar la selección de una imagen
   const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file); // Datos base64
    }
  };


  // Función para guardar los cambios en el localStorage
  const handleSaveChanges = () => {
    const updatedUser = { name, email, profileImage: selectedImage||profileImage };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setProfileImage(selectedImage || profileImage)
    setLoading(true);

    // Simular la demora de guardar cambios
    setTimeout(() => {
      setLoading(false); // Desactivar el estado de carga
    }, 1000);
  };



  return (
    <div className="p-5 mb-5 backgroundColor">
      {/* Redirige la pag hacia atras => Main */}
      
      <Button onClick={handleMainClick} className="mb-3 colorPurple">
        Ir Atrás
      </Button>

      {/* Comienzo del panel*/}

      <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="backgroundColorSeccion" >
        
        <Row className="backgroundColorSeccion mb-5 p-2" >
          <h2>Mi Perfil</h2>
          {/* Menu de tabs */}
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Información Personal</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Favoritos</Nav.Link>
              </Nav.Item>
              
            </Nav>
          </Col>
          {/* Contenidos de cada Tabs */}
          <Col sm={9}>
            <Tab.Content className="backgroundColorSeccion">
              {/* Primer Panel: Información Personal */}
              <Tab.Pane eventKey="first">
                {/* Imagen del perfil */}
                <p>Foto de perfil</p>
                <Col xs={5} md={4}>
                  <Image src={profileImage} alt="Foto de perfil" className="fotoPequeña mb-3" roundedCircle />
                </Col>
                {/* Formulario */}
                <Form>
                  {/* Botón para cambiar foto de perfil */}
                  <Button variant="primary" onClick={handleShowImage} className="mb-3">
                    Cambiar foto de perfil
                  </Button>

                  {/* Modal para cambiar la foto de perfil */}
                  <Modal show={showImageModal} onHide={handleCloseImage}>
                    <Modal.Body>
                      <Form>
                        <Form.Group controlId="formFile" className="mb-3">
                          <Form.Label>Sube la imagen</Form.Label>
                          <Form.Control type="file" onChange={handleImageChange}/>
                        </Form.Group>
                      </Form>
                      {/* Previsualización de la imagen seleccionada */}
                      {selectedImage && (
                        <div className="text-center">
                          <p>Previsualización:</p>
                          <Image src={selectedImage} alt="Previsualización" roundedCircle style={{ width: '150px', height: '150px' }} />
                        </div>
                      )}
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleCloseImage}>
                        Cancelar
                      </Button>
                      <Button variant="primary" onClick={handleCloseImage}>
                        Guardar Cambios
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  <Row>
                    {/* Nombre de Usuario */}
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control value={name} onChange={(e)=> {setName(e.target.value)}} placeholder={name} />
                      </Form.Group>
                    </Col>
                    {/* Monedas */}
                    <Col>
                      <Form.Group controlId="formGridState">
                        <Form.Label>Monedas</Form.Label>
                        <Form.Select defaultValue="ARS">
                          <option>ARS</option>
                          <option>USD</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Email */}
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder={email} />
                  </Form.Group>

                  {/* Botón para cambiar contraseña */}
                  <Button variant="primary" onClick={handleShowPassword} className="mb-3">
                    Cambiar Contraseña
                  </Button>

                  {/* Modal para cambiar la contraseña */}
                  <Modal show={showPasswordModal} onHide={handleClosePassword}>
                    <Modal.Body>
                      <p>Se ha enviado un correo a {email}, al darle a confirmar se te redirigirá a una pagina para restablecer tu contraseña</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClosePassword}>
                        Cerrar
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  {/* Botón para guardar cambios */}
                  <Col>
                    <Button className="mb-3 colorPurple" disabled={isLoading} onClick={handleSaveChanges}>
                      {isLoading ? 'Guardando…' : 'Guardar Cambios'}
                    </Button>
                  </Col>
                </Form>
              </Tab.Pane>

              {/* Segundo Panel: Favoritos */}
              <Tab.Pane eventKey="second">
                <Container fluid="md" className="d-flex justify-content-center mb-5">
                  <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
                    {likedCards.length === 0 ? (
                      <p>No tienes hoteles favoritos aún.</p>
                    ) : (
                      likedCards.map((hotel, idx) => (
                        <Col key={idx} className="d-flex justify-content-center">
                          <Card className="hotel-card">
                            <Stack direction="vertical" className="align-items-center justify-content-between" gap={3}>
                              {/* Imagen del hotel */}
                              <div className="p-2">
                                <Image
                                  src={TurismDefault}
                                  alt="Foto de ejemplo"
                                  fluid
                                  className="fotoCard"
                                  style={{ width: "100%", height: "auto" }} // Hacer que la imagen sea responsiva
                                />
                              </div>

                              {/* Datos del hotel */}
                              <div className="p-2 flex-grow-1 text-center">
                                <p className="hotel-name">{hotel.name}</p>
                                <div className="hotel-stars">{renderStars(hotel.stars)}</div>
                                {/* Botón de eliminar de favoritos */}
                                <FontAwesomeIcon
                                  icon={faHeart}
                                  onClick={() => toggleLike(idx)}
                                  style={{ color: "#e02e2e", cursor: "pointer" }}
                                />
                              </div>

                              {/* Botón de ver oferta */}
                              <div className="p-2 hotel-card-price">
                                <Button
                                  variant="success"
                                  className=" hotel-card-button"
                                  style={{ width: "100%" }} // Botón de tamaño completo
                                >
                                  Ver oferta
                                </Button>
                              </div>
                            </Stack>
                          </Card>
                        </Col>
                      ))
                    )}
                  </Row>
                </Container>
              </Tab.Pane>



              
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default TabsContent;
