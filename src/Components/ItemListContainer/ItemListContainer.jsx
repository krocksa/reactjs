import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { PedirProductos } from '../../Helpers/PedirProductos/PedirProductos'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';

function ItemListContainer() {

  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState('Productos');
  const categoria = useParams().categoria;

  useEffect(() => {
    PedirProductos()
    .then((res) => {
      if (categoria) {
        setProductos(res.filter( (prod) => prod.categoria === categoria) )
        setTitulo(categoria)
      } else {
        setProductos(res)
        setTitulo('Productos')
      }
    })
  }, [categoria])

  return (
    <div>
        <ItemList productos={productos} titulo={titulo} />
    </div>
  )
}

export default ItemListContainer