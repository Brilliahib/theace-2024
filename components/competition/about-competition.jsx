import React from "react";

const AboutCompetition = () => {
  return (
    <>
      <div className="bg-[#371A6C] pad-x py-16">
        <div className="md:space-y-8 space-y-6">
          <h1 className="font-bold text-2xl md:text-3xl">
            About The Competition
          </h1>
          <div className="flex grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4 text-justify md:text-base text-sm">
            <p>
              The ACE adalah kegiatan yang diselenggarakan oleh Himpunan
              Mahasiswa Teknik Komputer untuk memperingati hari ulang tahun
              Program Studi Teknik Komputer, Fakultas Teknik, Univeritas
              Diponegoro.
            </p>
            <p>
              Pada tahun ini, The Ace memiliki beberapa rangkaian kegiatan, di
              antaranya Lomba Capture The Flag (CTF), Lomba Essay, dan Lomba
              UI/UX Design. Perlombaan ini merupakan perlombaan tingkat nasional
              yang diperuntukkan bagi pelajar SMA/SMK/sederajat se-Indonesia.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCompetition;
