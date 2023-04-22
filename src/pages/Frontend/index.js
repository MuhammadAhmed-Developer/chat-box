import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Hero from './Home/Hero'
import Header from './Components/Header/Header'

export default function index() {
  return (
    <>
    <Routes>
        <Route path='/'>
           <Route index element={<Hero/>} />
        </Route>
    </Routes>
    </>
    
  )
}
