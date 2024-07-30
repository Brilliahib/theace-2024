import { ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const CardAlur = () => {
  const caption = [
    {
      step: "Step 1",
      time: "10 Minutes",
      title: "Pendaftaran",
      information:
        "Kunjungi link dibawah dan isi formulir pendaftaran dengan informasi lengkapmu. Pastikan data yang kamu masukkan benar dan valid.",
      button: (
        <Button className="flex flex-row gap-2 rounded-md font-bold text-black h-12">
          Daftar Sekarang
          <ArrowRight color="#000000" />
        </Button>
      ),
    },
    {
      step: "Step 2",
      title: "Pelaksanaan Lomba",
      information:
        "Setelah mendaftar, persiapkan diri untuk mengikuti pelaksanaan lomba sesuai dengan jenis lomba yang kalian pilih dan pastikan untuk mengecek timeline yang telah ditentukan.",
    },
    {
      step: "Step 3",
      title: "Pengumuman Pemenang",
      information:
        "Nantikan pengumuman pemenang sesuai jenis lomba yang diikuti. Agar tidak ketinggalan informasi mengenai siapa yang menang, pastikan untuk memantau sosial media The Ace.",
    },
  ];
  return (
    <div className="overflow-x-auto pad-x no-scrollbar md:mr-0 mr-4">
      <div className="flex md:gap-8 gap-6 w-full">
        {caption.map((item, index) => (
          <Card
            key={index}
            className="bg-[#371A6C] md:p-8 p-6 rounded-md flex flex-col space-y-4 md:w-full  min-w-[300px]"
          >
            <div>
              <h1>{item.step}</h1>
              {item.time && <h1 className="text-primary">{item.time}</h1>}
            </div>
            <div className="flex justify-between">
              <h1 className="font-bold md:text-2xl text-xl">{item.title}</h1>
            </div>
            <p className="md:text-base text-sm">{item.information}</p>
            {item.button && <div>{item.button}</div>}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardAlur;
