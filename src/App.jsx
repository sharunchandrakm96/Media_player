import { useState } from 'react'

import './App.css'
import './bootstrap.min.css'
import Landing from './Pages/Landing'
import History from './Pages/History'
import Dashbord from './Pages/Dashbord'
import Header from './Components/Header'
import Footer from './Components/Footer'

import {Routes,Route} from 'react-router-dom'

function App() {


  return (
    <>
      <Header/>
      <Routes>
       {/* localhost:5173/land */}
        <Route path='/' Component={Landing}/>
         {/* localhost:5173/his */}
         <Route path='/his' Component={History}/>
          {/* localhost:5173/dash */}
        <Route path='/dash' Component={Dashbord}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
