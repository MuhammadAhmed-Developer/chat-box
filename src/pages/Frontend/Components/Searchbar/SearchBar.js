import React from 'react';
import profile from '../../../../accests/images/profile.jpg'

export default function SearchBar() {
  return (
    <>
    <div>
      <input type="search" placeholder='Find User...' className='searchbar' />
    </div>
    <div className='mt-3 d-flex align-items-center border-bottom py-2 user'>
        <img src={profile} alt="profile" className='img-fluid rounded-circle' style={{width: 45}} />
         <span className='text-white ms-2 fw-bold'>Usman Shahid</span>
    </div>
    </>
  )
}
