import React from "react";
import "../styles/Pages/Opinion/Opinion.css";

export const Opinion = () => {
  return (
    <div className="opinion__container">
      <p className="title__section__box">Opinie naszych klientów</p>
      <div className="opinion__box">
        <div className="opinion__card">
          <div className="opinion__box__text">
            <p className="opinion__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <p className="opinion__client__name">Łukasz</p>
          <p className="opinion__event">Chrzest Święty</p>
        </div>
        <div className="opinion__card">
          <div className="opinion__box__text">
            <p className="opinion__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <p className="opinion__client__name">Beata</p>
          <p className="opinion__event">Sesja Weselna</p>
        </div>
        <div className="opinion__card">
          <div className="opinion__box__text">
            <p className="opinion__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <p className="opinion__client__name">Magdalena</p>
          <p className="opinion__event">Wieczór Panieński</p>
        </div>
      </div>
    </div>
  );
};
