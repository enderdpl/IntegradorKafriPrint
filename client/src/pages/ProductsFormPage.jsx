import { useForm } from "react-hook-form";
import { useProducts } from "../context/ProductsContext";
import { useNavigate } from "react-router-dom";
import "../style/preguntas.css";
import { storage } from "../firebase/config";
import { useState } from "react";

function ProductsFormPage() {
  const [file, setFile] = useState(null);
  const { register, handleSubmit, setValue } = useForm();
  const { createProduct } = useProducts();
  const navigate = useNavigate();

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
  
        console.log("esta es la url", urlFirebase); // Mostrar la URL en la consola
      } catch (error) {
        console.error("Error al subir el archivo:", error);
      }
    }
  };
  
  

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log("titulo", data.title);
      console.log("url", data);

      await createProduct(data);
      navigate("/products");
    } catch (error) {
      console.error("Error al crear el producto:", error);
    }
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

          <button className="btn btn-primary" onClick={guardarArchivo}>
            Subir Imagen y Agregar Producto
          </button>
        </form>
      </div>
    </div>
  );
}



export default ProductsFormPage