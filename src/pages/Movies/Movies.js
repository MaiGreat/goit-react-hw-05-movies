import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'components/service/API';
import FilmList from 'components/FilmList/FilmList';
import css from './Movies.module.css';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const currentQuery = searchParams.get('query');
        if (!currentQuery) return;

        const fetchMovieByQuery = async () => {
            try {
                const movieByQuery = await getMovieByQuery(currentQuery);
                setMovies(movieByQuery);
            } catch (e) {
                console.log(e);
            }
        };
        fetchMovieByQuery();
    }, [searchParams]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const query = e.target.query.value;
        setSearchParams({ query });
        navigate(`/movies?query=${query}`);
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
            {movies.length > 0 && <FilmList movies={movies} />}
        </div>
    );
};

export default Movies;

