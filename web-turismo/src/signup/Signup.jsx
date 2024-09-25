import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane} from '@fortawesome/free-solid-svg-icons';

const Signup = () => {

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true); // Iniciar el loading

    // Simulación de una petición de register
    setTimeout(() => {
      //Guarda la informacion en localStorage
      localStorage.setItem('user', JSON.stringify(formData));
      setLoading(false); // Termina el loading después de 1 segundos
      navigate('/')
    }, 1000);
  };

  return (
    <div className="body">
      <Navbar className=" color">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} style={{textDecoration: 'none', color: 'black'}}>
            <FontAwesomeIcon icon={faPlane} rotation={50} size="xl" style={{color: "#ff7800",}} />4
            Atlas
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="addUser">
        <h3>
          Bienvenido a <i>Atlas</i>
        </h3>
        <h4>¡Acompañándote para tu próxima aventura!</h4>
        <form className="addUserForm" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              placeholder="Ingresa tu nombre"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Ingresa tu correo"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              placeholder="Ingresa tu contraseña"
              required
              value={formData.password}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-success" disabled={loading}>
              {loading ? "Cargando..." : "Registrarse"}
            </button>
          </div>
        </form>
        <div className="login">
          <p>¿Ya tienes una cuenta?</p>
          <Link to="/login" className="btn btn-primary">
            Logearse
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
