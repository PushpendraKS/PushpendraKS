import { Phone, Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { trackEvent } from "../analytics/analytics";

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-28 px-6 border-t border-border"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                    <p
                        className="text-xs text-accent tracking-widest uppercase mb-4 flex items-center gap-3"
                        style={{
                            fontFamily: "'JetBrains Mono', monospace",
                        }}
                    >
                        <span className="w-6 h-px bg-accent" />
                        07 / Contact
                    </p>
                    <h2
                        className="text-5xl font-bold leading-tight text-foreground mb-5"
                        style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}
                    >
                        {"Let's Work"}
                        <br />
                        <span className="text-accent">Together.</span>
                    </h2>
                    <p
                        className="text-muted-foreground leading-relaxed max-w-sm mb-8"
                        style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}
                    >
                        I&apos;m excited to work on creative projects and
                        turn ideas into meaningful solutions. Let&apos;s
                        connect and create something great together!
                    </p>
                    {/* workspace image */}
                    <div className="relative rounded-2xl overflow-hidden border border-accent/15 max-w-sm">
                        <img
                            src="https://media.licdn.com/dms/image/v2/C4D12AQFyWqgmilJrIA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1542730797283?e=2147483647&v=beta&t=1shk05_yxA3KU3cSYP1JDR124sO5DSUZQZkJ4JiCXRg"
                            alt="Professional software developer workspace with multiple monitors"
                            className="w-full h-44 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
                        <div className="absolute bottom-3 left-4"></div>
                    </div>
                    <p
                        className="text-xs text-accent/80 font-medium"
                        style={{
                            fontFamily: "'JetBrains Mono', monospace",
                        }}
                    >
                        2026 ✦ Open to opportunities
                    </p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8 space-y-5">
                    <a
                        href="tel:+917974146275"
                        onClick={() => trackEvent("contact_click", { click: "Mobile" })}

                        className="flex items-center gap-4 group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                            <Phone size={16} className="text-accent" />
                        </div>
                        <div>
                            <p
                                className="text-xs text-muted-foreground mb-0.5"
                                style={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                }}
                            >
                                Phone
                            </p>
                            <p
                                className="text-sm text-foreground font-medium group-hover:text-accent transition-colors"
                                style={{
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                }}
                            >
                                +91 79741 46275
                            </p>
                        </div>
                    </a>
                    <div className="border-t border-border" />
                    <a
                        href="mailto:push.ks24@gmail.com"
                        onClick={() => trackEvent("contact_click", { click: "Email" })}

                        className="flex items-center gap-4 group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                            <Mail size={16} className="text-accent" />
                        </div>
                        <div>
                            <p
                                className="text-xs text-muted-foreground mb-0.5"
                                style={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                }}
                            >
                                Email
                            </p>
                            <p
                                className="text-sm text-foreground font-medium group-hover:text-accent transition-colors"
                                style={{
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                }}
                            >
                                push.ks24@gmail.com
                            </p>
                        </div>
                    </a>
                    <div className="border-t border-border" />
                    {/* <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <MapPin size={16} className="text-accent" />
            </div>
            <div>
              <p
                className="text-xs text-muted-foreground mb-0.5"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                Location
              </p>
              <p
                className="text-sm text-foreground font-medium"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                111/7 Sandakirana MW, Bokundara, Piliyandala
              </p>
            </div>
          </div>
          <div className="border-t border-border" /> */}
                    <a
                        href="https://www.linkedin.com/in/pushpendra-kumar24"
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => trackEvent("social_click", { click: "Linkedin" })}
                        className="flex items-center gap-4 group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                            <Linkedin size={16} className="text-accent" />
                        </div>
                        <div>
                            <p
                                className="text-xs text-muted-foreground mb-0.5"
                                style={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                }}
                            >
                                LinkedIn
                            </p>
                            <p
                                className="text-sm text-foreground font-medium group-hover:text-accent transition-colors"
                                style={{
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                }}
                            >
                                Pushpendra Kumar
                            </p>
                        </div>
                    </a>
                    <div className="pt-2">
                        <a
                            href="mailto:push.ks24@gmail.com"
                            onClick={() => trackEvent("contact_click", { click: "Send Message" })}
                            className="w-full inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 text-sm font-semibold rounded-lg hover:bg-accent/90 transition-all"
                            style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                            }}
                        >
                            Send a Message <ArrowUpRight size={14} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Contact;