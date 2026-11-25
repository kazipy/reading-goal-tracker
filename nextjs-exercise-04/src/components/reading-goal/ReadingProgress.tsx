"use client";

type ReadingProgressProps = {
  currentPage: number;
  goal: number;
};

export function ReadingProgress({ currentPage, goal }: ReadingProgressProps) {
  const percentage = goal > 0 ? Math.min((currentPage / goal) * 100, 100) : 0;
  const pagesLeft = Math.max(goal - currentPage, 0);

  return (
    <div className="progress-content">
      <div className="progress-heading">
        <p className="eyebrow">02 / PROGRESS</p>
        <span className="progress-percent">{Math.round(percentage)}%</span>
      </div>
      <div className="page-count">
        <strong>{Math.min(currentPage, goal)}</strong>
        <span className="count-divider">/</span>
        <span>{goal} pages</span>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-label="Reading progress"
        aria-valuemin={0}
        aria-valuemax={goal}
        aria-valuenow={Math.min(currentPage, goal)}
      >
        <div className="progress-fill" style={{ width: `${percentage}%` }} />
      </div>
      <div className="progress-meta">
        <span>PAGES READ</span>
        <span>{pagesLeft} TO GO</span>
      </div>
    </div>
  );
}
