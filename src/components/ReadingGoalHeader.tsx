type Props = { title: string; onDismiss: () => void };
function ReadingGoalHeader({ title, onDismiss }: Props) {
  return (
    <header className="page-header">
      <div><p className="eyebrow">PERSONAL READING TRACKER</p><h1 id="reading-goal-title">{title}</h1></div>
      <button type="button" className="close-button" onClick={onDismiss} aria-label="Dismiss reading goal" title="Dismiss reading goal">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
      </button>
    </header>
  );
}
export default ReadingGoalHeader;
