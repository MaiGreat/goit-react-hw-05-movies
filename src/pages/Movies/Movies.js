import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'service/API';
import FilmList from 'components/FilmList/FilmList';
import Loader from 'components/Loader/Loader';
import css from './Movies.module.css';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const currentQuery = searchParams.get('query');
        if (!currentQuery) return;

        const fetchMovieByQuery = async () => {
            try {
                const movieByQuery = await getMovieByQuery(currentQuery);
                setMovies(movieByQuery);
            } catch (error) {
                setError(error.message)
            }
        };
        fetchMovieByQuery();
    }, [searchParams]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const query = e.target.query.value;
        setSearchParams({ query });
    };

    return (
        <div className={css.container}>
            <form className={css.form} onSubmit={handleSubmit}>
                <label className={css.label}>
                    Search:
                    <input className={css.input} type="text" name="query" />
                    <button className={css.btn} type="submit">Submit</button>
                </label>
            </form>
            {error && <p>Oops...Somesing went wrong..</p>}
            {isLoading && <div><Loader/></div>}
            {movies.length > 0 && <FilmList movies={movies} />}
        </div>
    );
};

export default Movies;

