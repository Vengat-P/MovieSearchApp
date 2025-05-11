import React, { useContext } from "react";
import MoviesProvider, { moviesContext } from "../Components/MoviesProvider";
import { useNavigate } from "react-router-dom";

const Movie = () => {
  const { info,setDetail } = useContext(moviesContext);
  console.log(info);
  const navigate = useNavigate()

  const backToSearch = ()=>{
    navigate ("/movies")
    // setDetail("");
  }

  return (
    <>
      <div className="mx-auto py-2 px-2">
        <button className=" w-auto h-auto border border-gray-300 px-2 text-white bg-black/75 rounded-lg" onClick={backToSearch}>Back</button>
        <img
          src={info.Poster}
          alt={info.Title}
          className="flex w-96 h-96 mx-auto py-2"
        />
        <h1 className="flex justify-center text-3xl font-bold text-red-600">
          {info.Title}
        </h1>
        <div className=" container border border-gray-400 p-2 mt-2 shadow-md">
          <div className=" flex justify-between">
            <p className="font-bold">
              Duration:{" "}
              <span className="text-red-500 font-bold">{info.Runtime}</span>
            </p>
            <h3 className="font-bold">
              Released on :{" "}
              <span className="text-red-500 font-bold">{info.Released}</span>
            </h3>
          </div>
          <div className=" flex justify-between">
            <h1 className="text-lg font-semibold">
            ImDb ID : <span className="font-semibold">{info.imdbID}</span>
          </h1>
                
          <p className="font-semibold">
            IMDb Rating ⭐ :{" "}
            <span className="text-red-500">{info.imdbRating}/10</span>{" "}
          </p>
          </div>
          <p className="border border-gray-200 p-2 bg-black/70 rounded-lg mt-2 mb-2"><span className="text-white">{info.Plot}</span></p>
      
          <h2 className="text-lg font-semibold text-black">Director : <span className="text-gray-600">{info.Director}</span></h2>
          <p className="text-lg font-semibold text-black">Actors : <span className="text-gray-600">{info.Actors}</span></p>
          <p className="text-lg font-semibold text-black">Genre : <span className="text-gray-600">{info.Genre}</span></p>
          <p className="text-lg font-semibold text-black">Box Office  : <span className="text-gray-600">{info.BoxOffice}</span></p>
          <p className="text-lg font-semibold text-black">Languages : <span className="text-gray-600">{info.Language}</span></p>
          <p className="text-lg font-semibold text-black">Country : <span className="text-gray-600">{info.Country}</span></p>
          <p className="text-lg font-semibold text-black">Awards : <span className="text-gray-600">{info.Awards}</span></p>
          
        </div>
      </div>
    </>
  );
};

export default Movie;
