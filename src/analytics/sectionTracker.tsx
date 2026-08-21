import { useEffect } from "react";
import { trackSectionView } from "./analytics";

const SectionTracker = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(
      "section[id]"
    );

    const trackedSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            !trackedSections.has(entry.target.id)
          ) {
            const sectionName = entry.target.id;

            trackSectionView(sectionName);

            trackedSections.add(sectionName);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default SectionTracker;