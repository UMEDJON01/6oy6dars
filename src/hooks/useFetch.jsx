import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error("Something went wrong?");
        }
        const jsonData = await req.json();
        setData(jsonData);
        setError(null);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsPending(false);
      }
    };
    getData();
  }, [url]);

  return { data, isPending, error };
}

export { useFetch };
