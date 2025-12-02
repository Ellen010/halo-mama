import React from 'react';
import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import './index.css';

const App = () => {
    return (
        <>
            <Navbar />
            <Hero/>
        <p className="navbar-text">
            All rights reserved to Halo-mama ©.
        </p>
    <p className="navbar-text">
        Website created by Yvelines Technologies.
    </p>
        </>
    )
}
export default App
