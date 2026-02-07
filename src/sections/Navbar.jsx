import React, { useState } from 'react';
import { navLinks } from '../assets/constants/index.js';
import { Link } from 'react-router-dom';
import { X, Menu } from 'lucide-react';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full">
            <nav className="relative flex items-center justify-between w-full py-4">

                <div className="flex items-center gap-3 z-20">
                    <img src="/images/logo.png" alt="Halo-mama logo" className="rounded-[20%] h-auto w-[60px] sm:w-[80px] md:w-[110px] lg:w-[130px] xl:w-160px] transition-all duration-300 ease-in-out hover:scale-110 hover:drop-shadow-[1em_1em_1em_#a1a2ad] " />
                    <h1 className="momo-signature-regular absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[8vw] sm:text-[6vw] md:text-[3vw] lg:text-3xl xl:text-4xl 2xl:text-6xl text-[--color-primary] font-bold title-hover-shadow leading-none whitespace-nowrap title-shadow">
                        Halo-mama
                    </h1>

                </div>

                <ul className="hidden xl:flex items-center gap-4 momo-signature-regular z-20 text-[2vw] sm:text-[4vw] md:text-[3vw] lg:text-lg xl:text-xl 2xl:text-2xl text-[--color-primary]">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a href={link.href} className="menu">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className="xl:hidden text-[--color-dpeach] z-20"
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
