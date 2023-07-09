
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "components/Loader/Loader";
import defaultActor from '../../imgs/cat-png.webp'
import css from './cast.module.css'

import { getCastMovies } from "../../service/API";

const Cast = () => {
    const { id } = useParams();
    const [cast, setCast] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchCastMovies = async () => {
            try {
                setIsLoading(true);
                const castMovies = await getCastMovies(id)
                setCast(castMovies.cast)
                console.log(castMovies);
            } catch (error) {
                setError(error.message)
            }
            finally {
                setIsLoading(false); 
            }
        }
        fetchCastMovies()
    }, [id])

    if (!cast) {
        return <Loader/>;
    }

    return (
        <div className={css.cast}>
            {error && <p>Oops...Somesing went wrong..</p>}
            {isLoading && <div><Loader/></div>}
            {cast
                .slice(0, 10)
                .map(({ id, profile_path, original_name, character }) => (
                    <div className={css.actor} key={id}>
                        <img className={css['cast-img']}
                            src={profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : defaultActor}
                            alt={original_name}
                        />
                        <p className={css.text}>
                            <span className={css['text-p']}>Actor:</span> {original_name}
                        </p>
                        <p className={css.text}>
                            <span className={css['text-p']}>Character:</span> {character}
                        </p>
                    </div>
                ))}
        </div>
    );
}

export default Cast;