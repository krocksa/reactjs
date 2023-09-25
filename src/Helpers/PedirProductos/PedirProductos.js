import data from '../../data/productos.json'

export const PedirProductos = () => {
    return new Promise((resolve, reject) => {
        resolve(data)

        reject('Error al traer los productos')
    })
  }

  export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {

        const item = data.find((el) => el.id === id)
        
        if (item) {
          resolve(item)
        } else {
          reject({
            error: 'No se encontro el producto'
          })
        }
    })
  }

