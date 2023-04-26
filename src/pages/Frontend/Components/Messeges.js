import React, { useContext } from 'react'
import pic from '../../../accests/images/profile.jpg';
import { AuthContext } from '../../../Context/AuthContext';

export default function Messeges() {
  const {user} = useContext(AuthContext)
  return (
    <div className='messages'>
        <div className="container" style={{marginTop: 60}}>
            <div className="row">

            <div className="col">
                <img src={pic} alt="pic" className='mt-2 mb-2 img-fluid rounded-circle' style={{width: 40}} />
                
                <span className='ms-3 text-dark bg-white p-2 rounded-3'>Hello, How Are You</span>
                <p className='mb-3' style={{fontSize: 10}}>Just Now</p>
            </div>
            </div>
            <div className="row text-end">

            <div className="col">
                
                <span className='me-3 text-dark bg-white p-2 rounded-3'>I am Good</span>
                <img src={pic} alt="pic" className='mt-2 mb-2 img-fluid rounded-circle' style={{width: 40}} />
                <p className='' style={{fontSize: 12}}>Just Now</p>

            </div>
            </div>
        </div>
    </div>
  )
}
