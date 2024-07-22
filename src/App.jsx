import './App.css'
import Product from './components/Product'
import Navbar from './components/Navbar'
import { Form, Route, Routes } from 'react-router-dom'
import GridCard from './components/GridCard'


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/add' element={<Product/>}/>
        <Route path='/' element={<GridCard/>}/>
      </Routes>

    </>
  )
}

export default App
