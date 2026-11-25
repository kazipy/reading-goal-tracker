"use client";

import { useState, type ReactNode } from "react";

type ColorModeToggleProps = {
  children: ReactNode;
};

export function ColorModeToggle({ children }: ColorModeToggleProps) {
  const [dark, setDark] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="toggle-button"
        aria-pressed={dark}
        onClick={() => setDark((current) => !current)}
      >
        {children}
        {dark ? "Dark mode on" : "Light mode on"}
      </button>
      <p className="mode-note" aria-live="polite">
        Current example state: {dark ? "dark" : "light"}
      </p>
    </div>
  );
}