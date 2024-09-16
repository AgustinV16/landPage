import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="addUser">
      <h3>Bienvenido a <i>Atlas</i></h3>
      <h4>¡Acompañandote para tu proxima aventura!</h4>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Ingresa tu nombre"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Ingresa tu correo"
          />
          <label htmlFor="Password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Ingresa tu contraseña"
          />
          <button type="submit" class="btn btn-success">
            Registrarse
          </button>
        </div>
      </form>
      <div className="login">
        <p>Ya tienes una cuenta? </p>
        <Link to="/login" type="submit" class="btn btn-primary">
          Logearse
        </Link>
      </div>
    </div>
  );
};

export default Signup;
