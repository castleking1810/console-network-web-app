"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { SportsEsports } from "@mui/icons-material";
import Link from "next/link";
import { Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

// navigation bar
export const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // site map to generate routes and dropdowns
  const site_paths = [
    {
      name: "Store",
      path: "/store",
      menu: {
        Featured: "/featured",
        WishList: "/wishlist/[userid]",
      },
    },
    {
      name: "Library",
      path: "/library",
      menu: {
        Home: "/",
        Collections: "/collections",
        Downloads: "/downloads",
      },
    },
  ];

  // account paths to generate dropdown
  const account_paths = [
    {
      name: "profile",
      path: "/account/[account_id]",
    },

    { name: "Settings", path: "/settings" },
    { name: "Logoff", path: "/logoff" },
  ];

  // return component
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* website logo and icon with link to main page */}
          <Link href="/" passHref className="mr-3 text-center">
            <SportsEsports fontSize="large" />
            <Typography
              variant="h6"
              noWrap
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Console Network
            </Typography>
          </Link>
          {/* render main links */}
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: "10" }}
          >
            {site_paths.map((page) => (
              <Link href={page.path} key={page.name} passHref>
                <Button
                  key={page.name}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          <IconButton
            size="medium"
            aria-label="show 17 new notifications"
            color="inherit"
            className="mr-5"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* below component renders logged in user profile with links */}
          <Box sx={{ flexGrow: 0 }}>
            {/* user profile pic */}
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            {/* dropdown for user options - generated from const account_paths */}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {account_paths.map((setting) => (
                <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
