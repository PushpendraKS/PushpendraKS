import { ChevronDown, FileText } from "lucide-react";
import ImageWithFallback from "./ui/ImageWithFallback";
import portfolioPhoto from "../assets/profilepic.jpg"
import { trackEvent } from "../analytics/analytics";

const Home = ({ dark }: { dark: boolean }) => {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center px-6 relative  bg-background transition-colors duration-300"
        >
            {/* radial glow — adapts per mode */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: dark
                        ? "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(79,142,247,0.10) 0%, transparent 70%)"
                        : "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(37,99,235,0.08) 0%, transparent 70%)",
                }}
            />
            {/* grid */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: dark
                        ? "linear-gradient(rgba(79,142,247,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(79,142,247,0.06) 1px, transparent 1px)"
                        : "linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />

            {/* Open to opportunities badge */}
            <div className="absolute top-20 lg:flex items-center gap-2 border border-border bg-card/80 backdrop-blur px-4 py-2 rounded-full">
                <span
                    className="text-xs text-muted-foreground"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                    ✦ Open to opportunities
                </span>
            </div>

            <div className="max-w-6xl mx-auto w-full relative z-10 pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 lg:gap-20 items-center">
                    {/* ── LEFT: photo ── */}
                    <div className="flex justify-center lg:justify-start order-1 lg:order-none">
                        <div className="relative">
                            {/* glow ring */}
                            <div className="absolute -inset-3 rounded-full opacity-20 blur-xl bg-accent" />
                            <div className="relative w-52 h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-accent/30 shadow-2xl">
                                <ImageWithFallback
                                    src={portfolioPhoto}
                                    alt="Pushpendra Kumar — Software Engineer"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* badge */}
                            <div id="badge" className="absolute -bottom-3  bg-card border border-accent/30 rounded-full px-3 py-1.5 flex items-center gap-2 shadow-lg">
                                <span
                                    className="text-xs text-accent font-semibold whitespace-nowrap"
                                    style={{
                                        fontFamily: "'JetBrains Mono', monospace",
                                    }}
                                >
                                    Software Engineer · 8+ Years Experience
                                </span>
                            </div>
                            <div className="absolute text-2xl  -bottom-20 left-12">
                                {/* <a href="https://github.com/PushpendraKS" className="icon-button github" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i><span></span>
                                </a> */}
                                <a href="https://www.linkedin.com/in/pushpendra-kumar24/" className="icon-button linkedin" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin-in"></i><span></span>
                                </a>
                                <a href="mailto:push.ks24@gmail.com" className="icon-button google" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-envelope"></i><span></span>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* ── RIGHT: text ── */}
                    <div>
                        <p
                            className="text-accent text-xs tracking-widest uppercase mb-5 flex items-center gap-3"
                            style={{
                                fontFamily: "'JetBrains Mono', monospace",
                            }}
                        >
                            <span className="w-10 h-px bg-accent flex-shrink-0" />
                            Full Stack Developer · 8+ Years Experience
                        </p>

                        <h1

                            className="text-[clamp(2.8rem,7vw,6.5rem)] font-bold leading-[1.05] tracking-tight text-foreground mb-6"
                            style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                            }}
                        >
                            Pushpendra
                            <br />
                            <span
                                className="text-transparent"
                                style={{
                                    WebkitTextStroke: "1.5px var(--accent)",
                                }}
                            >
                                Kumar
                            </span>
                        </h1>

                        <p
                            className="text-base text-muted-foreground max-w-lg leading-relaxed mb-8"
                            style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                            }}
                        >
                            Full Stack Engineer with 8 years of experience
                            passionate about building practical, user-focused
                            software solutions.
                            I turn ideas into working
                            products.
                        </p>

                        <div className="flex items-center gap-3 flex-wrap">
                            {/* <a
                                href="#projects"
                                className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 text-sm font-semibold rounded-lg hover:bg-accent/90 transition-all hover:-translate-y-px"
                                style={{
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                }}
                            >
                                View Projects <ArrowUpRight size={14} />
                            </a> */}
                            {/* Resume button */}
                            <a
                                href="https://drive.google.com/file/d/1NqPdZag4rBr-HhuAd4EbDoYmacl1K7i2/view?usp=sharing"
                                download
                                target="_blank" rel="noopener noreferrer"
                                onClick={() => trackEvent("resume_download", { "download": "Resume" })}
                                className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 text-sm font-semibold rounded-lg hover:bg-accent/90 transition-all hover:-translate-y-px"
                                style={{
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                }}
                            >
                                <FileText size={14} /> Resume
                            </a>
                            <a
                                href="#contact"
                                onClick={() => trackEvent("contact_click", { "click": " Get in Touch" })}
                                className="inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 text-sm font-semibold rounded-lg hover:border-accent/40 transition-all"
                                style={{
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                }}
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <ChevronDown
                    size={18}
                    className="text-muted-foreground animate-bounce"
                />
            </div>
        </section>
    );
}


export default Home;