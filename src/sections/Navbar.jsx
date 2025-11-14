import React from 'react'

const Navbar = () => {
    return (
        <header>
            <nav className="flex justify-between items-center w-full px-8 mb-150">
                <div className="flex items-center gap-4">
                    <img src="/logo.png" alt="Halo-mama logo" className="logo" />
        <h className="momo-signature-regular text-7xl text-[--color-primary] absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold title-hover-shadow">
            Halo-mama </h>
                </div>
            </nav>
        </header>
    )
}
export default Navbar
