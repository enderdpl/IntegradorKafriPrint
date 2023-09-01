// import { useForm } from "react-hook-form";
// import { useAuth } from "../context/AuthContext";
// import { Link, useNavigate } from "react-router-dom";
// import { useEffect } from "react";


// function LoginPage() {

//   const {register,handleSubmit, formState : {errors} } = useForm()

//   const {signin, errors:signinErrors, isAuthenticate }= useAuth()
//   const navigate= useNavigate()

//   const onSubmit= handleSubmit((data)=>{
//       signin(data)
//   })

//   useEffect(() =>{
//       if (isAuthenticate) {
//       navigate('/products')
//   }
//   }, [isAuthenticate])

//   return (
//     <div>

//    {  
//      signinErrors.map((error,i)=>(
//         <div className="errors" key={i}>
//           {error}
//           </div>
//             ))
//    }

//    <h1>LOGIN</h1>
//    <form onSubmit={onSubmit} className="my-form">
//   <div className="mb-3">
//     <input
//       type="text"
//       {...register("email", { required: true })}
//       className="form-control"
//       placeholder="Email"
//     />
//     {errors.email ? (
//             <p> email es requerido</p>
//             ) : null}
//   </div>
//   <div className="mb-3">
//     <input
//       type="password"
//       {...register("password", { required: true })}
//       className="form-control"
//       placeholder="Password"
//     />
//     {errors.password ? (
//             <p> Contraseña es Requerida</p>
//             ) : null}
//   </div>
//   <button type="submit" className="btn btn-primary">
//     Iniciar Sesion
//   </button>
//   <p>
//   ¿Olvidaste tu contraseña? <Link to="/" className="btn-btn-danger">Recuperar</Link> 
// </p>
// </form>




//     </div>
//   )
// }

// export default LoginPage

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


    < div id="page-login" >


      {
        signinErrors.map((error, i) => (
          <div className="errors" key={i}>
            {error}
          </div>
        ))
      }


      <form onSubmit={onSubmit} className="form-login">
        <div className="form-field-login">
          <input
            type="text"
            {...register("email", { required: true })}
            placeholder="Email"
          />
          {errors.email ? (
            <p> email es requerido</p>
          ) : null}
        </div>
        <div className="form-field-login">
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
          />
          {errors.password ? (
            <p> password es requerido</p>
          ) : null}
        </div>
        <div className="form-field-login">
          <button type="submit" className="btn-login">
            Ingresar
          </button>
        </div>
        <p className="cant-login">
          ¿No tienes cuenta? <Link to="/register" className="btn-btn-danger">Registrarse</Link>
        </p>
      </form>
      < div id="bg-login" ></div >




    </div >
  )
}

export default LoginPage