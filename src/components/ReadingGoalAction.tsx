import type { RefObject } from "react";
type Props = { onReadPages: () => void; buttonRef: RefObject<HTMLButtonElement | null> };
function ReadingGoalAction({ onReadPages, buttonRef }: Props) {
  return (
    <div className="action-row">
      <div><p className="eyebrow">03 / NEXT STEP</p><p className="action-caption">Ready for another chapter?</p></div>
      <button ref={buttonRef} type="button" className="read-button" onClick={onReadPages}>Read 10 pages <span aria-hidden="true">↗</span></button>
    </div>
  );
}
export default ReadingGoalAction;
