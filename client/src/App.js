import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//#3. Menuju ke tempat komponent tersebut
import Login from "./components/Login";
import Register from "./components/Register";

import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import ProductListing from "./components/User/containers/ProductListing";
import ProductDetail from "./components/User/containers/ProductDetail";
import CarList from "./components/Admin/CarList";


import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";
import logo from "./assets/logo.png";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    <Router history={history}>
      <div>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <Link to={"/"} className="navbar-brand">
            <img src={logo} alt="logo" />
          </Link>
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Our Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Why Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Testimonial
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                FAQ
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}

{currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            //# 1. First Attenttion - false result from currentUser null or not
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

               {/* 1. link navbar sign up/ register */}

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  <div className="btn btn-success">
                    Register
                  </div>
                </Link>
              </li>
            </div>
          )}
          </div>
          
        </nav>

        <div className="container mt-3" style={{padding: "0px"}}>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            {/* #2. 2nd Attention */}
            {/* route ke component register */}
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />

            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path='/product' component={ProductListing} />
            <Route path='/product/:productId' component={ProductDetail} />
            <Route path='/listcar' component={CarList} />

          </Switch>
        </div>

        {/* <AuthVerify logOut={logOut}/> */}
      </div>
    </Router>
  );
};





export default App;
