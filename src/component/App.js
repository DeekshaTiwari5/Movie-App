import React from "react";
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites } from "../actions";


class App extends React.Component {
  componentDidMount (){
    const {store} = this.props;
    store.subscribe(()=>{
      console.log('UPDATED');
      this.forceUpdate();
    });
    //make api call
    //dispatch action
    store.dispatch(addMovies(data));

    console.log('STATE',this.props.store.getState());
  
  }
  isMovieFavourite = (movie) => {
const {favourites} = this.props.store.getState();

const index = favourites.indexOf(movie);

     if(index !== -1){
     //found the movie
      return true;
   }
   return false;
}
  
  onChangeTab = (val)=>{
    this.props.store.dispatch(setShowFavourites(val))
  }
  render(){
    const {list,favourites,showFavourites} = this.props.store.getState();//{list:[],favourites:[]}
    console.log('RENDER',this.props.store.getState());
    
    const displayMovies = showFavourites ? favourites :list;
    return (
      <div className="App">
        <Navbar/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' :'active-tab'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tab': ''}`} onClick={() => this.onChangeTab(true)}>Favourites</div>
          </div>
  
          <div className="List">
            {displayMovies.map((movie,index) => (
              <MovieCard 
                movie={movie} 
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
             />
            ))}
  
          </div>
          {displayMovies.length === 0 ? <div className="no-movies">No Movies To Diaplay!!</div> :null}
        </div>
      </div>
    );
  }
} 
export default App;


// function App(props) {
//   const movies = props.store.getState();
//   return (
//     <div className="App">
//       <Navbar/>
//       <div className="main">
//         <div className="tabs">
//           <div className="tab">Movies</div>
//           <div className="tab">Favourites</div>
//         </div>

//         <div className="List">
//           {movies.map((movie,index) => (
//             <MovieCard movie={movie} key={`movies-${index}`}/>
//           ))}

//         </div>
//       </div>
//     </div>
  // );
// }


