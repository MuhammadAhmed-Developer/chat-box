import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Frontend from './Frontend';
import Authentication from './Authentication';
import Header from './Frontend/Components/Header';
import Footer from './Frontend/Components/Footer';

export default function CustomRoutes() {
  return (
    <>

    <BrowserRouter>
    <Header/>
    <main>
     <Routes>
        <Route path='/*' element={<Frontend/>} />
        <Route path='/authentication/*' element={<Authentication/>} />
    </Routes>
    </main>
    {/* <Footer/> */}
    </BrowserRouter>
    </>
    
  )
}
