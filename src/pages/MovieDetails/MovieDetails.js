
import { useParams, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetalisMovies } from "service/API"
import defaultMovieImg from '../../imgs/picture-coming-soon.webp'
import css from './MovieDetalis.module.css'

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const movieDetails = await getDetalisMovies(id);
                setMovie(movieDetails);
            } catch (error) {
                setError(error.message)
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className={css.details}>
                <img className={css.movie}
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultMovieImg}
                    alt={movie.tagline ? movie.tagline : defaultMovieImg}
                />
                <div className={css['list-details']}>
                    <h2 className={css.h2}>Movie Details</h2>
            <p className={css.title}>{movie.title}</p>
            <p> <span className={css.text}>Rating:</span> {movie.vote_average}</p>
            <p><span className={css.text}>Genres:</span> {movie.genres.map(genre => genre.name).join(', ')}</p>
            <p><span className={css.text}>Movie Overview:</span> {movie.overview}</p>
                </div>    
            
            </div>
        
            <Link className={css.link} to="cast">Cast</Link>
            <Link className={css.link} to="reviews">Reviews</Link>

            <Outlet />
        </div>
    );
};

export default MovieDetails;