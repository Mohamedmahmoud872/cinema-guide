import { useFetch, useUpdateTitle } from '../hooks/index.js';
import { MovieCard } from '../components'

export const MovieList = ({apiPath, title}) => {

  useUpdateTitle(title);

  const {data: movies} = useFetch(apiPath);

  return (
    <main>
      <section className='py-7'>
        <div className='flex justify-center flex-wrap other:justify-evenly'>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}
