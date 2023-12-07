import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar';

function Login() {
  return (
    <div>
        <Navbar/>
        <h1 className='container d-flex justify-content-center mt-5'>Login</h1>
    <div className="container d-flex justify-content-center">
            <div className="card mt-5 w-50">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input 
                                type="email" 
                                className="form-control"
                                id="email" 
                                placeholder="E-mail" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Senha</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="password" 
                                placeholder="Senha"/>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3 d">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
  );
}

export default Login;
