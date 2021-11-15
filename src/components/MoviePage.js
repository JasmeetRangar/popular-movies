import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TopBar from "./TopBar";
import helpers from "../helpers/helpers";
import MovieDetails from "./MovieDetails";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "column"
  },
	overview: {
		paddingLeft: "24px",
		paddingRight: "24px",
		fontSize: "14px",
		fontWeight: "500",
		color: "#757575",
	},
	heading: {
		paddingLeft: "24px",
		paddingRight: "24px",
		fontSize: "14px",
		fontWeight: "500",
		color: "#757575",
		letterSpacing: "0.02em",
	},
	trailerButton1: {
		marginLeft: "24px",
		marginRight: "24px",
		fontSize: "14px",
		fontWeight: "500",
		backgroundColor: "#FAFAFA",
		borderRadius: "2px",
		width: "85%",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
    height: "60px"
	},
	trailerButton2: {
		marginLeft: "24px",
		marginRight: "24px",
		fontSize: "14px",
		fontWeight: "500",
		backgroundColor: "#FAFAFA",
		borderRadius: "2px",
		width: "85%",
    display: "flex",
		flexDirection: "row",
		alignItems: "center",
    height: "60px"
	},
  playIcon: {
    marginRight: "30px",
    marginLeft: "30px"
  }
}));

const getMovie = async (id) => {
	return helpers
		.getMovie(id)
		.then((res) => res)
		.catch((err) => {
			console.log(err);
		});
};
function MoviePage(props) {
	const id = props.match.params.id;
	const [movie, setMovie] = useState([]);
	const [movieReady, setMovieReady] = useState(false);

	const classes = useStyles();
	useEffect(() => {
		getMovie(id).then((res) => {
			setMovie(res);
			setMovieReady(true);
		});
	}, [id]);

	return (
		<div className={classes.root}>
			<Navbar backButton={true} title="Movie Details" />
			{movieReady && (
				<div className={classes.detailsContainer}>
					<TopBar movieName={movie.original_title} />
					<MovieDetails
						poster={movie.poster_path}
						year={helpers.getReleaseYear(movie.release_date)}
						runtime={movie.runtime}
						rating={movie.vote_average}
					/>
					<div className={classes.overview}>{movie.overview}</div>
					<div className={classes.heading}>TRAILERS</div>
					<button className={classes.trailerButton1}>
						<PlayCircleOutlineIcon className={classes.playIcon}/> Play trailer 1
					</button>
					<button className={classes.trailerButton2}>
						<PlayCircleOutlineIcon className={classes.playIcon}/> Play trailer 2
					</button>
				</div>
			)}
		</div>
	);
}

export default MoviePage;
