import PWA from "../assets/pwa.svg"
import EfCore from "../assets/efCore.svg"
import NetFramework from "../assets/net_framework.png"
import WebAPI from "../assets/WebApi.png"

const SKILLS = [
    // {
    //     category: "Programming Languages",
    //     categoryIcon:Laptop,
    //     items: [
    //         {
    //             name: "C#",
    //             icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    //         },

    //     ],
    // },
    {
        category: "Frontend",
        categoryIcon: "fa-duotone fa-solid fa-laptop-code",
        items: [
            {
                name: "Angular",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
            },
            {
                name: "HTML5",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            },
            {
                name: "JavaScript",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            },
            {
                name: "CSS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            },
            {
                name: "TypeScript",
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
            },
            // {
            //     name: "React",
            //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            // },
            // {
            //     name: "Vite",
            //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
            // },
            {
                name: "PWA",
                icon: PWA
            }
        ],
    },
    {
        category: "Backend",
        categoryIcon: "fa-duotone fa-solid fa-server",
        items: [
            {
                name: ".NET Core",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
            },
            {
                name: "C#",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
            },
            // {
            //     name: "Node.js",
            //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            // },
            {
                name: ".Net Framework",
                icon: NetFramework
            },
            {
                name: "Web API",
                icon: WebAPI
            },
            {
                name: "Entity Framework",
                icon: EfCore,
            },
        ],
    },
    {
        category: "Databases & Cloud",
        categoryIcon: "fa-duotone fa-solid fa-database",
        items: [
            {
                name: "SQL Server",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg"
            },
            {
                name: "MySQL",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            },
            {
                name: "MariaDB",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg",
            },
            {
                name: "Azure Cloud",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
            }
        ],
    },
    {
        category: "Tools & Platforms",
        categoryIcon: "fa-duotone fa-solid fa-screwdriver-wrench",
        items: [
            {
                name: "Git",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
            },
            {
                name: "Azure DevOps",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg"
            },
            {
                name: "Visual Studio",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg"
            },
            {
                name: "VS Code",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
            },

        ],
    },
];

const Skills = () => {
    return (
        <section
            id="skills"
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
                        02 / Skills
                    </p>
                    <h2
                        className="text-4xl font-bold text-foreground"
                        style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}
                    >
                        Technical <span className="text-accent">Expertise</span>
                    </h2>
                </div>

                <div className="space-y-10">
                    {SKILLS.map(({ category, categoryIcon, items }) => (
                        <div key={category}>
                            {/* category label */}
                            <p
                                className="text-xs text-accent tracking-widest uppercase mb-5 flex items-center gap-3"
                                style={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                }}
                            >
                                <span className="w-8 h-px bg-accent/50" />
                                {/* <Icon size={16} className="text-accent" aria-hidden="true" /> */}
                                <i className={categoryIcon}></i>
                                {category}
                            </p>
                            {/* icon grid */}
                            <div className="flex flex-wrap gap-3">
                                {items.map(({ name, icon }) => (
                                    <div
                                        key={name}
                                        className="group flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3 hover:border-accent/40 hover:bg-secondary/60 transition-all duration-200 hover:-translate-y-0.5"
                                    >
                                        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">

                                            <img
                                                src={icon}
                                                alt={`${name} logo`}
                                                className="w-7 h-7 object-contain"
                                                style={
                                                    /* Express logo is black — invert it on dark bg */
                                                    name === "Express.js" ||
                                                        name === "GitHub"
                                                        ? {
                                                            filter:
                                                                "invert(1) brightness(0.85)",
                                                        }
                                                        : undefined
                                                }
                                                onError={(e) => {
                                                    (
                                                        e.currentTarget as HTMLImageElement
                                                    ).style.display = "none";
                                                }}
                                            />
                                        </div>
                                        <span
                                            className="text-sm text-foreground/80 group-hover:text-foreground font-medium transition-colors whitespace-nowrap"
                                            style={{
                                                fontFamily:
                                                    "'Plus Jakarta Sans', sans-serif",
                                            }}
                                        >
                                            {name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;