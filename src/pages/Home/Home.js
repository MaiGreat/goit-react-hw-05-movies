import { useState, useEffect } from "react";
import { getTrendingMovies } from "components/service/API"; 
import FilmList from "components/FilmList/FilmList";
    
const Home = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const film = await getTrendingMovies('');
                setMovies(film);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching movies:', error);
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