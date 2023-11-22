import React, { useState, useEffect } from 'react';


const useFetch = (apipath, queryTerm="" ) => {
    const [data, setData ] = useState([]);
    const url = `https://api.themoviedb.org/3/${apipath}?api_key=${process.env.REACT_APP_API_KEY }&query=${queryTerm}`;

    useEffect(() => {
        async function fetchMovies (){
          const response = await fetch(url);
          const json = await response.json();
          console.log(json);
          setData(json.results)
        }
        fetchMovies();
      }, [url])

  return {data }
}

export default useFetch