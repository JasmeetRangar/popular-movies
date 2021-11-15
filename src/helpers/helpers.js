import axios from "axios";

const key = process.env.REACT_APP_API_KEY;

const getPopularMovies = async () => {
	const response = await axios
		.get(`http://api.themoviedb.org/3/movie/popular?api_key=${key}`)
		.then((res) => {
			return res.data.results;
		})
		.catch((err) => {
			console.log(err);
		});
	return response;
};

const getPosterURL = (posterPath) => {
	return `https://image.tmdb.org/t/p/w185${posterPath}`;
};

const getSmallPosterURL = (posterPath) => {
	return `https://image.tmdb.org/t/p/w92${posterPath}`;
};

const getMovie = async (id) => {
  console.log("here")
  const response = await axios
		.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`)
		.then((res) => {
      console.log("response", res.data)
			return res.data;
		})
		.catch((err) => {
			console.log(err);
		});
	return response;
}

const getReleaseYear = (date) => {
  return date.split("-")[0]
}
const helpers = { getPopularMovies, getPosterURL, getMovie, getSmallPosterURL, getReleaseYear };
export default helpers;
