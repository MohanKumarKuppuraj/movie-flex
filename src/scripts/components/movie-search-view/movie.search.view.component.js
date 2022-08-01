import React from 'react';
import MovieListView from './../movie-list-view/movie.list.component';
import SearchBox from './../search-box/search.box.component';
import {connect} from 'react-redux';
import './styles/movie.search.view.style.css';
import {PrimaryLightBGContainer} from './../../theme';
class MovieSearchView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movie-search-container">
        <div className="search-header">
          <div className="logo-container">
            <img className="logo" src="/assets/images/logo.png"/>
          </div>
          <span className="search-box-container">
            <img className="block-theme-border profile-icon block-theme-border-hover"
              onClick={(event)=>{
                this.props.dispatch({type: 'UDPATE_SHOW_PROFILE_STATUS', showProfileModal: true});
              }}
              src="assets/svgs/profile.icon.black.svg"/>
            {this.props.showProfileModal && <div
              onClick={(event)=>{
                this.props.dispatch({type: 'UDPATE_SHOW_PROFILE_STATUS', showProfileModal: false});
              }}
              className="profile-modal-wrapper">
              <div onClick={(event)=>{
                event.stopPropagation();
              }} className="profile-section">
                <h2>Configure</h2>
                <div className="settings-holder">
                  <div className="icon-holder">
                    <img className="icon"
                      src="/assets/images/dark-mode.png"></img>
                  </div>
                  <div className="settings-content">
                    <button onClick={(event)=>{
                      event.stopPropagation(); this.props.dispatch({type: 'UPDATE_GLOBAL_THEME', activeTheme: 'dark'});
                    }} className={this.props.activeTheme === 'dark'? 'selected':''}>Dark Mode</button>
                    <button onClick={(event)=>{
                      event.stopPropagation(); this.props.dispatch({type: 'UPDATE_GLOBAL_THEME', activeTheme: 'light'});
                    }} className={this.props.activeTheme === 'light'? 'selected':''}>Light Mode</button>
                  </div>
                </div>
              </div>
            </div>
            }

            <SearchBox
              searchType="movie"
            ></SearchBox>

          </span>
        </div>
        <PrimaryLightBGContainer className="movie-result-container">
          <MovieListView></MovieListView>
        </PrimaryLightBGContainer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showProfileModal: state.showProfileModal,
    activeTheme: state.activeTheme,
  };
}

export default connect(mapStateToProps)(MovieSearchView);
