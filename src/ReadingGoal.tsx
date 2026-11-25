import { useEffect, useRef } from "react";
import ReadingGoalHeader from "./components/ReadingGoalHeader";
import ReadingGoalProgress from "./components/ReadingGoalProgress";
import ReadingGoalAction from "./components/ReadingGoalAction";

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
      <ReadingGoalHeader title={title} onDismiss={onDismiss} />

      <ReadingGoalProgress
        goal={goal}
        currentPage={currentPage}
        progress={progress}
      />

      <ReadingGoalAction
        onReadPages={onReadPages}
        buttonRef={readButtonRef}
      />
    </section>
  );
}

export default ReadingGoal;
