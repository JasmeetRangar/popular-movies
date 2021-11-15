import React from "react";
import { makeStyles } from "@mui/styles";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const useStyles = makeStyles(() => ({
	nav: {
		position: "absolute",
		width: "95vw",
    height: "64px",
		left: "0px",
		top: "0px",
    backgroundColor: "#212121",
    color: "white",
    fontSize: "20px",
    fontWeight: 600,
    paddingLeft: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
	},
  
}));

function Navbar(props) {
	const classes = useStyles();
  const {title} = props;
  return (
    <div className={classes.nav} > 
     <p className={title}>{title}</p>
    <MoreVertIcon />
    </div>
  )
}

export default Navbar;