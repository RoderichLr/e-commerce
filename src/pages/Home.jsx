// hooks
// import useGetData from '../hooks/useGetData'
import { useProductContext } from '../context/ProductContext'

// componentes
import Card from '../components/Card/Card'

const Home = () => {
  const context = useProductContext()
  // const { data, loading } = useGetData('https://ecomerce-master.herokuapp.com/api/v1/item')

  return (
    <>
      <section className='container py-4'>
        <div className='row gy-4'>
          {
            context.loading
              ? <p className='textLoading py-2'>Cargando...</p>
              : context.data.filter(product => {
                if (context.search === '') {
                  return product
                } else if (product.product_name.toLowerCase().includes(context.search.toLowerCase())) {
                  return product
                }
                return null
              })
                .map((product, index) => (
                  <aside key={index} className='col-12 col-md-6 col-lg-3'>
                    <Card {...product} />
                  </aside>
                ))
        }
        </div>
      </section>
    </>
  )
}

export default Home
