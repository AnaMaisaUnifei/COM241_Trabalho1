import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarLog from '../Components/NavbarLog';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Admin(){
  const [error, setError] = useState(null);
  const [guias, setGuias] = useState<Array<{ id: string; attributes: { paciente: string, status: string, descricao: string, data_consulta: string} }>>([]);
  const [id, setId] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/guia-medicas")
      .then(({ data }) => setGuias(data.data))
      .catch((error) => setError(error));
  }, []);

  return(
    <div>
      <NavbarLog menu="admin"/>
      <h1 className='container d-flex justify-content-center mt-5'>Guias Médicas Aguardando Resposta</h1>
      <div className='p-5 d-flex flex-wrap justify-content-center'>

        {guias?.filter(({ attributes }) => attributes?.status === 'pendente')
  .map(({ id, attributes }) => (
          <div key={id} className="card border-dark m-3 w-25">
          <div className="card-header">{attributes.status}</div>
            <div className="card-body text-dark">
              <h5 className="card-title">{attributes.paciente}</h5>
              <p className="card-text">{attributes.descricao}</p>
              <p className="card-text">{attributes.data_consulta}</p>
              <div className='container d-flex justify-content-center mt-5'>
              <button type="button" className="btn btn-success m-2">Aceitar</button>
              <button type="button" className="btn btn-danger m-2">Rejeitar</button>
      </div>
            </div>
        </div>
        ))}
        
      </div>

    </div>
  );
}

export default Admin;