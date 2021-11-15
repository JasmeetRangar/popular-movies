import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
import helpers from "../helpers/helpers";

const useStyles = makeStyles(() => ({
  poster: {
    width: "50vw",
    aspectRatio: "185/278",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  posterImage: {
    flexShrink: "0",
    minWidth: "100%",
    minHeight: "100%"
  }
}))
function Poster(props) {
	const { movie } = props;
	const classes = useStyles();

	return (
		<Link className={classes.poster} to="/">
			<img
				src={helpers.getPosterURL(movie.poster_path)}
				alt={movie.original_title}
				loading="lazy"
        className={classes.posterImage}
			/>
		</Link>
	);
}

export default Poster;
