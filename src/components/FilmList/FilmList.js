
import React from "react";
import { Link } from "react-router-dom";

const FilmList = ({ movies }) => {
    return (
        <ul>
            {movies.map(({ id, title, poster_path, tagline }) => (
                <li key={id}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        alt={tagline ? tagline : "Poster"}
                    />
                    <Link to={`/detailsFilm/${id}`}>{title}</Link>
                </li>
            ))}
        </ul>
    );
};

export default FilmList;