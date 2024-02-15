import React from 'react';
import {useState} from 'react'
import axios from 'axios';


export function UploadFile() {
  const preset_key = "cfe3p0ay"
  const cloud_name = "drgtw2xik"
  const [imageUrls, setImageUrls] = useState([]);

  function handleImage(event){
    const file = event.target.files[0];
    const formData = new FormData()
    formData.append('file',file)
    formData.append("upload_preset",preset_key)
    axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,formData)
      .then(res => {
        const imageUrl = res.data.url;
        setImageUrls([...imageUrls, imageUrl]); // Agregar la nueva URL al array
      })
      .catch(err => console.log(err));
  }
  const jsonUrls = JSON.stringify(imageUrls);
  return (
    <div>
      <input type="file" name="image" onChange={handleImage}></input>
      <div>
        {/* Mostrar las URLs de las imágenes cargadas */}
        {imageUrls.map((url, index) => (
          <div key={index}>
            <p>{url}</p>
          </div>
        ))}
      </div>
      <div>
        {/* Mostrar el array de URLs en formato JSON */}
        <textarea value={jsonUrls} readOnly rows={5} cols={50} />
      </div>
    </div>
  )
}

