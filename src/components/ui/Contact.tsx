"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <span className="about-badge">Get In Touch</span>
                    <h2 className="section-title">Let's <span className="outlined-text">Connect.</span></h2>
                </div>

                <div className="contact-grid">
                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="contact-info-card">
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '30px', color: 'var(--secondary-color)' }}>Contact Information</h3>
                            <div className="contact-info-list">
                                <div className="contact-info-item">
                                    <div className="contact-icon-box">
                                        <FiMail size={24} />
                                    </div>
                                    <div>
                                        <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Email Me</p>
                                        <p style={{ fontWeight: 600, color: 'var(--secondary-color)' }}>contact@rummanakhtar.com</p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-icon-box">
                                        <FiPhone size={24} />
                                    </div>
                                    <div>
                                        <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Call Me</p>
                                        <p style={{ fontWeight: 600, color: 'var(--secondary-color)' }}>+91 90458 99016</p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-icon-box">
                                        <FiMapPin size={24} />
                                    </div>
                                    <div>
                                        <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Location</p>
                                        <p style={{ fontWeight: 600, color: 'var(--secondary-color)' }}>New Delhi, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <form className="contact-form-card">
                            <div className="form-group">
                                <label style={{ color: 'var(--secondary-color)' }}>First Name</label>
                                <input type="text" placeholder="John" />
                            </div>
                            <div className="form-group">
                                <label style={{ color: 'var(--secondary-color)' }}>Last Name</label>
                                <input type="text" placeholder="Doe" />
                            </div>
                            <div className="form-group full">
                                <label style={{ color: 'var(--secondary-color)' }}>Email Address</label>
                                <input type="email" placeholder="john@example.com" />
                            </div>
                            <div className="form-group full">
                                <label style={{ color: 'var(--secondary-color)' }}>Message</label>
                                <textarea rows={5} placeholder="Your message here..."></textarea>
                            </div>
                            <button type="submit" className="btn-primary" style={{ gridColumn: 'span 2', justifyContent: 'center' }}>
                                Send Message <FiSend size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
