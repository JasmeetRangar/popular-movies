import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import helpers from "../helpers/helpers";
import Navbar from "./Navbar";
import Poster from "./Poster";

const useStyles = makeStyles(() => ({
	posterContainer: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
    position: "absolute",
    top: "64px"
	},
}));
const getMovies = async () => {
	return helpers
		.getPopularMovies()
		.then((res) => res)
		.catch((err) => {
			console.log(err);
		});
};
function Homepage() {
	const [movies, setMovies] = useState([]);
	const [moviesReady, setMoviesReady] = useState(false);
	const classes = useStyles();

	useEffect(() => {
		getMovies().then((res) => {
			setMovies(res);
			setMoviesReady(true);
		});
	}, []);

	return (
    <div className={classes.root}>
      <Navbar title="Pop Movies"/>
		<div className={classes.posterContainer}>
			{moviesReady &&
				//   <ImageList sx={{ width: "100vw", height: "100vh" }} cols={2} rowHeight={164}>
				//   {movies.map((movie) => (
				//     <ImageListItem key={movie.id}>
				//       <img
				//         src={helpers.getPosterURL(movie.poster_path)}
				//         alt={movie.original_title}
				//         loading="lazy"
				//       />
				//     </ImageListItem>
				//   ))}
				// </ImageList>
				movies.map((movie) => {
					return <Poster key={movie.id} movie={movie} />;
				})}
		</div>
    </div>
	);
}

export default Homepage;
