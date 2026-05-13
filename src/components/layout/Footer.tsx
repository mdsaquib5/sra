"use client";

import React from 'react';
import Link from 'next/link';
import { FiLinkedin, FiTwitter, FiInstagram, FiMail, FiYoutube } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="footer dark-footer">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-top">
                        <Link href="#home" className="footer-logo">
                            SRA<span>.</span>
                        </Link>

                        <div className="footer-socials">
                            <a href="https://www.linkedin.com/in/syed-rumman-akhtar-b73027128" target="_blank" rel="noopener noreferrer" className="social-icon-box"><FiLinkedin /></a>
                            <a href="https://www.instagram.com/rumman.vlogs?igsh=MTIxcmlkZnc0eWsxNQ%3D%3D" target="_blank" rel="noopener noreferrer" className="social-icon-box"><FiInstagram /></a>
                            <a href="https://www.youtube.com/@lifemattersIndia" target="_blank" rel="noopener noreferrer" className="social-icon-box"><FiYoutube /></a>
                        </div>
                    </div>

                    <div className="footer-divider"></div>

                    <div className="footer-bottom">
                        <div className="footer-info">
                            <p>© {new Date().getFullYear()} Syed Rumman Akhtar. All rights reserved.</p>
                            <p className="mt-5">Designed for Aviation Excellence.</p>
                        </div>

                        <ul className="footer-links">
                            <li><Link href="#about">About</Link></li>
                            <li><Link href="#experience">Experience</Link></li>
                            <li><Link href="#reels">Reels</Link></li>
                        </ul>

                        <div className="footer-credit">
                            Developed by <a href="https://noohark.com" target="_blank" rel="noopener noreferrer">NoohArk Technologies</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
