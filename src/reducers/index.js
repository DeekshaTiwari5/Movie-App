import { act } from "react-dom/test-utils";

export default function movies(state =[],action){
    if(action.type == 'ADD_MOVIES'){
        return action.movies;
    }
    return state;
}