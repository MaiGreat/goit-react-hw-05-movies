
import React from "react";
import { Link } from "react-router-dom";
import css from './filmList.module.css'

const FilmList = ({ movies }) => {
    return (
        <ul className={css.film}>
            {movies.map(({ id, title, poster_path, tagline }) => (
                <li className={css['list-film']} key={id}>
                    <img className={css.img }
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        alt={tagline ? tagline : "Poster"}
                    />
                    <Link className={css.title} to={`/detailsFilm/${id}`}>{title}</Link>
                </li>
            ))}
        </ul>
    );
};

export default FilmList;