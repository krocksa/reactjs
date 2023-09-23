import React from 'react'

function Item( {producto} ) {
  return (
    <div className="card" key={producto.id}>
        <h3>{producto.title}</h3>
        <img src={producto.image} alt={producto.title} />
        <p>{producto.description}</p>
        <p>{producto.price}</p>
    </div>
  )
}

export default Item;