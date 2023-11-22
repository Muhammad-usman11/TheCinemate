import React from 'react'
import Card from '../components/Card'
import useFetch from '../hooks/useFetch'
import useTitle from '../hooks/useTitle';

const MovieList = ({apipath, title }) => {

 const {data: movies } = useFetch(apipath);

 const pageTitle = useTitle(`${title} `); 


  return (
    <main>
      <section className=' max-w-7xl mx-auto py-7 '>
        <div className=' flex justify-start other:justify-evenly flex-wrap '>
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ) ) }
          
          

        </div>
      </section>
    </main>
  )
}

export default MovieList