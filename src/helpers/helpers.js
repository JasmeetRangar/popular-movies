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
const helpers = { getPopularMovies, getPosterURL };
export default helpers;
