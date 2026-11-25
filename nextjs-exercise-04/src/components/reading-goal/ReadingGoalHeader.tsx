"use client";

type ReadingGoalHeaderProps = {
  title: string;
  onDismiss: () => void;
};

export function ReadingGoalHeader({ title, onDismiss }: ReadingGoalHeaderProps) {
  return (
    <div className="goal-header">
      <h2 id="reading-goal-title" className="eyebrow">{title}</h2>
      <button
        type="button"
        onClick={onDismiss}
        aria-label="Dismiss reading goal"
        title="Dismiss reading goal"
        className="close-button"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>
  );
}
