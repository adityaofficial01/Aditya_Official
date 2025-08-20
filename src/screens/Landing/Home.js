import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import CustomImage from "components/CustomImage";
import { StaticImages } from "utils/StaticImages";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

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
          start: "30% 80%",   // when 30% of Description hits 80% of viewport
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
        stagger: 0.3,
      });
    }

  }, []);



  return (
    <div className="relative">
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

        {/* Text container that will be pinned during scroll */}
        <div className="textContainer   overflow-hidden flex flex-col justify-center items-center h-[100vh]">
          <p className="Name text-[10rem] text-Grey-100  text-center mb-20 font-bold">
            ADITYA RAJPUT
          </p>

        </div>

        {/* Additional content to enable scrolling */}
        <div className="Description p-8 flex flex-col justify-center min-h-[100vh] items-center">
          <p className=" descriptionContent text-Grey-100 text-[2rem] max-w-4xl leading-loose my-20 text-left">
            I’m a multi-disciplinary art director with a focus on Digital
            Design, Interaction Design, and Photo Editing. I&apos;ve been
            delivering creative and engaging solutions across brand
            identity, website, app, and digital media for almost 10 years.
          </p>
          <p className="  descriptionContent text-Grey-100 mt-12 text-[2rem] max-w-4xl leading-loose my-20 text-left">
            I’m currently working as a digital designer at Studio MINSK, a
            branding agency with devotion to motion, in Amsterdam.
          </p>
        </div>
      </div>
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
