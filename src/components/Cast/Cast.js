
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        <div>
            {cast
                .slice(0, 15)
                .map(({ id, profile_path, original_name, character }) => (
                    <div key={id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                            alt={original_name}
                        />
                        <p>
                            <span>Actor:</span> {original_name}
                        </p>
                        <p>
                            <span>Character:</span> {character}
                        </p>
                    </div>
                ))}
        </div>
    );
}

export default Cast;