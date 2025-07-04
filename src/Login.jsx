import React, { useState, useEffect } from 'react';
import seraLogo from './assets/sera.png';
import google from './assets/google.svg';
import github from './assets/github.svg';
import { auth, googleProvider, githubProvider } from './firebase/firebase';
import { signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if(user) navigate("/chat");
    })
    return () => unsub()
  }, []);

  const loginUserWithEP = async (e) => {
    e.preventDefault();
    
    try{
      await signInWithEmailAndPassword(auth, email, password);
    }
    catch (err) {
      setError("The email or password is incorrect.");
    }
  }

  const signupUserWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      setError("Something went wrong, please try again later.");
    }
  }

  const signupUserWithGitHub = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
    } catch (err) {
      setError("Something went wrong, please try again later.");
    }
  }

  return (
    <div className='h-screen sm:flex items-center justify-center bg-stone-100'>
        <div className='flex flex-col items-center gap-2 border border-stone-300 p-3 bg-stone-200 h-full sm:h-fit sm:rounded-lg sm:w-96'>
            <img src={seraLogo} alt="Logo" className='h-14 rounded' />
            <h1>Log in to Sera</h1>
            <div className="flex w-full justify-center gap-3">
                
                <img 
                  src={google} 
                  onClick={signupUserWithGoogle}
                  alt="Google Logo"
                  className='h-7 border border-stone-300 rounded px-5 py-1 cursor-pointer hover:bg-stone-300'/>
                <img 
                  src={github}
                  onClick={signupUserWithGitHub}
                  alt="GitHub Logo"
                  className='h-7 border border-stone-300 rounded px-5 py-1 cursor-pointer hover:bg-stone-300'/>
            </div>

            <form onSubmit={loginUserWithEP} className='flex flex-col gap-1 w-full max-w-80'>
              <label htmlFor="email" className='font-semibold'>Email Address</label>
              <input type="email" id='email' required 
                onChange={(value) => setEmail(value.target.value.trim())}
                className='border rounded w-fulltext-black outline-none p-0.5'  
              />

              <label htmlFor="password" className='font-semibold'>Password</label>
              <input type="password" id='password' required 
                onChange={(value) => setPassword(value.target.value.trim())}
                className='border rounded w-full text-black outline-none p-0.5'  
              />

              <button type="submit" className='bg-violet-royal font-semibold mt-2 text-white py-1 rounded hover:shadow-md'>Log In</button>

              <p>Already have an account? <Link to="../signup" className='font-semibold underline'>Sign up</Link> </p>
              <p className='text-red-600'>{error}</p>
            </form>
        </div>
    </div>
  )
}

export default Login