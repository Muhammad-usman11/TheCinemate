
import {Routes, Route } from "react-router-dom"
import MovieList from "../pages/MovieList"
import MovieDetail from "../pages/MovieDetail"
import Search from "../pages/Search"
import PageNotFound from "../pages/PageNotFound"


const AllRoute = () => {
  return (
   <div className=" dark:bg-darkgrey ">
   <Routes>
    <Route path="/" element={<MovieList apipath="movie/now_playing" title="Home" /> } />
    <Route path="movie/:id" element={<MovieDetail /> } />
    <Route path="movies/popular" element={<MovieList apipath="movie/popular" title="Popular" /> } />
    <Route path="movies/top" element={<MovieList apipath="movie/top_rated" title="Top Rated" /> } />
    <Route path="movies/upcoming" element={<MovieList apipath="movie/upcoming" title="Upcoming" /> } />
    <Route path="search" element={<Search apipath="search/movie" /> } />
    <Route path="*" element={<PageNotFound /> } />
   </Routes>
   </div>
  )
}

export default AllRoute