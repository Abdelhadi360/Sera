import React, { useEffect, useState } from 'react';
import { IoMdMailUnread } from "react-icons/io";
import { auth } from './firebase/firebase';
import { useNavigate } from 'react-router-dom';
import mail from './assets/mail.svg';
import { sendEmailVerification } from 'firebase/auth';

function Verify() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

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

    return () => clearInterval(interval);
  }, []);

  const resendLink = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        await sendEmailVerification(user);
        setMessage("Verification email sent! Check your inbox.");
      }
    } catch (err) {
      console.error("Error sending verification:", err);
      setMessage("Failed to send verification email. Try again later.");
    }
  };

  return (
    <div className='h-screen flex flex-col justify-center items-center gap-3 p-5 text-center'>
      <h1 className='text-4xl font-semibold'>Verify your Email</h1>
      <p>Please check your inbox and click the link to verify your account.</p>
      <img src={mail} alt="Mail icon" className='h-40' />

      <button
        onClick={resendLink}
        className='mt-4 text-violet font-semibold hover:underline'
      >
        Didn't get anything? Click here to resend.
      </button>

      {message && (
        <p className="text-sm text-gray-700 mt-2">{message}</p>
      )}
    </div>
  );
}

export default Verify;
