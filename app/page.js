import Image from 'next/image'
import Movie from './Movies'

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  return (
    <main>
      <h1 className='font-bold text-center text-3xl text-white'>
        2023 Popular Movies
      </h1>
      <h2 className=' text-white font-bold'>
        WATCH MOVIES ONLINE
      </h2>
      <p className=' text-[#6d6d6d] pt-2 pb-3'>
        Watching movies online has been popular since the beginning of the internet. There have been many websites that allow users to watch movies online for free – 
        GenMovies became the most popular one a few years ago. However, GenMovies shutdown a few years ago and an official replacement was not launched. 
        Thousands of clones of GenMovies have been launched over the years that allow internet users to continue watching movies online for free.
      </p>
      <div className='grid gap-6 grid-cols-fluid text-white'>
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>

    </main>
  )
}
