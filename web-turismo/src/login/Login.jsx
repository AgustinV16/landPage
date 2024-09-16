import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="addUser">
      <h3>Bienvenido a <i>Atlas</i></h3>
      <h4>¡Acompañandote para tu proxima aventura!</h4>
      <form className="addUserForm">
        <div className="inputGroup">
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
            Login
          </button>
        </div>
      </form>
      <div className="login">
        <p>Todavia no tienes una cuenta? </p>
        <Link to="/" type="submit" class="btn btn-primary">
          Registrarse
        </Link>
      </div>
    </div>
  );
};

export default Login;
