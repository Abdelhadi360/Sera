import React, { useEffect } from 'react';
import { IoMdMailUnread } from "react-icons/io";
import { auth } from './firebase/firebase';
import { useNavigate } from 'react-router-dom';
import mail from './assets/mail.svg';

function Verify() {
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(async () => {
      const user = auth.currentUser;

      if (user) {
        await user.reload();
        if (user.emailVerified) {
          clearInterval(interval);
          navigate("/chat"); 
        }
      }
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className='h-screen flex flex-col justify-center items-center gap-3 p-3'>
      <h1 className='text-4xl font-semibold'>Verify your Mail</h1>
      <p className='text-center'>Please verify your mail inbox and click the link to verify your email.</p>
      <img src={mail} alt="Mail icon" className='h-40'/>
    </div>
  );
}

export default Verify;
