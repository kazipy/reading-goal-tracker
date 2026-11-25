import { useState } from "react";
import ReadingGoal from "./ReadingGoal";
import useReadingProgress from "./useReadingProgress";

function App() {
  const [currentPage, setCurrentPage] = useReadingProgress();
  const [showReadingGoal, setShowReadingGoal] = useState(true);
  const handleReadPages = () => setCurrentPage((page) => page + 10);
  const handleComplete = () => console.log("Reading goal completed!");

  return (
    <main className="app-shell">
      {showReadingGoal ? (
        <ReadingGoal title="React basics" goal={50} currentPage={currentPage}
          onReadPages={handleReadPages} onDismiss={() => setShowReadingGoal(false)}
          onComplete={handleComplete} />
      ) : (
        <section className="dismissed-state">
          <p className="eyebrow">READING / 2026</p>
          <h1>Your reading space is clear.</h1>
          <button className="text-button" onClick={() => setShowReadingGoal(true)}>
            Restore reading goal ↗
          </button>
        </section>
      )}
    </main>
  );
}
export default App;
