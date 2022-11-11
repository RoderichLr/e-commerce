
import './App.css'
import RoutesIndex from './routes/index'
import Header from './components/Header/Header'
import { AuthProvider } from './context/AuthContext'
import { ProductProvider } from './context/ProductContext'

function App () {
  return (
    <>
      <AuthProvider>
        <ProductProvider>
          <Header />
          <RoutesIndex />
        </ProductProvider>
      </AuthProvider>
    </>
  )
}

export default App
