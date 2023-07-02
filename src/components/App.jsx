
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import NotFound from "pages/NotFound";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

export function App () {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailsFilm/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/movies" element={<Movies />} />
        <Route path='*' element={<NotFound /> } />
      </Routes>
    </div>
  );
};