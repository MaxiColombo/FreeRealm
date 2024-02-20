import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./cardPage.css"
import categories from "../assets/category.json"
import shareIcon from "/share.svg"

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
          <a href={item.url}>
            <img
              src={item.image}
              alt={item.title}
              onLoad={() => setLoading(false)}
              style={{ display: loading ? 'none' : 'block' }}
              className='cardImage'
            />

            <div className='cardContent'>
              <div className='titleContainer'>
                <h1 className='cardTitle'>{item.title}</h1>
                <img src={shareIcon} alt="Share Image" className='shareIcono' />
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}