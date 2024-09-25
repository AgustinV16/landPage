import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";

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
