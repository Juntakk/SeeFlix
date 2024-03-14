import { useState, useEffect } from "react";

export const useFetch = (apiPath, inputValue = "") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=b02268d482af6c2594498f0c882760fc&query=${inputValue}`;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);

  return { data };
};
