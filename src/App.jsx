import React from 'react';
import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import Product from './sections/Product.jsx';
import Contact from './sections/Contact.jsx';
import './index.css';

const App = () => {
    return (
        <>
            <Navbar />
            <Hero/>
            <Product/>
            <Contact/>

            <div className="navbar-shadow">
        <p className="navbar-text shadow-top">
            All rights reserved to Halo-mama ©.
        </p>
    <p className="navbar-text">
        Website created by Yvelines Technologies.
    </p>
            </div>
        </>
    )
}
export default App
