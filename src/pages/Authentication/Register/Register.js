import React, { useContext, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile  } from 'firebase/auth';
import {auth, storage} from '../../../Config/firebase';
import { AuthContext } from '../../../Context/AuthContext';
import profile from '../../../accests/images/profile.jpg'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';



const initialState = {
  img: '',
  displayName: '',
  email:'',
  password:''
}

export default function Register() {
  const {dispatch} = useContext(AuthContext)  
  const navigate = useNavigate()
  const[state, setState] = useState(initialState)
  const [isProcessing, setIsProcesssing] = useState(false)
  const [file, setFile] = useState({})
  const [user, setUser] = useState({});
  const [downloadURL, setDownloadURL] = useState('')


  const handleChange  =(e) =>{
    setState(s=>({...s,[e.target.name]:e.target.value}))
  } 

  const handleSubmit= (e) =>{
    e.preventDefault()
    console.log(state)

    const {email, password} = state

    setIsProcesssing(true)

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    dispatch({type:'LOGIN', payload:{user}})

    navigate('/')
    Userimg()
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    window.notify("Something went wrong", 'error')
    setIsProcesssing(false)
    // ..
  });
}


const Userimg = async () =>{
  let {displayName} = state
  const filExtantion = file.name.split('.').pop();
  const randomId = Math.random().toString(36).slice(2)


  const storageRef = ref(storage, `userImg/${randomId}.${filExtantion}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on('state_changed',
  (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
          case 'paused':
              console.log('Upload is paused');
              break;
          case 'running':
              console.log('Upload is running');
              break;
      }
  },
  (error) => {
      // Handle unsuccessful uploads
      console.log(error)
  },
  () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setDownloadURL(downloadURL)
          let formData = { displayName }


          let userData = { ...formData, downloadURL}
          createUserProfile(userData)
      });
  }
);

} 



const createUserProfile = (userData) =>{
  const {displayName, downloadURL} = userData
  updateProfile(auth.currentUser, {
    displayName: displayName, photoURL: downloadURL
  }).then(() => {
    // Profile updated!
    // ...
  }).catch((error) => {
    // An error occurred
    // ...
  });
}

  return (

    <div className='auth'>
    <div className="container">
     <div className="row">
       <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <div className="card border-0 bg-light shadow p-2 p-md-3 p-lg-4">
            <div className="row">
             <div className="col">
                <h3 className='mb-4 fw-bold'>Sign Up Now</h3>
             </div>
            </div>
           <form onSubmit={handleSubmit} >
           <div className="row mb-3">
             <div className=" text-center">
                <label htmlFor="img" className='user-img'><img src={profile} alt="profile" className='border border-secondary img-fluid rounded-circle w-50' /></label>
               <input type="file" id='img' accept='imges' className='form-control d-none'  name='img'
                onChange={e=>{setFile(e.target.files[0])}} />
                <p>{file.name}</p>
             </div>
            </div>
           <div className="row mb-3">
             <div className="col">
                <label htmlFor="text">User Name</label>
               <input type="text" className='form-control' placeholder='Enter Username'  name='displayName' onChange={handleChange} />
             </div>
            </div>
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
               <button className='btn btn-secondary w-100 text-light fw-bold' disabled={isProcessing}> 
               {!isProcessing ? 'Sign Up' : 
               <div className='spinner-border spinner-border-sm'></div>
               }
                </button>
             </div>
            </div>
           </form>
            <div className="row">
             <div className="col">
               <p className="mb-0 text-center">Already have  an Account? <Link to='/authentication/login'>Login</Link></p>
             </div>
            </div>
          </div>
       </div>
     </div>
    </div>
 </div>

    )
}
