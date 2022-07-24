import { useState } from "react";

export const useFetching = (callback) => {
  const [is_posts_loading, setPostLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async () => {
    try {
      setPostLoading(true);
      await callback();
    } catch (e) {
      setError(e.message);
    } finally {
      setPostLoading(false);
    }
  };

  return [fetching, is_posts_loading, error];
};
