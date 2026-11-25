"use client";

import { useState } from "react";
import { ReadingGoalHeader } from "./ReadingGoalHeader";
import { ReadingProgress } from "./ReadingProgress";
import { ReadingGoalAction } from "./ReadingGoalAction";

export function ReadingGoalExample() {
  const [currentPage, setCurrentPage] = useState(30);
  const [visible, setVisible] = useState(true);
  const goal = 50;

  if (!visible) {
    return (
      <section className="dismissed-state">
        <p className="eyebrow">READING / 2026</p>
        <h2>Your reading space is clear.</h2>
        <button className="text-button" type="button" onClick={() => setVisible(true)}>
          Restore reading goal ↗
        </button>
      </section>
    );
  }

  return (
    <section className="goal-content" aria-labelledby="reading-goal-title">
      <ReadingGoalHeader title="Your reading goal" onDismiss={() => setVisible(false)} />
      <div className="section-rule" />
      <div className="reading-grid">
        <div className="reading-copy">
          <p className="eyebrow">01 / YOUR READING GOAL</p>
          <h2>Make time<br />for good ideas.</h2>
          <p className="intro-copy">
            A little progress every day adds up. Keep track of your reading and work towards your personal target.
          </p>
        </div>
        <div className="progress-panel">
          <ReadingProgress currentPage={currentPage} goal={goal} />
        </div>
      </div>
      <div className="bottom-rule" />
      <div className="action-row">
        <div>
          <p className="eyebrow">03 / NEXT STEP</p>
          <p className="action-caption">Ready for another chapter?</p>
        </div>
        <ReadingGoalAction onReadPages={() => setCurrentPage((page) => Math.min(page + 10, goal))} />
      </div>
      <footer className="page-footer">
        <span>READING TRACKER</span>
        <span>ONE PAGE AT A TIME</span>
      </footer>
    </section>
  );
}
