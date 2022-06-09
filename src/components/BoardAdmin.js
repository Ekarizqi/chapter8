import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import CarList from "./Admin/CarList";

const BoardAdmin = () => {
  const [content, setContent] = useState("");
  const { user: currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    UserService.getAdminBoard().then(
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
      <div>
        {/* <Sidenav/> */}
        <div className="">
          <header className="jumbotron">
            <h3>{content}</h3>
          </header>
          <CarList />
        </div>
      </div>
    ):(
      <h1>Error</h1>
    )
    }
    </>
  );
};

export default BoardAdmin;
