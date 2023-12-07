import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarLog from '../Components/NavbarLog';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CriarGuia: React.FC = () => {
    const headers = { "Content-Type": "application/json" };
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    
    // Utilize um estado separado para cada campo do formulário
    const [paciente, setPaciente] = useState("");
    const [data_consulta, setData] = useState("");
    const [descricao, setDesc] = useState("");
    const [medico, setMedico] = useState("");
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      try {
        setLoading(true);
  
        const response = await fetch("http://localhost:1337/api/guia-medicas", {
          headers,
          method: "POST",
          body: JSON.stringify({
            data: {
              paciente,
              data_consulta,
              descricao,
              medico,
              status: "pendente"
            },
          }),
        });
  
        if (!response.ok) {
          throw new Error('Erro ao criar guia médica');
        }
  
        console.log(response);
        navigate('/medico');
        // Redirecionar ou realizar outras ações após o sucesso
      } catch (error) {
        setError("Erro");
      } finally {
        setLoading(false);
      }
    };

  return(
    <div>
    <NavbarLog menu="medico" />
    <h1 className='container d-flex justify-content-center mt-5'>Criar Guia Médica</h1>
<div className="container d-flex justify-content-center">
        <div className="card mt-5 w-50">
            <div className="card-body">
            <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="paciente">Paciente</label>
          <input
            type="text"
            className="form-control"
            id="paciente"
            placeholder="Paciente"
            onChange={(e) => setPaciente(e.target.value)}
            value={paciente}
          />
        </div>
        <div className="form-group">
          <label htmlFor="data-con">Data da Consulta</label>
          <input
            type="date"
            className="form-control"
            id="data-con"
            placeholder="Data da Consulta"
            onChange={(e) => setData(e.target.value)}
            value={data_consulta}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Descrição</label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Descrição"
            onChange={(e) => setDesc(e.target.value)}
            value={descricao}
          />
        </div>
        <div className="form-group">
          <label htmlFor="medico">Médico(a)</label>
          <input
            type="text"
            className="form-control"
            id="medico"
            placeholder="Médico(a)"
            onChange={(e) => setMedico(e.target.value)}
            value={medico}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Criar!
        </button>
      </form>
            </div>
        </div>
    </div> 
</div> 
  );
}

export default CriarGuia;