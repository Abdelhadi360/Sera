import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Chat from './Chat';
import Login from './Login';
import Screenshots from './Screenshots';
import Verify from './Verify';
import Features from './Features';
import Usecases from './Usecases';
import Privacy from './Privacy';
import Footer from './components/Footer';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Screenshots />
            <Features />
            <Usecases />
            <Footer />
          </>
        } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/chat" element={ <Chat /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/verify" element={ <Verify /> } />
        <Route path="/privacy" element={ <Privacy /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
