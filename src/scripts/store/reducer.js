import initialState from './models/store-model/globalMovieSearchState';
import utilityService from './../services/utility.service';

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_SEARCH_RESULTS':
      return {...state, movieSearchRecords: action.data.Search, totalResults: action.data.totalResults};
      break;
    case 'SEARCH_TEXT_UPDATE':
      switch (action.payload.searchType) {
        case 'movie':
          if (String(action.payload.value).length>2) {
            utilityService.postHttpRequest('/get-search-details', 'post', {'Content-Type': 'application/json'}, {...{'searchKey': action.payload.value, 'page': 1}}, action.dispatchInfo);
          } else {
            return {...state, searchTerm: action.payload.value, movieSearchRecords: [], totalResults: 0, currentPage: 0};
          }
          break;
      }
      return {...state, searchTerm: action.payload.value, currentPage: 0};
      break;
    case 'SEARCH_PAGE_UPDATE':
      if (String(action.payload.value).length>2) {
        utilityService.postHttpRequest('/get-search-details', 'post', {'Content-Type': 'application/json'}, {...{'searchKey': action.payload.value, 'page': action.payload.requestPage}}, action.dispatchInfo);
      } else {
        return {...state, searchTerm: action.payload.value, movieSearchRecords: [], totalResults: 0, currentPage: 0};
      }

      return {...state, searchTerm: action.payload.value, currentPage: action.payload.requestPage-1};
      break;
    case 'MOVIE_DETAILS_REQUEST':
      utilityService.postHttpRequest('/get-movie-details', 'post', {'Content-Type': 'application/json'}, {...{'id': action.payload.id}}, action.dispatchInfo);
      return state;
      break;
    case 'MOVIE_DETAILS_RESPONSE':
      return {...state, activeMovieDetail: action.data, showActiveMovieDetail: true};
      break;
    case 'MOVIE_DETAILS_CLOSE':
      return {...state, activeMovieDetail: undefined, showActiveMovieDetail: false};
      break;
    case 'UPDATE_MOVIE_SEARCH_VIEW':
      return {...state, viewType: action.viewType};
      break;
    case 'UPDATE_GLOBAL_THEME':
      return {...state, activeTheme: action.activeTheme};
      break;
    case 'UDPATE_SHOW_PROFILE_STATUS':
      return {...state, showProfileModal: action.showProfileModal};
      break;
    default:
      return state;
      break;
  }
}

export default movieReducer;
