import React from "react";
import CardAlur from "./card-alur";

const Alur = () => {
  return (
    <>
      <div className="py-4">
        <div className="text-center pad-x md:space-y-4 space-y-2 py-12 mb-4">
          <h1 className="font-bold md:text-3xl text-xl">Alur Perlombaan</h1>
          <p className="md:text-base text-sm">
            Ikuti alur perlombaan dan jadilah bagian dari perlombaan luar biasa
            ini!
          </p>
        </div>
        <CardAlur />
      </div>
    </>
  );
};

export default Alur;
