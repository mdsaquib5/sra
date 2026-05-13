"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaPlane, FaChalkboardTeacher, FaUsers, FaClipboardCheck } from 'react-icons/fa';

const Hero = () => {
    const roles = [
        "Aviation Professional",
        "L&D Manager",
        "Mentor",
        "Speaker",
        "Author",
        "Trainer"
    ];

    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 1500;

    useEffect(() => {
        const handleTyping = () => {
            const fullText = roles[currentRole];

            if (isDeleting) {
                setDisplayText(prev => prev.substring(0, prev.length - 1));
                if (displayText === '') {
                    setIsDeleting(false);
                    setCurrentRole((prev) => (prev + 1) % roles.length);
                }
            } else {
                setDisplayText(fullText.substring(0, displayText.length + 1));
                if (displayText === fullText) {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentRole]);

    const stats = [
        {
            value: "20+",
            label: "Years in Aviation",
            icon: <FaPlane />,
            delay: 0.2
        },
        {
            value: "DGCA",
            label: "Training Expert",
            icon: <FaChalkboardTeacher />,
            delay: 0.4
        },
        {
            value: "1000+",
            label: "Mentees Trained",
            icon: <FaUsers />,
            delay: 0.6
        },
        {
            value: "100%",
            label: "Audit Compliance",
            icon: <FaClipboardCheck />,
            delay: 0.8
        }
    ];

    return (
        <section className="hero-section" id="home">
            <div className="container">
                <div className="hero-wrapper">

                    {/* Left Content */}
                    <motion.div
                        className="hero-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="intro-text">Hi, I am</span>
                        <h1 className="hero-name">Syed Rumman Akhtar</h1>
                        <div className="designation-box">
                            I am an <span className="gradient-text ml-10">{displayText}</span>
                            <span className="cursor"></span>
                        </div>
                        <p className="hero-desc">
                            A dedicated Mentor, Teacher, Public Speaker, and Aviation Professional
                            committed to excellence in training and leadership development.
                        </p>

                        <div className="mt-20">
                            <a href="https://www.instagram.com/rumman.vlogs?igsh=MTIxcmlkZnc0eWsxNQ%3D%3D" target='_blank' className="btn-primary">
                                Connect Now <FiArrowUpRight size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Content */}
                    <div className="hero-right">
                        <motion.div
                            className="image-container"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <Image
                                src="/images/profile.webp"
                                alt="Syed Rumman Akhtar"
                                width={450}
                                height={550}
                                priority
                            />
                        </motion.div>

                        {/* Floating Stats */}
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className={`glass-card stat-card stat-card-${index + 1}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    y: [0, -15, 0],
                                }}
                                transition={{
                                    opacity: { delay: stat.delay, duration: 0.5 },
                                    y: {
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: stat.delay
                                    }
                                }}
                            >
                                <div className="stat-icon-box">
                                    {stat.icon}
                                </div>
                                <span className="value">{stat.value}</span>
                                <span className="label">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;