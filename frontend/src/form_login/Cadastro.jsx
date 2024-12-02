import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"

import "./Cadastro.css"
import dragao from "../imgs/img_header/dragao.png"


const Cadastro = () => {
  const handleClickCadastro = (values) => console.log(values)

  const validationCadastro = yup.object().shape({
    email: yup
      .string()
      .email("Não é um email")
      .required("Este campo é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter 8 caracteres")
      .required("Este campo é obrigatório"),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas não são iguais"),
  })

  return (
    <div className="container_cadastro">
      <header>
        <img className="dragao_logo" src={dragao} alt="" />
      </header>

      <Formik className="div_cadastro"
        initialValues={{}}
        onSubmit={handleClickCadastro}
        validationSchema={validationCadastro}
      >
        <Form className="cadastro">
          <h1>Cadastro</h1>

          <div className="login-form-group">
            <Field name="name" placeholder="Nome" className="nome" required />
          </div>

          <div className="login-from-group">
            <Field name="email" placeholder="E-mail" className="email" required />
            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>

          <div className="div_senha">
            <Field
              name="password"
              placeholder="Senha" className="senha" required
            />
            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
            <div className="div_confirmeSenha">
              <Field
                name="confirmPassword"
                placeholder="Confirme sua Senha" className="senha" required
              />
              <ErrorMessage
                component="span"
                name="confirmPassword"
                className="form-error"
              />
            </div>
          </div>
          <button type="submit" className="button_cadastro">Cadastrar</button>
          <hr />
          <p>Já tem uma conta?<a href="">Entrar</a></p>
        </Form>
      </Formik>

    </div>
  )
}

export default Cadastro