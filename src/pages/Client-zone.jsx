import React from "react";
import { CardClient } from "../components/Cards/Client-Card/card-client";

import "../styles/Pages/Client-Zone/client-zone.css";

export const ClientZone = () => {
  return (
    <div className="clientZone">
      <p className="clientZone__title">Strefa Klienta</p>
      <div className="clientZone__card-box">
        <CardClient />
        <CardClient />
        <CardClient />
        <CardClient />
        <CardClient />
        <CardClient />
        <CardClient />
      </div>
    </div>
  );
};
