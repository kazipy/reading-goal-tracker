import { useEffect, useRef } from "react";

type ReadingGoalProps = {
  title: string;
  goal: number;
  currentPage: number;
  onReadPages: () => void;
  onDismiss: () => void;
  onComplete: () => void;
};

function ReadingGoal({
  title,
  goal,
  currentPage,
  onReadPages,
  onDismiss,
  onComplete,
}: ReadingGoalProps) {
  const progress = Math.min((currentPage / goal) * 100, 100);
  const readButtonRef = useRef<HTMLButtonElement>(null);
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    readButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (currentPage >= goal && !hasCompletedRef.current) {
      hasCompletedRef.current = true;
      onComplete();
    }

    if (currentPage < goal) {
      hasCompletedRef.current = false;
    }
  }, [currentPage, goal, onComplete]);

  return (
    <div className="reading-card">
      <button
        className="dismiss-button"
        onClick={onDismiss}
        aria-label="Dismiss reading goal"
      >
        ×
      </button>

      <div className="book-icon">📚</div>
      <p className="label">READING GOAL</p>
      <h1>{title}</h1>

      <p className="description">
        Keep track of your reading progress.
      </p>

      <div className="progress-section">
        <div className="progress-info">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>

        <progress value={progress} max={100} />

        <p className="pages">
          <strong>{currentPage}</strong> / {goal} pages
        </p>
      </div>

      <button
        ref={readButtonRef}
        className="read-button"
        onClick={onReadPages}
      >
        Read 10 pages
      </button>
    </div>
  );
}

export default ReadingGoal;