export const getPagesCount = (total_count, page_limit) => {
  return Math.ceil(total_count / page_limit);
};
