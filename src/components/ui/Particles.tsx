"use client";

import React, { useEffect, useState } from 'react';

const Particles = () => {
    const [particles, setParticles] = useState<any[]>([]);

    useEffect(() => {
        const newParticles = Array.from({ length: 25 }).map((_, i) => ({
            id: i,
            size: Math.random() * 6 + 2,
            left: Math.random() * 100,
            top: Math.random() * 100,
            duration: Math.random() * 25 + 15,
            delay: Math.random() * 10,
            opacity: Math.random() * 0.2 + 0.05
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="particles-container">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="particle"
                    style={{
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                        opacity: p.opacity,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `-${p.delay}s`, // Negative delay for immediate start
                    }}
                />
            ))}
            
            {/* Soft Ambient Glows */}
            <div className="ambient-glow glow-1"></div>
            <div className="ambient-glow glow-2"></div>
        </div>
    );
};

export default Particles;
