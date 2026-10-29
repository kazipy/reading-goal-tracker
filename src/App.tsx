import { useState } from "react";
import "./App.css";
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
    <div>
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
    </div>
  );
}

export default App;