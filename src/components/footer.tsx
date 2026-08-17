const Footer = () => {
    return (
        <footer className="border-t border-border px-6 py-8">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p
                    className="text-xs text-muted-foreground"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                    © 2026 · Pushpendra Kumar
                </p>
                {/* <p
          className="text-xs text-muted-foreground"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
        </p> */}
            </div>
        </footer>
    );
}

export default Footer;