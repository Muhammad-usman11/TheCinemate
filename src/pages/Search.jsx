import React from 'react'
import Card from '../components/Card'
import useFetch from '../hooks/useFetch'
import { useSearchParams } from 'react-router-dom'
import useTitle from '../hooks/useTitle'

const Search = ({apipath}) => {
  const [searchParam] = useSearchParams();
  const queryTerm = searchParam.get("q");

  const {data: movies } = useFetch(apipath, queryTerm );

  const pageTitle = useTitle(`Result for ${queryTerm} `);
  return (
    <main>
      <section className=' py-7'>
        <p className=' text-3xl text-gray-700 dark:text-white '>
          {movies.length === 0 ? `No Result For "${queryTerm}" ` : `Result For "${queryTerm}" ` }
        </p>
      </section>
      <section className=' max-w-7xl mx-auto py-7 '>
        <div className=' flex justify-start flex-wrap '>
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ) ) }
          
          

        </div>
      </section>
    </main>
  )
}

export default Search