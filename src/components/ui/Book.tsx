"use client";

import React from 'react';

const Book = () => {
    return (
        <section className="book-section" id="book">
            <div className="book-container">
                <h2 className="section-title">
                    <span className="outlined-text">The</span>
                    <span className="gradient-text">Book</span>
                </h2>

                <div className="book-display">
                    <div className="book-wrapper">
                        {/* Front side */}
                        <div className="book-side book-front">
                            <img src="/images/book1.jpg" alt="Book Front" className="book-img" />
                        </div>

                        <div className="book-side book-back">
                            <img
                                src="/images/book2.jpg"
                                alt="Book Back Background"
                                className="book-back-bg"
                            />
                            <div className="book-content-back">
                                <a href="https://amzn.in/d/04skefdS" target='_blank' className="book-buy-link">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Book;