const api_key = "814e77a1953559b43a7988e49b08f53b";

const requests = {
     fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
     fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
     fetchTopRated: `/movie/top_rated?api_keys=${api_key}&language=en-US`,
     fetchActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
     fetchHorrorMovies:`/discover/movie?api_key=${api_key}&with_genres=35`,
     fetchComedyMovies:`/discover/movie?api_key=${api_key}&with_genres=27`,
     fetchRomanceMovies:`/discover/movie?api_key=${api_key}&with_genres=10749`,
     fetchDocumentaries: `/discover/movie?api_key=${api_key}&with_genres=99`,
}

export default requests;


