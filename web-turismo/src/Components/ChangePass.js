import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";


const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (newPassword !== confirmPassword) {
        setErrorMessage("Las contraseñas no coinciden.");
        setLoading(false);
        return;
      }

      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        storedUser.password = newPassword;
        localStorage.setItem('user', JSON.stringify(storedUser));

        setLoading(false);
        navigate('/');
      }
    }, 1000);
  };

  return (
    <div className="body">
      <Navbar className="color">
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
        <form className="addUserForm" onSubmit={handlePasswordChange}>
          <div className="inputGroup">
            <label>Nueva Contraseña:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Ingresa tu nueva contraseña"
              required
            />
            <label>Confirmar Contraseña:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirma tu nueva contraseña"
              required
            />
            <button type="submit" className="btn btn-success" disabled={loading}>
              {loading ? "Guardando..." : "Guardar Nueva Contraseña"}
            </button>
          </div>
        </form>
        {errorMessage && <p style={{ color: "red", textAlign: "left", paddingTop: 15 }}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default ChangePassword;
