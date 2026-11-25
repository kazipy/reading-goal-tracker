"use client";

type ReadingGoalActionProps = {
  onReadPages: () => void;
};

export function ReadingGoalAction({ onReadPages }: ReadingGoalActionProps) {
  return (
    <button type="button" className="read-button" onClick={onReadPages}>
      Read 10 pages <span aria-hidden="true">↗</span>
    </button>
  );
}
