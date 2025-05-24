import React from 'react'
import Header from './Components/Header'
import { Route, Routes } from 'react-router'
import Home from './Components/Home'
import Fruit from './Components/Fruit'
import Service from './Components/Service'
import Contact from './Components/Contact'

function App() {
  return (
    <>

    <Header/>
    <Routes>
      <Route element={<Home/>}></Route>
      <Route element={<Fruit/>}></Route>
      <Route element={<Service/>}></Route>
      <Route element={<Contact/>}></Route>
    </Routes>
      
    </>
  )
}

export default App
