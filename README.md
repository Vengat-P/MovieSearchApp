# Add To Cart Task Using React Router

## Overview

Develop a full-featured movie search application using React that integrates with the OMDB API. The application should allow users to search for movies, view detailed information, and manage a list of favorites.

## Tech Stack

- **ReactJs** for application
- **TailwindCss** for styling
- **Axios** to Fetch API data
- **Flowbite** to add Components for Tailwind Style
- **VSCode** for development
- **JavaScript** for applying logics
- **React-Router-dom** for acessing routers(pacakge)

## OMDB Api

- submit mail id to get free api key
- to get data from omdb api there are three types available.one is by using title in this end point will be like this <!-- /omdbapi.com/?apikey=d709826f&t=[your title]`--> or by using Id <!-- /omdbapi.com/?apikey=d709826f&i=[imdb Id]`--> or by using search <!-- /omdbapi.com/?apikey=d709826f&s=[your search results]&page=[for pagination]&type=[to filter according to type]`-->

## Logics

- **Basic Setup -**

- **Step1** Create react application basics setup and cleanup folder.
  **Commands**:
- **TailwindCss** in command prompt - npm install tailwindcss @tailwindcss/vite, In vite.config file - import tailwindcss from '@tailwindcss/vite' add plugin- tailwindcss(), In Index.css - @import "tailwindcss";
- **Flowbite** in command prompt - npm install flowbite , In Index.css add - @plugin "flowbite/plugin" @source "../node_modules/flowbite",In Index.html add - <!-- <script src="./node_modules/flowbite/dist/flowbite.min.js"></script> -->
- **axios** in command prompt - npm i axios
- **Router** in command prompt - npm i react-router-dom

- **Step2** creat useContext hook to pass all datas in each child in moviesprovider component and then wrap main.jsx using moviesprovider.next,creat neccesary page component to explore and store datas in different pages.then in app.jsx create routes path for all pages and navbar and footer component

- **Step3** in moviesprovider component create two usestates one is search to get data from users another one is movies to store data from omdb api. using useeffect to fetch data from api. in fetch data function use axios to get data from omdb api in api link end with your apikey and endpoint will be s=${search}.To store this data use movies state. and call search state in useeffect array tio rerender after submit. once form submit page will redirect to TotalMovies and all the get details will be displayed in movies page(by using navigate hook).every movies has more info button to get more details about that movie. this page will include pagination and filter type as well .

- **Step4** to get more info detail we need to change end point insted of search using id method. for this we need two state one is info use state to store data and detail state to get id from totalmovies page. in more info button using onclick function and pass the imdbId of that movie which is clicked set in detail state. and use again axios method tow get data by using id method . end point will be after your apikey &i={detail}. and call detail inside of useeffect array to rerender again. After clicked more info page will redirect to movie page with id of selected movie by using navigate hook

- **Step5** For pagination create one usestate name is currentPage default value will be 1 and add &page={currentPage} IN endpoint of search type omdb api.and set function to change according to next or previous function and call current page in useeffect array to re render

- **Step6** To filter according to Type create one usestate hook name is detail and get input from users using select feild in movie page. and store the selected value in type hook then add end point of search method api link like &type=${type}. and call type in useeffect array to re render.

- **Step7** Add your favorite movie into your favoritesList. for this create thre usestate. count state to show no of items in your lists. status state to change the dynamic view of added or remove icons style using ternary operator. favorites state to store your favorites movies list. In movie details page add button(with logo) with conditional operator .once you clicked add to favorite button it will change to remove from favorite button. and set count value for increment and use spread operator to store your selected movie data . and set function for remove also once clicked remov from favorite button set count value will decrease with condition and remove that data from favorites state using filter method .

- **Step7** in favorites page set function for removing movies from your lists by using filter method

- **Navbar component -**

- in navbar componet three link tag available to redirect your page of application one is logo to go to home page and another one is home to go to home page and fav list will go to favorites page .

## How to Use

- **step-1 -** you will land in search page which is home page of this application. you can enter your keyword in search bar then click search you will be redirect to movies page .

- **step-2 -** in movies page you can see your search results with pagination default you will land page 1 if you want to change page click next then page will rerender .

- **step-3 -** click more info to see more detail about particluar movie. once clicked you will redirect to that movie id page . you can see movie breif detail . here you have option to add your favorites list in that movie. if you click that heart button the selected movie will be added in your fav Lists. if you dont want remove from favorite by clicking again .

- **step-4 -** if you want to see your favlist click favlist in navbar. that will redirect you into favorites page. you can see your favLists . if you dont want any of them just click remove . from here also you can see your favorite movie more info

## Features

- Responsive Design
- Clean and Minimalistic Layout
- Routing for separate pages in single page

## Demo

- https://movieinfofind.netlify.app/

## Authors

- [@ Vengat p](https://github.com/Vengat-P)
