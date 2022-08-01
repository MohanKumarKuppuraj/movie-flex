const initialState = {
  'searchTerm': '',
  'genreType': '',
  'viewType': 'tile',
  'perPage': 10,
  'movieSearchRecords': [],
  'activeMovieDetail': undefined,
  'showActiveMovieDetail': false,
  'noResultsText': '',
  'totalResults': 0,
  'currentPage': 0,
  'showProfileModal': false,
  'activeTheme': 'dark',
  'themeSettings': {
    'dark': {
      'primaryBackground': '#1D1D1D',
      'primaryLightBackground': '#2C2C2C',
      'iconColor': 'white',
      'color': '#ffffff',
    },
    'light': {
      'primaryBackground': '#FFFFFF',
      'primaryLightBackground': '#F1F1F1',
      'iconColor': 'black',
      'color': '#000000',
    },
  },
};

export default initialState;
