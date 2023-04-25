import React from 'react'

export default function MsgBoxHeader() {
  return (
    <div className='msgboxheader' style={{position: 'fixed', width: 574}}>
        <div className='header'>
            <span className='fw-bold text-white'>Usman Shahid</span>
        <div className=''>
            <i className='bi bi-camera-video fs-5 text-light '></i>
            <i className='bi  bi-person-check mx-4  fs-5 text-light'></i>
            <i className='bi  bi-three-dots-vertical  fs-5 text-light'></i>
        </div>
        </div>
    </div>
  )
}
