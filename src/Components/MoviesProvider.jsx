import axios from 'axios';
import React, { createContext, useEffect, useMemo, useState } from 'react';

export const moviesContext = createContext();

const MoviesProvider = ({children}) => {
    const [search,setSearch] = useState("");//search data stored here
    const [detail,setDetail] = useState("");//for detailed information
    const [movies,setMovies] = useState([]);//search results 
    const [info,setInfo] =useState({});//to store selected movie details
    const [type,setType] = useState("");// to filter type(movies,series)
    const [currentPage,setCurrentPage] = useState(1) //for pagination
    
    console.log(search);
    
    useEffect(()=>{
        fetchData();
    },[search,currentPage,type,detail])

    const fetchData= async ()=>{
        try {
            const response = await axios.get(`https://omdbapi.com/?apikey=d709826f&s=${search}&Type=${type}&page=${currentPage}`)
            const moreInfo = await axios.get(`https://omdbapi.com/?apikey=d709826f&i=${detail}`)
            setMovies(response.data)//for search method
            setInfo(moreInfo.data)//to show more detail about you select from search results
            
        } 
        catch (error) {
            console.log(error);

            
        }
    }

    
    
    return (
        <div>
            <moviesContext.Provider value={{movies,setMovies,search,setSearch,currentPage,setCurrentPage,type,setType,setDetail,detail,info,setInfo}}>
                {children}
            </moviesContext.Provider>
        </div>
    );
};

export default MoviesProvider;