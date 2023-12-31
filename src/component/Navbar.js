import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovieToList, handleMovieSearch } from '../actions';
// import { data } from '../data';
// import { StoreContext } from '..';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
        // showSearchResults:true,
      searchText: '',
    };
  }
  // 


  handleAddToMovies = (movie) => {
    this.props.dispatch(addMovieToList(movie));
//     this.setState({
//         showSearchResults: false
//     });
 };
  handleSearch = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
    console.log(searchText);
  };

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value
    });
  };
  
    render(){
      // const { showSearchResults } = this.state;
      const { showSearchResults, results: movie } = this.props.search;
      console.log(movie);
      console.log(this.props.search);
        return (
            <div className="nav">
              <div className="search-container">
              <input onChange={(e)=>this.handleChange(e)
} />
          <button id="search-btn" onClick={this.handleSearch}>
            Search
          </button>

          {showSearchResults && (
            <div className="search-results">
              <div className="search-result">
                <img src={movie.Poster} alt="search-pic" />

                <div className="movie-info">
                  <span>{movie.Title}</span>
                  <button onClick={() => this.handleAddToMovies(movie)}>
                    Add to Movies
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

// class NavbarWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => (
//           <Navbar dispatch={store.dispatch} search={this.props.search} />
//         )}
//       </StoreContext.Consumer>
//     );
//   }
// }
// export default NavbarWrapper;
function mapStateToProps({ search }) {
  return {
    search,
  };
}

export default connect(mapStateToProps)(Navbar);