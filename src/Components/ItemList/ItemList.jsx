import React from 'react'
import Item from '../Item/Item';

function ItemList({productos}) {
  return (
    <div>
        {
            productos.length > 0 &&
            productos.map((producto) => {
                return (
                    <div>
                        <Item producto={producto} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default ItemList;