import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarLog from '../Components/NavbarLog';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Medico(){
  const [error, setError] = useState(null);
  const [guias, setGuias] = useState<Array<{ id: string; attributes: { paciente: string, status: string, descricao: string, data_consulta: string} }>>([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/guia-medicas")
      .then(({ data }) => setGuias(data.data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured</div>;
  }

  return(
    <div>
      <NavbarLog menu="medico"/>
      <h1 className='container d-flex justify-content-center mt-5'>Guias Médicas</h1>
      <div className='container d-flex justify-content-center mt-5'>
        <Link to={'/criar'}><button type="button" className="btn btn-primary">Criar Guia Médica</button></Link>
      </div>
      <div className='p-5 d-flex flex-wrap justify-content-center'>

        {guias?.map(({ id, attributes }) => (
          <div key={id} className="card border-dark m-3 w-25">
          <div className="card-header">{attributes.status}</div>
            <div className="card-body text-dark">
              <h5 className="card-title">{attributes.paciente}</h5>
              <p className="card-text">{attributes.descricao}</p>
              <p className="card-text">{attributes.data_consulta}</p>
            </div>
        </div>
        ))}
        
      </div>

    </div>
  );
}

export default Medico;