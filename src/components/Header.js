import { Box, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Link, NavLink } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles({
  main___Div: {
    display: "flex",
    height: "2.5rem",
    backgroundColor: "#bf85f2",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 0rem",
    "@media(max-width : 900px)": {
      display: "none",
    },
  },
  Nav___List__Wrap: {},
  Nav___List: {
    margin: "0",
    padding: "0px",
    listStyle: "none",
    display: "flex",
  },
  NavLink___List2: {
    fontFamily: "Playfair Display",
    fontSize: "20px",
    color: "fff",
  },
  NavLink___List: {
    fontFamily: "Playfair Display",
    fontSize: "20px",
    color: "fff",
    textDecoration: "none",
    marginLeft: "100px",
  },

  mob__nav: {
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
        <Box className={classes.main___Div}>
          <Box className={classes.Nav___List__Wrap}>
            <Box className={classes.Nav___List} component={"ul"}>
              <Box component={"li"}>
                <NavLink to="/" className={classes.NavLink___List2}>
                  Overview
                </NavLink>
              </Box>
              <NavLink className={classes.NavLink___List}>Career</NavLink>
              <NavLink className={classes.NavLink___List}>Product</NavLink>
              <NavLink className={classes.NavLink___List}>Solution</NavLink>
              <NavLink className={classes.NavLink___List}>Management</NavLink>
              <NavLink className={classes.NavLink___List}>Assesment</NavLink>
              <NavLink className={classes.NavLink___List}>Application</NavLink>
             
            </Box>
            
          </Box>
        </Box>
        <Box
          sx={{
            display: "none",
            "@media(max-width : 900px)": { display: "block" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "1.5rem 2rem 1rem 2rem",
              alignItems: "center",
              "@media(max-width : 600px)": { padding: "1rem 0rem 0rem 0rem" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
                "@media(max-width : 600px)": {
                  width: "60%",
                  flexDirection: "row-reverse",
                },
              }}
            >
              <Box>
                <Link to="/">
                  {" "}
                  <Typography
                    component={"img"}
                    src="https://www.kriritindia.com/assets/images/logo-color-1.png"
                    width={"100px"}
                  />
                </Link>
              </Box>
              <Box onClick={handleClickOpen}>
                <MenuIcon
                  sx={{ color: "#07484A", cursor: "pointer", fontSize: "30px" }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
          sx={{
            backgroundImage:
              "linear-gradient(45deg, #716449, #ccb483, #716449)",
            "& .MuiPaper-root": {
              backgroundColor: "#bf85f2",
            },
          }}
        >
          <AppBar
            sx={{
              position: "relative",
              backgroundColor: "#bf85f2",
              boxShadow: "none",
            }}
          >
            <Toolbar
              sx={{
                backgroundColor: "#bf85f2",
                boxShadow: "none",
                justifyContent: "right",
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Box sx={{ textAlign: "center", display: "grid", gap: "20px" }}>
            <NavLink className={classes.mob__nav} onClick={handleClose} to="/">
              Overview
            </NavLink>

            <NavLink to="/CreateCar" className={classes.mob__nav}>
              Career
            </NavLink>
            <NavLink className={classes.mob__nav} onClick={handleClose} to="/">
              Product
            </NavLink>

            <NavLink to="/CreateCar" className={classes.mob__nav}>
              Solution
            </NavLink>
            <NavLink className={classes.mob__nav} onClick={handleClose} to="/">
              Management
            </NavLink>

            <NavLink to="/CreateCar" className={classes.mob__nav}>
              Assesment
            </NavLink>
            
          </Box>
        </Dialog>
      
    </Box>
  );
};
export default Header;
