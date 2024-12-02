import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './form_login/Login.jsx'
import Cadastro from './form_login/Cadastro.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Login /> */}
    <Cadastro />
  </StrictMode>,
)
