"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Reels", href: "#reels" },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <nav className="header-nav">
                    {/* Logo */}
                    <Link href="#home" className="logo">
                        SRA<span>.</span>
                    </Link>

                    {/* Desktop Nav - Centered Pill */}
                    <div className="nav-menu-wrapper">
                        <ul className="nav-links">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="header-actions">
                        <div className="header-socials desktop-only">
                            <motion.a
                                href="https://www.linkedin.com/in/syed-rumman-akhtar-b73027128"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="header-social-icon"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                aria-label="LinkedIn"
                            >
                                <FiLinkedin />
                            </motion.a>
                            <motion.a
                                href="https://www.instagram.com/rumman.vlogs?igsh=MTIxcmlkZnc0eWsxNQ%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="header-social-icon"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                aria-label="Instagram"
                            >
                                <FiInstagram />
                            </motion.a>
                            <motion.a
                                href="https://www.youtube.com/@lifemattersIndia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="header-social-icon"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                aria-label="YouTube"
                            >
                                <FiYoutube />
                            </motion.a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;