import { useState, useEffect } from 'react'

export const useFetch = (apiPath, query="") => {

    const [data, setData] = useState([]);

    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`

    useEffect(() => {
        async function fetchMovies() {
          const response = await fetch(url);
          
          const json = await response.json();
          json.results ? setData(json.results) : setData(json);
        }
        fetchMovies();
      }, [url])

      console.log(data);

  return { data };
}
