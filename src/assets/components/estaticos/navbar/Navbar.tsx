import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <AppBar position="static" className="navbarContainer">
        <Toolbar className="navbar">
          <Grid container alignItems="center" xs={12} direction="row">
            <Grid item xs={6}>
              <Box style={{ cursor: "pointer" }}>
                <img
                  src="/src/images/IncluiJobs-logo-.png"
                  alt="Logo da IncluiJobs"
                  width={200}
                />
              </Box>
            </Grid>
            <Grid item xs={5}>
              <Box display={"flex"} flexDirection={"row"}>
                <Box
                  className="navbarLinks"
                >
                  <Typography variant="h6" color="inherit">
                    <Link to={"/home"} className="navbarLink">
                      Home
                    </Link>
                  </Typography>
                </Box>
                <Box className="navbarLinks">
                  <Typography variant="h6" color="inherit">
                    <Link to={"/sobre"} className="navbarLink">
                      Sobre
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item></Grid>
            <Box className="logoutLink" paddingX={3}
            >
              <Typography variant="h6" color="inherit">
                <Link to={"/login"} className="navbarLink">
                  Sair
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
