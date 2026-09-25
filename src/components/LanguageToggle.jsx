import { useLanguage } from '../i18n/LanguageContext'

/**
 * LanguageToggle — circular button with half-Brazil / half-USA flags.
 * Clicking toggles the portfolio language between PT-BR and EN.
 *
 * The flags are drawn entirely with inline SVG so there are no external
 * asset dependencies.  The active language's flag half is shown at full
 * opacity while the other half is slightly dimmed, giving a clear visual
 * cue of which language is currently selected.
 */
export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage()

  return (
    <button
      onClick={toggleLang}
      aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
      title={lang === 'pt' ? 'English' : 'Português'}
      className="lang-toggle-btn"
    >
      <svg
        viewBox="0 0 40 40"
        width="40"
        height="40"
        style={{ display: 'block' }}
      >
        <defs>
          <clipPath id="circle-clip">
            <circle cx="20" cy="20" r="18" />
          </clipPath>
          {/* Left half */}
          <clipPath id="left-half">
            <rect x="0" y="0" width="20" height="40" />
          </clipPath>
          {/* Right half */}
          <clipPath id="right-half">
            <rect x="20" y="0" width="20" height="40" />
          </clipPath>
        </defs>

        {/* ── Brazil flag (left half) ── */}
        <g
          clipPath="url(#circle-clip)"
          opacity={lang === 'pt' ? 1 : 0.55}
          style={{ transition: 'opacity 0.3s' }}
        >
          <g clipPath="url(#left-half)">
            {/* Green background */}
            <rect x="0" y="0" width="40" height="40" fill="#009c3b" />
            {/* Yellow diamond */}
            <polygon points="20,4 37,20 20,36 3,20" fill="#ffdf00" />
            {/* Blue circle */}
            <circle cx="20" cy="20" r="8" fill="#002776" />
            {/* White band */}
            <path
              d="M12,19.5 Q20,16.5 28,19.5 Q20,22 12,19.5Z"
              fill="#ffffff"
              stroke="none"
            />
          </g>
        </g>

        {/* ── USA flag (right half) ── */}
        <g
          clipPath="url(#circle-clip)"
          opacity={lang === 'en' ? 1 : 0.55}
          style={{ transition: 'opacity 0.3s' }}
        >
          <g clipPath="url(#right-half)">
            {/* Red / white stripes */}
            {[...Array(13)].map((_, i) => (
              <rect
                key={i}
                x="0"
                y={i * (40 / 13)}
                width="40"
                height={40 / 13}
                fill={i % 2 === 0 ? '#b22234' : '#ffffff'}
              />
            ))}
            {/* Blue canton */}
            <rect x="0" y="0" width="18" height="18" fill="#3c3b6e" />
            {/* Stars (simplified) — 3 × 3 grid */}
            {[0, 1, 2].map((row) =>
              [0, 1, 2].map((col) => (
                <circle
                  key={`star-${row}-${col}`}
                  cx={4 + col * 5}
                  cy={4 + row * 5}
                  r="1.1"
                  fill="#ffffff"
                />
              ))
            )}
          </g>
        </g>

        {/* Divider line */}
        <line
          x1="20"
          y1="2"
          x2="20"
          y2="38"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="0.8"
        />

        {/* Outer ring */}
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="none"
          stroke="rgba(148,163,184,0.3)"
          strokeWidth="1.5"
        />
      </svg>
    </button>
  )
}
