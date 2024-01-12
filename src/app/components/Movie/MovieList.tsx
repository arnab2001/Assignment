"use client";
import React, { useState, useEffect, useContext } from "react";
import MovieCard from "./MovieCard";
import moviesData from "./data.json";
import { Movie } from "@/app/types/Movie";

interface MovieListProps {}

const MovieList: React.FC<MovieListProps> = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [visibleMovies, setVisibleMovies] = useState<number>(8);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  useEffect(() => {
    setMovies(moviesData.moviesData || []);
  }, []);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setMovies((prevMovies) => {
        const moreMovies = moviesData.moviesData.slice(
          prevMovies.length,
          prevMovies.length + 12
        );
        return [...prevMovies, ...moreMovies];
      });
      setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 12);
      setIsLoadingMore(false);
    }, 1000);
  };

  return (
    <>
      <div className="w-full py-10 px-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {movies.slice(0, visibleMovies).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      {visibleMovies < movies.length && (
        <div className="flex justify-center my-4">
          <button
            className="border-2 border-gray-600 text-white py-3 px-12 font-semibold rounded-md"
            onClick={handleLoadMore}
            disabled={isLoadingMore}
          >
            {isLoadingMore ? "Loading..." : "Load More Movies"}
          </button>
        </div>
      )}
    </>
  );
};

export default MovieList;
