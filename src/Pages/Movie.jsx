import React, { useContext, useState } from "react";
import MoviesProvider, { moviesContext } from "../Components/MoviesProvider";
import { useNavigate } from "react-router-dom";

const Movie = () => {
  const { info,setDetail,status,setStatus,setCount,count,favorites,setFavorites } = useContext(moviesContext);
  
  
//   console.log(info);
//   console.log(favorites);
  
  const navigate = useNavigate()

  const backToSearch = ()=>{
    navigate ("/movies")
    // setDetail("");
  }
 const addFavorite =(infos)=>{
    // console.log(item);
    
    const existingFav = favorites.find((item)=> item.imdbID === infos.imdbID)
    if(existingFav){
        setFavorites(()=>{
           return [...favorites]
        })
    }
    else{
        setFavorites(()=>{
           return [...favorites,infos]
        })
        setCount(val=>val+1)
    }
    console.log(info);
    
    setStatus(false)
  }
  const removeFavorite = (infos)=>{
    const filteredMovies = favorites.filter((item)=>{
        if(item.imdbID !== infos.imdbID){
            return true
        }
        
    })
    setFavorites(()=>{
            return [...filteredMovies]
        })
    if(count>0){
        setCount(val=>val-1)
    }
    setStatus(true)
  }
  return (
    <>
      <div className="mx-auto py-2 px-2">
        <button className=" w-auto h-auto border border-gray-300 px-2 text-white bg-black/75 rounded-lg" onClick={backToSearch}>Back</button>
        {info.map((infos,index)=>{
            return (
                <div key={index}>
                    <img
          src={infos.Poster}
          alt={infos.Title}
          className="flex w-96 h-96 mx-auto py-2"
        />
        <h1 className="flex text-3xl font-bold text-red-600">
          {infos.Title}
        </h1>
        <div className=" container border border-gray-400 p-2 mt-2 shadow-md">
          <div className=" flex justify-between">
            <p className="font-bold">
              Duration:{" "}
              <span className="text-red-500 font-bold">{infos.Runtime}</span>
            </p>
            {status ? (
                  <button className="flex flex-col justify-center items-center" onClick={()=>{addFavorite(infos)}}>
                  <svg
                  className="w-12 h-12 text-gray-800 dark:text-white "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                  />
                </svg>Add to Favorite
                </button>
                ):(
                  <button className="flex flex-col justify-center items-center " onClick={()=>{removeFavorite(infos)}}>
                  <svg
                  className="w-12 h-12  text-gray-800 dark:text-white "
                  aria-hidden="false"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="red"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                  />
                </svg>
                Remove from Favorite
                </button>
                )}
            <h3 className="font-bold">
              Released on :{" "}
              <span className="text-red-500 font-bold">{infos.Released}</span>
            </h3>
          </div>
          <div className=" flex justify-between">
            <h1 className="text-lg font-semibold">
            ImDb ID : <span className="font-semibold">{infos.imdbID}</span>
          </h1>
                
          <p className="font-semibold">
            IMDb Rating ⭐ :{" "}
            <span className="text-red-500">{infos.imdbRating}/10</span>{" "}
          </p>
          </div>
          <p className="border border-gray-200 p-2 bg-black/70 rounded-lg mt-2 mb-2"><span className="text-white">{infos.Plot}</span></p>
      
          <h2 className="text-lg font-semibold text-black">Director : <span className="text-gray-600">{infos.Director}</span></h2>
          <p className="text-lg font-semibold text-black">Actors : <span className="text-gray-600">{infos.Actors}</span></p>
          <p className="text-lg font-semibold text-black">Genre : <span className="text-gray-600">{infos.Genre}</span></p>
          <p className="text-lg font-semibold text-black">Box Office  : <span className="text-gray-600">{infos.BoxOffice}</span></p>
          <p className="text-lg font-semibold text-black">Languages : <span className="text-gray-600">{infos.Language}</span></p>
          <p className="text-lg font-semibold text-black">Country : <span className="text-gray-600">{infos.Country}</span></p>
          <p className="text-lg font-semibold text-black">Awards : <span className="text-gray-600">{infos.Awards}</span></p>
          
        </div>
                </div>
            )
        })}
        
      </div>
    </>
  );
};

export default Movie;
