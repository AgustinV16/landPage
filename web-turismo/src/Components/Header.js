import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Button, ButtonGroup, Navbar, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {

  const [user, setUser] = useState(null); //Almacena el nombre de usuario

  // Funcionalidad del boton login
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  }

  const handleLogout = () => {
    localStorage.removeItem('user') // Elimina el usuario del localStorage
    setUser(null)
    navigate('/') // Redirige a la página principal
  };

  // Verificar si hay un usuario en localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.name) {
      setUser(storedUser.name); // Guardar el nombre del usuario si existe
    }
  }, []); // Solo se ejecuta una vez al montar el componente

  return (
    <>
      {/* Header MAIN */}
      <Navbar className="bg-body-tertiary color">
        <Container>
          <Navbar.Brand href="#home">
          <FontAwesomeIcon icon={faPlane} rotation={50} size="xl" style={{color: "#ff7800",}} />4
            Atlas
          </Navbar.Brand>
          
          {/* Grupo de Botones con Dropdown */}
          <ButtonGroup>
            {/* Dropdown de Opciones */}
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />
              <Dropdown.Menu>
                <Dropdown.Item eventKey="1">Soporte</Dropdown.Item>
                <Dropdown.Item eventKey="2">Nosotros</Dropdown.Item>
                {user && (
                  <Dropdown.Item eventKey="3" onClick={handleLogout}>Cerrar sesión</Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
            {/* Botón de Iniciar Sesión o Nombre de usuario*/}
            {user ? (
              <Button variant="light">
                {user}
                <FontAwesomeIcon className="ms-2" icon={faUser} size="lg" style={{ color: "#c0bfbc" }} />
              </Button>
            ) : (
              <Button onClick={handleLoginClick} variant="light">
                Iniciar Sesión
                <FontAwesomeIcon className="ms-2" icon={faUser} size="lg" style={{ color: "#c0bfbc" }} />
              </Button>
            )}
            
            
          </ButtonGroup>
          
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
