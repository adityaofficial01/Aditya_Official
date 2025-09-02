import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import CustomImage from "components/CustomImage";
import { StaticImages } from "utils/StaticImages";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import RecentWorkd from "./RecentWorkd";
import ScrollVelocity from "./ScrollVelocity";
import { Button, Col, Drawer, Row } from "antd";
import { ReactIcons } from "utils/ReactIcons";
import FAQSection from "./FaqSection";
import ContactSection from "./ContactSection";
import { useNavigate } from "react-router-dom";
import { RouterKeys } from "routes/RouterKey";
import useDynamicMediaQuery from "Hook/useDynamicMediaQuery";
import IconButton from "components/IconButton";
// import LogoLoop from "./LogoLoop";s

gsap.registerPlugin(SplitText, ScrollTrigger);

function Home() {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = React.useState(false)
  const isMobile = useDynamicMediaQuery(425, false);
  console.log('forTabMobile', isMobile)
  const videoRef = React.useRef()
  useGSAP(() => {
    //* Loading Bars Animations
    gsap.to(".bar", {
      height: 0,
      stagger: { amount: 0.5 },
      ease: "power4.inOut",
      duration: 1,
    });

    //* Name Animations (on page load)
    const mainName = document.querySelector(".Name");
    const splitName = new SplitText(mainName, { type: "chars" });

    gsap.fromTo(
      splitName.chars,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: { amount: 0.3 },
        ease: "power1.inOut",
        delay: 1,
      }
    );

    //* Scroll-triggered scale animation
    gsap.to(".Name", {
      scrollTrigger: {
        trigger: ".textContainer",
        start: "top top+=5",   // when text container hits top
        end: "bottom top",  // until it scrolls out
        scrub: 1,
        pin: true,
        // markers: true,   // enable for debugging
      },
      scale: 150,
      // y:400,
      xPercent: -500,
      ease: "none",
    });


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
      defaults: { opacity: 0 },
      extendTimeline: true,
    });

    // gsap.effects.typing('.descriptionContent')

    //* Description Animation
    const description = document.querySelector(".Description");

    if (description) {
      // Split into lines
      const splitDescription = new SplitText(".Description p", { type: "lines" });

      // hide lines initially
      gsap.set(splitDescription.lines, { y: 100, opacity: 0 });

      // timeline with ScrollTrigger
      let descriptionSection = gsap.timeline({
        scrollTrigger: {
          trigger: ".Description",
          start: "10% 90%",   // when 30% of Description hits 80% of viewport
          toggleActions: "play none none reset",
          // markers: true,    // enable to debug
        },
      });

      // animate lines
      descriptionSection.to(splitDescription.lines, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
      });



      //earth video animations
      const startValues = 'center 60%'
      const endValues = 'bottom top'
      const video = videoRef.current;

      video.onloadedmetadata = () => {
        gsap.timeline({
          scrollTrigger: {
            trigger: ".video",
            start: startValues,
            end: endValues,
            scrub: true,
            pin: true,
            markers: false
          }
        }).to(video, {
          currentTime: video.duration,
          ease: "none"
        });
      };
    }


    //* Progress text animation
    //* Progress text animation
    const progressText = document.querySelector(".progressText");

    if (progressText) {
      const splitProgressDescription = new SplitText(progressText, { type: "chars" });

      // hide chars initially
      gsap.set(splitProgressDescription.chars, { x: '-100%', opacity: 0, display: 'inline-block' });

      // timeline with ScrollTrigger
      gsap.timeline({
        scrollTrigger: {
          trigger: ".progressSection",
          start: "10% 90%",
          toggleActions: "play none none reset",
          // markers: true, // enable to debug
        },
      }).to(splitProgressDescription.chars, {
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.inOut",
        stagger: 0.05,
      });
    }



  }, []);

  const services = [
    {
      icon: <ReactIcons.Plane />,
      title: 'Strategy & Planning',
      description: 'Increase ROI by 35% with strategic planning and roadmap development that aligns with your business goals.',
      tags: ['Market Research', 'User Analysis', 'Competitive Analysis', 'ROI Planning']
    },
    {
      icon: <ReactIcons.Users />,
      title: 'UI/UX Design',
      description: 'Boost conversions by 40% with user-centered design that transforms visitors into customers.',
      tags: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: <ReactIcons.Code />,
      title: 'Development',
      description: 'Achieve 98/100 PageSpeed scores with modern technologies and performance optimization.',
      tags: ['React/Next.js', 'Node.js', 'TypeScript', 'API Development']
    },
    {
      icon: <ReactIcons.DataBase />,
      title: 'Database Architecture',
      description: 'Reduce query times by 60% with robust database design and implementation for scalable applications.',
      tags: ['Schema Design', 'Data Modeling', 'Query Optimization', 'Migration Strategy']
    },
    {
      icon: <ReactIcons.Security />,
      title: 'Security & Performance',
      description: 'Protect user data with enterprise-grade security measures and 99.9% uptime guarantee.',
      tags: ['Security Audits', 'Performance Testing', 'Load Balancing', 'Caching Strategy']
    },
    {
      icon: <ReactIcons.Stars />,
      title: 'AI Integration',
      description: 'Automate 60% of manual tasks with AI solutions that enhance user experiences and business operations.',
      tags: ['AI/ML Integration', 'Natural Language', 'Computer Vision', 'Predictive Analytics']
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: 'Discovery & Strategy',
      highlight: '35% more effective',
      description: 'project outcomes through comprehensive research and planning'
    },
    {
      number: 2,
      title: 'Design & Prototyping',
      highlight: '40% higher engagement',
      description: 'with user-tested interfaces and interactive prototypes'
    },
    {
      number: 3,
      title: 'Development & Testing',
      highlight: '98/100 PageSpeed scores',
      description: 'through optimized code and rigorous testing'
    },
    {
      number: 4,
      title: 'Launch & Support',
      highlight: '99.9% uptime',
      description: 'with continuous monitoring and proactive maintenance'
    }
  ];

  const technologies = {
    frontend: [
      'React & Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion'
    ],
    backend: [
      'Node.js',
      'PostgreSQL',
      'GraphQL',
      'Redis'
    ]
  };

  return (
    <>
      <Drawer
        title="Basic Drawer"
        closable={{ 'aria-label': 'Close Button' }}
        onClose={() => setShowMenu(false)}
        open={showMenu}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <div className="relative bg-black-200" >
        {/* Loading Overlay */}
        <div className="overlay" >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div >

        <div className="bg-black-200 min-h-[100vh] ">

          {/* Navbar (fixed now) */}
          <div className="top-0 left-0 w-full z-50 flex items-center justify-between sm:px-8 py-4 bg-black-200 shadow-cardShadow2 ">
            <div className="flex   ">
              <CustomImage
                src={StaticImages.LOGO.Logo}
                className="h-16 w-auto"
              />
            </div>
            {/* Hamburger and menu */}
            {isMobile ? (
              <div className="flex  items-center">
                <IconButton
                  onClick={() => setShowMenu(true)}
                  Icon={<ReactIcons.Hamburger />}
                  className=""
                />
              </div>
            ) : (
              <div className="  flex z-10 space-x-4 lg:space-x-20">
                <button onClick={() => navigate(RouterKeys.HOME.PROJECTS)} className="text-Grey-100 text-[15px] lg:text-title20 font-light">PROJECTS</button>
                <button onClick={() => navigate(RouterKeys.HOME.ABOUT_ME)} className="text-Grey-100 text-[15px] lg:text-title20 font-light">ABOUT</button>
                <button className="text-Grey-100 text-[15px] lg:text-title20 font-light">PLAYGROUND</button>
                <button className="text-Grey-100 text-[15px] lg:text-title20 font-light">CONTACT</button>
                <button className="text-Grey-100 text-[15px] lg:text-title20 font-light">SOCIAL MEDIA</button>
              </div>
            )}
          </div>
          {/* Add padding top to prevent content being hidden behind fixed navbar */}
          <div className=" relative">

            {/* Text container that will be pinned during scroll */}
            <div className="textContainer   overflow-hidden flex flex-col justify-center items-center h-[100vh]">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={StaticImages.VIDEO.manCap}
                autoPlay
                loop
                muted
                playsInline
              />
              <p className="Name text-[3rem] sm:text-[5rem] md:text-[10rem] text-white  text-center mb-20 font-bold">
                ADITYA RAJPUT
              </p>
            </div>
          </div>

          {/* Additional content to enable scrolling */}
          <div className="Description p-2 sm:p-8 flex flex-col justify-start min-h-[100vh] items-start ml-4 sm:ml-20 md:ml-60">
            <p className=" descriptionContent text-Grey-100 text-[1.4rem] sm:text-[2rem] max-w-4xl leading-loose mt-[30vh] text-left">
              I’m a detail-driven React developer with a focus on User Experience, Animation, and Modern Frontend Practices. I’ve been crafting dynamic and engaging web solutions across products, platforms, and digital media for over 3 years.
            </p>
            <p className="  descriptionContent text-Grey-100 mt-20 text-[1.4rem] sm:text-[2rem] font-thin max-w-4xl leading-loose my-20 text-left">
              I’m currently working as a React Developer at Sachtech Solutions, a
              branding agency with devotion to motion, in Chandigarh.
            </p>

            <div className=" flex flex-col justify-between  overflow-hidden  w-full items-end space-y-5 sm:pr-10 mb-10 sm:mb-[20vh] text-Grey-100">
              <div className="flex flex-col justify-between items-start mt-20 w-full  md:w-1/2">
                <p className="text-[2.5rem]">EXPERTISE</p>
                <div className="flex  gap-3 mt-2 flex-col sm:flex-row text-[1.5rem] justify-between  w-full text-left items-start sm:items-center">
                  <p className="text-left">- ANIMATIONS</p>
                  <p className="text-left">- Frontend Development</p>
                </div>
                <div className="flex  gap-3 mt-2  flex-col sm:flex-row text-[1.5rem] justify-between text-left w-full items-start sm:items-center">
                  <p className="text-left">- React.js</p>
                  <p className="text-left">- Redux</p>
                </div>
                <div className="flex gap-3 mt-2  flex-col sm:flex-row text-[1.5rem] justify-between text-left w-full items-start sm:items-center">
                  <p className="text-left">- Component Architecture</p>
                  <p className="text-left">- Performance Optimization</p>
                </div>
                <div className="flex gap-3 mt-2  flex-col sm:flex-row text-[1.5rem] justify-between text-left w-full items-start sm:items-center">
                  <p className="text-left">- Responsive Web Design</p>
                  <p className="text-left">- API Integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <RecentWorkd />
        </div>
        <div>

        </div>

        {/* ///logos moving
        <div>
          <LogoLoop
            logos={[
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                alt: "React",
                title: "React",
                href: "https://react.dev"
              },
              {
                src: "https://redux.js.org/img/redux.svg",
                alt: "Redux",
                title: "Redux",
                href: "https://redux.js.org"
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
                alt: "Figma",
                title: "Figma",
                href: "https://figma.com"
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/4/47/Typescript_logo_2020.svg",
                alt: "TypeScript",
                title: "TypeScript",
                href: "https://www.typescriptlang.org/"
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
                alt: "Tailwind CSS",
                title: "Tailwind CSS",
                href: "https://tailwindcss.com/"
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
                alt: "Express.js",
                title: "Express.js",
                href: "https://expressjs.com/"
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
                alt: "Node.js",
                title: "Node.js",
                href: "https://nodejs.org/"
              }
            ]}
            width="100%"
            height={80}
            fadeOut
            scaleOnHover
            ariaLabel="Technology logos"
          />
        </div> */}

        <ScrollVelocity />

        <div className='bg-black h-[150vh] sm:h-[170vh] relative  flex justify-center items-start'>
          <video
            className='video '
            src={StaticImages.VIDEO.output}
            controls={false}
            ref={videoRef}
            playsInline
            preload='auto'
            muted
            style={{ width: "100%", maxWidth: "1000px" }}
          />

          {/* Centered floating headline */}
          <div className="absolute inset-0 p-2 text-center flex flex-col items-center justify-center pointer-events-none z-20">
            <h1 className="text-white text-[1.5rem] md:text-[3rem] font-extrabold tracking-tight drop-shadow-lg animate-fade-in-up bg-gradient-to-r from-[#9ecaf7] via-white to-[#9ecaf7] bg-clip-text ">
              Building sleek, responsive React apps that users love.
            </h1>
            <p className=" sm:text-[2rem] text-center text-white ">Turning ideas into  <span className="text-[#9ecaf7]">interactive</span> web experiences.</p>
          </div>
          <div className="bottom-20 absolute right-20">
            <p className="text-white text-[2rem] sm:text-[3rem] px-10">Aditya Rajput</p>
            <p className="text-[#9ecaf7] text-[1rem] sm:text-[2rem] px-10 text-end">React Developer</p>
          </div>
        </div>

        {/* //*Full-StackDesignExpertise  */}
        <div className='flex justify-center items-center mb-20'>
          <Button onClick={() => alert('hi')} type="ghost" className="w-32 h-12 cursor-pointer  rounded-4xl bg-[#0e151c] text-[#9ecaf7]">Our Expertise</Button>
        </div>
        <div className="flex w-full justify-center itsm-center progressSection">
          <div className="flex flex-col justify-center items-center  max-w-4xl">
            <p className="text-[1.5rem] sm:text-[2.5rem] lg:text-[3.5rem] text-white text-center font-semibold  progressText">Front-End Development Expertise</p>
            <p className="text-[0.9rem] px-4 sm:text-[1.3rem] text-white text-center">Delivering measurable results <span className="text-[#9ba3ae]"> through strategic thinking and technical excellence </span></p>
          </div>
        </div>

        {/* //* //OUR EXPERTISE SECTION  */}
        <div className="flex justify-center items-center p-4 w-full">
          <div className="max-w-4xl w-full shadow-lightBlue mt-16 bg-[#1c1c1c] p-5 rounded-xl hover:border-2 hover:border-[#9ecaf7] transition-colors duration-300">
            <div className="flex justify-between w-full">
              <p className="text-[#9ecaf7] text-[1.2rem] font-normal">&lt; &gt; <span className="pl-2 text-white">Coding in Progress... </span></p>
              <p className="text-[#9ecaf7] text-[1.2rem]">100%</p>
            </div>
            <div className="w-full min-h-3 bg-[#9ecaf7] rounded-full mt-4"></div>

            {/* Phase sections */}
            <div className="flex gap-6 mt-6">
              {/* Design Phase */}
              <div className="flex-1 bg-[#2a2a2a] rounded-lg p-4 border border-[#404040]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#9ecaf7]">⚙️</span>
                  <span className="text-[#9ecaf7] font-medium">Design Phase</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-white text-sm">User Research</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-white text-sm">Wireframing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-white text-sm">UI Design</span>
                  </div>
                </div>
              </div>

              {/* Development Phase */}
              <div className="flex-1 bg-[#2a2a2a] rounded-lg p-4 border border-[#5a7aa8]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#9ecaf7]">&lt; &gt;</span>
                  <span className="text-[#9ecaf7] font-medium">Development Phase</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-white text-sm">Frontend</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-white text-sm">Backend</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-white text-sm">Testing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Success message */}
            <div className="text-center mt-6">
              <span className="text-white text-lg">Project Successfully Completed! 🎉</span>
            </div>
          </div>
        </div>

        {/* //* SERVICES  */}
        <div className="w-full mt-44  p-4 overflow-hidden flex justify-center items-center">
          <Row gutter={[24, 24]} className="max-w-6xl">
            {services.map((service, index) => (
              <Col xs={24} md={12} xl={8} key={index}>
                <div className="bg-[#1c1c1c] shadow-lightBlue rounded-lg p-2 sm:p-6 h-full border border-transparent hover:border-[#9ecaf7] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#9ecaf7]/20">
                  {/* Icon Section */}
                  <div className="bg-[#424f5c] rounded-lg p-4 mb-4 flex items-start justify-start h-16">
                    <span className="text-[#9ecaf7] text-2xl">{service.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-xl font-semibold mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#979ea9] text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-[#2b2b2b] text-[#bdbdbd] px-3 py-1 rounded-full text-xs border border-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <div className="w-full flex justify-center">
          <div className="max-w-6xl shadow-lightBlue w-full mt-16 bg-[#1a1a1a] p-8 rounded-2xl border  hover:shadow-lg hover:border-[#9ecaf7] hover:shadow-[#9ecaf7]/20 rounded-xl  transition-all duration-300">
            <Row gutter={[48, 0]}>
              {/* Left Column - Development Process */}
              <Col xs={24} lg={16}>
                <div>
                  <h2 className="text-white text-2xl font-bold mb-8">
                    Our Development Process
                  </h2>

                  <div className="space-y-8">
                    {processSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-4">
                        {/* Number Circle */}
                        <div className="bg-[#9ecaf7] text-black w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-1">
                          {step.number}
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-white text-lg font-semibold mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            <span className="text-white font-medium">{step.highlight}</span>{' '}
                            <span className="text-[#979ea9]">{step.description}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>

              {/* Right Column - Technologies */}
              <Col xs={24} lg={8}>
                <div>
                  <h2 className="text-white text-2xl font-bold mb-8">
                    Technologies I Use
                  </h2>

                  <Row gutter={[24, 24]}>
                    {/* Frontend */}
                    <Col xs={24} sm={24}>
                      <div className="bg-[#2a2a2a] rounded-xl p-6 w-full h-full">
                        <h3 className="text-white text-lg font-semibold mb-4">
                          Frontend
                        </h3>
                        <ul className="space-y-3">
                          {technologies.frontend.map((tech, index) => (
                            <li key={index} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-[#9ecaf7] rounded-full"></div>
                              <span className="text-[#979ea9] text-sm">{tech}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        {/* //FAQ SECTION */}
        <div className="bg-[#1c1c1c] mt-32 py-20">
          <FAQSection />
        </div>
        <ContactSection />

        {/* <div className="absolute flex justify-center items-center w-full top-20">
          <DotLottieReact
            className="h-44"
            src="https://lottie.host/dc3709e9-5ff3-47c1-b717-7d64de6cb093/fKXHL9ULaH.lottie"
            loop
            color="#000000"
            autoplay
          />
        </div> */}

      </div >
    </>
  );
}

export default Home;
