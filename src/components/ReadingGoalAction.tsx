import type { RefObject } from "react";

type ReadingGoalActionProps = {
  onReadPages: () => void;
  buttonRef: RefObject<HTMLButtonElement | null>;
};

function ReadingGoalAction({ onReadPages, buttonRef }: ReadingGoalActionProps) {
  return (
    <button
      ref={buttonRef}
      type="button"
      className="w-full rounded-lg bg-blue-600 px-5 py-3 text-base font-bold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
      onClick={onReadPages}
    >
      Read 10 pages
    </button>
  );
}

export default ReadingGoalAction;
