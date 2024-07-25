import React from "react";
import CardLombaHomePage from "./card-lomba";

const LombaPage = () => {
  return (
    <>
      <div className="text-center space-y-4 mt-16">
        <h1 className="font-bold text-3xl">Perlombaan</h1>
        <p className="text-base">Lomba yang terdapat pada The Ace</p>
      </div>
      <CardLombaHomePage />
    </>
  );
};

export default LombaPage;
