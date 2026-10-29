
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReadingGoal from "./ReadingGoal";

describe("ReadingGoal", () => {
  // Test 1: Check that the title is rendered
  it("renders the title React basics", () => {
    render(
      <ReadingGoal
        title="React basics"
        goal={50}
        currentPage={0}
        onReadPages={() => {}}
        onDismiss={() => {}}
        onComplete={() => {}}
      />
    );

    expect(
      screen.getByRole("heading", { name: "React basics" })
    ).toBeInTheDocument();
  });

  // Test 2: Check that clicking once shows 10 / 50 pages
  it("shows 10 / 50 pages after one click", async () => {
    const user = userEvent.setup();

    function TestApp() {
      const [currentPage, setCurrentPage] = React.useState(0);

      return (
        <ReadingGoal
          title="React basics"
          goal={50}
          currentPage={currentPage}
          onReadPages={() => setCurrentPage((page) => page + 10)}
          onDismiss={() => {}}
          onComplete={() => {}}
        />
      );
    }

    render(<TestApp />);

    await user.click(
      screen.getByRole("button", { name: "Read 10 pages" })
    );

    const pagesText = screen.getByText((_, element) => {
      return (
        element?.classList.contains("pages") === true &&
        element.textContent?.replace(/\s+/g, " ").trim() ===
          "10 / 50 pages"
      );
    });

    expect(pagesText).toBeInTheDocument();
  });

  // Test 3: Check that onComplete is called when the goal is achieved
  it("calls onComplete when the reading goal is achieved", async () => {
    const user = userEvent.setup();
    const onComplete = vi.fn();

    function TestApp() {
      const [currentPage, setCurrentPage] = React.useState(0);

      return (
        <ReadingGoal
          title="React basics"
          goal={50}
          currentPage={currentPage}
          onReadPages={() => setCurrentPage((page) => page + 10)}
          onDismiss={() => {}}
          onComplete={onComplete}
        />
      );
    }

    render(<TestApp />);

    const button = screen.getByRole("button", {
      name: "Read 10 pages",
    });

    // Click five times to reach 50 pages
    for (let i = 0; i < 5; i++) {
      await user.click(button);
    }

    // Check that onComplete was called exactly once
    expect(onComplete).toHaveBeenCalledTimes(1);
  });
});
