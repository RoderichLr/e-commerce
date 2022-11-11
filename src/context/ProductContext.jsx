import { createContext, useState, useContext, useEffect } from 'react'

// 1 Creacion del contexto vacio
const ProductContext = createContext()

// 2 Creacion del componente Proveedor del contexto
const ProductProvider = (props) => {
  const [data, setData] = useState([] || {}) // Lista de data
  const [loading, setLoading] = useState(true) // Loader o Ya cargo la informacion o no?
  const [selectedProduct, setSelectedProduct] = useState([] || {})
  const [search, setSearch] = useState('') // Guardar la palabra que se busca

  const getData = async () => {
    try {
      const req = await window.fetch('https://ecomerce-master.herokuapp.com/api/v1/item')
      const res = await req.json()
      setData(res)
      setLoading(false)
    } catch (error) {
      setLoading(true)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  const value = {
    data,
    loading,
    selectedProduct,
    setSelectedProduct,
    search,
    setSearch
  }

  return (
    // Siempre se llama value el prop de Provider con la data
    // value es un objeto que indica que datos SON GLOBALES
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  )
}

// 3 Consumidor del contexto
// Brinda accesso a la data de los componentes

const useProductContext = () => {
  const context = useContext(ProductContext)
  return context
}

// 4 exportar las funciones del Provider y el Consumer
// para que puedan ser invocados en nuestro componentes
export {
  ProductProvider,
  useProductContext
}

// 5 Uso de Context
// Nos vamos a ir  a nuestro componente superior (por ejemplo Home)
// envolver a los componentes que necesitan la informacion del contexto
