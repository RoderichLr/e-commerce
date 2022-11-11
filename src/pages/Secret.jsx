import { useContext } from 'react'
import useForm from '../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { itemUpload } from '../services/useServices'
import { AuthContext } from '../context/AuthContext'
import '../assets/css/form.css'

const Secret = () => {
  const navigate = useNavigate()
  const { upload } = useContext(AuthContext)

  const sendData = async (data) => {
    try {
      const result = await itemUpload(data)
      // console.log(result.data.token)
      if (result.status === 200) {
        upload(result.data.token)
        navigate('/')
      }
    } catch (err) {
      console.log('Ocurrio un erron en upload: ' + err.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    isActive: '',
    product_name: '',
    description: '',
    price: '',
    category: '',
    brand: '',
    sku: '',
    image: ''
  })

  return (
    <>
      <form onSubmit={handleSubmit} className='form-signin w-100 m-auto'>
        <div class='input-group mb-3'>
          <span class='input-group-text' id='inputGroup-sizing-default'>isActive</span>
          <input
            name='isActive'
            value={input.isActive}
            onChange={handleInputChange} type='text' class='form-control' aria-label='Sizing example input' aria-describedby='inputGroup-sizing-default'
          />
        </div>
        <div class='input-group mb-3'>
          <span class='input-group-text' id='inputGroup-sizing-default'>product_name</span>
          <input
            name='product_name'
            value={input.product_name}
            onChange={handleInputChange} type='text' class='form-control' aria-label='Sizing example input' aria-describedby='inputGroup-sizing-default'
          />
        </div>
        <div class='input-group mb-3'>
          <span class='input-group-text' id='inputGroup-sizing-default'>description</span>
          <input
            name='description'
            value={input.description}
            onChange={handleInputChange} type='text' class='form-control' aria-label='Sizing example input' aria-describedby='inputGroup-sizing-default'
          />
        </div>
        <div class='input-group mb-3'>
          <span class='input-group-text' id='inputGroup-sizing-default'>price</span>
          <input
            name='price'
            value={input.price}
            onChange={handleInputChange} type='text' class='form-control' aria-label='Sizing example input' aria-describedby='inputGroup-sizing-default'
          />
        </div>
        <div class='input-group mb-3'>
          <span class='input-group-text' id='inputGroup-sizing-default'>category</span>
          <input
            name='category'
            value={input.category}
            onChange={handleInputChange} type='text' class='form-control' aria-label='Sizing example input' aria-describedby='inputGroup-sizing-default'
          />
        </div>
        <div class='input-group mb-3'>
          <span class='input-group-text' id='inputGroup-sizing-default'>brand</span>
          <input
            name='brand'
            value={input.brand}
            onChange={handleInputChange} type='text' class='form-control' aria-label='Sizing example input' aria-describedby='inputGroup-sizing-default'
          />
        </div>
        <div class='input-group mb-3'>
          <span class='input-group-text' id='inputGroup-sizing-default'>sku</span>
          <input
            name='sku'
            value={input.sku}
            onChange={handleInputChange} type='text' class='form-control' aria-label='Sizing example input' aria-describedby='inputGroup-sizing-default'
          />
        </div>
        <div class='input-group mb-3'>
          <span class='input-group-text' id='inputGroup-sizing-default'>image</span>
          <input
            name='image'
            value={input.image}
            onChange={handleInputChange} type='text' class='form-control' aria-label='Sizing example input' aria-describedby='inputGroup-sizing-default'
          />
        </div>
        <button className='w-100 btn btn-lg btn-primary' type='submit'>Upload</button>
        <p className='mt-5 mb-3 text-muted'>© e-comerce</p>
      </form>
    </>

  )
}

export default Secret
