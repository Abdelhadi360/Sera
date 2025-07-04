import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Chat from './Chat';
import Login from './Login';
import Screenshots from './Screenshots';
import Verify from './Verify';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Screenshots />
          </>
        } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/chat" element={ <Chat /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/verify" element={ <Verify /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
