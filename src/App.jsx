// Bringing in the required import from 'react-router-dom' and the Header and Footer
import React, { useState } from "react";
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer'
import './App.css';
// import './assets/index'



function App() {
  const [count, setCount] = useState(0)
// Header, Footer component & The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    {/* Header component for navigation */}
      <Header />
      {/* Header component for navigation */}
      <Outlet />
      <Footer />
    </>
  )
}

export default App;
