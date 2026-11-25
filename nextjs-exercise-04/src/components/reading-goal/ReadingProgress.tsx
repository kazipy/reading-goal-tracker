"use client";

type ReadingProgressProps = {
  currentPage: number;
  goal: number;
};

export function ReadingProgress({ currentPage, goal }: ReadingProgressProps) {
  const percentage = goal > 0 ? Math.min((currentPage / goal) * 100, 100) : 0;

  return (
    <div className="mt-5">
      <div className="mb-2 flex justify-between text-sm font-semibold">
        <span>Progress</span>
        <span>{Math.round(percentage)}%</span>
      </div>
      <div
        className="h-3 overflow-hidden rounded-full bg-slate-200"
        role="progressbar"
        aria-label="Reading progress"
        aria-valuemin={0}
        aria-valuemax={goal}
        aria-valuenow={Math.min(currentPage, goal)}
      >
        <div className="h-full rounded-full bg-blue-600" style={{ width: `${percentage}%` }} />
      </div>
      <p className="mt-2 text-sm text-slate-600">{currentPage} / {goal} pages</p>
    </div>
  );
}