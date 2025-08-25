import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import CustomImage from "components/CustomImage";
import { StaticImages } from "utils/StaticImages";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import RecentWorkd from "./RecentWorkd";
import ScrollVelocity from "./ScrollVelocity";
// import LogoLoop from "./LogoLoop";s

gsap.registerPlugin(SplitText, ScrollTrigger);

function Home() {
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
      scale: 130,
      xPercent: -330,
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
          start: "30% 90%",   // when 30% of Description hits 80% of viewport
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
    }

    // const cards = gsap.utils.toArray(".stacked-cards .card");

    // let tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".stacked-cards",
    //     start: "top top",
    //     // end: "+=" + cards.length * 200, // adjust scroll distance
    //     scrub: true,
    //     pin: true,
    //     markers: true,
    //   },
    // });

    // cards.forEach((card, i) => {
    //   tl.fromTo(
    //     card,
    //     { y: 100, opacity: 0, scale: 0.8 },
    //     { y: 0, opacity: 1, scale: 1, duration: 1, ease: "none" },
    //      0.5 // stagger overlap (0.5 means next card starts before prev finishes)
    //   );
    // });

  }, []);




  return (
    <div className="relative bg-black-200">
      {/* Loading Overlay */}
      <div className="overlay">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className="bg-black-200 min-h-[100vh]">


        {/* Navbar (fixed now) */}
        <div className=" top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-black-200 shadow-cardShadow2">
          <div className="flex items-center">
            <CustomImage
              src={StaticImages.LOGO.Logo}
              className="h-16 w-auto"
            />
          </div>
          <div className="flex space-x-20">
            <button className="text-Grey-100 text-title20 font-light">PROJECTS</button>
            <button className="text-Grey-100 text-title20 font-light">ABOUT</button>
            <button className="text-Grey-100 text-title20 font-light">PLAYGROUND</button>
            <button className="text-Grey-100 text-title20 font-light">CONTACT</button>
            <button className="text-Grey-100 text-title20 font-light">SOCIAL MEDIA</button>
          </div>
        </div>
        <div className="relative">

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
            <p className="Name text-[10rem] text-white  text-center mb-20 font-bold">
              ADITYA RAJPUT
            </p>

          </div>
        </div>

        {/* Additional content to enable scrolling */}
        <div className="Description  p-8 flex flex-col justify-start min-h-[100vh] items-start ml-60">
          <p className=" descriptionContent text-Grey-100 text-[2rem] max-w-4xl leading-loose mt-[30vh] text-left">
            I’m a detail-driven React developer with a focus on User Experience, Animation, and Modern Frontend Practices. I’ve been crafting dynamic and engaging web solutions across products, platforms, and digital media for over 3 years.
          </p>
          <p className="  descriptionContent text-Grey-100 mt-20 text-[2rem] font-thin max-w-4xl leading-loose my-20 text-left">
            I’m currently working as a React Developer at Sachtech Solutions, a
            branding agency with devotion to motion, in Chandigarh.
          </p>

          <div className=" flex flex-col justify-between  w-full items-end space-y-5 pr-10 mb-[20vh] text-Grey-100">
            <div className="flex flex-col justify-between items-start mt-20  w-1/2">
              <p className="text-[2.5rem]">EXPERTISE</p>
              <div className="flex text-[1.5rem] justify-between  w-full text-left items-center">
                <p className="text-left">- ANIMATIONS</p>
                <p className="text-left">- Frontend Development</p>
              </div>
              <div className="flex text-[1.5rem] justify-between text-left w-full items-center">
                <p className="text-left">- React.js</p>
                <p className="text-left">- Redux</p>
              </div>
              <div className="flex text-[1.5rem] justify-between text-left w-full items-center">
                <p className="text-left">- Component Architecture</p>
                <p className="text-left">- Performance Optimization</p>
              </div>
              <div className="flex text-[1.5rem] justify-between text-left w-full items-center">
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
      <div className="absolute flex justify-center items-center w-full top-20">
        <DotLottieReact
          className="h-44"
          src="https://lottie.host/dc3709e9-5ff3-47c1-b717-7d64de6cb093/fKXHL9ULaH.lottie"
          loop
          color="#000000"
          autoplay
        />
      </div>

    </div>
  );
}

export default Home;
