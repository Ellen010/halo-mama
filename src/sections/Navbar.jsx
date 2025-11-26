import React from 'react'
import { navLinks } from '../assets/constants/index.js';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav className="flex justify-between items-center w-full px-8 mb-150">
                <div className="flex items-center gap-4">
                    <img src="/logo.png" alt="Halo-mama logo" className="logo" />
                    <h className="momo-signature-regular text-7xl text-[--color-primary] absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold title-hover-shadow">
                        Halo-mama </h>
                </div>
                <div className="flex items-center gap-6">
                    <ul className="flex items-center gap-6 navBarList">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="text-red-950 opacity-80 text-m hover:scale-120 transition-all duration-300 ease-in-out mr-15"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Navbar