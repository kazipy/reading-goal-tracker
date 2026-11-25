import { useEffect, useRef } from "react";
import ReadingGoalHeader from "./components/ReadingGoalHeader";
import ReadingGoalProgress from "./components/ReadingGoalProgress";
import ReadingGoalAction from "./components/ReadingGoalAction";

type ReadingGoalProps = {
  title: string; goal: number; currentPage: number;
  onReadPages: () => void; onDismiss: () => void; onComplete: () => void;
};

function ReadingGoal({ title, goal, currentPage, onReadPages, onDismiss, onComplete }: ReadingGoalProps) {
  const progress = goal > 0 ? Math.min((currentPage / goal) * 100, 100) : 0;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const hasCompleted = useRef(false);

  useEffect(() => { buttonRef.current?.focus(); }, []);
  useEffect(() => {
    if (currentPage >= goal && goal > 0 && !hasCompleted.current) {
      hasCompleted.current = true;
      onComplete();
    }
    if (currentPage < goal) hasCompleted.current = false;
  }, [currentPage, goal, onComplete]);

  return (
    <section className="reading-page" aria-labelledby="reading-goal-title">
      <ReadingGoalHeader title={title} onDismiss={onDismiss} />
      <div className="section-rule" />
      <div className="reading-grid">
        <div className="reading-copy">
          <p className="eyebrow">01 / YOUR READING GOAL</p>
          <h2>Make time<br />for good ideas.</h2>
          <p className="intro-copy">A little progress every day adds up. Keep track of your reading and work towards your personal target.</p>
        </div>
        <ReadingGoalProgress goal={goal} currentPage={currentPage} progress={progress} />
      </div>
      <div className="bottom-rule" />
      <ReadingGoalAction onReadPages={onReadPages} buttonRef={buttonRef} />
      <footer className="page-footer"><span>READING TRACKER</span><span>ONE PAGE AT A TIME</span></footer>
    </section>
  );
}
export default ReadingGoal;
