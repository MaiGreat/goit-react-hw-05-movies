import { useState, useEffect } from "react";
import { getTrendingMovies } from "service/API"; 
import FilmList from "components/FilmList/FilmList";
    
const Home = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const film = await getTrendingMovies('');
                setMovies(film);
                setIsLoading(false);
            } catch (error) {
                setError(error.message)
            }
        };

        fetchMovies();
    }, []);

    return (
        <>
            <h1 style={{
                fontFamily: 'Caprasimo',
                fontWeight: 'bold',
                fontSize: '48px',
                textAlign: 'center',
            }}>Trending today</h1>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <FilmList movies={movies} />
            )}
        </>
    );
};


export default Home;