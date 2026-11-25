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
  const progress = goal > 0 ? Math.min((currentPage / goal) * 100, 100) : 0;
  const readButtonRef = useRef<HTMLButtonElement>(null);
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    readButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (currentPage >= goal && goal > 0 && !hasCompletedRef.current) {
      hasCompletedRef.current = true;
      onComplete();
    }

    if (currentPage < goal) {
      hasCompletedRef.current = false;
    }
  }, [currentPage, goal, onComplete]);

  return (
    <section
      aria-labelledby="reading-goal-title"
      className="relative w-full max-w-[400px] rounded-2xl border-2 border-slate-200 bg-white p-8 text-center shadow-lg sm:p-10"
    >
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

      <div className="mb-7 text-left">
        <div className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-700">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>

        <div
          className="h-3 w-full overflow-hidden rounded-full bg-slate-200"
          role="progressbar"
          aria-label="Reading progress"
          aria-valuemin={0}
          aria-valuemax={goal}
          aria-valuenow={Math.min(currentPage, goal)}
        >
          <div
            className="h-full rounded-full bg-blue-600 transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="pages mt-3 text-center text-sm text-slate-600">
          <strong className="text-xl text-slate-900">{currentPage}</strong> / {goal} pages
        </p>
      </div>

      <button
        ref={readButtonRef}
        type="button"
        className="w-full rounded-lg bg-blue-600 px-5 py-3 text-base font-bold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
        onClick={onReadPages}
      >
        Read 10 pages
      </button>
    </section>
  );
}

export default ReadingGoal;