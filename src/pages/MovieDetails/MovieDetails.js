
import { useParams } from "react-router-dom";
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
            <h2>Movie Details</h2>
            <p>Movie ID: {id}</p>
            <p>Movie Title: {movie.title}</p>
            <p>Movie Overview: {movie.overview}</p>
            
        </div>
    );
};

export default MovieDetails;