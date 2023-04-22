import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Header from './Frontend/Components/Header/Header'
import Footer from './Frontend/Components/Footer/Footer'

export default function CustomRoutes() {
  return (
    <>
    <Header/>
    <main>

    <BrowserRouter>
     <Routes>
        <Route path='/*' element={<Frontend/>} />

        
     </Routes>
    </BrowserRouter>
    </main>
    <Footer/>
    </>
    
  )
}
