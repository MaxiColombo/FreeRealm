import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./cardPage.css"
import categories from "../assets/category.json"

export function CardPage({ items }) {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  const getCategoryColor = () => {
    const currentCategory = categories.find(category => category.nameID === location.pathname.slice(1));
    return currentCategory ? currentCategory.color : '#000';
  }

  return (
    <div className="containerCard">
      {items.map((item, index) => (
        <div className="item" key={index} style={{ '--hover-color': getCategoryColor() }}>
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