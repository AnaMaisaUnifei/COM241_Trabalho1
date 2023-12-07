import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

function Navbar(){
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
  <h5>Guias Médicas</h5>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to={"/"} className="nav-link" >Login</Link>
      </li>
      <li className="nav-item">
        <Link to={"/cadastropaciente"} className="nav-link">Cadastro Paciente</Link>
      </li>
      <li className="nav-item">
        <Link to={"/cadastromed"} className="nav-link">Cadastro Médico</Link>
      </li>
      <li className="nav-item">
        <Link to={"/cadastroadm"} className="nav-link">Cadastro Admin</Link>
      </li>
      <li className="nav-item">
        <Link to={"/medico"} className="nav-link">Medico</Link>
      </li>
      <li className="nav-item">
        <Link to={"/guias"} className="nav-link">Paciente</Link>
      </li>
      <li className="nav-item">
        <Link to={"/admin"} className="nav-link">Admin</Link>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Navbar;