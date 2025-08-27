import { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

// Hook to get the width of an element
function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

export const ScrollVelocity = ({
  scrollContainerRef,
  texts = [
    "React Developer",
    "UI Animation ",
    "Modern Frontend Architect",
  ],
  velocity = 100,
  className = "",
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName = "",
  scrollerClassName = "",
  parallaxStyle = {},
  scrollerStyle = {},
}) => {
  // Component for a single scrolling text row
  function VelocityText({
    children,
    baseVelocity = velocity,
    scrollContainerRef,
    className = "",
    damping,
    stiffness,
    numCopies,
    velocityMapping,
    parallaxClassName = "",
    scrollerClassName = "",
    parallaxStyle = {},
    scrollerStyle = {},
  }) {
    const baseX = useMotionValue(0);

    // Use scrollY from the correct container or window
    const scrollOptions = scrollContainerRef?.current
      ? { container: scrollContainerRef }
      : undefined;
    const { scrollY } = useScroll(scrollOptions);

    // Get scroll velocity and smooth it
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: damping ?? 50,
      stiffness: stiffness ?? 400,
    });

    // Map velocity to a factor for parallax
    const velocityFactor = useTransform(
      smoothVelocity,
      velocityMapping?.input || [0, 1000],
      velocityMapping?.output || [0, 5],
      { clamp: false }
    );

    // Get width of a single copy for wrapping
    const copyRef = useRef(null);
    const copyWidth = useElementWidth(copyRef);

    // Helper to wrap value between min and max
    function wrap(min, max, v) {
      const range = max - min;
      const mod = (((v - min) % range) + range) % range;
      return mod + min;
    }

    // Transform baseX to a wrapped x value for infinite scroll
    const x = useTransform(baseX, (v) => {
      if (copyWidth === 0) return "0px";
      return `${wrap(-copyWidth, 0, v)}px`;
    });

    // Animation frame to update baseX based on velocity
    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      // Change direction based on scroll
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * Math.abs(velocityFactor.get());
      baseX.set(baseX.get() + moveBy);
    });

    // Calculate how many copies are needed to cover the full screen width
    // plus a buffer for seamless looping
    const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);
    useLayoutEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    // If copyWidth is 0, fallback to numCopies
    let effectiveNumCopies = numCopies;
    if (copyWidth > 0 && windowWidth > 0) {
      // Add 2 extra for seamlessness
      effectiveNumCopies = Math.ceil(windowWidth / copyWidth) + 2;
    }

    // Render multiple copies for seamless scroll
    const spans = [];
    for (let i = 0; i < (effectiveNumCopies ?? 1); i++) {
      spans.push(
        <span
          className={`flex-shrink-0 ${className}`}
          key={i}
          ref={i === 0 ? copyRef : null}
        >
          {children}
        </span>
      );
    }

    return (
      <div
        className={`relative overflow-hidden  w-screen max-w-none ${parallaxClassName}`}
        style={{ ...parallaxStyle, width: "100vw" }}
      >
        <motion.div
          className={`flex whitespace-nowrap text-center font-sans text-4xl font-bold tracking-[-0.02em] drop-shadow md:text-[5rem] md:leading-[5rem] ${scrollerClassName}`}
          style={{ x, ...scrollerStyle, minWidth: "100vw" }}
        >
          {spans}
        </motion.div>
      </div>
    );
  }

  return (
    <section className="min-h-96 text-Grey-100  max-w-none overflow-hidden mt-20 lg:my-60 bg-black-200 " style={{ width: "99.8vw" }}>
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          className={className}
          baseVelocity={index % 2 !== 0 ? -velocity : velocity}
          scrollContainerRef={scrollContainerRef}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        >
          {text}&nbsp;
        </VelocityText>
      ))}
    </section>
  );
};

export default ScrollVelocity;
