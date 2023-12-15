import { combineReducers } from "redux";
import {
         ADD_MOVIES , 
         ADD_SEARCH_RESULT,
         ADD_TO_FAVOURITE, 
         REMOVE_FROM_FAVOURITES,
         SET_SHOW_FAVOURITES,
         ADD_MOVIES_TO_LIST
    } from "../actions";

const initialMoviesState ={
    list:[],
    favourites:[],
    showFavourites: false
}
export  function movies(state =initialMoviesState,action){
    console.log('MOVIES REDUCER');
    // if(action.type === ADD_MOVIES){
    //     // return action.movies;
    //     return {
    //         ...state,
    //         list: action.movies
    //     }
    // }
    // return state;
    switch(action.type){
        case ADD_MOVIES:
            return{
                ...state,
            list: action.movies,
            };// returning a new array not changing in state
        case ADD_TO_FAVOURITE:
             return{
                ...state,
                favourites: [action.movie,...state.favourites]
             };
        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter(
                (movie )=> movie.Title !== action.movie.Title
            );  
            return{
                ...state,
                favourites:filteredArray,
            };
          case SET_SHOW_FAVOURITES:
            return{
                ...state,
                showFavourites:action.val,
            };
            case ADD_MOVIES_TO_LIST:
            return{
                ...state,
                list:[action.movie,...state.list]
            };

        default:
            return state;             
    }
}
const initalSearchState = {
    results: {},
    showSearchResults:false
};
export function search(state= initalSearchState,action){
    // ADD_SEARCH_RESULT
     console.log('SEARCH REDUCER');
    // return state;
    switch(action.type){
        case ADD_SEARCH_RESULT:
            return{
                ...state,
                results:action.movie,
                showSearchResults:true
            }
        case ADD_MOVIES_TO_LIST:
            return{
                ...state,
                showSearchResults:false
                };

        default:
            return state;             
    }
}


// const initialRootState={
//     movies:initialMoviesState,
//     search:initalSearchState
// };
// export default function rootReducer(state= initialRootState,action){
//     return{
//         movies: movies(state.movies,action),
//         search: search(state.search,action)
//     }
// }
export default combineReducers({
    movies,
    search,

});