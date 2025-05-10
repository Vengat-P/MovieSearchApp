import axios from 'axios';
import React, { createContext, useEffect, useMemo, useState } from 'react';

export const moviesContext = createContext();

const MoviesProvider = ({children}) => {
    const [search,setSearch] = useState("");
    const [movies,setMovies] = useState([]);
    console.log(search);
    
    useEffect(()=>{
        fetchData();
    },[search])

    const fetchData= async ()=>{
        try {
            const response = await axios.get(`https://omdbapi.com/?apikey=d709826f&s=${search}`)
            setMovies(response.data)
            
        } 
        catch (error) {
            console.log(error);
            
        }
    }

    
    
    return (
        <div>
            <moviesContext.Provider value={{movies,setMovies,search,setSearch}}>
                {children}
            </moviesContext.Provider>
        </div>
    );
};

export default MoviesProvider;