import Link from "next/link"
import Image from "next/image"

export default function Movie({ title, id, poster_path, release_date }) {
    const imagePath = "https://image.tmdb.org/t/p/original"
    return (
        <div className="flex flex-col items-center justify-center bg-[#161616] rounded-lg shadow-md overflow-hidden">
            <Link href={`/${id}`}>
                <Image src={imagePath + poster_path}
                    width={400}
                    height={600}
                    alt={title} 
                    className="object-cover w-full h-full"
                    />
            </Link>
            <h1 className="text-justify"> {title}</h1>
            <h2> {release_date} </h2>
        </div>
    )
}
