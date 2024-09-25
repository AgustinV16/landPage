import React, {useState} from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane} from '@fortawesome/free-solid-svg-icons';

const Login = () => {

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(""); // Estado para el mensaje de error
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    setTimeout(() => {
      // Obtener usuario del localStorage
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (!storedUser) {
        // Si no hay ningún usuario en localStorage
        setErrorMessage("El usuario no existe.");
        setLoading(false)
        return;
      }

      // Verificar si el email y la contraseña coinciden
      if (formData.email === storedUser.email && formData.password === storedUser.password) {
        setErrorMessage(""); // Limpiar el mensaje de error si el login es exitoso
        navigate("/"); // Redirigir a la página principal
      } else {
        // Mostrar mensaje de error si las credenciales no coinciden
        setErrorMessage("Correo o contraseña incorrectos.");
      }
      setLoading(false); // Finalizar loading
    }, 1000)
    

    // // Valida si los campos están llenos
    // if (!formData.email || !formData.password) {
    //   return;
    // }

    // setLoading(true); // Iniciar el loading

    // // Simulación de una petición de login (ej: llamar a una API)
    // setTimeout(() => {
    //   setLoading(false); // Terminar el loading después de 1 segundos
    //   navigate('/')
    // }, 1000);
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
    <div>
      <div className="addUser">
        <h3>
          Bienvenido a <i>Atlas</i>
        </h3>
        <h4>¡Acompañándote para tu próxima aventura!</h4>
        <form className="addUserForm" onSubmit={handleSubmit}>
          <div className="inputGroup">
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
              {loading ? "Cargando..." : "Login"}
            </button>
          </div>
        </form>
        {/* Mostrar mensaje de error si existe */}
        {errorMessage && <p style={{ color: "red", textAlign: 'left', paddingTop: 15 }}>{errorMessage}</p>}
        <div className="login">
          <p>¿Todavía no tienes una cuenta?</p>
          <Link to="/signup" className="btn btn-primary">
            Registrarse
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
