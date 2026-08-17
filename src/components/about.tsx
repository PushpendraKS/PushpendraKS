import handgesture from "../assets/hand.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 border-t border-border"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p
            className="text-xs text-accent tracking-widest uppercase mb-4 flex items-center gap-3"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            <span className="w-6 h-px bg-accent" />
            01 / About Me
          </p>
          <h2
            className="text-4xl font-bold text-foreground mb-6 leading-tight"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Hello, I'm <span className="text-accent">Pushpendra </span>
            <span className="wave">
              <img alt="👋" draggable="false" src={handgesture} ></img>
            </span>
            {/* About <span className="text-accent">Me</span> */}
          </h2>
          <p
            className="text-muted-foreground leading-relaxed mb-4"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            I am a <strong>Full Stack Software Engineer</strong> with 8+ years of experience building scalable, secure,
            and high-performance web applications and enterprise solutions.
            I work across the <strong>Full Software Development Lifecycle (SDLC)</strong>, from understanding requirements and
            designing solutions to development, debugging, optimization, and production delivery.
          </p>
          <p
            className="text-muted-foreground leading-relaxed mb-4"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            My core strength relies on a strong Enterprise Full Stack Arsenal.
            My expertise spans across <strong>.NET, C#, Web API, and Entity Framework, SQL Server </strong> for
            building secure and maintainable APIs, services, and business solutions,  perfectly combined with
            <strong> Angular, TypeScript, JavaScript, and PWA </strong> to build responsive, high-performance user interfaces.
          </p>
        </div>

        {/* coding photo */}
        <div className="hidden lg:flex justify-center">
          <div className="relative w-full max-w-sm">
            <div className="relative rounded-2xl overflow-hidden border border-accent/20 shadow-2xl shadow-accent/5">
              <img
                src="src\assets\CodeLaptop.jpg"
                alt="workspace"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            {/* floating skill tags */}
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl px-4 py-3 shadow-xl">
              <p
                className="text-xs text-accent font-medium mb-1"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                Stack
              </p>
              <p
                className="text-xs text-muted-foreground"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                .NET · C# · Angular · SQL Server · Azure  · PWA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;