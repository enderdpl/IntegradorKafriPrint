import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import "../style/login.css"

function LoginPage() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const { signin, errors: signinErrors, isAuthenticate } = useAuth()
  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    signin(data)
  })

  useEffect(() => {
    if (isAuthenticate) {
      navigate('/products')
    }
  }, [isAuthenticate])

  return (
    <div id="page">

      {
        signinErrors.map((error, i) => (
          <div className="errors" key={i}>
            {error}
          </div>
        ))
      }

      <div id="bg"></div>
      <form onSubmit={onSubmit} class="test">
        <div className="form-field">
          <input
            type="text"
            {...register("email", { required: true })}
            placeholder="Email"
          />
          {errors.email ? (
            <p> email es requerido</p>
          ) : null}
        </div>
        <div className="form-field">
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
          />
          {errors.password ? (
            <p> password es requerido</p>
          ) : null}
        </div>
        <div className="form-field">
          <button type="submit" className="btn">
            Ingresar
          </button>
        </div>
        <p className="no-tienes-cuenta">
          ¿No tienes cuenta? <Link to="/register" className="btn-btn-danger">Registrarse</Link>
        </p>
      </form>




    </div >
  )
}

export default LoginPage