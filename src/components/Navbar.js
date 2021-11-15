import React from "react";
import { makeStyles } from "@mui/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
	nav: {
		width: "100vw",
		height: "64px",
		backgroundColor: "#212121",
		color: "white",
		fontSize: "20px",
		fontWeight: 600,
		paddingLeft: "20px",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
  backButtonLink: {
    textDecoration: "none",
    margin: "5px",
  },
	moreButton: {
		marginRight: "40px"
	}
}));

function Navbar(props) {
	const classes = useStyles();
	const { title, backButton } = props;
	return (
		<div className={classes.nav}>
			<p className={title}>
				{backButton && 
        <Link className={classes.backButtonLink} to="/">
        <ArrowBackIcon />
        </Link>
        }
				{title}
			</p>
			<MoreVertIcon className={classes.moreButton}/>
		</div>
	);
}

export default Navbar;
