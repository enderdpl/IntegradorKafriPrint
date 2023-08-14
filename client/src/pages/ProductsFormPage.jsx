import { useForm } from "react-hook-form";
import { useProducts } from "../context/ProductsContext";
import { useNavigate } from "react-router-dom";
import "../style/preguntas.css"

function ProductsFormPage() {

    const { register, handleSubmit } = useForm();
    const {createProduct}= useProducts();

    const navigate= useNavigate();

   const  onSubmit= handleSubmit((data) => {
      createProduct(data);
      navigate("/products");
    })
 
  return (
    <div className="my-form">
      <div className="mb-3">

      <form onSubmit={ onSubmit}>

        <input className="form-control" type="text" placeholder="title" {...register("title")} autoFocus />

        <input className="form-control" type="number" placeholder="price" {...register("price")} />

        <input className="form-control" type="text" placeholder="description" {...register("description")} />

        <input className="form-control" type="text" placeholder="category" {...register("category")} />

        <input className="form-control" type="text" placeholder="url" {...register("url")} />
        



        {/* ACAAAAA VA A IR LA IMAGEN CON FIREBASE */}



        

        <button className="btn btn-primary">Agregar Producto</button>



      </form>
      </div>

    </div>
  )
}

export default ProductsFormPage