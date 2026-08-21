import { ChevronDown, ExternalLink, FileText, Github } from "lucide-react";
import { useState } from "react";
import Papersave from "../assets/papersave.png";
import Analytics from "../assets/analytics.png";
import HealthTechImage from "../assets/healthTech.png";
import Protocol from "../assets/protocol.png";
import { trackEvent } from "../analytics/analytics";

const PROJECTS = [
    {
        index: "01",
        title: "PaperSave",
        description: "PaperSave is an enterprise Accounts Payable (AP) Automation platform that digitizes and streamlines the invoice processing lifecycle. The platform enables organizations to manage invoices from document capture and data extraction through validation, approval, and payment workflows, reducing manual effort and improving processing efficiency.\n\nThe application provides a centralized platform for managing invoices, vendors, approvals, exceptions, and financial data while integrating with enterprise systems to support a seamless accounts payable process.",
        role: "Individual Contributor - Full Stack",
        tags: ["Angular", ".NET", "SQL Server", "C#", "Web API", "Azure Cloud", "BlackBoud"],
        github: null,
        projectLink: "https://www.pairsoft.com/about-us/papersave/",
        live: null,
        year: "2025 - 2026",
        image: Papersave,
        imageAlt: "Papersave",
    },
    {
        index: "02",
        title: "Analytics",
        description: "Analytics is an enterprise-grade SaaS analytics platform built to transform client database data into automated reports and actionable business insights. The platform provides a centralized framework for configuring and executing analytics, supporting both standard pre-built analytics and client-specific custom analytics. With scheduled processing and automated report generation, it minimizes repetitive manual analysis and enables organizations to consistently monitor key business metrics. \n\nThe solution is designed to make analytics more scalable and accessible by automating the journey from data processing to analysis, reporting, and insight generation, helping clients gain timely visibility into their business performance.",
        role: "Individual Contributor — Full Stack",
        tags: ["Angular", ".NET", "SQL Server", "C#", "Web API", "Entity Framework", "Linq", "Azure Cloud",],
        github: null,
        projectLink: null,
        live: null,
        year: "2021 - 2024",
        image: Analytics,
        imageAlt: "Analytics",
    },

    {
        index: "03",
        title: "Rovicare",
        description: "Rovicare is a healthcare care coordination and transitional care management platform designed to simplify and streamline the patient journey across the healthcare continuum. The platform brings hospitals, healthcare providers, care teams, patients, families, and external partners together in a centralized digital environment, replacing fragmented processes that traditionally rely on phone calls, emails, faxes, and multiple disconnected systems.\n\nRovicare enables healthcare teams to manage digital referrals, coordinate patient transitions, share medical information, schedule follow-up appointments, communicate with internal and external providers, and track the progress of each patient through intuitive dashboards. Its provider network helps care teams quickly identify and connect with appropriate healthcare partners, while analytics provide visibility into operational performance, referral activity, and partner effectiveness. The platform also supports patient and family engagement through dedicated communication and portal capabilities, creating greater transparency throughout the care journey.\n\nThe solution is used across multiple areas of healthcare, including hospitals and healthcare systems, behavioral health, skilled nursing facilities, accountable care organizations, hospital-at-home programs, and outpatient care. By bringing care coordination activities into a single platform and automating manual workflows, Rovicare helps healthcare organizations improve collaboration, reduce administrative effort, strengthen patient transitions, and ultimately deliver better patient outcomes.",
        role: "Individual Contributor — Full Stack, Team Lead",
        tags: ["Angular", ".NET", "MysSQL", "C#", "Web API", "Entity Framework", "Linq", "Azure Cloud", "Google Analytics", "PWA"],
        github: null,
        projectLink: "https://www.rovicare.com/",
        live: null,
        year: "2018 - 2021",
        image: HealthTechImage,
        imageAlt: "Healthcare Tech",
    },
    {
        index: "04",
        title: "ProtocolNow",
        description: "ProtocolNow is a digital clinical protocol management platform built to help healthcare organizations centralize, standardize, and manage clinical protocols throughout their lifecycle. It enables healthcare teams to create, review, approve, publish, search, and continuously update protocols from a single platform, ensuring that clinicians can quickly access the most current and relevant guidance. With features such as smart search, version control, checklists, collaboration, training, offline access, sharing, and usage analytics, ProtocolNow reduces dependency on scattered documents and manual processes. The platform helps healthcare organizations improve consistency, accessibility, and collaboration while supporting teams in delivering standardized, high-quality patient care.",
        role: "Individual Contributor — Full Stack,",

        tags: [".NET", "MysSQL", "C#", "Web API", "Entity Framework", "Linq", "ionic", "Azure Cloud", "Google Analytics", "PWA"],
        github: null,
        projectLink: "https://www.protocolnow.com/product",
        year: "2019",
        image: Protocol,
        imageAlt: "Protocol sharing",
    }
];

const Projects = () => {
    const [expanded, setExpanded] = useState<string | null>(null);
    const handleProjectExpand = (
        projectTitle: string,
        projectIndex: string,
        isOpen: boolean
    ) => {
        if (!isOpen) {
            trackEvent("project_expand", {
                project_name: projectTitle,
            });
        }

        setExpanded(isOpen ? null : projectIndex);
    };

    return (
        <section
            id="projects"
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
                        04 / Projects
                    </p>
                    <h2
                        className="text-4xl font-bold text-foreground"
                        style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}
                    >
                        Featured <span className="text-accent">Projects</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {PROJECTS.map((project) => {
                        const isOpen = expanded === project.index;
                        return (
                            <div
                                key={project.index}
                                className={`bg-card border rounded-xl overflow-hidden transition-all duration-200 ${isOpen
                                    ? "border-accent/40"
                                    : "border-border hover:border-accent/20"
                                    }`}
                            >
                                <button
                                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                                    onClick={() =>
                                        handleProjectExpand(project.title, project.index, isOpen)
                                    }
                                >
                                    <div className="flex items-center gap-4 min-w-0">
                                        {/* thumbnail */}
                                        <div className="w-14 h-10 rounded-md overflow-hidden flex-shrink-0 bg-muted hidden sm:block">
                                            <img
                                                src={project.image}
                                                alt={project.imageAlt}
                                                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                                            />
                                        </div>
                                        <span
                                            className="text-muted-foreground/40 text-xs flex-shrink-0"
                                            style={{
                                                fontFamily:
                                                    "'JetBrains Mono', monospace",
                                            }}
                                        >
                                            {project.index}
                                        </span>
                                        <div className="min-w-0">
                                            <h3
                                                className="font-semibold text-foreground text-base truncate"
                                                style={{
                                                    fontFamily:
                                                        "'Plus Jakarta Sans', sans-serif",
                                                }}
                                            >
                                                {project.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-1.5 mt-1.5">
                                                {project.tags.slice(0, 3).map((t) => (
                                                    <span
                                                        key={t}
                                                        className="text-xs text-accent/80 px-2 py-0.5 rounded"
                                                        style={{
                                                            fontFamily:
                                                                "'JetBrains Mono', monospace",
                                                            background:
                                                                "rgba(79,142,247,0.08)",
                                                        }}
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                                {project.tags.length > 3 && (
                                                    <span
                                                        className="text-xs text-muted-foreground"
                                                        style={{
                                                            fontFamily:
                                                                "'JetBrains Mono', monospace",
                                                        }}
                                                    >
                                                        +{project.tags.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 flex-shrink-0">
                                        <span
                                            className="text-xs text-muted-foreground hidden sm:block"
                                            style={{
                                                fontFamily:
                                                    "'JetBrains Mono', monospace",
                                            }}
                                        >
                                            {project.year}
                                        </span>
                                        <ChevronDown
                                            size={16}
                                            className={`text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                                        />
                                    </div>
                                </button>

                                {isOpen && (
                                    <div className="border-t border-border">
                                        {/* project image banner */}
                                        <div className="relative h-48 overflow-hidden bg-muted">
                                            <img
                                                src={project.image}
                                                alt={project.imageAlt}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                                            {/* overlay text */}
                                            <div className="absolute bottom-4 left-6">
                                                <p
                                                    className="text-xs text-accent/80 mb-1"
                                                    style={{
                                                        fontFamily:
                                                            "'JetBrains Mono', monospace",
                                                    }}
                                                >
                                                    {project.role}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="text-xs text-foreground/80 border border-border/60 bg-background/60 backdrop-blur px-2.5 py-0.5 rounded-md"
                                                            style={{
                                                                fontFamily:
                                                                    "'JetBrains Mono', monospace",
                                                            }}
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        {/* description + links */}
                                        <div className="px-6 py-5">
                                            <div className="text-muted-foreground text-sm leading-relaxed mb-5 space-y-3">
                                                {project.description.split('\n\n').map((paragraph, idx) => (
                                                    <p
                                                        key={idx}
                                                        style={{
                                                            fontFamily:
                                                                "'Plus Jakarta Sans', sans-serif",
                                                        }}
                                                    >
                                                        {paragraph}
                                                    </p>
                                                ))}
                                            </div>
                                            <div className="flex gap-3">
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-flex items-center gap-2 text-xs border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20 px-4 py-2 rounded-md transition-colors"
                                                        style={{
                                                            fontFamily:
                                                                "'JetBrains Mono', monospace",
                                                        }}
                                                    >
                                                        <Github size={13} /> GitHub
                                                    </a>
                                                )
                                                }
                                                {project.projectLink && (
                                                    <a
                                                        href={project.projectLink}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-flex items-center gap-2 text-xs bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 px-4 py-2 rounded-md transition-colors"
                                                        style={{
                                                            fontFamily:
                                                                "'JetBrains Mono', monospace",
                                                        }}
                                                    >
                                                        <FileText size={13} /> Project
                                                    </a>
                                                )}
                                                {project.live && (
                                                    <a
                                                        // href={project.live}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-flex items-center gap-2 text-xs bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 px-4 py-2 rounded-md transition-colors"
                                                        style={{
                                                            fontFamily:
                                                                "'JetBrains Mono', monospace",
                                                        }}
                                                    >
                                                        <ExternalLink size={13} /> Live Demo
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Projects;