import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

const CardIntroLomba = () => {
  return (
    <>
      <div className="pad-x md:min-h-screen min-h-[70vh] items-center flex">
        <div className="md:p-8 p-6 md:flex border-t-2 border-8 bg-[#182159] border-primary rounded-xl w-full items-center gap-x-8">
          <div className="space-y-4 md:w-8/12">
            <span className="text-[#DCE2F1]">EVENT 1</span>
            <h1
              className={`md:text-6xl text-4xl font-semibold ${orbitron.className}`}
            >
              Perlombaan
            </h1>
            <div className="space-y-4">
              <p className="text-[#DCE2F1]">Kenapa harus ikut?</p>
              <ul>
                <li>
                  ✅ Terdapat berbagai hadiah menarik yang telah kami siapkan.{" "}
                </li>
                <li>
                  ✅ Meningkatkan keterampilanmu dan dapatkan pengalaman
                  berharga.
                </li>
                <li>
                  ✅ Bertemu dengan sesama peserta yang memiliki minat yang sama
                  dan perluas jaringanmu.
                </li>
                <li>
                  ✅ Mendapatkan sertifikat dan pengakuan yang bisa menjadi
                  nilai tambah di portofoliomu.
                </li>
              </ul>
              <p className="text-[#DCE2F1]">
                Jangan sampai ketinggalan kesempatan emas ini! Segera daftarkan
                dirimu dan buktikan bahwa kamu adalah yang terbaik di bidangmu!
              </p>
            </div>
          </div>
          <div>
            <div className="bg-[#0e1333] rounded-xl md:w-[400px] md:h-[400px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardIntroLomba;
