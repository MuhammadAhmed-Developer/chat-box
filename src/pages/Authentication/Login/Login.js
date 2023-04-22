import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const initialState = {
  email:'',
  password:''
}

export default function Login() {

  const [isProcessing, setIsProcesssing] = useState(false)

  const handleChange = () => {
    console.log('hi')
    
  }

  const handleSubmit = () => {
    console.log('hi')

  }

  return (

    <div className='auth'>
    <div className="container">
     <div className="row">
       <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <div className="card border-0 bg-light shadow p-2 p-md-3 p-lg-4">
            <div className="row">
             <div className="col">
                <h3 className='mb-4 fw-bold'>Login Now</h3>
             </div>
            </div>
           <form onSubmit={handleSubmit} >
           <div className="row mb-3">
             <div className="col">
                <label htmlFor="email">Email</label>
               <input type="email" className='form-control' placeholder='Enter Your Email'  name='email' onChange={handleChange} />
             </div>
            </div>
            <div className="row mb-4">
             <div className="col">
                <label htmlFor="password">password</label>
               <input type="password" className='form-control' placeholder='Enter Your password'  name='password' onChange={handleChange}/>
             </div>
            </div>
            <div className="row mb-4">
             <div className="col">
               <button className='btn btn-primary w-100' disabled={isProcessing}> 
               {!isProcessing ? 'Sign Up' : 
               <div className='spinner-border spinner-border-sm'></div>
               }
                </button>
             </div>
            </div>
           </form>
            <div className="row">
             <div className="col">
               <p className="mb-0 text-center">Already have  an Account? <Link to='/authentication/register'>Sign UP</Link></p>
             </div>
            </div>
          </div>
       </div>
     </div>
    </div>
 </div>

    )
}
