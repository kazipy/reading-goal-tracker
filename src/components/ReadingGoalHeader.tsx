type ReadingGoalHeaderProps = {
  title: string;
  onDismiss: () => void;
};

function ReadingGoalHeader({ title, onDismiss }: ReadingGoalHeaderProps) {
  return (
    <>
      <button
        type="button"
        className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        onClick={onDismiss}
        aria-label="Dismiss reading goal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      <div className="mb-3 text-5xl" aria-hidden="true">📚</div>
      <p className="mb-2 text-xs font-bold tracking-[0.2em] text-slate-500">
        READING GOAL
      </p>
      <h1 id="reading-goal-title" className="mb-3 text-3xl font-bold text-slate-900">
        {title}
      </h1>
      <p className="mb-8 text-sm leading-6 text-slate-600">
        Keep track of your reading progress.
      </p>
    </>
  );
}

export default ReadingGoalHeader;
