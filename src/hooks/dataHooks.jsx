import { useState, useEffect } from 'react';

export function useData(data) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulación de carga de datos desde un archivo JSON
    // Puedes realizar cualquier proceso de carga real aquí
    setItems(data);
  }, [data]);

  return items;
}