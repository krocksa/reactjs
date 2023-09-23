import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import PedirProductos from '../../Helpers/PedirProductos/PedirProductos.js'
import ItemList from '../ItemList/ItemList'

function ItemListContainer() {

  const [productos, setProductos] = useState([])


  useEffect(() => {
    PedirProductos()
    .then((res) => setProductos(res))
    .catch((err) => console.log(err))
  }, [])

  return (
    <div>
        <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer