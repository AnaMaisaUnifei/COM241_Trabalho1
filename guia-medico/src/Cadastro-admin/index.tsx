import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar';

function CadastroAdmin(){
  return(
    <div>
    <Navbar />
    <h1 className='container d-flex justify-content-center mt-5'>Cadastro de Administrador(a)</h1>
<div className="container d-flex justify-content-center">
        <div className="card mt-5 w-50">
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="nome">Nome Completo</label>
                        <input 
                            type="text" 
                            className="form-control"
                            id="nome" 
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
                        <label htmlFor="cpf">CPF</label>
                        <input 
                            type="text" 
                            className="form-control"
                            id="cpf" 
                            placeholder="Digite seu CPF" />
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

export default CadastroAdmin;