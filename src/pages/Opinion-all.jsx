import React from "react";

import Avatar from "@mui/material/Avatar";

import "../styles/Pages/Opinion-all/opinion-all.css";

export const OpinionAll = () => {
  return (
    <div className="opinionAll">
      <p className="opinionAll__title">Opinie naszych klientów</p>
      <div className="opinionAll__opinions-box">
        <div className="opinionAll__card">
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            className="opinionAll__card__avatar"
          />
          <p className="opinionAll__card__name">Jan Kowalski</p>
          <div className="opinionAll__card__text-box">
            <p className="opinionAll__card__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
