"use client";

type ReadingGoalActionProps = {
  onReadPages: () => void;
};

export function ReadingGoalAction({ onReadPages }: ReadingGoalActionProps) {
  return (
    <button
      type="button"
      onClick={onReadPages}
      className="mt-5 w-full rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700"
    >
      Read 10 pages
    </button>
  );
}