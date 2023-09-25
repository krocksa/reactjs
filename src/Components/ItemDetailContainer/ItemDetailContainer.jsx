import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { pedirItemPorId } from '../../Helpers/PedirProductos/PedirProductos'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {

  const [item, setItem] = useState(null)
  const id = useParams().id
  console.log(id);

  useEffect(() => {
    pedirItemPorId(Number(id))
    .then(res => setItem(res))
    .catch(err => console.log(err))
  }, [id])

  return (
    <div>
        {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer