import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  const sorted_posts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);

  return sorted_posts;
};

export const usePosts = (posts, sort, query) => {
  const sorted_posts = useSortedPosts(posts, sort);
  const sorted_and_searched_posts = useMemo(() => {
    return sorted_posts.filter((post) =>
      post.title.toUpperCase().includes(query.toUpperCase())
    );
  }, [query, sorted_posts]);

  return sorted_and_searched_posts;
};
