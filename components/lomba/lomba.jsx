import React from "react";
import CardLombaHomePage from "./card-lomba";

const LombaPage = () => {
  return (
    <>
      <div id="lomba" className="text-center md:space-y-4 space-y-2 pt-16">
        <h1 className="font-bold md:text-3xl text-xl">Perlombaan</h1>
        <p className="md:text-base text-sm">Lomba yang terdapat pada The Ace</p>
      </div>
      <CardLombaHomePage />
    </>
  );
};

export default LombaPage;
