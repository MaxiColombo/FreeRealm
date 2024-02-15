import { useState } from 'react';
import "./cardPage.css"

export function CardPage({ items }) {
  const [loading,setLoading]= useState(true)
  return (
    <div className="containerCard">
      {items.map((item, index) => (
        <div className="item" key={index}>
           {loading && <div className="loading-icon">Cargando...</div>}
          <img
            src={item.image}
            alt={item.title}
            onLoad={() => setLoading(false)}
            style={{ display: loading ? 'none' : 'block' }}
          />
          <h1 className='cardTitle'>{item.title}</h1>
        </div>
      ))}
    </div>
  );
}