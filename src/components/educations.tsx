import { BookOpen } from "lucide-react";

const EDUCATION = [
    {
        degree:
            "BE Computer Science & Engineering",
        institution:
            "Chhattisgarh Swami Viveanand Technical University (CSVTU)",
        period: "2014 – 2018",

        current: false,
    }
];

const Education = () => {
    return (
        <section
            id="education"
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
                        05 / Education
                    </p>
                    <h2
                        className="text-4xl font-bold text-foreground"
                        style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}
                    >
                        Academic <span className="text-accent">Background</span>
                    </h2>
                </div>

                <div className="relative">
                    <div className="absolute left-4 top-2 bottom-2 w-px bg-border hidden sm:block" />
                    <div className="space-y-6">
                        {EDUCATION.map((edu, i) => (
                            <div key={i} className="flex gap-8">
                                <div className="relative hidden sm:flex flex-col items-center">
                                    <div
                                        className={`w-3 h-3 rounded-full border-2 mt-1 flex-shrink-0 z-10 ${edu.current
                                                ? "bg-accent border-accent"
                                                : "bg-background border-border"
                                            }`}
                                    />
                                </div>
                                <div
                                    className={`flex-1 bg-card border rounded-xl p-6 hover:border-accent/30 transition-colors ${edu.current
                                            ? "border-accent/40"
                                            : "border-border"
                                        }`}
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                                        <div className="flex items-center gap-2">
                                            {edu.current && (
                                                <span
                                                    className="text-xs bg-accent/15 text-accent px-2 py-0.5 rounded-full font-medium"
                                                    style={{
                                                        fontFamily:
                                                            "'JetBrains Mono', monospace",
                                                    }}
                                                >
                                                    Current
                                                </span>
                                            )}
                                            <BookOpen
                                                size={14}
                                                className="text-accent"
                                            />
                                        </div>
                                        <span
                                            className="text-xs text-muted-foreground"
                                            style={{
                                                fontFamily:
                                                    "'JetBrains Mono', monospace",
                                            }}
                                        >
                                            {edu.period}
                                        </span>
                                    </div>
                                    <h3
                                        className="font-semibold text-foreground text-base mb-1"
                                        style={{
                                            fontFamily:
                                                "'Plus Jakarta Sans', sans-serif",
                                        }}
                                    >
                                        {edu.degree}
                                    </h3>
                                    <p
                                        className="text-sm text-muted-foreground"
                                        style={{
                                            fontFamily:
                                                "'Plus Jakarta Sans', sans-serif",
                                        }}
                                    >
                                        {edu.institution}
                                    </p>
                                    <p
                                        className="text-xs text-accent mt-2"
                                        style={{
                                            fontFamily: "'JetBrains Mono', monospace",
                                        }}
                                    >
                                        {/* {edu.detail} */}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;