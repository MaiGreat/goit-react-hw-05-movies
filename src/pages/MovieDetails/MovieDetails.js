
import { useParams, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetalisMovies } from "components/service/API"

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);


    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const movieDetails = await getDetalisMovies(id);
                setMovie(movieDetails);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'Movie Image'}
                alt={movie.tagline ? movie.tagline : 'Movie Image'}
            />
            {/* <h2>Movie Details</h2> */}
            <p>{movie.title}</p>
            <p>Rating: {movie.vote_average}</p>
            <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
            <p>Movie Overview: {movie.overview}</p>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>

            <Outlet />
        </div>
    );
};

export default MovieDetails;