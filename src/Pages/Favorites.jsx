import React, { useContext } from "react";
import { moviesContext } from "../Components/MoviesProvider";
import { useNavigate } from "react-router-dom";

const favoritesLists = () => {
  const { favorites, setFavorites, setDetail, setStatus, count, setCount } =
    useContext(moviesContext);
  console.log(favorites);
  const navigate = useNavigate();
  const handleDetails = (item) => {
    setDetail(item.imdbID);
    setStatus(true);
    navigate(`/movies/${item.imdbID}`);
  };
  const removeFromList = (item) => {
    if (count > 0) {
      setCount((ele) => ele - 1);
    }
    const removeId = item.imdbID;
    const filteredMovies = favorites.filter((ele) => {
      if (ele.imdbID !== removeId) {
        return true;
      }
    });
    setFavorites(() => {
      return [...filteredMovies];
    });
  };
  return (
    <div>
      {favorites.length > 0 ? (
        favorites.map((item, index) => {
          return (
            <div
              key={index}
              className="w-auto h-auto flex justify-between border mt-2 p-2 "
            >
              <div>
                <h1 className="text-xl font-bold text-red-500">{item.Title}</h1>
                <h3 className="text-md font-semibold">{item.Year}</h3>
                <p className="text-md font-semibold">IMdb ID : {item.imdbID}</p>
                <div className="flex justify-between">
                  <button
                    className="flex text-md text-blue-600 border border-gray-300 w-fit px-2 my-2"
                    onClick={() => {
                      handleDetails(item);
                    }}
                  >
                    more info
                  </button>
                </div>
                <img className="w-60 h-60" src={item.Poster} alt={item.Title} />
              </div>
              <button
                className="p-1 h-10 w-24 cursor-pointer my-auto border bg-red-500 text-white rounded-xl "
                onClick={() => {
                  removeFromList(item);
                }}
              >
                Remove
              </button>
            </div>
          );
        })
      ) : (
        <div className="container flex flex-col justify-center items-center mt-2 py-2 mx-auto">
          <h1 className="text-2xl font-bold mb-2">
            Your Favorites Movies List is Empty
          </h1>
          <img
            className="w-96 h-96"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1M-3N9hSWHtJoLMzrPkMBUAZ1IWyDdoUsig&s"
            alt="1"
          />
        </div>
      )}
    </div>
  );
};

export default favoritesLists;
