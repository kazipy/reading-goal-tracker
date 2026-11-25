"use client";

import { useState } from "react";
import { ReadingGoalHeader } from "./ReadingGoalHeader";
import { ReadingProgress } from "./ReadingProgress";
import { ReadingGoalAction } from "./ReadingGoalAction";

export function ReadingGoalExample() {
  const [currentPage, setCurrentPage] = useState(30);
  const [visible, setVisible] = useState(true);
  const goal = 50;

  if (!visible) return null;

  return (
    <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <ReadingGoalHeader title="Reading Goal" onDismiss={() => setVisible(false)} />
      <p className="mt-2 text-sm text-slate-600">A decomposed example based on the Reading Goal Tracker.</p>
      <ReadingProgress currentPage={currentPage} goal={goal} />
      <ReadingGoalAction onReadPages={() => setCurrentPage((page) => Math.min(page + 10, goal))} />
    </section>
  );
}