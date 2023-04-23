import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AuthContext}  from '../../../Context/AuthContext'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../Config/firebase'

const initialState = {
  email:'',
  password:''
}

export default function Login() {
  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate()
  const [state, setState] = useState(initialState)
  const [isProcessing, setIsProcesssing] = useState(false)


  const handleChange = (e) => {
    
    setState(s=>({...s,[e.target.name]:e.target.value}))
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
     const {email, password} = state
     setIsProcesssing(true)
     signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    dispatch({type:'LOGIN', payload:{user}})
      navigate('/')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  })
  .finally(()=>{
    setIsProcesssing(false)
  })
  setIsProcesssing(true)


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
