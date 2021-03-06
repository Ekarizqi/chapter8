import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import Header from "./LandingPage/Header";
import Form from "./LandingPage/Search"


const BoardUser = () => {
  const [content, setContent] = useState("");
  const { user: currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <>
      {currentUser?(
        <>
        <h3>{content}</h3>
        <Header />
        <Form />
        </>
      ):(
        <h1>Error</h1>
      )
      }
    </>
  );
};

export default BoardUser;
