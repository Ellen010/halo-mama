import React, { useState } from 'react';
import { navLinks } from '../assets/constants/index.js';
import { Link } from 'react-router-dom';
import { X, Menu } from 'lucide-react';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full">
            <nav className="relative flex items-center justify-between w-full px-6 md:px-12 py-4">

                <div className="flex items-center gap-4 z-20">
                    <img src="/images/logo.png" alt="Halo-mama logo" className="logo" />

                    <h1 className="momo-signature-regular absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[6vw] md:text-base lg:text-lg xl:text-lg 2xl:text-5xl 3xl:text-6xl text-[--color-primary] font-bold title-hover-shadow">
                        Halo-mama
                    </h1>
                </div>
                <ul className="hidden lg:flex items-center gap-10 momo-signature-regular z-20">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="text-[--color-primary] opacity-90 text-[3vw] md:text-sm lg:text-base xl:text-lg 2xl:text-2xl 3xl:text-2xl hover:text-[var(--color-dpeach)] hover:scale-110 transition-transform duration-300"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className="lg:hidden text-[--color-dpeach] z-20"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={36} /> : <Menu size={36} />}
                </button>
            </nav>

            {open && (
                <div className="md:hidden bg-[--color-pastel] text-[--color-dpeach] py-6 rounded-xl mx-6 shadow-lg animate-fadeDown">
                    <ul className="flex flex-col gap-6 momo-signature-regular">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="text-3xl hover:text-[var(--color-peach)] transition"
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
