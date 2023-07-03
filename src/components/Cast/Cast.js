
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import defaultActor from '../../imgs/cat-png.webp'
import css from './cast.module.css'

import { getCastMovies } from "components/service/API";

const Cast = () => {
    const { id } = useParams();
    const [cast, setCast] = useState(null);

    useEffect(() => {
        const fetchCastMovies = async () => {
            try {
                const castMovies = await getCastMovies(id)
                setCast(castMovies.cast)
                console.log(castMovies);
            } catch (error) {
                console.error('Error fetching movie cast:', error);
            }
        }
        fetchCastMovies()
    }, [id])

    if (!cast) {
        return <div>Loading...</div>;
    }

    return (
        <div className={css.cast}>
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