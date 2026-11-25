import { useState } from "react";
import ReadingGoal from "./ReadingGoal";
import useReadingProgress from "./useReadingProgress";

function App() {
  const [currentPage, setCurrentPage] = useReadingProgress();
  const [showReadingGoal, setShowReadingGoal] = useState(true);

  const handleReadPages = () => {
    setCurrentPage((previousPage) => previousPage + 10);
  };

  const handleDismiss = () => {
    setShowReadingGoal(false);
  };

  const handleComplete = () => {
    console.log("Reading goal completed!");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      {showReadingGoal && (
        <ReadingGoal
          title="React basics"
          goal={50}
          currentPage={currentPage}
          onReadPages={handleReadPages}
          onDismiss={handleDismiss}
          onComplete={handleComplete}
        />
      )}
    </main>
  );
}

export default App;