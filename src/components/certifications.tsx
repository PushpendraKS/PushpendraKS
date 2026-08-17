import { ChevronDown, ExternalLink } from "lucide-react";
import { useState } from "react";
import HumanCenteredDesign from "../assets/humanCenteredDesign.png"
import DigitalAcument from "../assets/digitalAcumen.png"

const CERTIFICATIONS = [
    {
        name: "Human-Centered Design",
        issuer: "PwC",
        color: "#1a6fd4",
        link: "https://www.credly.com/badges/835ab7e0-a41d-4e63-8bf3-4a9a07a01d84",
        thumbnail: HumanCenteredDesign,
    },
    {
        name: "Digital Acumen",
        issuer: "PwC",
        color: "#3331ca",
        link: "https://www.credly.com/badges/b0ea9806-0e17-4c94-a9b0-c1a1be61dfa9",
        thumbnail: DigitalAcument
    }
];


const Certifications = () => {
    const showableItems = 3;
    const [showAll, setShowAll] = useState(false);
    const visible = showAll
        ? CERTIFICATIONS
        : CERTIFICATIONS.slice(0, showableItems);
    const hidden = CERTIFICATIONS.length > showableItems ? CERTIFICATIONS.length - 3 : 0;
    const isHidden = CERTIFICATIONS.length > showableItems;

    return (
        <section
            id="certifications"
            className="py-24 px-6 border-t border-border"
        >
            <div className="max-w-6xl mx-auto">
                {/* header */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
                    <div>
                        <p
                            className="text-xs text-accent tracking-widest uppercase mb-3 flex items-center gap-3"
                            style={{
                                fontFamily: "'JetBrains Mono', monospace",
                            }}
                        >
                            <span className="w-6 h-px bg-accent" />
                            06 / Certifications
                        </p>
                        <h2
                            className="text-4xl font-bold text-foreground"
                            style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                            }}
                        >
                            Credentials
                        </h2>
                        <p
                            className="text-sm text-muted-foreground mt-2"
                            style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                            }}
                        >
                            Click any certificate to view the original.
                        </p>
                    </div>
                    <div
                        className="text-xs text-muted-foreground px-3 py-1.5 border border-border rounded-full self-start sm:self-auto"
                        style={{
                            fontFamily: "'JetBrains Mono', monospace",
                        }}
                    >
                        {CERTIFICATIONS.length} certificates
                    </div>
                </div>

                {/* certificate list */}
                <div className="space-y-3">
                    {visible.map((cert, i) => (
                        <a
                            key={i}
                            href={cert.link}
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center gap-5 bg-card border border-border rounded-2xl px-5 py-4 hover:border-accent/40 hover:bg-card/80 transition-all duration-200"
                        >
                            {/* number */}
                            <span
                                className="text-xs font-bold flex-shrink-0 w-7 text-right tabular-nums"
                                style={{
                                    color: cert.color,
                                    fontFamily: "'JetBrains Mono', monospace",
                                }}
                            >
                                {String(
                                    CERTIFICATIONS.indexOf(cert) + 1,
                                ).padStart(2, "0")}
                            </span>

                            {/* certificate thumbnail */}
                            <div
                                className="w-16 h-11 flex-shrink-0 rounded-lg overflow-hidden border flex items-center justify-center"
                                style={{
                                    borderColor: cert.color + "40",
                                    background: cert.color + "10",
                                }}
                            >
                                <img
                                    src={cert.thumbnail}
                                    alt={cert.name}
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        const el = e.currentTarget;
                                        el.style.display = "none";
                                        const fallback =
                                            el.nextElementSibling as HTMLElement | null;
                                        if (fallback)
                                            fallback.style.display = "flex";
                                    }}
                                />
                                {/* fallback index badge shown only if image fails */}
                                <span
                                    className="text-xs font-bold hidden w-full h-full items-center justify-center"
                                    style={{
                                        color: cert.color,
                                        fontFamily: "'JetBrains Mono', monospace",
                                    }}
                                >
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                            </div>

                            {/* name + issuer */}
                            <div className="flex-1 min-w-0">
                                <p
                                    className="text-foreground font-semibold text-sm group-hover:text-accent transition-colors truncate"
                                    style={{
                                        fontFamily:
                                            "'Plus Jakarta Sans', sans-serif",
                                    }}
                                >
                                    {cert.name}
                                </p>
                                <p
                                    className="text-xs text-muted-foreground mt-0.5"
                                    style={{
                                        fontFamily: "'JetBrains Mono', monospace",
                                    }}
                                >
                                    {cert.issuer}
                                </p>
                            </div>

                            {/* accent bar */}
                            <div
                                className="hidden sm:block h-5 w-1 rounded-full flex-shrink-0"
                                style={{ background: cert.color }}
                            />

                            {/* view link */}
                            <div
                                className="flex items-center gap-1.5 text-xs flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity"
                                style={{
                                    color: cert.color,
                                    fontFamily: "'JetBrains Mono', monospace",
                                }}
                            >
                                <ExternalLink size={12} />
                                <span className="hidden sm:inline">View</span>
                            </div>
                        </a>
                    ))}
                </div>

                {/* show all / collapse toggle */}
                {isHidden ?? (
                    <div className="mt-6 flex justify-center">
                        <button
                            onClick={() => setShowAll((v) => !v)}
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border text-sm text-muted-foreground hover:text-accent hover:border-accent/40 transition-all"
                            style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                            }}
                        >
                            {showAll ? (
                                <>
                                    Show Less{" "}
                                    <ChevronDown size={14} className="rotate-180" />
                                </>
                            ) : (
                                <>
                                    View All {hidden} More Certificates{" "}
                                    <ChevronDown size={14} />
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Certifications;