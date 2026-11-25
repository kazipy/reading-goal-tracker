import { useEffect, useRef } from "react";

type ReadingGoalProps = {
  title: string; goal: number; currentPage: number;
  onReadPages: () => void; onDismiss: () => void; onComplete: () => void;
};

function ReadingGoal({ title, goal, currentPage, onReadPages, onDismiss, onComplete }: ReadingGoalProps) {
  const progress = goal > 0 ? Math.min((currentPage / goal) * 100, 100) : 0;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const hasCompleted = useRef(false);

  useEffect(() => { buttonRef.current?.focus(); }, []);
  useEffect(() => {
    if (currentPage >= goal && goal > 0 && !hasCompleted.current) {
      hasCompleted.current = true;
      onComplete();
    }
    if (currentPage < goal) hasCompleted.current = false;
  }, [currentPage, goal, onComplete]);

  return (
    <section className="reading-page" aria-labelledby="reading-goal-title">
      <header className="page-header">
        <div><p className="eyebrow">PERSONAL READING TRACKER</p><h1 id="reading-goal-title">{title}</h1></div>
        <button type="button" className="close-button" onClick={onDismiss} aria-label="Dismiss reading goal" title="Dismiss reading goal">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div className="section-rule" />
      <div className="reading-grid">
        <div className="reading-copy">
          <p className="eyebrow">01 / YOUR READING GOAL</p>
          <h2>Make time<br />for good ideas.</h2>
          <p className="intro-copy">A little progress every day adds up. Keep track of your reading and work towards your personal target.</p>
        </div>
        <div className="progress-panel">
          <div className="progress-heading"><p className="eyebrow">02 / PROGRESS</p><span className="progress-percent">{Math.round(progress)}%</span></div>
          <div className="page-count"><strong>{Math.min(currentPage, goal)}</strong><span className="count-divider">/</span><span>{goal} pages</span></div>
          <div className="progress-track" role="progressbar" aria-label="Reading progress" aria-valuemin={0} aria-valuemax={goal} aria-valuenow={Math.min(currentPage, goal)}>
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="progress-meta"><span>PAGES READ</span><span>{Math.max(goal - currentPage, 0)} TO GO</span></div>
        </div>
      </div>
      <div className="bottom-rule" />
      <div className="action-row">
        <div><p className="eyebrow">03 / NEXT STEP</p><p className="action-caption">Ready for another chapter?</p></div>
        <button ref={buttonRef} type="button" className="read-button" onClick={onReadPages}>Read 10 pages <span aria-hidden="true">↗</span></button>
      </div>
      <footer className="page-footer"><span>READING TRACKER</span><span>ONE PAGE AT A TIME</span></footer>
    </section>
  );
}
export default ReadingGoal;
