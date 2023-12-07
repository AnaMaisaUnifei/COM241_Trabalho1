import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar';

function CadastroMed(){
  return(
    <div>
        <Navbar />
        <h1 className="container d-flex justify-content-center mt-5">Cadastro de Médico(a)</h1>
    <div className="container d-flex justify-content-center">
            <div className="card mt-5 w-50">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="nomeMed">Nome Completo</label>
                            <input 
                                type="text" 
                                className="form-control"
                                id="nomeMed" 
                                placeholder="Digite seu Nome Completo" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input 
                                type="email" 
                                className="form-control"
                                id="email" 
                                placeholder="E-mail" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">CRM</label>
                            <input 
                                type="text" 
                                className="form-control"
                                id="crm" 
                                placeholder="Digite seu CRM" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Especialidade</label>
                            <input 
                                type="text" 
                                className="form-control"
                                id="Especialidade" 
                                placeholder="Digite sua Especialidade" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Senha</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="password" 
                                placeholder="Senha"/>
                        </div>
                        <button type="submit" className="btn btn-success mt-3">Cadastrar!</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CadastroMed;