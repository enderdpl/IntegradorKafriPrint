import { useForm } from "react-hook-form";
import { useProducts } from "../context/ProductsContext";
import { useNavigate } from "react-router-dom";
import "../style/preguntas.css";
import { storage } from "../firebase/config";
import { useState } from "react";

function ProductsFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createProduct } = useProducts();
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

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
        const url = await fileRef.getDownloadURL();
        setValue("url", url); // Establecer el valor del campo "url" con la URL de la imagen
      } catch (error) {
        console.error("Error al subir el archivo:", error);
      }
    }
  };

  const onSubmit = handleSubmit((data) => {
    createProduct(data);
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
          <button className="btn btn-primary" onClick={guardarArchivo}>
            Subir Imagen y Agregar Producto
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductsFormPage