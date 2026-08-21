import { useEffect } from "react";
import { trackPageView } from "./analytics";

const AnalyticsTracker = () => {
  useEffect(() => {
    const trackCurrentSection = () => {
      const hash = window.location.hash;

      const section = hash
        ? hash.substring(1)
        : "home";

      trackPageView(`/${section}`);
    };

    // Track initial page
    trackCurrentSection();

    // Track navigation changes
    window.addEventListener(
      "hashchange",
      trackCurrentSection
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        trackCurrentSection
      );
    };
  }, []);

  return null;
};

export default AnalyticsTracker;