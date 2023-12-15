import React from "react";
import { connect } from 'react-redux';
// import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from "./MovieCard";
import { data as moviesList } from '../data';
import { addMovies, setShowFavourites } from "../actions";
// import { StoreContext } from "..index";

// class App extends React.Component {
//   componentDidMount (){
//     const {store} = this.props;

//      //subscribe function is called automatically after dispatch function is called
//     store.subscribe(()=>{
//       console.log('UPDATED');
//       this.forceUpdate();
//     });
//     //make api call
//     //dispatch action
//     store.dispatch(addMovies(moviesList));

//     console.log('STATE',this.props.store.getState());
  
//   }
//   isMovieFavourite = (movie) => {
// const {movies} = this.props.store.getState();

// const index = movies.favourites.indexOf(movie);

//      if(index !== -1){
//      //found the movie
//       return true;
//    }
//    return false;
// }
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(addMovies(moviesList));
  }

  isMovieInFavourite = (movie) => {
    const { movies } = this.props;

    const index = movies.favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    }

    return false;
  };

  
  onChangeTab = (val)=>{
    this.props.dispatch(setShowFavourites(val))
  }
  render(){
    // const {movies ,search}=this.props.store.getState();//{movies:{},Search:{}} 
    const { movies, search } = this.props;
    console.log('movies', movies);
    const{list,favourites=[],showFavourites=[]} = movies;
    // const {list,favourites,showFavourites} = this.props.store.getState();  //{list:[],favourites:[]}
    // console.log('RENDER',this.props.store.getState());
    const displayMovies = showFavourites ? favourites :list;
    
    return (
      <div className="App">
         <Navbar search={search} />
        {/* <Navbar dispatch={this.props.store.dispatch} search={search}/> */}
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' :'active-tab'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tab': ''}`} onClick={() => this.onChangeTab(true)}>Favourites</div>
          </div>
  
          <div className="List">
            {displayMovies.map((movie) => (
              <MovieCard 
                movie={movie} 
                key={movie.imdbID}
                // key={`movies-${index}`}
                // dispatch={this.props.store.dispatch}
                dispatch={this.props.dispatch}
                isFavourite={this.isMovieInFavourite(movie)}
             />
            ))}
  
          </div>
          {displayMovies.length === 0 ? <div className="no-movies">No Movies To Diaplay!!</div> :null}
        </div>
      </div>
    );
  }
} 

// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }
// export default AppWrapper;

function callback(state){
  return{
    movies:state.movies,
    search:state.movies
  }
};
const connectedComponent =  connect (callback)(App);

 export default connectedComponent;
//  export default App;


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


