import { useMemo } from "react";

export const usePagination = (total_pages) => {
  const pagesArray = useMemo(() => {
    let arr = [];
    for (let i = 0; i < total_pages; i++) {
      arr.push(i + 1);
    }
    return arr;
  }, [total_pages]);

  return pagesArray;
};
