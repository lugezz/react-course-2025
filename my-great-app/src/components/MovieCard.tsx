import { useEffect, useState } from 'react';

interface Movie {
    title: string;
    vote_average: number;
    poster_path: string | null;
    release_date: string | null;
    original_language: string;
    id: number;
}


type MovieCardProps = {
    movie: Movie;
    setisMovieID: (id: number) => void;
};

const MovieCard: React.FC<MovieCardProps> = ({
    movie: {
        title,
        vote_average,
        poster_path,
        release_date,
        original_language,
        id
    },
    setisMovieID,
}) => {
    const [liked, setLiked] = useState<boolean>(false);

    useEffect(() => {
        console.log(`Movie ${title} with ID ${id} is ${liked ? 'liked' : 'not liked'}`);
    }, [liked]);

    return (
        <div className='movie-card'>
            <img
                src={poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : './no-movie.png'}
                alt={title}
                onClick={() => setisMovieID(id)}
            />
            <div className='mt-4 block'>
                <h3 onClick={() => setisMovieID(id)}>{title}</h3>
                <div className='content'>
                    <div className='rating'>
                        <img src="./star.svg" alt="star icon" />
                        <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
                    </div>
                    <span>&#x2022;</span>
                    <p className='lang'>{original_language}</p>
                    <span>&#x2022;</span>
                    <p className='year'>
                        {release_date ? release_date.split('-')[0] : 'N/A'}
                    </p>
                </div>
            </div>
            <button
                className={`like-button ${liked ? 'liked' : ''}`}
                onClick={() => setLiked(!liked)}
            >
                {liked ? 'Unlike' : 'Like'}
            </button>
        </div>
    );
};

export default MovieCard