import React, { useEffect, useRef } from 'react'
import { StaticImages } from 'utils/StaticImages'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const RecentWorkd = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
    const cardRef = useRef(null);
    const videoWrapperRef = useRef(null);
    const dynamicTexts = [
        "Crafting Digital Experiences",
        "Building Tomorrow's Solutions",
        "Code That Speaks Volumes",
        "Innovation Through Development"
    ];

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useGSAP(() => {
        //* Register animation
        gsap.registerEffect({
            name: "typing",
            effect: (targets, config) => {
                let splitedText = new SplitText(targets, { type: "lines" })
                let timeLine = gsap.timeline()
                timeLine.from(splitedText.lines, { opacity: 0, stagger: 0 })
                // .to(splitedText.chars, { color: gsap.utils.wrap(["aqua", "pink", "yellow"]), stagger: 0.05 },0)

                return timeLine
            },
            defaults: { opacity: 0, delay: 2 },
            extendTimeline: true,
        });

        gsap.effects.typing('.descriptionContent')


        
    }, [])

    useEffect(() => {
        // GSAP ScrollTrigger animation for scaling from small to full size
        const card = cardRef.current;
        const videoWrapper = videoWrapperRef.current;

        if (card) {
            // Set initial state - small scale
            gsap.set(card, {
                scale: 0.7,
                opacity: 0.8,
                transformOrigin: "center center"
            });

            // Create scroll-triggered animation
            const scrollTl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: 1,
                    toggleActions: "play none none reverse"
                }
            });

            scrollTl.to(card, {
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            });
        }

        // Hover animations for the video wrapper
        if (videoWrapper) {
            const handleMouseEnter = () => {
                gsap.to(videoWrapper, {
                    scale: 1.05,
                    duration: 0.4,
                    ease: "power2.out"
                });
            };

            const handleMouseLeave = () => {
                gsap.to(videoWrapper, {
                    scale: 1,
                    duration: 0.4,
                    ease: "power2.out"
                });
            };

            videoWrapper.addEventListener('mouseenter', handleMouseEnter);
            videoWrapper.addEventListener('mouseleave', handleMouseLeave);

            // Cleanup function
            return () => {
                videoWrapper.removeEventListener('mouseenter', handleMouseEnter);
                videoWrapper.removeEventListener('mouseleave', handleMouseLeave);
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        }

        // Cleanup ScrollTrigger on unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="container mb-0 bg-black-200">
            <div className="stacked-cards">
                {/* Card 1 */}
                <div className="card" ref={cardRef}>
                    <div className="card-content flex flex-col justify-center items-center">
                        <h1 className="text-center text-[3rem] my-3">Recent Projects</h1>
                        <p className="text-center max-w-6xl">
                            Showcasing innovative solutions and cutting-edge development work. Each project represents
                            a unique challenge transformed into elegant, functional code that delivers exceptional user experiences
                            and drives meaningful results.
                        </p>
                    </div>

                    <div
                        className="img-wrapper flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat min-h-[80vh] rounded-xl relative overflow-hidden cursor-pointer"
                        ref={videoWrapperRef}
                    >
                        <video
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            src={StaticImages.VIDEO.TYPING}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-blue-900/50 to-black/60"></div>

                        {/* Animated Particles Effect */}
                        <div className="absolute inset-0 overflow-hidden">
                            {[...Array(20)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                        animationDelay: `${Math.random() * 2}s`,
                                        animationDuration: `${2 + Math.random() * 3}s`
                                    }}
                                ></div>
                            ))}
                        </div>

                        {/* Content Overlay */}
                        <div className="relative z-10 flex flex-col justify-center items-center h-full w-full px-8 text-center">
                            {/* Main Title */}
                            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}>
                                <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6 leading-tight">
                                    Equalize Crowd
                                </h1>
                            </div>

                            {/* Dynamic Subtitle */}
                            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                } mb-8`}>
                                <p className="font-medium text-xl md:text-2xl lg:text-3xl text-white/90 h-12 flex items-center justify-center">
                                    <span className="inline-block transition-all duration-500 text-white text-[2rem] lg:text-[5rem] ease-in-out transform">
                                        {dynamicTexts[currentTextIndex]}
                                    </span>
                                </p>
                            </div>

                            {/* Description */}
                            <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                } mb-12 max-w-2xl`}>
                                <p className="descriptionContent text-white text-[1rem] md:text-[1.5rem] leading-relaxed">
                                    Where innovative minds converge to create extraordinary digital solutions.
                                    Transforming complex challenges into elegant code that shapes the future.
                                </p>
                            </div>

                        </div>

                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-32 h-32">
                            <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-lg"></div>
                        </div>
                        <div className="absolute bottom-0 right-0 w-32 h-32">
                            <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-pink-400/50 rounded-br-lg"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RecentWorkd