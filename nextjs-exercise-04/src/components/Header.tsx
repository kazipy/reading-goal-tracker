import { ColorModeIcon } from "./icons/ColorModeIcon";
import { ColorModeToggle } from "./ColorModeToggle";

const readingItems = ["React Server Components", "Next.js routing", "Hydration"];

export function Header() {
  // This calculation runs while this Server Component is rendered on the server.
  const total = readingItems.length;
  console.log("[Server Component] Header total:", total);

  return (
    <header className="page-header">
      <div>
        <p className="eyebrow">PERSONAL READING TRACKER</p>
        <h1>React basics</h1>
      </div>
      <div className="header-tools">
        <span className="topic-count" aria-label={`Total topics: ${total}`}>
          {String(total).padStart(2, "0")} TOPICS
        </span>
        <ColorModeToggle>
          <ColorModeIcon />
        </ColorModeToggle>
      </div>
    </header>
  );
}
