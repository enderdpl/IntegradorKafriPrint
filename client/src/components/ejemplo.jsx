import { storage } from "../firebase/config";
import { useState } from "react";

function ejemplo() {
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
        const url = await fileRef.getDownloadURL(); // Obtener la URL de descarga
        console.log(url);
      } catch (error) {
        console.error("Error al subir el archivo:", error);
      }
    }
  };

  return (
    <div>
      <h1>Ejemplo</h1>
      <input type="file" onChange={escucharFile} />
      <button onClick={guardarArchivo} type="button">
        Subir archivo
      </button>
    </div>
  );
}




export default ejemplo