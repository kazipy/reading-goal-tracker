"use client";

type ReadingGoalHeaderProps = {
  title: string;
  onDismiss: () => void;
};

export function ReadingGoalHeader({ title, onDismiss }: ReadingGoalHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <button
        type="button"
        onClick={onDismiss}
        aria-label="Dismiss reading goal"
        className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 hover:bg-slate-200"
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
  );
}