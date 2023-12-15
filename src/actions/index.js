// {
//     type:'INCREASE_COUNT'
// }
// {
//     type:'DECREASE_COUNT'
// }

// import { response } from "express";







// {
//     type:'ADD_MOVIES',
//     movies:[m1,m2,m3]
// }



// action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";
export const ADD_MOVIES_TO_LIST="ADD_MOVIES_TO_LIST";
export const ADD_SEARCH_RESULT="ADD_SEARCH_RESULT";

//dispath action creators
export function addMovies (movies){
    return{
        type: ADD_MOVIES,
        movies,
      }
}
export function addFavourite (movie){
  return{
      type: ADD_TO_FAVOURITE,
      movie,
    };
}

export function removeFromFavourites (movie){
  return{
      type: REMOVE_FROM_FAVOURITES,
      movie,
    };
}
export function setShowFavourites (val){
  return{
      type: SET_SHOW_FAVOURITES,
      val,
    };
}
export function addMovieToList(movie){
  return{
    type: ADD_MOVIES_TO_LIST,
    movie,
  };
}
//thubk: type of function return by spectial type of function

export function handleMovieSearch(searchText) {
  return function (dispatch) {
    const url = `https://www.omdbapi.com/?i=tt3896198&apikey=e4cb3aac&t=${searchText}`;
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log('movie', movie);
        // dispatch action to save search results in store
        dispatch(addMovieSearchResult(movie));
      });
  };
}
// export function handleMovieSearch(searchText) {
//   return function (dispatch) {
//     const url = `https://www.omdbapi.com/?i=tt3896198&apikey=e4cb3aac&t=${searchText}`;
//     fetch(url)
//       .then((response) => response.json())
//       .then((movie) => {
//         console.log('movie', movie);
//         // dispatch action to save search results in store
//         dispatch(addMovieSearchResult(movie));
//       });
//   };
// }

 export function addMovieSearchResult(movie) {
  return{
    type: ADD_SEARCH_RESULT,
    movie
  };
 }