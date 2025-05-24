import React from 'react'
import Header from './Components/Header'
import { Route, Routes } from 'react-router'
import Home from './Components/Home'
import Fruit from './Components/Fruit'
import Service from './Components/Service'
import Contact from './Components/Contact'
import "../public/css/style.css"

function App() {
  return (
    <>

    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/fruit' element={<Fruit/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
      
    </>
  )
}

export default App
