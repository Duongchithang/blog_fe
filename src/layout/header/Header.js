import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import { Avatar, Divider, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
function Header() {
  const [dropdownProfile, setDropdownProfile] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  // const avartarCheckLogin = useSelector((state) => state.Post.Login.checkLogin);
   var jsonInfoUser = localStorage.getItem("infoUser");
    var infoUser = JSON.parse(jsonInfoUser);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    if (dropdownProfile) {
      setDropdownProfile(false);
    } else if (dropdownProfile == false) {
      setDropdownProfile(true);
    }
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (value) => {
    if(value == "Logout"){
      localStorage.removeItem("infoUser");
      setTimeout(()=>{
        window.location.reload();
      },2000)
    }
    setAnchorEl(null);
  };

  useEffect(() => {
    
    console.log(infoUser);
  }, []);
  return (
    <div className="container-header">
      <div className="container">
        <div className="container-navbar">
          <div className="navbar navbar-expand-lg ">
            <Link to={"/"} className="navbar-brand logo">
              CHITHANGDEVBLOG
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse row justify-content-lg-end" id="navbarNav">
              <div className="col-sm-12 col-lg-6">
                <ul className="list-item row text-sm-left text-lg-center align-items-center">
                  <li className="nav-item menu-item col-sm-6 col-lg-3">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item menu-item col-sm-6 col-lg-3">
                    <a className="nav-link" href="#">
                      Articles
                    </a>
                  </li>
                  <li
                    className="nav-item dropdown menu-item d-flex align-items-center col-sm-6 col-lg-3"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <a
                      className="nav-link "
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Page
                    </a>
                    <box-icon color="white" name="chevron-down"></box-icon>
                    {/* <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul> */}
                  </li>
                  <li className="nav-item menu-item col-sm-6 col-lg-3">
                    { infoUser == null ? (
                      <Link to="/login" className="nav-link btn-signin">
                        Sign In
                      </Link>
                    ) : (
                      <Avatar style={{ cursor: "pointer" }} onClick={handleClick}>
                        {infoUser.username}
                      </Avatar>
                    )}
                    {dropdownProfile && (
                      <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                          elevation: 0,
                          sx: {
                            overflow: "visible",
                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                            mt: 1.5,
                            "& .MuiAvatar-root": {
                              width: 32,
                              height: 32,
                              ml: -0.5,
                              mr: 1,
                            },
                            "&:before": {
                              content: '""',
                              display: "block",
                              position: "absolute",
                              top: 0,
                              right: 14,
                              width: 10,
                              height: 10,
                              bgcolor: "background.paper",
                              transform: "translateY(-50%) rotate(45deg)",
                              zIndex: 0,
                            },
                          },
                        }}
                        transformOrigin={{ horizontal: "right", vertical: "top" }}
                        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                      >
                       
                        <MenuItem onClick={handleClose}>
                          <Avatar /> My account
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                          <ListItemIcon>
                            <Settings fontSize="small" />
                          </ListItemIcon>
                          Settings
                        </MenuItem>
                        <MenuItem onClick={handleClose("Logout")}>
                          <ListItemIcon>
                            <Logout fontSize="small" />
                          </ListItemIcon>
                          Logout
                        </MenuItem>
                      </Menu>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
