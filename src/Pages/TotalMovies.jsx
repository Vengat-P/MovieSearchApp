import React, { useContext, useMemo } from "react";
import { moviesContext } from "../Components/MoviesProvider";

const TotalMovies = () => {
  const {movies,search} = useContext(moviesContext);
  console.log(movies);
//   const filterMovies = useMemo(()=>{
//     const mov = movies.filter(ele=>ele.toLowerCase().includes(search.toLowerCase()))
//     return  mov

// },[movies,search])
  return (
    <div>
      {movies.Search.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.Title}</h1>
            <h3>{item.Year}</h3>
            <img src={item.Poster} alt={item.Title} />
          </div>
        );
      })}
    </div>
  );
};

export default TotalMovies;
