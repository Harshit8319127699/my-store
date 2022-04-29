import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from './components/Header'
import Productlisting from './components/Productlisting'
import Productcomponents from './components/Productcomponents'
import Productdetails from './components/Productdetails'
import Home from './components/Home'
function App() {
  const state=useSelector(state=>state.allproducts)
  // console.log(state);
  return (
    <>
      <Header/>
    <Routes>
    <Route path='/' element={<Productlisting/>}></Route>
    <Route path='/product/:id' element={<Productdetails/>}/>  

    </Routes>
    </>
  )
}

export default App