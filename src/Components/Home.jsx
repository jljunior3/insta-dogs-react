import React from "react";
import { Feed } from "./Feed/Feed";
import { Loading } from "./Helper/Loading";

export const Home = () => {
  return (
    <section className="container mainContainer">
      <Feed />
    </section>
  );
};
