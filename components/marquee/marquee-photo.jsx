import Image from "next/image";

const images = [
  "/images/1.jpg", // Ganti dengan URL gambar asli
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
];

const Marquee = () => {
  return (
    <div className="group flex gap-x-4 overflow-hidden p-2">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="flex shrink-0 animate-marquee flex-row justify-around gap-6"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex min-w-64 flex-col gap-y-3 overflow-hidden rounded-lg"
              >
                <Image
                  src={image}
                  width={400}
                  height={200}
                  className="md:w-[500px] md:h-[300px] w-[400px] h-[250px] object-cover"
                />
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Marquee;
