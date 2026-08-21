import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID;

export const initializeAnalytics = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

// Track page view
export const trackPageView = (path: string) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};

// Track navigation click
export const trackNavigationClick = (
  sectionName: string
) => {
  ReactGA.event("navigation_click", {
    section_name: sectionName,
  });
};

// Track section visibility
export const trackSectionView = (
  sectionName: string
) => {
  ReactGA.event("section_view", {
    section_name: sectionName,
  });
};

// Track other portfolio actions
export const trackEvent = (
  eventName: string,
  parameters: Record<string, string>
) => {
  ReactGA.event(eventName, parameters);
};