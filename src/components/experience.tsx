import { MapPin } from "lucide-react";
import pairsoftLogo from "../assets/pairsoft_logo.png";
import nextgenLogo from "../assets/nextgen_logo.png";
import pwcLogo from "../assets/pwc_logo.svg";
import ibzLogo from "../assets/ibz_logo.png";


const EXPERIENCES = [
  {
    position: "Sr. Software Engineer",
    company: "Pairsoft",
    logo: pairsoftLogo,
    period: "02/2025 – Present",
    location: "Ahmedabad",
    mode: "Remote",
    current: true,
    description: [
      "Develop and maintain RESTful APIs for business workflows, implementing validation, exception handling, and scalable service-layer architecture.",
      "Implement asynchronous processing and background workflows to improve application scalability and reliability.",
      "Troubleshoot and resolve application and production issues by analyzing API behavior, application logs, database performance, and service dependencies.",
      "Develop database solutions using SQL Server, including complex queries, stored procedures, LINQ, and performance optimization.",
      "Follow SOLID principles, dependency injection, design patterns, and clean coding practices to build maintainable enterprise applications."
    ],
  },
  {
    position: "Sr. Software Engineer",
    logo: nextgenLogo,
    company: "NextGen Invent",
    period: "11/2024 – 01/2025",
    location: "Noida",
    mode: "Remote",
    current: false,
    description: [
      "Designed and consumed RESTful APIs supporting healthcare business workflows and data processing.",
      "Investigated application defects, performed root-cause analysis, and delivered fixes across frontend, backend and database layers.",
    ]
  },
  {
    position: "Associate 2",
    company: "PwC",
    logo: pwcLogo,
    period: "09/2021 – 10/2024",
    location: "Bengaluru",
    mode: "Remote",
    current: false,
    description: [
      "Worked as a Full Stack Developer, contributing to both frontend and backend development for enterprise applications focused on audit control automation and scheduling.",
      "Took features through the complete software development lifecycle, including requirement analysis, technical implementation, unit testing, code review, deployment, and production support.",
      "Collaborated closely with developers, QA engineers, product/business stakeholders, and other cross-functional teams to understand requirements and deliver business solutions.",
      "Participated actively in Scrum ceremonies including daily stand-ups, sprint planning, backlog refinement, sprint reviews and retrospectives.",
      "Performed peer code reviews to maintain code quality, consistency, security, and adherence to development standards."
    ]
  },
  {
    position: "Software Engineer 2",
    company: "Interbiz Consulting",
    logo: ibzLogo,
    period: "07/2018 – 09/2021",
    location: "Raipur",
    mode: "onsite",
    current: false,
    description: [
      "Designed and developed multiple business features and end-to-end application workflows, taking ownership from requirement analysis through development, testing, and delivery.",
      "Led and managed a development team, providing technical guidance, task planning, code reviews, and support to ensure timely and high-quality feature delivery.",
      "Worked directly with stakeholders to understand business requirements, clarify technical needs, discuss solutions, and provide project updates.",
      "Implemented application security measures across authentication, authorization, API access, and secure data handling to protect application resources and business data.",

    ]
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p
            className="text-xs text-accent tracking-widest uppercase mb-3 flex items-center gap-3"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            <span className="w-6 h-px bg-accent" />
            03 / Experience
          </p>
          <h2
            className="text-4xl font-bold text-foreground"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Professional <span className="text-accent">Journey</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute align-journey top-2 bottom-2 w-px bg-border hidden sm:block" />
          <div className="space-y-6">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="flex gap-8">
                <div className="relative hidden sm:flex flex-col items-center">
                  <div
                    className={`w-3 h-3 rounded-full border-2 mt-1 flex-shrink-0 z-10 ${exp.current
                      ? "bg-accent border-accent"
                      : "bg-background border-border"
                      }`}
                  />
                </div>
                <div
                  className={`flex-1 bg-card border rounded-xl p-6 hover:border-accent/30 transition-colors ${exp.current
                    ? "border-accent/40"
                    : "border-border"
                    }`}
                >
                  <h3
                    className="font-semibold text-foreground text-xl mb-1"
                    style={{
                      fontFamily:
                        "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {exp.position}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2">
                      <span
                        className="inline-flex gap-2 items-center text-sm text-accent py-0.5"
                        style={{
                          fontFamily:
                           "'Plus Jakarta Sans', sans-serif",
                        }}
                      >
                        <img src={exp.logo} alt={exp.company} width={18} height={18} />

                        {exp.company}
                      </span>

                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className="inline-flex gap-2 items-center text-xs text-accent"
                        style={{
                          fontFamily:
                            "'JetBrains Mono', monospace",
                        }}
                      >
                      {exp.period}

                      </span>

                    </div>
                  </div>
                  <p
                    className=" inline-flex gap-2 items-center text-sm text-muted-foreground"
                    style={{
                      fontFamily:
                        "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    <MapPin size={14} />
                    <span> {exp?.location} </span>
                    {exp?.mode && (
                      <>
                        <span> · </span>
                        <span> {exp?.mode} </span>
                      </>
                    )}
                  </p>
                  {exp.description && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <ul className="list-disc list-inside space-y-2">
                        {exp.description.map((desc, j) => (
                          <li key={j} className="text-sm text-muted-foreground">
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;