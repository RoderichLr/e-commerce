
import '../Header/header.scss'
import logo from '../../assets/logo.png'
import { useContext, useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { getSingleUser } from '../../services/useServices'
import { useProductContext } from '../../context/ProductContext'

const Header = () => {
  const { isAuth, user, logout } = useContext(AuthContext)
  const [userData, setUserData] = useState({})
  const location = useLocation()
  const navigate = useNavigate()
  const context = useProductContext()

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await getSingleUser(user.id)
        if (result.status === 200) {
          setUserData(result.data)
          console.log(userData)
        }
      } catch (error) {
        console.log('Ocurrio un error: ' + error.message)
      }
    }
    fetchUserData()
  }, [isAuth])

  const onInput = (event) => {
    event.preventDefault()
    context.setSearch(event.target.value)
    console.log(context.search)
    if (location.pathname !== '/') {
      navigate('/')
    }
    console.log(location.pathname)
  }
  return (
    <nav className=' sticky-top header '>

      <a href='/'><img src={logo} alt='logo' href='/' width='50' height='70' /></a>
      <div class='box fixed-bottom p-2'>
        <div
          class='container-2'
        >
          <span class='icon'><i class='fa fa-search' /></span>
          <input name='inputSerach' onInput={onInput} type='search' id='search' placeholder=' Buscar...' />
        </div>
      </div>
      <ul className='header__nav-list  '>
        <>
          {
          !isAuth
            ? (
              <>
                <li className='header__list-item'>
                  <Link to='/login' className='header__item-link'> Login </Link>
                </li>
                <li className='header__list-item'>
                  <Link to='/signup' className='header__item-link'> SingUp </Link>
                </li>
              </>
              )
            : (
              <>
                {
                user?.role === 'ADMIN'
                  ? <>
                    <li className='header__list-item'>
                      <Link to='/secret' className='header__item-link  header__item-link--is-active'>Secret</Link>
                    </li>
                    <li className='header__list-item'>
                      <Link to='/' className='header__item-link  header__item-link--is-active' onClick={logout}>Logout</Link>
                    </li>
                    <li className='header__list-item'>
                      <Link to='/dashboard' className='header__item-link'><i class='fa fa-user p-2 ' />{userData?.first_name && userData.first_name}</Link>

                    </li>
                    </>

                  : <>
                    <li className='header__list-item'>
                      <Link to='/' className='header__item-link  header__item-link--is-active' onClick={logout}>Logout</Link>
                    </li>
                    <li className='header__list-item'>
                      <Link to='/dashboard' className='header__item-link'><i class='fa fa-user p-2 ' />{userData?.first_name && userData.first_name}</Link>

                    </li>
                  </>

              }

              </>

              )
        }
          <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.3.1/css/all.css' integrity='sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU' crossorigin='anonymous' />
        </>
      </ul>

    </nav>
  )
}
export default Header
