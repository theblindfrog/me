"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const iconClass = "h-5 w-5";

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} viewBox="0 0 512 512">
    <circle
      cx="256"
      cy="256"
      r="80"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
    />
    <path
      d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
    />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} viewBox="0 0 512 512">
    <path
      d="M160 136c0-30.62 4.51-61.61 16-87C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 199-128-25.39 11.49-56.38 16-87 16-119.29 0-216-96.71-216-216z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
  </svg>
);

const SystemIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} viewBox="0 0 512 512">
    <rect
      x="32"
      y="64"
      width="448"
      height="320"
      rx="32"
      ry="32"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="32"
    />
    <path
      d="M304 448l-8-64h-80l-8 64M368 448H144"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
    />
  </svg>
);

const ORDER = ["light", "dark", "system"] as const;
type Mode = (typeof ORDER)[number];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const buttonClass =
    "flex items-center justify-center h-9 w-9 text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors";

  // Render a fixed-size placeholder until mounted to avoid hydration mismatch / layout shift.
  if (!mounted) {
    return <span className={buttonClass} aria-hidden="true" />;
  }

  const current = (ORDER.includes(theme as Mode) ? theme : "system") as Mode;
  const next = ORDER[(ORDER.indexOf(current) + 1) % ORDER.length];

  const icon =
    current === "light" ? <SunIcon /> : current === "dark" ? <MoonIcon /> : <SystemIcon />;

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      className={buttonClass}
      aria-label={`Theme: ${current}. Switch to ${next} mode.`}
      title={`Theme: ${current}`}
    >
      {icon}
    </button>
  );
}
