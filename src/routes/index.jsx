import { Routes, Route, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Dashboard from '../pages/Dashboard'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Producto from '../pages/Producto'
import Signup from '../pages/Signup'
import Secret from '../pages/Secret'

function RoutesIndex () {
  const { isAuth } = useContext(AuthContext)
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/secret' element={<Secret />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path=':alphaCode' element={<Producto />} />
      <Route path='/dashboard' element={isAuth ? <Dashboard /> : <Navigate to='/login' replace />} />
      <Route path='*' element={<Error404 />} />

    </Routes>
  )
}
export default RoutesIndex
