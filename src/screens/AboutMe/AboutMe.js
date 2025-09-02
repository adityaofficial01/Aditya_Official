import { useGSAP } from '@gsap/react'
import { Row, Col } from 'antd'
import CustomButton from 'components/CustomButton'
import CustomImage from 'components/CustomImage'
import IconButton from 'components/IconButton'
import gsap from 'gsap'
import { SplitText, ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { RouterKeys } from 'routes/RouterKey'
import { ReactIcons } from 'utils/ReactIcons'
import { StaticImages } from 'utils/StaticImages'

const AboutMe = () => {
    const navigate = useNavigate()
    const containerRef = useRef()
    const profileCardRef = useRef()
    const aboutCardRef = useRef()
    const rolesCardRef = useRef()
    // const decorativeRef = useRef()
    
    gsap.registerPlugin(SplitText, ScrollTrigger);
    
    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

        // Initial setup - hide all elements
        gsap.set([profileCardRef.current, aboutCardRef.current, rolesCardRef.current], {
            y: 80,
            opacity: 0,
            scale: 0.9
        })
        
        gsap.set(".decorative-text", {
            y: -50,
            opacity: 0,
            rotation: 0
        })
        
        gsap.set(".back-button", {
            x: -50,
            opacity: 0
        })

        // Animate decorative elements first
        tl.to(".decorative-text", {
            y: 0,
            opacity: 1,
            rotation: (i, target) => target.dataset.rotation,
            duration: 1,
            stagger: 0.2
        })
        
        // Animate back button
        .to(".back-button", {
            x: 0,
            opacity: 1,
            duration: 0.8
        }, "-=0.5")
        
        // Animate main cards with stagger
        .to([profileCardRef.current, aboutCardRef.current, rolesCardRef.current], {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            stagger: 0.15
        }, "-=0.3")

        // Animate profile image with bounce
        .fromTo(".profile-image", {
            scale: 0,
            opacity:0
            // rotation: -180
        }, {
            scale: 1,
            rotation: 0,
            opacity:1,
            duration: 0.5,
            ease: "back.out(1.7)"
        }, "-=0.8")

        // Animate profile text
        .fromTo(".profile-text", {
            y: 30,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1
        }, "-=0.4")

        // Animate download button
        .fromTo(".download-btn", {
            scale: 0,
            rotation: 10
        }, {
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(1.4)"
        }, "-=0.2")

        // Split text animations for about section
        const splitTitle = new SplitText(".about-title", { type: "chars" });
        const splitStatus = new SplitText(".status-text", { type: "words" });
        const splitDescription = new SplitText(".about-description", { type: "lines" });

        // Animate about title characters
        tl.fromTo(splitTitle.chars, {
            y: 50,
            opacity: 0,
            rotation: 10
        }, {
            y: 0,
            opacity: 1,
            rotation: 0,
            duration: 0.05,
            stagger: 0.03
        }, "-=0.5")

        // Animate status with typewriter effect
        .fromTo(splitStatus.words, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.1
        }, "-=0.2")

        // Animate description lines
        .fromTo(splitDescription.lines, {
            y: 30,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.15
        }, "-=0.3")

        // Animate roles section
        .fromTo(".roles-title", {
            scale: 0.8,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
            duration: 0.6
        }, "-=0.4")

        // Animate role cards
        .fromTo(".role-card", {
            x: -50,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2
        }, "-=0.3")

        // Continuous animations
        // Floating animation for profile image
        gsap.to(".profile-image", {
            y: -10,
            duration: 2,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1
        })

        // Subtle glow effect for cards
        gsap.to([profileCardRef.current, aboutCardRef.current, rolesCardRef.current], {
            boxShadow: "0 0 30px rgba(255, 255, 255, 0.1)",
            duration: 3,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut",
            stagger: 1
        })

        // Rotating decorative text
        gsap.to(".decorative-text", {
            rotation: "+=5",
            duration: 4,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
            stagger: 0.5
        })

        // Hover animations
        const cards = [profileCardRef.current, aboutCardRef.current, rolesCardRef.current]
        
        cards.forEach(card => {
            if (card) {
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, {
                        scale: 1.02,
                        y: -5,
                        duration: 0.3,
                        ease: "power2.out"
                    })
                })
                
                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        scale: 1,
                        y: 0,
                        duration: 0.3,
                        ease: "power2.out"
                    })
                })
            }
        })

        // Button hover effects
        const downloadBtn = document.querySelector('.download-btn')
        if (downloadBtn) {
            downloadBtn.addEventListener('mouseenter', () => {
                gsap.to(downloadBtn, {
                    scale: 1.05,
                    duration: 0.2,
                    ease: "power2.out"
                })
            })
            
            downloadBtn.addEventListener('mouseleave', () => {
                gsap.to(downloadBtn, {
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.out"
                })
            })
        }

    }, [])

    return (
        <div ref={containerRef} className='bg-black-200 flex justify-center items-center text-white min-h-screen p-4 lg:p-8'>
            {/* Decorative Elements */}
            <div className="decorative-text absolute top-10 right-10 text-6xl text-white/20 font-bold rotate-12 hidden lg:block" data-rotation="12">
                React Developer
            </div>
            <div className="decorative-text absolute top-20 right-20 text-4xl text-white/10 font-bold -rotate-12 hidden lg:block" data-rotation="-12">
                CAN DO
            </div>
            <div className="decorative-text absolute bottom-20 left-10 text-5xl text-white/15 font-bold rotate-45 hidden lg:block" data-rotation="45">
                CREATIVE
            </div>
            
            <div className="back-button">
                <IconButton 
                    onClick={() => navigate(RouterKeys.HOME.HOME)} 
                    className='absolute top-4 left-4' 
                    Icon={<ReactIcons.ArrowRightCircleIcon className={'border-white'} />} 
                />
            </div>

            <div className="max-w-7xl mx-auto">
                <Row gutter={[24, 24]} className="h-full">
                    {/* Profile Card */}
                    <Col xs={24} lg={10}>
                        <div ref={profileCardRef} className='bg-black-100 h-full rounded-xl flex flex-col justify-center items-center min-h-96'>
                            <CustomImage className='profile-image h-56' src={StaticImages.LOGO.Aditya} />
                            <p className='profile-text text-[#F2F3F4] titleMedium'>Aditya Chauhan</p>
                            <p className='profile-text text-[#F2F3F4] titleSmall'>rajputaadihr@gmail.com</p>
                            <CustomButton
                                className='download-btn bg-black-200 h-12 w-44 my-5 rounded-xl text-[#F2F3F4]'
                                onClick={() => window.open('https://drive.google.com/uc?export=download&id=1rHWkiaI1tvEwvEO60985WygsGQwo4_ql', '_blank')}
                            >
                                Download Resume
                            </CustomButton>
                        </div>
                    </Col>

                    {/* Right Side Cards */}
                    <Col xs={24} lg={14}>
                        <Row gutter={[0, 24]} className="h-full">
                            {/* About Me Card */}
                            <Col xs={24}>
                                <div ref={aboutCardRef} className='flex flex-col About justify-center items-start p-6 rounded-xl bg-black-100'>
                                    <p className='about-title text-white titleMedium'>About Me</p>
                                    <p className='status-text para text-Green-100 flex gap-2'>
                                        <ReactIcons.Clock className={'mt-1'} />
                                        open to work
                                    </p>
                                    <p className='about-description text-[1rem] text-[#F2F3F4] mt-5 text-wrap text-left'>
                                        Passionate React.js Developer with 1 year of hands-on experience creating responsive, scalable, and user-friendly front-end applications.
                                    </p>
                                    <p className='about-description text-[1rem] text-[#F2F3F4] text-wrap mt-5 text-left'>
                                        With a strong focus on UI/UX design principles, component reusability, and state management, I enjoy working in collaborative environments where creativity meets technology. I am eager to contribute to innovative projects, continuously enhance my technical skills, and grow into a top-tier front-end developer.
                                    </p>
                                </div>
                            </Col>

                            {/* Latest Roles & Main Apps Card */}
                            <Col xs={24}>
                                <div ref={rolesCardRef} className='flex flex-col justify-center items-start p-6 h-full rounded-xl bg-black-100'>
                                    <p className='roles-title text-white titleMedium mb-5'>Latest Roles</p>

                                    {/* Current Role */}
                                    <div className='role-card flex flex-wrap gap-5'>
                                        <CustomImage src={StaticImages.Images.sachtechLogo} className='rounded-lg' height={40} />
                                        <div className='flex flex-col'>
                                            <p className='text-[1.3rem] text-[#F2F3F4] text-wrap text-left'>Sachtech Solutions</p>
                                            <p className='text-[1rem] text-[#F2F3F4] text-wrap text-left'>Front-End Developer (Present)</p>
                                            <p className='text-[0.9rem] text-[#B0B3B8] text-left'>
                                                Working on scalable web applications, UI/UX enhancements, and performance optimization.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Internship */}
                                    <div className='role-card flex flex-wrap gap-3 mt-3'>
                                        <CustomImage src={StaticImages.Images.EigenLogo} className='rounded-lg' height={40} />
                                        <div className='flex flex-col'>
                                            <p className='text-[1.3rem] text-[#F2F3F4] text-wrap text-left'>Eigon Technologies</p>
                                            <p className='text-[1rem] text-[#F2F3F4] text-wrap text-left'>React Developer Intern</p>
                                            <p className='text-[0.9rem] text-[#B0B3B8] text-left'>
                                                Gained hands-on experience in React.js, component-driven development, and API integration.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AboutMe