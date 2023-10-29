import React from "react";
import { Outlet } from "react-router-dom";
import Header from './components/Header';
import Header from './components/Footer';
import './App.css';

function App(){
    return(
        <>
        { /* Header component for the navigation */}
        < Header />
        {/* reader child components for current route */ }
        <Outlet />
        {/* footer */}
        <Footer />
        </>
    );
}
export default App;

