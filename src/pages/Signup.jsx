
import logo from '../assets/logo.png'
import useForm from '../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { registerUserServices } from '../services/useServices'
import '../assets/css/form.css'

const Signup = () => {
  const navigate = useNavigate()

  const sendData = async (data) => {
    try {
      const result = await registerUserServices(data)
      if (result.status === 200) {
        navigate('/login')
      }
    } catch (error) {
      console.log('Ocurrio un error en Signup: ' + error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    first_name: '',
    last_name: '',
    gender: '',
    email: '',
    password: '',
    role: ''
  })

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit}>
        <img className='mb-1' src={logo} width='50' height='80' />
        <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>
        <div className='form-floating mb-2'>
          <input
            type='text'
            className='form-control'
            id='first_name'
            name='first_name'
            placeholder='John'
            value={input.first_name}
            onChange={handleInputChange}
          />
          <label htmlFor='first_name'>First Name</label>
        </div>

        <div className='form-floating  mb-2'>
          <input
            type='text'
            className='form-control'
            id='last_name'
            name='last_name'
            placeholder='Doe'
            value={input.last_name}
            onChange={handleInputChange}
          />
          <label htmlFor='last_name'>Last Name</label>
        </div>

        <div className='form-floating  mb-2'>
          <select
            className='form-select'
            id='gender'
            name='gender'
            value={input.gender}
            onChange={handleInputChange}
          >
            <option value='M'>Male</option>
            <option value='F'>Female</option>
          </select>
          <label htmlFor='gender'>Gender</label>
        </div>
        <div className='form-floating  mb-2'>
          <select
            className='form-select'
            id='role'
            name='role'
            value={input.role}
            onChange={handleInputChange}
          >
            <option value='CUSTOMER'>Customer</option>
            <option value='ADMIN'>Admin</option>
          </select>
          <label htmlFor='role'>User</label>
        </div>
        <div className='form-floating  mb-2'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            placeholder='name@example.com'
            value={input.email}
            onChange={handleInputChange}
          />
          <label htmlFor='email'>Email address</label>
        </div>

        <div className='form-floating  mb-2'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            placeholder='Password'
            value={input.password}
            onChange={handleInputChange}
          />
          <label htmlFor='password'>Password</label>
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign in</button>
        <p className='mt-5 mb-3 text-muted'>© e-comerce</p>
      </form>
    </main>
  )
}
export default Signup
