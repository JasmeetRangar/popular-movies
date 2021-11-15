import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  bar: {
    backgroundColor: "#746A64",
    color: "white",
		width: "100vw",
		height: "64px",
    fontSize: "20px",
		fontWeight: 600,
		paddingLeft: "20px",
		paddingRight: "20px",
    display: "flex",
    alignItems: "center"
  }
}));
function TopBar(props) {
  const {movieName} = props
	const classes = useStyles();

  return (
    <div className={classes.bar}>
      {movieName}
    </div>
  )
}
export default TopBar;