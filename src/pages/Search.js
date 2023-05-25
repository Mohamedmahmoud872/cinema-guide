import { useSearchParams } from 'react-router-dom';
import { useFetch, useUpdateTitle } from '../hooks/index.js';
import { MovieCard } from '../components'

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const {data: movies} = useFetch(apiPath, query);

  useUpdateTitle(query);

  return (
    <main>
      <section className='mt-3'>
        <p className='text-3xl dark:text-white text-gray-700'>{ movies.length === 0 ? `No results found for ${query}` : `Result for ${query}` }</p>
      </section>
      <section className='py-7'>
        <div className='flex justify-start flex-wrap'>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}
