import { Header } from "@/components/Header";
import { ReadingGoalExample } from "@/components/reading-goal/ReadingGoalExample";

export default function Home() {
  return (
    <main className="app-shell">
      <div className="reading-page">
        <Header />
        <ReadingGoalExample />
      </div>
    </main>
  );
}
