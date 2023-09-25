import React from 'react'
import Item from '../Item/Item';

function ItemList({productos, titulo}) {
  return (
    <div className='container'>
        <h2 className='main-title'>
            {titulo}
        </h2>
        <div>
            {
                productos.length > 0 &&
                productos.map((producto) => <Item producto={producto} key={producto.id} />)
            }
        </div>
    </div>
  )
}

export default ItemList;