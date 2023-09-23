import data from '../../data/products.json'

const PedirProductos = () => {
    return new Promise((resolve, reject) => {
        resolve(data)

        reject('Error al traer los productos')
    })
  }

export default PedirProductos;