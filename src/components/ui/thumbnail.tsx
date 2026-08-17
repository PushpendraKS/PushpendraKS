const CertificateThumbnail = ({
    name,
    issuer,
    color
}: {
    name: string;
    issuer: string;
    color: string;
    textColor?: string;
    abbr: string;
}) => {
    // Shorten name for display inside the cert thumbnail
    const shortName = name
        .replace("Introduction to ", "Intro · ")
        .replace("Web Development ", "Web Dev ");
    return (
        <svg
            viewBox="0 0 280 180"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            aria-label={`${name} certificate thumbnail`}
        >
            {/* background */}
            <rect
                width="280"
                height="180"
                fill="var(--card)"
                rx="8"
            />
            {/* top color bar */}
            <rect width="280" height="6" fill={color} rx="0" />
            {/* border frame */}
            <rect
                x="10"
                y="14"
                width="260"
                height="158"
                fill="none"
                stroke={color}
                strokeOpacity="0.25"
                strokeWidth="1"
                rx="4"
            />
            <rect
                x="14"
                y="18"
                width="252"
                height="150"
                fill="none"
                stroke={color}
                strokeOpacity="0.12"
                strokeWidth="0.5"
                rx="3"
            />
            {/* decorative corner marks */}
            <line
                x1="14"
                y1="30"
                x2="14"
                y2="18"
                stroke={color}
                strokeOpacity="0.6"
                strokeWidth="1.5"
            />
            <line
                x1="14"
                y1="18"
                x2="26"
                y2="18"
                stroke={color}
                strokeOpacity="0.6"
                strokeWidth="1.5"
            />
            <line
                x1="266"
                y1="30"
                x2="266"
                y2="18"
                stroke={color}
                strokeOpacity="0.6"
                strokeWidth="1.5"
            />
            <line
                x1="266"
                y1="18"
                x2="254"
                y2="18"
                stroke={color}
                strokeOpacity="0.6"
                strokeWidth="1.5"
            />
            <line
                x1="14"
                y1="148"
                x2="14"
                y2="160"
                stroke={color}
                strokeOpacity="0.6"
                strokeWidth="1.5"
            />
            <line
                x1="14"
                y1="160"
                x2="26"
                y2="160"
                stroke={color}
                strokeOpacity="0.6"
                strokeWidth="1.5"
            />
            <line
                x1="266"
                y1="148"
                x2="266"
                y2="160"
                stroke={color}
                strokeOpacity="0.6"
                strokeWidth="1.5"
            />
            <line
                x1="266"
                y1="160"
                x2="254"
                y2="160"
                stroke={color}
                strokeOpacity="0.6"
                strokeWidth="1.5"
            />
            {/* "CERTIFICATE" label */}
            <text
                x="140"
                y="44"
                textAnchor="middle"
                fill={color}
                fillOpacity="0.7"
                fontSize="7"
                fontFamily="'JetBrains Mono', monospace"
                letterSpacing="4"
            >
                CERTIFICATE OF COMPLETION
            </text>
            {/* divider */}
            <line
                x1="60"
                y1="50"
                x2="220"
                y2="50"
                stroke={color}
                strokeOpacity="0.2"
                strokeWidth="0.5"
            />
            {/* medal icon circle */}
            <circle
                cx="140"
                cy="84"
                r="22"
                fill={color}
                fillOpacity="0.12"
            />
            <circle
                cx="140"
                cy="84"
                r="18"
                fill={color}
                fillOpacity="0.18"
            />
            <circle cx="140" cy="84" r="13" fill={color} />
            {/* star shape inside medal */}
            <polygon
                points="140,72 142.5,80 151,80 144.5,85 147,93 140,88 133,93 135.5,85 129,80 137.5,80"
                fill="rgba(255,255,255,0.9)"
            />
            {/* ribbon */}
            <polygon
                points="133,96 137,103 140,100 143,103 147,96"
                fill={color}
                fillOpacity="0.8"
            />
            {/* course name */}
            <text
                x="140"
                y="124"
                textAnchor="middle"
                fill="#dde6f5"
                fontSize="10"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fontWeight="600"
            >
                {shortName.length > 26
                    ? shortName.slice(0, 24) + "…"
                    : shortName}
            </text>
            {/* issuer */}
            <text
                x="140"
                y="140"
                textAnchor="middle"
                fill={color}
                fillOpacity="0.9"
                fontSize="8"
                fontFamily="'JetBrains Mono', monospace"
                letterSpacing="1"
            >
                {issuer.toUpperCase()}
            </text>
            {/* bottom divider */}
            <line
                x1="60"
                y1="150"
                x2="220"
                y2="150"
                stroke={color}
                strokeOpacity="0.2"
                strokeWidth="0.5"
            />
            {/* "Awarded to" */}
            <text
                x="140"
                y="162"
                textAnchor="middle"
                fill="#dde6f5"
                fillOpacity="0.3"
                fontSize="6.5"
                fontFamily="'JetBrains Mono', monospace"
                letterSpacing="1.5"
            >
                AWARDED TO · IJINI MAKALANDA
            </text>
        </svg>
    );
}

export default CertificateThumbnail;