
import './App.css'
import Header from './Shared/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Shared/Footer'

function App() {

  return (
    <div className='max-w-screen-xl mx-auto px-5'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
