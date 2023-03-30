import Image from "next/image"

export async function generateStaticParams() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
    const res = await data.json()
    return res.results.map((movie) => ({
        movie: toString(movie.id),
    }))
}

//generate dynamic metadata
export async function generateMetadata({ params, searchParams }) {
    const { movie } = params
    const imagePath = "https://image.tmdb.org/t/p/original"
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
    const res = await data.json()

    return {
        title: `  ${res.title} | GenMovies`,
        description: `${res.overview}`,
    };
}

export default async function MovieDetail({ params }) {

    const { movie } = params
    const imagePath = "https://image.tmdb.org/t/p/original"
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)

    const res = await data.json()
    console.log(res)
    return (
        <div>
            <div>
                <h2 className="text-2xl">{res.title}</h2>
                <h2>{res.release_date}</h2>
                <h2> Runtime: {res.runtime} minutes</h2>
                <h2 className="text-sm text-white bg-green-600 inline-block my-2 py-2 px-4 rounded"> {res.status} </h2>
                <Image className="my-12 w-original" src={imagePath + res.backdrop_path}
                    width={1000}
                    height={1000}
                    alt={res.title}
                    priority
                />
                <p className=""> {res.overview}</p>
            </div>
        </div>
    )
}