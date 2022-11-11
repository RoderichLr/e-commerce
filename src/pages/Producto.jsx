import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import UseGetData from '../hooks/UseGetData'

const producto = () => {
  const { alphaCode } = useParams()
  const navigate = useNavigate()
  const { data, loading } = UseGetData(
    `https://ecomerce-master.herokuapp.com/api/v1/item/${alphaCode}`
  )

  useEffect(() => {
    data.status === 400 && navigate('/404')
  }, [data.status])

  return (
    <section className='container py-4 '>
      <div className='row justify-content-center text-white'>
        <aside className='col-6'>
          {loading
            ? <p className='text-center text-white'>Cargando...</p>
            : (
              <article class='card-body'>
                <img className='img-fluid' src={data?.image} alt='Producto' />
                <h1 className='text-center  ' class='text-primary'>{data?.product_name}</h1>
                <h2 className='text-center  ' class='text-primary'> {data?.description}</h2>
              </article>
              )}
        </aside>
        {/* {data.status === 400 && <Navigate to='/404' />} */}
      </div>
    </section>
  )
}

export default producto
