"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';
import { FaPlaneDeparture, FaGraduationCap, FaCertificate } from 'react-icons/fa';

const CountUp = ({ end, duration = 2 }: { end: number, duration?: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const endValue = end;
            const totalDuration = duration * 1000;
            const incrementTime = totalDuration / endValue;

            const timer = setInterval(() => {
                if (start < endValue) {
                    start += 1;
                    setCount(start);
                } else {
                    clearInterval(timer);
                }
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}</span>;
};

const About = () => {
    const features = [
        {
            icon: <FaPlaneDeparture />,
            text: "Aviation Journey",
            desc: "From classroom to cockpit-grade programs."
        },
        {
            icon: <FaGraduationCap />,
            text: "Mentor's Mindset",
            desc: "Building confidence in industry-ready professionals."
        },
        {
            icon: <FaCertificate />,
            text: "Standards & Impact",
            desc: "DGCA-aligned audits and measurable outcomes."
        }
    ];

    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="about-wrapper">

                    {/* Left Column - Image */}
                    <motion.div
                        className="about-image-container"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="image-stack">
                            <div className="image-main">
                                <Image
                                    src="/images/about.webp"
                                    alt="The man behind the runway"
                                    width={600}
                                    height={700}
                                    className="img-cover"
                                />
                            </div>
                            <div className="image-accent"></div>
                        </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="about-badge">About Me</span>
                        <h2 className="section-title text-left mb-25">
                            The man behind <span className="outlined-text">the runway.</span>
                        </h2>

                        <p className="hero-desc mb-40">
                            Syed Rumman Akhtar is a Learning & Development leader who has spent his career
                            turning aviation classrooms into launchpads. Calm in audits, exacting in curriculum,
                            generous in mentorship — his work blends regulatory rigor with the human craft of teaching.
                        </p>

                        <div className="about-features">
                            {features.map((feature, index) => (
                                <div key={index} className="feature-item">
                                    <div className="feature-icon">
                                        {feature.icon}
                                    </div>
                                    <div className="feature-text">
                                        <h4>{feature.text}</h4>
                                        <p>{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="about-right-meta">
                            <a href="#experience" className="btn-primary">
                                Learn More <FiArrowUpRight size={20} />
                            </a>

                            <div className="experience-display">
                                <div className="exp-box">
                                    <span className="exp-number">
                                        <CountUp end={20} />+
                                    </span>
                                    <span className="exp-label">Years of <br /> Experience</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;