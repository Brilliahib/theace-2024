import React from "react";
import CardAlur from "./card-alur";

const Alur = () => {
  return (
    <>
      <div className="py-4">
        <div className="text-center pad-x space-y-4 py-12 mb-4">
          <h1 className="font-bold text-3xl">Alur Perlombaan</h1>
          <p className="text-base">
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
