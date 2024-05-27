"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="flex items-center justify-between w-full sm:w-auto">
                <Link href="/">
                    <h1 className="text-xl">Shahab Ahmad</h1>
                </Link>
                <button
                    className="sm:hidden text-bw-grey focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <div className={`flex-col sm:flex-row sm:flex ${isMenuOpen ? 'flex' : 'hidden'} sm:items-center sm:justify-center`}>
                <Link
                    href="/overview"
                    className="mr-4 mb-2 sm:mb-0 border rounded-full text-sm px-2 py-1 cursor-pointer border-bw-grey text-bw-grey hover:text-bw-lightgrey"
                >
                    Overview
                </Link>
                <Link
                    href="/gallery"
                    className="mr-4 mb-2 sm:mb-0 border rounded-full text-sm px-2 py-1 cursor-pointer border-bw-grey text-bw-grey hover:text-bw-lightgrey"
                >
                    Gallery
                </Link>
                <Link
                    href="/poetry"
                    className="mr-4 mb-2 sm:mb-0 border rounded-full text-sm px-2 py-1 cursor-pointer border-bw-grey text-bw-grey hover:text-bw-lightgrey"
                >
                    Poetry
                </Link>
                <Link
                    href="/about"
                    className="border rounded-full text-sm px-2 py-1 cursor-pointer border-bw-grey text-bw-grey hover:text-bw-lightgrey"
                >
                    About
                </Link>
            </div>
        </div>
    );
}
