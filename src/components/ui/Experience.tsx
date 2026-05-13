"use client";

import { motion } from 'framer-motion';

const Experience = () => {
    const timelineData = [
        {
            date: "2018 - PRESENT",
            role: "L&D Manager & Training Head",
            company: "Aviation Excellence Center",
            desc: "Leading flagship training programs and DGCA compliance. Architected digital learning platforms that increased trainee engagement by 40%.",
            side: "left"
        },
        {
            date: "2012 - 2018",
            role: "Senior Aviation Trainer & Auditor",
            company: "Global Wings Academy",
            desc: "Spearheaded regulatory audits and instructor development. Maintained 100% audit compliance for 6 consecutive years.",
            side: "right"
        },
        {
            date: "2008 - 2012",
            role: "Lead Ground Instructor",
            company: "Skyline Training Institute",
            desc: "Delivered ground school excellence. Mentored over 500+ professionals into active aviation careers.",
            side: "left"
        }
    ];

    return (
        <section className="experience-section" id="experience">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="about-badge">Career Journey</span>
                    <h2 className="hero-name mb-25">A flight path of <span className="outlined-text">leadership.</span></h2>
                    <p className="hero-desc" style={{ margin: '0 auto 60px', maxWidth: '700px' }}>
                        Three flagship roles. One continuous mission — to elevate Indian aviation training.
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div className="timeline-container">
                    {/* Path Line */}
                    <div className="timeline-path"></div>

                    {timelineData.map((item, index) => (
                        <div key={index} className={`timeline-item ${item.side === 'right' ? 'right' : ''}`}>
                            {/* Node */}
                            <motion.div
                                className="timeline-node"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            ></motion.div>

                            {/* Card */}
                            <motion.div
                                className="timeline-card"
                                initial={{ opacity: 0, x: item.side === 'right' ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <span className="timeline-date">{item.date}</span>
                                <h3>{item.role}</h3>
                                <span className="timeline-company">{item.company}</span>
                                <p className="timeline-desc">{item.desc}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
