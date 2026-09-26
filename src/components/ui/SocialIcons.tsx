import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 22v-8.2h2.75l.41-3.2h-3.16V8.55c0-.93.26-1.56 1.59-1.56h1.7V4.14C15.98 4.1 15.02 4 13.9 4c-2.34 0-3.94 1.43-3.94 4.05v2.55H7.2v3.2h2.76V22h3.54Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.1" cy="6.9" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H4V20h2.94V8.5ZM5.47 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20 13.36c0-3.03-1.62-4.44-3.78-4.44-1.74 0-2.52.96-2.95 1.63V8.5H10.3c.04.85 0 11.5 0 11.5h2.97v-6.42c0-.34.02-.69.13-.94.27-.68.9-1.38 1.94-1.38 1.37 0 1.92 1.04 1.92 2.57V20H20v-6.64Z" />
    </svg>
  );
}

export function YouTubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 7.7a2.7 2.7 0 0 0-1.9-1.92C18.06 5.3 12 5.3 12 5.3s-6.06 0-7.7.48A2.7 2.7 0 0 0 2.4 7.7 28.3 28.3 0 0 0 1.92 12a28.3 28.3 0 0 0 .48 4.3 2.7 2.7 0 0 0 1.9 1.92c1.64.48 7.7.48 7.7.48s6.06 0 7.7-.48a2.7 2.7 0 0 0 1.9-1.92c.32-1.41.48-2.86.48-4.3a28.3 28.3 0 0 0-.48-4.3ZM9.98 15.02V8.98L15.6 12l-5.62 3.02Z" />
    </svg>
  );
}
