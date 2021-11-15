import React from "react";
import { makeStyles } from "@mui/styles";
import helpers from "../helpers/helpers";

const useStyles = makeStyles(() => ({
  root: {
    padding: "20px",
    display: "flex",
    flexDirection: "row",
  },
  posterImage: {
    margin: "5px"
  },
  rightHalf: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "10px"
  },
  favoriteButton: {
    background: "#746A64",
    color: "white",
    width: "196px",
    height: "40px",
    marginTop: "5px"
  }
}));

function MovieDetails (props) {
  const {poster, year, runtime, rating} = props;
	const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <img
				src={helpers.getSmallPosterURL(poster)}
				alt={"poster"}
        className={classes.posterImage}
			/>
      <div className={classes.rightHalf}>
      <div style={{fontSize: "20px"}}>{year}</div>
      <div style={{fontSize: "14px", fontStyle: "italic"}}>{runtime} mins</div>
      <div style={{fontSize: "14px", fontWeight: "700", marginTop: "30px"}}>{rating} mins</div>
      <button className={classes.favoriteButton}>Add to Favorite</button>
      
      </div>
    </div>
  )
}
export default MovieDetails;