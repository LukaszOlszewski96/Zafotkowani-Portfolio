import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { navbarLinksLeft, navbarLinksRight } from "./NavbarData/NavbarData";
import { Link } from "react-router-dom";
import "../styles/Navbar/Navbar.css";
import { Button, Menu, MenuItem } from "@mui/material";
import { portfolioLinks } from "./Buttons/DropdownData/DropDownData";

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ boxShadow: 0 }} color="transparent" position="static">
        <div className="menu__conteiner">
          <Toolbar className="menu__box">
            {navbarLinksLeft.map((item) =>
              item.title === "PORTFOLIO" ? (
                <div className={item.className}>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    key={item.key}
                    className="menu__link__portfolio"
                  >
                    {item.title}
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    {portfolioLinks.map((item, index) => (
                      <MenuItem key={index} onClick={handleClose}>
                        <Link className={item.className} to={item.url}>
                          {item.title}
                        </Link>
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              ) : (
                <Link
                  key={item.key}
                  className={item.className}
                  to={item.url}
                  // onClick={item.title === "PORTFOLIO" && hover}
                >
                  {item.title}
                </Link>
              )
            )}
          </Toolbar>
          <Link to="/">
            <img className="menu__logo" src="images\Logo.png" alt="Logo" />
          </Link>
          <Toolbar className="menu__box">
            {navbarLinksRight.map((item) => (
              <Link key={item.key} className={item.className} to={item.url}>
                {item.title}
              </Link>
            ))}
          </Toolbar>
        </div>
      </AppBar>
    </Box>
  );
};
