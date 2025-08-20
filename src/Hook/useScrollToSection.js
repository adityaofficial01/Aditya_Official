import { useCallback } from "react";

const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId, offset = 100) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const topPosition = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  }, []);

  return scrollToSection;
};

export default useScrollToSection;
