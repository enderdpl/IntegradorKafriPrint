import { useForm } from "react-hook-form";
import { useProducts } from "../context/ProductsContext";
import { useNavigate,useParams } from "react-router-dom";
import "../style/preguntas.css";
import { storage } from "../firebase/config";
import { useState,useEffect } from "react";

function ProductsFormPage() {
  const [imageUploaded, setImageUploaded] = useState(false)
  const [file, setFile] = useState(null);
  const { register, handleSubmit, setValue} = useForm();
  const { createProduct,getProduct, updateProduct  } = useProducts();
  const navigate = useNavigate();
  const params= useParams();
  useEffect(()=>{
   async function loadProduct() {
      if (params.id){

      const product= await getProduct(params.id);
      console.log(product)
      setValue('title', product.title)
      setValue('description', product.description)
      setValue('price', product.price)
      setValue('category', product.category)




    }
    }
    loadProduct()
  },[]);

  const escucharFile = (e) => {
    const selectFile = e.target.files[0];
    setFile(selectFile);
  };

  const guardarArchivo = async () => {
    if (file) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name);
  
      try {
        await fileRef.put(file);
        const urlFirebase = await fileRef.getDownloadURL(); // Obtener la URL de descarga
        
        // Actualizar el valor de "url" usando setValue
        setValue("url", urlFirebase);
        setImageUploaded(true);
    setTimeout(() => {
      setImageUploaded(false);
    }, 3000);
  
        console.log("esta es la url", urlFirebase); // Mostrar la URL en la consola
      } catch (error) {
        console.error("Error al subir el archivo:", error);
      }
    }
  };
  
  

  const onSubmit = handleSubmit(async (data) => {
    try {
      
       if (params.id){
          updateProduct(params.id, data);
       }

       else {
        await createProduct(data);
       }
       
    } catch (error) {
      console.error("Error al crear el producto:", error);
    }
    navigate("/products");

  });

  return (
    <div className="my-form">
      <div className="mb-3">
        <form onSubmit={onSubmit}>
          <input className="form-control" type="text" placeholder="title" {...register("title")} autoFocus />
          <input className="form-control" type="number" placeholder="price" {...register("price")} />
          <input className="form-control" type="text" placeholder="description" {...register("description")} />
          <input className="form-control" type="text" placeholder="category" {...register("category")} />
          <input type="file" onChange={escucharFile} />

           <button
            type="button"
            className="btn btn-primary mt-2" // Agregamos margen superior para separación
            onClick={guardarArchivo}
          >
            Subir Imagen
          </button>

          {imageUploaded && (
            <div className="alert alert-success mt-2" role="alert">
              Su imagen se ha subido correctamente.
            </div>
          )}

          <button className="btn btn-primary mt-3">Agregar</button>
        </form>
      </div>
    </div>
  );
}



export default ProductsFormPage