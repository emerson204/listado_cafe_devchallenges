"use client";
import { useEffect, useState } from "react";

export default function getCafes() {
  const url =
    "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const data = await response.json();

      setResult(data);
      setLoading(false);
    })();
  }, [url]);

  return { result, loading };
}
