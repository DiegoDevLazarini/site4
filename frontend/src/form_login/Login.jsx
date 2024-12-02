import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"

import dragao from "../imgs/img_header/dragao.png"
import './Login.css'
import Cadastro from "./Cadastro.jsx"



const login = () => {
  return (
    <div className="container_login">
      <header>
        <img className="dragao_logo" src={dragao} alt="" />
      </header>

      <div className="div_login">
        <div className="login">
          <h1>Login</h1>
          <input type="email" placeholder="E-mail" className="email" required />


          <div className="div_senha">
            <input
              type="password"
              placeholder="Senha" className="senha" required
            />
          </div>
          <a className="lost_pass" href="#">Esqueceu a senha?</a>
          <button className="button_login">Entrar</button>
          <hr />
          <p>Não tem uma conta?<a href={Cadastro}>Registrar</a></p>
        </div>
      </div>

    </div>
  )
}

export default login
