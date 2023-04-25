import React from 'react'
import MsgBoxHeader from './MsgBoxHeader'
import Messeges from './Messeges'
import Input from './Input'

export default function MsgBox() {
  return (
    <div className='msgbox'>
      <MsgBoxHeader/>
      <Messeges/>
       <Input/>

    </div>
  )
}
