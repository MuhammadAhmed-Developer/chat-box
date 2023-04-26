import React, { useContext } from 'react'
import profile from '../../../../accests/images/profile.jpg'
import { AuthContext } from '../../../../Context/AuthContext'

export default function ChatHeader() {
  const {user} = useContext(AuthContext)
  return (
    <div className='Navbar'>
      <h6 className='fw-bold text-white mt-1'>Talk Now</h6>
      <div className="User">
            <img src={profile} alt="profile" style={{width: 30}} className='img-fluid  rounded-circle' />
          <span className='fw-bold text-white mx-3'>john</span>
          <button className='btn btn-light btn-sm fw-bold btn-logout'>Logout</button>
      </div>
    </div>
  )
}
