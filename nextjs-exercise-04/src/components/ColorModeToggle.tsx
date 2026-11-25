"use client";

import { useEffect, useState, type ReactNode } from "react";

type ColorModeToggleProps = {
  children: ReactNode;
};

export function ColorModeToggle({ children }: ColorModeToggleProps) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Apply the selected theme to the whole document, not only this button.
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <div>
      <button
        type="button"
        className="toggle-button"
        aria-pressed={dark}
        onClick={() => setDark((current) => !current)}
      >
        {children}
        {dark ? "Switch to light mode" : "Switch to dark mode"}
      </button>
      <p className="mode-note" aria-live="polite">
        Current theme: {dark ? "dark" : "light"}
      </p>
    </div>
  );
}
