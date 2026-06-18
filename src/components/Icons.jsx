/**
 * Custom SVG icons for social platforms not available in lucide-react.
 */

export function GithubIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export function LinkedinIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function WhatsappIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2A10 10 0 0 0 2 12c0 1.9.5 3.65 1.4 5.2L2 22l5-1.3C8.5 21.5 10.2 22 12 22a10 10 0 0 0 10-10A10 10 0 0 0 12 2z" />
      <path d="M16 12.5c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.4.1-.1.2-.5.7-.6.8-.1.1-.2.1-.5 0a6.3 6.3 0 0 1-2.3-1.4 7 7 0 0 1-1.6-2c-.1-.3 0-.4.1-.6l.4-.5c.1-.1.1-.2.2-.3s0-.3-.1-.4l-.9-2.1c-.2-.5-.4-.4-.6-.4H8.3c-.2 0-.5.1-.7.3A3.7 3.7 0 0 0 6.5 8c0 1.8.8 3.5 2.1 4.8A9 9 0 0 0 14.5 16c1.1 0 2.1-.4 2.8-1.1.3-.3.4-.6.4-.8v-.8c-.1-.1-.3-.2-.5-.3z" />
    </svg>
  )
}
