import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Components/Home'
import Cart from './Components/Cart'
import NavBar from './Components/NavBar'
import { Provider } from 'react-redux'
import Store from './Store'

const App = () => {
  return (
    <>
    <Provider store={Store}>
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App