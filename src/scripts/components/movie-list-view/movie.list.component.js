import React from 'react';
import {connect} from 'react-redux';
import './styles/movie.list.view.style.css';
import {PrimaryLightBGContainer} from './../../theme';
class MovieListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'movieSearchRecords': []};
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="movie-list-container">
        <div className="pagination-header">
          {this.props.totalResults > 0 &&	<div data-testid="movie-results-count" className="results-count">{this.props.totalResults} Results found</div>}
          {this.props.totalResults > 0 &&	<div className="pagination-holder">
            <span>Page {this.props.currentPage+1} of {Math.ceil(this.props.totalResults/this.props.perPage)}</span>
            <img className={'block-theme-border pagination-mover'+(this.props.currentPage>0?'':' inactive')}
              onClick={()=>{
                if (this.props.currentPage>0) {
                  this.props.dispatch({
                    'type': 'SEARCH_PAGE_UPDATE',
                    'payload': {
                      'value': this.props.searchTerm,
                      'requestPage': this.props.currentPage,
                    },
                    'dispatchInfo': {
                      dispatch: this.props.dispatch,
                      type: 'UPDATE_SEARCH_RESULTS',
                    },
                  });
                }
                ;
              }}
              src={'/assets/svgs/backward.arrow.'+this.props.themeSettings[this.props.activeTheme].iconColor+'.svg'}/>
            <img className={'block-theme-border pagination-mover'+((this.props.currentPage<Math.ceil(this.props.totalResults/this.props.perPage)-1)?'':' inactive')}
              onClick={()=>{
                if (this.props.currentPage<Math.ceil(this.props.totalResults/this.props.perPage)-1) {
                  this.props.dispatch({
                    'type': 'SEARCH_PAGE_UPDATE',
                    'payload': {
                      'value': this.props.searchTerm,
                      'requestPage': (this.props.currentPage+1)+1,
                    },
                    'dispatchInfo': {
                      dispatch: this.props.dispatch,
                      type: 'UPDATE_SEARCH_RESULTS',
                    },
                  });
                }
              }}
              src={'/assets/svgs/forward.arrow.'+this.props.themeSettings[this.props.activeTheme].iconColor+'.svg'}/>
            <img
              className={'view-type first-elem'+(this.props.viewType === 'tile'? ' selected':'')}
              onClick={()=>{
                this.props.dispatch({type: 'UPDATE_MOVIE_SEARCH_VIEW', viewType: 'tile'});
              }}
              src={'/assets/svgs/grid.view.'+this.props.themeSettings[this.props.activeTheme].iconColor+'.svg'}/>
            <img className={'view-type'+(this.props.viewType === 'row'? ' selected':'')}
              onClick={()=>{
                this.props.dispatch({type: 'UPDATE_MOVIE_SEARCH_VIEW', viewType: 'row'});
              }}
              src={'/assets/svgs/row.view.'+this.props.themeSettings[this.props.activeTheme].iconColor+'.svg'}/>
          </div>}
        </div>
        <div className={'results-container '+ this.props.viewType }>
          <div className="pagination-header"></div>
          <div className="results-container" data-testid="movie-results-container">
            {(this.props.searchTerm!==undefined && String(this.props.searchTerm).length>2) && (this.props.movieSearchRecords===undefined || this.props.movieSearchRecords.length===0)				&&
				<div className="center-align-container">
				  <span>No Results</span>
				</div>
            }

            {(this.props.searchTerm===undefined || String(this.props.searchTerm).length<=2) && (this.props.movieSearchRecords===undefined || this.props.movieSearchRecords.length===0)				&&
				<div className="center-align-container">
				  <span>Welcome to MMTFlix. Search by movie title and see your favourite movie</span>
				</div>
            }

            {(this.props.movieSearchRecords!==undefined?this.props.movieSearchRecords:[]).map((movie, movieIndex)=>
              <div data-testid={"movie-tile-"+movieIndex} key={"movie-tile-"+movieIndex} className="movie-tile block-theme-hover-border" onClick={(event)=>{
                this.props.dispatch({'type': 'MOVIE_DETAILS_REQUEST', 'payload': {'id': movie.imdbID}, 'dispatchInfo': {'type': 'MOVIE_DETAILS_RESPONSE', 'dispatch': this.props.dispatch}});
              }}>
                <div className="tile-image-container">
                  {movie.Poster!==undefined && String(movie.Poster).length>10 && <img src={movie.Poster}></img>}
                  {movie.Poster===undefined || String(movie.Poster).length<10 && <img src="/assets/images/default_poster.jpg"></img>}
                </div>
                <div className="description-container">
                  <span className="title">{movie.Title}</span>
                  <span className="year">{movie.Year}</span>
                </div>
                {this.props.viewType === 'row' &&
                  <div className="type block-theme-border">
                    {movie.Type}
                  </div>
                }
              </div>,
            )}

            {this.props.showActiveMovieDetail === true && this.props.activeMovieDetail!==undefined &&
				<PrimaryLightBGContainer className="transparent-wrapper movie-details-modal-wrapper">
				  <div className="movie-details-modal primary-background">
				    <div className="close-icon">
				      <img
				        onClick={(event)=>{
				          this.props.dispatch({'type': 'MOVIE_DETAILS_CLOSE'});
				        }}
				        className="close-img" src="/assets/images/close-icon.png"/>
				    </div>

				    <div className="movie-details-container">
				      <div className="poster-container">
				        {this.props.activeMovieDetail.Poster!==undefined && String(this.props.activeMovieDetail.Poster).length>10 && <img src={this.props.activeMovieDetail.Poster}></img>}
				        {this.props.activeMovieDetail.Poster===undefined || String(this.props.activeMovieDetail.Poster).length<10 && <img src="/assets/images/default_poster.jpg"></img>}
				      </div>
				      <div className="movie-details-content">

				        <h1>{this.props.activeMovieDetail.Title}</h1>
				        <div className="movie-details-label-desc">
				          <label>Director: </label>
				          <span>{this.props.activeMovieDetail.Director}</span>
				        </div>
				        <div className="movie-details-label-desc">
				          <label>Cast: </label>
				          <span>{this.props.activeMovieDetail.Actors}</span>
				        </div>
				        <div className="movie-details-label-desc">
				          <label>Genre: </label>
				          <span>{this.props.activeMovieDetail.Genre}</span>
				        </div>

				        <p>
				          {this.props.activeMovieDetail.Plot}
				        </p>
				      </div>
				    </div>

				  </div>
				</PrimaryLightBGContainer>
            }

          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movieSearchRecords: state.movieSearchRecords,
    searchTerm: state.searchTerm,
    activeMovieDetail: state.activeMovieDetail,
    showActiveMovieDetail: state.showActiveMovieDetail,
    totalResults: state.totalResults,
    currentPage: state.currentPage,
    perPage: state.perPage,
    viewType: state.viewType,
    themeSettings: state.themeSettings,
    activeTheme: state.activeTheme,
  };
}


export default connect(mapStateToProps)(MovieListView);
