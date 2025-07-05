import React, { useState, useEffect } from 'react';
import seraLogo from './assets/sera.png';
import google from './assets/google.svg';
import github from './assets/github.svg';
import { auth, googleProvider, githubProvider } from './firebase/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged, sendEmailVerification } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await user.reload();
        if (user.emailVerified) {
          navigate("/chat");
        } else {
          navigate("/verify");
        }
      }
    });

    return () => unsub();
  }, []);

  const signupUserWithEP = async (e) => {
    e.preventDefault();
    if(password !== passwordConfirm) {
      setError("Passwords do not match.");
    } else {
      try{
        const userCred = await createUserWithEmailAndPassword(auth, email, password);

        await sendEmailVerification(userCred.user);

        navigate("/verify");
      }
      catch (err) {
        if(err.code === 'auth/email-already-in-use'){
          setError("This email already exists.");
        } else {
          setError("Something went wrong, please try again later.");
        }
      }
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
      const userCred = await signInWithPopup(auth, githubProvider);
      await sendEmailVerification(userCred.user);

      navigate("/verify");
    } catch (err) {
      setError("Something went wrong, please try again later.");
    }
  }

  return (
    <div className='h-screen sm:flex items-center justify-center bg-stone-100'>
        <div className='flex flex-col items-center gap-2 border border-stone-300 p-3 bg-stone-200 h-full sm:h-fit sm:rounded-lg sm:w-96'>
            <img src={seraLogo} alt="Logo" className='h-14 rounded' />
            <h1>Sign up to Sera</h1>
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

            <form onSubmit={signupUserWithEP} className='flex flex-col gap-1 w-full max-w-80'>
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

              <label htmlFor="passwordConf" className='font-semibold'>Confirm Password</label>
              <input type="password" id='passwordConf' required 
                onChange={(value) => setPasswordConfirm(value.target.value.trim())}
                className='border rounded w-full text-black outline-none p-0.5'  
              />

              <button type="submit" className='bg-violet-royal font-semibold mt-2 text-white py-1 rounded hover:shadow-md'>Sign Up</button>

              <p>Already have an account? <Link to="../login" className='font-semibold underline'>Log in</Link> </p>
              <p className='text-red-600'>{error}</p>
            </form>
        </div>
    </div>
  )
}

export default Signup