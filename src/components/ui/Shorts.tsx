"use client";

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const reels = [
    { id: 1, videoUrl: "/video1.mp4" },
    { id: 2, videoUrl: "/video1.mp4" },
    { id: 3, videoUrl: "/video1.mp4" },
    { id: 4, videoUrl: "/video1.mp4" },
    { id: 5, videoUrl: "/video1.mp4" },
];

const VideoCard = ({ src, isActive }: { src: string; isActive: boolean }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isActive) {
            video.play().catch(() => { });
        } else {
            video.pause();
            video.currentTime = 0;
        }
    }, [isActive]);

    return (
        <div className="video-wrapper">
            <video
                ref={videoRef}
                className="reel-video"
                src={src}
                loop
                muted
                playsInline
                controls
            />
            {!isActive && <div className="video-overlay"></div>}
        </div>
    );
};

const Shorts = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="shorts-section" id="reels">
            <div className="container">
                <div className="text-center">
                    <span className="about-badge">Visual Stories</span>
                    <h2 className="section-title">
                        Aviation <span className="outlined-text">Shorts</span> & Reels
                    </h2>
                </div>

                <div className="shorts-container">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        // centeredSlides={false}
                        loop={false}
                        navigation={true}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 40 },
                            1400: { slidesPerView: 4, spaceBetween: 50 },
                        }}
                        className="shorts-swiper"
                    >
                        {reels.map((reel, index) => (
                            <SwiperSlide key={reel.id}>
                                {({ isActive }) => (
                                    <motion.div
                                        className={`reel-card ${isActive ? 'is-active' : ''}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6 }}
                                        viewport={{ once: true }}
                                    >
                                        <VideoCard
                                            src={reel.videoUrl}
                                            isActive={isActive}
                                        />
                                    </motion.div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Shorts;
