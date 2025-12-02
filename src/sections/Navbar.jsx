import React from 'react'
import { navLinks } from '../assets/constants/index.js';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav className="flex justify-between items-center w-full px-8 mb-[150px]">
                <div className="flex items-center gap-4">
                    <img src="/logo.png" alt="Halo-mama logo" className="logo" />
                    <h1 className="momo-signature-regular text-7xl text-[--color-primary] absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold title-hover-shadow">
                        Halo-mama </h1>
                </div>
                <div className="flex items-center gap-6">
                    <ul className="flex items-center gap-6 navBarList momo-signature-regular">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="text-[--color-primary] opacity-80 cursor-pointer-pink text-3xl hover:text-[var(--color-dpeach)] hover:scale-125 transition-transform duration-300 ease-in-out mr-16"
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