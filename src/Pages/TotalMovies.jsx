import React, { useContext, useMemo } from "react";
import { moviesContext } from "../Components/MoviesProvider";

const TotalMovies = () => {
  const { movies, search, currentPage, setCurrentPage } =
    useContext(moviesContext);
  console.log(movies);
  // find max length of data from api for pagination
  const maxPage = Math.ceil(parseInt(movies.totalResults) / 10);

  //previous page function
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  //next page function
  const nextPage = () => {
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  //fist page function
  const firstPage = () => {
    setCurrentPage(1);
  };
  //last page function
  const lastPage = () => {
    setCurrentPage(maxPage);
  };
  return (
    <div>
      <div className="container mx-auto grid gap-3 w-auto h-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">

        {/* mapping data from omdb api search parameter */}
        {movies.Search.map((item, index) => {
          return (
            <div key={index} className="w-auto h-auto">
              <h1 className="text-xl font-bold ">{item.Title}</h1>
              <h3 className="text-md font-semibold">{item.Year}</h3>
              <p className="text-md font-semibold">IMdb ID{item.imdbID}</p>
              <img className="w-60 h-60" src={item.Poster} alt={item.Title} />
            </div>
          );
        })}
      </div>
      <br />
      <div className="flex gap-2 justify-evenly mt-2">
        {/* Previous Button */}
        <button
          onClick={previousPage}
          disabled={currentPage === 1}
          className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-black bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            className="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Previous
        </button>
        <button
          onClick={firstPage}
          className="flex border border-gray-400  rounded-lg items-center justify-center px-3 h-8 me-3 text-sm font-medium text-black"
        >
          First
        </button>
        <span className="text-xl font-bold">
          <span className="text-red-500">{currentPage}</span> of {maxPage}
        </span>
        <button
          onClick={lastPage}
          className="flex border border-gray-400  rounded-lg items-center justify-center px-3 h-8 me-3 text-sm font-medium text-black"
        >
          Last
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === maxPage}
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-black bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TotalMovies;
