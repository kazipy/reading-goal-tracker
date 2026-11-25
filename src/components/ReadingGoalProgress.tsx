type ReadingGoalProgressProps = {
  goal: number;
  currentPage: number;
  progress: number;
};

function ReadingGoalProgress({
  goal,
  currentPage,
  progress,
}: ReadingGoalProgressProps) {
  return (
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
  );
}

export default ReadingGoalProgress;
