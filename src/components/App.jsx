import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "./SharedLayout/SharedLayout";
// const MyComponent = lazy(() => import("path/to/MyComponent"));
const Header = lazy(() => import('../pages/Home/Home'));
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Cast = lazy(() => import('../components/Cast/Cast'))
const Reviews = lazy(() => import('../components/Reviews/Reviews'))

export function App() {
  return (
    <Routes>
      <Route element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/detailsFilm/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/movies" element={<Movies />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};