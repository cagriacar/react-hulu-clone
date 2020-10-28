const API_KEY = "";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchTrend: `/trending/all/week?api_key=${API_KEY}&language=tr-TR`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=tr-TR`,
  fetchAksiyon: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchKomedi: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchKorku: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomantik: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchGizem: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchBilimKurgu: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchMacera: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchAnimasyon: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};
