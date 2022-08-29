import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import { logOut } from "../../redux/authSlice";

const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  let headerText;

  switch (location.pathname) {
    case "/addloads":
      headerText = "Add new load";
      break;
    case "/myoffers":
      headerText = "My offers";
      break;
    case "/myloads":
      headerText = "My loads";
      break;
    default:
      headerText = "Available loads";
  }

  const logout = () => {
    dispatch(logOut());
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <header className="bg-white shadow">
      <div className="flex flex-col md:flex-row items-center justify-between py-6 px-4 sm:px-6 lg:px-8 gap-4">
        <div>
          <h1 className="text-3xl tracking-tight font-bold text-gray-900">
            {headerText}
          </h1>
        </div>
        <>
          {user ? (
            <div className="flex items-center gap-4">
              <h5>Welcome, {user.result.name}</h5>

              <Button onClick={logout} variant="contained" color="error">
                Logout
              </Button>
            </div>
          ) : (
            <Button
              onClick={() => navigate("/auth")}
              variant="contained"
              color="primary"
            >
              Sign Up
            </Button>
          )}
        </>
      </div>
    </header>
  );
};

export default Header;
