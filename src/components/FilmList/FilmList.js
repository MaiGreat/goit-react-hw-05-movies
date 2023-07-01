import { Link } from "react-router-dom";


const FilmList = ({ movies }) => {
    return (
        <ul>
            {movies.map(({ id, title }) => (
                <li key={id}>
                    <Link to={`/detailsFilm/${id}`}>{title}</Link>
                </li>
            ))}
        </ul>
    );
};

export default FilmList;