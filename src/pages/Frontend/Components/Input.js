import React from 'react'

export default function Input() {
  return (
    <div className='input d-flex'>
        <input type="text" placeholder='Type messages' className='form-control'/>
        <button className='btn btn-light border-0 rounded-0'><i className='bi bi-send-fill text-success fs-4'></i></button>
    </div>
  )
}
