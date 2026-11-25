type Props = { goal: number; currentPage: number; progress: number };
function ReadingGoalProgress({ goal, currentPage, progress }: Props) {
  const completed = Math.min(currentPage, goal);
  return (
    <div className="progress-panel">
      <div className="progress-heading"><p className="eyebrow">02 / PROGRESS</p><span className="progress-percent">{Math.round(progress)}%</span></div>
      <div className="page-count"><strong>{completed}</strong><span className="count-divider">/</span><span>{goal} pages</span></div>
      <div className="progress-track" role="progressbar" aria-label="Reading progress" aria-valuemin={0} aria-valuemax={goal} aria-valuenow={completed}>
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="progress-meta"><span>PAGES READ</span><span>{Math.max(goal - completed, 0)} TO GO</span></div>
    </div>
  );
}
export default ReadingGoalProgress;
