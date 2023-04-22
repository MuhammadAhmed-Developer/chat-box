import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Hero from './Home/Hero'

export default function index() {
  return (
    <Routes>
        <Route path='/'>
           <Route index element={<Hero/>} />
        </Route>
    </Routes>
    
  )
}
