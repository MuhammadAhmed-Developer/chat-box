import React from 'react'
import ChatHeader from '../../Frontend/Components/ChatHeader'
import Sidebar from '../Components/Sidebar'
import MsgBox from '../Components/MsgBox'

export default function Hero() {
  return (
    
      <div className='home'>
        <div className="Container">
          <Sidebar/>
          <MsgBox/>

        </div>
      </div>
    
  )
}
