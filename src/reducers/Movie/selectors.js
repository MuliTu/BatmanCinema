export const getMovies = (state) => {return state.list};

export const getCurrentMovie = (state) => {return state.currentMovie};

export const getMovieTitles = (state) => {return state.list.map(movie => movie.title)};