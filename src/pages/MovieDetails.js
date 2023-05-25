import { useFetch, useUpdateTitle } from '../hooks/index.js';
import Backup from '../assets/images/backup.png';

export const MovieDetails = () => {
  
  const parts = window.location.href.split("/");
  const movie_id = parts[parts.length - 1];

  const { data: movie_details } = useFetch(`movie/${movie_id}`);

  const {original_title, genres, overview, vote_average, vote_count, release_date, revenue, runtime, budget, poster_path, imdb_id} = movie_details;

  const twoDicemal = Math.round((vote_average + Number.EPSILON) * 100) / 100;
  
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : Backup;

  const imdbLink = `https://www.imdb.com/title/${imdb_id}`;

  useUpdateTitle(original_title);

  return (
    <main>
      <section className='flex flex-wrap justify-evenly py-5'>
        <div className='max-w-sm mr-8'>
          <img className='rounded-md' src={image} alt="" />
        </div>
        <div className='text-gray-700 text-lg max-w-2xl dark:text-white'>
          <h1 className='text-4xl font-bold my-3 text-center lg:text-left'>{original_title}</h1>
          <p className='my-4'>{overview}</p>
          { genres ? (
            <p className='my-8 flex flex-wrap gap-2'>
            {genres.map((genre) => (
              <span key={genre.id} className="bg-gray-100 text-gray-800 text-lg font-medium mr-2 p-2 rounded dark:bg-gray-800 dark:text-white border border-gray-300">{genre.name}</span>
            ))}
          </p>
          ) : "" }
          
          <div className="flex items-center">
              <svg aria-hidden="true" className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <p className="ml-2 font-bold text-gray-900 dark:text-white">{twoDicemal.toString()}</p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <span className=" text-gray-900 underline hover:no-underline dark:text-white">{vote_count}</span>
          </div>

          <p className='my-4'>
            <span className='mr-2 font-bold'>Runtime:</span>
            <span>{runtime}</span>
          </p>

          <p className='my-4'>
            <span className='mr-2 font-bold'>Release Date:</span>
            <span>{release_date}</span>
          </p>

          <p className='my-4'>
            <span className='mr-2 font-bold'>Budget:</span>
            <span>{budget}</span>
          </p>

          <p className='my-4'>
            <span className='mr-2 font-bold'>Revenue:</span>
            <span>{revenue}</span>
          </p>

          <p className='my-4'>
            <span className='mr-2 font-bold'>More Info And Trailer</span>
            <span className='underline dark:text-gray-500'><a href={imdbLink} target='_blank' rel='noreferrer'>Visit IMDB</a></span>
          </p>

        </div>
      </section>
    </main>
  )
}
