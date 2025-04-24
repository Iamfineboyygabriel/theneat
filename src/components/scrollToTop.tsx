import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, key } = useLocation();

  useEffect(() => {
    // Log for debugging
    console.log("Route changed to:", pathname);

    // Use multiple techniques to ensure scrolling works
    const scrollToTopForcefully = () => {
      // Method 1: Basic scrollTo
      window.scrollTo(0, 0);

      // Method 2: ScrollTo with options
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });

      // Method 3: Set scroll position directly
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Execute immediately
    scrollToTopForcefully();

    // And also with a delay to catch any post-render changes
    const timeoutId = setTimeout(scrollToTopForcefully, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname, key]); // Include key to catch same-route navigations

  return null;
};

export default ScrollToTop;
