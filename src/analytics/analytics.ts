import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

export const initializeAnalytics = () => {
  if (!GA_MEASUREMENT_ID) {
    console.warn(
      "Google Analytics is disabled because VITE_GA_MEASUREMENT_ID is not set."
    );
    return;
  }

  ReactGA.initialize(GA_MEASUREMENT_ID);
};

// Track page view
export const trackPageView = (path: string) => {
  if (!GA_MEASUREMENT_ID) return;

  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};

// Track navigation click
export const trackNavigationClick = (
  sectionName: string
) => {
  if (!GA_MEASUREMENT_ID) return;

  ReactGA.event("navigation_click", {
    section_name: sectionName,
  });
};

// Track section visibility
export const trackSectionView = (
  sectionName: string
) => {
  if (!GA_MEASUREMENT_ID) return;

  ReactGA.event("section_view", {
    section_name: sectionName,
  });
};

// Track other portfolio actions
export const trackEvent = (
  eventName: string,
  parameters: Record<string, string>
) => {
  if (!GA_MEASUREMENT_ID) return;

  ReactGA.event(eventName, parameters);
};