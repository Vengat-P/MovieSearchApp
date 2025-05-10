import axios from 'axios';
import React, { createContext, useEffect, useMemo, useState } from 'react';

export const moviesContext = createContext();

const MoviesProvider = ({children}) => {
    const [search,setSearch] = useState("");
    const [movies,setMovies] = useState([]);
    const [currentPage,setCurrentPage] = useState(1)
    console.log(search);
    
    useEffect(()=>{
        fetchData();
    },[search,currentPage])

    const fetchData= async ()=>{
        try {
            const response = await axios.get(`https://omdbapi.com/?apikey=d709826f&s=${search}&page=${currentPage}`)
            setMovies(response.data)
            
        } 
        catch (error) {
            console.log(error);
            
        }
    }

    
    
    return (
        <div>
            <moviesContext.Provider value={{movies,setMovies,search,setSearch,currentPage,setCurrentPage}}>
                {children}
            </moviesContext.Provider>
        </div>
    );
};

export default MoviesProvider;