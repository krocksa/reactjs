import React from 'react'
import { Link } from 'react-router-dom';

function Item( {producto} ) {
  return (
    <div className="producto">
          <img src={producto.imagen} alt={producto.titulo} />
          <div>
          <h3>{producto.titulo}</h3>
          <p>Precio: {producto.precio}</p>
          <p>Categoria: {producto.categoria}</p>
          <Link to={`/item/${producto.id}`} className="ver-mas">Ver mas</Link>
          </div>
    </div>
  )
}

export default Item;