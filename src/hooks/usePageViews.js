import useSWR from "swr";

export default function usePageViews(slug) {
  const { data, error } = useSWR(
    process.env.NODE_ENV !== "development" ? `views-${slug}` : null,
    async () => {
      const res = await fetch(
        `/api/views/${slug}`,
        {
          method: "GET",
        },
        { refreshInterval: 5000 }
      );
      return await res.json();
    }
  );

  return { data, error };
}
