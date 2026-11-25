import { ColorModeIcon } from "./icons/ColorModeIcon";
import { ColorModeToggle } from "./ColorModeToggle";

const readingItems = ["React Server Components", "Next.js routing", "Hydration"];

export function Header() {
  // This calculation runs while this Server Component is rendered on the server.
  const total = readingItems.length;
  console.log("[Server Component] Header total:", total);

  return (
    <header className="site-header">
      <div>
        <h1>My Next.js App</h1>
        <p className="intro">Exercise 04: Server and Client Components</p>
      </div>
      <span className="total-pill" aria-label={`Total topics: ${total}`}>
        {total} topics
      </span>
      <ColorModeToggle>
        <ColorModeIcon />
      </ColorModeToggle>
    </header>
  );
}