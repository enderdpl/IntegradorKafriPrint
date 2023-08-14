import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Link,useNavigate} from "react-router-dom";

function RegisterPage() {
  const {register,
    handleSubmit,
    formState: {errors}
   }= useForm()
 const { signup , isAuthenticate, errors: registerErrors   }= useAuth()
   const navigate= useNavigate()
 useEffect(()=>{
   if(isAuthenticate) navigate('/login')
 }, [isAuthenticate])
 
 const onSubmit= handleSubmit(async (values)=>{
   signup(values);
 })

  return (
    <div>

{
            registerErrors.map((error,i)=>(
                <div className="errors" key={i}>
                    {error}

                </div>
            ))

        }
        <form onSubmit={onSubmit} className="my-form">
  <div className="mb-3">

 
    <input

      type="text"
      {...register("username", { required: true })}
      className="form-control"
      placeholder="Username"
    />
     {errors.username ? (
            <p>Username es requerido</p>
            ) : null}
  </div>
  <div className="mb-3">
    <input
      type="text"
      {...register("email", { required: true })}
      className="form-control"
      placeholder="Email"
    />
    {errors.email ? (
            <p> email es requerido</p>
            ) : null}
  </div>
  <div className="mb-3">
    <input
      type="password"
      {...register("password", { required: true })}
      className="form-control"
      placeholder="Password"
    />
    {errors.password ? (
            <p> password es requerido</p>
            ) : null}
  </div>
  <button type="submit" className="btn btn-primary">
    Register
  </button>
  <p>
  ¿Ya tienes una cuenta? <Link to="/login" className="btn-btn-danger">Inicio Sesion</Link> 
</p>
</form>


    </div>
  )
}

export default RegisterPage