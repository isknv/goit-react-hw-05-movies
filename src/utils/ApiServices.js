import axios from 'axios';

const API_KEY = '1d7fb67928c0be1237a2da4e51e9ed0f';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchData(url) {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

const api = {
  currentPage: 1,
  allPages: 1,

  increasePage() {
    this.currentPage += 1;
  },

  resetPage() {
    this.currentPage = 1;
  },

  setAllPages(page) {
    this.allPages = page;
  },

  fetchMovieByQuery(query) {
    return fetchData(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${this.currentPage}`,
    );
  },

  fetchTrendingMovies() {
    return fetchData(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${this.currentPage}`,
    );
  },

  fetchMovieById(id) {
    return fetchData(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  },

  fetchMovieCast(id) {
    return fetchData(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
  },

  fetchMovieReviews(id) {
    return fetchData(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
  },
};

export default api;
