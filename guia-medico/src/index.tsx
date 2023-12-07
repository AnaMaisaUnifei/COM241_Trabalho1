import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './Login';
import CadastroAdmin from './Cadastro-admin';
import CadastroPaciente from './Cadastro-paciente';
import CadastroMed from './Cadastro-med';
import Guias from './Guias';
import Medico from './Medico';
import Admin from './Admin';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastroadm",
    element: <CadastroAdmin />,
  },
  {
    path: "/cadastropaciente",
    element: <CadastroPaciente />,
  },
  {
    path: "/cadastromed",
    element: <CadastroMed />,
  },
  {
    path: "/guias",
    element: <Guias />,
  },
  {
    path: "/medico",
    element: <Medico />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
