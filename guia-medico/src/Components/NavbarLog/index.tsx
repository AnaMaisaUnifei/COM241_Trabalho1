import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

function Navbar(props: { menu: string; }){

  if (props.menu == "paciente"){
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
    <h5>Guias Médicas</h5>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={"/login"} className="nav-link">Sair</Link>
        </li>
        <li className="nav-item">
          <Link to={"/guias"} className="nav-link">Guias</Link>
        </li>
      </ul>
    </div>
  </nav>
  );
  }

  if(props.menu == "medico"){
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
    <h5>Guias Médicas</h5>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={"/login"} className="nav-link">Sair</Link>
        </li>
        <li className="nav-item">
          <Link to={"/medico"} className="nav-link">Guias</Link>
        </li>
      </ul>
    </div>
  </nav>
  );
  }

  if(props.menu == "admin"){
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
    <h5>Guias Médicas</h5>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={"/login"} className="nav-link">Sair</Link>
        </li>
        <li className="nav-item">
          <Link to={"/admin"} className="nav-link">Guias</Link>
        </li>
      </ul>
    </div>
  </nav>
  );
  }

  return (
    <div></div>
  );
}

export default Navbar;