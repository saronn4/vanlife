import { useState } from 'react'
import { HashRouter, Routes , Route , Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import "./server"
import VanDetail from './pages/VanDetail'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Income from './pages/Income'
import Review from './pages/Review'
import HostLayout from './components/HostLayout'
import HostVans from './components/HostVans'
import HostVanDetail from './components/HostVanDetail'
import DetailPage from './pages/DetailPage'
import PhotoPage from './pages/PhotoPage'
import PricingPage from './pages/PricingPage'

function App() {
  

  return (
    <>
  
  <HashRouter>

    <Routes>

      <Route path="/" element={<Layout/>}>

      <Route index element={<Home/>} />
      <Route path="about" element={<About/>} />

      <Route path="vans" element={<Vans/>} />
      <Route path="vans/:id" element={<VanDetail/>}/>


      <Route path="/host" element={<HostLayout/>}>

      <Route index element={<Dashboard/>}/>
      <Route path="income" element={<Income/>}/>
      <Route path="vans" element={<HostVans/>}/>


      <Route path="vans/:id" element={<HostVanDetail/>}> 
        <Route index element={<DetailPage/>}/> 
       < Route path="pricing" element={<PricingPage/>}/>
       < Route path="photo" element={<PhotoPage/>}/>
      </Route>
      <Route path="review" element={<Review/>}/>
      </Route>

      </Route>

    </Routes>
    </HashRouter>
    
    </>
  )
}

export default App
