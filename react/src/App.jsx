import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import  Home  from './pages/Home'
import Form  from './hooks/Form'
import Contact  from './pages/Contact'
import  About  from './pages/About'
import Navbar from './components/Navbar'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'

// import State from'./hooks/State'
// import Form from './hooks/Form'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element={<ProductDetails/>}/>
    </Routes>

    </>
  )
}

export default App
