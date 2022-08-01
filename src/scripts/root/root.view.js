import React from 'react';
import ReactDOM from 'react-dom';
import Header from './../components/header/header.view.component';
import MovieSearchView from './../components/movie-search-view/movie.search.view.component';
import movieStore from './../store/store';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import './styles/root.style.css';
import {PrimaryBGContainer} from './../theme';
class MMTRoot extends React.Component {
  constructor(props) {
    super(props);
    this.state=movieStore.getState();
  }

  componentDidMount() {
    movieStore.subscribe(()=>{
      this.setState(movieStore.getState());
    });
  }

  render() {
    return (
      <ThemeProvider theme={this.state.themeSettings[this.state.activeTheme]}>
        <Provider store={movieStore}>
          <PrimaryBGContainer className="content-container">
            <Header></Header>
            <MovieSearchView></MovieSearchView>
          </PrimaryBGContainer>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default MMTRoot;
