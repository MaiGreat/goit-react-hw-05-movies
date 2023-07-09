
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import css from './filmList.module.css'
import defaultImg  from '../../imgs/picture-coming-soon.webp'

const FilmList = ({ movies }) => {
    return (
        <ul className={css.film}>
            {movies.map(({ id, title, poster_path, tagline }) => (
                <li className={css['list-film']} key={id}>
                    <img className={css.img }
                        src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : defaultImg}
                        alt={tagline ? tagline : "Poster"}
                        width={250}
                        height={360}
                    />
                    <Link className={css.title} to={`/detailsFilm/${id}`}>{title}</Link>
                </li>
            ))}
        </ul>
    );
};

FilmList.propTypes = {
    movies: PropTypes.string.isRequired
}

export default FilmList;