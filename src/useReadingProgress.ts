import { useEffect, useState } from "react";

function useReadingProgress() {
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = localStorage.getItem("currentPage");

    if (savedPage === null) {
      return 0;
    }

    const parsedPage = Number(savedPage);

    return Number.isFinite(parsedPage) && parsedPage >= 0
      ? parsedPage
      : 0;
  });

  useEffect(() => {
    localStorage.setItem("currentPage", String(currentPage));
  }, [currentPage]);

  return [currentPage, setCurrentPage] as const;
}

export default useReadingProgress;